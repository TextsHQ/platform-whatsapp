var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityHomeUnjoinedSubgroups = function (e) {
  var t;
  const {
    chat: n,
    onAddNewGroupClick: a,
    highlightedSubgroups: r = [],
    mini: s = false,
    type: c
  } = e;
  const d = (0, O.default)(() => new _.default([], e => e.itemKey));
  const {
    unjoinedSubgroups: f = []
  } = (0, k.useOptionalModelValues)(n.groupMetadata, ["unjoinedSubgroups"]) || {};
  const h = S.fbt._({
    "*": "Other groups: {other-groups} groups",
    _1: "Other groups: 1 group"
  }, [S.fbt._plural(f.length, "other-groups")], {
    hk: "24VlHs"
  });
  !function (e, t, n) {
    const [a, r] = (0, T.useState)(false);
    (0, T.useEffect)(() => {
      if (e.length && !a) {
        (0, p.fetchUnjoinedGroupsPicsBatched)(e, t, n).then(() => r(true));
      }
    }, [e]);
  }(f, n.id, (t = n.groupMetadata) === null || t === undefined ? undefined : t.joinedSubgroups[0]);
  const v = (() => {
    const e = f.map(e => e.toString());
    return M.default.filter(t => e.includes(t.id.toString())).sort((0, b.default)(r));
  })();
  const y = () => {
    let e = [...v];
    if (v.length > l.INFO_DRAWER_MAX_ROWS) {
      e = e.slice(0, l.INFO_DRAWER_MAX_ROWS);
    }
    return e.reduce((e, t) => {
      if (!(s && t.groupType === m.GroupType.LINKED_ANNOUNCEMENT_GROUP)) {
        e.push({
          itemKey: t.id.toString(),
          subgroupMetadata: t,
          height: 65,
          shouldHighlight: r.some(e => t.id.equals(e))
        });
      }
      return e;
    }, []);
  };
  d.current.init(y());
  const w = (0, P.default)(n.groupMetadata, ["change:allowNonAdminSubGroupCreation"], () => (0, o.canAddGroupToCommunity)(n)) && !s ? T.default.createElement(u.AddGroupCell, {
    onClick: a
  }) : null;
  const A = y();
  if (w == null && A.length === 0) {
    return null;
  }
  const D = v.length > l.INFO_DRAWER_MAX_ROWS ? T.default.createElement(i.default, {
    ariaLabel: S.fbt._({
      "*": "View all unjoined subgroups: {view-all} more groups",
      _1: "View all unjoined subgroups: 1 more group"
    }, [S.fbt._plural(v.length - l.INFO_DRAWER_MAX_ROWS, "view-all")], {
      hk: "D4rF7"
    }),
    xstyle: I.viewAllContainer,
    numMore: v.length - l.INFO_DRAWER_MAX_ROWS,
    onClick: () => {
      g.ModalManager.open(T.default.createElement(C.default, {
        onCancel: () => g.ModalManager.close(),
        unjoinedGroups: v,
        onClickGroup: N,
        title: S.fbt._("Other groups", null, {
          hk: "2CYVlJ"
        }),
        type: c
      }));
    },
    viewAll: true
  }) : null;
  return T.default.createElement(l.ChatInfoDrawerListSection, {
    testid: "section-other-groups",
    title: s ? S.fbt._("GROUPS YOU CAN JOIN", null, {
      hk: "16WHc7"
    }) : S.fbt._("Other groups", null, {
      hk: "3y7uIA"
    }),
    shadow: !s
  }, w, T.default.createElement(E.NavigableFlatList, {
    ariaLabel: h.toString(),
    listData: A,
    onRenderItem: e => T.default.createElement(x, {
      data: e,
      active: d.current,
      type: c
    }),
    selection: d.current,
    rotateList: true
  }), D);
};
exports.handleOpenSubgroupModal = N;
exports.pinnedIcon = undefined;
var r = a(require("../main-chunk/170206.js"));
var o = require("../app/394164.js");
var l = require("./464659.js");
var i = a(require("./831584.js"));
var u = require("./648678.js");
var s = require("./430855.js");
var c = require("./119357.js");
var d = require("../app/23641.js");
var f = require("../app/305521.js");
var p = require("./791538.js");
var m = require("../app/862159.js");
var h = require("../app/81644.js");
var g = require("../app/114850.js");
var E = require("./164406.js");
var v = require("./121528.js");
var _ = a(require("../app/237889.js"));
var y = a(require("./989946.js"));
var C = a(require("./110753.js"));
var b = a(require("./870726.js"));
var M = a(require("../app/22368.js"));
var S = require("../vendor/548360.js");
var T = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = D(t);
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
var w = a(require("../app/156720.js"));
var A = a(require("../main-chunk/928361.js"));
var P = a(require("../app/524578.js"));
var O = a(require("../app/637660.js"));
var k = require("../app/655241.js");
function D(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (D = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const I = {
  viewAllContainer: {
    height: "b82nm36r"
  },
  icon: {
    display: "l7jjieqr",
    marginEnd: "jnwc1y2a",
    color: "s4k44ver",
    verticalAlign: "fewfhwl7"
  },
  iconPinned: {
    color: "cc4ue8kt"
  }
};
const R = T.default.createElement("div", {
  className: (0, w.default)(I.icon),
  key: "icon-pinned"
}, T.default.createElement(v.Pinned2Icon, {
  iconXstyle: I.iconPinned
}));
function N(e, t, n) {
  (0, s.incrementCommunityHomeEvent)(e.parentGroupId, s.CommunityDailyHomeMetricsType.HOME_GROUP_DISCOVERIES);
  g.ModalManager.open(T.default.createElement(y.default, {
    subgroupMetadata: e,
    onSuccess: () => {
      (0, s.incrementCommunityHomeEvent)(e.parentGroupId, s.CommunityDailyHomeMetricsType.HOME_GROUP_JOINS);
      if (!(n == null)) {
        n();
      }
    },
    source: t
  }));
}
function x(e) {
  const {
    subgroupMetadata: t,
    shouldHighlight: n
  } = e.data;
  const [a, o] = (0, A.default)(e.active, t.id.toString());
  const l = S.fbt._("{subgroup-name}", [S.fbt._param("subgroup-name", t.subject)], {
    hk: "2xetrC"
  });
  if (t == null) {
    return null;
  }
  const {
    id: i,
    subject: u,
    groupType: s
  } = t;
  const p = s === m.GroupType.LINKED_ANNOUNCEMENT_GROUP;
  const g = p ? R : null;
  let E = null;
  if (n) {
    E = S.fbt._("New", null, {
      hk: "4ansAj"
    });
  } else if (p) {
    E = S.fbt._("Announcement group", null, {
      hk: "1YLlbO"
    });
  }
  const v = () => {
    N(t, e.type);
  };
  const _ = n ? "subgroup-new" : "subgroup";
  let y = u;
  let C = i;
  if (s === m.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    y = S.fbt._("Announcements", null, {
      hk: "GNIKa"
    }).toString();
    C = t.parentGroupId;
  }
  const b = s === m.GroupType.LINKED_ANNOUNCEMENT_GROUP ? T.default.createElement(c.CommunitySpeakerIcon, {
    size: 40
  }) : T.default.createElement(d.DetailImage, {
    size: 40,
    id: C,
    shape: d.DetailImageShape.Circle
  });
  return T.default.createElement(h.HotKeys, {
    ref: a,
    handlers: {
      enter: v,
      space: v
    },
    "aria-label": l.toString(),
    role: "button"
  }, T.default.createElement(r.default, {
    theme: _,
    primary: T.default.createElement(f.EmojiText, {
      text: y,
      ellipsify: true
    }),
    secondary: E,
    image: b,
    onClick: v,
    secondaryDetail: g,
    active: o
  }));
}
exports.pinnedIcon = R;