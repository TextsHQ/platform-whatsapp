var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageCommunityWelcomeSubgroup = function (e) {
  var t;
  const {
    templateParams: n
  } = e;
  const a = n[0];
  const s = n[2];
  const c = (t = r.default.get(s)) === null || t === undefined ? undefined : t.subject;
  const d = [u.default.createElement(u.default.Fragment, null, c != null ? i.fbt._("You were added because \"{group_name}\" was added to this community", [i.fbt._param("group_name", c)], {
    hk: "IrwNH"
  }) : i.fbt._("You were added because one of your groups was added to this community", null, {
    hk: "2EcMww"
  })), i.fbt._("Admins will send all members important community announcements here", null, {
    hk: "3X4Ctm"
  })];
  const f = i.fbt._("See community info", null, {
    hk: "3wdWAa"
  });
  return u.default.createElement(o.MessageCommunityCard, {
    communityId: a,
    title: (0, l.communityWelcomeMemberTitle)(),
    body: u.default.createElement(o.BulletedList, {
      items: d
    }),
    footer: f
  });
};
var r = a(require("../app/667845.js"));
var o = require("../app/210190.js");
var l = require("../app/49576.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));