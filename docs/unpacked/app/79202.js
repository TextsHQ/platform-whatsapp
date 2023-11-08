Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeTCTokenMixin = function (e, t) {
  const n = function (e) {
    const {
      tctokenT: t,
      privacyTokenContentsMixinArgs: n
    } = e;
    return (0, i.smax)("smax$any", null, (0, o.mergePrivacyTokenContentsMixin)((0, i.smax)("tctoken", {
      t: (0, r.OPTIONAL)(s.INT, t)
    }), n));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./987805.js");
var s = require("./716358.js");