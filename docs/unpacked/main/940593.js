Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupNotAuthorizedOrNotExistOrConflictOrResourceLimitOrBadRequestOrServerErrorMixinGroup = function (e) {
  const t = (0, l.parseSubGroupNotAuthorizedMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotAuthorized",
      value: t.value
    });
  }
  const n = (0, i.parseSubGroupNotExistMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotExist",
      value: n.value
    });
  }
  const d = (0, o.parseSubGroupConflictMixin)(e);
  if (d.success) {
    return (0, a.makeResult)({
      name: "SubGroupConflict",
      value: d.value
    });
  }
  const f = (0, u.parseSubGroupResourceLimitMixin)(e);
  if (f.success) {
    return (0, a.makeResult)({
      name: "SubGroupResourceLimit",
      value: f.value
    });
  }
  const p = (0, r.parseSubGroupBadRequestMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "SubGroupBadRequest",
      value: p.value
    });
  }
  const m = (0, s.parseSubGroupServerErrorMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "SubGroupServerError",
      value: m.value
    });
  }
  return (0, c.errorMixinDisjunction)(e, ["SubGroupNotAuthorized", "SubGroupNotExist", "SubGroupConflict", "SubGroupResourceLimit", "SubGroupBadRequest", "SubGroupServerError"], [t, n, d, f, p, m]);
};
var a = require("../app/135781.js");
var r = require("./831355.js");
var o = require("./712549.js");
var l = require("./515657.js");
var i = require("./365158.js");
var u = require("./70602.js");
var s = require("./379382.js");
var c = require("../app/686310.js");