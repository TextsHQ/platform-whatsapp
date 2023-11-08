var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupInfoWithIDMixin = function (e) {
  const t = (0, i.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, i.optionalChild)(e, "default_sub_group");
  if (!n.success) {
    return n;
  }
  const a = (0, i.optionalChild)(e, "general_chat");
  if (!a.success) {
    return a;
  }
  const u = (0, i.attrString)(e, "id");
  if (!u.success) {
    return u;
  }
  const s = (0, i.attrIntRange)(e, "s_t", 0, undefined);
  if (!s.success) {
    return s;
  }
  const c = (0, l.parseNamedSubjectMixin)(e);
  if (!c.success) {
    return c;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({
    id: u.value,
    sT: s.value
  }, c.value), {}, {
    hasDefaultSubGroup: n.value != null,
    hasGeneralChat: a.value != null
  }));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/373556.js");
var i = require("../app/686310.js");