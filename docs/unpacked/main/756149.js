var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, I.default)(() => new b.default([], e => e.id.toString()));
  const {
    parentChat: n,
    members: a = [],
    announcementGroupParticipants: o,
    parentGroupParticipants: l,
    onAddMembersClick: s,
    scrollToMemberList: m
  } = e;
  const [O, R] = (0, D.useState)();
  const N = Boolean(l == null ? undefined : l.iAmAdmin());
  const {
    membersInCAG: j,
    membersNotInCAG: B
  } = (0, D.useMemo)(() => {
    if (N) {
      return (0, p.splitCommunityParticipants)(o, a);
    }
  }, [o, N, a]) || {};
  const F = N ? j : a;
  const G = {
    parentChat: n,
    announcementGroupParticipants: o,
    parentGroupParticipants: l,
    loading: e.loading,
    onInviteMembersClick: e.onInviteMembersClick
  };
  const U = (0, D.useRef)();
  (0, D.useEffect)(() => {
    if (m && U.current) {
      (0, h.scrollIntoViewIfNeeded)(U.current, false);
    }
  }, [m]);
  const W = () => {
    if (n) {
      v.ModalManager.open(D.default.createElement(f.CommunityMembersFlow, (0, r.default)({
        members: F,
        membersNotInCAG: N ? B : []
      }, G)));
    }
  };
  const H = () => {
    if (n) {
      v.ModalManager.open(D.default.createElement(P.CommunityMembersSearch, (0, r.default)({
        members: B,
        theme: P.CommunityMembersSearchTheme.MembersNotInAnnouncements
      }, G)));
    }
  };
  const V = (e, t) => {
    const a = (0, P.getMemberContextMenuItems)({
      parentChat: n,
      parentGroupParticipants: l,
      announcementGroupParticipants: o,
      contact: t,
      origin: "communityParticipantSearch"
    });
    const r = e.type === "click" ? undefined : e.target;
    R({
      contactId: t.id,
      menu: a,
      anchor: r,
      event: e.anchor ? undefined : e
    });
  };
  const q = (0, D.useMemo)(() => {
    if (!F) {
      return [];
    }
    let e = F;
    if (L(F)) {
      e = e.slice(0, c.INFO_DRAWER_MAX_ROWS);
    }
    t.current.init(e);
    return e.map(e => ({
      itemKey: e.id.toString(),
      contact: e,
      height: 68
    }));
  }, [F]);
  let Y;
  let z;
  if (F && L(F)) {
    const e = a.length - c.INFO_DRAWER_MAX_ROWS;
    Y = D.default.createElement(d.default, {
      numMore: e,
      onClick: W,
      viewAll: true
    });
  } else if (N && (B == null ? undefined : B.length)) {
    Y = D.default.createElement(E.ListButton, {
      onClick: H
    }, k.fbt._("Members not in announcements", null, {
      hk: "tl8Nr"
    }));
  } else if (!N) {
    z = D.default.createElement(g.default, {
      xstyle: [A.uiMargin.vert20, A.uiMargin.horiz30],
      theme: "transparent",
      shadow: false
    }, D.default.createElement(S.TextParagraph, {
      theme: "muted"
    }, k.fbt._("Only community admins can see all members", null, {
      hk: "2Vfpoh"
    })));
  }
  const K = () => {
    R(null);
  };
  let Q;
  if (O) {
    Q = D.default.createElement(T.UIE, {
      displayName: "ChatContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: K
    }, D.default.createElement(w.default, {
      contextMenu: O
    }));
  }
  const X = k.fbt._({
    "*": "Members list: {group-participants} members",
    _1: "Members list: 1 member"
  }, [k.fbt._plural((a == null ? undefined : a.length) || 0, "group-participants")], {
    hk: "7FAL6"
  });
  const Z = k.fbt._("Add member", null, {
    hk: "3UTQXo"
  });
  const J = N ? D.default.createElement(u.default, {
    theme: "chat-info",
    image: D.default.createElement(y.default, {
      theme: "compact"
    }, D.default.createElement(i.AddUserIcon, {
      directional: true
    })),
    primary: Z,
    onClick: s,
    ariaLabel: Z,
    focusable: true
  }) : null;
  const $ = (F == null ? undefined : F.length) ? D.default.createElement(c.ChatInfoDrawerListSection, {
    ref: U,
    titleTestId: "section-members",
    testid: "community-info-members-section",
    title: N ? k.fbt._({
      "*": "{number} members",
      _1: "1 member"
    }, [k.fbt._plural(a.length, "number")], {
      hk: "lCXlL"
    }) : k.fbt._("Members", null, {
      hk: "1t9Ipr"
    }),
    titleOnClick: W,
    subtitle: D.default.createElement(C.SearchIcon, {
      color: M.SvgColorProp.SECONDARY
    })
  }, J, D.default.createElement(_.NavigableFlatList, {
    ariaLabel: X,
    listData: q,
    onRenderItem: e => D.default.createElement(x, {
      active: t.current,
      data: e,
      participantCollection: l,
      onOpenMemberMenu: V,
      contextMenu: O
    }),
    selection: t.current,
    rotateList: true
  }), Y) : null;
  return D.default.createElement(D.default.Fragment, null, $, Q, z);
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = require("./570588.js");
var u = a(require("../main-chunk/170206.js"));
var s = require("./822652.js");
var c = require("./464659.js");
var d = a(require("./831584.js"));
var f = require("./215969.js");
var p = require("./515111.js");
var m = require("../app/660666.js");
var h = require("../main-chunk/465113.js");
var g = a(require("./969358.js"));
var E = require("./963950.js");
var v = require("../app/114850.js");
var _ = require("./164406.js");
var y = a(require("./802211.js"));
var C = require("../main-chunk/447514.js");
var b = a(require("../app/237889.js"));
var M = require("../app/220584.js");
var S = require("../app/180519.js");
var T = require("../app/392632.js");
var w = a(require("../app/37875.js"));
var A = require("../app/676345.js");
var P = require("./711162.js");
var O = a(require("../app/124928.js"));
var k = require("../vendor/548360.js");
var D = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = R(t);
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
var I = a(require("../app/637660.js"));
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const N = (0, s.ContactFactory)();
function x(e) {
  let {
    data: t,
    participantCollection: n,
    onOpenMemberMenu: a,
    contextMenu: r,
    active: i
  } = e;
  const {
    contact: u
  } = t;
  const s = !!r && O.default.equals(u.id, r.contactId);
  const c = e => a(e, u);
  return D.default.createElement(N, {
    active: i,
    contact: u,
    onClick: c,
    theme: "chat-info",
    contextEnabled: () => false,
    contextMenu: s,
    onContext: c,
    loadPicture: (0, m.getIsMyContact)(u),
    showNotifyName: true,
    elevatedPushNamesEnabled: (0, l.getABPropConfigValue)("elevated_push_names_v2_m2_enabled"),
    waitIdle: true,
    showStatusRingAroundProfilePhoto: true,
    participantCollection: (0, o.default)(n, "participantCollection"),
    listenForAdminChange: true
  });
}
function L(e) {
  return e.length > c.INFO_DRAWER_MAX_ROWS;
}