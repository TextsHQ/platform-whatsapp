Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorNotAcceptableOrBadRequestOrForbiddenOrRateOverlimitMixinGroup = function (e) {
  const t = (0, o.parseIQErrorNotAcceptableMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAcceptable",
      value: t.value
    });
  }
  const n = (0, i.parseIQErrorBadRequestMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: n.value
    });
  }
  const u = (0, a.parseIQErrorForbiddenMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: u.value
    });
  }
  const c = (0, s.parseIQErrorRateOverlimitMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["IQErrorNotAcceptable", "IQErrorBadRequest", "IQErrorForbidden", "IQErrorRateOverlimit"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./668691.js");
var a = require("./327873.js");
var o = require("./270943.js");
var s = require("./928431.js");
var l = require("./686310.js");