Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryGroupInviteLinkProfilePicJob = function (e, t, n) {
  const l = {
    groupWid: e,
    code: t,
    option: n
  };
  return (0, r.createNonPersistedJob)("queryGroupInviteLinkProfilePic", () => (0, o.queryGroupInviteLinkProfilePic)(l), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted(l);
};
exports.queryGroupInviteMessageProfilePicJob = function (e, t, n, l, i) {
  const u = {
    groupWid: e,
    code: t,
    expiration: n,
    adminWid: l,
    option: i
  };
  return (0, r.createNonPersistedJob)("queryGroupInviteMessageProfilePic", () => (0, o.queryGroupInviteMessageProfilePic)(u), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted(u);
};
var a = require("../app/775593.js");
var r = require("../app/899137.js");
var o = require("./558055.js");