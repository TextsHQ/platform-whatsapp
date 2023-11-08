var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, w.default)();
  const t = function (t, n) {
    let a = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    (0, i.incrementCommunityHomeEvent)(t, i.CommunityDailyHomeMetricsType.HOME_VIEWS);
    m.DrawerManager.openDrawerLeft(S.default.createElement(s.CommunityFlowLoadable, {
      jid: t,
      hasFetchedSubgroups: n,
      initialStep: a ? u.CommunityFlowStep.OldCommunityHome : u.CommunityFlowStep.CommunityHome,
      key: `community-${a ? "home" : "nav"}-${t.toString()}`
    }), {
      transition: "slide-left",
      uim: e,
      focusType: E.FocusType.TABBABLE
    });
  };
  (0, T.useListener)(l.Cmd, "open_subgroup_join_modal", (e, t) => {
    _.ModalManager.open(S.default.createElement(M.default, {
      subgroupMetadata: e,
      onSuccess: () => {},
      source: t
    }));
  });
  (0, T.useListener)(l.Cmd, "open_community_home", t);
  (0, T.useListener)(l.Cmd, "open_community_tabbed_info", function (t) {
    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : p.CommunityInfoTabs.Community;
    let a = arguments.length > 2 ? arguments[2] : undefined;
    let r = arguments.length > 3 ? arguments[3] : undefined;
    (0, i.incrementCommunityHomeEvent)(t, i.CommunityDailyHomeMetricsType.HOME_VIEWS);
    m.DrawerManager.openDrawerRight(S.default.createElement(s.CommunityFlowLoadable, {
      jid: t,
      initialStep: u.CommunityFlowStep.CommunityHome,
      initialTab: n,
      homeTheme: d.CommunityHomeTheme.TabbedInfo,
      scrollToMemberList: r,
      showFullDescription: a,
      key: `community-info-${t.toString()}`,
      onBack: () => {
        m.DrawerManager.closeDrawerRight();
      }
    }), {
      transition: "slide-left",
      uim: e,
      focusType: E.FocusType.TABBABLE
    });
  });
  (0, T.useListener)(l.Cmd, "open_community_pending_groups_drawer", t => {
    m.DrawerManager.openDrawerLeft(S.default.createElement(s.CommunityFlowLoadable, {
      jid: t,
      initialStep: u.CommunityFlowStep.PendingGroups,
      onBack: () => {
        l.Cmd.openCommunityHome(t);
      }
    }), {
      transition: "slide-left",
      uim: e,
      focusType: E.FocusType.TABBABLE
    });
  });
  (0, T.useListener)(l.Cmd, "open_community_home_manage_groups", e => {
    m.DrawerManager.openDrawerLeft(S.default.createElement(v.ManageCommunityGroupsFlowLoadable, {
      parentGroupMetadata: g.default.assertGet(e),
      onBack: () => t(e, false)
    }));
  });
  (0, T.useListener)(l.Cmd, "open_community_invite_link_drawer", e => {
    m.DrawerManager.openDrawerLeft(S.default.createElement(h.default, {
      chat: r.ChatCollection.assertGet(e),
      groupMetadata: g.default.assertGet(e),
      onBack: () => t(e, false),
      isCommunity: true
    }), {
      transition: "flow-transition-drawer-push",
      focusType: E.FocusType.TABBABLE
    });
  });
  (0, T.useListener)(l.Cmd, "open_community_add_new_group", (e, n, a) => {
    const r = g.default.assertGet(e).participants.iAmAdmin();
    let l;
    if ((0, o.isSubgroupSuggestionCreation)(e)) {
      l = S.default.createElement(b.default, {
        parentGroup: e,
        onBack: () => t(e, false)
      });
    } else {
      const o = (0, c.communityShortGroupCreationEnabled)();
      l = S.default.createElement(C.NewGroupFlowLoadable, {
        onCreateGroup: n,
        parentGroupWid: e,
        onEnd: () => t(e, false),
        initialSelectedSubgroup: a,
        initialStep: r && !o ? y.NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER : y.NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
        shortenedCreationFlow: o
      });
    }
    m.DrawerManager.openDrawerLeft(l, {
      transition: "flow-transition-drawer-push",
      focusType: E.FocusType.TABBABLE
    });
  });
  (0, T.useListener)(l.Cmd, "open_community_settings_drawer", e => {
    var n;
    const a = r.ChatCollection.get(e);
    if (a && ((n = a.groupMetadata) === null || n === undefined ? undefined : n.hasJoined())) {
      m.DrawerManager.openDrawerLeft(S.default.createElement(f.default, {
        chat: a,
        onBack: () => t(e, false)
      }), {
        transition: "flow-transition-drawer-push",
        focusType: E.FocusType.TABBABLE
      });
    }
  });
};
var r = require("../app/351053.js");
var o = require("../app/394164.js");
var l = require("../app/780549.js");
var i = require("./430855.js");
var u = require("./473735.js");
var s = require("./260854.js");
var c = require("../app/174834.js");
var d = require("./355734.js");
var f = a(require("./396879.js"));
var p = require("./355351.js");
var m = require("../app/900316.js");
var h = a(require("./353292.js"));
var g = a(require("../app/667845.js"));
var E = require("../app/299950.js");
var v = require("./769081.js");
var _ = require("../app/114850.js");
var y = require("./409062.js");
var C = require("./427181.js");
var b = a(require("./590911.js"));
var M = a(require("./989946.js"));
var S = a(require("../vendor/667294.js"));
var T = require("../app/808446.js");
var w = a(require("../app/321201.js"));