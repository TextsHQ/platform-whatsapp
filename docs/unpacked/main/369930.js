var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUnlinkGroupsResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, s.flattenedChildWithTag)(e, "unlink");
  if (!a.success) {
    return a;
  }
  const i = (0, s.literal)(s.attrString, a.value, "unlink_type", "sub_group");
  if (!i.success) {
    return i;
  }
  const u = (0, l.parseIQResultResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  const d = (0, s.mapChildrenWithTag)(a.value, "group", 1, 1000, c);
  if (!d.success) {
    return d;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({
    unlinkUnlinkType: i.value
  }, u.value), {}, {
    unlinkGroup: d.value
  }));
};
exports.parseUnlinkGroupsResponseSuccessUnlinkGroup = c;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("./682607.js");
var u = require("../app/568113.js");
var s = require("../app/686310.js");
function c(e) {
  const t = (0, s.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrGroupJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const a = (0, s.optionalLiteral)(s.attrString, e, "remove_orphaned_members", "true");
  if (!a.success) {
    return a;
  }
  const r = (0, i.parseSubGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup)(e);
  return (0, o.makeResult)({
    jid: n.value,
    removeOrphanedMembers: a.value,
    subGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup: r.success ? r.value : null
  });
}