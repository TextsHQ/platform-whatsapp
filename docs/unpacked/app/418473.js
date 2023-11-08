Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup = function (e) {
  const t = (0, i.parseNamedSubjectMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "NamedSubject",
      value: t.value
    });
  }
  const n = (0, a.parseUnnamedSubjectFallbackMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "UnnamedSubjectFallback",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["NamedSubject", "UnnamedSubjectFallback"], [t, n]);
};
var r = require("./135781.js");
var i = require("./373556.js");
var a = require("./366586.js");
var o = require("./686310.js");