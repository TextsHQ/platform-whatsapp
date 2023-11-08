var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMessageForwardMetric = function () {
  return h.apply(this, arguments);
};
exports.logMessageMetric = function (e) {
  e.markMessageSendT();
  e.commit();
};
exports.logMessageSendForChatThreadLogging = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./359987.js");
var l = require("./698867.js");
var u = require("./257147.js");
var c = require("./177938.js");
var d = require("./656134.js");
var p = require("./769786.js");
var f = require("./97858.js");
var _ = require("./787742.js");
var g = require("./373070.js");
var m = require("./313556.js");
function h() {
  return (h = (0, i.default)(function* (e) {
    let t = Boolean(e.caption);
    if ((0, f.documentWithCaptionsSendEnabled)() && e.type === g.MSG_TYPE.DOCUMENT) {
      t = e.isCaptionByUser;
    }
    const n = {
      messageType: e.getWamMessageType(),
      messageMediaType: e.getWamMediaType(),
      mediaCaptionPresent: t,
      fastForwardEnabled: true,
      messageIsFanout: true,
      isFrequentlyForwarded: Boolean((0, _.getIsFrequentlyForwarded)(e)),
      isForwardedForward: Boolean((0, _.getNumTimesForwarded)(e) > 1)
    };
    if (e.ephemeralDuration != null) {
      n.ephemeralityDuration = e.ephemeralDuration;
    }
    if ((0, o.getABPropConfigValue)("dm_initiator_trigger")) {
      const t = (0, _.getWamDisappearingModeTrigger)(e);
      if (t != null) {
        n.ephemeralityTriggerAction = t;
      }
      const r = (0, _.getWamDisappearingModeInitiatedByMe)(e);
      if (r != null) {
        n.ephemeralityInitiator = r;
      }
    }
    if (!(0, _.getIsGroupMsg)(e)) {
      const t = (0, d.getEphemeralDurationForUser)(c.ContactCollection.getMeContact());
      if (t != null) {
        n.senderDefaultDisappearingDuration = t;
      }
      const r = (0, d.getEphemeralDurationForUser)(c.ContactCollection.get(e.to));
      if (r != null) {
        n.receiverDefaultDisappearingDuration = r;
      }
    }
    const r = e.getWamDisappearingModeInitiator();
    if (r != null) {
      n.disappearingChatInitiator = r;
    }
    const i = yield (0, m.getGroupTypeFromChatWid)(e.to);
    if (i != null) {
      n.typeOfGroup = i;
    }
    return new p.ForwardSendWamEvent(n);
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    var t;
    if (((t = e.quotedMsg) === null || t === undefined ? undefined : t.type) !== g.MSG_TYPE.PRODUCT || !(0, _.getIsSentByMe)(e)) {
      return false;
    }
    return (yield (0, s.frontendSendAndReceive)("getChatForMsg", {
      msgKey: e.id
    })).contact.isBusiness;
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    if ((0, u.shouldIncrementMsgSendAndReceive)(e)) {
      (0, l.handleActivitiesForChatThreadLogging)([{
        activityType: "msgSend",
        chatId: e.id.remote,
        ts: (0, a.unixTime)(),
        isViewOnce: Boolean(e.isViewOnce),
        isReaction: (0, _.getIsReaction)(e),
        isForwarded: (0, _.getIsForwarded)(e),
        isCommerceMessage: (0, u.isCommerceMessage)(e),
        isPdpInquiry: yield y(e),
        isReply: (0, _.getIsReply)(e),
        isEdit: (0, _.getIsEditProtocolMsg)(e),
        isBot: (0, _.getIsBotQuery)(e)
      }]);
    }
  })).apply(this, arguments);
}