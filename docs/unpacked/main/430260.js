var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkChangeEphemeralDuration = function (e, t, n) {
  const a = e.map(e => k(e, t, n, m.DisappearingModeTrigger.BulkChange));
  return Promise.allSettled(a);
};
exports.changeEphemeralDuration = k;
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/632157.js");
var i = require("../app/287461.js");
var u = require("../app/738501.js");
var s = require("../app/698867.js");
var c = a(require("../app/235613.js"));
var d = require("../app/660666.js");
var f = require("../app/933915.js");
var p = require("../app/840089.js");
var m = require("../app/448609.js");
var h = require("./430117.js");
var g = require("../app/682144.js");
var E = require("./892208.js");
var v = a(require("../app/565754.js"));
var _ = require("../app/373070.js");
var y = require("../app/918602.js");
var C = require("../app/693741.js");
var b = a(require("./153039.js"));
var M = require("../app/459857.js");
var S = require("./802027.js");
var T = a(require("../app/556869.js"));
function w() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, o.default)(function* (e, t, n) {
    if (e.isGroup) {
      __LOG__(4, undefined, new Error(), true)`chat.changeChatEphemeralDuration should not be called for group ${e.id.toLogString()}`;
      SEND_LOGS("change-ephemeral-duration");
      throw (0, T.default)("changeChatEphemeralDuration should not be called for group. Use changeEphemeralDuration which handles both 1-1 and group cases");
    }
    const a = e.contact;
    if ((0, d.getIsUser)(a) && a.isContactBlocked) {
      return Promise.reject(new c.default("changing ephemeral setting for contact is blocked", a));
    }
    const o = new v.default({
      id: yield v.default.newId(),
      remote: e.id,
      fromMe: true
    });
    let u = {};
    if ((0, i.getABPropConfigValue)("dm_initiator_trigger")) {
      u = {
        disappearingModeTrigger: n,
        disappearingModeInitiatedByMe: true
      };
    }
    const s = (0, r.default)({
      id: o,
      from: (0, M.getMaybeMeUser)(),
      to: e.id,
      t: (0, l.unixTime)(),
      type: _.MSG_TYPE.PROTOCOL,
      subtype: "ephemeral_setting",
      ephemeralDuration: t,
      ephemeralSettingUser: (0, M.getMaybeMeUser)(),
      local: true,
      isNewMsg: true,
      self: "out"
    }, u);
    const h = e.ephemeralSettingTimestamp == null ? 1 : e.ephemeralSettingTimestamp + 1;
    (0, b.default)(e, h);
    const g = yield (0, y.addAndSendMsgToChat)(e, s)[1];
    if (g.messageSendResult === C.SendMsgResult.OK && g.t != null) {
      (0, b.default)(e, g.t);
    }
    let E = {};
    if ((0, i.getABPropConfigValue)("dm_initiator_trigger")) {
      E = {
        disappearingModeTrigger: n,
        disappearingModeInitiatedByMe: true
      };
    }
    yield (0, p.updateChatTable)(e.id, (0, r.default)({
      ephemeralDuration: t,
      disappearingModeInitiator: m.DisappearingModeInitiator.ChangedInChat
    }, E));
    e.ephemeralDuration = t;
    e.disappearingModeInitiator = m.DisappearingModeInitiator.ChangedInChat;
    if ((0, i.getABPropConfigValue)("dm_initiator_trigger")) {
      e.disappearingModeTrigger = n;
      e.disappearingModeInitiatedByMe = true;
    }
    (0, f.updateEphemeralDurationCache)(e.id, e.ephemeralDuration);
    __LOG__(2)`chat.changeEphemeralDuration chatId=${e.id.toLogString()} ephemeralDuration=${t}`;
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, o.default)(function* (e, t) {
    if (!e.isGroup) {
      throw (0, T.default)("changeGroupEphemeralDuration should not be called for 1-1 chats. Use changeEphemeralDuration which handles both 1-1 and group cases");
    }
    yield (0, E.setGroupProperty)(e.id, g.GROUP_SETTING_TYPE.EPHEMERAL, t);
  })).apply(this, arguments);
}
function k() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, o.default)(function* (e, t, n, a) {
    if (!(0, u.shouldShowEphemeralSetting)(e)) {
      throw (0, T.default)(`user cannot change group ephemeral duration for chat ${e.id.toString()}`);
    }
    const r = (0, u.getEphemeralSetting)(e);
    if (r !== t) {
      if (e.isGroup) {
        yield P(e, t);
      } else {
        yield w(e, t, a);
      }
    }
    const o = {
      chatEphemeralityDuration: t,
      threadId: yield (0, s.getChatThreadID)(e.id.toJid()),
      ephemeralSettingEntryPoint: n
    };
    var l;
    var i;
    if (r != null) {
      o.previousEphemeralityDuration = r;
    }
    if (e.isGroup) {
      o.ephemeralSettingGroupSize = (0, S.numberToPreciseSizeBucket)((l = (i = e.groupMetadata) === null || i === undefined ? undefined : i.participants.length) !== null && l !== undefined ? l : 0);
    }
    new h.EphemeralSettingChangeWamEvent(o).commit();
  })).apply(this, arguments);
}