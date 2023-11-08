Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrFeatureNotImplementedMixinGroup = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, a.parseIQErrorFeatureNotImplementedMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorFeatureNotImplemented",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorFeatureNotImplemented"], [t, n]);
};
var r = require("./135781.js");
var i = require("./58186.js");
var a = require("./157510.js");
var o = require("./686310.js");