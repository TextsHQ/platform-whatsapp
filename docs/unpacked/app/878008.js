Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCompanionFinishRequest = function (e) {
  const {
    iqTo: t,
    linkCodeCompanionRegJid: n,
    linkCodePairingWrappedKeyBundleElementValue: o,
    companionIdentityPublicElementValue: s,
    linkCodePairingRefElementValue: l
  } = e;
  return (0, i.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
    to: (0, a.DOMAIN_JID)(t),
    xmlns: "md"
  }, (0, r.smax)("link_code_companion_reg", {
    jid: (0, a.USER_JID)(n),
    stage: "companion_finish"
  }, (0, r.smax)("link_code_pairing_wrapped_key_bundle", null, o), (0, r.smax)("companion_identity_public", null, s), (0, r.smax)("link_code_pairing_ref", null, l))));
};
var r = require("./758616.js");
var i = require("./232597.js");
var a = require("./716358.js");