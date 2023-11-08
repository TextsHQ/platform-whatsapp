Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup = function (e) {
  const t = (0, o.parseIQErrorInternalServerErrorMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
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
  return (0, l.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorBadRequest", "IQErrorForbidden", "IQErrorRateOverlimit"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./331636.js");
var a = require("./357630.js");
var o = require("./546934.js");
var s = require("./441910.js");
var l = require("./686310.js");