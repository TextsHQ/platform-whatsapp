Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorItemNotFoundOrBadRequestOrRateOverlimitOrFallbackClientMixinGroup = function (e) {
  const t = (0, o.parseIQErrorItemNotFoundMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
      value: t.value
    });
  }
  const n = (0, i.parseIQErrorBadRequestMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: n.value
    });
  }
  const u = (0, s.parseIQErrorRateOverlimitMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: u.value
    });
  }
  const c = (0, a.parseIQErrorFallbackClientMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["IQErrorItemNotFound", "IQErrorBadRequest", "IQErrorRateOverlimit", "IQErrorFallbackClient"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./495837.js");
var s = require("./58511.js");
var l = require("./686310.js");