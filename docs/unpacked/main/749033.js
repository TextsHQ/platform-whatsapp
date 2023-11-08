var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIDE_MARGIN = exports.EmojiRow = exports.EMOJI_WIDTH = exports.EMOJI_HEIGHT = undefined;
var r = require("../app/396574.js");
var o = require("../app/780549.js");
var l = require("../app/664149.js");
var i = require("../app/70354.js");
var u = a(require("../app/225148.js"));
var s = a(require("./808480.js"));
var c = a(require("./276560.js"));
var d = require("../app/152285.js");
var f = a(require("../app/335540.js"));
var p = require("../app/81644.js");
var m = a(require("../app/932325.js"));
var h = require("../app/97858.js");
var g = require("./833654.js");
var E = a(require("./283547.js"));
var v = require("../app/370308.js");
var _ = require("./414493.js");
var y = require("../app/152189.js");
var C = require("../app/392632.js");
var b = a(require("./733712.js"));
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
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
var S = a(require("../app/969651.js"));
var T = require("../app/808446.js");
var w = a(require("../app/17533.js"));
var A = require("../app/441673.js");
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const O = (0, y.getIntFromStylesProp)(s.default, "-side-margin");
exports.SIDE_MARGIN = O;
const k = (0, y.getIntFromStylesProp)(s.default, "-emoji-height");
exports.EMOJI_HEIGHT = k;
const D = (0, y.getIntFromStylesProp)(s.default, "-emoji-width");
function I(e, t) {
  const {
    emojis: n,
    allowVariantPrompt: a,
    onEmoji: v,
    focusBelow: y,
    focusAbove: P,
    numColumns: O,
    onEmojiFocus: k,
    displayLocation: D
  } = e;
  const I = (0, S.default)();
  const [R] = (0, T.useAddListenerOnce)();
  const L = (0, M.useRef)(null);
  const j = (0, M.useRef)(null);
  const B = (0, M.useRef)(null);
  const F = (0, M.useRef)(null);
  const G = (0, M.useRef)(false);
  const U = (0, M.useRef)(null);
  const [W, H] = (0, M.useState)(null);
  const V = D === g.DisplayLocation.Reactions;
  const q = (0, M.useContext)(E.default);
  const Y = (e, t) => {
    let n = e;
    if (i.EmojiUtil.getSkinToneBase(n)) {
      let r = d.EmojiVariantCollection.getVariantIfExists(n);
      if (V) {
        if (t != null) {
          const e = i.EmojiUtil.normalizeEmojiFromString(t);
          r = e != null ? e : n;
        } else {
          const t = x(e);
          if (t != null) {
            r = t;
          }
        }
      }
      if (r != null) {
        n = r;
      } else if (a) {
        return true;
      }
    }
    v(n);
  };
  const z = (e, t, n) => {
    if ((0, h.multiSkinToneEmojiPickerEnabled)()) {
      H(null);
    }
    (0, _.stopEvent)(e);
    if (!V) {
      d.EmojiVariantCollection.setVariant(t, n);
    }
    Y(t, n);
  };
  const K = (e, t, n) => {
    const a = i.EmojiUtil.getSkinToneBase(e);
    if (a) {
      U.current = e;
      G.current = true;
      H({
        menu: M.default.createElement(c.default, {
          base: a,
          action: z,
          unicode: e,
          preVariant: t.dataset.emoji
        }),
        anchor: t,
        type: l.MenuType.Picker,
        dirX: l.DirX.RIGHT,
        dirY: l.DirY.TOP,
        horizontal: true,
        autoFocus: n,
        findFirstItem: true
      });
    }
  };
  const [Q, X] = (0, A.useTimeout)(() => {
    if (B.current != null && F.current != null) {
      K(B.current, F.current);
    }
    R(o.Cmd, "window_click", _.stopEvent);
  }, 250);
  const Z = e => {
    const t = parseInt(e.dataset.emojiIndex, 10);
    if (!isNaN(t)) {
      f.default.focus(e, {
        preventScroll: true
      });
      k(e);
      j.current = e;
    }
  };
  const J = (0, w.default)(() => {
    if (G.current) {
      G.current = false;
    }
    const e = W == null ? undefined : W.anchor;
    if (e && e instanceof HTMLElement) {
      Z(e);
    }
    H(null);
  });
  const $ = e => {
    const t = N(e);
    if (t == null) {
      return;
    }
    const a = n[t];
    return a || null;
  };
  const ee = e => {
    const t = n.length - 1;
    const a = Math.max(Math.min(e, t), 0);
    if (L.current != null) {
      return L.current.children[a];
    }
  };
  const te = e => {
    if (e == null) {
      return;
    }
    const t = n[e];
    if (!t) {
      return;
    }
    const a = ee(e);
    if (!a) {
      return;
    }
    X();
    if (Y(t)) {
      K(t, a, true);
    }
  };
  const ne = e => {
    const t = ee(e);
    if (t) {
      Z(t);
    }
  };
  const ae = e => {
    (0, _.stopEvent)(e);
    const t = N(e);
    if (t == null) {
      return;
    }
    const n = t - 1;
    if (n < 0) {
      P(O - 1);
    } else {
      ne(n);
    }
  };
  const re = e => {
    (0, _.stopEvent)(e);
    const t = N(e);
    if (t == null) {
      return;
    }
    const a = t + 1;
    if (a >= n.length) {
      if (!(y == null)) {
        y(0);
      }
    } else {
      ne(a);
    }
  };
  const oe = e => {
    (0, _.stopEvent)(e);
    const t = N(e);
    te(t);
  };
  const le = () => {
    te(0);
  };
  const ie = () => {
    if (j.current) {
      Z(j.current);
    }
  };
  let ue;
  (0, T.useListener)(d.EmojiVariantCollection, ["add", "remove", "change:variant"], I);
  (0, M.useImperativeHandle)(t, () => ({
    focusEmojiAt: ne,
    selectFirstEmoji: le,
    restoreFocus: ie
  }));
  if (W) {
    ue = M.default.createElement(C.UIE, {
      displayName: "SkinTonePicker",
      popable: true,
      escapable: true,
      dismissOnWindowResize: true,
      requestDismiss: J,
      requestRecentFocusOnUnmount: false
    }, M.default.createElement(b.default, {
      tooltip: W
    }));
  }
  if (!n.length) {
    return null;
  }
  let se = null;
  if (q != null) {
    se = i.EmojiUtil.getEmojiAggregate(q);
  }
  return M.default.createElement("div", {
    className: s.default.panel
  }, M.default.createElement(p.HotKeys, {
    onMouseDown: e => {
      (0, _.stopEvent)(e);
      H(null);
      const t = e.target;
      if (!(t instanceof HTMLElement)) {
        return;
      }
      const n = $(e);
      if (n) {
        ((e, t) => {
          B.current = e;
          F.current = t;
          Q();
          R(window, "mouseup", X, {
            capture: true
          });
        })(n, t);
      }
    },
    onClick: e => {
      (0, _.stopEvent)(e);
      const t = N(e);
      if ($(e) != null && U.current != null && U.current !== $(e)) {
        te(t);
        U.current = $(e);
        G.current = false;
      } else if (G.current) {
        G.current = false;
      } else {
        te(t);
      }
    },
    onContextMenu: e => {
      (0, _.stopEvent)(e);
      const t = $(e);
      if (t && e.target instanceof HTMLElement) {
        K(t, e.target);
      }
    },
    tabIndex: null,
    handlers: {
      up: e => {
        (0, _.stopEvent)(e);
        const t = N(e);
        if (t != null) {
          P(t);
        }
      },
      down: e => {
        (0, _.stopEvent)(e);
        const t = N(e);
        if (t != null && y) {
          y(t);
        }
      },
      left: e => {
        if (m.default.isRTL()) {
          re(e);
        } else {
          ae(e);
        }
      },
      right: e => {
        if (m.default.isRTL()) {
          ae(e);
        } else {
          re(e);
        }
      },
      enter: oe,
      space: oe
    }
  }, M.default.createElement("div", {
    ref: L,
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [s.default.reactionPanelSection]: D === g.DisplayLocation.Reactions,
      [s.default.section]: true
    }),
    role: "row"
  }, n.map((e, t) => {
    let n = d.EmojiVariantCollection.getVariantIfExists(e);
    let a = false;
    if (V) {
      a = i.EmojiUtil.getEmojiAggregate(e) === se;
      const t = x(e);
      if (t != null) {
        n = t;
      }
    }
    const o = M.default.createElement(u.default, {
      element: "span",
      emoji: n || e,
      size: "large",
      key: e,
      tabIndex: "-1",
      "data-emoji-index": t
    });
    if (V) {
      return M.default.createElement("div", {
        tabIndex: "-1",
        key: e,
        role: "gridcell",
        "aria-label": e,
        "data-emoji-index": t,
        className: (0, r.classnamesConvertMeToStylexPlease)({
          [s.default.selectedReactionEmoji]: a,
          [s.default.emojiContainer]: true,
          [s.default.notSelectedReactionContainer]: !a
        })
      }, o);
    } else {
      return o;
    }
  }))), ue);
}
exports.EMOJI_WIDTH = D;
const R = (0, M.forwardRef)(I);
function N(e) {
  if (!(e.target instanceof HTMLElement)) {
    return null;
  }
  const t = parseInt(e.target.dataset.emojiIndex, 10);
  if (isNaN(t)) {
    return null;
  } else {
    return t;
  }
}
function x(e) {
  const t = i.EmojiUtil.getEmojiAggregate(e);
  const n = v.RecentReactionsCollection.get(t);
  if (n) {
    return i.EmojiUtil.normalizeEmojiFromString(n.reactionText);
  }
}
exports.EmojiRow = R;
R.displayName = "EmojiRow";