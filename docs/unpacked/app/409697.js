var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./817690.js");
var l = require("./420213.js");
var u = require("./61113.js");
var c = require("./700846.js");
var d = r(require("./565754.js"));
var p = require("./772358.js");
var f = require("./530853.js");
var _ = require("./970626.js");
var g = require("./186679.js");
var m = require("./394646.js");
var h = require("./163139.js");
function y() {
  return (y = (0, a.default)(function* (e) {
    if (e.content && e.content[0].tag === "invite") {
      return E(e);
    }
    const t = f.paymentNotificationParser.parse(e);
    if (t.error) {
      __LOG__(2)`${t.error.toString()} parsing ${e.toString()}`;
      throw t.error;
    }
    if (!t.success) {
      return Promise.resolve();
    }
    const n = t.success;
    const r = (0, o.default)(n.msgKey, "info.msgKey");
    const a = u.MsgCollection.get(r);
    const l = a ? (0, h.unproxy)(a) : yield (0, s.getMsgByMsgKey)(r);
    if (!l) {
      __LOG__(3)`handlePaymentNotification: no msg found for id ${r.toString()}`;
      const e = (0, i.default)((0, i.default)({}, n), {}, {
        msgKey: r.toString()
      });
      return (0, m.getTable)().createOrReplace(e);
    }
    return S(l, n);
  })).apply(this, arguments);
}
function E(e) {
  const t = f.paymentInviteNotificationParser.parse(e);
  if (t.error) {
    __LOG__(2)`${t.error.toString()} parsing ${e.toString()}`;
    return Promise.reject(t.error);
  }
  if (!t.success) {
    return Promise.resolve();
  }
  const n = t.success;
  if (n.type === "account-set-up") {
    const e = (0, _.genPaymentInviteAccountSetupMsg)(n.from, n.timestamp);
    return (0, c.handleSingleMsg)(e.from, e);
  }
  return Promise.resolve();
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e, t) {
    const n = [];
    T(e, t);
    n.push(e.id.toString());
    const r = [e instanceof p.Msg ? e.toJSON() : e];
    if (e.paymentRequestMessageKey != null) {
      const t = u.MsgCollection.get(e.paymentRequestMessageKey);
      const n = t ? (0, h.unproxy)(t) : yield (0, s.getMsgByMsgKey)(e.paymentRequestMessageKey || "");
      if (n) {
        n.paymentStatus = e.paymentStatus;
        n.paymentTxnStatus = (0, g.determinePaymentRequestFulfilledStatus)(e.paymentTxnStatus);
        r.push(n instanceof p.Msg ? n.toJSON() : n);
      }
    }
    (0, m.getTable)().bulkRemove(n).catch(() => {
      __LOG__(4, undefined, new Error())`getOrphanPaymentNotificationTable bulkremove of ${n} failed. {e}`;
    });
    return (0, l.updateExistingMessages)(r);
  })).apply(this, arguments);
}
function T(e, t) {
  if (t) {
    if (t.status != null) {
      e.paymentStatus = (0, g.getPaymentWebStatus)(t.status, t.type);
      e.paymentTxnStatus = (0, g.getPaymentTxnWebStatus)(t.status);
    }
    e.paymentCurrency = t.currency || "";
    e.paymentAmount1000 = (0, o.default)(t.amount1000, "mdPaymentInfo.amount1000");
    e.paymentMessageReceiverJid = t.receiver;
    e.paymentTransactionTimestamp = (0, o.default)(t.ts, "mdPaymentInfo.ts");
  }
}
function M() {
  return (M = (0, a.default)(function* (e) {
    const t = e.map(e => e.id.toString());
    const n = yield (0, m.getTable)().bulkGet(t);
    const r = new Map();
    e.forEach(e => {
      r.set(e.id.toString(), e);
    });
    n.forEach(e => {
      if (e) {
        const t = r.get(e.msgKey);
        if (!t) {
          return;
        }
        S(t, {
          receiver: e.receiver,
          currency: e.currency,
          amount1000: e.amount1000,
          type: e.type,
          status: e.status,
          ts: e.ts,
          msgKey: d.default.fromString(e.msgKey)
        });
      }
    });
  })).apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* () {
    const e = yield (0, m.getTable)().all();
    const t = new Map();
    const n = [];
    e.forEach(e => {
      const r = u.MsgCollection.get(e.msgKey);
      if (r) {
        S(r, {
          receiver: e.receiver,
          currency: e.currency,
          amount1000: e.amount1000,
          type: e.type,
          status: e.status,
          ts: e.ts,
          msgKey: d.default.fromString(e.msgKey)
        });
      } else {
        t.set(e.msgKey, e);
        n.push(e.msgKey);
      }
    });
    if (n.length > 0) {
      const e = yield (0, s.getMsgsByMsgKey)(n, e => {
        const n = t.get(e.id.toString());
        if (n) {
          e.paymentTxnStatus = (0, g.getPaymentTxnWebStatus)(n.status);
          e.paymentCurrency = n.currency || "";
          e.paymentAmount1000 = (0, o.default)(n.amount1000, "notification.amount1000");
          e.paymentMessageReceiverJid = n.receiver;
          e.paymentTransactionTimestamp = (0, o.default)(n.ts, "notification.ts");
        }
      });
      return (0, l.updateExistingMessages)(e);
    }
  })).apply(this, arguments);
}
var b = {
  handlePaymentNotification: function () {
    return y.apply(this, arguments);
  },
  updateReceivedPaymentInfo: S,
  processOrphanPaymentNotifications: function () {
    return M.apply(this, arguments);
  },
  processAllOrphanPaymentNotifications: function () {
    return A.apply(this, arguments);
  }
};
exports.default = b;