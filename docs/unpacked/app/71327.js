Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseServerErrors = function (e) {
  const t = (0, a.parseIQErrorServiceUnavailableMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorServiceUnavailable",
      value: t.value
    });
  }
  const n = (0, i.parseIQErrorFallbackServerMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackServer",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["IQErrorServiceUnavailable", "IQErrorFallbackServer"], [t, n]);
};
var r = require("./135781.js");
var i = require("./735379.js");
var a = require("./571114.js");
var o = require("./686310.js");