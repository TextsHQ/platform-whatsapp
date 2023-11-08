var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/351053.js");
var o = require("../app/394164.js");
var l = require("../app/79672.js");
var i = require("../app/780549.js");
var u = a(require("../app/806711.js"));
var s = require("../app/255131.js");
var c = require("./648678.js");
var d = require("./430855.js");
var f = require("../app/174834.js");
var p = require("../app/359198.js");
var m = a(require("./908081.js"));
var h = a(require("./324093.js"));
var g = require("./626194.js");
var E = a(require("./969358.js"));
var v = a(require("./764041.js"));
var _ = require("../app/707529.js");
var y = require("./512938.js");
var C = a(require("./570834.js"));
var b = a(require("../app/335540.js"));
var M = require("../app/81644.js");
var S = a(require("../app/243957.js"));
var T = a(require("../app/237889.js"));
var w = require("../app/454905.js");
var A = a(require("../app/395967.js"));
var P = require("../app/571444.js");
var O = require("../app/965927.js");
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
  var n = B(t);
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
var I = a(require("../app/156720.js"));
var R = a(require("../app/829686.js"));
var N = a(require("../app/710629.js"));
var x = a(require("../app/969651.js"));
var L = a(require("../app/637660.js"));
var j = require("../app/808446.js");
function B(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (B = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const F = "NEW_COMMUNITY_CELL";
const G = "COMMUNITY_HEADER";
const U = "ACTIVITY_CELL";
const W = "SUBGROUP_CHAT_CELL";
const H = "VIEW_ALL_CELL";
const V = "GUTTER";
const q = {
  hotKeys: {
    height: "ppled2lx"
  },
  drawer: {
    backgroundColor: "se2m7z6i"
  },
  gutter: {
    backgroundColor: "se2m7z6i",
    height: "g965lu3b"
  }
};
const Y = () => D.default.createElement("div", {
  className: (0, I.default)(q.gutter)
});
const z = (0, y.FlatListFactory)();
const K = e => {
  var t;
  var n;
  const a = (t = (n = r.ChatCollection.get(e.id)) === null || n === undefined ? undefined : n.t) !== null && t !== undefined ? t : Number.MIN_SAFE_INTEGER;
  const o = e.joinedSubgroups.map(e => {
    var t;
    var n;
    if ((t = (n = r.ChatCollection.get(e)) === null || n === undefined ? undefined : n.t) !== null && t !== undefined) {
      return t;
    } else {
      return Number.MIN_SAFE_INTEGER;
    }
  });
  return Math.max(a, ...o);
};
const Q = (0, D.forwardRef)((e, t) => {
  var n;
  const [a, y] = (0, D.useState)([]);
  const B = (0, L.default)(() => new C.default());
  const Q = (0, D.useRef)();
  const X = (0, D.useRef)();
  const Z = (0, L.default)(() => new T.default([], e => e.itemKey));
  const J = (0, D.useRef)((n = e.initialScrollTop) !== null && n !== undefined ? n : 0);
  const $ = (0, D.useRef)(false);
  const {
    setIsKeyboardUser: ee
  } = (0, A.default)();
  const te = (0, D.useCallback)(() => a.filter(e => e.type !== V), [a]);
  const ne = (0, R.default)(t => {
    e.onCommunityHome(t);
  });
  const ae = (0, x.default)();
  (0, j.useListener)(u.default, "add remove change", ae);
  const re = (0, R.default)(t => {
    e.onActivityCell(t.id);
  });
  const oe = (0, N.default)(e => {
    var t;
    if (e) {
      e.preventDefault();
    }
    const n = (t = Z.current.getVal()) === null || t === undefined ? undefined : t.subgroup;
    const a = (e == null ? undefined : e.type) === "keydown";
    ee(a);
    if (n) {
      (e => {
        (0, d.incrementCommunityTabEvent)(d.CommunityDailyTabMetricsType.TAB_GROUP_NAVIGATIONS);
        if (e instanceof l.Chat && e !== r.ChatCollection.getActive()) {
          i.Cmd.openChatFromUnread(e);
        }
      })(n);
    }
  }, 200);
  const le = (0, D.useCallback)(() => {
    if (X.current) {
      b.default.focus(X.current);
    }
  }, [X]);
  const ie = () => {
    if (Q.current) {
      const t = Z.current.value;
      if (t == null) {
        return;
      }
      const n = a.findIndex(e => e.itemKey === t.itemKey);
      var e;
      if (n !== -1) {
        if (!((e = Q.current) === null || e === undefined)) {
          e.scrollIntoViewIfNeeded(n, 100);
        }
      }
    }
  };
  const ue = t => {
    if (e.parentGroups.length === 0) {
      return;
    }
    if (!(t == null)) {
      t.preventDefault();
    }
    if (!(t == null)) {
      t.stopPropagation();
    }
    if (Z.current.prev() > -1) {
      Z.current.setPrev(true);
      ie();
      oe(t);
    }
  };
  const se = t => {
    if (e.parentGroups.length === 0) {
      return;
    }
    if (!(t == null)) {
      t.preventDefault();
    }
    if (!(t == null)) {
      t.stopPropagation();
    }
    const n = Z.current.next();
    if (Z.current.index !== n) {
      Z.current.setNext(true);
      ie();
      oe(t);
    }
  };
  (0, D.useEffect)(() => {
    new p.CommunityGroupJourneyEvent({
      action: P.CHAT_FILTER_ACTION_TYPES.VIEW,
      surface: O.SURFACE_TYPE.COMMUNITY_TAB
    }).commit();
  }, []);
  (0, D.useEffect)(() => {
    y((e => {
      const t = e.filter(e => r.ChatCollection.get(e.id) != null);
      const n = t.filter(e => !(0, o.isIntegritySuspendedCommunity)(r.ChatCollection.get(e.id))).sort((e, t) => K(t) - K(e));
      const a = t.filter(e => (0, o.isIntegritySuspendedCommunity)(r.ChatCollection.get(e.id)) === true);
      const l = (0, f.communitiesEnabled)() && (0, f.communitiesCreationEnabled)() ? [{
        itemKey: "new-community-btn",
        type: F
      }, {
        itemKey: (0, S.default)(),
        type: V,
        height: 10
      }] : [];
      n.forEach(e => {
        const t = [];
        const n = e.id.toString();
        const a = r.ChatCollection.assertGet(e.id);
        const o = e.joinedSubgroups.map(e => r.ChatCollection.assertGet(e)).sort((e, t) => {
          var n;
          var a;
          return ((n = t == null ? undefined : t.t) !== null && n !== undefined ? n : Number.MIN_SAFE_INTEGER) - ((a = e == null ? undefined : e.t) !== null && a !== undefined ? a : Number.MIN_SAFE_INTEGER);
        });
        const i = u.default.getActivityFor(e.id);
        const c = i.some(e => e.type === s.ActivityTypeType.NEW_COMMUNITY);
        t.push({
          itemKey: `community-header-${n}`,
          type: G,
          parentGroupMetadata: e,
          parentGroupChat: a,
          isNewCommunity: c
        });
        const d = i.filter(e => e.type !== s.ActivityTypeType.NEW_COMMUNITY);
        if (d.length) {
          t.push({
            itemKey: `community-activity-${n}`,
            type: U,
            activities: d,
            parentGroupMetadata: e
          });
        }
        const f = o.find(e => {
          var t;
          if ((t = e.groupMetadata) === null || t === undefined) {
            return undefined;
          } else {
            return t.defaultSubgroup;
          }
        });
        if (f != null) {
          t.push({
            itemKey: `community-subgroup-${f.id.toString()}`,
            type: W,
            subgroup: f
          });
        }
        const p = o.filter(e => e !== f);
        if (p[0] != null) {
          t.push({
            itemKey: `community-subgroup-${p[0].id.toString()}`,
            type: W,
            subgroup: p[0]
          });
        }
        if (!(d.length || p[1] == null)) {
          t.push({
            itemKey: `community-subgroup-${p[1].id.toString()}`,
            type: W,
            subgroup: p[1]
          });
        }
        if (t.length > 1) {
          t.push({
            itemKey: `community-view-all-${n}`,
            type: H,
            parentGroupWid: e.id
          });
        }
        t.push({
          itemKey: `community-gutter-${n}`,
          type: V,
          height: 10
        });
        l.push(...t);
      });
      a.forEach(e => {
        const t = [];
        const n = e.id.toString();
        const a = r.ChatCollection.get(e.id);
        t.push({
          itemKey: `community-header-${n}`,
          type: G,
          parentGroupMetadata: e,
          parentGroupChat: a,
          isNewCommunity: false
        });
        t.push({
          itemKey: `community-gutter-${n}`,
          type: V,
          height: 22
        });
        l.push(...t);
      });
      return l;
    })(e.parentGroups));
  }, [e.parentGroups]);
  (0, D.useEffect)(() => {
    if (Z.current.list.length === 0) {
      Z.current.init(te());
    }
  }, [Z, a, te]);
  (0, D.useEffect)(() => {
    le();
  }, [le]);
  (0, D.useEffect)(() => {
    var t;
    if (a.length && $.current === false) {
      B.current.setScrollFromStart((t = e.initialScrollTop) !== null && t !== undefined ? t : 0);
      $.current = true;
    }
    return () => {
      var t;
      if ((t = e.setScrollTop) === null || t === undefined) {
        return undefined;
      } else {
        return t.call(e, J.current);
      }
    };
  }, [a, B, e]);
  return D.default.createElement(M.HotKeys, {
    handlers: {
      down: se,
      j: se,
      tab: se,
      up: ue,
      k: ue,
      "shift+tab": ue
    },
    ref: X,
    className: (0, I.default)(q.hotKeys),
    "aria-label": k.fbt._("Community Tab Drawer", null, {
      hk: "4dthYs"
    })
  }, D.default.createElement(m.default, {
    ref: t,
    xstyle: q.drawer,
    tsNavigationData: {
      surface: "community-tab"
    },
    testid: "community-drawer"
  }, D.default.createElement(g.DrawerHeader, {
    title: k.fbt._("Communities", null, {
      hk: "2zqZTi"
    }),
    type: (0, w.topMenuRedesignEnabled)() ? g.DRAWER_HEADER_TYPE.TAB : g.DRAWER_HEADER_TYPE.LARGE,
    onBack: e.onBack
  }), e.parentGroups.length > 0 ? D.default.createElement(h.default, {
    flatListControllers: [B.current],
    onScroll: e => {
      J.current = e.currentTarget.scrollTop;
    }
  }, D.default.createElement(z, {
    ref: Q,
    data: a,
    renderItem: t => {
      let n;
      switch (t.type) {
        case F:
          n = D.default.createElement(E.default, {
            shadow: false,
            animation: false
          }, D.default.createElement(c.NewCommunityCell, {
            onNewCommunity: e.onNewCommunity,
            active: Z.current
          }));
          break;
        case G:
          n = D.default.createElement(E.default, {
            shadow: false,
            animation: false
          }, D.default.createElement(c.CommunityCell, {
            parentGroupMetadata: t.parentGroupMetadata,
            parentGroupChat: t.parentGroupChat,
            onClick: () => ne(t.parentGroupChat.id),
            isNew: t.isNewCommunity,
            active: Z.current,
            inTabDrawer: true
          }));
          break;
        case V:
          n = D.default.createElement(Y, null);
          break;
        case U:
          n = D.default.createElement(E.default, {
            shadow: false,
            animation: false
          }, D.default.createElement(c.ActivityCell, {
            activities: t.activities,
            onClick: () => re(t.parentGroupMetadata),
            parentGroupWid: t.parentGroupMetadata.id,
            active: Z.current
          }));
          break;
        case W:
          n = D.default.createElement(E.default, {
            shadow: false,
            animation: false
          }, D.default.createElement(c.SubgroupChatCell, {
            subgroup: t.subgroup,
            active: Z.current
          }));
          break;
        case H:
          n = D.default.createElement(E.default, {
            shadow: false,
            animation: false
          }, D.default.createElement(c.ViewAllCell, {
            onClick: () => ne(t.parentGroupWid),
            parentGroupWid: t.parentGroupWid,
            active: Z.current
          }));
      }
      return D.default.createElement(_.ErrorBoundary, {
        name: "community-drawer-section"
      }, n);
    },
    flatListController: B.current,
    direction: "vertical",
    role: "navigation",
    "aria-label": k.fbt._("Community List", null, {
      hk: "Is9tx"
    }).toString()
  })) : D.default.createElement(h.default, null, D.default.createElement(v.default, {
    onNewCommunity: e.onNewCommunity
  }))));
});
Q.displayName = "CommunityTabDrawer";
var X = Q;
exports.default = X;