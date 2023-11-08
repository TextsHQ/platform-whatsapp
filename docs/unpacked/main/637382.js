Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetAddModeClientErrors = function (e) {
  const t = (0, r.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, c.parseIQErrorNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: n.value
    });
  }
  const m = (0, l.parseIQErrorForbiddenMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "IQErrorForbidden",
      value: m.value
    });
  }
  const h = (0, i.parseIQErrorItemNotFoundMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: h.value
    });
  }
  const g = (0, s.parseIQErrorNotAllowedMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAllowed",
      value: g.value
    });
  }
  const E = (0, f.parseIQErrorResourceLimitMixin)(e);
  if (E.success) {
    return (0, a.makeResult)({
      name: "IQErrorResourceLimit",
      value: E.value
    });
  }
  const v = (0, u.parseIQErrorLockedMixin)(e);
  if (v.success) {
    return (0, a.makeResult)({
      name: "IQErrorLocked",
      value: v.value
    });
  }
  const _ = (0, d.parseIQErrorRateOverlimitMixin)(e);
  if (_.success) {
    return (0, a.makeResult)({
      name: "IQErrorRateOverlimit",
      value: _.value
    });
  }
  const y = (0, o.parseIQErrorFallbackClientMixin)(e);
  if (y.success) {
    return (0, a.makeResult)({
      name: "IQErrorFallbackClient",
      value: y.value
    });
  }
  return (0, p.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNotAuthorized", "IQErrorForbidden", "IQErrorItemNotFound", "IQErrorNotAllowed", "IQErrorResourceLimit", "IQErrorLocked", "IQErrorRateOverlimit", "IQErrorFallbackClient"], [t, n, m, h, g, E, v, _, y]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/996831.js");
var l = require("../app/341963.js");
var i = require("../app/495837.js");
var u = require("../app/457039.js");
var s = require("../app/134023.js");
var c = require("../app/174577.js");
var d = require("../app/58511.js");
var f = require("../app/513127.js");
var p = require("../app/686310.js");