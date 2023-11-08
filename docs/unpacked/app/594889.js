var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageCommunityLinkGroup = function (e) {
  const {
    templateParams: t,
    clickable: n,
    author: r,
    chat: i
  } = e;
  const s = t[0];
  const d = a.default.get(s);
  const p = d == null ? undefined : d.participants.iAmAdmin();
  const f = [l.fbt._("As a member, you can join groups in the community and get admin updates", null, {
    hk: "4wKJPR"
  }), l.fbt._("Your profile is visible to admins", null, {
    hk: "1GPcqk"
  })];
  const _ = [l.fbt._("Anyone in this group is now a community member", null, {
    hk: "3beO71"
  }), l.fbt._("Members can join this group and others within the community", null, {
    hk: "24ZmC7"
  })];
  const g = p === true ? l.fbt._("Manage the community", null, {
    hk: "1SHqMs"
  }) : l.fbt._("Explore the community", null, {
    hk: "3byR91"
  });
  return u.default.createElement(o.MessageCommunityCard, {
    communityId: s,
    subgroupId: i.id,
    title: c({
      templateParams: t,
      clickable: n,
      author: r
    }),
    body: u.default.createElement(o.BulletedList, {
      items: p === true ? _ : f
    }),
    footer: g,
    openNavigation: !p
  });
};
exports.communityLinkGroupTitle = c;
var i = require("./436355.js");
var a = r(require("./667845.js"));
var o = require("./210190.js");
var s = require("./459857.js");
var l = require("../vendor/548360.js");
var u = r(require("../vendor/667294.js"));
function c(e) {
  const {
    templateParams: t,
    clickable: n,
    author: r
  } = e;
  const a = r ? (0, i.getFormattedName)(r, !n) : null;
  const o = (0, i.getFormattedCommunityNameWithAlternative)({
    jid: t[0],
    asString: !n,
    alternativeStringName: t[1]
  });
  const u = Boolean(!o);
  const c = (0, s.isMeAccount)(r);
  if (u) {
    if (c) {
      return l.fbt._("You added this group to a community", null, {
        hk: "1kZEmr"
      });
    } else if (a != null) {
      return l.fbt._("{author} added this group to a community", [l.fbt._param("author", a)], {
        hk: "4CnqQO"
      });
    } else {
      return l.fbt._("This group was added to a community", null, {
        hk: "1MRCkL"
      });
    }
  } else if (c) {
    return l.fbt._("You added this group to the community {community}", [l.fbt._param("community", o)], {
      hk: "1j1yKU"
    });
  } else if (a != null) {
    return l.fbt._("{author} added this group to the community: {community}", [l.fbt._param("author", a), l.fbt._param("community", o)], {
      hk: "31lIy8"
    });
  } else {
    return l.fbt._("This group was added to the community: {community}", [l.fbt._param("community", o)], {
      hk: "Tdp2w"
    });
  }
}