var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPendingParticipants = function (e) {
  return (0, o.getPendingParticipants)(e);
};
exports.joinGroupViaInviteV4 = function (e, t, n, r) {
  return (0, c.joinGroupViaInviteV4)(e, t, n, r);
};
exports.queryGroupInviteV4Info = function () {
  return f.apply(this, arguments);
};
exports.revokeGroupInviteV4 = function (e, t) {
  return (0, c.revokeGroupInviteV4)(e, t);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./144818.js");
var s = require("./351053.js");
var l = require("./177938.js");
var u = r(require("./97359.js"));
var c = require("./727990.js");
var d = require("./848624.js");
var p = require("./669050.js");
function f() {
  return (f = (0, a.default)(function* (e, t, r, a) {
    let o = null;
    const f = (0, u.default)(require("./667845.js")).get(r);
    if (f) {
      o = yield (0, d.phashV1)(f.participants.map(e => e.id));
    }
    return (0, c.queryGroupInviteV4)(e, t, r, a, o).then(e => e.phashMatch === true ? {
      status: 200,
      phashMatch: true
    } : e.groupMetadata != null ? (0, i.default)({}, e.groupMetadata) : {
      status: e.status
    }).then(e => {
      if (e.status != null && e.status > 0) {
        return e;
      }
      if (e.id != null) {
        l.ContactCollection.gadd(e.id);
        return e;
      }
      const t = (0, u.default)(require("./667845.js")).assertGet((0, p.createWidFromWidLike)(r));
      const i = s.ChatCollection.assertGet(t.id).contact.name;
      return {
        id: t.id,
        owner: t.owner,
        creation: t.creation,
        desc: t.desc,
        descId: t.descId,
        descOwner: t.descOwner,
        descTime: t.descTime,
        restrict: t.restrict,
        announce: t.announce,
        ephemeralDuration: t.ephemeralDuration,
        membershipApprovalMode: t.membershipApprovalMode,
        reportToAdminMode: t.reportToAdminMode,
        growthLockExpiration: t.growthLockExpiration,
        growthLockType: t.growthLockType,
        noFrequentlyForwarded: t.noFrequentlyForwarded,
        subject: i,
        participants: t.participants.map(e => ({
          id: e.id,
          isAdmin: e.isAdmin,
          isSuperAdmin: e.isSuperAdmin
        }))
      };
    });
  })).apply(this, arguments);
}