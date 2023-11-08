Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterMediaMixin = function (e, t) {
  const n = function (e) {
    const {
      plaintextMediatype: t,
      payloadMixinArgs: n
    } = e;
    return (0, a.mergeContentTypeMediaMixin)((0, r.smax)("message", null, (0, o.mergePayloadMixin)((0, r.smax)("plaintext", {
      mediatype: (0, s.CUSTOM_STRING)(t)
    }), n)));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./621955.js");
var o = require("./303197.js");
var s = require("./716358.js");