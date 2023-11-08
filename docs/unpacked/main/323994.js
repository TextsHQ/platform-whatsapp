Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeUnnamedSubjectFallbackMixin = function (e, t) {
  const n = function (e) {
    const {
      anySubject: t
    } = e;
    return (0, r.smax)("smax$any", {
      subject: (0, a.OPTIONAL)(l.CUSTOM_STRING, t)
    });
  }(t);
  return (0, o.mergeStanzas)(e, n);
};
var a = require("../app/93864.js");
var r = require("../app/758616.js");
var o = require("../app/770006.js");
var l = require("../app/716358.js");