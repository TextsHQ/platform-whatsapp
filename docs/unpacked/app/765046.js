Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrFeatureNotImplementedOrServiceUnavailableOrInternalServerErrorMixinGroup = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, a.parseIQErrorFeatureNotImplementedMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorFeatureNotImplemented",
      value: n.value
    });
  }
  const u = (0, s.parseIQErrorServiceUnavailableMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "IQErrorServiceUnavailable",
      value: u.value
    });
  }
  const c = (0, o.parseIQErrorInternalServerErrorMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorFeatureNotImplemented", "IQErrorServiceUnavailable", "IQErrorInternalServerError"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./8366.js");
var a = require("./66737.js");
var o = require("./61505.js");
var s = require("./322839.js");
var l = require("./686310.js");