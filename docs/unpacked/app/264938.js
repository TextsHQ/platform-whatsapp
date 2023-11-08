Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeQueryNewsletterInviteParamsMixin = function (e, t) {
  const n = function (e) {
    const {
      anyKey: t,
      anyViewRole: n
    } = e;
    return (0, i.smax)("smax$any", {
      type: "invite",
      key: (0, o.CUSTOM_STRING)(t),
      view_role: (0, r.OPTIONAL)(o.CUSTOM_STRING, n)
    });
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");