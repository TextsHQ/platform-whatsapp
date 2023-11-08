var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAndUpdateCommunityParticipants = function () {
  return u.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/297031.js");
var l = require("./673427.js");
var i = a(require("../app/667845.js"));
function u() {
  return (u = (0, r.default)(function* (e) {
    const t = yield (0, l.getCommunityParticipants)(e);
    const n = i.default.get(e);
    if (!n) {
      return;
    }
    const a = n.participants;
    const r = t.map(e => {
      const t = a.get(e);
      let r = false;
      let o = false;
      if (t) {
        r = t.isAdmin;
        o = e === n.owner;
      }
      return {
        id: e,
        isAdmin: r,
        isSuperAdmin: o
      };
    });
    const u = {
      id: e,
      announce: false,
      participants: r.map(e => e),
      owner: n.owner,
      subject: n.subject,
      creation: n.creation,
      membershipApprovalMode: n.membershipApprovalMode,
      reportToAdminMode: n.reportToAdminMode,
      noFrequentlyForwarded: n.noFrequentlyForwarded,
      restrict: n.restrict
    };
    yield (0, o.updateGroupParticipantTableWithoutDeviceSyncJob)([u]);
    a.set(r);
  })).apply(this, arguments);
}