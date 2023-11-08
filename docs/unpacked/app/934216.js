var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetMembershipApprovalRequestsMembershipApprovalRequestMixin = function (e) {
  const t = (0, l.assertTag)(e, "membership_approval_request");
  if (!t.success) {
    return t;
  }
  const n = (0, s.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, l.optional)(s.attrUserJid, e, "requestor");
  if (!r.success) {
    return r;
  }
  const u = (0, l.optional)(s.attrGroupJid, e, "parent_group_jid");
  if (!u.success) {
    return u;
  }
  const c = (0, l.attrIntRange)(e, "request_time", 0, undefined);
  if (!c.success) {
    return c;
  }
  const d = (0, o.parseMembershipRequestMethodAttributeMixin)(e);
  if (!d.success) {
    return d;
  }
  return (0, a.makeResult)((0, i.default)({
    jid: n.value,
    requestor: r.value,
    parentGroupJid: u.value,
    requestTime: c.value
  }, d.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./140089.js");
var s = require("./568113.js");
var l = require("./686310.js");