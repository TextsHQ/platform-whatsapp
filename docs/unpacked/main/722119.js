Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canPrivateReply = function (e) {
  var t;
  var n;
  const a = (0, d.unproxy)(e);
  const r = (0, o.getChat)(a);
  if (r.isNewsletter) {
    return false;
  }
  if (a.isCarouselCard) {
    return a.isCarouselCard;
  }
  if ((0, u.getIsBotFutureproofPlaceholder)(a)) {
    return false;
  }
  if (((t = a.author) === null || t === undefined ? undefined : t.isLid()) && ((n = r.groupMetadata) === null || n === undefined ? undefined : n.groupType) === l.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    return false;
  }
  if (r.isSuspendedOrTerminated() && (0, i.isGroupSuspendV2Enabled)()) {
    return false;
  }
  return !a.mayFail() && !(0, u.getIsNotification)(a) && a.type !== s.MSG_TYPE.UNKNOWN && a.type !== s.MSG_TYPE.CIPHERTEXT && a.type !== s.MSG_TYPE.OVERSIZED && a.type !== s.MSG_TYPE.REVOKED && !(0, u.getIsSentByMe)(a) && (0, u.getIsGroupMsg)(a) && a.interactiveButtonsReleased() && !a.isExpiredAndNotKept();
};
exports.canPrivateReplyInRestrictedGrp = function (e) {
  var t;
  var n;
  const a = (0, d.unproxy)(e);
  if (((t = a.author) === null || t === undefined ? undefined : t.isLid()) && ((n = (0, o.getChat)(a).groupMetadata) === null || n === undefined ? undefined : n.groupType) === l.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    return false;
  }
  return !!(0, o.getChat)(a).isAnnounceGrpRestrict && !(0, o.getChat)(a).isReadOnly && !a.mayFail() && !(0, u.getIsSentByMe)(a) && !(0, u.getIsNotification)(a) && a.type !== s.MSG_TYPE.UNKNOWN && a.type !== s.MSG_TYPE.CIPHERTEXT && a.type !== s.MSG_TYPE.OVERSIZED && a.type !== s.MSG_TYPE.REVOKED && a.interactiveButtonsReleased() && !a.isExpiredAndNotKept() && !a.isCarouselCard;
};
exports.canReplyMsg = function (e) {
  const t = (0, d.unproxy)(e);
  if ((0, o.getChat)(t).isNewsletter) {
    return false;
  }
  if (t.isCarouselCard) {
    return false;
  }
  if ((0, u.getIsBotFutureproofPlaceholder)(t)) {
    return false;
  }
  return (0, o.getChat)(t).canSend && f(e);
};
exports.isReplyMsg = function (e) {
  const t = (0, d.unproxy)(e);
  return Boolean(t.quotedMsg);
};
exports.isStatusReplyMsg = function (e) {
  const t = (0, d.unproxy)(e);
  const n = (0, c.getQuotedMsgObj)(t);
  return n != null && (0, u.getIsStatusV3)(n);
};
exports.replyChecks = f;
var a = require("../app/169571.js");
var r = require("../app/374660.js");
var o = require("../app/163755.js");
var l = require("../app/862159.js");
var i = require("../app/97858.js");
var u = require("../app/787742.js");
var s = require("../app/373070.js");
var c = require("../app/592978.js");
var d = require("../app/163139.js");
function f(e) {
  const t = (0, d.unproxy)(e);
  return !t.mayFail() && !(0, u.getIsNotification)(t) && !(0, r.isSuspendedGroup)((0, o.getChat)(t)) && !(0, r.isTerminatedGroup)((0, o.getChat)(t)) && t.type !== s.MSG_TYPE.UNKNOWN && t.type !== s.MSG_TYPE.CIPHERTEXT && t.type !== s.MSG_TYPE.OVERSIZED && t.type !== s.MSG_TYPE.REVOKED && t.interactiveButtonsReleased() && !t.isExpiredAndNotKept() && !(t.type === s.MSG_TYPE.CHAT && t.subtype === a.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE);
}