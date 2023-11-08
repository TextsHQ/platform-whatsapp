var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processOrphanReadReceipts = function () {
  return f.apply(this, arguments);
};
exports.updateMsgAck = c;
var r = a(require("../vendor/348926.js"));
var o = require("../app/359987.js");
var l = require("../app/319169.js");
var i = require("./79206.js");
var u = require("../app/61113.js");
var s = a(require("../app/124928.js"));
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, r.default)(function* (e, t, n) {
    if (t.latestEditMsgKey && !t.latestEditMsgKey.equals(e)) {
      return;
    }
    const {
      ack: a,
      t: r
    } = n;
    const {
      remote: l
    } = e;
    t.updateAck(a);
    if (s.default.isUser(l)) {
      yield (0, o.frontendSendAndReceive)("updateMsgInfo", {
        updates: [{
          msgKey: t.id,
          ack: a,
          participant: l,
          ts: r
        }]
      });
    }
  })).apply(this, arguments);
}
function f() {
  return (f = (0, r.default)(function* (e) {
    yield l.receiptBatcher.runActiveBatches();
    const t = e.map(e => {
      var t;
      const n = (t = u.MsgCollection.get(e)) !== null && t !== undefined ? t : u.MsgCollection.getByEditMsgKey(e);
      return n || (__LOG__(2)`processOrphanReadReceipts: skip for msgId: ${String(e)}`, null);
    }).filter(Boolean);
    const n = yield (0, i.getHighestAcks)(t);
    t.forEach(function () {
      var e = (0, r.default)(function* (e) {
        try {
          const t = n.get(e.id.toString());
          if (!t || t.ack === e.ack) {
            return;
          }
          return c(e.id, e, t);
        } catch (e) {
          __LOG__(4, undefined, new Error())`Assertion failed: processOrphanReadReceipts failed!`;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}