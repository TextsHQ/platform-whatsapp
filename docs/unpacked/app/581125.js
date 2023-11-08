Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCompanionHelloRequest = function (e) {
  const {
    linkCodePairingNonceArgs: t,
    iqTo: n,
    linkCodeCompanionRegJid: u,
    linkCodeCompanionRegShouldShowPushNotification: c,
    linkCodePairingWrappedCompanionEphemeralPubElementValue: d,
    companionServerAuthKeyPubElementValue: p,
    companionPlatformIdElementValue: f,
    companionPlatformDisplayElementValue: _
  } = e;
  return (0, o.mergeBaseIQSetRequestMixin)((0, a.smax)("iq", {
    to: (0, s.DOMAIN_JID)(n),
    xmlns: "md"
  }, (0, a.smax)("link_code_companion_reg", {
    jid: (0, s.USER_JID)(u),
    stage: "companion_hello",
    should_show_push_notification: (0, r.OPTIONAL)(s.CUSTOM_STRING, c)
  }, (0, a.smax)("link_code_pairing_wrapped_companion_ephemeral_pub", null, d), (0, a.smax)("companion_server_auth_key_pub", null, p), (0, a.smax)("companion_platform_id", null, f), (0, a.smax)("companion_platform_display", null, _), (0, i.OPTIONAL_CHILD)(l, t))));
};
exports.makeCompanionHelloRequestLinkCodeCompanionRegLinkCodePairingNonce = l;
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./232597.js");
var s = require("./716358.js");
function l(e) {
  const {
    linkCodePairingNonceElementValue: t
  } = e;
  return (0, a.smax)("link_code_pairing_nonce", null, t);
}