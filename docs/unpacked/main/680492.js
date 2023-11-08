Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseJoinLinkedGroupClientErrors = function (e) {
  const t = (0, o.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, u.parseIQErrorForbiddenMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorForbidden",
      value: n.value
    });
  }
  const h = (0, s.parseIQErrorItemNotFoundMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: h.value
    });
  }
  const g = (0, c.parseIQErrorNotAllowedMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAllowed",
      value: g.value
    });
  }
  const E = (0, l.parseIQErrorConflictMixin)(e);
  if (E.success) {
    return (0, a.makeResult)({
      name: "IQErrorConflict",
      value: E.value
    });
  }
  const v = (0, f.parseIQErrorResourceLimitMixin)(e);
  if (v.success) {
    return (0, a.makeResult)({
      name: "IQErrorResourceLimit",
      value: v.value
    });
  }
  const _ = (0, d.parseIQErrorNotAuthorizedMixin)(e);
  if (_.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: _.value
    });
  }
  const y = (0, p.parseIQErrorUpgradeRequiredMixin)(e);
  if (y.success) {
    return (0, a.makeResult)({
      name: "IQErrorUpgradeRequired",
      value: y.value
    });
  }
  const C = (0, r.parseIQErrorAlreadyExistsMixin)(e);
  if (C.success) {
    return (0, a.makeResult)({
      name: "IQErrorAlreadyExists",
      value: C.value
    });
  }
  const b = (0, i.parseIQErrorFallbackClientMixin)(e);
  if (b.success) {
    return (0, a.makeResult)({
      name: "IQErrorFallbackClient",
      value: b.value
    });
  }
  return (0, m.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorForbidden", "IQErrorItemNotFound", "IQErrorNotAllowed", "IQErrorConflict", "IQErrorResourceLimit", "IQErrorNotAuthorized", "IQErrorUpgradeRequired", "IQErrorAlreadyExists", "IQErrorFallbackClient"], [t, n, h, g, E, v, _, y, C, b]);
};
var a = require("../app/135781.js");
var r = require("../app/558667.js");
var o = require("../app/452390.js");
var l = require("../app/37219.js");
var i = require("../app/996831.js");
var u = require("../app/341963.js");
var s = require("../app/495837.js");
var c = require("../app/134023.js");
var d = require("../app/174577.js");
var f = require("../app/513127.js");
var p = require("./566360.js");
var m = require("../app/686310.js");