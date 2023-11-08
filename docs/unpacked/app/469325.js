Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrNotAcceptableOrFeatureNotImplementedMixinGroup = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorNotAcceptableMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAcceptable",
      value: n.value
    });
  }
  const l = (0, a.parseIQErrorFeatureNotImplementedMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "IQErrorFeatureNotImplemented",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNotAcceptable", "IQErrorFeatureNotImplemented"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./773588.js");
var a = require("./79230.js");
var o = require("./152849.js");
var s = require("./686310.js");