var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/763105.js"));
var o = a(require("../vendor/435161.js"));
var l = require("../app/8304.js");
var i = require("./700071.js");
var u = require("../app/359198.js");
var s = require("./811720.js");
var c = a(require("../app/97359.js"));
var d = a(require("../app/932325.js"));
var f = require("./417696.js");
var p = require("./608456.js");
var m = a(require("../app/237889.js"));
var h = require("../app/571444.js");
var g = require("../app/965927.js");
var E = require("../vendor/548360.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var _ = a(require("../app/710629.js"));
var y = a(require("../app/637660.js"));
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = (0, i.ChatFactory)();
const M = (0, f.ListModalFactory)();
function S(e) {
  let t;
  let n;
  let {
    subtitle: a,
    active: r,
    chat: o,
    onClick: l,
    mode: i,
    showSpeakerForCag: s,
    type: c
  } = e;
  const d = typeof a != "boolean";
  if (d) {
    t = a;
    n = "group-modal";
  }
  return v.default.createElement(b, {
    chat: o,
    mode: i,
    active: r,
    secondary: t,
    noContext: true,
    theme: n,
    onClick: () => {
      if (!d) {
        if (c === "subgroup_switcher") {
          new u.CommunityGroupJourneyEvent({
            action: h.CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
            surface: g.SURFACE_TYPE.COMMUNITY_NAV_SHEET,
            chat: o
          }).commit();
        }
        l.call(null, o);
      }
    },
    overrideCommunityAnnouncementGroupName: true,
    showSpeakerForCag: s
  });
}
function T(e, t) {
  const a = E.fbt._("Groups", null, {
    hk: "3mTb9E"
  });
  const {
    onCancel: u,
    chats: f,
    filter: h = () => true,
    onGroup: g,
    mode: C = i.Mode.INFO,
    title: b = a,
    titleStr: T = a,
    firstRow: w,
    lastRow: A,
    hideSearchBar: P = false,
    showSpeakerForCag: O,
    rotateList: k = false,
    tsNavigationData: D,
    type: I
  } = e;
  const R = (0, y.default)(() => new m.default([], e => e.toString()));
  const [N, x] = (0, v.useState)(true);
  const [L, j] = (0, v.useState)(undefined);
  (0, v.useEffect)(() => {
    (0, l.delayMs)(300).then(() => Promise.all((0, o.default)((0, r.default)(f, e => {
      var t;
      if ((t = e.groupMetadata) === null || t === undefined) {
        return undefined;
      } else {
        return t.stale;
      }
    }), e => {
      var t;
      return (0, c.default)(require("../app/667845.js")).update((t = e.groupMetadata) === null || t === undefined ? undefined : t.id).catch(() => {});
    }))).then(() => x(false));
  }, []);
  const B = (0, _.default)(j, 100);
  const F = N ? v.default.createElement(s.Loading, null) : v.default.createElement(s.SearchGroups, null);
  return v.default.createElement(M, {
    title: b,
    titleStr: T,
    data: (() => {
      let e = [];
      if (N) {
        return e;
      }
      const t = d.default.accentFold(L);
      const n = (0, p.numberSearch)(t);
      const a = f.filter(e => h(e) && (!t || t && e.contact.searchMatch(t, n)));
      R.current.init(a.filter(e => h(e) === true).map(e => e.id));
      e = a.map(e => ({
        chat: e,
        itemKey: e.id.toString()
      }));
      return e;
    })(),
    tsNavigationData: D,
    renderItem: e => {
      let {
        chat: t
      } = e;
      return v.default.createElement(S, {
        chat: t,
        subtitle: h(t),
        active: R.current,
        onClick: g,
        mode: C,
        showSpeakerForCag: O,
        type: I
      });
    },
    emptyState: F,
    selection: R.current,
    rotateList: k,
    onCancel: u,
    onSearch: P ? undefined : B,
    onSelect: (e, t) => {
      if (h(t.chat) === true) {
        g(t.chat);
      }
    },
    ref: t,
    searchPlaceholder: E.fbt._("Search groups", null, {
      hk: "3f8PLc"
    }),
    firstRows: [w],
    lastRow: A
  });
}
var w = (0, v.forwardRef)(T);
exports.default = w;