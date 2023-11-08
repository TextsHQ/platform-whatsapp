Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseServerErrors = function (e) {
  const t = (0, a.parseIQErrorInternalServerErrorMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: t.value
    });
  }
  const n = (0, s.parseIQErrorServiceUnavailableMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorServiceUnavailable",
      value: n.value
    });
  }
  const u = (0, o.parseIQErrorPartialServerErrorMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "IQErrorPartialServerError",
      value: u.value
    });
  }
  const c = (0, i.parseIQErrorFallbackServerMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackServer",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorServiceUnavailable", "IQErrorPartialServerError", "IQErrorFallbackServer"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./611700.js");
var a = require("./464318.js");
var o = require("./280851.js");
var s = require("./446079.js");
var l = require("./686310.js");