var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgJson = O;
exports.resendPinInChatMsg = function () {
  return P.apply(this, arguments);
};
exports.sendPinInChatMsg = w;
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("../app/632157.js");
var i = require("../app/402994.js");
var u = require("../app/317851.js");
var s = require("../app/163755.js");
var c = require("../app/61113.js");
var d = a(require("../app/565754.js"));
var f = require("../app/772358.js");
var p = require("../app/430231.js");
var m = require("../app/373070.js");
var h = require("../app/899137.js");
var g = require("./931394.js");
var E = require("../app/441425.js");
var v = require("../app/96374.js");
var _ = require("../app/533494.js");
var y = require("./251446.js");
var C = require("../app/387183.js");
var b = require("../app/693741.js");
var M = require("../app/459857.js");
var S = require("../app/669050.js");
var T = a(require("../app/556869.js"));
function w() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, r.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l.DAY_SECONDS * 7;
    let a = arguments.length > 3 ? arguments[3] : undefined;
    const c = (0, s.getChat)(e);
    const p = c.id;
    const m = (0, M.getMeUser)();
    const w = c.isGroup ? (0, S.toUserWid)(m) : undefined;
    const A = new d.default({
      id: yield d.default.newId(),
      to: p,
      from: m,
      participant: w,
      selfDir: "out"
    });
    const P = (0, l.unixTimeMs)();
    const k = (0, l.unixTime)();
    let D;
    let I;
    if (t === _.Message$PinInChatMessage$Type.PIN_FOR_ALL) {
      D = v.PIN_STATE.PIN;
      I = n;
    } else if (t === _.Message$PinInChatMessage$Type.UNPIN_FOR_ALL) {
      D = v.PIN_STATE.UNPIN;
      I = 0;
    }
    if (D == null) {
      __LOG__(4, undefined, new Error())`WAWebSendPinMessageAction:sendPinInChatMsg Invalid pinType`;
      return Promise.resolve(null);
    }
    const R = {
      msgKey: A.toString(),
      parentMsgKey: e.id.toString(),
      senderTimestampMs: P,
      sender: m.toString(),
      chatId: c.id.toString(),
      pinType: D,
      pinExpiryDuration: I,
      read: true,
      ack: a != null ? a : i.ACK.CLOCK
    };
    const N = O(e, A, R, t, k, p, m, w);
    const x = new f.Msg(N);
    if ((0, u.isUnifiedPinAddonInfraEnabled)()) {
      const t = yield (0, y.addAndSendAddonToChat)(N);
      if (t.messageSendResult !== b.SendMsgResult.OK) {
        throw (0, T.default)("PinInChat send Error");
      }
      (0, g.logPinInChatMessageSend)(x, e, c);
      return t;
    }
    return (0, h.createNonPersistedJob)("sendMessage", (0, r.default)(function* () {
      yield (0, E.processPinMessages)(c.id, [N]);
      const t = yield (0, C.sendMsgRecord)(x);
      if (t.messageSendResult !== b.SendMsgResult.OK) {
        throw (0, T.default)("PinInChat send Error");
      }
      (0, g.logPinInChatMessageSend)(x, e, c);
      return t;
    }), {
      priority: o.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}
function P() {
  return (P = (0, r.default)(function* (e) {
    var t;
    yield w(c.MsgCollection.assertGet(e.parentMsgKey), e.pinType === v.PIN_STATE.PIN ? _.Message$PinInChatMessage$Type.PIN_FOR_ALL : _.Message$PinInChatMessage$Type.UNPIN_FOR_ALL, (t = e.pinExpiryDuration) !== null && t !== undefined ? t : undefined, e.ack);
  })).apply(this, arguments);
}
function O(e, t, n, a, r, o, l, i) {
  return {
    id: t,
    type: m.MSG_TYPE.PIN_MESSAGE,
    to: o,
    from: l,
    author: i,
    pinParentKey: (0, p.getReferentialKey)(e),
    pinSenderTimestampMs: n.senderTimestampMs,
    pinMessageType: a,
    pinExpiryDuration: n.pinExpiryDuration,
    t: r,
    self: "out",
    isNewMsg: true,
    local: true,
    ack: n.ack
  };
}