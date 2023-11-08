Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMembershipApprovalRequests = exports.removeAllMembershipApprovalRequests = exports.getMembershipApprovalRequests = exports.addMembershipApprovalRequests = undefined;
var r = require("./965897.js");
var i = require("./669050.js");
exports.getMembershipApprovalRequests = e => (0, r.getMembershipApprovalRequestTable)().equals(["groupId"], e.toString()).then(e => e.map(e => {
  let {
    id: t,
    t: n,
    addedBy: r,
    requestMethod: a,
    parentGroupId: o
  } = e;
  return {
    id: (0, i.createWid)(t),
    t: n,
    addedBy: (0, i.createWid)(r),
    requestMethod: a,
    parentGroupId: o != null ? (0, i.createWid)(o) : undefined
  };
}));
exports.addMembershipApprovalRequests = (e, t) => {
  const n = t.map(t => {
    let {
      id: n,
      t: r,
      addedBy: i,
      requestMethod: a,
      parentGroupId: o
    } = t;
    return {
      groupId: e.toString(),
      id: n.toString(),
      t: r,
      addedBy: i.toString(),
      requestMethod: a,
      parentGroupId: o == null ? undefined : o.toString()
    };
  });
  return (0, r.getMembershipApprovalRequestTable)().bulkCreateOrReplace(n);
};
exports.removeMembershipApprovalRequests = (e, t) => {
  const n = e.toString();
  return (0, r.getMembershipApprovalRequestTable)().bulkRemove(t.map(e => [n, e.toString()]));
};
exports.removeAllMembershipApprovalRequests = e => (0, r.getMembershipApprovalRequestTable)().bulkRemoveByIndex(["groupId"], [e.toString()]);