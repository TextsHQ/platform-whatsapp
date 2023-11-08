var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageCommunitySubgroupWelcome = function (e) {
  const {
    templateParams: t,
    clickable: n,
    author: r,
    chat: i
  } = e;
  const u = t[0];
  const c = [o.fbt._("As a member, you can join groups in the community and get admin updates", null, {
    hk: "31mOeV"
  }), o.fbt._("Your profile is visible to admins", null, {
    hk: "1c4D1i"
  })];
  const d = o.fbt._("Explore the community", null, {
    hk: "3ZYcad"
  });
  return s.default.createElement(a.MessageCommunityCard, {
    communityId: u,
    subgroupId: i.id,
    title: l({
      templateParams: t,
      clickable: n,
      author: r
    }),
    body: s.default.createElement(a.BulletedList, {
      items: c
    }),
    footer: d,
    openNavigation: true
  });
};
exports.communitySubgroupWelcomeTitle = l;
var i = require("./436355.js");
var a = require("./210190.js");
var o = require("../vendor/548360.js");
var s = r(require("../vendor/667294.js"));
function l(e) {
  const {
    templateParams: t,
    clickable: n,
    author: r
  } = e;
  const a = r ? (0, i.getFormattedName)(r, !n) : null;
  const s = (0, i.getFormattedCommunityNameWithAlternative)({
    jid: t[0],
    asString: !n,
    alternativeStringName: t[1]
  });
  if (Boolean(!s)) {
    if (a != null) {
      return o.fbt._("{user_name} added you to a group in a community", [o.fbt._param("user_name", a)], {
        hk: "2WVYcE"
      });
    } else {
      return o.fbt._("You joined a group via invite in a community", null, {
        hk: "bff9y"
      });
    }
  } else if (a != null) {
    return o.fbt._("{user_name} added you to a group in the community: {community}", [o.fbt._param("user_name", a), o.fbt._param("community", s)], {
      hk: "180YAa"
    });
  } else {
    return o.fbt._("You joined a group via invite in the community: {community}", [o.fbt._param("community", s)], {
      hk: "2KbCx2"
    });
  }
}