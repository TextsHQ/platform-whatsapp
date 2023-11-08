var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeQueryAndUpdateMembershipApprovalRequests = S;
exports.queryAllGroups = function () {
  return h.apply(this, arguments);
};
exports.queryAndUpdateGroupMetadataById = function () {
  return E.apply(this, arguments);
};
exports.queryGroupInvite = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./363030.js");
var o = require("./661331.js");
var s = require("./287461.js");
var l = require("./35234.js");
var u = require("./827467.js");
var c = require("./359987.js");
var d = require("./984330.js");
var p = require("./297031.js");
var f = require("./198111.js");
var _ = require("./945176.js");
var g = require("./429267.js");
var m = require("./459857.js");
function h() {
  return (h = (0, i.default)(function* () {
    (0, u.clearAdminshipCache)();
    const e = yield (0, o.sendGetParticipatingGroupsRPC)({
      hasParticipants: true,
      hasDescription: true
    });
    switch (e.name) {
      case "GetParticipatingGroupsResponseSuccess":
        return e.value.groupsGroup.map(g.parseGroupSmax);
      case "GetParticipatingGroupsResponseClientError":
        {
          const {
            code: t,
            text: n
          } = e.value.errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup.value;
          __LOG__(2)`queryAllGroups failed: ${t}:${n}`;
          return Promise.reject(new d.ServerStatusCodeError(Number(t), n));
        }
      case "GetParticipatingGroupsResponseServerError":
        {
          const {
            code: t,
            text: n
          } = e.value.errorServerErrors.value;
          __LOG__(2)`queryAllGroups failed: ${t}:${n}`;
          return Promise.reject(new d.ServerStatusCodeError(Number(t), n));
        }
    }
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = yield (0, a.sendGetInviteGroupInfoRPC)({
      inviteCode: e
    });
    switch (t.name) {
      case "GetInviteGroupInfoResponseSuccess":
        return (0, g.parseGroupSmax)(t.value.groupInviteLinkGroupInfoMixin);
      case "GetInviteGroupInfoResponseClientError":
        {
          const {
            code: e,
            text: n
          } = t.value.errorGetInviteGroupInfoClientErrors.value;
          __LOG__(2)`queryGroupInvite failed: ${e}:${n}`;
          return Promise.reject(new d.ServerStatusCodeError(Number(e), n));
        }
      case "GetInviteGroupInfoResponseServerError":
        {
          const {
            code: e,
            text: n
          } = t.value.errorServerErrors.value;
          __LOG__(2)`queryGroupInvite failed: ${e}:${n}`;
          return Promise.reject(new d.ServerStatusCodeError(Number(e), n));
        }
    }
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    const n = yield (0, _.queryGroupJob)(e, t);
    if (n == null) {
      return;
    }
    if (n.phashMatch) {
      return void __LOG__(2)`queryAndUpdateGroupMetadataById: skip update due to phash match`;
    }
    const [r] = yield (0, u.injectPastParticipantsFromDB)([n]);
    yield (0, p.updateGroupParticipantTableWithoutDeviceSyncJob)([r]);
    (0, c.frontendFireAndForget)("createOrUpdateGroupMetadataFromQuery", {
      groupInfo: r
    });
    yield S(r);
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    if (e.membershipApprovalMode && e.participants.some(e => (0, m.isMeAccount)(e.id) && e.isAdmin) && (0, s.getABPropConfigValue)("group_join_request_m2")) {
      if (!(yield (0, l.getChatRecord)(e.id))) {
        return;
      }
      return (0, f.queryAndUpdateGroupMembershipApprovalRequests)(e.id);
    }
  })).apply(this, arguments);
}