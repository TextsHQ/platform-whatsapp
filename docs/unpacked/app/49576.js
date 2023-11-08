var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageCommunityWelcomeMember = function (e) {
  const {
    templateParams: t,
    clickable: n,
    author: r,
    chat: u
  } = e;
  const c = t[0];
  const d = r ? (0, i.getFormattedName)(r, !n) : null;
  const p = [s.default.createElement(s.default.Fragment, null, d == null || d === "" ? o.fbt._("You joined this community", null, {
    hk: "1ayxRT"
  }) : o.fbt._("{author} added you", [o.fbt._param("author", d)], {
    hk: "152dnq"
  })), o.fbt._("Admins will send all members important community announcements here", null, {
    hk: "3X4Ctm"
  })];
  const f = o.fbt._("See community info", null, {
    hk: "3wdWAa"
  });
  return s.default.createElement(a.MessageCommunityCard, {
    communityId: c,
    subgroupId: u.id,
    title: l(),
    body: s.default.createElement(a.BulletedList, {
      items: p
    }),
    footer: f
  });
};
exports.communityWelcomeMemberTitle = l;
var i = require("./436355.js");
var a = require("./210190.js");
var o = require("../vendor/548360.js");
var s = r(require("../vendor/667294.js"));
function l() {
  return o.fbt._("Welcome to the community!", null, {
    hk: "2aB3i"
  });
}