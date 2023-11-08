Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeQueryNewsletterJIDParamsMixin = function (e, t) {
  const n = function (e) {
    const {
      anyJid: t,
      anyViewRole: n
    } = e;
    return (0, i.smax)("smax$any", {
      type: "jid",
      jid: (0, o.JID)(t),
      view_role: (0, r.OPTIONAL)(o.CUSTOM_STRING, n)
    });
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");