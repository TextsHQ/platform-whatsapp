var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./389293.js");
var o = require("./700846.js");
var s = require("./35109.js");
var l = require("./117429.js");
function u() {
  return (u = (0, i.default)(function* (e, t, n) {
    const r = p(t);
    const i = p(n);
    const a = [d(e, r, i), c(e, r, i)];
    yield Promise.all(a.map(t => t ? (0, o.handleSingleMsg)(e, t, "bizStateChangeNotification") : null));
  })).apply(this, arguments);
}
function c(e, t, n) {
  if ((0, l.getGlobalSecurityNotifications)() === true) {
    if (t === s.ReducedPrivacyMode.E2EE && n !== s.ReducedPrivacyMode.E2EE) {
      return (0, a.genEncryptNotificationMsg)(e, "e2e_identity_unavailable");
    } else {
      return undefined;
    }
  }
}
function d(e, t, n) {
  if (t !== n) {
    switch (n) {
      case s.ReducedPrivacyMode.E2EE:
        return (0, a.genEncryptNotificationMsg)(e, "encrypt_now");
      case s.ReducedPrivacyMode.BSP:
        return (0, a.genNonE2ENotificationMsg)(e, "biz_privacy_mode_to_bsp");
      case s.ReducedPrivacyMode.FB:
        return (0, a.genNonE2ENotificationMsg)(e, "biz_privacy_mode_to_fb");
    }
  }
}
function p(e) {
  return (0, s.getReducedPrivacyMode)(e.isBusiness ? e.privacyMode : null);
}