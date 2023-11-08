var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMsgStubProto = y;
exports.parseMsgStubTemplate = E;
exports.parseWebMessageInfo = function (e) {
  var t;
  var n;
  var r;
  const o = e.key;
  const _ = (0, c.decodeJid)(o.remoteJid);
  const E = (0, g.getMaybeMeUser)();
  const S = o.fromMe ? _ : E;
  const v = o.fromMe ? E : _;
  let T = (0, c.decodeJid)(o.participant);
  if (T == null && _ != null && m.default.isWid(_) && _ === (0, h.createWid)(i.PSA_JID)) {
    T = (0, h.createWid)(i.PSA_JID);
  }
  let M = (0, c.decodeJid)(e.participant);
  if (m.default.isGroup(_) || m.default.isStatusV3(_)) {
    if (T == null) {
      if (e.participant != null) {
        T = (0, c.decodeJid)(e.participant);
      } else if (o.fromMe) {
        T = E;
      }
    }
    M = M || T;
  }
  let A;
  let b = "in";
  if (E.equals(_)) {
    b = o.fromMe ? "out" : "in";
  }
  if (S === "broadcast") {
    return void __LOG__(3)`drop: broadcast`;
  }
  try {
    A = new p.default({
      fromMe: (0, a.default)(o.fromMe, "key.fromMe"),
      remote: _,
      id: (0, a.default)(o.id, "key.id"),
      participant: T
    });
  } catch (e) {
    return void __LOG__(3)`drop: cannot create MsgKey: ${e.stack}`;
  }
  let C = false;
  C = e.reactions.some(e => e.text != null);
  const P = {
    id: A,
    from: v,
    to: S,
    self: b,
    participant: T,
    type: f.MSG_TYPE.UNKNOWN,
    t: e.messageTimestamp || 0,
    ack: e.status - 1,
    author: M,
    invis: !!e.ignore,
    star: !!e.starred,
    broadcast: o.fromMe && e.broadcast,
    notifyName: e.pushName || "",
    encFilehash: (0, u.decodeBytes)(e.mediaCiphertextSha256),
    shareDuration: e.duration,
    labels: e.labels,
    ephemeralStartTimestamp: e.ephemeralStartTimestamp,
    ephemeralOutOfSync: e.ephemeralOutOfSync,
    bizPrivacyStatus: e.bizPrivacyStatus,
    verifiedBizName: e.verifiedBizName,
    reactions: e.reactions,
    hasReaction: C,
    agentId: e.agentId,
    revokeTimestamp: e.revokeMessageTimestamp,
    kicKey: undefined,
    kicState: undefined,
    pollInvalidated: ((t = e.pollAdditionalMetadata) === null || t === undefined ? undefined : t.pollInvalidated) === true,
    originalSelfAuthor: (0, c.decodeJid)(e.originalSelfAuthorUserJidString),
    kicTimestampMs: undefined,
    pinInChat: e.pinInChat,
    pmCampaignId: (n = e.premiumMessageInfo) === null || n === undefined ? undefined : n.serverCampaignId,
    bizSource: ((r = e.premiumMessageInfo) === null || r === undefined ? undefined : r.serverCampaignId) != null ? "smb_promo" : undefined,
    bizBotType: e.is1PBizBotMessage === true ? s.BizBotType.BIZ_1P : null,
    botTargetSenderJid: e.botMessageInvokerJid != null ? (0, c.decodeJid)(e.botMessageInvokerJid) : null
  };
  if (e.keepInChat != null) {
    try {
      const t = (0, d.parseKeepInChatHistorySyncMessage)(e);
      if (t != null) {
        Object.assign(P, t);
      }
    } catch (e) {
      __LOG__(3)`parseWebMessageInfo: KIC fields are malformed`;
    }
  }
  if (e.message) {
    return (0, l.parseMsgProto)(e.message, P, "history", e.paymentInfo, e.finalLiveLocation, e.quotedPaymentInfo, null, null, null, P.bizSource);
  }
  return y(e, P);
};
var i = require("./418987.js");
var a = r(require("./670983.js"));
var o = require("./287461.js");
var s = require("./37237.js");
var l = require("./740293.js");
var u = require("./21094.js");
var c = require("./974637.js");
var d = require("./856947.js");
var p = r(require("./565754.js"));
var f = require("./373070.js");
var _ = require("./968923.js");
var g = require("./459857.js");
var m = r(require("./124928.js"));
var h = require("./669050.js");
function y(e, t) {
  if (e.messageStubType == null) {
    return;
  }
  const n = _.WebMessageInfo$StubType;
  switch (e.messageStubType) {
    case n.REVOKE:
      t.type = "revoked";
      t.subtype = "sender";
      return t;
    case n.CIPHERTEXT:
      t.type = "ciphertext";
      return t;
    case n.OVERSIZED:
      t.type = "oversized";
      return t;
    case n.FUTUREPROOF:
      t.subtype = "phone";
      return t;
    default:
      return E(e, t);
  }
}
function E(e, t) {
  var n;
  var r;
  var i;
  var a;
  if (e.messageStubType == null) {
    return;
  }
  const s = _.WebMessageInfo$StubType;
  t.type = "notification_template";
  t.templateParams = Array.isArray(e.messageStubParameters) ? e.messageStubParameters.map(t => e.messageStubType === s.GROUP_CREATE || e.messageStubType === s.GROUP_CHANGE_SUBJECT ? t : (0, c.decodeJid)(t)) : undefined;
  if (e.messageStubType == null) {
    t.templateParams = undefined;
    return t;
  }
  switch (e.messageStubType) {
    case s.NON_VERIFIED_TRANSITION:
      t.subtype = "non_verified_transition";
      break;
    case s.UNVERIFIED_TRANSITION:
      t.subtype = "unverified_transition";
      break;
    case s.VERIFIED_TRANSITION:
      t.subtype = "verified_transition";
      break;
    case s.VERIFIED_LOW_UNKNOWN:
      t.subtype = "verified_low_unknown";
      break;
    case s.VERIFIED_HIGH:
      t.subtype = "verified_high";
      break;
    case s.VERIFIED_INITIAL_UNKNOWN:
      t.subtype = "verified_initial_unknown";
      break;
    case s.VERIFIED_INITIAL_LOW:
      t.subtype = "verified_initial_low";
      break;
    case s.VERIFIED_INITIAL_HIGH:
      t.subtype = "verified_initial_high";
      break;
    case s.VERIFIED_TRANSITION_ANY_TO_NONE:
      t.subtype = "verified_transition_any_to_none";
      break;
    case s.VERIFIED_TRANSITION_ANY_TO_HIGH:
      t.subtype = "verified_transition_any_to_high";
      break;
    case s.VERIFIED_TRANSITION_HIGH_TO_LOW:
      t.subtype = "verified_transition_high_to_low";
      break;
    case s.VERIFIED_TRANSITION_HIGH_TO_UNKNOWN:
      t.subtype = "verified_transition_high_to_unknown";
      break;
    case s.VERIFIED_TRANSITION_UNKNOWN_TO_LOW:
      t.subtype = "verified_transition_unknown_to_low";
      break;
    case s.VERIFIED_TRANSITION_LOW_TO_UNKNOWN:
      t.subtype = "verified_transition_low_to_unknown";
      break;
    case s.VERIFIED_TRANSITION_NONE_TO_LOW:
      t.subtype = "verified_transition_none_to_low";
      break;
    case s.VERIFIED_TRANSITION_NONE_TO_UNKNOWN:
      t.subtype = "verified_transition_none_to_unknown";
      break;
    case s.GROUP_CREATE:
      t.type = "gp2";
      t.subtype = "create";
      t.body = t.templateParams[0];
      t.templateParams = undefined;
      break;
    case s.REPORT_TO_ADMIN_ENABLED_STATUS:
      t.type = "gp2";
      t.subtype = "allow_admin_reports";
      break;
    case s.GROUP_DELETE:
      t.type = "gp2";
      t.subtype = "delete";
      t.templateParams = undefined;
      break;
    case s.GROUP_CHANGE_SUBJECT:
      t.type = "gp2";
      t.subtype = "subject";
      t.body = t.templateParams[0];
      t.templateParams = undefined;
      break;
    case s.GROUP_CHANGE_ICON:
      t.type = "gp2";
      t.subtype = "picture";
      t.body = t.templateParams[0];
      t.templateParams = undefined;
      break;
    case s.GROUP_CHANGE_INVITE_LINK:
      t.type = "gp2";
      t.subtype = "revoke_invite";
      break;
    case s.GROUP_CHANGE_DESCRIPTION:
      t.type = "gp2";
      t.subtype = "description";
      t.body = t.templateParams[0];
      break;
    case s.GROUP_CHANGE_RESTRICT:
      t.type = "gp2";
      t.subtype = "restrict";
      t.body = t.templateParams[0];
      break;
    case s.GROUP_CHANGE_ANNOUNCE:
      t.type = "gp2";
      t.subtype = "announce";
      t.body = t.templateParams[0];
      break;
    case s.GROUP_CHANGE_NO_FREQUENTLY_FORWARDED:
      t.type = "gp2";
      t.subtype = "no_frequently_forwarded";
      t.body = t.templateParams[0];
      break;
    case s.GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE:
      t.type = "gp2";
      t.subtype = "announce_msg_bounce";
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_ADD:
      t.type = "gp2";
      t.subtype = "add";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      if (Array.isArray(t.recipients) && t.recipients.length === 1 && t.author === t.recipients[0]) {
        t.author = undefined;
      }
      break;
    case s.GROUP_PARTICIPANT_REMOVE:
      t.type = "gp2";
      t.subtype = "remove";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_PROMOTE:
      t.type = "gp2";
      t.subtype = "promote";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_DEMOTE:
      t.type = "gp2";
      t.subtype = "demote";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_INVITE:
      t.type = "gp2";
      t.subtype = "invite";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_LEAVE:
      t.type = "gp2";
      t.subtype = "leave";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_CHANGE_NUMBER:
      t.type = "gp2";
      t.subtype = "modify";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_V4_ADD_INVITE_SENT:
      t.type = "gp2";
      t.subtype = "v4_add_invite_sent";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_ADD_REQUEST_JOIN:
      t.type = "gp2";
      t.subtype = "v4_add_invite_join";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GROUP_INVITE_LINK_GROWTH_LOCKED:
      t.type = "gp2";
      t.subtype = t.templateParams[0] === "true" ? "growth_locked" : "growth_unlocked";
      t.body = "invite";
      t.templateParams = undefined;
      break;
    case s.GROUP_PARTICIPANT_LINKED_GROUP_JOIN:
      t.type = "gp2";
      t.subtype = "linked_group_join";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.BROADCAST_CREATE:
      t.type = "broadcast_notification";
      t.subtype = "create";
      t.body = t.templateParams[0] || "0";
      t.templateParams = undefined;
      break;
    case s.BROADCAST_ADD:
      t.type = "broadcast_notification";
      t.subtype = "add";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.BROADCAST_REMOVE:
      t.type = "broadcast_notification";
      t.subtype = "remove";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.GENERIC_NOTIFICATION:
      t.type = "notification";
      t.body = t.templateParams[0];
      t.templateParams = undefined;
      break;
    case s.E2E_IDENTITY_CHANGED:
      t.type = "e2e_notification";
      t.subtype = "identity";
      t.body = t.templateParams[0] instanceof m.default ? t.templateParams[0].toString() : t.templateParams[0];
      t.templateParams = undefined;
      break;
    case s.E2E_IDENTITY_UNAVAILABLE:
      t.type = "e2e_notification";
      t.subtype = "e2e_identity_unavailable";
      break;
    case s.CHAT_PSA:
      t.type = "e2e_notification";
      t.subtype = "chat_psa";
      break;
    case s.E2E_DEVICE_CHANGED:
      t.type = "e2e_notification";
      t.subtype = "device";
      t.body = t.templateParams[0] instanceof m.default ? t.templateParams[0].toString() : t.templateParams[0];
      t.devicesAdded = parseInt(t.templateParams[1], 10);
      t.devicesRemoved = parseInt(t.templateParams[2], 10);
      t.templateParams = undefined;
      break;
    case s.E2E_ENCRYPTED:
      t.type = "e2e_notification";
      t.subtype = "encrypt";
      break;
    case s.E2E_ENCRYPTED_NOW:
      t.type = "e2e_notification";
      t.subtype = "encrypt_now";
      break;
    case s.CALL_MISSED_VOICE:
      t.type = "call_log";
      t.subtype = "miss";
      break;
    case s.CALL_MISSED_VIDEO:
      t.type = "call_log";
      t.subtype = "miss_video";
      break;
    case s.CALL_MISSED_GROUP_VOICE:
      t.type = "call_log";
      t.subtype = "miss_group";
      break;
    case s.CALL_MISSED_GROUP_VIDEO:
      t.type = "call_log";
      t.subtype = "miss_group_video";
      break;
    case s.SILENCED_UNKNOWN_CALLER_AUDIO:
    case s.SILENCED_UNKNOWN_CALLER_VIDEO:
      t.type = "call_log";
      t.subtype = "silence";
      break;
    case s.INDIVIDUAL_CHANGE_NUMBER:
      t.subtype = "change_number";
      break;
    case s.SENDER_INVITE:
      t.subtype = "sender_invite";
      break;
    case s.RECEIVER_INVITE:
      t.subtype = "receiver_invite";
      break;
    case s.MASKED_THREAD_CREATED:
      t.subtype = "masked_thread_created";
      break;
    case s.CAG_MASKED_THREAD_CREATED:
      t.subtype = "cag_masked_thread_created";
      break;
    case s.CHANGE_EPHEMERAL_SETTING:
      t.type = "gp2";
      t.subtype = "ephemeral";
      t.author = t.templateParams[1];
      break;
    case s.PAYMENT_CIPHERTEXT:
      t.type = "payment";
      t.subtype = "ciphertext";
      if (e.paymentInfo != null) {
        const n = (0, c.parseMsgPaymentInfo)(e.paymentInfo);
        t.paymentStatus = n.paymentStatus;
        t.paymentTxnStatus = n.paymentTxnStatus;
        t.paymentCurrency = n.paymentCurrency;
        t.paymentAmount1000 = n.paymentAmount1000;
        t.paymentMessageReceiverJid = n.paymentMessageReceiverJid;
        t.paymentExpiryTimestamp = n.paymentExpiryTimestamp;
        t.paymentTransactionTimestamp = n.paymentTransactionTimestamp;
      }
      break;
    case s.PAYMENT_FUTUREPROOF:
      t.type = "payment";
      t.subtype = "futureproof";
      if (e.paymentInfo != null) {
        const n = (0, c.parseMsgPaymentInfo)(e.paymentInfo);
        t.paymentStatus = n.paymentStatus;
        t.paymentTxnStatus = n.paymentTxnStatus;
        t.paymentCurrency = n.paymentCurrency;
        t.paymentAmount1000 = n.paymentAmount1000;
        t.paymentMessageReceiverJid = n.paymentMessageReceiverJid;
        t.paymentExpiryTimestamp = n.paymentExpiryTimestamp;
        t.paymentTransactionTimestamp = n.paymentTransactionTimestamp;
      }
      break;
    case s.PAYMENT_ACTION_REQUEST_CANCELLED:
      t.subtype = "payment_transaction_request_cancelled";
      break;
    case s.PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED:
      t.subtype = "payment_transaction_status_update_failed";
      break;
    case s.PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED:
      t.subtype = "payment_transaction_status_update_refunded";
      break;
    case s.PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED:
      t.subtype = "payment_transaction_status_update_refund_failed";
      break;
    case s.PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP:
      t.subtype = "payment_transaction_status_receiver_pending_setup";
      break;
    case s.PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP:
      t.subtype = "payment_transaction_status_receiver_success_after_hiccup";
      break;
    case s.PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER:
      t.subtype = "payment_action_account_setup_reminder";
      break;
    case s.PAYMENT_ACTION_SEND_PAYMENT_REMINDER:
      t.subtype = "payment_action_send_payment_reminder";
      break;
    case s.PAYMENT_ACTION_SEND_PAYMENT_INVITATION:
      t.subtype = "payment_action_send_payment_invitation";
      break;
    case s.PAYMENT_ACTION_REQUEST_DECLINED:
      t.subtype = "payment_action_request_declined";
      break;
    case s.PAYMENT_ACTION_REQUEST_EXPIRED:
      t.subtype = "payment_action_request_expired";
      break;
    case s.BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM:
      t.subtype = "biz_verified_transition_top_to_bottom";
      break;
    case s.BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP:
      t.subtype = "biz_verified_transition_bottom_to_top";
      break;
    case s.BIZ_INTRO_TOP:
      t.subtype = "biz_intro_top";
      break;
    case s.BIZ_INTRO_BOTTOM:
      t.subtype = "biz_intro_bottom";
      break;
    case s.BIZ_NAME_CHANGE:
      t.subtype = "biz_name_change";
      break;
    case s.BIZ_MOVE_TO_CONSUMER_APP:
      t.subtype = "biz_move_to_consumer_app";
      break;
    case s.BIZ_TWO_TIER_MIGRATION_TOP:
      t.subtype = "biz_two_tier_migration_top";
      break;
    case s.BIZ_TWO_TIER_MIGRATION_BOTTOM:
      t.subtype = "biz_two_tier_migration_bottom";
      break;
    case s.BLUE_MSG_BSP_FB_TO_BSP_PREMISE:
      t.subtype = "blue_msg_bsp_fb_to_bsp_premise";
      break;
    case s.BLUE_MSG_BSP_FB_TO_SELF_FB:
      t.subtype = "blue_msg_bsp_fb_to_self_fb";
      break;
    case s.BLUE_MSG_BSP_FB_TO_SELF_PREMISE:
      t.subtype = "blue_msg_bsp_fb_to_self_premise";
      break;
    case s.BLUE_MSG_BSP_FB_UNVERIFIED:
      t.subtype = "blue_msg_bsp_fb_unverified";
      break;
    case s.BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED:
      t.subtype = "blue_msg_bsp_fb_unverified_to_bsp_premise_verified";
      break;
    case s.BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED:
      t.subtype = "blue_msg_bsp_fb_unverified_to_self_fb_verified";
      break;
    case s.BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED:
      t.subtype = "blue_msg_bsp_fb_unverified_to_self_premise_verified";
      break;
    case s.BLUE_MSG_BSP_FB_VERIFIED:
      t.subtype = "blue_msg_bsp_fb_verified";
      break;
    case s.BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_bsp_fb_verified_to_bsp_premise_unverified";
      break;
    case s.BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED:
      t.subtype = "blue_msg_bsp_fb_verified_to_self_fb_unverified";
      break;
    case s.BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_bsp_fb_verified_to_self_premise_unverified";
      break;
    case s.BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE:
      t.subtype = "blue_msg_bsp_premise_to_self_premise";
      break;
    case s.BLUE_MSG_BSP_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_bsp_premise_unverified";
      break;
    case s.BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED:
      t.subtype = "blue_msg_bsp_premise_unverified_to_self_premise_verified";
      break;
    case s.BLUE_MSG_BSP_PREMISE_VERIFIED:
      t.subtype = "blue_msg_bsp_premise_verified";
      break;
    case s.BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_bsp_premise_verified_to_self_premise_unverified";
      break;
    case s.BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED:
      t.subtype = "blue_msg_consumer_to_bsp_fb_unverified";
      break;
    case s.BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_consumer_to_bsp_premise_unverified";
      break;
    case s.BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED:
      t.subtype = "blue_msg_consumer_to_self_fb_unverified";
      break;
    case s.BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_consumer_to_self_premise_unverified";
      break;
    case s.BLUE_MSG_SELF_FB_TO_BSP_PREMISE:
      t.subtype = "blue_msg_self_fb_to_bsp_premise";
      break;
    case s.BLUE_MSG_SELF_FB_TO_SELF_PREMISE:
      t.subtype = "blue_msg_self_fb_to_self_premise";
      break;
    case s.BLUE_MSG_SELF_FB_UNVERIFIED:
      t.subtype = "blue_msg_self_fb_unverified";
      break;
    case s.BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED:
      t.subtype = "blue_msg_self_fb_unverified_to_bsp_premise_verified";
      break;
    case s.BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED:
      t.subtype = "blue_msg_self_fb_unverified_to_self_premise_verified";
      break;
    case s.BLUE_MSG_SELF_FB_VERIFIED:
      t.subtype = "blue_msg_self_fb_verified";
      break;
    case s.BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_self_fb_verified_to_bsp_premise_unverified";
      break;
    case s.BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_self_fb_verified_to_self_premise_unverified";
      break;
    case s.BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE:
      t.subtype = "blue_msg_self_premise_to_bsp_premise";
      break;
    case s.BLUE_MSG_SELF_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_self_premise_unverified";
      break;
    case s.BLUE_MSG_SELF_PREMISE_VERIFIED:
      t.subtype = "blue_msg_self_premise_verified";
      break;
    case s.BLUE_MSG_TO_BSP_FB:
      t.subtype = "blue_msg_to_bsp_fb";
      break;
    case s.BLUE_MSG_TO_CONSUMER:
      t.subtype = "blue_msg_to_consumer";
      break;
    case s.BLUE_MSG_TO_SELF_FB:
      t.subtype = "blue_msg_to_self_fb";
      break;
    case s.BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED:
      t.subtype = "blue_msg_unverified_to_bsp_fb_verified";
      break;
    case s.BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED:
      t.subtype = "blue_msg_unverified_to_bsp_premise_verified";
      break;
    case s.BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED:
      t.subtype = "blue_msg_unverified_to_self_fb_verified";
      break;
    case s.BLUE_MSG_UNVERIFIED_TO_VERIFIED:
      t.subtype = "blue_msg_unverified_to_verified";
      break;
    case s.BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED:
      t.subtype = "blue_msg_verified_to_bsp_fb_unverified";
      break;
    case s.BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED:
      t.subtype = "blue_msg_verified_to_bsp_premise_unverified";
      break;
    case s.BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED:
      t.subtype = "blue_msg_verified_to_self_fb_unverified";
      break;
    case s.BLUE_MSG_VERIFIED_TO_UNVERIFIED:
      t.subtype = "blue_msg_verified_to_unverified";
      break;
    case s.BIZ_PRIVACY_MODE_INIT_FB:
      t.subtype = "biz_privacy_mode_init_fb";
      if ((n = t.id) === null || n === undefined || (r = n.remote) === null || r === undefined ? undefined : r.isBot()) {
        t.subtype = "bot_init";
      }
      break;
    case s.BIZ_PRIVACY_MODE_INIT_BSP:
      t.subtype = "biz_privacy_mode_init_bsp";
      break;
    case s.BIZ_PRIVACY_MODE_TO_FB:
      t.subtype = "biz_privacy_mode_to_fb";
      if ((i = t.id) === null || i === undefined || (a = i.remote) === null || a === undefined ? undefined : a.isBot()) {
        t.subtype = "bot_init";
      }
      break;
    case s.BIZ_PRIVACY_MODE_TO_BSP:
      t.subtype = "biz_privacy_mode_to_bsp";
      break;
    case s.DISAPPEARING_MODE:
      t.subtype = "disappearing_mode";
      break;
    case s.BLOCK_CONTACT:
      t.subtype = "block_contact";
      break;
    case s.ADMIN_REVOKE:
      t.type = "revoked";
      t.subtype = "admin";
      t.revokeSender = t.templateParams[1] instanceof m.default ? t.templateParams[1] : undefined;
      if (!t.revokeSender) {
        __LOG__(2)`ProtocolParser: admin revoke came without admin JID`;
      }
      t.templateParams = undefined;
      break;
    case s.COMMUNITY_LINK_PARENT_GROUP:
      t.type = "gp2";
      t.subtype = "parent_group_link";
      break;
    case s.COMMUNITY_LINK_SIBLING_GROUP:
      t.type = "gp2";
      t.subtype = "sibling_group_link";
      break;
    case s.COMMUNITY_LINK_SUB_GROUP:
      t.type = "gp2";
      t.subtype = "sub_group_link";
      break;
    case s.COMMUNITY_CREATE:
      t.type = "gp2";
      t.subtype = "community_create";
      break;
    case s.COMMUNITY_UNLINK_PARENT_GROUP:
      t.type = "gp2";
      t.subtype = "parent_group_unlink";
      break;
    case s.INTEGRITY_UNLINK_PARENT_GROUP:
      t.type = "gp2";
      t.subtype = "integrity_parent_group_unlink";
      break;
    case s.COMMUNITY_UNLINK_SIBLING_GROUP:
      t.type = "gp2";
      t.subtype = "sibling_group_unlink";
      break;
    case s.COMMUNITY_UNLINK_SUB_GROUP:
      t.type = "gp2";
      t.subtype = "sub_group_unlink";
      break;
    case s.COMMUNITY_PARTICIPANT_PROMOTE:
      t.type = "gp2";
      t.subtype = "linked_group_promote";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.COMMUNITY_PARTICIPANT_DEMOTE:
      t.type = "gp2";
      t.subtype = "linked_group_demote";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.EPHEMERAL_KEEP_IN_CHAT:
      t.type = "gp2";
      t.subtype = "ephemeral_keep_in_chat";
      break;
    case s.GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE:
      t.type = "gp2";
      t.subtype = "membership_approval_mode";
      break;
    case s.GROUP_MEMBER_ADD_MODE:
      if (!(0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
        t.templateParams = undefined;
        break;
      }
      t.type = "gp2";
      t.subtype = "member_add_mode";
      break;
    case s.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST:
      t.type = "gp2";
      t.subtype = "membership_approval_request";
      break;
    case s.COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL:
      t.type = "gp2";
      t.subtype = "parent_group_link_membership_approval";
      break;
    case s.GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP:
      t.type = "gp2";
      t.subtype = "auto_add";
      break;
    case s.COMMUNITY_PARENT_GROUP_DELETED:
      t.type = "gp2";
      t.subtype = "delete_parent_group";
      break;
    case s.BIZ_CHAT_ASSIGNMENT:
      t.subtype = "chat_assignment";
      break;
    case s.BIZ_CHAT_ASSIGNMENT_UNASSIGN:
      t.subtype = "chat_assignment_unassign";
      break;
    case s.COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED:
      t.type = "gp2";
      t.subtype = "subject";
      t.body = t.templateParams[1];
      break;
    case s.CAG_INVITE_AUTO_ADD:
      t.type = "gp2";
      t.subtype = "invite_auto_add";
      t.recipients = [(0, g.getMaybeMeUser)()];
      break;
    case s.CAG_INVITE_AUTO_JOINED:
      t.type = "gp2";
      t.subtype = "invite_auto_add";
      t.recipients = t.templateParams;
      t.templateParams = undefined;
      break;
    case s.COMMUNITY_PARTICIPANT_ADD_RICH:
      t.type = "gp2";
      t.subtype = "community_participant_add_rich";
      break;
    case s.SUB_GROUP_PARTICIPANT_ADD_RICH:
      t.type = "gp2";
      t.subtype = "sub_group_participant_add_rich";
      break;
    case s.SUB_GROUP_INVITE_RICH:
      t.type = "gp2";
      t.subtype = "sub_group_invite_rich";
      t.author = undefined;
      break;
    case s.COMMUNITY_INVITE_AUTO_ADD_RICH:
      t.type = "gp2";
      t.subtype = "community_invite_auto_add_rich";
      t.author = undefined;
      break;
    case s.COMMUNITY_INVITE_RICH:
      t.type = "gp2";
      t.subtype = "community_invite_rich";
      t.author = undefined;
      break;
    case s.COMMUNITY_LINK_PARENT_GROUP_RICH:
      t.type = "gp2";
      t.subtype = "community_link_parent_group_rich";
      break;
    case s.COMMUNITY_CHANGE_DESCRIPTION:
      t.type = "gp2";
      t.subtype = "parent_group_description";
      t.body = t.templateParams[0];
      break;
    case s.PINNED_MESSAGE_IN_CHAT:
      t.type = "pinned_message";
      break;
    case s.COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS:
      t.type = "gp2";
      t.subtype = "allow_non_admin_sub_group_creation";
      break;
    case s.EMPTY_SUBGROUP_CREATE:
      t.type = "gp2";
      t.subtype = "empty_subgroup_create";
      break;
    case s.SUGGESTED_SUBGROUP_ANNOUNCE:
      t.type = "gp2";
      t.subtype = "created_subgroup_suggestion";
      break;
    case s.SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH:
      t.type = "gp2";
      t.subtype = "subgroup_admin_triggered_auto_add";
      break;
    case s.GENERAL_CHAT_ADD:
      t.type = "gp2";
      t.subtype = "general_chat_add";
      break;
    case s.GENERAL_CHAT_AUTO_ADD_DISABLED:
      t.type = "gp2";
      t.subtype = "general_chat_auto_add_disabled";
      break;
    case s.BIZ_BOT_1P_MESSAGING_ENABLED:
      t.type = f.MSG_TYPE.NOTIFICATION_TEMPLATE;
      t.subtype = "biz_bot_1p_disclosure";
      break;
    case s.BIZ_BOT_3P_MESSAGING_ENABLED:
      t.type = f.MSG_TYPE.NOTIFICATION_TEMPLATE;
      t.subtype = "biz_bot_3p_disclosure";
      break;
    case s.CHANGE_USERNAME:
      t.subtype = "change_username";
      break;
    default:
      t.templateParams = undefined;
  }
  return t;
}