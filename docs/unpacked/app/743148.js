Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUsernameSetErrorResponses = function (e) {
  const t = (0, a.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, s.parseIQErrorForbiddenMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: n.value
    });
  }
  const p = (0, u.parseIQErrorNotAcceptableMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAcceptable",
      value: p.value
    });
  }
  const f = (0, o.parseIQErrorConflictMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "IQErrorConflict",
      value: f.value
    });
  }
  const _ = (0, c.parseIQErrorRateOverlimitMixin)(e);
  if (_.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: _.value
    });
  }
  const g = (0, i.parseIQErrorAlreadyExistsMixin)(e);
  if (g.success) {
    return (0, r.makeResult)({
      name: "IQErrorAlreadyExists",
      value: g.value
    });
  }
  const m = (0, l.parseIQErrorInternalServerErrorMixin)(e);
  if (m.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: m.value
    });
  }
  return (0, d.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorForbidden", "IQErrorNotAcceptable", "IQErrorConflict", "IQErrorRateOverlimit", "IQErrorAlreadyExists", "IQErrorInternalServerError"], [t, n, p, f, _, g, m]);
};
var r = require("./135781.js");
var i = require("./353441.js");
var a = require("./958124.js");
var o = require("./382525.js");
var s = require("./561076.js");
var l = require("./456554.js");
var u = require("./177937.js");
var c = require("./165688.js");
var d = require("./686310.js");