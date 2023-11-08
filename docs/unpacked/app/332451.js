Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAcceptGroupAddClientErrors = function (e) {
  const t = (0, i.parseIQErrorAlreadyExistsMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorAlreadyExists",
      value: t.value
    });
  }
  const n = (0, a.parseIQErrorBadRequestMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: n.value
    });
  }
  const y = (0, f.parseIQErrorNotAuthorizedMixin)(e);
  if (y.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAuthorized",
      value: y.value
    });
  }
  const E = (0, l.parseIQErrorForbiddenMixin)(e);
  if (E.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: E.value
    });
  }
  const S = (0, c.parseIQErrorItemNotFoundMixin)(e);
  if (S.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
      value: S.value
    });
  }
  const v = (0, o.parseIQErrorConflictMixin)(e);
  if (v.success) {
    return (0, r.makeResult)({
      name: "IQErrorConflict",
      value: v.value
    });
  }
  const T = (0, u.parseIQErrorGoneMixin)(e);
  if (T.success) {
    return (0, r.makeResult)({
      name: "IQErrorGone",
      value: T.value
    });
  }
  const M = (0, m.parseIQErrorResourceLimitMixin)(e);
  if (M.success) {
    return (0, r.makeResult)({
      name: "IQErrorResourceLimit",
      value: M.value
    });
  }
  const A = (0, d.parseIQErrorLockedMixin)(e);
  if (A.success) {
    return (0, r.makeResult)({
      name: "IQErrorLocked",
      value: A.value
    });
  }
  const b = (0, g.parseIQErrorResourceConstraintMixin)(e);
  if (b.success) {
    return (0, r.makeResult)({
      name: "IQErrorResourceConstraint",
      value: b.value
    });
  }
  const C = (0, p.parseIQErrorNotAllowedMixin)(e);
  if (C.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAllowed",
      value: C.value
    });
  }
  const P = (0, _.parseIQErrorParentLinkedGroupsParticipantsResourceLimitMixin)(e);
  if (P.success) {
    return (0, r.makeResult)({
      name: "IQErrorParentLinkedGroupsParticipantsResourceLimit",
      value: P.value
    });
  }
  const O = (0, s.parseIQErrorFallbackClientMixin)(e);
  if (O.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: O.value
    });
  }
  return (0, h.errorMixinDisjunction)(e, ["IQErrorAlreadyExists", "IQErrorBadRequest", "IQErrorNotAuthorized", "IQErrorForbidden", "IQErrorItemNotFound", "IQErrorConflict", "IQErrorGone", "IQErrorResourceLimit", "IQErrorLocked", "IQErrorResourceConstraint", "IQErrorNotAllowed", "IQErrorParentLinkedGroupsParticipantsResourceLimit", "IQErrorFallbackClient"], [t, n, y, E, S, v, T, M, A, b, C, P, O]);
};
var r = require("./135781.js");
var i = require("./558667.js");
var a = require("./452390.js");
var o = require("./37219.js");
var s = require("./996831.js");
var l = require("./341963.js");
var u = require("./701000.js");
var c = require("./495837.js");
var d = require("./457039.js");
var p = require("./134023.js");
var f = require("./174577.js");
var _ = require("./417654.js");
var g = require("./36224.js");
var m = require("./513127.js");
var h = require("./686310.js");