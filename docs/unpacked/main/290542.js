var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MembershipApprovalRequestAction = undefined;
exports.membershipApprovalRequestAction = function () {
  return c.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./937866.js");
var l = require("../app/984330.js");
var i = require("../app/669050.js");
var u = require("../app/574819.js");
const s = require("../vendor/76672.js").Mirrored(["Approve", "Reject"]);
function c() {
  return (c = (0, r.default)(function* (e, t, n) {
    const a = t.map(e => ({
      participantJid: (0, u.widToUserJid)(e)
    }));
    let r;
    let l;
    if (n === s.Approve) {
      r = {
        participantArgs: a
      };
    } else {
      l = {
        participantArgs: a
      };
    }
    const c = yield (0, o.sendMembershipRequestsActionRPC)({
      iqTo: (0, u.widToGroupJid)(e),
      approveArgs: r,
      rejectArgs: l
    });
    switch (c.name) {
      case "MembershipRequestsActionResponseSuccess":
        {
          var f;
          var p;
          const e = n === s.Approve ? c.value.membershipRequestsActionApprove : c.value.membershipRequestsActionReject;
          if ((f = e == null || (p = e.participant) === null || p === undefined ? undefined : p.map(e => {
            const t = n === s.Approve ? e.membershipRequestsActionAcceptParticipantMixins : e.membershipRequestsActionRejectParticipantMixins;
            return {
              wid: (0, i.createWid)(e.jid),
              error: t
            };
          })) !== null && f !== undefined) {
            return f;
          } else {
            return [];
          }
        }
      case "MembershipRequestsActionResponseClientError":
        return d(c.value.errorMembershipRequestsActionClientErrors.value);
      default:
        c.name;
        return d(c.value.errorServerErrors.value);
    }
  })).apply(this, arguments);
}
function d(e) {
  let {
    code: t,
    text: n
  } = e;
  __LOG__(2)`membershipApprovalRequestAction failed: ${t}:${n}`;
  return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
}
exports.MembershipApprovalRequestAction = s;