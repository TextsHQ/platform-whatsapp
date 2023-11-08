var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageCommunityWelcomeAdmin = function (e) {
  const {
    templateParams: t,
    chat: n,
    author: r
  } = e;
  let g = t[0] instanceof u.default ? t[0] : (0, c.createWid)(t[0]);
  const m = o.default.get(g);
  if (m == null ? undefined : m.parentGroup) {
    g = m.parentGroup;
  }
  if (!(0, i.isCommunityCreator)(n)) {
    return p.default.createElement("div", {
      className: (0, f.default)(l.uiPadding.horiz12, l.uiPadding.top5, l.uiPadding.bottom6)
    }, (0, a.formatLinkNotification)("community_create", r, null, t, true));
  }
  const h = p.default.createElement("div", {
    className: (0, f.default)(l.uiPadding.horiz10)
  }, d.fbt._("Send important admin updates to all your members at once.", null, {
    hk: "3GS6WH"
  }));
  const y = d.fbt._("Manage community", null, {
    hk: "3U02n7"
  });
  return p.default.createElement(s.MessageCommunityCard, {
    communityId: g,
    subgroupId: n.id,
    title: _({
      templateParams: t,
      chat: n,
      author: r
    }),
    subtitle: h,
    footer: y
  });
};
exports.communityWelcomeAdminTitle = _;
var i = require("./394164.js");
var a = require("./969351.js");
var o = r(require("./667845.js"));
var s = require("./210190.js");
var l = require("./676345.js");
var u = r(require("./124928.js"));
var c = require("./669050.js");
var d = require("../vendor/548360.js");
var p = r(require("../vendor/667294.js"));
var f = r(require("./156720.js"));
function _(e) {
  const {
    templateParams: t,
    chat: n,
    author: r
  } = e;
  if ((0, i.isCommunityCreator)(n)) {
    return d.fbt._("Welcome to your community!", null, {
      hk: "Dgmx9"
    });
  } else {
    return (0, a.formatLinkNotifAsFbt)("community_create", r, null, t);
  }
}