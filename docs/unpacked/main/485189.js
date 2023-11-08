var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOTAL_SEARCH_HEIGHT = exports.EmojiSectionScrollList = undefined;
var r = a(require("../app/939067.js"));
var o = require("../app/8304.js");
var l = require("../app/396574.js");
var i = require("./749033.js");
var u = a(require("./485834.js"));
var s = a(require("./222965.js"));
var c = require("./743840.js");
var d = require("./512938.js");
var f = a(require("./964223.js"));
var p = a(require("./570834.js"));
var m = require("./833654.js");
var h = require("../app/152189.js");
var g = a(require("../app/330619.js"));
var E = a(require("./194120.js"));
var v = a(require("../app/556869.js"));
var _ = require("../vendor/548360.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var C = a(require("../app/637660.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = (0, h.getIntFromStylesProp)(u.default, "-total-search-height");
exports.TOTAL_SEARCH_HEIGHT = M;
const S = (0, h.getIntFromStylesProp)(u.default, "-title-height");
const T = {
  [c.SECTIONS.SEARCH_RESULT]: () => {
    throw (0, v.default)("Search results should not be shown with a title.");
  },
  [c.SECTIONS.RECENT]: () => _.fbt._("Recent", null, {
    hk: "mC0w6"
  }),
  [c.SECTIONS.RECENT_REACTIONS]: () => _.fbt._("Recent Reactions", null, {
    hk: "36Zr4J"
  }),
  [s.default.SMILEYS_PEOPLE]: () => _.fbt._("Smileys & People", null, {
    hk: "15kkb2"
  }),
  [s.default.ANIMALS_NATURE]: () => _.fbt._("Animals & Nature", null, {
    hk: "2YsDed"
  }),
  [s.default.FOOD_DRINK]: () => _.fbt._("Food & Drink", null, {
    hk: "1Xtk7P"
  }),
  [s.default.ACTIVITY]: () => _.fbt._("Activity", null, {
    hk: "242snN"
  }),
  [s.default.TRAVEL_PLACES]: () => _.fbt._("Travel & Places", null, {
    hk: "1vozFD"
  }),
  [s.default.OBJECTS]: () => _.fbt._("Objects", null, {
    hk: "2McHxt"
  }),
  [s.default.SYMBOLS]: () => _.fbt._("Symbols", null, {
    hk: "1WHqbc"
  }),
  [s.default.FLAGS]: () => _.fbt._("Flags", null, {
    hk: "15Xohs"
  })
};
const w = (0, h.getIntFromStylesProp)(u.default, "-scrollbar-width");
const A = (0, d.FlatListFactory)();
function P(e) {
  let {
    row: t,
    focusAbove: n,
    focusBelow: a,
    onRef: r,
    numColumns: o,
    onEmoji: l,
    onEmojiFocus: s,
    displayLocation: d
  } = e;
  switch (t.kind) {
    case "title":
      return y.default.createElement("div", {
        className: u.default.title
      }, t.title);
    case "emojis":
      return y.default.createElement(i.EmojiRow, {
        emojis: t.emojis,
        focusAbove: n,
        focusBelow: a,
        numColumns: o,
        onEmoji: l,
        onEmojiFocus: s,
        ref: r,
        allowVariantPrompt: t.sectionId !== c.SECTIONS.RECENT,
        displayLocation: d
      });
    default:
      t.kind;
      throw (0, v.default)(`Invalid row kind: ${t.kind}`);
  }
}
function O(e, t) {
  const {
    initialScrollTop: n,
    onEmojiFocus: a,
    onScroll: s,
    onSection: c,
    onFocusUp: d,
    onEmoji: v,
    searchInputVisible: _,
    width: b,
    data: O,
    showTitles: k,
    displayLocation: D
  } = e;
  const I = (0, C.default)(() => new Map());
  const R = (0, C.default)(() => new p.default());
  const N = (0, y.useRef)(null);
  const x = (0, y.useRef)(null);
  const L = (0, y.useRef)(null);
  const j = e => {
    const t = L.current;
    if (t) {
      a(e, t);
    }
  };
  const B = () => function (e) {
    return Math.floor((e - i.SIDE_MARGIN * 2 - w) / i.EMOJI_WIDTH);
  }(b);
  const F = (0, r.default)(e => {
    let t = M;
    const n = {};
    const a = [];
    e.data.forEach((r, o) => {
      let {
        sectionId: l,
        emojis: s
      } = r;
      let c = 0;
      const d = t;
      if (s.length === 0) {
        return;
      }
      if (e.showTitles) {
        a.push({
          kind: "title",
          itemKey: `section_${l}_title`,
          index: a.length,
          title: T[l](),
          sectionId: l,
          height: S,
          offsetTop: t
        });
        c += S;
        t += S;
      }
      const f = (0, E.default)(s, e.numColumns);
      const p = o === O.length - 1;
      f.forEach((e, n) => {
        let r = n === f.length - 1 && !p ? i.EMOJI_HEIGHT + (0, h.getIntFromStylesProp)(u.default, "-section-bottom-margin") : i.EMOJI_HEIGHT;
        if (D === m.DisplayLocation.Reactions) {
          r += 6;
        }
        a.push({
          kind: "emojis",
          itemKey: `section_${l}_emoji_${n}`,
          index: a.length,
          emojis: e,
          sectionId: l,
          height: r,
          offsetTop: t
        });
        c += r;
        t += r;
      });
      n[l] = {
        height: c,
        offsetTop: d
      };
    });
    return {
      rows: a,
      sectionData: n
    };
  });
  const G = () => F({
    numColumns: B(),
    data: O,
    showTitles: k
  });
  const U = e => {
    const {
      rows: t
    } = G();
    return t.map(e => e.kind === "emojis" ? e : null).filter(Boolean).find(t => t.offsetTop + t.height > e);
  };
  const W = e => {
    const t = U(e + (_ ? M : 0));
    if (t) {
      return t.sectionId;
    }
  };
  const H = () => {
    x.current = null;
    if (!L.current) {
      return;
    }
    const e = L.current.scrollTop;
    if (!(s == null)) {
      s(e);
    }
    const t = W(e);
    if (t) {
      if (!(c == null)) {
        c(t);
      }
    }
  };
  const V = () => {
    if (!x.current) {
      x.current = window.requestAnimationFrame(H);
    }
  };
  const q = (e, t, n) => {
    const {
      rows: a
    } = G();
    const r = function (e, t, n) {
      const a = n < 0 ? -1 : 1;
      let r = t + n;
      for (; r >= 0 && r < e.length;) {
        const t = e[r];
        if (t.kind === "emojis") {
          return t;
        }
        r += a;
      }
    }(a, e, t);
    if (!r) {
      return;
    }
    const o = I.current.get(r.itemKey);
    if (o) {
      o.focusEmojiAt(n);
    }
  };
  const Y = e => {
    if (!L.current) {
      return;
    }
    const t = L.current.scrollTop + e;
    const n = U(t);
    if (!n) {
      return;
    }
    return I.current.get(n.itemKey);
  };
  const z = e => {
    const t = Y(e || 0);
    if (t) {
      t.focusEmojiAt(0);
    }
  };
  const K = (e, t) => {
    const n = L.current;
    if (!n) {
      return Promise.resolve();
    }
    const {
      sectionData: a
    } = G();
    const r = a[e];
    if (!r) {
      return Promise.resolve();
    }
    const l = r.offsetTop;
    if (n.scrollTop === l) {
      return Promise.resolve();
    }
    if (N.current) {
      if (N.current.sectionId === e) {
        return N.current.promise;
      }
      (0, g.default)(N.current.scrollTarget, "stop");
    }
    if (n.scrollTop === l) {
      return Promise.resolve();
    }
    const i = document.createElement("div");
    i.style.position = "absolute";
    i.style.top = `${l + (t || 0)}px`;
    i.style.left = "0px";
    n.appendChild(i);
    const u = (0, g.default)(i, "scroll", {
      container: n,
      duration: 300,
      easing: [0.99, 0.13, 0.13, 0.99]
    }).then(() => {}).then(() => (0, o.delayMs)(100));
    N.current = {
      promise: u,
      sectionId: e,
      scrollTarget: i
    };
    u.finally(() => {
      var e;
      n.removeChild(i);
      if (((e = N.current) === null || e === undefined ? undefined : e.promise) === u) {
        N.current = null;
      }
    });
    return u;
  };
  const Q = () => {
    if (L.current) {
      L.current.scrollTop = 0;
    }
  };
  const X = e => {
    const t = Y(e || 0);
    if (t) {
      t.selectFirstEmoji();
    }
  };
  (0, y.useImperativeHandle)(t, () => ({
    focusFirstVisibleEmoji: z,
    scrollToSection: K,
    scrollToTop: Q,
    selectFirstVisibleEmoji: X
  }));
  (0, y.useEffect)(() => {
    if (L.current && L.current.scrollTop !== n) {
      L.current.scrollTop = n;
    }
    G();
  }, []);
  const {
    rows: Z
  } = G();
  const J = Math.min(Z.length, 3);
  let $;
  if (e.onScroll || e.onSection) {
    $ = V;
  }
  return y.default.createElement(f.default, {
    onScroll: $,
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [u.default.container]: true
    }),
    ref: L,
    flatListControllers: [R.current]
  }, y.default.createElement(A, {
    data: Z,
    reorderAnimationsEnabled: false,
    forceConsistentRenderCount: false,
    flatListController: R.current,
    direction: "vertical",
    extraItems: J,
    initialScrollFromStart: e.initialScrollTop,
    renderItem: e => y.default.createElement(P, {
      row: e,
      focusAbove: t => {
        if (k && e.index === 1 || !k && e.index === 0) {
          if (!(d == null)) {
            d();
          }
        }
        q(e.index, -1, t);
      },
      focusBelow: t => {
        q(e.index, 1, t);
      },
      onRef: t => {
        if (t) {
          I.current.set(e.itemKey, t);
        } else {
          I.current.delete(e.itemKey);
        }
      },
      numColumns: B(),
      onEmoji: v,
      onEmojiFocus: j,
      displayLocation: D
    })
  }));
}
const k = (0, y.forwardRef)(O);
exports.EmojiSectionScrollList = k;
k.displayName = "EmojiSectionScrollList";