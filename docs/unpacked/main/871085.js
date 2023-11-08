Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipRequestsActionResponseSuccess = function (e, t) {
  const n = (0, c.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, c.flattenedChildWithTag)(e, "membership_requests_action");
  if (!o.success) {
    return o;
  }
  const l = (0, c.optionalChildWithTag)(o.value, "approve", f);
  if (!l.success) {
    return l;
  }
  const i = (0, c.optionalChildWithTag)(o.value, "reject", m);
  if (!i.success) {
    return i;
  }
  const u = (0, s.attrStringFromReference)(t, ["to"]);
  if (!u.success) {
    return u;
  }
  const d = (0, c.literal)(c.attrString, e, "from", u.value);
  if (!d.success) {
    return d;
  }
  const p = (0, c.literal)(c.attrString, e, "type", "result");
  if (!p.success) {
    return p;
  }
  const h = (0, s.attrStringFromReference)(t, ["id"]);
  if (!h.success) {
    return h;
  }
  const g = (0, c.literal)(c.attrString, e, "id", h.value);
  if (!g.success) {
    return g;
  }
  const E = (0, r.parseGroupAddressingModeMixin)(e);
  return (0, a.makeResult)({
    type: p.value,
    groupAddressingModeMixin: E.success ? E.value : null,
    membershipRequestsActionApprove: l.value,
    membershipRequestsActionReject: i.value
  });
};
exports.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionApprove = f;
exports.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionApproveParticipant = d;
exports.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionReject = m;
exports.parseMembershipRequestsActionResponseSuccessMembershipRequestsActionRejectParticipant = p;
var a = require("../app/135781.js");
var r = require("../app/682751.js");
var o = require("./57950.js");
var l = require("./180896.js");
var i = require("../app/202804.js");
var u = require("../app/568113.js");
var s = require("../app/591439.js");
var c = require("../app/686310.js");
function d(e) {
  const t = (0, c.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, i.parsePhoneNumberMixin)(e);
  const l = (0, o.parseMembershipRequestsActionAcceptParticipantMixins)(e);
  return (0, a.makeResult)({
    jid: n.value,
    phoneNumberMixin: r.success ? r.value : null,
    membershipRequestsActionAcceptParticipantMixins: l.success ? l.value : null
  });
}
function f(e) {
  const t = (0, c.assertTag)(e, "approve");
  if (!t.success) {
    return t;
  }
  const n = (0, c.mapChildrenWithTag)(e, "participant", 1, 19999, d);
  if (n.success) {
    return (0, a.makeResult)({
      participant: n.value
    });
  } else {
    return n;
  }
}
function p(e) {
  const t = (0, c.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, i.parsePhoneNumberMixin)(e);
  const o = (0, l.parseMembershipRequestsActionRejectParticipantMixins)(e);
  return (0, a.makeResult)({
    jid: n.value,
    phoneNumberMixin: r.success ? r.value : null,
    membershipRequestsActionRejectParticipantMixins: o.success ? o.value : null
  });
}
function m(e) {
  const t = (0, c.assertTag)(e, "reject");
  if (!t.success) {
    return t;
  }
  const n = (0, c.mapChildrenWithTag)(e, "participant", 1, 19999, p);
  if (n.success) {
    return (0, a.makeResult)({
      participant: n.value
    });
  } else {
    return n;
  }
}