var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/944908.js"));
var l = a(require("../vendors-main/710691.js"));
var i = a(require("../vendors-main/974691.js"));
var u = a(require("../app/939067.js"));
var s = require("../app/287461.js");
var c = require("../app/70354.js");
var d = require("../app/708838.js");
var f = require("./485189.js");
var p = require("./743840.js");
var m = require("../app/81644.js");
var h = require("./833654.js");
var g = require("./834132.js");
var E = require("../app/326425.js");
var v = require("../app/370308.js");
var _ = require("./414493.js");
var y = require("../app/676345.js");
var C = a(require("../app/844453.js"));
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
var T = require("../app/441673.js");
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
const A = {
  container: {
    height: "k8jzt6yk"
  },
  expressionsPanelContainer: {
    height: "el4lc5wh"
  },
  bodyContainer: {
    position: "g0rxnol2",
    backgroundColor: "rv6u8h8g",
    borderStart: "av6w3u2w",
    height: "ppled2lx"
  },
  reactionPanelContainerBG: {
    backgroundColor: "mew9gn57"
  },
  list: {
    position: "g0rxnol2",
    zIndex: "thghmljt"
  },
  search: {
    position: "g0rxnol2",
    zIndex: "nbczt5ty",
    display: "f804f6gw"
  },
  hidden: {
    display: "qibyn6m3"
  },
  emojiSectionScrollListContainer: {
    height: "nn5ro1se"
  }
};
function P(e) {
  let {
    onChange: t,
    onFocusUp: n,
    transitionName: a,
    searchText: r,
    scrolledToTop: o,
    searchInputRef: l,
    onSearchChange: i,
    onSearchDownKey: u,
    onSearchEnterKey: s,
    displayLocation: c
  } = e;
  let d = null;
  const f = c === h.DisplayLocation.Reactions ? b.fbt._("Search Reaction", null, {
    hk: "3CXXfg"
  }) : b.fbt._("Search Emoji", null, {
    hk: "23O4LT"
  });
  let p;
  p = c === h.DisplayLocation.Reactions ? g.Theme.ReactionPanel : c === h.DisplayLocation.ExpressionsPanel ? g.Theme.ExpressionsPanel : g.Theme.Default;
  d = M.default.createElement(g.PanelSearchInput, {
    label: f,
    onChange: i,
    onUpKey: n,
    onDownKey: u,
    onEnterKey: s,
    ref: l,
    shadow: !o,
    value: r || "",
    theme: p
  });
  return M.default.createElement(C.default, {
    transitionName: a,
    className: (0, S.default)(A.search)
  }, d);
}
function O(e) {
  let {
    width: t,
    onEmoji: n,
    searchResultsRef: a,
    data: r,
    onEmojiFocus: o,
    onSearchResultsFocusAbove: l,
    displayLocation: i
  } = e;
  return M.default.createElement("div", {
    className: (0, S.default)(A.list, A.emojiSectionScrollListContainer)
  }, M.default.createElement(f.EmojiSectionScrollList, {
    data: r,
    width: t,
    initialScrollTop: 0,
    searchInputVisible: true,
    focusAbove: l,
    onFocusUp: l,
    onEmoji: n,
    onEmojiFocus: o,
    ref: a,
    showTitles: false,
    displayLocation: i
  }));
}
function k(e, t) {
  const {
    onSection: n,
    onChange: a,
    onFocusPrev: g,
    onFocusNext: C,
    onFocusUp: b,
    width: w,
    onEmoji: k,
    sectionIds: D,
    displayLocation: I
  } = e;
  const R = (0, M.useRef)(null);
  const N = (0, M.useRef)(null);
  const x = (0, M.useRef)(null);
  const L = (0, M.useRef)(null);
  const j = (0, M.useRef)(false);
  const B = (0, M.useRef)(false);
  const F = (0, M.useRef)(false);
  const G = (0, M.useRef)(e.displayCache.scrollTop);
  const U = (0, M.useRef)(e.displayCache.sectionId);
  const [W, H] = (0, M.useState)(e.displayCache.scrollTop === 0);
  const [V, q] = (0, M.useState)(e.defaultSearchText || "");
  const [Y, z] = (0, M.useState)(e.displayCache.showSearchInput);
  const [K, Q] = (0, M.useState)([]);
  const [X] = (0, T.useTimeout)(() => {
    F.current = false;
  }, 200);
  const Z = (e, t) => {
    F.current = true;
    X();
    const n = t.scrollTop;
    const a = e.getBoundingClientRect().top - t.getBoundingClientRect().top + n;
    const r = a - t.clientHeight + e.clientHeight + 2;
    const o = Y ? a - f.TOTAL_SEARCH_HEIGHT : a - 2;
    t.scrollTop = (0, i.default)(n, r, o);
  };
  const J = e => {
    if (!N.current) {
      j.current = true;
      return void z(true);
    }
    N.current.focus(e);
  };
  const $ = () => D.map(e => {
    let t = [];
    switch (e) {
      case "RECENT":
        if (!K.length) {
          t = (0, o.default)(E.RecentEmojiCollection.reduce((e, t) => {
            const n = c.EmojiUtil.getSkinToneBase(t.id) || t.id;
            if (c.EmojiUtil.getGlyphId(n) != null) {
              e.push(n);
            }
            return e;
          }, []));
        }
        break;
      case "RECENT_REACTIONS":
        t = (0, o.default)(v.RecentReactionsCollection.reduce((e, t) => {
          const n = c.EmojiUtil.getSkinToneBase(t.id) || t.id;
          const a = c.EmojiUtil.getGlyphId(n);
          const r = c.EmojiUtil.normalizeEmojiFromString(n);
          if (a != null && r != null) {
            e.push(r);
          }
          return e;
        }, []));
        break;
      default:
        t = c.EmojiUtil.getEmojisInCategory(e);
    }
    return {
      sectionId: e,
      emojis: t
    };
  });
  (0, M.useEffect)(() => {
    if (Y) {
      J(true);
    }
  }, [Y]);
  (0, M.useEffect)(() => {
    Q($());
  }, []);
  const ee = () => {
    F.current = true;
    X();
    J();
    if (R.current) {
      R.current.scrollToTop();
    }
  };
  const te = () => {
    const e = G.current === 0;
    if (e) {
      H(e);
      z(true);
    }
    return e;
  };
  const ne = function () {
    var e = (0, r.default)(function* (e) {
      U.current = e;
      yield new Promise(e => {
        j.current = true;
        q("");
        z(true);
        e();
      });
      B.current = true;
      const t = R.current ? R.current.scrollToSection(e, 0 - f.TOTAL_SEARCH_HEIGHT) : Promise.resolve();
      t.finally(() => {
        if (t == t) {
          B.current = false;
          if (!te()) {
            if (Y) {
              H(G.current === 0);
            }
          }
        }
      });
      L.current = t;
      return t;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const ae = (0, u.default)(e => {
    let {
      searchText: t
    } = e;
    const n = (0, d.emojiKeywordToUnicodeSearch)((0, l.default)(t));
    return [{
      sectionId: p.SECTIONS.SEARCH_RESULT,
      emojis: n
    }];
  });
  (0, M.useImperativeHandle)(t, () => ({
    focusSearchInput: J,
    scrollToSection: ne
  }));
  return M.default.createElement(m.HotKeys, {
    handlers: {
      tab: e => {
        e.preventDefault();
        e.stopPropagation();
        if (N.current) {
          if (N.current.hasFocus()) {
            return void (C == null || C());
          } else {
            return J();
          }
        }
      },
      "shift+tab": e => {
        e.preventDefault();
        e.stopPropagation();
        if (N.current) {
          if (N.current.hasFocus()) {
            return void (g == null || g());
          } else {
            return J();
          }
        }
      }
    },
    tabIndex: null,
    className: (0, S.default)(A.container, (0, s.getABPropConfigValue)("web_expression_panels") && A.expressionsPanelContainer),
    onClick: e => {
      (0, _.stopEvent)(e);
      J();
    }
  }, M.default.createElement("div", {
    className: (0, S.default)(A.bodyContainer, I === h.DisplayLocation.ExpressionsPanel && y.uiMargin.top2, (I === h.DisplayLocation.Reactions || I === h.DisplayLocation.ExpressionsPanel) && A.reactionPanelContainerBG)
  }, M.default.createElement(P, {
    transitionName: j.current ? "emoji-search-slide-away-fast" : "emoji-search-slide-away",
    onChange: a,
    onFocusUp: b,
    searchInputRef: N,
    searchText: V,
    scrolledToTop: W,
    onSearchChange: (e, t) => {
      if (!(a == null)) {
        a(e, t);
      }
      q(e);
    },
    onSearchDownKey: () => {
      if (V) {
        if (!x.current) {
          return;
        }
        x.current.focusFirstVisibleEmoji();
      } else if (R.current) {
        R.current.focusFirstVisibleEmoji(f.TOTAL_SEARCH_HEIGHT);
      }
    },
    onSearchEnterKey: () => {
      if (V && x.current) {
        x.current.selectFirstVisibleEmoji();
      }
    },
    displayLocation: I
  }), V ? M.default.createElement(O, {
    width: w,
    onEmoji: k,
    data: (() => {
      const e = (V || "").replace(/^\s+/, "");
      return ae({
        searchText: e
      });
    })(),
    searchResultsRef: x,
    onEmojiFocus: Z,
    onSearchResultsFocusAbove: () => {
      ee();
    },
    displayLocation: I
  }) : null, M.default.createElement("div", {
    className: (0, S.default)(Boolean(V) && A.hidden, A.list, A.emojiSectionScrollListContainer)
  }, M.default.createElement(f.EmojiSectionScrollList, {
    data: K,
    width: e.width,
    onFocusUp: () => {
      ee();
    },
    initialScrollTop: e.displayCache.scrollTop,
    searchInputVisible: Y,
    focusAbove: () => {
      ee();
    },
    onEmoji: e.onEmoji,
    onEmojiFocus: Z,
    onScroll: e => {
      const t = e - G.current;
      G.current = e;
      if (F.current) {
        return;
      }
      if (B.current) {
        return;
      }
      if (te()) {
        return;
      }
      const n = Math.abs(t);
      j.current = n > 15;
      const a = t >= 0 ? 1 : -1;
      const r = e === 0;
      if (e < f.TOTAL_SEARCH_HEIGHT) {
        H(W);
        return void z(true);
      }
      if (!(n < 5)) {
        if (Y) {
          if (a === 1) {
            H(r);
            z(false);
          }
        } else if (a === -1) {
          H(r);
          z(true);
        }
      }
    },
    onSection: e => {
      if (!B.current) {
        U.current = e;
        n(e);
      }
    },
    ref: R,
    showTitles: true,
    displayLocation: I
  }))));
}
var D = (0, M.forwardRef)(k);
exports.default = D;