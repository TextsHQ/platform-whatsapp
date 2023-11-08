var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaseErrorLog = function (e, t) {
  var n;
  var a;
  const r = e != null ? (0, i.getChat)(e) : null;
  return new u.KeepInChatErrorsWamEvent({
    kicAction: _(t),
    isAGroup: r == null ? undefined : r.isGroup,
    isAdmin: (r == null ? undefined : r.isGroup) && (r == null || (n = r.groupMetadata) === null || n === undefined ? undefined : n.participants.iAmAdmin()),
    canEditDmSettings: !(r == null ? undefined : r.isGroup) || (r == null || (a = r.groupMetadata) === null || a === undefined ? undefined : a.canSetEphemeralSetting()),
    kicMessageEphemeralityDuration: (e == null ? undefined : e.ephemeralDuration) || 0
  });
};
exports.logOlderRequestKic = function () {
  return y.apply(this, arguments);
};
exports.logTieBreakIgnoredKic = function () {
  return C.apply(this, arguments);
};
exports.parseKeepTypeToMetric = g;
var r = a(require("../vendor/348926.js"));
var o = require("../app/738501.js");
var l = require("../app/698867.js");
var i = require("../app/163755.js");
var u = require("./74820.js");
var s = require("./897127.js");
var c = require("../app/420213.js");
var d = require("../app/533494.js");
var f = require("./799606.js");
var p = require("./483618.js");
var m = require("./859680.js");
var h = require("./867923.js");
function g(e) {
  let t;
  switch (e) {
    case d.KeepType.KEEP_FOR_ALL:
      t = m.KIC_REQUEST_TYPE_TYPE.KEEP;
      break;
    case d.KeepType.UNDO_KEEP_FOR_ALL:
      t = m.KIC_REQUEST_TYPE_TYPE.UNKEEP;
  }
  return t;
}
function E() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, r.default)(function* (e) {
    const t = require("../app/351053.js").ChatCollection.get(e.id.remote);
    const a = new s.KeepInChatPerfWamEvent({
      response: h.RESPONSE_TYPE.ERROR,
      requestSendTime: e.t,
      chatEphemeralityDuration: t && (0, o.getEphemeralSetting)(t) || 0
    });
    let r;
    if (t) {
      r = yield (0, l.getChatThreadID)(t.id.toJid());
    }
    if (r != null) {
      a.set({
        threadId: r
      });
    }
    const i = g(e.keepType);
    if (i) {
      a.set({
        kicRequestType: i
      });
    }
    const u = yield (0, c.getMsgByMsgKey)(e.keptMessageKey);
    if (u) {
      a.set({
        kicMessageEphemeralityDuration: (u == null ? undefined : u.ephemeralDuration) || 0
      });
    }
    return a;
  })).apply(this, arguments);
}
function _(e) {
  if (e === d.KeepType.KEEP_FOR_ALL) {
    return f.KIC_ACTION_TYPE.KEEP_MESSAGE;
  } else {
    return f.KIC_ACTION_TYPE.UNKEEP_MESSAGE;
  }
}
function y() {
  return (y = (0, r.default)(function* (e) {
    const t = yield E(e);
    t.set({
      kicErrorCode: p.KIC_ERROR_CODE_TYPE.OLDER_REQUEST
    });
    t.commit();
  })).apply(this, arguments);
}
function C() {
  return (C = (0, r.default)(function* (e) {
    const t = yield E(e);
    t.set({
      kicErrorCode: p.KIC_ERROR_CODE_TYPE.TIE_BREAK_IGNORED
    });
    t.commit();
  })).apply(this, arguments);
}