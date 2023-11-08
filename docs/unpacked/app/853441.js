var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendQueryGroup = function () {
  return d.apply(this, arguments);
};
exports.sendQueryGroupInvite = function (e) {
  return (0, c.queryGroupInvite)(e).then(e => (0, i.default)({
    status: 200
  }, e));
};
exports.updateSubject = p;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./724976.js");
var s = require("./359987.js");
var l = require("./984330.js");
var u = require("./945176.js");
var c = require("./113269.js");
function d() {
  return (d = (0, a.default)(function* (e) {
    __LOG__(2, undefined, undefined, undefined, ["groups"])`querying server for groupMetadata of group id ${e.toLogString()}`;
    const t = (0, u.queryGroupJob)(e);
    try {
      const l = yield t;
      var n;
      var r;
      var i;
      var a;
      var o;
      var s;
      var c;
      var d;
      var f;
      var _;
      var g;
      var m;
      var h;
      if (l == null ? undefined : l.id) {
        p(e, l.subject);
        return {
          id: l.id,
          owner: l.owner,
          creation: l.creation,
          subject: l.subject,
          desc: l.desc,
          descId: l.descId,
          descOwner: l.descOwner,
          descTime: l.descTime,
          restrict: (n = l.restrict) !== null && n !== undefined && n,
          announce: (r = l.announce) !== null && r !== undefined && r,
          noFrequentlyForwarded: (i = l.noFrequentlyForwarded) !== null && i !== undefined && i,
          ephemeralDuration: (a = l.ephemeralDuration) !== null && a !== undefined ? a : 0,
          membershipApprovalMode: l.membershipApprovalMode,
          participants: l.participants,
          support: (o = l.support) !== null && o !== undefined && o,
          suspended: (s = l.suspended) !== null && s !== undefined && s,
          terminated: (c = l.terminated) !== null && c !== undefined && c,
          parentGroup: l.parentGroup,
          isParentGroup: (d = l.isParentGroup) !== null && d !== undefined && d,
          isParentGroupClosed: (f = l.isParentGroupClosed) !== null && f !== undefined && f,
          defaultSubgroup: (_ = l.defaultSubgroup) !== null && _ !== undefined && _,
          generalSubgroup: (g = l.generalSubgroup) !== null && g !== undefined && g,
          incognito: (m = l.incognito) !== null && m !== undefined && m,
          isLidAddressingMode: (h = l.isLidAddressingMode) !== null && h !== undefined && h,
          allowNonAdminSubGroupCreation: l.allowNonAdminSubGroupCreation,
          generalChatAutoAddDisabled: l.generalChatAutoAddDisabled
        };
      }
      __LOG__(3)`Store:GroupMetadata Unexpected server response`;
    } catch (t) {
      if (t instanceof l.ServerStatusCodeError && t.status >= 400) {
        return {
          id: e,
          stale: false
        };
      }
      throw t;
    }
  })).apply(this, arguments);
}
function p(e, t) {
  if ((0, o.isString)(t)) {
    (0, s.frontendFireAndForget)("updateGroupSubject", {
      id: e,
      subject: t
    });
  }
}