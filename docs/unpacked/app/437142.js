var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStatusSimpleReceipt = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./402994.js");
var s = require("./319169.js");
var l = r(require("./565754.js"));
var u = require("./359484.js");
var c = require("./409847.js");
var d = require("./94872.js");
var p = require("./459857.js");
var f = require("./669050.js");
function _() {
  return (_ = (0, i.default)(function* (e) {
    var t;
    const {
      externalIds: n,
      ts: r,
      ackString: i,
      ack: _,
      participant: g,
      recipient: m,
      offline: h
    } = e;
    const y = n[0];
    if (!g) {
      __LOG__(4, undefined, new Error(), true)`error: got status ack without participant`;
      return void SEND_LOGS("handleStatusSimpleReceipt: failed");
    }
    const E = (0, p.getMeUser)();
    const S = (0, f.toUserWid)(g);
    const v = S.equals(E);
    const T = ((t = c.userPrefsIdb.get(d.HASHED_KEYS.USER_PRIVACY_SETTINGS)) === null || t === undefined ? undefined : t.readReceipts) === "none";
    if (!v && (T || i !== o.ACK_STRING.READ)) {
      return;
    }
    const M = (0, f.createWid)(a.STATUS_JID);
    const A = [new l.default({
      id: y,
      remote: M,
      fromMe: !v,
      participant: m != null ? m : E
    }).toString()];
    const b = h != null && !u.OfflineMessageHandler.isResumeFromRestartComplete();
    let C = Promise.resolve();
    C = v ? s.receiptBatcher.acceptPeerReceipt({
      ts: r,
      msgKeys: A,
      ack: _,
      isOffline: b,
      remote: M
    }) : s.receiptBatcher.acceptOtherReceipt({
      ack: _,
      ts: r,
      receiverId: S,
      msgKeys: A
    });
    if (!b) {
      s.receiptBatcher.runActiveBatches();
    }
    return C;
  })).apply(this, arguments);
}