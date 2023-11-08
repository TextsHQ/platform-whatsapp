Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrRateOverlimitMixinGroup = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, a.parseIQErrorRateOverlimitMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorRateOverlimit"], [t, n]);
};
var r = require("./135781.js");
var i = require("./668691.js");
var a = require("./928431.js");
var o = require("./686310.js");