var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendViewReceiptJob = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/392646.js");
var l = require("../app/775593.js");
var i = require("./678287.js");
var u = require("../app/757585.js");
var s = require("../app/716358.js");
var c = require("../app/727615.js");
var d = require("../app/899137.js");
const f = new Map();
function p() {
  return (p = (0, r.default)(function* (e, t) {
    var n;
    const a = (n = f.get(e)) !== null && n !== undefined ? n : (0, o.createSimpleBatcher)({
      delayMs: 3000
    }, function () {
      var t = (0, r.default)(function* (t) {
        yield m(e, t);
        return t;
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    f.set(e, a);
    yield a.accept(t);
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, r.default)(function* (e, t) {
    return (0, d.createNonPersistedJob)("sendNewsletterViewReceipt", (0, r.default)(function* () {
      yield (0, i.sendPublishViewRPC)({
        receiptTo: e,
        receiptId: (0, u.toStanzaId)((0, s.generateId)()),
        itemArgs: t.map(e => {
          let {
            itemServerId: t
          } = e;
          return {
            itemServerId: t
          };
        })
      });
      yield (0, c.updateMsgViewReceipt)(t.map(e => e.itemId));
    }), {
      priority: l.JOB_PRIORITY.LOW
    }).waitUntilCompleted();
  })).apply(this, arguments);
}