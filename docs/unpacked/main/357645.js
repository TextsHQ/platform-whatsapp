Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetSubjectChangeSubjectMixin = function (e, t) {
  const n = function (e) {
    const {
      subjectElementValue: t
    } = e;
    return (0, a.smax)("iq", null, (0, a.smax)("subject", null, t));
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");