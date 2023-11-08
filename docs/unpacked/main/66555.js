var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFBBizResponseCatalog = s;
exports.parseFBBizResponseMixin = function (e) {
  const t = (0, u.assertTag)(e, "fb_biz");
  if (!t.success) {
    return t;
  }
  const n = (0, u.optionalChildWithTag)(e, "catalog", s);
  if (!n.success) {
    return n;
  }
  const a = (0, u.attrString)(e, "id");
  if (!a.success) {
    return a;
  }
  const l = (0, i.parseHasDisplayNameMixin)(e);
  if (!l.success) {
    return l;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({
    id: a.value
  }, l.value), {}, {
    catalog: n.value
  }));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("./592099.js");
var i = require("./12946.js");
var u = require("../app/686310.js");
function s(e) {
  const t = (0, u.assertTag)(e, "catalog");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrStringEnum)(e, "state", l.ENUM_DISABLE_IMPORT);
  if (!n.success) {
    return n;
  }
  const a = (0, u.attrString)(e, "id");
  if (a.success) {
    return (0, o.makeResult)({
      state: n.value,
      id: a.value
    });
  } else {
    return a;
  }
}