Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorInternalServerErrorOrBadRequestMixinGroup = function (e) {
  const t = (0, a.parseIQErrorInternalServerErrorMixin)(e);
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
  return (0, o.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorBadRequest"], [t, n]);
};
var r = require("./135781.js");
var i = require("./12788.js");
var a = require("./700216.js");
var o = require("./686310.js");