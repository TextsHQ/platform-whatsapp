var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkGetGroupMetadata = function (e) {
  if (e.length === 0) {
    return Promise.resolve([]);
  }
  return (0, l.getGroupMetadataTable)().bulkGet(e.map(e => e == null ? "" : e.toString()));
};
exports.getGroupMetadata = function (e) {
  return (0, l.getGroupMetadataTable)().get(e.toString());
};
exports.getGroupMetadataUNSAFE = function () {
  return d.apply(this, arguments);
};
exports.persistGroupMetadata = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if (n) {
    return p((0, i.default)({
      id: e.toString()
    }, t));
  }
  return (0, l.getGroupMetadataTable)().createOrMerge(e.toString(), (0, i.default)({
    id: e.toString()
  }, t));
};
exports.updateGroupMetadataTable = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./392646.js");
var s = require("./732011.js");
var l = require("./98742.js");
var u = require("./669050.js");
function c() {
  return (c = (0, a.default)(function* (e) {
    let {
      groupInfos: t
    } = e;
    let n = [];
    yield (0, s.getStorage)().lock(["group-metadata"], function () {
      var e = (0, a.default)(function* (e) {
        let [r] = e;
        const a = yield r.bulkGet(t.map(e => e.id.toString()));
        n = t.map((e, t) => {
          var n;
          var r;
          var o;
          var s;
          var l;
          var u;
          var c;
          var d;
          var p;
          const f = a[t];
          let _ = {
            subject: e.subject,
            subjectTime: e.subjectTime || 0
          };
          let g = {
            announce: e.announce,
            a_v_id: e.a_v_id || 0
          };
          let m = {
            desc: e.desc,
            descId: e.descId,
            descOwner: (n = e.descOwner) === null || n === undefined ? undefined : n.toString(),
            descTime: e.descTime || 0
          };
          if (f) {
            const e = f.subjectTime || 0;
            const t = f.a_v_id || 0;
            const n = f.descTime || 0;
            if (e > _.subjectTime) {
              _ = {
                subject: f.subject,
                subjectTime: e
              };
            }
            if (t > g.a_v_id) {
              g = {
                announce: f.announce,
                a_v_id: t
              };
            }
            if (n > m.descTime) {
              m = {
                desc: f.desc,
                descId: f.descId,
                descOwner: f.descOwner,
                descTime: n
              };
            }
          }
          return (0, i.default)((0, i.default)((0, i.default)({
            id: e.id.toString(),
            creation: e.creation,
            owner: (r = e.owner) === null || r === undefined ? undefined : r.toString(),
            restrict: e.restrict,
            noFrequentlyForwarded: e.noFrequentlyForwarded,
            ephemeralDuration: e.ephemeralDuration || 0,
            membershipApprovalMode: e.membershipApprovalMode,
            memberAddMode: e.memberAddMode,
            growthLockExpiration: e.growthLockExpiration,
            growthLockType: e.growthLockType,
            size: e.size || 0,
            support: (o = e.support) !== null && o !== undefined && o,
            suspended: (s = e.suspended) !== null && s !== undefined && s,
            terminated: (l = e.terminated) !== null && l !== undefined && l,
            parentGroup: (u = e.parentGroup) === null || u === undefined ? undefined : u.toString(),
            isParentGroup: e.isParentGroup,
            isParentGroupClosed: e.isParentGroupClosed,
            defaultSubgroup: e.defaultSubgroup,
            generalSubgroup: e.generalSubgroup,
            lastActivityTimestamp: (c = f == null ? undefined : f.lastActivityTimestamp) !== null && c !== undefined ? c : 0,
            lastSeenActivityTimestamp: (d = f == null ? undefined : f.lastSeenActivityTimestamp) !== null && d !== undefined ? d : 0,
            incognito: e.incognito,
            isLidAddressingMode: e.isLidAddressingMode,
            reportToAdminMode: (p = e.reportToAdminMode) !== null && p !== undefined && p,
            lastReportToAdminTimestamp: f == null ? undefined : f.lastReportToAdminTimestamp,
            allowNonAdminSubGroupCreation: e.allowNonAdminSubGroupCreation,
            generalChatAutoAddDisabled: e.generalChatAutoAddDisabled
          }, _), m), g);
        });
        return r.bulkCreateOrMerge(n);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
function d() {
  return (d = (0, a.default)(function* (e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var c;
    var d;
    let {
      groupWid: p
    } = e;
    const f = yield (0, l.getGroupMetadataTable)().get(String(p));
    if (f) {
      return {
        id: p,
        owner: f.owner == null ? null : (0, u.createWid)(f.owner),
        creation: f.creation,
        desc: (t = f.desc) !== null && t !== undefined ? t : undefined,
        descId: (n = f.descId) !== null && n !== undefined ? n : undefined,
        descOwner: f.descOwner == null ? null : (0, u.createWid)(f.descOwner),
        descTime: (r = f.descTime) !== null && r !== undefined ? r : undefined,
        restrict: f.restrict || false,
        announce: f.announce || false,
        noFrequentlyForwarded: f.noFrequentlyForwarded || false,
        ephemeralDuration: f.ephemeralDuration || 0,
        membershipApprovalMode: (i = f.membershipApprovalMode) !== null && i !== undefined && i,
        memberAddMode: f.memberAddMode,
        subject: f.subject,
        support: f.support === true,
        lastActivityTimestamp: (a = f.lastActivityTimestamp) !== null && a !== undefined ? a : 0,
        lastSeenActivityTimestamp: (o = f.lastSeenActivityTimestamp) !== null && o !== undefined ? o : 0,
        lastReportToAdminTimestamp: (s = f.lastReportToAdminTimestamp) !== null && s !== undefined ? s : null,
        incognito: f.incognito,
        isLidAddressingMode: f.isLidAddressingMode,
        allowNonAdminSubGroupCreation: (c = f.allowNonAdminSubGroupCreation) !== null && c !== undefined && c,
        generalChatAutoAddDisabled: (d = f.generalChatAutoAddDisabled) !== null && d !== undefined && d
      };
    } else {
      return null;
    }
  })).apply(this, arguments);
}
const p = (0, o.batch)({
  delayMs: 3000
}, function () {
  var e = (0, a.default)(function* (e) {
    const t = Array.from(e.reduce((e, t) => {
      var n;
      e.set(t.id, (0, i.default)((0, i.default)({}, (n = e.get(t.id)) !== null && n !== undefined ? n : {}), t));
      return e;
    }, new Map()).values());
    yield (0, l.getGroupMetadataTable)().bulkCreateOrMerge(t);
    return e.map(() => {});
  });
  return function () {
    return e.apply(this, arguments);
  };
}());