Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorFeatureNotImplementedOrInternalServerErrorMixinGroup = function (e) {
  const t = (0, i.parseIQErrorFeatureNotImplementedMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorFeatureNotImplemented",
      value: t.value
    });
  }
  const n = (0, a.parseIQErrorInternalServerErrorMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["IQErrorFeatureNotImplemented", "IQErrorInternalServerError"], [t, n]);
};
var r = require("./135781.js");
var i = require("./39669.js");
var a = require("./666232.js");
var o = require("./686310.js");