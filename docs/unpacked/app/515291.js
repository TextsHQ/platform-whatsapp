Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetInviteGroupInfoResponseSuccess = function (e, t) {
  const n = (0, o.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const s = (0, o.flattenedChildWithTag)(e, "group");
  if (!s.success) {
    return s;
  }
  const l = (0, a.attrStringFromReference)(t, ["to"]);
  if (!l.success) {
    return l;
  }
  const u = (0, o.literal)(o.attrString, e, "from", l.value);
  if (!u.success) {
    return u;
  }
  const c = (0, o.literal)(o.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  const d = (0, a.attrStringFromReference)(t, ["id"]);
  if (!d.success) {
    return d;
  }
  const p = (0, o.literal)(o.attrString, e, "id", d.value);
  if (!p.success) {
    return p;
  }
  const f = (0, o.attrIntRange)(s.value, "size", 0, 19999);
  if (!f.success) {
    return f;
  }
  const _ = (0, i.parseInviteLinkGroupInfoMixin)(s.value);
  if (!_.success) {
    return _;
  }
  return (0, r.makeResult)({
    type: c.value,
    groupSize: f.value,
    groupInviteLinkGroupInfoMixin: _.value
  });
};
var r = require("./135781.js");
var i = require("./793659.js");
var a = require("./591439.js");
var o = require("./686310.js");