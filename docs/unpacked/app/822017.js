var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearDanglingReceipts = _;
exports.sendAndClearDanglingReceipts = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./355802.js");
var l = r(require("./99398.js"));
var u = require("./497296.js");
var c = require("./850794.js");
var d = require("./259377.js");
var p = require("./669050.js");
function f() {
  return (f = (0, i.default)(function* () {
    const e = yield (0, c.getTable)().all();
    __LOG__(2)`sendAndClearDanglingReceipts: get ${e.length} danglingRecords`;
    const t = new Map();
    let n = [];
    e.forEach(e => {
      const {
        receipts: r,
        acks: i
      } = e;
      r.forEach(e => {
        const n = (0, p.createWid)(e.from);
        const r = (0, p.createWid)(e.author);
        let i = t.get(n);
        if (!i) {
          i = new Map();
          t.set(n, i);
        }
        let a = i.get(r);
        if (!a) {
          a = [];
          i.set(r, a);
        }
        a.push(e.externalId);
      });
      if ((0, o.getABPropConfigValue)("web_pre_acks_m2_enabled")) {
        n = n.concat(i);
      }
    });
    const r = String((0, a.unixTime)());
    const i = Array.from(t.keys()).map(e => {
      const n = t.get(e);
      if (n) {
        return (0, d.sendAggregateReceipts)(e, d.RECEIPT_TYPE.DELIVERY, r, n);
      }
    });
    const s = n.map(e => (0, u.sendOfflinePreAck)(e));
    __LOG__(2)`sendAndClearDanglingReceipts: starting sending ${i.length} receipts,  ${s.length} preAcks`;
    yield Promise.all(i);
    __LOG__(2)`sendAndClearDanglingReceipts: complete sending ${i.length} receipts`;
    yield Promise.all(s);
    __LOG__(2)`sendAndClearDanglingReceipts: complete sending  ${s.length} preAcks`;
    yield _();
    __LOG__(2)`sendAndClearDanglingReceipts: complete`;
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* () {
    if ((0, o.getABPropConfigValue)("web_enable_open_tab_pre_ack") && !l.default.online) {
      __LOG__(2)`[offline-resume][utils] clearDanglingReceipts: skip due to offline.`;
      return Promise.resolve();
    }
    __LOG__(2)`clearDanglingReceipts: starting sending ping`;
    yield (0, s.blockSendPing)();
    __LOG__(2)`clearDanglingReceipts: starting clean receipts`;
    yield (0, c.getTable)().clear();
  })).apply(this, arguments);
}