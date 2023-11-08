var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelMembershipApprovalRequestJob = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("./730071.js");
var l = require("../app/984330.js");
var i = require("../app/669050.js");
var u = require("../app/574819.js");
const s = function () {
  var e = (0, r.default)(function* (e, t) {
    var n;
    var a;
    const r = yield (0, o.sendCancelGroupMembershipRequestsRPC)({
      participantArgs: t.map(e => ({
        participantJid: (0, u.widToUserJid)(e)
      })),
      iqTo: (0, u.widToGroupJid)(e)
    });
    switch (r.name) {
      case "CancelGroupMembershipRequestsResponseSuccess":
        if ((n = (a = r.value.cancelMembershipRequestsParticipant) === null || a === undefined ? undefined : a.map(e => {
          const t = e.membershipRequestsCancellationParticipantMixins;
          return {
            wid: (0, i.createWid)(e.jid),
            error: t
          };
        })) !== null && n !== undefined) {
          return n;
        } else {
          return [];
        }
      case "CancelGroupMembershipRequestsResponseClientError":
        return c(r.value.errorMembershipRequestsCancellationClientErrors.value);
      case "CancelGroupMembershipRequestsResponseServerError":
        return c(r.value.errorServerErrors.value);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
function c(e) {
  let {
    code: t,
    text: n
  } = e;
  __LOG__(2)`cancelMembershipApprovalRequest failed: ${t}:${n}`;
  return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
}
exports.cancelMembershipApprovalRequestJob = s;