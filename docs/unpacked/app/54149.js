Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMembershipApprovalRequestsJob = function (e, t, n) {
  return (0, a.createNonPersistedJob)("removeMembershipApprovalRequests", e => (0, i.removeMembershipApprovalRequests)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    group: e,
    requests: t,
    isOffline: n
  });
};
var r = require("./775593.js");
var i = require("./805875.js");
var a = require("./899137.js");