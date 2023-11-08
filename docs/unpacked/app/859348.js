var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canSendPolls = function (e) {
  if (e.isNewsletter) {
    return (0, u.isNewsletterPollsCreationEnabled)();
  }
  if (e.groupMetadata == null) {
    return true;
  }
  if (e.isCAG) {
    return (0, o.getGroupParticipantsCount)(e.groupMetadata) <= (0, i.getABPropConfigValue)("pnh_cag_disable_polls_group_size") && (0, c.isPollsCreationEnabledInCags)();
  }
  return true;
};
exports.getMdChatAssignmentChatTypeFn = function (e) {
  const {
    kind: t
  } = e;
  if (t == null) {
    throw new TypeError(`Invalid Chat.kind ${String(e.kind)}`);
  }
  switch (t) {
    case a.ChatKindType.Chat:
      return d.MD_CHAT_ASSIGNMENT_CHAT_TYPE.INDIVIDUAL;
    case a.ChatKindType.Group:
      return d.MD_CHAT_ASSIGNMENT_CHAT_TYPE.GROUP;
    case a.ChatKindType.Broadcast:
      return d.MD_CHAT_ASSIGNMENT_CHAT_TYPE.BROADCAST_LIST;
    case a.ChatKindType.Newsletter:
      return d.MD_CHAT_ASSIGNMENT_CHAT_TYPE.CHANNEL;
    case a.ChatKindType.Community:
      return d.MD_CHAT_ASSIGNMENT_CHAT_TYPE.COMMUNITY;
  }
};
exports.getOptimisticUnreadCount = function (e) {
  const {
    unreadCount: t,
    pendingSeenCount: n
  } = e;
  if (t === s.default.MARKED_AS_UNREAD) {
    return t;
  }
  return Math.max(0, t - n);
};
exports.isPreviewMessage = function (e) {
  return e.type !== l.MSG_TYPE.E2E_NOTIFICATION && (e.type !== l.MSG_TYPE.NOTIFICATION_TEMPLATE || e.subtype === "chat_assignment" || e.subtype === "chat_assignment_unassign") && e.type !== l.MSG_TYPE.REACTION && e.type !== l.MSG_TYPE.POLL_UPDATE && e.type !== l.MSG_TYPE.KEEP_IN_CHAT && e.subtype !== "newsletter_admin_context_card" && e.subtype !== "newsletter_privacy" && !e.pendingDeleteForMe && e.botPluginReferenceIndex == null;
};
var i = require("./287461.js");
var a = require("./953213.js");
var o = require("./374660.js");
var s = r(require("./846870.js"));
var l = require("./373070.js");
var u = require("./73225.js");
var c = require("./671598.js");
var d = require("./469723.js");