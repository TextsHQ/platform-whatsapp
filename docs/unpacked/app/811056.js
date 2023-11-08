Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetSubGroupSuggestionsClientErrors = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorForbiddenMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: n.value
    });
  }
  const c = (0, s.parseIQErrorItemNotFoundMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
      value: c.value
    });
  }
  const d = (0, l.parseIQErrorRateOverlimitMixin)(e);
  if (d.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: d.value
    });
  }
  const p = (0, a.parseIQErrorFallbackClientMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: p.value
    });
  }
  return (0, u.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorForbidden", "IQErrorItemNotFound", "IQErrorRateOverlimit", "IQErrorFallbackClient"], [t, n, c, d, p]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./341963.js");
var s = require("./495837.js");
var l = require("./58511.js");
var u = require("./686310.js");