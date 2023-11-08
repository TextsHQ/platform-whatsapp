Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipRequestsActionClientErrors = function (e) {
  const t = (0, r.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, l.parseIQErrorItemNotFoundMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: n.value
    });
  }
  const d = (0, u.parseIQErrorNotAuthorizedMixin)(e);
  if (d.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: d.value
    });
  }
  const f = (0, s.parseIQErrorRateOverlimitMixin)(e);
  if (f.success) {
    return (0, a.makeResult)({
      name: "IQErrorRateOverlimit",
      value: f.value
    });
  }
  const p = (0, i.parseIQErrorLockedMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "IQErrorLocked",
      value: p.value
    });
  }
  const m = (0, o.parseIQErrorFallbackClientMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "IQErrorFallbackClient",
      value: m.value
    });
  }
  return (0, c.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorItemNotFound", "IQErrorNotAuthorized", "IQErrorRateOverlimit", "IQErrorLocked", "IQErrorFallbackClient"], [t, n, d, f, p, m]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/996831.js");
var l = require("../app/495837.js");
var i = require("../app/457039.js");
var u = require("../app/174577.js");
var s = require("../app/58511.js");
var c = require("../app/686310.js");