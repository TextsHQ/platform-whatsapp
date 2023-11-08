Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetDescriptionClientErrors = function (e) {
  const t = (0, r.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorConflictMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorConflict",
      value: n.value
    });
  }
  const p = (0, u.parseIQErrorItemNotFoundMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: p.value
    });
  }
  const m = (0, d.parseIQErrorNotAuthorizedMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: m.value
    });
  }
  const h = (0, i.parseIQErrorForbiddenMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "IQErrorForbidden",
      value: h.value
    });
  }
  const g = (0, c.parseIQErrorNotAcceptableMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAcceptable",
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
  return (0, f.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorConflict", "IQErrorItemNotFound", "IQErrorNotAuthorized", "IQErrorForbidden", "IQErrorNotAcceptable", "IQErrorLocked", "IQErrorFallbackClient"], [t, n, p, m, h, g, E, v]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/37219.js");
var l = require("../app/996831.js");
var i = require("../app/341963.js");
var u = require("../app/495837.js");
var s = require("../app/457039.js");
var c = require("../app/995767.js");
var d = require("../app/174577.js");
var f = require("../app/686310.js");