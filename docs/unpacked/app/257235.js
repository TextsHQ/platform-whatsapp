var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDuplicateMsgReceipts = g;
exports.sendAggregateOfflineReceipts = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./632157.js");
var s = require("./400627.js");
var l = require("./763961.js");
var u = require("./126249.js");
var c = require("./850794.js");
var d = require("./211361.js");
var p = require("./259377.js");
var f = require("./459857.js");
var _ = require("./669050.js");
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const t = [];
    if (e.length === 0) {
      return t;
    }
    const n = yield (0, d.aggregateDeliveryReceipts)(e);
    for (const {
      receipt: e,
      isInDB: r
    } of n) {
      if (r) {
        __LOG__(2)`sendAggregateOfflineReceipts: duplicate message exists in the db: ${e.externalId}`;
        t.push({
          externalId: e.externalId,
          from: e.from,
          author: e.author
        });
      } else {
        const {
          externalId: t,
          from: n,
          author: r,
          msgMeta: i,
          msgInfo: a,
          enc: o
        } = e;
        __LOG__(2)`sendAggregateOfflineReceipts: duplicate message does not exist in the db: ${t}`;
        (0, u.postIncomingMessageDropOldCounter)({
          msgMeta: i,
          msgInfo: a,
          enc: o
        });
        const c = n.isUser() || n.isNewsletter() ? null : r;
        (0, l.sendNack)(t, n, i.type, c, s.NackReason.SignalErrorOldCounter);
      }
    }
    return t;
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    let t = [];
    const n = [];
    for (const {
      receiptInfo: r,
      duplicateMsgReceiptInfo: i
    } of e) {
      if (i != null) {
        n.push(i);
      }
      if (r != null) {
        t.push(r);
      }
    }
    t = t.concat(yield g(n));
    const r = new Map();
    const i = [];
    t.forEach(e => {
      const {
        from: t,
        author: n,
        externalId: a
      } = e;
      let o = r.get(t);
      if (!o) {
        o = new Map();
        r.set(t, o);
      }
      let s = o.get(n);
      if (!s) {
        s = [];
        o.set(n, s);
      }
      s.push(a);
      i.push({
        from: String(t),
        author: String(n),
        externalId: a
      });
    });
    const s = (0, f.getMeUser)();
    const l = String((0, o.unixTime)());
    Promise.all(Array.from(r.keys()).map(e => {
      const t = r.get(e);
      if (!t) {
        return;
      }
      const n = e.isUser() && s.equals((0, _.toUserWid)(e));
      return (0, p.sendAggregateReceipts)(e, n ? p.RECEIPT_TYPE.SENDER : p.RECEIPT_TYPE.DELIVERY, l, t, n ? s : null);
    }));
    (0, a.cancelDeadSocketTimer)();
    if (i.length > 0) {
      yield (0, c.getTable)().create({
        receipts: i,
        acks: []
      });
    }
  })).apply(this, arguments);
}