Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCreateClientErrors = function (e) {
  const t = (0, l.parseIQErrorForbiddenMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorForbidden",
      value: t.value
    });
  }
  const n = (0, f.parseIQErrorResourceConstraintMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorResourceConstraint",
      value: n.value
    });
  }
  const h = (0, i.parseIQErrorItemNotFoundMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: h.value
    });
  }
  const g = (0, p.parseIQErrorResourceLimitMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "IQErrorResourceLimit",
      value: g.value
    });
  }
  const E = (0, u.parseIQErrorNotAcceptableMixin)(e);
  if (E.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAcceptable",
      value: E.value
    });
  }
  const v = (0, r.parseIQErrorBadRequestMixin)(e);
  if (v.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
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
  const y = (0, s.parseIQErrorNotAllowedMixin)(e);
  if (y.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAllowed",
      value: y.value
    });
  }
  const C = (0, c.parseIQErrorParentLinkedGroupsParticipantsResourceLimitMixin)(e);
  if (C.success) {
    return (0, a.makeResult)({
      name: "IQErrorParentLinkedGroupsParticipantsResourceLimit",
      value: C.value
    });
  }
  const b = (0, o.parseIQErrorFallbackClientMixin)(e);
  if (b.success) {
    return (0, a.makeResult)({
      name: "IQErrorFallbackClient",
      value: b.value
    });
  }
  return (0, m.errorMixinDisjunction)(e, ["IQErrorForbidden", "IQErrorResourceConstraint", "IQErrorItemNotFound", "IQErrorResourceLimit", "IQErrorNotAcceptable", "IQErrorBadRequest", "IQErrorRateOverlimit", "IQErrorNotAllowed", "IQErrorParentLinkedGroupsParticipantsResourceLimit", "IQErrorFallbackClient"], [t, n, h, g, E, v, _, y, C, b]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/996831.js");
var l = require("../app/341963.js");
var i = require("../app/495837.js");
var u = require("../app/995767.js");
var s = require("../app/134023.js");
var c = require("../app/417654.js");
var d = require("../app/58511.js");
var f = require("../app/36224.js");
var p = require("../app/513127.js");
var m = require("../app/686310.js");