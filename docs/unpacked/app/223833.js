var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBotOneToOneInvokeSimpleReadReceipt = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./402994.js");
var o = require("./319169.js");
var s = r(require("./565754.js"));
var l = require("./359484.js");
var u = require("./899137.js");
var c = r(require("./556869.js"));
function d() {
  return (d = (0, i.default)(function* (e) {
    const {
      ack: t,
      from: n,
      externalIds: r,
      ts: i,
      ackString: d,
      recipient: p,
      offline: f
    } = e;
    const _ = f != null && !l.OfflineMessageHandler.isResumeFromRestartComplete();
    if (d !== a.ACK_STRING.READ || p == null || !n.isBot()) {
      throw (0, c.default)("handleBotOneToOneInvokeSimpleReadReceipt: unexpected receipt");
    }
    const g = r.map(e => new s.default({
      id: e,
      remote: p,
      fromMe: true
    })).map(e => e.toString());
    const m = o.receiptBatcher.acceptOtherReceipt({
      ack: t,
      ts: i,
      receiverId: n,
      msgKeys: g,
      isBotInvoke: true
    });
    if (!_) {
      yield (0, u.createNonPersistedJob)("receiptBatcherRunActiveBatches", () => o.receiptBatcher.runActiveBatches()).waitUntilCompleted();
    }
    return m;
  })).apply(this, arguments);
}