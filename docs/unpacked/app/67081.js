var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenType = undefined;
exports.setPrivacyTokens = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./355813.js");
const c = new s.WapParser("setPrivacyTokensParser", e => ({
  stanzaId: e.attrString("id")
}));
const d = require("../vendor/76672.js")({
  TrustedContact: "trusted_contact"
});
function p() {
  return (p = (0, i.default)(function* (e, t, n) {
    const r = t.map(t => (0, o.wap)("token", {
      jid: (0, u.USER_JID)(e),
      t: (0, o.CUSTOM_STRING)(String(n)),
      type: (0, o.CUSTOM_STRING)(t)
    }));
    const i = yield (0, a.deprecatedSendIq)((0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      type: "set",
      xmlns: "privacy",
      id: (0, o.generateId)()
    }, (0, o.wap)("tokens", null, r)), c);
    if (!i.success) {
      throw new l.ServerStatusCodeError(i.errorCode, i.errorText);
    }
  })).apply(this, arguments);
}
exports.TokenType = d;