Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeEntitySubjectMixin = function (e, t) {
  const n = function (e) {
    const {
      spamListSubject: t
    } = e;
    return (0, r.smax)("iq", null, (0, r.smax)("spam_list", {
      subject: (0, a.CUSTOM_STRING)(t)
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");