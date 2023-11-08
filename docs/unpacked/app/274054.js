var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateGroupMetadataModelFromQuery = b;
exports.queryAndUpdateAllGroupMetadata = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./827467.js");
var l = require("./588090.js");
var u = require("./297031.js");
var c = r(require("./667845.js"));
var d = require("./853441.js");
var p = require("./113269.js");
var f = require("./614198.js");
var _ = require("./700846.js");
var g = require("./848624.js");
var m = require("./651368.js");
var h = require("./61229.js");
var y = require("./15321.js");
var E = require("./669050.js");
function S() {
  return (S = (0, a.default)(function* () {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const t = yield (0, p.queryAllGroups)();
    const n = yield (0, s.injectPastParticipantsFromDB)(t);
    if (!n) {
      return;
    }
    const r = [];
    const i = [];
    n.forEach(t => {
      b(t);
      if (e) {
        M(t);
      }
      r.push((0, p.maybeQueryAndUpdateMembershipApprovalRequests)(t));
    });
    yield (0, u.updateGroupMetadataTableJob)(n);
    yield (0, u.updateGroupParticipantTableWithoutDeviceSyncJob)(n);
    if (e) {
      yield v(n);
    }
    const a = [];
    n.forEach(e => {
      const t = e.participants.map(e => ({
        id: (0, E.toUserWid)(e.id),
        lid: e.lid ? (0, E.toUserWid)(e.lid) : null,
        displayName: e.displayName
      }));
      a.concat(t);
      i.push((0, m.maybeQueryAndUpdateSubgroupSuggestions)(e));
    });
    yield (0, l.createOrReplaceDisplayNamesAndLidPnMappings)(a, true);
    yield Promise.all(r);
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* (e) {
    __LOG__(2, undefined, undefined, undefined, ["history-sync", "groups"])`Start updateGroupEndOfHistorySyncFlag`;
    const t = require("./735618.js").ConversationEndOfHistoryTransferModelPropType;
    const r = (0, y.getInitialGroupPhashMap)();
    const i = require("./351053.js").ChatCollection;
    const a = [];
    e.forEach(e => {
      if (i.get(e.id.toString())) {
        return;
      }
      if ((r == null ? undefined : r[e.id.toString()]) == null) {
        a.push({
          unreadCount: 0,
          muteExpiration: 0,
          isAutoMuted: false,
          id: e.id,
          endOfHistoryTransferType: t.NOT_INCLUDED_IN_HIST_SYNC
        });
      }
    });
    i.add(a, {
      merge: true
    });
    yield (0, h.getChatTable)().bulkCreate(a.map(e => {
      let {
        endOfHistoryTransferType: t,
        id: n
      } = e;
      return {
        endOfHistoryTransferType: t,
        id: n.toString(),
        unreadCount: 0,
        muteExpiration: 0,
        isAutoMuted: false
      };
    })).catch(e => {
      __LOG__(2, undefined, undefined, undefined, ["history-sync", "groups"])`One ore more chat create failed for group not synced in initial sync with error: ${e.message} `;
    });
    __LOG__(2, undefined, undefined, undefined, ["history-sync", "groups"])`Completed updateGroupEndOfHistorySyncFlag`;
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e) {
    const t = (0, y.getInitialGroupPhash)(e.id.toString());
    if (t == null) {
      return;
    }
    const n = yield (0, g.phashV1)(e.participants.map(e => e.id));
    const r = n.substring(2);
    if (t != null && t !== n && t !== r) {
      (0, _.handleSingleMsg)(e.id, (0, f.genInitialPhashMismatchMsg)(e.id, (0, o.unixTime)()), "pHashMismatchMsg");
    }
  })).apply(this, arguments);
}
function b(e) {
  var t;
  var n;
  var r;
  var a;
  var o;
  var s;
  var l;
  (0, d.updateSubject)(e.id, e.subject);
  c.default.gadd((0, i.default)((0, i.default)({
    id: e.id,
    owner: e.owner,
    subject: e.subject,
    creation: e.creation,
    desc: e.desc,
    descId: e.descId,
    descOwner: e.descOwner,
    descTime: e.descTime,
    restrict: e.restrict || false,
    announce: e.announce || false,
    noFrequentlyForwarded: e.noFrequentlyForwarded || false,
    ephemeralDuration: e.ephemeralDuration || 0,
    growthLockExpiration: e.growthLockExpiration,
    growthLockType: e.growthLockType,
    membershipApprovalMode: e.membershipApprovalMode,
    memberAddMode: e.memberAddMode,
    participants: e.participants,
    pastParticipants: e.pastParticipants,
    support: (t = e.support) !== null && t !== undefined && t,
    suspended: (n = e.suspended) !== null && n !== undefined && n,
    terminated: (r = e.terminated) !== null && r !== undefined && r,
    isParentGroup: (a = e.isParentGroup) !== null && a !== undefined && a,
    isParentGroupClosed: (o = e.isParentGroupClosed) !== null && o !== undefined && o,
    parentGroup: e.parentGroup,
    defaultSubgroup: (s = e.defaultSubgroup) !== null && s !== undefined && s,
    generalSubgroup: (l = e.generalSubgroup) !== null && l !== undefined && l,
    deviceStale: true,
    size: e.size,
    incognito: e.incognito,
    isLidAddressingMode: e.isLidAddressingMode,
    reportToAdminMode: e.reportToAdminMode
  }, e.reportToAdminMode === false && {
    lastReportToAdminTimestamp: null
  }), {}, {
    allowNonAdminSubGroupCreation: e.allowNonAdminSubGroupCreation,
    generalChatAutoAddDisabled: e.generalChatAutoAddDisabled
  }));
}