var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n, r, l) {
  __LOG__(2)`voip:handleIncomingCallOfferNotice: callId ${t}`;
  if ((0, i.unixTime)() - n > 45) {
    return void __LOG__(2)`voip:handleIncomingCallOfferNotice: Ignoring stale offer_notice`;
  }
  a.default.add({
    id: t,
    isVideo: r,
    isGroup: l,
    offerTime: n,
    canHandleLocally: false,
    peerJid: e,
    isSilenced: false
  }, {
    merge: true
  });
  o.Cmd.alertCall((0, s.toUserWid)(e), t, r, l, false, false);
  self.setTimeout(() => {
    o.Cmd.cancelCall(e);
    const n = a.default.get(t);
    if (n) {
      a.default.remove(n);
    }
  }, 45000);
};
var i = require("./632157.js");
var a = r(require("./247665.js"));
var o = require("./780549.js");
var s = require("./669050.js");