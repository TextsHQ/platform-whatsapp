Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupNotAuthorizedOrForbiddenOrNotExistOrNotAcceptableOrConflictOrResourceLimitOrServerErrorMixinGroup = function (e) {
  const t = (0, i.parseSubGroupNotAuthorizedMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotAuthorized",
      value: t.value
    });
  }
  const n = (0, o.parseSubGroupForbiddenMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "SubGroupForbidden",
      value: n.value
    });
  }
  const f = (0, u.parseSubGroupNotExistMixin)(e);
  if (f.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotExist",
      value: f.value
    });
  }
  const p = (0, l.parseSubGroupNotAcceptableMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotAcceptable",
      value: p.value
    });
  }
  const m = (0, r.parseSubGroupConflictMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "SubGroupConflict",
      value: m.value
    });
  }
  const h = (0, s.parseSubGroupResourceLimitMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "SubGroupResourceLimit",
      value: h.value
    });
  }
  const g = (0, c.parseSubGroupServerErrorMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "SubGroupServerError",
      value: g.value
    });
  }
  return (0, d.errorMixinDisjunction)(e, ["SubGroupNotAuthorized", "SubGroupForbidden", "SubGroupNotExist", "SubGroupNotAcceptable", "SubGroupConflict", "SubGroupResourceLimit", "SubGroupServerError"], [t, n, f, p, m, h, g]);
};
var a = require("../app/135781.js");
var r = require("./712549.js");
var o = require("./280299.js");
var l = require("./905364.js");
var i = require("./515657.js");
var u = require("./365158.js");
var s = require("./70602.js");
var c = require("./379382.js");
var d = require("../app/686310.js");