var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAndUpdateGroupMembershipApprovalRequests = function () {
  return m.apply(this, arguments);
};
exports.queryMembershipApprovalRequests = p;
var i = r(require("../vendor/348926.js"));
var a = require("./749654.js");
var o = require("./779423.js");
var s = require("./359987.js");
var l = require("./984330.js");
var u = require("./854379.js");
var c = require("./130207.js");
var d = require("./574819.js");
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = yield (0, a.sendGetMembershipApprovalRequestsRPC)({
      iqTo: (0, d.widToGroupJid)(e)
    });
    switch (t.name) {
      case "GetMembershipApprovalRequestsResponseSuccess":
        return t.value.membershipApprovalRequestsMembershipApprovalRequest.map(e => {
          const t = (0, u.userJidToUserWid)(e.jid);
          return {
            id: t,
            t: e.requestTime,
            addedBy: e.requestor != null ? (0, u.userJidToUserWid)(e.requestor) : t,
            requestMethod: _(e.requestMethod),
            parentGroupId: e.parentGroupJid != null ? (0, u.groupJidToWid)(e.parentGroupJid) : undefined
          };
        });
      case "GetMembershipApprovalRequestsResponseClientError":
        return g(t.value.errorGetMembershipApprovalRequestsClientErrors.value);
      default:
        t.name;
        return g(t.value.errorServerErrors.value);
    }
  })).apply(this, arguments);
}
function _(e) {
  switch (e) {
    case "invite_link":
      return c.RequestMethod.InviteLink;
    case "linked_group_join":
      return c.RequestMethod.LinkedGroupJoin;
    case "non_admin_add":
      return c.RequestMethod.NonAdminAdd;
  }
}
function g(e) {
  let {
    code: t,
    text: n
  } = e;
  __LOG__(2)`queryMembershipApprovalRequests failed: ${t}:${n}`;
  return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const t = yield p(e);
    const n = (yield (0, o.getMembershipApprovalRequests)(e)).filter(e => !t.some(t => t.id.equals(e.id)));
    yield (0, o.removeMembershipApprovalRequests)(e, n.map(e => e.id));
    yield (0, o.addMembershipApprovalRequests)(e, t);
    (0, s.frontendFireAndForget)("removeMembershipApprovalRequests", {
      groupId: e,
      requestIds: n.map(e => e.id)
    });
    (0, s.frontendFireAndForget)("addMembershipApprovalRequests", {
      groupId: e,
      requests: t
    });
  })).apply(this, arguments);
}