var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canAdminRevokeMsg = function (e) {
  var t;
  const n = (0, I.unproxy)(e);
  const r = (0, _.getChat)(n);
  if (r.isNewsletter) {
    return k(n);
  }
  const i = (0, a.unixTime)() - n.t <= O.REVOKE_WINDOW;
  return G(n) && !n.id.fromMe && Boolean((t = r.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin()) && i;
};
exports.canBotResponseBeRevokeByInvoker = function (e) {
  const t = (0, I.unproxy)(e);
  const n = (0, S.isMetaBotResponseToMyInvoke)(t);
  const r = (0, a.unixTime)() - t.t <= O.REVOKE_WINDOW;
  return (0, l.isBotEnabled)() && G(t) && r && n;
};
exports.canCopyNewsletterMessageLink = function (e) {
  const t = (0, _.getChat)(e);
  if (!t.isNewsletter) {
    return false;
  }
  if (!L(e)) {
    return false;
  }
  if (t.newsletterMetadata == null) {
    __LOG__(4, undefined, new Error())`chat doesn't have newsletter metadata, will be impossible to generate message link`;
    return false;
  }
  if (t.newsletterMetadata.inviteCode == null) {
    __LOG__(4, undefined, new Error())`chat doesn't have a newsletter invite code, will be impossible to generate message link`;
    return false;
  }
  if (e.serverId == null) {
    __LOG__(4, undefined, new Error())`msg doesn't have a server ID, will be impossible to generate message link`;
    return false;
  }
  if (e.type === T.MSG_TYPE.REVOKED) {
    return false;
  }
  return (0, M.isNewsletterMessageLinkEnabled)();
};
exports.canDownloadMsg = function (e) {
  var t;
  const n = (0, I.unproxy)(e);
  if ((0, _.getChat)(n).isSuspendedOrTerminated() && (0, E.isGroupSuspendV2Enabled)()) {
    return false;
  }
  if ((0, _.getAsRevoked)(n)) {
    return false;
  }
  if (n.isViewOnce) {
    return false;
  }
  if (n.type === T.MSG_TYPE.VCARD || n.type === T.MSG_TYPE.MULTI_VCARD) {
    return true;
  }
  if (!((t = n.mediaData) === null || t === undefined ? undefined : t.isDownloadable())) {
    return false;
  }
  if (n.type === T.MSG_TYPE.STICKER) {
    return false;
  }
  if (n.type === T.MSG_TYPE.PTV && !(0, S.getIsSentByMe)(n)) {
    return false;
  }
  return true;
};
exports.canEditCaption = function (e) {
  0;
  const t = (0, I.unproxy)(e);
  return w(t) && (0, y.isParentWithinEditProcessingWindow)({
    parentTsInSeconds: t.t,
    msgKey: t.id
  });
};
exports.canEditText = function (e) {
  0;
  const t = (0, I.unproxy)(e);
  return D(t) && (0, y.isParentWithinEditProcessingWindow)({
    parentTsInSeconds: t.t,
    msgKey: t.id
  });
};
exports.canEnterEditingFlow = function (e) {
  0;
  const t = (0, I.unproxy)(e);
  return (D(t, true) || w(t, true)) && (0, y.isParentWithinEditUIWindow)({
    parentTsInSeconds: t.t,
    msgKey: t.id
  });
};
exports.canForwardMsg = R;
exports.canPinMsg = function (e) {
  const t = (0, I.unproxy)(e);
  const n = (0, _.getChat)(t);
  if (n.isNewsletter || n.id.isBot()) {
    return false;
  }
  if (t.isCarouselCard) {
    return false;
  }
  if ((0, S.getIsGroupMsg)(t)) {
    const e = (0, i.default)(n.groupMetadata, "chat.groupMetadata");
    if (!e.participants.iAmMember()) {
      return false;
    }
    if (e.restrict && !e.participants.iAmAdmin()) {
      return false;
    }
  }
  return !(0, S.getIsNotification)(t) && !(0, S.getIsFutureproof)(t) && t.type !== T.MSG_TYPE.REVOKED && !(t.ack < s.ACK.SENT && (0, S.getIsSentByMe)(t)) && t.interactiveButtonsReleased() && !t.isExpiredAndNotKept() && (0, C.isPinnedMessagesM1SenderEnabled)();
};
exports.canQuickForwardMsg = function (e) {
  const t = (0, I.unproxy)(e);
  if (!R(e) || (0, S.getIsFrequentlyForwarded)(t) || (0, v.getSuspiciousLinks)(t).length !== 0 || (0, _.getAsPttLike)(t) != null || t.type === T.MSG_TYPE.STICKER || !t.interactiveButtonsReleased()) {
    return false;
  }
  return (0, _.getAsMms)(t) != null || (0, S.getLinkPreview)(t) || t.type === T.MSG_TYPE.VCARD || t.type === T.MSG_TYPE.LOCATION || t.ctwaContext != null;
};
exports.canReportMsg = function (e) {
  const t = (0, I.unproxy)(e);
  if ((0, S.getIsSentByMe)(t) || (0, S.getIsPSA)(t) || (0, S.getIsBotResponse)(t)) {
    return false;
  }
  return (0, g.isSpamSupportedForMessageType)(t.type);
};
exports.canReportToAdmin = function (e) {
  const t = (0, S.getIsGroupMsg)(e);
  const n = (0, S.getIsSentByMe)(e);
  const r = (0, _.getChat)(e).groupMetadata;
  if (!(0, o.getABPropConfigValue)("report_to_admin_kill_switch") || n || e.isViewOnce || (0, _.getChat)(e).isNewsletter || (0, S.getIsMetaBotResponse)(e) || !t) {
    return false;
  }
  return Boolean(r == null ? undefined : r.reportToAdminMode);
};
exports.canRevokeNewsletterMsg = k;
exports.canSenderRevokeMsg = function (e) {
  const t = (0, I.unproxy)(e);
  const n = (0, a.unixTime)() - t.t <= O.REVOKE_WINDOW;
  return G(t) && t.id.fromMe && n;
};
exports.canStarMsg = function (e) {
  const t = (0, I.unproxy)(e);
  if ((0, _.getChat)(t).isNewsletter) {
    return false;
  }
  if (t.isCarouselCard) {
    return false;
  }
  return (!(0, S.getIsEphemeral)(t) || t.supportsStarWithKeepInChat()) && !(0, S.getIsNotification)(t) && !(0, S.getIsFutureproof)(t) && !t.isViewOnce && t.type !== T.MSG_TYPE.REVOKED && !(t.ack < s.ACK.SENT && (0, S.getIsSentByMe)(t)) && t.interactiveButtonsReleased();
};
exports.displayTypeSupportsEditing = function (e) {
  switch (e) {
    case f.DISPLAY_TYPE.CONVERSATION:
    case f.DISPLAY_TYPE.ANNOUNCEMENT:
      return true;
    case f.DISPLAY_TYPE.NEWSLETTER:
      return (0, M.isNewsletterMessageEditingEnabled)();
    default:
      return false;
  }
};
exports.isNewsletterMsgOnServer = L;
var i = r(require("./670983.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./402994.js");
var l = require("./354458.js");
var u = require("./169571.js");
var c = require("./382895.js");
var d = require("./374660.js");
var p = require("./660666.js");
var f = require("./356097.js");
var _ = require("./163755.js");
var g = require("./126506.js");
var m = require("./172259.js");
var h = require("./483460.js");
var y = require("./591988.js");
var E = require("./97858.js");
var S = require("./787742.js");
var v = require("./44118.js");
var T = require("./373070.js");
var M = require("./73225.js");
var A = require("./751460.js");
var b = require("./14291.js");
var C = require("./591800.js");
var P = require("./533494.js");
var O = require("./140661.js");
var I = require("./163139.js");
function R(e) {
  var t;
  const n = (0, I.unproxy)(e);
  if (n.isCarouselCard) {
    return false;
  }
  const r = (0, _.getMaybeChat)(n);
  if ((r == null ? undefined : r.isSuspendedOrTerminated()) && (0, E.isGroupSuspendV2Enabled)()) {
    return false;
  }
  if ((r == null ? undefined : r.isNewsletter) && !(0, M.isNewsletterMessageForwardSendingEnabled)()) {
    return false;
  }
  if (n.type === T.MSG_TYPE.CIPHERTEXT) {
    return false;
  }
  if (n.type === T.MSG_TYPE.OVERSIZED) {
    return false;
  }
  if (n.type === T.MSG_TYPE.REVOKED) {
    return false;
  }
  if (n.type === T.MSG_TYPE.UNKNOWN) {
    return false;
  }
  if (n.type === T.MSG_TYPE.PAYMENT) {
    return false;
  }
  if (n.type === T.MSG_TYPE.POLL_CREATION) {
    return false;
  }
  if (n.type === T.MSG_TYPE.REQUEST_PHONE_NUMBER) {
    return false;
  }
  var i;
  if (n.type === T.MSG_TYPE.LIST) {
    return ((i = n.list) === null || i === undefined ? undefined : i.listType) === P.Message$ListMessage$ListType.PRODUCT_LIST;
  }
  if (n.type === T.MSG_TYPE.GROUPS_V4_INVITE) {
    return false;
  }
  if (n.type === T.MSG_TYPE.LOCATION && n.isLive) {
    return false;
  }
  if (n.type === T.MSG_TYPE.ORDER) {
    return false;
  }
  if (n.type === T.MSG_TYPE.INTERACTIVE && n.nativeFlowName != null) {
    return false;
  }
  if (!n.interactiveButtonsReleased()) {
    return false;
  }
  if (n.ack < s.ACK.SENT && (0, S.getIsSentByMe)(n)) {
    return false;
  }
  if (n.type === T.MSG_TYPE.CHAT && n.subtype === u.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
    return false;
  }
  if ((0, _.getAsMms)(n)) {
    const e = n.mediaData;
    if (e.mediaStage === m.MEDIA_DATA_STAGE.EXISTS) {
      return true;
    }
    if (e.mediaStage === m.MEDIA_DATA_STAGE.ERROR_MISSING) {
      return false;
    }
    if (e.mediaStage === m.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED) {
      return false;
    }
    if (e.mediaStage !== m.MEDIA_DATA_STAGE.RESOLVED && (n.type === T.MSG_TYPE.IMAGE || n.type === T.MSG_TYPE.VIDEO || n.type === T.MSG_TYPE.PTV || n.type === T.MSG_TYPE.PTT)) {
      return false;
    }
    if (n.type === T.MSG_TYPE.PTV && !(0, S.getIsSentByMe)(n)) {
      return false;
    }
    if (n.isViewOnce) {
      return false;
    }
    if ((0, _.getIsUnsentMedia)(n)) {
      return false;
    }
  }
  return !((t = n.nativeFlowButtons) === null || t === undefined ? undefined : t.length) && n.hsmTag !== c.HSM_TAG_TYPE.AUTHENTICATION;
}
function N(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if ((0, S.getIsBotQuery)(e)) {
    return false;
  }
  const n = (0, S.getIsEdited)(e) && (0, S.getIsFailed)(e) && !t || !e.mayFail();
  if ((0, _.getChat)(e).isNewsletter) {
    return (0, M.isNewsletterMessageEditingEnabled)() && (0, A.iAmAdminOrOwner)((0, _.getChat)(e).newsletterMetadata) && n && !e.isForwarded;
  } else {
    return (0, S.getIsSentByMe)(e) && !e.isForwarded && e.self === "out" && ((0, h.sendCagMsgEditEnabled)() || !(0, _.getChat)(e).isCAG) && n && (0, _.getChat)(e).canSend && !(0, _.getChat)(e).contact.isEnterprise;
  }
}
function D(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return ((0, S.getIsNewsletterMsg)(e) ? (0, M.isNewsletterMessageEditingEnabled)() : (0, h.sendTextEditEnabled)()) && (0, y.getMsgEditType)(e.type) === y.MsgEditType.TextEdit && N(e, t);
}
function w(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return ((0, S.getIsNewsletterMsg)(e) ? (0, M.isNewsletterMessageEditingEnabled)() : (0, h.sendCaptionEditEnabled)()) && (0, y.getMsgEditType)(e.type) === y.MsgEditType.CaptionEdit && Boolean(e.caption) && N(e, t);
}
function L(e) {
  return (0, a.unixTime)() - e.t <= O.NEWSLETTER_REVOKE_WINDOW;
}
function k(e) {
  var t;
  const n = (0, _.getChat)(e);
  if (!n.isNewsletter) {
    __LOG__(4, undefined, new Error())`canRevokeNewsletterMsg called on a non-newsletter chat`;
    return false;
  }
  const r = (t = n.newsletterMetadata) === null || t === undefined ? undefined : t.membershipType;
  return r != null && L(e) && (0, b.isMembershipAdminOrOwner)(r);
}
function G(e) {
  var t;
  const n = (0, _.getChat)(e);
  return !(n.isGroup && !((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmMember()) || (0, p.getIsMe)(n.contact) || n.contact.isEnterprise) && (0, S.getIsUserCreatedType)(e) && !e.broadcast && (!e.isUnsentPhoneMsg() || (0, S.getIsEdited)(e)) && !(0, _.getIsUnsentMedia)(e) && !(0, d.isSuspendedGroup)((0, _.getChat)(e)) && !(0, d.isTerminatedGroup)((0, _.getChat)(e));
}