Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
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
  const u = (0, o.parseIQErrorInternalServerErrorMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: u.value
    });
  }
  const c = (0, s.parseIQErrorServiceUnavailableMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorServiceUnavailable",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorForbidden", "IQErrorInternalServerError", "IQErrorServiceUnavailable"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./811250.js");
var a = require("./971207.js");
var o = require("./265778.js");
var s = require("./94758.js");
var l = require("./686310.js");