var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityInfoSection = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/394164.js");
var i = require("./464659.js");
var u = require("./648678.js");
var s = require("../app/174834.js");
var c = a(require("./883053.js"));
var d = a(require("./715015.js"));
var f = a(require("./756149.js"));
var p = a(require("./15283.js"));
var m = a(require("../app/932325.js"));
var h = require("../app/114850.js");
var g = require("./312727.js");
var E = require("./276012.js");
var v = require("./150103.js");
var _ = require("../app/676345.js");
var y = require("../vendor/548360.js");
var C = a(require("../vendor/667294.js"));
var b = a(require("./847116.js"));
const M = ["chat", "showFullDescription", "isAdmin", "callbacks", "scrollToMemberList", "onAddMembersClick"];
exports.CommunityInfoSection = e => {
  let {
    chat: t,
    showFullDescription: n,
    isAdmin: a,
    callbacks: S,
    scrollToMemberList: T,
    onAddMembersClick: w
  } = e;
  let A = (0, o.default)(e, M);
  const {
    subgroupCount: P
  } = (0, b.default)(t == null ? undefined : t.groupMetadata);
  const O = t ? C.default.createElement(d.default, {
    chat: t,
    showFullDescription: n,
    showCreate: true
  }) : null;
  let k;
  let D;
  if (!(0, l.isIntegritySuspendedCommunity)(t)) {
    if (a) {
      k = C.default.createElement(i.ChatInfoDrawerSection, {
        testid: "section-menu",
        xstyle: [_.uiMargin.vert10, _.uiPadding.all0]
      }, C.default.createElement(u.CommunityMenuButton, {
        testid: "row-manage-groups",
        Icon: g.NewGroupIcon,
        onClick: S.onManageCommunityGroupsClick,
        title: y.fbt._("Manage groups", null, {
          hk: "14rRId"
        })
      }), (0, s.memberAddedGroupsM1Enabled)() ? C.default.createElement(u.CommunityMenuButton, {
        testid: "row-community-settings",
        Icon: v.SettingsIcon,
        iconHeight: 20,
        onClick: S.onCommunitySettingsClick,
        title: y.fbt._("Community settings", null, {
          hk: "SMkdC"
        })
      }) : null);
    }
    D = C.default.createElement(i.ChatInfoDrawerSection, {
      testid: "section-menu",
      xstyle: [_.uiMargin.vert10, _.uiPadding.all0]
    }, C.default.createElement(u.CommunityMenuButton, {
      testid: "row-view-groups",
      Icon: E.PeopleIcon,
      onClick: () => {
        h.ModalManager.open(C.default.createElement(p.default, {
          parentChat: t
        }));
      },
      title: y.fbt._("View groups ({subgroup-count})", [y.fbt._param("subgroup-count", m.default.n(P))], {
        hk: "TPhqC"
      })
    }));
  }
  const I = C.default.createElement(f.default, (0, r.default)({
    parentChat: t,
    onInviteMembersClick: S.onInviteMembersClick,
    onAddMembersClick: w,
    scrollToMemberList: T
  }, A));
  const R = t ? C.default.createElement(c.default, {
    chat: t,
    onBack: S.onBack,
    onDeactivateCommunity: S.onDeactivateCommunity
  }) : null;
  return C.default.createElement(C.default.Fragment, null, O, k, D, I, R);
};