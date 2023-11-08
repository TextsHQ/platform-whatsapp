Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorInternalServerErrorOrForbiddenOrBadRequestOrNotAllowedMixinGroup = function (e) {
  const t = (0, o.parseIQErrorInternalServerErrorMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: t.value
    });
  }
  const n = (0, a.parseIQErrorForbiddenMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: n.value
    });
  }
  const u = (0, i.parseIQErrorBadRequestMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: u.value
    });
  }
  const c = (0, s.parseIQErrorNotAllowedMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAllowed",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorForbidden", "IQErrorBadRequest", "IQErrorNotAllowed"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./287021.js");
var a = require("./680634.js");
var o = require("./832726.js");
var s = require("./439996.js");
var l = require("./686310.js");