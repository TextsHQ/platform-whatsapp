var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateModelsForDeactivateCommunity = function (e) {
  const t = c.default.get(e);
  if (t == null || t.isParentGroup !== true) {
    return;
  }
  const n = (0, l.getCagIdFromCommunity)(e);
  n.forEach(e => {
    const t = c.default.get(e);
    if (t == null ? undefined : t.participants.iAmMember()) {
      if (!(t == null)) {
        t.set({
          terminated: true,
          parentGroup: undefined
        });
      }
    }
  });
  const a = (0, l.formatSubgroupUpdateTypes)(t.joinedSubgroups.filter(e => !n.includes(e)), true).concat((0, l.formatSubgroupUpdateTypes)(t.unjoinedSubgroups, false));
  g(e, a);
  h(e);
};
exports.updateModelsForExitedCommunity = function (e) {
  if (!e) {
    return;
  }
  const t = c.default.get(e);
  if (!t) {
    return;
  }
  g(e, (0, l.formatSubgroupUpdateTypes)(t.unjoinedSubgroups, false));
  h(e);
};
exports.updateModelsForIntegrityDeactivateCommunity = function (e) {
  const t = c.default.assertGet(e);
  if (t.isParentGroup === true) {
    t.set({
      suspended: true,
      terminated: true
    });
    const n = (0, l.getCagIdFromCommunity)(e);
    n.forEach(e => {
      const t = c.default.get(e);
      if (t == null ? undefined : t.participants.iAmMember()) {
        if (!(t == null)) {
          t.set({
            terminated: true,
            suspended: true
          });
        }
      }
    });
    const a = (0, l.formatSubgroupUpdateTypes)(t.joinedSubgroups.filter(e => !n.includes(e)), true).concat((0, l.formatSubgroupUpdateTypes)(t.unjoinedSubgroups, false));
    g(e, a);
  }
};
exports.updateModelsForSubgroupLink = function (e) {
  let {
    parentGroupId: t,
    subgroups: n,
    timestamp: a,
    author: o
  } = e;
  const {
    unjoinedSubgroups: l,
    joinedSubgroups: s
  } = (0, f.partitionSubgroups)(n, e => !(0, p.determineUnjoined)(e));
  (0, p.updateUnjoinedSubgroupsInCollection)(l, t);
  (0, p.updateJoinedSubgroupsInCollection)(s, t);
  c.default.assertGet(t).set({
    lastActivityTimestamp: (0, r.unixTime)()
  });
  if ((0, m.isMeAccount)(o)) {
    return;
  }
  const h = n.map(e => ({
    id: (0, d.default)(),
    timestamp: a != null ? a : (0, r.unixTime)(),
    communityId: t,
    type: u.ActivityTypeType.SUB_GROUP_LINK,
    subgroupName: e.subject,
    subgroupId: e.id
  }));
  i.default.addDeduppedSubgroupLink(h);
};
exports.updateModelsForSubgroupUnlink = g;
var r = require("../app/632157.js");
var o = require("../app/351053.js");
var l = require("../app/394164.js");
var i = a(require("../app/806711.js"));
var u = require("../app/255131.js");
var s = require("../app/177938.js");
var c = a(require("../app/667845.js"));
var d = a(require("../app/243957.js"));
var f = require("../app/858029.js");
var p = require("../app/39294.js");
var m = require("../app/459857.js");
function h(e) {
  c.default.remove(e);
  o.ChatCollection.remove(e);
  s.ContactCollection.remove(e);
}
function g(e, t) {
  const {
    unjoinedSubgroups: n,
    joinedSubgroups: a
  } = (0, f.partitionSubgroups)(t, e => !(0, p.determineUnjoined)(e));
  (0, p.updateUnjoinedSubgroupsInCollection)(n, e, false);
  (0, p.updateJoinedSubgroupsInCollection)(a, e, false);
  const r = t.map(e => e.id.toString());
  i.default.remove(r);
}