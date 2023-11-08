var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChatSimpleReceipt = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./402994.js");
var s = require("./522841.js");
var l = require("./942241.js");
var u = require("./319169.js");
var c = r(require("./565754.js"));
var d = require("./359484.js");
var p = require("./409847.js");
var f = require("./94872.js");
var _ = require("./459857.js");
var g = require("./669050.js");
var m = r(require("./556869.js"));
function h() {
  return (h = (0, i.default)(function* (e) {
    const {
      from: t,
      externalIds: n,
      ts: r,
      recipient: i,
      ackString: h,
      offline: y,
      biz: E
    } = e;
    let {
      ack: S
    } = e;
    const v = h === o.ACK_STRING.SENDER;
    const T = !v && (0, g.toUserWid)(t).equals((0, _.getMeUser)());
    let M;
    if (T || v) {
      if (!i) {
        __LOG__(3)`error: invalid sender/peer receipt without recipient`;
        throw (0, m.default)("handleChatSimpleReceipt: invalid sender/peer receipt without recipient");
      }
      M = i;
    } else {
      var A;
      M = (0, g.toUserWid)(t);
      if (((A = p.userPrefsIdb.get(f.HASHED_KEYS.USER_PRIVACY_SETTINGS)) === null || A === undefined ? undefined : A.readReceipts) === "none" && (S === o.ACK.READ || S === o.ACK.PLAYED && (0, a.getABPropConfigValue)("played_self_enabled"))) {
        S = o.ACK.RECEIVED;
      }
    }
    const b = n.map(e => new c.default({
      id: e,
      remote: M,
      fromMe: !T
    }));
    if (T && S === o.ACK.PLAYED) {
      (0, s.handleViewOnceOpenedIfNecessary)(b);
    }
    const C = b.map(e => e.toString());
    if (y != null) {
      d.OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
    }
    const P = y != null && !d.OfflineMessageHandler.isResumeFromRestartComplete();
    let O = Promise.resolve();
    if (T) {
      if (i != null && (0, l.isReadOrPlayedReceipt)(h) && n.length > 0) {
        O = u.receiptBatcher.acceptPeerReceipt({
          ack: S,
          ts: r,
          msgKeys: C,
          isOffline: P,
          remote: M
        });
      }
    } else {
      O = u.receiptBatcher.acceptOtherReceipt({
        ack: S,
        ts: r,
        receiverId: t,
        msgKeys: C,
        privacyMode: E,
        isSender: v
      });
    }
    if (!P) {
      u.receiptBatcher.runActiveBatches();
    }
    return O;
  })).apply(this, arguments);
}