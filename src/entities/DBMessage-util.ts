import { areJidsSameUser, ButtonReplyInfo, extractMessageContent, getContentType, isJidGroup, jidDecode, jidNormalizedUser, MessageType, normalizeMessageContent, toNumber, unixTimestampSeconds, WAContextInfo, WAGenericMediaMessage, WAMessage, WAMessageContent, WAMessageKey, WAMessageStatus, WAMessageStubType, WAProto, shouldIncrementChatUnread, isRealMessage, getChatId } from 'baileys'
import { MessageAction, MessageActionType, Attachment, AttachmentType, MessageBehavior, MessageButton, MessageLink, MessagePreview, MessageReaction, MessageSeen } from '@textshq/platform-sdk'
import type { ValueTransformer } from 'typeorm'
import { serialize, deserialize } from 'v8'
import type { ButtonCallbackType, FullBaileysMessage } from '../types'
import { attachmentUrl, getDataURIFromBuffer, isHiddenProtocolMessage, mapMessageID } from '../utils/generics'
import { MENTION_START_TOKEN, MENTION_END_TOKEN } from '../utils/text-attributes'

const participantAdded = (message: WAMessage) =>
  (message.participant
    ? `{{${jidNormalizedUser(message.participant)}}} added ${message.messageStubParameters!.map(p => `{{${jidNormalizedUser(p)}}}`).join(', ')} to this group`
    : `${message.messageStubParameters!.map(p => `{{${jidNormalizedUser(p)}}}`).join(', ')} was added to this group`)

const numberToBigInt = (number: number | Long) => BigInt(number.toString())

const isExpiredInvite = (invite: WAProto.Message.IGroupInviteMessage) => {
  const expirationS = toNumber(invite.inviteExpiration!) || 0
  return expirationS < unixTimestampSeconds()
}

const getEphemeralMessageSettingChangedText = (exp: number, actor: string) => {
  if (exp) {
    const expDays = Math.floor(exp / (60 * 60 * 24))
    return actor
      ? `{{${actor}}} has turned on disappearing messages. New messages will disappear from this chat after ${expDays} days.`
      : `Disappearing messages were turned on. New messages will disappear from this chat after ${expDays} days.`
  }
  return actor
    ? `{{${actor}}} turned off disappearing messages`
    : 'Disappearing messages were turned off'
}

const getDisappearingModeMessageText = (exp: number, actor: string) => {
  const expDays = Math.floor(exp / (60 * 60 * 24))
  // TODO: change to "You use" when self and make "X days" more granular / human friendly
  return `{{${actor}}} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat ${expDays} days after they're sent.`
}

export const PRE_DEFINED_MESSAGES: { [k: number]: string | ((m: WAMessage) => string) } = {
  [WAMessageStubType.CIPHERTEXT]: '⌛️ Waiting for this message. This may take a while',

  [WAMessageStubType.E2E_ENCRYPTED]: '🔒 Messages you send to this chat and calls are secured with end-to-end encryption',
  [WAMessageStubType.E2E_ENCRYPTED_NOW]: '🔒 Messages you send to this chat and calls are now secured with end-to-end encryption',
  // This chat is with the official business account of "X". Click for more info.
  // [AFTER CLICK] WhatsApp has verified that this is the official business account of "X".
  [WAMessageStubType.BIZ_INTRO_BOTTOM]: 'This chat is with an official business account',
  [WAMessageStubType.BIZ_INTRO_TOP]: 'This chat is with an official business account',
  // This chat is with the official business account of "X". Click for more info.
  [WAMessageStubType.BIZ_TWO_TIER_MIGRATION_TOP]: 'This chat is with an official business account',
  // X registered as a business account, but WhatsApp hasn’t verified their name yet.
  [WAMessageStubType.BIZ_TWO_TIER_MIGRATION_BOTTOM]: 'This chat is with a business account',
  [WAMessageStubType.BLUE_MSG_SELF_PREMISE_UNVERIFIED]: 'This chat is with a business account',
  // This account was previously a business account but has now registered as a standard account and may no longer belong to the business.
  [WAMessageStubType.BIZ_MOVE_TO_CONSUMER_APP]: 'This business account has now registered as a standard account',
  // This chat is with the verified business account for "X". Click for more info.
  // [AFTER CLICK] WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account".
  [WAMessageStubType.VERIFIED_HIGH]: 'This chat is with a verified business account',

  [WAMessageStubType.CALL_MISSED_VIDEO]: 'Missed video call',
  [WAMessageStubType.CALL_MISSED_VOICE]: 'Missed voice call',
  [WAMessageStubType.CALL_MISSED_GROUP_VIDEO]: 'Missed group video call',
  [WAMessageStubType.CALL_MISSED_GROUP_VOICE]: 'Missed group voice call',

  [WAMessageStubType.GROUP_PARTICIPANT_PROMOTE]: '{{{{0}}}} is now an admin',
  [WAMessageStubType.GROUP_PARTICIPANT_DEMOTE]: '{{{{0}}}} is no longer an admin',

  [WAMessageStubType.GROUP_CREATE]: m => `${m.key.fromMe ? 'You' : '{{sender}}'} created this group`,
  [WAMessageStubType.GROUP_DELETE]: 'This chat has been closed',
  [WAMessageStubType.GROUP_CHANGE_INVITE_LINK]: m => `${m.key.fromMe ? 'You' : '{{sender}}'} reset this group's invite link`,
  [WAMessageStubType.BROADCAST_CREATE]: '{{sender}} created this broadcast list',
  [WAMessageStubType.BROADCAST_REMOVE]: '{{sender}} was removed from this broadcast list',
  [WAMessageStubType.BROADCAST_ADD]: '{{sender}} was added to this broadcast list',

  [WAMessageStubType.E2E_IDENTITY_CHANGED]: '{{{{0}}}}\'s security code changed',
  [WAMessageStubType.E2E_DEVICE_CHANGED]: '{{{{0}}}}\'s security code changed',
  [WAMessageStubType.E2E_IDENTITY_UNAVAILABLE]: 'Security code notifications are no longer available for this chat',
  [WAMessageStubType.BIZ_PRIVACY_MODE_INIT_BSP]: 'This business works with other companies to manage this chat',
  [WAMessageStubType.BIZ_PRIVACY_MODE_TO_BSP]: 'This business is now working with other companies to manage this chat',
  [WAMessageStubType.BIZ_PRIVACY_MODE_INIT_FB]: 'This business uses a secure service from the Facebook company to manage this chat',
  [WAMessageStubType.BIZ_PRIVACY_MODE_TO_FB]: 'This business is now using a secure service from the Facebook company to manage this chat',
  [WAMessageStubType.GENERIC_NOTIFICATION]: '{{0}}',

  [WAMessageStubType.GROUP_PARTICIPANT_ADD]: participantAdded,
  [WAMessageStubType.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: participantAdded,

  [WAMessageStubType.PAYMENT_ACTION_SEND_PAYMENT_INVITATION]: '{{sender}} notified {{{{0}}}} that you are trying to send a payment',
  [WAMessageStubType.PAYMENT_ACTION_SEND_PAYMENT_REMINDER]: 'You can now send {{{{0}}}} a payment.',

  [WAMessageStubType.INDIVIDUAL_CHANGE_NUMBER]: message => `{{${message.key.remoteJid}}} changed their phone number to a new number {{{{0}}}}`,
  [WAMessageStubType.GROUP_PARTICIPANT_CHANGE_NUMBER]: '{{sender}} changed their phone number to a new number {{{{0}}}}',
  [WAMessageStubType.CHANGE_EPHEMERAL_SETTING]: message => getEphemeralMessageSettingChangedText(+message.messageStubParameters![0], message.messageStubParameters![1]),
  [WAMessageStubType.DISAPPEARING_MODE]: message => getDisappearingModeMessageText(+message.messageStubParameters![0], message.messageStubParameters![1]),

  [WAMessageStubType.GROUP_CHANGE_DESCRIPTION]: '{{sender}} changed the group description',
  [WAMessageStubType.GROUP_PARTICIPANT_REMOVE]: '{{sender}} removed {{{{0}}}} from this group',
  [WAMessageStubType.GROUP_CHANGE_SUBJECT]: '{{sender}} changed the group subject to "{{0}}"',
  [WAMessageStubType.GROUP_CHANGE_ICON]: '{{sender}} changed this group\'s icon',
  [WAMessageStubType.GROUP_PARTICIPANT_INVITE]: '{{sender}} joined using this group\'s invite link',

  [WAMessageStubType.GROUP_PARTICIPANT_LEAVE]: message =>
    `${message.messageStubParameters!.map(p => `{{${p}}}`).join(', ')} left`,
  [WAMessageStubType.GROUP_CHANGE_RESTRICT]: message => {
    if (message.messageStubParameters![0] === 'on') return '{{sender}} changed this group\'s settings to allow only admins to edit this group\'s info'
    return '{{sender}} changed this group\'s settings to allow all participants to edit this group\'s info'
  },
  [WAMessageStubType.GROUP_CHANGE_ANNOUNCE]: message => {
    if (message.messageStubParameters![0] === 'on') return '📢 {{sender}} changed this group\'s settings to allow only admins to send messages to this group'
    return '📢 {{sender}} changed this group\'s settings to allow all participants to send messages to this group'
  },
  [WAMessageStubType.BLOCK_CONTACT]: message =>
    (message.messageStubParameters![0] ? 'You blocked this contact' : 'You unblocked this contact'),
  [WAMessageStubType.COMMUNITY_CREATE]: message => `{{${message.participant}}} created the community "${message.messageStubParameters![1]}"`,
  [WAMessageStubType.COMMUNITY_LINK_SIBLING_GROUP]: message => `{{${message.participant}}} added the group "${message.messageStubParameters![1]}"`,
  [WAMessageStubType.COMMUNITY_UNLINK_SIBLING_GROUP]: message => `{{${message.participant}}} removed the group "${message.messageStubParameters![1]}"`,
  [WAMessageStubType.COMMUNITY_PARTICIPANT_PROMOTE]: message => `{{${message.messageStubParameters![0]}}} is now a community admin`,
  [WAMessageStubType.COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS]: 'Everyone in this community can now add groups',
  [WAMessageStubType.COMMUNITY_LINK_PARENT_GROUP]: 'This group was added to the community "{{1}}"',
  [WAMessageStubType.SUB_GROUP_INVITE_RICH]: 'You joined a group via invite in the community: "{{1}}"',
  [WAMessageStubType.COMMUNITY_INVITE_RICH]: 'Welcome to the community! Admins will send all important updates here.',

  [WAMessageStubType.ADMIN_REVOKE]: 'This message was deleted',
  // [WAMessageStubType.BIZ_BOT_1P_MESSAGING_ENABLED]: '', // Unsupported by Baileys types
  // [WAMessageStubType.BIZ_BOT_3P_MESSAGING_ENABLED]: '', // Unsupported by Baileys types
  [WAMessageStubType.BIZ_CHAT_ASSIGNMENT]: 'Chat assigned to agent',
  [WAMessageStubType.BIZ_CHAT_ASSIGNMENT_UNASSIGN]: 'Chat was unassigned',
  [WAMessageStubType.BIZ_NAME_CHANGE]: 'This business changed its name',
  [WAMessageStubType.BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP]: 'This chat is now with the official business account of "{{0}}"',
  [WAMessageStubType.BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM]: 'This chat is no longer with the official business account of "{{0}}',
  [WAMessageStubType.BLUE_MSG_BSP_FB_TO_BSP_PREMISE]: '{{0}} no longer uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_BSP_FB_TO_SELF_FB]: '{{0}} now only uses Facebook to manage its WhatsApp conversations. Click to learn how this changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_BSP_FB_TO_SELF_PREMISE]: '{{0}} no longer uses Facebook or other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_BSP_FB_UNVERIFIED]: 'This chat is with a business account that uses Facebook and other companies to manage its WhatsApp conversations. Click to learn more about privacy in this chat',
  [WAMessageStubType.BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED]: '{{0}} is now registered as an official business account. This business no longer uses Facebook to manage its WhatsApp conversations.',
  [WAMessageStubType.BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED]: '{{0}} is now a verified account and only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED]: '{{0}} is now a verified account. This business no longer uses Meta or other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_BSP_FB_VERIFIED]: 'This chat is with {{0}}\'s verified account. This account uses Meta and other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED]: '{{0}} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED]: '{{0}} is no longer a verified account and now only uses Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED]: '{{0}} is no longer a verified account and no longer uses Meta or other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE]: '{{0}} no longer uses other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_BSP_PREMISE_UNVERIFIED]: 'This chat is with a business account that uses other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED]: '{{0}} is now a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_BSP_PREMISE_VERIFIED]: 'This chat is with {{0}}\'s verified account. This account uses other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED]: '{{0}} is no longer a verified account and no longer uses other companies to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED]: '{{0}} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED]: '{{0}} is now registered as a business account that uses other companies to manage its WhatsApp conversations.chat',
  [WAMessageStubType.BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED]: '{{0}} is now registered as a business account that uses Facebook to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED]: '{{0}} is now registered as a business account',
  [WAMessageStubType.BLUE_MSG_SELF_FB_TO_BSP_PREMISE]: '{{0}} now uses other companies instead of Facebook to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_SELF_FB_TO_SELF_PREMISE]: '{{0}} no longer uses Facebook to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_SELF_FB_UNVERIFIED]: 'This chat is with a business account that uses Facebook to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED]: '{{0}} is now a verified account and now uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED]: '{{0}} is now a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_SELF_FB_VERIFIED]: 'This chat is with the official account of {{0}}. This account uses Facebook to manage its WhatsApp conversations.',
  [WAMessageStubType.BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED]: '{{0}} is no longer a verified account. The account uses other companies instead of Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED]: '{{0}} is no longer a verified account and no longer uses Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE]: '{{0}} now uses other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_SELF_PREMISE_VERIFIED]: 'This chat is with {{0}}\'s verified account',
  [WAMessageStubType.BLUE_MSG_TO_BSP_FB]: '{{0}} now uses Facebook and other companies to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_TO_CONSUMER]: '{{0}} is no longer registered as a business account',
  [WAMessageStubType.BLUE_MSG_TO_SELF_FB]: '{{0}} now uses Facebook to manage its WhatsApp conversations',
  [WAMessageStubType.BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED]: '{{0}} is now a verified account that uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat.',
  [WAMessageStubType.BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED]: '{{0}} is now a verified account that uses other companies to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED]: '{{0}} is now a verified account that uses Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_UNVERIFIED_TO_VERIFIED]: '{{0}} is now a verified account',
  [WAMessageStubType.BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED]: '{{0}} is no longer a verified account and now uses Meta and other companies to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED]: '{{0}} is no longer a verified account and now uses other companies to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED]: '{{0}} is no longer a verified account and now uses Meta to manage its WhatsApp conversations. This changes privacy in this chat',
  [WAMessageStubType.BLUE_MSG_VERIFIED_TO_UNVERIFIED]: '{{0}} is no longer a verified account',
  [WAMessageStubType.CAG_INVITE_AUTO_ADD]: '',
  [WAMessageStubType.CAG_INVITE_AUTO_JOINED]: '',
  [WAMessageStubType.CAG_MASKED_THREAD_CREATED]: 'This chat has added privacy for your phone number',
  // [WAMessageStubType.CHANGE_USERNAME]: '', // Unsupported by Baileys types
  [WAMessageStubType.CHAT_PSA]: 'This is an official account of WhatsApp',
  [WAMessageStubType.COMMUNITY_CHANGE_DESCRIPTION]: 'A participant changed the community description',
  [WAMessageStubType.COMMUNITY_INVITE_AUTO_ADD_RICH]: 'Welcome to the community!',
  [WAMessageStubType.COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL]: 'New participants need admin approval to join this group', // TODO: review
  [WAMessageStubType.COMMUNITY_LINK_PARENT_GROUP_RICH]: m => (m.key.fromMe ? 'You added this group to a community' : '{{sender}} added this group to a community'), // TODO: review
  // [WAMessageStubType.COMMUNITY_LINK_SUB_GROUP]: // Hidden in /src/utils/generics.ts `isHiddenMessage()`
  [WAMessageStubType.COMMUNITY_PARENT_GROUP_DELETED]: m => (m.key.fromMe ? 'You deactivated the community {{0}}' : '{{sender}} deactivated the community {{0}}'), // TODO: review,
  [WAMessageStubType.COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED]: m => (m.key.fromMe ? 'You changed the subject to "{{1}}"' : '{{sender}} changed the subject to "{{1}}"'),
  [WAMessageStubType.COMMUNITY_PARTICIPANT_ADD_RICH]: 'Welcome to the community!',
  [WAMessageStubType.COMMUNITY_PARTICIPANT_DEMOTE]: m => (m.key.fromMe ? 'You\'re no longer a community admin' : '{{sender}} is no longer a community admin'),
  [WAMessageStubType.COMMUNITY_UNLINK_PARENT_GROUP]: m => (m.key.fromMe ? 'You removed this group from the community {{1}}' : '{{sender}} removed this group from the community {{1}}'),
  // [WAMessageStubType.COMMUNITY_UNLINK_SUB_GROUP]:, // Hidden in /src/utils/generics.ts `isHiddenMessage()`
  [WAMessageStubType.EMPTY_SUBGROUP_CREATE]: 'You created the group: {{2}}',
  [WAMessageStubType.EPHEMERAL_KEEP_IN_CHAT]: 'Disappearing messages now support keeping messages in the chat',
  // [WAMessageStubType.GENERAL_CHAT_ADD]: '', // Unsupported by Baileys types
  // [WAMessageStubType.GENERAL_CHAT_AUTO_ADD_DISABLED]: '', // Unsupported by Baileys types
  [WAMessageStubType.GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE]: 'Only admins can message this group',
  [WAMessageStubType.GROUP_CHANGE_NO_FREQUENTLY_FORWARDED]: '',
  [WAMessageStubType.GROUP_INVITE_LINK_GROWTH_LOCKED]: '',
  [WAMessageStubType.GROUP_MEMBER_ADD_MODE]: '',
  [WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE]: m => {
    if (m.messageStubParameters![0] === 'on') {
      return m.key.fromMe ? 'You turned on admin approval to join this group' : '{{sender}} turned on admin approval to join this group'
    }
    return m.key.fromMe ? 'You turned off admin approval to join this group' : '{{sender}} turned off admin approval to join this group'
  },
  [WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST]: '{{sender}} requested to join',
  [WAMessageStubType.GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP]: message => `{{${message.participant}}} added you to this group and the community`,
  [WAMessageStubType.GROUP_PARTICIPANT_LINKED_GROUP_JOIN]: m => (m.key.fromMe ? 'You joined from the community' : '{{sender}} joined from the community'),
  [WAMessageStubType.GROUP_V4_ADD_INVITE_SENT]: '',
  [WAMessageStubType.INTEGRITY_UNLINK_PARENT_GROUP]: 'This group is no longer part of a community',
  [WAMessageStubType.MASKED_THREAD_CREATED]: 'Your phone number is not shared in this chat. Businesses who have your number in their contacts will be able to see it',
  [WAMessageStubType.NON_VERIFIED_TRANSITION]: 'The business account you were chatting with is now a standard account',
  [WAMessageStubType.PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER]: 'To receive a payment from {{0}}, set up your payment account on your phone',
  // [WAMessageStubType.PAYMENT_ACTION_REQUEST_CANCELLED]: '', // Already handled  in messageHeading
  // [WAMessageStubType.PAYMENT_ACTION_REQUEST_DECLINED]: '', // Already handled  in messageHeading
  // [WAMessageStubType.PAYMENT_ACTION_REQUEST_EXPIRED]: '', // Already handled  in messageHeading
  [WAMessageStubType.PAYMENT_CIPHERTEXT]: 'Waiting for this message. This may take a while',
  [WAMessageStubType.PAYMENT_FUTUREPROOF]: 'This payment message has a note but your version of WhatsApp doesn\'t support viewing it',
  [WAMessageStubType.PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP]: '{{sender}} sent you {currencyAndAmount}. Use WhatsApp on your phone to accept this transaction',
  // [WAMessageStubType.PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP]: '', // TODO
  // [WAMessageStubType.PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED]: '', // TODO
  // [WAMessageStubType.PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED]: '', // TODO
  // [WAMessageStubType.PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED]: '', // TODO
  // [WAMessageStubType.PINNED_MESSAGE_IN_CHAT]: '', // TODO
  // [WAMessageStubType.RECEIVER_INVITE]: '', // Rendering not supported in the native client
  [WAMessageStubType.REPORT_TO_ADMIN_ENABLED_STATUS]: '',
  [WAMessageStubType.SENDER_INVITE]: '"{{sender}} is new to WhatsApp"',
  [WAMessageStubType.SILENCED_UNKNOWN_CALLER_AUDIO]: 'Silenced unknown caller',
  [WAMessageStubType.SILENCED_UNKNOWN_CALLER_VIDEO]: 'Silenced unknown caller',
  [WAMessageStubType.SUB_GROUP_PARTICIPANT_ADD_RICH]: m => (m.key.fromMe ? 'You joined a group via invite in the community: {{1}}' : '{{sender}} added you to a group in the community: {{1}}'),
  // [WAMessageStubType.SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH]: '', // Unsupported by Baileys types
  // [WAMessageStubType.SUGGESTED_SUBGROUP_ANNOUNCE]: '', // Unsupported by Baileys types
  [WAMessageStubType.UNVERIFIED_TRANSITION]: 'The business account you\'re chatting with may belong to {{0}}. WhatsApp hasn\'t verified their name yet',
  [WAMessageStubType.VERIFIED_INITIAL_HIGH]: 'WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account"',
  [WAMessageStubType.VERIFIED_INITIAL_LOW]: 'WhatsApp has made changes to the business account types. "Confirmed Business" will now be labeled as "Business Account"',
  [WAMessageStubType.VERIFIED_INITIAL_UNKNOWN]: '{{0}} may be a business account, but WhatsApp hasn\'t verified their name yet',
  [WAMessageStubType.VERIFIED_LOW_UNKNOWN]: 'The business account you\'re chatting with may belong to {{0}}. WhatsApp hasn\'t verified their name yet',
  [WAMessageStubType.VERIFIED_TRANSITION]: 'To help you connect with businesses, we have verified that the business account you\'re chatting with belongs to {{0}}',
  [WAMessageStubType.VERIFIED_TRANSITION_ANY_TO_HIGH]: 'The business account you\'re chatting with is now verified as "{{0}}"',
  [WAMessageStubType.VERIFIED_TRANSITION_ANY_TO_NONE]: 'This business account has now registered as a standard account',
  [WAMessageStubType.VERIFIED_TRANSITION_HIGH_TO_LOW]: 'The business account you\'re chatting with is no longer verified as "{{0}}"',
  [WAMessageStubType.VERIFIED_TRANSITION_HIGH_TO_UNKNOWN]: 'The business account you\'re chatting with is no longer verified as "{{0}}"',
  [WAMessageStubType.VERIFIED_TRANSITION_LOW_TO_UNKNOWN]: 'The business account you\'re chatting with is no longer confirmed as "{{0}}"',
  [WAMessageStubType.VERIFIED_TRANSITION_NONE_TO_LOW]: 'This account has registered as a business account',
  [WAMessageStubType.VERIFIED_TRANSITION_NONE_TO_UNKNOWN]: 'This chat may be with a business account',
  [WAMessageStubType.VERIFIED_TRANSITION_UNKNOWN_TO_LOW]: 'The business account you\'re chatting with belongs to "{{0}}"',
}

const ATTACHMENT_MAP = {
  audioMessage: AttachmentType.AUDIO,
  imageMessage: AttachmentType.IMG,
  stickerMessage: AttachmentType.IMG,
  videoMessage: AttachmentType.VIDEO,
  ptvMessage: AttachmentType.VIDEO,
} as { [T in MessageType]: AttachmentType }

const MESSAGE_ACTION_MAP = {
  [WAMessageStubType.GROUP_PARTICIPANT_ADD]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WAMessageStubType.GROUP_PARTICIPANT_INVITE]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WAMessageStubType.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WAMessageStubType.GROUP_PARTICIPANT_REMOVE]: MessageActionType.THREAD_PARTICIPANTS_REMOVED,
  [WAMessageStubType.GROUP_PARTICIPANT_LEAVE]: MessageActionType.THREAD_PARTICIPANTS_REMOVED,
  [WAMessageStubType.GROUP_CREATE]: MessageActionType.GROUP_THREAD_CREATED,
  // [WAMessageStubType.GROUP_CHANGE_DESCRIPTION]: ,
  [WAMessageStubType.GROUP_CHANGE_SUBJECT]: MessageActionType.THREAD_TITLE_UPDATED,
}

const PAYMENT_STATUS_MAP = {
  [WAProto.PaymentInfo.Status.UNKNOWN_STATUS]: 'Unknown status',
  [WAProto.PaymentInfo.Status.PROCESSING]: 'Processing',
  [WAProto.PaymentInfo.Status.SENT]: 'Sent',
  [WAProto.PaymentInfo.Status.NEED_TO_ACCEPT]: 'Needs to accept',
  [WAProto.PaymentInfo.Status.COMPLETE]: 'Completed',
  [WAProto.PaymentInfo.Status.COULD_NOT_COMPLETE]: 'Could not complete',
  [WAProto.PaymentInfo.Status.REFUNDED]: 'Refunded',
  [WAProto.PaymentInfo.Status.EXPIRED]: 'Expired',
  [WAProto.PaymentInfo.Status.REJECTED]: 'Rejected',
  [WAProto.PaymentInfo.Status.CANCELLED]: 'Cancelled',
  [WAProto.PaymentInfo.Status.WAITING_FOR_PAYER]: 'Waiting for payer',
  [WAProto.PaymentInfo.Status.WAITING]: 'Waiting',
}

export const getKeyAuthor = (key: WAMessageKey | undefined | null, meID: string) => (
  (key?.fromMe ? meID : key?.participant || key?.remoteJid) || ''
)

export const mapMessageReactions = (reactions: WAProto.IReaction[], meID: string): MessageReaction[] =>
  reactions.map<MessageReaction>(reaction => {
    const participantID = getKeyAuthor(reaction.key, meID)
    return {
      id: participantID,
      reactionKey: reaction.text || '',
      participantID,
      emoji: true,
    }
  })

export const mapMessageSeen = (message: WAMessage): MessageSeen => {
  const seenMap: MessageSeen = {}
  for (const { userJid, readTimestamp } of message.userReceipt || []) {
    const readUnixStamp = toNumber(readTimestamp || 0)
    if (readUnixStamp) {
      seenMap[userJid] = new Date(readUnixStamp * 1000)
    }
  }

  if (isJidGroup(getChatId(message.key) || '')) return seenMap

  const seenJids = Object.keys(seenMap)
  if (seenJids.length > 0) return seenMap[seenJids[0]]
  return message.status! >= WAMessageStatus.READ
}

export const mapMessageQuoted = (messageInner: any, chatId: string, currentUserId: string): MessagePreview | undefined => {
  if (messageInner) {
    const contextInfo = messageInner?.contextInfo as WAContextInfo
    let quoted = contextInfo?.quotedMessage
    if (quoted) {
      // in case quoted is ephemeral
      quoted = normalizeMessageContent(quoted)
      chatId = getChatId(contextInfo) || chatId
      const key = { id: contextInfo.stanzaId!, fromMe: areJidsSameUser(contextInfo.participant!, currentUserId) }
      const preview: MessagePreview = {
        id: mapMessageID(key),
        threadID: jidNormalizedUser(chatId),
        senderID: jidNormalizedUser(contextInfo.participant || chatId),
      }

      const text = messageText({ message: quoted, key })
      if (text) {
        preview.text = text
      }

      const { attachments } = messageAttachments(quoted!, preview.threadID!, preview.id!)
      if (attachments.length) {
        preview.attachments = attachments
      }

      return preview
    }
  }
}

export const isPaymentMessage = (m: WAProto.IMessage) =>
  !!(m?.sendPaymentMessage || m?.requestPaymentMessage || m?.cancelPaymentRequestMessage || m?.declinePaymentRequestMessage)

export function messageStatus(status: number | string) {
  if (typeof status === 'string') {
    const key = Object.keys(WAMessageStatus).find(k => k === status)
    return WAMessageStatus[key!]
  }
  return status
}

export function messageAction(message: WAMessage, normalizedMessageContent: WAProto.IMessage | undefined): MessageAction | undefined {
  if (normalizedMessageContent?.reactionMessage) {
    return {
      type: normalizedMessageContent.reactionMessage?.text ? MessageActionType.MESSAGE_REACTION_CREATED : MessageActionType.MESSAGE_REACTION_DELETED,
    }
  }

  const actionType = MESSAGE_ACTION_MAP[message.messageStubType!]
  const actorParticipantID = message.participant || message.key.participant || ''
  if (!actionType) return
  if (actionType === MessageActionType.THREAD_TITLE_UPDATED) {
    return {
      type: actionType,
      title: message.messageStubParameters![0],
      actorParticipantID,
    }
  }
  if (actionType === MessageActionType.GROUP_THREAD_CREATED) {
    return {
      type: actionType,
      title: message.messageStubParameters![0],
      actorParticipantID,
    }
  }
  return {
    type: actionType,
    participantIDs: message.messageStubParameters
      ? message.messageStubParameters.map(p => p)
      : [actorParticipantID],
    actorParticipantID,
  }
}

export function getNotificationType(message: WAMessage, normalizedMessageContent: WAProto.IMessage | undefined, currentUserId: string): MessageBehavior | null {
  if (isHiddenProtocolMessage(normalizedMessageContent)) return MessageBehavior.SILENT
  // no flag for fromMe messages
  if (message.key.fromMe) return null

  const incrementReadCounter = shouldIncrementChatUnread(message)
  const isRealMsg = isRealMessage(message, currentUserId)
  if (!isRealMsg) return MessageBehavior.SILENT
  if (!incrementReadCounter) return MessageBehavior.KEEP_READ
  if (message.broadcast) return MessageBehavior.DONT_NOTIFY

  return null
}

export function messageAttachments(message: WAMessageContent, jid: string, id: string): { attachments: Attachment[], media: boolean } {
  const response = { attachments: [] as Attachment[], media: false }
  if (!message) return response

  const messageInner = Object.values(extractMessageContent(message)!)[0]

  if (message.contactMessage || message.contactsArrayMessage) {
    const contacts = message.contactsArrayMessage?.contacts || [message.contactMessage]
    response.attachments = contacts.map<Attachment>(c => ({
      id: `${id}_${c!.displayName}`,
      type: AttachmentType.UNKNOWN,
      data: Buffer.from(c!.vcard!, 'utf-8'),
      fileName: `${c!.displayName}.vcf`,
    }))
  } else if (message.audioMessage || message.imageMessage || message.documentMessage || message.videoMessage || message.stickerMessage || message.ptvMessage) {
    const messageType = getContentType(message)!
    const jpegThumbnail = (message.videoMessage || message.imageMessage || message.ptvMessage)?.jpegThumbnail
    const fileName = message.documentMessage?.fileName
    const content = message[messageType] as WAGenericMediaMessage

    let fileSize: number | undefined
    if ('fileLength' in content && !!content.fileLength) {
      fileSize = toNumber(content.fileLength)
    }

    const size = message.stickerMessage ? { width: 100, height: 100 } : { width: messageInner?.width, height: messageInner?.height }
    response.attachments = [{
      id,
      size: (size.width && size.height) ? size : undefined,
      type: ATTACHMENT_MAP[messageType] || AttachmentType.UNKNOWN,
      isGif: !!(message.videoMessage || message.ptvMessage)?.gifPlayback,
      isSticker: message.stickerMessage ? true : undefined,
      mimeType: messageInner.mimetype,
      posterImg: jpegThumbnail ? `data:;base64,${Buffer.from(jpegThumbnail).toString('base64')}` : undefined,
      srcURL: attachmentUrl(undefined, jid, id, fileName || ''),
      fileName: fileName || undefined,
      fileSize,
      isVoiceNote: message.audioMessage?.ptt || undefined,
    }]
    response.media = true
  } else if (message.productMessage?.product?.productImage) {
    const img = message.productMessage?.product?.productImage
    const jpegThumbnail = img?.jpegThumbnail
    response.attachments = [
      {
        id,
        type: AttachmentType.IMG,
        srcURL: attachmentUrl(undefined, jid, id, ''),
        mimeType: img.mimetype!,
        posterImg: jpegThumbnail ? `data:;base64,${Buffer.from(jpegThumbnail).toString('base64')}` : undefined,
      },
    ]
    response.media = true
  }
  return response
}

export function messageFooter(message: WAMessage, content: WAProto.IMessage | undefined) {
  let footer: string | undefined
  const template = content?.templateMessage?.hydratedTemplate
  if (content?.groupInviteMessage) {
    if (isExpiredInvite(content.groupInviteMessage)) {
      footer = 'Invite expired'
    }
  } else if (content?.listMessage) {
    footer = content?.listMessage?.buttonText || undefined
  } else if (content?.listResponseMessage) {
    footer = content?.listResponseMessage?.description || undefined
  } else if (message.status === WAMessageStatus.PLAYED) {
    footer = 'Played'
  } else if (template) {
    footer = template?.hydratedFooterText || undefined
  }

  return footer
}

export function* messageHeading(message: WAMessage, content: WAProto.IMessage | undefined) {
  if (message.broadcast) yield 'Broadcast'
  if (content) {
    const { paymentInfo } = message
    if (isPaymentMessage(content)) {
      if (paymentInfo) {
        const amount = `${paymentInfo.currency} ${numberToBigInt(paymentInfo.amount1000!) / BigInt(1000)}`
        const status = PAYMENT_STATUS_MAP[paymentInfo.status!]
        if (content.sendPaymentMessage) {
          yield `💵 Payment to {{${paymentInfo.receiverJid}}} | ${amount} | ${status}`
        }
        if (content.requestPaymentMessage) {
          yield `💵 Payment requested from {{${content.requestPaymentMessage.requestFrom}}} | ${amount} | ${status}`
        }
        if (content.declinePaymentRequestMessage) {
          yield `💵 Payment requested from {{${content.requestPaymentMessage!.requestFrom}}} declined ${amount} | ${status}`
        }
        if (content.cancelPaymentRequestMessage) {
          yield `💵 Payment requested from {{${content.requestPaymentMessage!.requestFrom}}} canceled ${amount} | ${status}`
        }
      } else {
        yield 'Payment message · Details unavailable'
      }
    }

    if (content.groupInviteMessage) yield [content.groupInviteMessage.groupName, 'WhatsApp Group Invite'].filter(Boolean).join(' | ')
    if (content.locationMessage) yield '📍 Location'
    if (content.liveLocationMessage) yield '📍 Live Location'
    if (content.productMessage?.product) yield '📦 Product'
    if (content.listMessage) yield `${content.listMessage!.title}`
    if (content.pollCreationMessage) yield `📊 Poll: ${content.pollCreationMessage!.name}\n- ${content.pollCreationMessage?.options?.map(option => option.optionName).join('\n- ')}`
  }
}

const replaceJids = (jids: string[], text: string) => {
  if (!jids) return text
  return jids.reduce((txt, jid) => txt.replace(`@${jidDecode(jid)!.user}`, `${MENTION_START_TOKEN}${jid}${MENTION_END_TOKEN}`), text)
}

const replaceGroupMentions = (groupMentions: WAProto.IGroupMention[], text: string) => (groupMentions?.length ? groupMentions.reduce((result, groupMention) => result.replace(groupMention.groupJid!, groupMention.groupSubject!), text) : text)

const generateDeepLink = (type: ButtonCallbackType, key: WAMessageKey, button: ButtonReplyInfo) => {
  const searchParams = new URLSearchParams({
    type,
    buttonId: button.id,
    buttonDisplayText: button.displayText,
    buttonIndex: button.index,
    ...key,
  } as any)
  return `texts://platform-callback/$accountID/callback/button?${searchParams.toString()}`
}

const generateDeepLinkForGroupJoin = (senderJid: string, invite: WAProto.Message.IGroupInviteMessage) => {
  const searchParams = new URLSearchParams({ senderJid, jid: invite.groupJid!, inviteCode: invite.inviteCode!, expiration: invite.inviteExpiration!.toString() })
  return `texts://platform-callback/$accountID/callback/group?${searchParams.toString()}`
}

export function messageButtons(message: WAMessageContent, key: WAMessageKey) {
  const buttons: MessageButton[] = []
  if (message?.templateMessage) {
    const template = message.templateMessage.hydratedTemplate || message.templateMessage.hydratedFourRowTemplate
    template?.hydratedButtons?.forEach((button, index) => {
      if (button.callButton) {
        buttons.push({
          label: button.callButton.displayText!,
          linkURL: 'tel:' + button.callButton.phoneNumber,
        })
      }
      if (button.quickReplyButton) {
        const btn: ButtonReplyInfo = {
          id: button.quickReplyButton!.id!,
          displayText: button.quickReplyButton!.displayText!,
          index,
        }
        buttons.push({
          label: button.quickReplyButton.displayText!,
          linkURL: generateDeepLink('template', key, btn),
        })
      }
      if (button.urlButton) {
        buttons.push({
          label: button.urlButton.displayText!,
          linkURL: button.urlButton.url!,
        })
      }
    })
  } else if (message?.buttonsMessage?.buttons?.length) {
    for (const button of message.buttonsMessage.buttons) {
      const btn: ButtonReplyInfo = {
        id: button.buttonId!,
        displayText: button.buttonText!.displayText!,
        index: 0,
      }
      buttons.push({
        label: button.buttonText!.displayText!,
        linkURL: generateDeepLink('plain', key, btn),
      })
    }
  } else if (message?.groupInviteMessage?.groupJid) {
    if (!isExpiredInvite(message.groupInviteMessage) && !key.fromMe) {
      buttons.push({
        label: 'Join Group',
        linkURL: generateDeepLinkForGroupJoin(getChatId(key), message.groupInviteMessage),
      })
    }
  } else if (message?.listMessage?.sections?.length) {
    let idx = 0
    for (const section of message.listMessage.sections) {
      if (section.rows?.length) {
        for (const row of section.rows) {
          buttons.push({
            label: row.title || '',
            linkURL: generateDeepLink('list', key, {
              index: idx,
              id: row.rowId!,
              displayText: row.title!,
            }),
          })
          idx += 1
        }
      }
    }
  }

  return buttons
}

const ProtocolMessageType = WAProto.Message.ProtocolMessage.Type

export function messageText({ message, key }: Pick<WAMessage, 'key' | 'message'>) {
  switch (message?.protocolMessage?.type) {
    case ProtocolMessageType.EPHEMERAL_SETTING: {
      const exp = message.protocolMessage.ephemeralExpiration
      return getEphemeralMessageSettingChangedText(exp!, 'sender')
    }
    case ProtocolMessageType.HISTORY_SYNC_NOTIFICATION:
      return 'Chat History Synced'
    case ProtocolMessageType.APP_STATE_SYNC_KEY_SHARE:
      return 'App State Key Shared'
    case ProtocolMessageType.APP_STATE_SYNC_KEY_REQUEST:
      return 'App State Key Requested'
    case ProtocolMessageType.INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC:
      return '🔒 Messages you send to this chat and calls are secured with end-to-end encryption'
    case ProtocolMessageType.MESSAGE_EDIT:
      return 'Message Edited'
    default:
      break
  }

  const paymentMessage = message?.sendPaymentMessage || message?.requestPaymentMessage || message?.cancelPaymentRequestMessage || message?.declinePaymentRequestMessage
  if (paymentMessage) {
    if ('noteMessage' in paymentMessage) {
      const etm = paymentMessage?.noteMessage?.extendedTextMessage
      const note = etm?.text
      const jids = etm?.contextInfo?.mentionedJid

      if (note) return replaceJids(jids!, note)
    }
  }
  const loc = message?.locationMessage || message?.liveLocationMessage
  if (loc) {
    return [message?.locationMessage?.address, message?.liveLocationMessage?.caption].filter(Boolean).join('\n')
  }
  const product = message?.productMessage?.product
  if (product) {
    const price = typeof product.priceAmount1000 === 'number' ? +product.priceAmount1000 : product.priceAmount1000!.low
    return [
      product.title,
      product.description,
      `${product.currencyCode} ${(price / 1000)}`,
      product.productId,
    ]
      .filter(Boolean)
      .join('\n')
  }

  if (message?.reactionMessage) {
    const reactedKey = message.reactionMessage.key
    const msgSender = reactedKey?.fromMe ? 'your' : `{{${reactedKey?.participant || reactedKey!.remoteJid}}}'s`
    const reactionSender = key.fromMe ? 'You' : '{{sender}}'
    const reactionText = message.reactionMessage!.text!
    return reactionText
      ? `${reactionSender} reacted ${reactionText} to ${msgSender} message`
      : `${reactionSender} unreacted to ${msgSender} message`
  }

  if (message?.pollUpdateMessage) {
    const { pollCreationMessageKey } = message.pollUpdateMessage
    const pollCreator = pollCreationMessageKey?.fromMe ? 'your' : `{{${pollCreationMessageKey?.participant || pollCreationMessageKey!.remoteJid}}}'s`
    const voteSender = key.fromMe ? 'You' : '{{sender}}'
    return `${voteSender} voted on ${pollCreator} poll`
  }

  if (message?.listMessage) {
    return message.listMessage.description
  }

  if (message?.listResponseMessage) {
    return message.listResponseMessage?.title
  }

  const type = getContentType(message!)!
  const messageInner = message?.[type] as any

  const text = messageInner?.text ?? messageInner?.caption
  if (text) {
    return replaceGroupMentions(
      messageInner?.contextInfo?.groupMentions as WAProto.IGroupMention[],
      replaceJids(messageInner?.contextInfo?.mentionedJid, text),
    )
  }
  if (message?.templateMessage || message?.highlyStructuredMessage) {
    const templateMsg = message.templateMessage || message?.highlyStructuredMessage?.hydratedHsm
    const txt = (templateMsg?.hydratedTemplate || templateMsg?.hydratedFourRowTemplate)?.hydratedContentText
    if (txt) return txt
  }
  if (message?.buttonsMessage) {
    return message?.buttonsMessage?.contentText
  }
  if (message?.buttonsResponseMessage) {
    return message?.buttonsResponseMessage?.selectedDisplayText
  }
  if (message?.templateButtonReplyMessage) {
    return message?.templateButtonReplyMessage?.selectedDisplayText
  }

  return message?.conversation
}

export function messageLink({ key, message }: Pick<WAMessage, 'message' | 'key'>, normalizedMessageContent: WAProto.IMessage | undefined): MessageLink | undefined {
  const mess = normalizedMessageContent?.extendedTextMessage
  if (mess?.matchedText) {
    let imgUrl: string
    if (mess.thumbnailDirectPath) {
      imgUrl = attachmentUrl(undefined, getChatId(key), mapMessageID(key), 'thumb')
    } else if (mess.jpegThumbnail?.length) {
      const jpgThumb = Buffer.from(mess.jpegThumbnail)
      imgUrl = getDataURIFromBuffer(jpgThumb, 'image/jpeg')
    } else {
      imgUrl = ''
    }

    return {
      url: mess.matchedText,
      img: imgUrl,
      imgSize: {
        width: mess.thumbnailWidth || 90,
        height: mess.thumbnailHeight || 90,
      },
      title: mess.title!,
      summary: mess.description!,
    }
  }
  const loc = message?.locationMessage || message?.liveLocationMessage
  if (loc) {
    return {
      url: `https://www.google.com/maps?q=${loc.degreesLatitude},${loc.degreesLongitude}`,
      title: 'Google Maps',
      summary: `${loc.degreesLatitude}, ${loc.degreesLongitude}`,
    }
  }
}

export function messageStubText(message: WAMessage) {
  const mapped = PRE_DEFINED_MESSAGES[message.messageStubType!]
  let txt = typeof mapped === 'function' ? mapped(message) : mapped
  if (txt) {
    message.messageStubParameters!.forEach((p, i) => {
      txt = txt.replace(`{{${i}}}`, p)
    })
  }
  return txt
}

export const MessageTransformer: ValueTransformer = {
  from: (buff: Buffer | null) => {
    const result = buff ? deserialize(buff) : undefined
    if (result) {
      result.message = WAProto.WebMessageInfo.decode(result.message)
    }

    return result
  },
  to: (item: FullBaileysMessage | null) => {
    if (item) {
      return serialize({ ...item, node: item.message.node, message: WAProto.WebMessageInfo.encode(item.message).finish() })
    }
    return null
  },
}
