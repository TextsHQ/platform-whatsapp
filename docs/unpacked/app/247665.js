var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/682492.js"));
var a = r(require("../vendor/114176.js"));
var o = require("./392125.js");
var s = r(require("./585836.js"));
var l = require("./513681.js");
class u extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this.pendingOffers = {};
    this.pendingVoipCapChecks = {};
  }
  processIncomingCall(e, t, n) {
    if (this.get(e) != null) {
      return void __LOG__(2)`voip:processIncomingCall: Attempting to add existing call with call ID`;
    }
    let r = n;
    const o = {
      id: e
    };
    if (t != null) {
      o.peerJid = t;
    }
    if (r) {
      r = (0, a.default)(r, e => e == null);
      (0, i.default)(o, r);
    }
    this.add(o, {
      merge: true
    });
  }
  cleanupPendingOffer(e) {
    delete this.pendingOffers[e];
  }
  setActiveCall(e) {
    var t;
    var n;
    this.activeCall;
    if (!((t = this.activeCall) === null || t === undefined)) {
      t.webClientShouldHandle;
    }
    this.activeCall = e;
    this.trigger("change:activeCall", e);
    if (!((n = this._releaseAudioChannelClaim) === null || n === undefined)) {
      n.call(this);
    }
    if (e != null) {
      this._releaseAudioChannelClaim = l.MainAudioChannel.claim(this, () => {});
    }
  }
}
u.model = s.default;
var c = new u();
exports.default = c;