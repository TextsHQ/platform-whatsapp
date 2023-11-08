var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGroupSimpleReceipt = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./402994.js");
var o = require("./522841.js");
var s = require("./942241.js");
var l = require("./319169.js");
var u = r(require("./565754.js"));
var c = require("./359484.js");
var d = require("./899137.js");
var p = require("./459857.js");
var f = require("./669050.js");
var _ = r(require("./556869.js"));
function g() {
  return (g = (0, i.default)(function* (e) {
    const {
      ack: t,
      from: n,
      externalIds: r,
      ts: i,
      ackString: g,
      participant: m,
      recipient: h,
      offline: y
    } = e;
    if (!m) {
      __LOG__(4, undefined, new Error(), true)`error: got group ack without participant.`;
      SEND_LOGS("handleGroupSimpleReceipt: failed");
      throw (0, _.default)("handleGroupSimpleReceipt: got group ack without participant.");
    }
    const E = (0, p.getMeUser)();
    const S = (0, f.toUserWid)(m);
    const v = !(g === a.ACK_STRING.SENDER) && S.equals(E);
    let T;
    if (v) {
      if (!h) {
        __LOG__(3)`error: invalid sender/peer receipt without recipient`;
        throw (0, _.default)("handleGroupSimpleReceipt: invalid sender/peer receipt without recipient");
      }
      T = h;
    } else {
      T = E;
    }
    const M = r.map(e => new u.default({
      id: e,
      remote: n,
      fromMe: !v,
      participant: T
    }));
    if (v && t === a.ACK.PLAYED) {
      (0, o.handleViewOnceOpenedIfNecessary)(M);
    }
    const A = M.map(e => e.toString());
    if (y != null) {
      c.OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
    }
    const b = y != null && !c.OfflineMessageHandler.isResumeFromRestartComplete();
    let C;
    if (v) {
      if (h != null && (0, s.isReadOrPlayedReceipt)(g) && r.length > 0) {
        C = l.receiptBatcher.acceptPeerReceipt({
          isOffline: b,
          ack: t,
          ts: i,
          msgKeys: A,
          remote: n
        });
      }
    } else {
      C = l.receiptBatcher.acceptOtherReceipt({
        ack: t,
        ts: i,
        receiverId: m,
        msgKeys: A
      });
    }
    if (!b) {
      yield (0, d.createNonPersistedJob)("receiptBatcherRunActiveBatches", () => l.receiptBatcher.runActiveBatches()).waitUntilCompleted();
    }
    return C;
  })).apply(this, arguments);
}