Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorBadRequestOrNoticeRequiredOrInternalServerErrorMixinGroup = function (e) {
  const t = (0, r.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, l.parseIQErrorNoticeRequiredMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorNoticeRequired",
      value: n.value
    });
  }
  const u = (0, o.parseIQErrorInternalServerErrorMixin)(e);
  if (u.success) {
    return (0, a.makeResult)({
      name: "IQErrorInternalServerError",
      value: u.value
    });
  }
  return (0, i.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNoticeRequired", "IQErrorInternalServerError"], [t, n, u]);
};
var a = require("../app/135781.js");
var r = require("./855679.js");
var o = require("./396532.js");
var l = require("./347594.js");
var i = require("../app/686310.js");