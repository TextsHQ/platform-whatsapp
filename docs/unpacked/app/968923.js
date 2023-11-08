Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebNotificationsInfoSpec = exports.WebMessageInfoSpec = exports.WebMessageInfo$StubType = exports.WebMessageInfo$Status = exports.WebMessageInfo$BizPrivacyStatus = exports.WebFeaturesSpec = exports.WebFeatures$Flag = exports.UserReceiptSpec = exports.StatusPSASpec = exports.ReactionSpec = exports.PremiumMessageInfoSpec = exports.PollUpdateSpec = exports.PollAdditionalMetadataSpec = exports.PinInChatSpec = exports.PinInChat$Type = exports.PhotoChangeSpec = exports.PaymentInfoSpec = exports.PaymentInfo$TxnStatus = exports.PaymentInfo$Status = exports.PaymentInfo$Currency = exports.NotificationMessageInfoSpec = exports.MessageAddOnContextInfoSpec = exports.MediaDataSpec = exports.KeepInChatSpec = exports.CommentMetadataSpec = undefined;
var r = require("./751206.js");
var i = require("./533494.js");
var a = require("./933734.js");
const o = require("../vendor/76672.js")({
  E2EE: 0,
  FB: 2,
  BSP: 1,
  BSP_AND_FB: 3
});
exports.WebMessageInfo$BizPrivacyStatus = o;
const s = require("../vendor/76672.js")({
  UNKNOWN: 0,
  REVOKE: 1,
  CIPHERTEXT: 2,
  FUTUREPROOF: 3,
  NON_VERIFIED_TRANSITION: 4,
  UNVERIFIED_TRANSITION: 5,
  VERIFIED_TRANSITION: 6,
  VERIFIED_LOW_UNKNOWN: 7,
  VERIFIED_HIGH: 8,
  VERIFIED_INITIAL_UNKNOWN: 9,
  VERIFIED_INITIAL_LOW: 10,
  VERIFIED_INITIAL_HIGH: 11,
  VERIFIED_TRANSITION_ANY_TO_NONE: 12,
  VERIFIED_TRANSITION_ANY_TO_HIGH: 13,
  VERIFIED_TRANSITION_HIGH_TO_LOW: 14,
  VERIFIED_TRANSITION_HIGH_TO_UNKNOWN: 15,
  VERIFIED_TRANSITION_UNKNOWN_TO_LOW: 16,
  VERIFIED_TRANSITION_LOW_TO_UNKNOWN: 17,
  VERIFIED_TRANSITION_NONE_TO_LOW: 18,
  VERIFIED_TRANSITION_NONE_TO_UNKNOWN: 19,
  GROUP_CREATE: 20,
  GROUP_CHANGE_SUBJECT: 21,
  GROUP_CHANGE_ICON: 22,
  GROUP_CHANGE_INVITE_LINK: 23,
  GROUP_CHANGE_DESCRIPTION: 24,
  GROUP_CHANGE_RESTRICT: 25,
  GROUP_CHANGE_ANNOUNCE: 26,
  GROUP_PARTICIPANT_ADD: 27,
  GROUP_PARTICIPANT_REMOVE: 28,
  GROUP_PARTICIPANT_PROMOTE: 29,
  GROUP_PARTICIPANT_DEMOTE: 30,
  GROUP_PARTICIPANT_INVITE: 31,
  GROUP_PARTICIPANT_LEAVE: 32,
  GROUP_PARTICIPANT_CHANGE_NUMBER: 33,
  BROADCAST_CREATE: 34,
  BROADCAST_ADD: 35,
  BROADCAST_REMOVE: 36,
  GENERIC_NOTIFICATION: 37,
  E2E_IDENTITY_CHANGED: 38,
  E2E_ENCRYPTED: 39,
  CALL_MISSED_VOICE: 40,
  CALL_MISSED_VIDEO: 41,
  INDIVIDUAL_CHANGE_NUMBER: 42,
  GROUP_DELETE: 43,
  GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE: 44,
  CALL_MISSED_GROUP_VOICE: 45,
  CALL_MISSED_GROUP_VIDEO: 46,
  PAYMENT_CIPHERTEXT: 47,
  PAYMENT_FUTUREPROOF: 48,
  PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED: 49,
  PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED: 50,
  PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED: 51,
  PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP: 52,
  PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP: 53,
  PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER: 54,
  PAYMENT_ACTION_SEND_PAYMENT_REMINDER: 55,
  PAYMENT_ACTION_SEND_PAYMENT_INVITATION: 56,
  PAYMENT_ACTION_REQUEST_DECLINED: 57,
  PAYMENT_ACTION_REQUEST_EXPIRED: 58,
  PAYMENT_ACTION_REQUEST_CANCELLED: 59,
  BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM: 60,
  BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP: 61,
  BIZ_INTRO_TOP: 62,
  BIZ_INTRO_BOTTOM: 63,
  BIZ_NAME_CHANGE: 64,
  BIZ_MOVE_TO_CONSUMER_APP: 65,
  BIZ_TWO_TIER_MIGRATION_TOP: 66,
  BIZ_TWO_TIER_MIGRATION_BOTTOM: 67,
  OVERSIZED: 68,
  GROUP_CHANGE_NO_FREQUENTLY_FORWARDED: 69,
  GROUP_V4_ADD_INVITE_SENT: 70,
  GROUP_PARTICIPANT_ADD_REQUEST_JOIN: 71,
  CHANGE_EPHEMERAL_SETTING: 72,
  E2E_DEVICE_CHANGED: 73,
  VIEWED_ONCE: 74,
  E2E_ENCRYPTED_NOW: 75,
  BLUE_MSG_BSP_FB_TO_BSP_PREMISE: 76,
  BLUE_MSG_BSP_FB_TO_SELF_FB: 77,
  BLUE_MSG_BSP_FB_TO_SELF_PREMISE: 78,
  BLUE_MSG_BSP_FB_UNVERIFIED: 79,
  BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED: 80,
  BLUE_MSG_BSP_FB_VERIFIED: 81,
  BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED: 82,
  BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE: 83,
  BLUE_MSG_BSP_PREMISE_UNVERIFIED: 84,
  BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED: 85,
  BLUE_MSG_BSP_PREMISE_VERIFIED: 86,
  BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED: 87,
  BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED: 88,
  BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED: 89,
  BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED: 90,
  BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED: 91,
  BLUE_MSG_SELF_FB_TO_BSP_PREMISE: 92,
  BLUE_MSG_SELF_FB_TO_SELF_PREMISE: 93,
  BLUE_MSG_SELF_FB_UNVERIFIED: 94,
  BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED: 95,
  BLUE_MSG_SELF_FB_VERIFIED: 96,
  BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED: 97,
  BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE: 98,
  BLUE_MSG_SELF_PREMISE_UNVERIFIED: 99,
  BLUE_MSG_SELF_PREMISE_VERIFIED: 100,
  BLUE_MSG_TO_BSP_FB: 101,
  BLUE_MSG_TO_CONSUMER: 102,
  BLUE_MSG_TO_SELF_FB: 103,
  BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED: 104,
  BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED: 105,
  BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED: 106,
  BLUE_MSG_UNVERIFIED_TO_VERIFIED: 107,
  BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED: 108,
  BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED: 109,
  BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED: 110,
  BLUE_MSG_VERIFIED_TO_UNVERIFIED: 111,
  BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED: 112,
  BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED: 113,
  BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED: 114,
  BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED: 115,
  BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED: 116,
  BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED: 117,
  E2E_IDENTITY_UNAVAILABLE: 118,
  GROUP_CREATING: 119,
  GROUP_CREATE_FAILED: 120,
  GROUP_BOUNCED: 121,
  BLOCK_CONTACT: 122,
  EPHEMERAL_SETTING_NOT_APPLIED: 123,
  SYNC_FAILED: 124,
  SYNCING: 125,
  BIZ_PRIVACY_MODE_INIT_FB: 126,
  BIZ_PRIVACY_MODE_INIT_BSP: 127,
  BIZ_PRIVACY_MODE_TO_FB: 128,
  BIZ_PRIVACY_MODE_TO_BSP: 129,
  DISAPPEARING_MODE: 130,
  E2E_DEVICE_FETCH_FAILED: 131,
  ADMIN_REVOKE: 132,
  GROUP_INVITE_LINK_GROWTH_LOCKED: 133,
  COMMUNITY_LINK_PARENT_GROUP: 134,
  COMMUNITY_LINK_SIBLING_GROUP: 135,
  COMMUNITY_LINK_SUB_GROUP: 136,
  COMMUNITY_UNLINK_PARENT_GROUP: 137,
  COMMUNITY_UNLINK_SIBLING_GROUP: 138,
  COMMUNITY_UNLINK_SUB_GROUP: 139,
  GROUP_PARTICIPANT_ACCEPT: 140,
  GROUP_PARTICIPANT_LINKED_GROUP_JOIN: 141,
  COMMUNITY_CREATE: 142,
  EPHEMERAL_KEEP_IN_CHAT: 143,
  GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST: 144,
  GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE: 145,
  INTEGRITY_UNLINK_PARENT_GROUP: 146,
  COMMUNITY_PARTICIPANT_PROMOTE: 147,
  COMMUNITY_PARTICIPANT_DEMOTE: 148,
  COMMUNITY_PARENT_GROUP_DELETED: 149,
  COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL: 150,
  GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP: 151,
  MASKED_THREAD_CREATED: 152,
  MASKED_THREAD_UNMASKED: 153,
  BIZ_CHAT_ASSIGNMENT: 154,
  CHAT_PSA: 155,
  CHAT_POLL_CREATION_MESSAGE: 156,
  CAG_MASKED_THREAD_CREATED: 157,
  COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED: 158,
  CAG_INVITE_AUTO_ADD: 159,
  BIZ_CHAT_ASSIGNMENT_UNASSIGN: 160,
  CAG_INVITE_AUTO_JOINED: 161,
  SCHEDULED_CALL_START_MESSAGE: 162,
  COMMUNITY_INVITE_RICH: 163,
  COMMUNITY_INVITE_AUTO_ADD_RICH: 164,
  SUB_GROUP_INVITE_RICH: 165,
  SUB_GROUP_PARTICIPANT_ADD_RICH: 166,
  COMMUNITY_LINK_PARENT_GROUP_RICH: 167,
  COMMUNITY_PARTICIPANT_ADD_RICH: 168,
  SILENCED_UNKNOWN_CALLER_AUDIO: 169,
  SILENCED_UNKNOWN_CALLER_VIDEO: 170,
  GROUP_MEMBER_ADD_MODE: 171,
  GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD: 172,
  COMMUNITY_CHANGE_DESCRIPTION: 173,
  SENDER_INVITE: 174,
  RECEIVER_INVITE: 175,
  COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS: 176,
  PINNED_MESSAGE_IN_CHAT: 177,
  PAYMENT_INVITE_SETUP_INVITER: 178,
  PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY: 179,
  PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE: 180,
  LINKED_GROUP_CALL_START: 181,
  REPORT_TO_ADMIN_ENABLED_STATUS: 182,
  EMPTY_SUBGROUP_CREATE: 183,
  SCHEDULED_CALL_CANCEL: 184,
  SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH: 185,
  GROUP_CHANGE_RECENT_HISTORY_SHARING: 186,
  PAID_MESSAGE_SERVER_CAMPAIGN_ID: 187,
  GENERAL_CHAT_CREATE: 188,
  GENERAL_CHAT_ADD: 189,
  GENERAL_CHAT_AUTO_ADD_DISABLED: 190,
  SUGGESTED_SUBGROUP_ANNOUNCE: 191,
  BIZ_BOT_1P_MESSAGING_ENABLED: 192,
  CHANGE_USERNAME: 193,
  BIZ_COEX_PRIVACY_INIT_SELF: 194,
  BIZ_COEX_PRIVACY_TRANSITION_SELF: 195,
  SUPPORT_AI_EDUCATION: 196,
  BIZ_BOT_3P_MESSAGING_ENABLED: 197
});
exports.WebMessageInfo$StubType = s;
const l = require("../vendor/76672.js")({
  ERROR: 0,
  PENDING: 1,
  SERVER_ACK: 2,
  DELIVERY_ACK: 3,
  READ: 4,
  PLAYED: 5
});
exports.WebMessageInfo$Status = l;
const u = require("../vendor/76672.js")({
  UNKNOWN: 0,
  PENDING_SETUP: 1,
  PENDING_RECEIVER_SETUP: 2,
  INIT: 3,
  SUCCESS: 4,
  COMPLETED: 5,
  FAILED: 6,
  FAILED_RISK: 7,
  FAILED_PROCESSING: 8,
  FAILED_RECEIVER_PROCESSING: 9,
  FAILED_DA: 10,
  FAILED_DA_FINAL: 11,
  REFUNDED_TXN: 12,
  REFUND_FAILED: 13,
  REFUND_FAILED_PROCESSING: 14,
  REFUND_FAILED_DA: 15,
  EXPIRED_TXN: 16,
  AUTH_CANCELED: 17,
  AUTH_CANCEL_FAILED_PROCESSING: 18,
  AUTH_CANCEL_FAILED: 19,
  COLLECT_INIT: 20,
  COLLECT_SUCCESS: 21,
  COLLECT_FAILED: 22,
  COLLECT_FAILED_RISK: 23,
  COLLECT_REJECTED: 24,
  COLLECT_EXPIRED: 25,
  COLLECT_CANCELED: 26,
  COLLECT_CANCELLING: 27,
  IN_REVIEW: 28,
  REVERSAL_SUCCESS: 29,
  REVERSAL_PENDING: 30,
  REFUND_PENDING: 31
});
exports.PaymentInfo$TxnStatus = u;
const c = require("../vendor/76672.js")({
  UNKNOWN_STATUS: 0,
  PROCESSING: 1,
  SENT: 2,
  NEED_TO_ACCEPT: 3,
  COMPLETE: 4,
  COULD_NOT_COMPLETE: 5,
  REFUNDED: 6,
  EXPIRED: 7,
  REJECTED: 8,
  CANCELLED: 9,
  WAITING_FOR_PAYER: 10,
  WAITING: 11
});
exports.PaymentInfo$Status = c;
const d = require("../vendor/76672.js")({
  UNKNOWN_CURRENCY: 0,
  INR: 1
});
exports.PaymentInfo$Currency = d;
const p = require("../vendor/76672.js")({
  NOT_STARTED: 0,
  FORCE_UPGRADE: 1,
  DEVELOPMENT: 2,
  PRODUCTION: 3
});
exports.WebFeatures$Flag = p;
const f = require("../vendor/76672.js")({
  UNKNOWN_TYPE: 0,
  PIN_FOR_ALL: 1,
  UNPIN_FOR_ALL: 2
});
exports.PinInChat$Type = f;
const _ = {};
exports.WebMessageInfoSpec = _;
const g = {};
exports.CommentMetadataSpec = g;
const m = {};
exports.PaymentInfoSpec = m;
const h = {};
exports.WebNotificationsInfoSpec = h;
const y = {};
exports.NotificationMessageInfoSpec = y;
const E = {};
exports.WebFeaturesSpec = E;
const S = {};
exports.MediaDataSpec = S;
const v = {};
exports.PhotoChangeSpec = v;
const T = {};
exports.StatusPSASpec = T;
const M = {};
exports.UserReceiptSpec = M;
const A = {};
exports.ReactionSpec = A;
const b = {};
exports.PollUpdateSpec = b;
const C = {};
exports.PollAdditionalMetadataSpec = C;
const P = {};
exports.KeepInChatSpec = P;
const O = {};
exports.PinInChatSpec = O;
const I = {};
exports.MessageAddOnContextInfoSpec = I;
const R = {};
exports.PremiumMessageInfoSpec = R;
_.internalDefaults = {
  status: l.PENDING
};
_.internalSpec = {
  key: [1, r.FLAGS.REQUIRED | r.TYPES.MESSAGE, a.MessageKeySpec],
  message: [2, r.TYPES.MESSAGE, i.MessageSpec],
  messageTimestamp: [3, r.TYPES.UINT64],
  status: [4, r.TYPES.ENUM, l],
  participant: [5, r.TYPES.STRING],
  messageC2STimestamp: [6, r.TYPES.UINT64],
  ignore: [16, r.TYPES.BOOL],
  starred: [17, r.TYPES.BOOL],
  broadcast: [18, r.TYPES.BOOL],
  pushName: [19, r.TYPES.STRING],
  mediaCiphertextSha256: [20, r.TYPES.BYTES],
  multicast: [21, r.TYPES.BOOL],
  urlText: [22, r.TYPES.BOOL],
  urlNumber: [23, r.TYPES.BOOL],
  messageStubType: [24, r.TYPES.ENUM, s],
  clearMedia: [25, r.TYPES.BOOL],
  messageStubParameters: [26, r.FLAGS.REPEATED | r.TYPES.STRING],
  duration: [27, r.TYPES.UINT32],
  labels: [28, r.FLAGS.REPEATED | r.TYPES.STRING],
  paymentInfo: [29, r.TYPES.MESSAGE, m],
  finalLiveLocation: [30, r.TYPES.MESSAGE, i.Message$LiveLocationMessageSpec],
  quotedPaymentInfo: [31, r.TYPES.MESSAGE, m],
  ephemeralStartTimestamp: [32, r.TYPES.UINT64],
  ephemeralDuration: [33, r.TYPES.UINT32],
  ephemeralOffToOn: [34, r.TYPES.BOOL],
  ephemeralOutOfSync: [35, r.TYPES.BOOL],
  bizPrivacyStatus: [36, r.TYPES.ENUM, o],
  verifiedBizName: [37, r.TYPES.STRING],
  mediaData: [38, r.TYPES.MESSAGE, S],
  photoChange: [39, r.TYPES.MESSAGE, v],
  userReceipt: [40, r.FLAGS.REPEATED | r.TYPES.MESSAGE, M],
  reactions: [41, r.FLAGS.REPEATED | r.TYPES.MESSAGE, A],
  quotedStickerData: [42, r.TYPES.MESSAGE, S],
  futureproofData: [43, r.TYPES.BYTES],
  statusPsa: [44, r.TYPES.MESSAGE, T],
  pollUpdates: [45, r.FLAGS.REPEATED | r.TYPES.MESSAGE, b],
  pollAdditionalMetadata: [46, r.TYPES.MESSAGE, C],
  agentId: [47, r.TYPES.STRING],
  statusAlreadyViewed: [48, r.TYPES.BOOL],
  messageSecret: [49, r.TYPES.BYTES],
  keepInChat: [50, r.TYPES.MESSAGE, P],
  originalSelfAuthorUserJidString: [51, r.TYPES.STRING],
  revokeMessageTimestamp: [52, r.TYPES.UINT64],
  pinInChat: [54, r.TYPES.MESSAGE, O],
  premiumMessageInfo: [55, r.TYPES.MESSAGE, R],
  is1PBizBotMessage: [56, r.TYPES.BOOL],
  isGroupHistoryMessage: [57, r.TYPES.BOOL],
  botMessageInvokerJid: [58, r.TYPES.STRING],
  commentMetadata: [59, r.TYPES.MESSAGE, g]
};
g.internalSpec = {
  commentParentKey: [1, r.TYPES.MESSAGE, a.MessageKeySpec],
  replyCount: [2, r.TYPES.UINT32]
};
m.internalSpec = {
  currencyDeprecated: [1, r.TYPES.ENUM, d],
  amount1000: [2, r.TYPES.UINT64],
  receiverJid: [3, r.TYPES.STRING],
  status: [4, r.TYPES.ENUM, c],
  transactionTimestamp: [5, r.TYPES.UINT64],
  requestMessageKey: [6, r.TYPES.MESSAGE, a.MessageKeySpec],
  expiryTimestamp: [7, r.TYPES.UINT64],
  futureproofed: [8, r.TYPES.BOOL],
  currency: [9, r.TYPES.STRING],
  txnStatus: [10, r.TYPES.ENUM, u],
  useNoviFiatFormat: [11, r.TYPES.BOOL],
  primaryAmount: [12, r.TYPES.MESSAGE, i.MoneySpec],
  exchangeAmount: [13, r.TYPES.MESSAGE, i.MoneySpec]
};
h.internalSpec = {
  timestamp: [2, r.TYPES.UINT64],
  unreadChats: [3, r.TYPES.UINT32],
  notifyMessageCount: [4, r.TYPES.UINT32],
  notifyMessages: [5, r.FLAGS.REPEATED | r.TYPES.MESSAGE, _]
};
y.internalSpec = {
  key: [1, r.TYPES.MESSAGE, a.MessageKeySpec],
  message: [2, r.TYPES.MESSAGE, i.MessageSpec],
  messageTimestamp: [3, r.TYPES.UINT64],
  participant: [4, r.TYPES.STRING]
};
E.internalSpec = {
  labelsDisplay: [1, r.TYPES.ENUM, p],
  voipIndividualOutgoing: [2, r.TYPES.ENUM, p],
  groupsV3: [3, r.TYPES.ENUM, p],
  groupsV3Create: [4, r.TYPES.ENUM, p],
  changeNumberV2: [5, r.TYPES.ENUM, p],
  queryStatusV3Thumbnail: [6, r.TYPES.ENUM, p],
  liveLocations: [7, r.TYPES.ENUM, p],
  queryVname: [8, r.TYPES.ENUM, p],
  voipIndividualIncoming: [9, r.TYPES.ENUM, p],
  quickRepliesQuery: [10, r.TYPES.ENUM, p],
  payments: [11, r.TYPES.ENUM, p],
  stickerPackQuery: [12, r.TYPES.ENUM, p],
  liveLocationsFinal: [13, r.TYPES.ENUM, p],
  labelsEdit: [14, r.TYPES.ENUM, p],
  mediaUpload: [15, r.TYPES.ENUM, p],
  mediaUploadRichQuickReplies: [18, r.TYPES.ENUM, p],
  vnameV2: [19, r.TYPES.ENUM, p],
  videoPlaybackUrl: [20, r.TYPES.ENUM, p],
  statusRanking: [21, r.TYPES.ENUM, p],
  voipIndividualVideo: [22, r.TYPES.ENUM, p],
  thirdPartyStickers: [23, r.TYPES.ENUM, p],
  frequentlyForwardedSetting: [24, r.TYPES.ENUM, p],
  groupsV4JoinPermission: [25, r.TYPES.ENUM, p],
  recentStickers: [26, r.TYPES.ENUM, p],
  catalog: [27, r.TYPES.ENUM, p],
  starredStickers: [28, r.TYPES.ENUM, p],
  voipGroupCall: [29, r.TYPES.ENUM, p],
  templateMessage: [30, r.TYPES.ENUM, p],
  templateMessageInteractivity: [31, r.TYPES.ENUM, p],
  ephemeralMessages: [32, r.TYPES.ENUM, p],
  e2ENotificationSync: [33, r.TYPES.ENUM, p],
  recentStickersV2: [34, r.TYPES.ENUM, p],
  recentStickersV3: [36, r.TYPES.ENUM, p],
  userNotice: [37, r.TYPES.ENUM, p],
  support: [39, r.TYPES.ENUM, p],
  groupUiiCleanup: [40, r.TYPES.ENUM, p],
  groupDogfoodingInternalOnly: [41, r.TYPES.ENUM, p],
  settingsSync: [42, r.TYPES.ENUM, p],
  archiveV2: [43, r.TYPES.ENUM, p],
  ephemeralAllowGroupMembers: [44, r.TYPES.ENUM, p],
  ephemeral24HDuration: [45, r.TYPES.ENUM, p],
  mdForceUpgrade: [46, r.TYPES.ENUM, p],
  disappearingMode: [47, r.TYPES.ENUM, p],
  externalMdOptInAvailable: [48, r.TYPES.ENUM, p],
  noDeleteMessageTimeLimit: [49, r.TYPES.ENUM, p]
};
S.internalSpec = {
  localPath: [1, r.TYPES.STRING]
};
v.internalSpec = {
  oldPhoto: [1, r.TYPES.BYTES],
  newPhoto: [2, r.TYPES.BYTES],
  newPhotoId: [3, r.TYPES.UINT32]
};
T.internalSpec = {
  campaignId: [44, r.FLAGS.REQUIRED | r.TYPES.UINT64],
  campaignExpirationTimestamp: [45, r.TYPES.UINT64]
};
M.internalSpec = {
  userJid: [1, r.FLAGS.REQUIRED | r.TYPES.STRING],
  receiptTimestamp: [2, r.TYPES.INT64],
  readTimestamp: [3, r.TYPES.INT64],
  playedTimestamp: [4, r.TYPES.INT64],
  pendingDeviceJid: [5, r.FLAGS.REPEATED | r.TYPES.STRING],
  deliveredDeviceJid: [6, r.FLAGS.REPEATED | r.TYPES.STRING]
};
A.internalSpec = {
  key: [1, r.TYPES.MESSAGE, a.MessageKeySpec],
  text: [2, r.TYPES.STRING],
  groupingKey: [3, r.TYPES.STRING],
  senderTimestampMs: [4, r.TYPES.INT64],
  unread: [5, r.TYPES.BOOL]
};
b.internalSpec = {
  pollUpdateMessageKey: [1, r.TYPES.MESSAGE, a.MessageKeySpec],
  vote: [2, r.TYPES.MESSAGE, i.Message$PollVoteMessageSpec],
  senderTimestampMs: [3, r.TYPES.INT64],
  serverTimestampMs: [4, r.TYPES.INT64],
  unread: [5, r.TYPES.BOOL]
};
C.internalSpec = {
  pollInvalidated: [1, r.TYPES.BOOL]
};
P.internalSpec = {
  keepType: [1, r.TYPES.ENUM, i.KeepType],
  serverTimestamp: [2, r.TYPES.INT64],
  key: [3, r.TYPES.MESSAGE, a.MessageKeySpec],
  deviceJid: [4, r.TYPES.STRING],
  clientTimestampMs: [5, r.TYPES.INT64],
  serverTimestampMs: [6, r.TYPES.INT64]
};
O.internalSpec = {
  type: [1, r.TYPES.ENUM, f],
  key: [2, r.TYPES.MESSAGE, a.MessageKeySpec],
  senderTimestampMs: [3, r.TYPES.INT64],
  serverTimestampMs: [4, r.TYPES.INT64],
  messageAddOnContextInfo: [5, r.TYPES.MESSAGE, I]
};
I.internalSpec = {
  messageAddOnDurationInSecs: [1, r.TYPES.UINT32]
};
R.internalSpec = {
  serverCampaignId: [1, r.TYPES.STRING]
};