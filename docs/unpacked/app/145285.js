Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrNotAuthorizedOrItemNotFoundOrRateOverlimitOrInternalServerErrorOrFeatureNotImplementedOrServiceUnavailableMixinGroup = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, l.parseIQErrorNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAuthorized",
      value: n.value
    });
  }
  const p = (0, s.parseIQErrorItemNotFoundMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
      value: p.value
    });
  }
  const f = (0, u.parseIQErrorRateOverlimitMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: f.value
    });
  }
  const _ = (0, o.parseIQErrorInternalServerErrorMixin)(e);
  if (_.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: _.value
    });
  }
  const g = (0, a.parseIQErrorFeatureNotImplementedMixin)(e);
  if (g.success) {
    return (0, r.makeResult)({
      name: "IQErrorFeatureNotImplemented",
      value: g.value
    });
  }
  const m = (0, c.parseIQErrorServiceUnavailableMixin)(e);
  if (m.success) {
    return (0, r.makeResult)({
      name: "IQErrorServiceUnavailable",
      value: m.value
    });
  }
  return (0, d.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNotAuthorized", "IQErrorItemNotFound", "IQErrorRateOverlimit", "IQErrorInternalServerError", "IQErrorFeatureNotImplemented", "IQErrorServiceUnavailable"], [t, n, p, f, _, g, m]);
};
var r = require("./135781.js");
var i = require("./167961.js");
var a = require("./676290.js");
var o = require("./625325.js");
var s = require("./191442.js");
var l = require("./784548.js");
var u = require("./139480.js");
var c = require("./366579.js");
var d = require("./686310.js");