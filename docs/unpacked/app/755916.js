var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewsletterSimpleReceipt = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./29797.js");
var o = require("./402994.js");
var s = require("./522841.js");
var l = require("./319169.js");
var u = r(require("./565754.js"));
var c = require("./359484.js");
var d = require("./459857.js");
var p = require("./669050.js");
var f = r(require("./556869.js"));
function _() {
  return (_ = (0, i.default)(function* (e) {
    const {
      ack: t,
      from: n,
      externalIds: r,
      ts: i,
      ackString: _,
      participant: g,
      offline: m,
      stanzaId: h
    } = e;
    const y = `[receipt][newsletter][${h}]`;
    if (_ === "view") {
      return (0, s.updateMsgViewed)(r.map(e => parseInt(e, 10)), n);
    }
    if (t !== a.ACK.READ && t !== a.ACK.PLAYED) {
      __LOG__(3)`${y} ACK should be READ or PLAYED, ${t} received instead`;
      throw (0, f.default)("handleNewsletterSimpleReceipt: only READ/PLAYED ack for newsletters");
    }
    if (!((_ === o.ACK_STRING.READ_SELF || _ === o.ACK_STRING.PLAYED_SELF) && g != null && (0, p.toUserWid)(g).equals((0, d.getMeUser)()))) {
      __LOG__(3)`${y} only peer receipts are accepted`;
      throw (0, f.default)("handleNewsletterSimpleReceipt: only peer receipts for newsletters");
    }
    const E = r.map(e => new u.default({
      id: e,
      remote: n,
      fromMe: false
    })).map(e => e.toString());
    if (m != null) {
      c.OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
    }
    const S = m != null && !c.OfflineMessageHandler.isResumeFromRestartComplete();
    const v = l.receiptBatcher.acceptPeerReceipt({
      isOffline: S,
      ack: t,
      ts: i,
      remote: n,
      msgKeys: E
    });
    if (!S) {
      yield l.receiptBatcher.runActiveBatches();
    }
    return v;
  })).apply(this, arguments);
}