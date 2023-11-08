var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityTabbedInfoDrawer = exports.CommunityInfoTabs = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/351053.js");
var i = require("./474103.js");
var u = require("./590496.js");
var s = require("./692310.js");
var c = a(require("./838378.js"));
var d = require("./643906.js");
var f = require("./584171.js");
var p = a(require("./908081.js"));
var m = a(require("./324093.js"));
var h = require("./626194.js");
var g = require("../app/900316.js");
var E = a(require("./969358.js"));
var v = require("./811720.js");
require("../app/163139.js");
var _ = a(require("./434377.js"));
var y = require("../app/676345.js");
var C = a(require("../app/448812.js"));
var b = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var S = a(require("../app/156720.js"));
var T = require("./574396.js");
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = require("../vendor/76672.js")({
  Community: "Community",
  Announcements: "Announcements"
});
exports.CommunityInfoTabs = A;
const P = {
  tabBackground: {
    backgroundColor: "lkjmyc96"
  },
  tab: {
    fontWeight: "hnx8ox4h",
    textTransform: "hdtub5hb"
  },
  drawer: {
    backgroundColor: "se2m7z6i"
  }
};
const O = (0, M.forwardRef)((e, t) => {
  const {
    chat: n,
    isAdmin: a,
    showFullDescription: w = false,
    initialTab: O = A.Community,
    scrollToMemberList: k = false,
    callbacks: D
  } = e;
  const [I, R] = (0, M.useState)(O);
  const [N, x] = (0, M.useState)(k);
  const L = (0, M.useMemo)(() => (0, i.getCommunityAnnouncementGroup)(n == null ? undefined : n.groupMetadata), [n == null ? undefined : n.groupMetadata]);
  const j = (L == null ? undefined : L.id) ? l.ChatCollection.get(L.id) : null;
  const B = (0, T.useCommunityMembers)((0, o.default)(n, "chat"), L);
  const F = (0, M.useCallback)(e => {
    const t = A.cast(e);
    if (t == null) {
      return;
    }
    const n = () => {
      x(false);
      R(t);
      D.onTabSwitch(t);
    };
    if (t === A.Announcements && L instanceof C.default) {
      (0, d.handleOpenSubgroupModal)(L, "community_home", n);
    } else {
      n();
    }
  }, []);
  const G = (0, M.useMemo)(() => {
    const e = [{
      id: A.Community,
      title: b.fbt._("Community", null, {
        hk: "1yfFMk"
      })
    }, {
      id: A.Announcements,
      title: b.fbt._("Announcements", null, {
        hk: "2dDXR"
      })
    }];
    return M.default.createElement(E.default, {
      xstyle: y.uiMargin.bottom0
    }, M.default.createElement(_.default, {
      tabConfigs: e,
      selectedId: I,
      onSelect: F,
      xstyle: P.tabBackground,
      tabXstyle: P.tab,
      activateTabOnKeyboardNavigation: true
    }));
  }, [I, F]);
  const U = () => {
    if (L != null && j != null) {
      (0, s.groupOpenAddParticipantFlow)(L, j, n == null ? undefined : n.formattedTitle);
    }
  };
  const W = n ? M.default.createElement(c.default, {
    chat: n,
    isAdmin: a,
    onInviteMembersClick: D.onInviteMembersClick,
    onManageCommunityGroupsClick: D.onManageCommunityGroupsClick,
    onAddMembersClick: U
  }) : null;
  const H = n ? M.default.createElement(f.CommunityInfoSection, (0, r.default)({
    chat: n,
    isAdmin: a,
    showFullDescription: w,
    callbacks: D,
    onAddMembersClick: U,
    scrollToMemberList: N && I === A.Community
  }, B)) : null;
  const V = j ? M.default.createElement(u.CommunityAnnouncementsSection, {
    chat: j,
    onMediaGalleryClick: D.onMediaGalleryClick,
    onStarredMessagesClick: D.onStarredMessagesClick,
    onEphemeralClick: D.onEphemeralClick,
    onDeactivateCommunity: D.onDeactivateCommunity
  }) : null;
  const q = I === A.Community ? H : V;
  const Y = n == null ? undefined : n.groupMetadata;
  return M.default.createElement(p.default, {
    ref: t,
    xstyle: P.drawer,
    testid: "community-tabbed-info-drawer",
    theme: "invite",
    tsNavigationData: {
      surface: "community-info"
    }
  }, M.default.createElement(h.DrawerHeader, {
    title: b.fbt._("Community info", null, {
      hk: "1jjsJ1"
    }),
    type: h.DRAWER_HEADER_TYPE.SMALL,
    onCancel: () => {
      g.DrawerManager.closeDrawerRight();
    },
    focusBackOrCancel: true
  }), M.default.createElement(m.default, null, n == null || Y == null ? M.default.createElement(v.Loading, null) : M.default.createElement("section", {
    className: (0, S.default)(y.uiPadding.bottom32)
  }, W, G, q, null)));
});
exports.CommunityTabbedInfoDrawer = O;
O.displayName = "CommunityTabbedInfoDrawer";