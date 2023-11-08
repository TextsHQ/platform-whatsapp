Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNamedSubjectMixin = function (e, t) {
  const n = function (e) {
    const {
      anySubject: t
    } = e;
    return (0, a.smax)("smax$any", {
      subject: (0, o.CUSTOM_STRING)(t)
    });
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("../app/716358.js");