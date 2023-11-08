Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup = function (e) {
  const t = (0, r.parseSubGroupBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "SubGroupBadRequest",
      value: t.value
    });
  }
  const n = (0, l.parseSubGroupNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotAuthorized",
      value: n.value
    });
  }
  const d = (0, i.parseSubGroupNotExistMixin)(e);
  if (d.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotExist",
      value: d.value
    });
  }
  const f = (0, o.parseSubGroupNotAcceptableMixin)(e);
  if (f.success) {
    return (0, a.makeResult)({
      name: "SubGroupNotAcceptable",
      value: f.value
    });
  }
  const p = (0, u.parseSubGroupPartialServerErrorMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "SubGroupPartialServerError",
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
  return (0, c.errorMixinDisjunction)(e, ["SubGroupBadRequest", "SubGroupNotAuthorized", "SubGroupNotExist", "SubGroupNotAcceptable", "SubGroupPartialServerError", "SubGroupServerError"], [t, n, d, f, p, m]);
};
var a = require("../app/135781.js");
var r = require("./831355.js");
var o = require("./905364.js");
var l = require("./515657.js");
var i = require("./365158.js");
var u = require("./446747.js");
var s = require("./379382.js");
var c = require("../app/686310.js");