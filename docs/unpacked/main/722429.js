Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNamedSubjectOrUnnamedSubjectFallbackMixinGroup = function (e, t) {
  if (t.namedSubject) {
    return (0, r.mergeNamedSubjectMixin)(e, t.namedSubject);
  }
  if (t.unnamedSubjectFallback) {
    return (0, o.mergeUnnamedSubjectFallbackMixin)(e, t.unnamedSubjectFallback);
  }
  throw new a.SmaxMixinGroupExhaustiveError();
};
var a = require("../app/715626.js");
var r = require("./723294.js");
var o = require("./323994.js");