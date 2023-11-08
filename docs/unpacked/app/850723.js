Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorRateOverlimitMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: n.value
    });
  }
  const l = (0, a.parseIQErrorFallbackClientMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorRateOverlimit", "IQErrorFallbackClient"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./58511.js");
var s = require("./686310.js");