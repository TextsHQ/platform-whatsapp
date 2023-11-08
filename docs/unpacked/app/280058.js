Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorInternalServerErrorOrRequestTimeoutOrServiceUnavailableOrRateOverlimitMixinGroup = function (e) {
  const t = (0, i.parseIQErrorInternalServerErrorMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorRequestTimeoutMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorRequestTimeout",
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
  const c = (0, a.parseIQErrorRateOverlimitMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorRequestTimeout", "IQErrorServiceUnavailable", "IQErrorRateOverlimit"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./709871.js");
var a = require("./436196.js");
var o = require("./397066.js");
var s = require("./866873.js");
var l = require("./686310.js");