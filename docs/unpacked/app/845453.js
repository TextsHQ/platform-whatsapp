Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorInternalServerErrorOrRequestTimeoutOrServiceUnavailableMixinGroup = function (e) {
  const t = (0, i.parseIQErrorInternalServerErrorMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: t.value
    });
  }
  const n = (0, a.parseIQErrorRequestTimeoutMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorRequestTimeout",
      value: n.value
    });
  }
  const l = (0, o.parseIQErrorServiceUnavailableMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "IQErrorServiceUnavailable",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorRequestTimeout", "IQErrorServiceUnavailable"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./709871.js");
var a = require("./397066.js");
var o = require("./866873.js");
var s = require("./686310.js");