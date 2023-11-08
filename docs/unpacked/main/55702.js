Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePromoteDemoteAdminClientErrors = function (e) {
  const t = (0, d.parseIQErrorRateOverlimitMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorRateOverlimit",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorBlockedIntegrityEnforcementMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorBlockedIntegrityEnforcement",
      value: n.value
    });
  }
  const p = (0, r.parseIQErrorBadRequestMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: p.value
    });
  }
  const m = (0, u.parseIQErrorItemNotFoundMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: m.value
    });
  }
  const h = (0, c.parseIQErrorNotAuthorizedMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: h.value
    });
  }
  const g = (0, i.parseIQErrorForbiddenMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "IQErrorForbidden",
      value: g.value
    });
  }
  const E = (0, s.parseIQErrorLockedMixin)(e);
  if (E.success) {
    return (0, a.makeResult)({
      name: "IQErrorLocked",
      value: E.value
    });
  }
  const v = (0, l.parseIQErrorFallbackClientMixin)(e);
  if (v.success) {
    return (0, a.makeResult)({
      name: "IQErrorFallbackClient",
      value: v.value
    });
  }
  return (0, f.errorMixinDisjunction)(e, ["IQErrorRateOverlimit", "IQErrorBlockedIntegrityEnforcement", "IQErrorBadRequest", "IQErrorItemNotFound", "IQErrorNotAuthorized", "IQErrorForbidden", "IQErrorLocked", "IQErrorFallbackClient"], [t, n, p, m, h, g, E, v]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("./552610.js");
var l = require("../app/996831.js");
var i = require("../app/341963.js");
var u = require("../app/495837.js");
var s = require("../app/457039.js");
var c = require("../app/174577.js");
var d = require("../app/58511.js");
var f = require("../app/686310.js");