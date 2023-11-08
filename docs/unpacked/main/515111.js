var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMembersMyselfSharesSubgroupsWith = d;
exports.mergeAndSortCommunityParticipants = function (e, t, n) {
  let a;
  let l;
  const u = [];
  const s = new Set();
  const f = [];
  const p = new Set();
  const m = (0, c.getMaybeMeUser)();
  if (m) {
    a = o.ContactCollection.get(m);
  }
  if (!(t == null)) {
    t.forEach(e => {
      if (!(0, i.getIsMe)(e.contact)) {
        if (e == null ? undefined : e.isSuperAdmin) {
          l = e.contact;
        } else if (e == null ? undefined : e.isAdmin) {
          u.push(e.contact);
          s.add(e.id.toString());
        } else {
          f.push(e.contact);
          p.add(e.id.toString());
        }
      }
    });
  }
  const h = e => {
    var t;
    return !(p.has(e.id.toString()) || s.has(e.id.toString()) || e.id.equals((t = l) === null || t === undefined ? undefined : t.id) || (0, c.isMeAccount)(e.id) || e.id.isLid());
  };
  if (t == null ? undefined : t.iAmAdmin()) {
    if (!(e == null)) {
      e.forEach(e => {
        let {
          contact: t
        } = e;
        if (h(t)) {
          f.push(t);
          p.add(t.id.toString());
        }
      });
    }
  }
  let g = [];
  if (n.length && (0, r.communityGroupDirectoryEnabled)()) {
    g = d(n, h);
  }
  let E = [];
  if (a) {
    E.push(a);
  }
  if (l) {
    E.push(l);
  }
  E = E.concat(u, f, g);
  return E;
};
exports.splitCommunityParticipants = function (e, t) {
  const n = [];
  const a = [];
  if (!(t == null)) {
    t.forEach(t => {
      if (e == null ? undefined : e.get(t.id)) {
        n.push(t);
      } else {
        a.push(t);
      }
    });
  }
  return {
    membersInCAG: n,
    membersNotInCAG: a
  };
};
var r = require("../app/174834.js");
var o = require("../app/177938.js");
var l = require("../app/572002.js");
var i = require("../app/660666.js");
var u = a(require("../app/667845.js"));
var s = require("../app/862159.js");
var c = require("../app/459857.js");
function d(e, t) {
  const n = new Set();
  return e.flatMap(e => {
    const a = u.default.assertGet(e.toString());
    return (a.groupType === s.GroupType.LINKED_ANNOUNCEMENT_GROUP ? a.participants.getAdmins() : a.participants.toArray()).map(e => e.contact).filter(e => !n.has(e.id.toString()) && n.add(e.id.toString()) && t(e));
  }).sort(l.ContactComparator);
}