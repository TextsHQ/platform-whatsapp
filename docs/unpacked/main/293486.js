var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityHome = undefined;
var r = require("./281125.js");
var o = require("../app/394164.js");
var l = require("./464659.js");
var i = require("./648678.js");
var u = require("../app/174834.js");
var s = a(require("./883053.js"));
var c = a(require("./715015.js"));
var d = require("./878760.js");
var f = a(require("./838378.js"));
var p = require("./643906.js");
var m = require("./945488.js");
var h = a(require("./908081.js"));
var g = a(require("./324093.js"));
var E = require("./626194.js");
var v = a(require("./969358.js"));
var _ = require("./811720.js");
var y = require("../app/114850.js");
var C = require("./276012.js");
var b = require("../app/651368.js");
var M = require("./387548.js");
var S = require("./150103.js");
var T = require("../app/180519.js");
var w = require("../app/454905.js");
var A = require("../app/676345.js");
var P = require("./711162.js");
var O = require("../vendor/548360.js");
var k = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
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
var D = a(require("../app/156720.js"));
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const R = {
  drawer: {
    backgroundColor: "se2m7z6i"
  },
  integritySuspendedHelperTextSection: {
    backgroundColor: "g6kkip0l",
    textAlign: "qfejxiq4",
    boxShadow: "ayenx209"
  }
};
const N = (0, k.forwardRef)((e, t) => {
  const {
    chat: n,
    isAdmin: a,
    highlightedSubgroups: I,
    showFullDescription: N,
    onBack: x,
    callbacks: L
  } = e;
  const j = a && (0, u.communityHomeHeaderActionsEnabled)();
  (0, k.useEffect)(() => {
    var e;
    const t = n == null || (e = n.groupMetadata) === null || e === undefined ? undefined : e.joinedSubgroups;
    if (n && (t == null ? undefined : t.length) && (0, u.memberSuggestedGroupsEnabled)()) {
      const e = t[0];
      (0, M.restoreSubgroupSuggestionsFromDb)(n);
      (0, b.queryAndUpdateSubgroupSuggestions)(n.id, e);
    }
  }, [n]);
  const B = () => {
    if (n) {
      y.ModalManager.open(k.default.createElement(P.ViewCommunityMembersModal, {
        parentChat: n,
        onInviteMembersClick: L.onInviteMembersClick
      }));
    }
  };
  const F = n ? k.default.createElement(f.default, {
    chat: n,
    isAdmin: a,
    onInviteMembersClick: L.onInviteMembersClick,
    onManageCommunityGroupsClick: L.onManageCommunityGroupsClick,
    onViewMembersClick: B
  }) : null;
  const G = n ? k.default.createElement(c.default, {
    chat: n,
    showFullDescription: N
  }) : null;
  const U = (0, o.isIntegritySuspendedCommunity)(n) ? null : k.default.createElement(l.ChatInfoDrawerSection, {
    testid: "section-menu",
    xstyle: [A.uiMargin.vert10, A.uiPadding.all0]
  }, a ? k.default.createElement(i.CommunityMenuButton, {
    testid: "row-manage-groups",
    Icon: C.PeopleIcon,
    onClick: L.onManageCommunityGroupsClick,
    title: O.fbt._("Manage groups", null, {
      hk: "14rRId"
    })
  }) : null, j ? null : k.default.createElement(i.CommunityMenuButton, {
    testid: "row-view-members",
    Icon: r.AccountCircleIcon,
    onClick: B,
    title: O.fbt._("View members", null, {
      hk: "nECWQ"
    })
  }), a && (0, u.memberAddedGroupsM1Enabled)() ? k.default.createElement(i.CommunityMenuButton, {
    testid: "row-community-settings",
    Icon: S.SettingsIcon,
    iconHeight: 20,
    onClick: L.onCommunitySettingsClick,
    title: O.fbt._("Community settings", null, {
      hk: "SMkdC"
    })
  }) : null);
  const W = n ? k.default.createElement(d.CommunityHomeJoinedSubgroups, {
    chat: n,
    onPendingGroupsClick: L.onPendingGroupsClick
  }) : null;
  const H = n ? k.default.createElement(p.CommunityHomeUnjoinedSubgroups, {
    chat: n,
    onAddNewGroupClick: () => {
      if (n) {
        if (a) {
          return L.onManageCommunityGroupsClick();
        } else {
          return void ((0, m.subgroupsMaxReached)(n.groupMetadata) || L.onAddNewGroupClick());
        }
      }
    },
    highlightedSubgroups: I,
    type: "community_home"
  }) : null;
  const V = n ? k.default.createElement(s.default, {
    chat: n,
    onBack: L.onBack,
    onDeactivateCommunity: L.onDeactivateCommunity
  }) : null;
  const q = (0, o.isIntegritySuspendedCommunity)(n) ? k.default.createElement(v.default, {
    xstyle: [R.integritySuspendedHelperTextSection, A.uiPadding.all10]
  }, k.default.createElement(T.TextParagraph, {
    theme: "muted",
    testid: "integrity-deactivate-community-disclaimer-text"
  }, O.fbt._("This community is no longer available. Groups have been removed from the community.", null, {
    hk: "2I2D7f"
  }))) : null;
  return k.default.createElement(h.default, {
    ref: t,
    xstyle: R.drawer,
    testid: "community-home-drawer",
    theme: "invite",
    tsNavigationData: {
      surface: "community-info"
    }
  }, k.default.createElement(E.DrawerHeader, {
    title: O.fbt._("Community", null, {
      hk: "3O1jE"
    }),
    type: (0, w.topMenuRedesignEnabled)() ? E.DRAWER_HEADER_TYPE.SMALL : E.DRAWER_HEADER_TYPE.LARGE,
    onBack: x,
    focusBackOrCancel: true
  }), k.default.createElement(g.default, null, n == null || n.groupMetadata == null ? k.default.createElement(_.Loading, null) : k.default.createElement("section", {
    className: (0, D.default)(A.uiPadding.bottom32)
  }, F, G, U, W, H, V, null, q)));
});
exports.CommunityHome = N;
N.displayName = "CommunityHome";