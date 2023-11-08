var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityNavigation = undefined;
var r = a(require("../main-chunk/170206.js"));
var o = require("./700071.js");
var l = require("../app/351053.js");
var i = require("../app/780549.js");
var u = require("./474103.js");
var s = require("./648678.js");
var c = require("../app/174834.js");
var d = require("./878760.js");
var f = require("./643906.js");
var p = require("./119357.js");
var m = require("./945488.js");
var h = a(require("./908081.js"));
var g = a(require("./324093.js"));
var E = require("./626194.js");
var v = a(require("./969358.js"));
var _ = require("../app/664149.js");
var y = require("../app/675085.js");
var C = require("../app/305521.js");
var b = require("./811720.js");
var M = require("../app/690495.js");
var S = require("./526795.js");
var T = require("./107600.js");
var w = require("../app/114850.js");
var A = require("../app/651368.js");
var P = require("./387548.js");
var O = require("../app/454905.js");
var k = require("../app/676345.js");
var D = a(require("../app/448812.js"));
var I = require("./711162.js");
var R = require("../app/851488.js");
var N = require("../vendor/548360.js");
var x = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = j(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var L = a(require("./847116.js"));
function j(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (j = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const B = {
  description: {
    textAlign: "qfejxiq4"
  }
};
const F = (0, x.forwardRef)((e, t) => {
  const {
    chat: n,
    isAdmin: a,
    onInviteMembersClick: r,
    onCommunitySettingsClick: o,
    onOldCommunityHomeClick: l
  } = e;
  const u = [x.default.createElement(y.DropdownItem, {
    key: "communityInfo",
    testid: "mi-community-info",
    action: () => {
      if (n) {
        if ((0, c.communityTabbedInfoEnabled)()) {
          i.Cmd.openCommunityTabbedInfo(n.id);
        } else {
          l();
        }
      }
    }
  }, N.fbt._("Community info", null, {
    hk: "2hDDM6"
  })), x.default.createElement(y.DropdownItem, {
    key: "viewMembers",
    testid: "mi-view-members",
    action: () => {
      if (n) {
        w.ModalManager.open(x.default.createElement(I.ViewCommunityMembersModal, {
          parentChat: n,
          onInviteMembersClick: r
        }));
      }
    }
  }, N.fbt._("View members", null, {
    hk: "S7g4y"
  }))];
  if (a) {
    u.push(x.default.createElement(y.DropdownItem, {
      key: "communitySettings",
      testid: "mi-community-settings",
      action: o
    }, N.fbt._("Community settings", null, {
      hk: "1MAM2b"
    })));
  }
  return x.default.createElement(_.Dropdown, {
    ref: t,
    type: _.MenuType.DropdownMenu,
    key: "CommunityNavigationMenuDropdown",
    flipOnRTL: true,
    dirX: _.DirX.LEFT,
    testid: "community-navigation-menu-dropdown"
  }, u);
});
F.displayName = "CommunityNavigationMenuDropdown";
const G = (0, x.forwardRef)((e, t) => {
  const {
    chat: n,
    isAdmin: a,
    highlightedSubgroups: i,
    onBack: _,
    callbacks: y
  } = e;
  const {
    subgroupCount: w
  } = (0, L.default)(n == null ? undefined : n.groupMetadata);
  (0, x.useEffect)(() => {
    var e;
    const t = n == null || (e = n.groupMetadata) === null || e === undefined ? undefined : e.joinedSubgroups;
    if (n && (t == null ? undefined : t.length) && (0, c.memberSuggestedGroupsEnabled)()) {
      const e = t[0];
      (0, P.restoreSubgroupSuggestionsFromDb)(n);
      (0, A.queryAndUpdateSubgroupSuggestions)(n.id, e);
    }
  }, [n]);
  const I = () => {
    if (n) {
      if (a || (0, c.memberSuggestedGroupsM3SenderEnabled)()) {
        return y.onManageCommunityGroupsClick();
      } else {
        return void ((0, m.subgroupsMaxReached)(n.groupMetadata) || y.onAddNewGroupClick());
      }
    }
  };
  let j;
  const G = (0, u.getCommunityAnnouncementGroup)(n == null ? undefined : n.groupMetadata);
  if (G != null) {
    const e = i.some(e => G.id.equals(e)) ? "subgroup-new" : "subgroup";
    if (G instanceof D.default) {
      j = x.default.createElement(r.default, {
        theme: e,
        primary: x.default.createElement(C.EmojiText, {
          text: N.fbt._("Announcements", null, {
            hk: "GNIKa"
          }).toString(),
          ellipsify: true
        }),
        secondary: N.fbt._("Announcement group", null, {
          hk: "1YLlbO"
        }),
        image: x.default.createElement(p.CommunitySpeakerIcon, {
          size: 40
        }),
        onClick: () => (0, f.handleOpenSubgroupModal)(G, "community_nav"),
        secondaryDetail: f.pinnedIcon,
        focusable: true
      });
    } else {
      const e = l.ChatCollection.assertGet(G == null ? undefined : G.id);
      j = x.default.createElement(o.Chat, {
        chat: e,
        theme: "subgroup",
        mode: o.Mode.LAST,
        onClick: t => {
          t.preventDefault();
          (0, d.handleJoinedSubgroupClick)(e, "navigation");
        },
        key: e.id.toString(),
        overrideCommunityAnnouncementGroupName: true,
        noContext: true,
        hidePin: true,
        fakePin: true,
        hideArchivedIcon: true,
        showSpeakerForCag: true
      });
    }
  }
  const U = n ? x.default.createElement(d.CommunityHomeJoinedSubgroups, {
    chat: n,
    onPendingGroupsClick: y.onPendingGroupsClick,
    onAddNewGroupClick: I,
    mini: true,
    type: "navigation"
  }) : null;
  const W = n ? x.default.createElement(f.CommunityHomeUnjoinedSubgroups, {
    chat: n,
    onAddNewGroupClick: I,
    highlightedSubgroups: i,
    mini: true,
    type: "community_nav"
  }) : null;
  let H = null;
  if (w === 1) {
    const e = N.fbt._("Groups added to the community will appear here. Community members can join these groups.", null, {
      hk: "49LhKH"
    });
    H = x.default.createElement(v.default, {
      xstyle: [B.description, k.uiMargin.vert36, k.uiMargin.horiz30],
      shadow: false
    }, x.default.createElement(M.FlexRow, {
      justify: "center",
      align: "center"
    }, x.default.createElement(R.WDSTextMuted, null, e)));
  }
  const V = x.default.createElement(S.MenuBarItem, {
    icon: x.default.createElement(T.MenuIcon, null),
    title: N.fbt._("Navigation menu", null, {
      hk: "3k7j4N"
    }),
    testid: "community-navigation-menu-button"
  }, x.default.createElement(F, {
    chat: n,
    isAdmin: a,
    onInviteMembersClick: y.onInviteMembersClick,
    onCommunitySettingsClick: y.onCommunitySettingsClick,
    onOldCommunityHomeClick: y.onOldCommunityHomeClick
  }));
  return x.default.createElement(h.default, {
    ref: t,
    testid: "community-navigation-drawer",
    theme: "invite",
    tsNavigationData: {
      surface: "community-navigation"
    }
  }, x.default.createElement(E.DrawerHeader, {
    title: x.default.createElement(C.EmojiText, {
      text: n == null ? undefined : n.formattedTitle
    }),
    titleStr: n == null ? undefined : n.formattedTitle,
    type: (0, O.topMenuRedesignEnabled)() ? E.DRAWER_HEADER_TYPE.SMALL : E.DRAWER_HEADER_TYPE.LARGE,
    onBack: _,
    children: V,
    focusBackOrCancel: true
  }), x.default.createElement(g.default, null, n == null || n.groupMetadata == null ? x.default.createElement(b.Loading, null) : x.default.createElement(v.default, {
    shadow: false
  }, x.default.createElement(v.default, {
    xstyle: k.uiMargin.bottom0,
    shadow: false
  }, x.default.createElement(s.SubgroupSuggestionsRow, {
    chat: n,
    onClick: y.onPendingGroupsClick
  }), j), U, W, H)));
});
exports.CommunityNavigation = G;
G.displayName = "CommunityNavigation";