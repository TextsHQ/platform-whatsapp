Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCancelGroupMembershipRequestsResponseSuccess = function (e, t) {
  const n = (0, i.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, i.flattenedChildWithTag)(e, "cancel_membership_requests");
  if (!r.success) {
    return r;
  }
  const o = (0, l.attrStringFromReference)(t, ["to"]);
  if (!o.success) {
    return o;
  }
  const s = (0, i.literal)(i.attrString, e, "from", o.value);
  if (!s.success) {
    return s;
  }
  const c = (0, i.literal)(i.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  const d = (0, l.attrStringFromReference)(t, ["id"]);
  if (!d.success) {
    return d;
  }
  const f = (0, i.literal)(i.attrString, e, "id", d.value);
  if (!f.success) {
    return f;
  }
  const p = (0, i.mapChildrenWithTag)(r.value, "participant", 1, 19999, u);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)({
    type: c.value,
    cancelMembershipRequestsParticipant: p.value
  });
};
exports.parseCancelGroupMembershipRequestsResponseSuccessCancelMembershipRequestsParticipant = u;
var a = require("../app/135781.js");
var r = require("./180111.js");
var o = require("../app/568113.js");
var l = require("../app/591439.js");
var i = require("../app/686310.js");
function u(e) {
  const t = (0, i.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, o.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const l = (0, r.parseMembershipRequestsCancellationParticipantMixins)(e);
  return (0, a.makeResult)({
    jid: n.value,
    membershipRequestsCancellationParticipantMixins: l.success ? l.value : null
  });
}