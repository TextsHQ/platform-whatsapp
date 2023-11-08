var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendDeliveryReceiptsAfterDecryption = function () {
  return h.apply(this, arguments);
};
exports.sendDeliveryReceiptsAfterPresence = function () {
  return (0, p.getInactiveReceiptTable)().all().then(function () {
    var e = (0, i.default)(function* (e) {
      const t = new Map();
      const n = Date.now().toString();
      e.forEach(e => {
        const {
          msgId: n,
          chatId: r,
          participantId: i
        } = e;
        const a = (0, g.createWid)(r);
        const o = (i ? (0, g.createWid)(i) : null) || a;
        let s = t.get(a);
        if (!s) {
          s = new Map();
          t.set(a, s);
        }
        let l = s.get(o);
        if (!l) {
          l = [];
          s.set(o, l);
        }
        l.push(n);
      });
      yield Promise.all(Array.from(t.keys()).map(e => {
        const r = t.get(e);
        if (r) {
          return (0, f.sendAggregateReceipts)(e, f.RECEIPT_TYPE.DELIVERY, n, r);
        }
      }));
      return (0, p.getInactiveReceiptTable)().bulkRemove(e.map(e => e.msgId));
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./359987.js");
var l = require("./355813.js");
var u = require("./714443.js");
var c = require("./790215.js");
var d = require("./755985.js");
var p = require("./239172.js");
var f = require("./259377.js");
var _ = require("./459857.js");
var g = require("./669050.js");
var m = require("./574819.js");
function h() {
  return (h = (0, i.default)(function* (e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    let a = arguments.length > 5 ? arguments[5] : undefined;
    const o = yield E();
    const s = (0, _.assertGetMe)();
    const l = !s.getDeviceId();
    const u = t.isUser() && (0, g.toUserWid)(s).equals((0, g.toUserWid)(t)) || r != null && (0, g.toUserWid)(s).equals((0, g.toUserWid)(r));
    const d = a.hasInactiveMsg === true && !u;
    const f = !d && ((0, c.sendOnlyActiveReceiptsEnabled)() || u || o || l);
    let m = Promise.resolve();
    if (!f) {
      const n = {
        msgId: e,
        chatId: t.toString(),
        participantId: r ? r.toString() : null
      };
      m = (0, p.getInactiveReceiptTable)().createOrReplace(n);
    }
    return m.then(() => {
      y(e, t, n, r, f, u, i);
      if (f) {
        return (0, p.getInactiveReceiptTable)().remove(e);
      }
    });
  })).apply(this, arguments);
}
function y(e, t, n, r, i, s, c) {
  let d = o.DROP_ATTR;
  if (c) {
    d = (0, o.CUSTOM_STRING)(f.RECEIPT_TYPE.PEER_MSG);
  } else if (s) {
    d = (0, o.CUSTOM_STRING)(f.RECEIPT_TYPE.SENDER);
  } else if (!i) {
    d = (0, o.CUSTOM_STRING)(f.RECEIPT_TYPE.INACTIVE);
  }
  const p = (0, u.extractJidFromJidWithType)((0, m.widToJidWithType)(t));
  const _ = (0, o.wap)("receipt", {
    id: (0, o.CUSTOM_STRING)(e),
    to: (0, o.JID)(p),
    participant: (t.isGroup() || t.isBroadcast()) && r ? (0, l.DEVICE_JID)(r) : o.DROP_ATTR,
    recipient: !c && s && n ? (0, l.USER_JID)(n) : o.DROP_ATTR,
    type: d
  });
  (0, a.deprecatedCastStanza)(_);
}
function E() {
  if ((0, d.isWorker)()) {
    return Promise.resolve(false);
  } else {
    return (0, s.frontendSendAndReceive)("getUserAvailability", {});
  }
}