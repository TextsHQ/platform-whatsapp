var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiSuggestionsPanel = exports.EMOJI_WIDTH = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/780549.js");
var l = require("../app/664149.js");
var i = require("../app/70354.js");
var u = a(require("../app/225148.js"));
var s = a(require("./137491.js"));
var c = a(require("./276560.js"));
var d = require("../app/152285.js");
var f = require("../app/81644.js");
var p = require("./414493.js");
var m = require("../app/152189.js");
var h = require("../app/238669.js");
var g = require("../app/392632.js");
var E = a(require("./733712.js"));
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
var _ = a(require("../app/969651.js"));
var y = require("../app/808446.js");
var C = a(require("../app/17533.js"));
var b = require("../app/441673.js");
var M = a(require("../app/321201.js"));
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = (0, m.getIntFromStylesProp)(s.default, "-emoji-width");
exports.EMOJI_WIDTH = T;
const w = (0, v.forwardRef)((e, t) => {
  const {
    emojiList: n,
    onFocusRelease: a,
    onEmoji: m,
    onSkinTonePicker: S,
    maxWidth: w
  } = e;
  const A = (0, _.default)();
  const [P] = (0, y.useAddListenerOnce)();
  const O = (0, M.default)();
  const [k, D] = (0, v.useState)(null);
  const [I, R] = (0, v.useState)(0);
  const N = (0, v.useRef)(null);
  const x = (0, v.useRef)(null);
  const L = (0, v.useRef)(null);
  const j = e => i.EmojiUtil.getSkinToneBase(e) ? d.EmojiVariantCollection.getVariant(e) : null;
  const B = Math.floor(w / T);
  const F = Math.min(n.length, B);
  const G = e => {
    m(e);
    if (!(a == null)) {
      a();
    }
  };
  const U = (e, t, n) => {
    (0, p.stopEvent)(e);
    G(n);
    d.EmojiVariantCollection.setVariant(t, n);
    if (O) {
      O.pop(h.DismissReason.UIM_INTERACTION, false);
      O.requestDismiss();
    }
    return false;
  };
  const W = (e, t, n) => {
    q();
    const a = (0, r.default)(i.EmojiUtil.getSkinToneBase(e), "Emoji.getSkinToneBase(unicode)");
    D({
      menu: v.default.createElement(c.default, {
        base: a,
        action: U,
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
    if (!(S == null)) {
      S(true);
    }
  };
  const [H, V] = (0, b.useTimeout)(() => {
    P(o.Cmd, "window_click", p.stopEvent);
    if (x.current && N.current) {
      W(x.current, N.current);
    }
  }, 250);
  function q() {
    V();
  }
  const Y = e => {
    (0, p.stopEvent)(e);
    const t = e.target;
    if (!(t instanceof HTMLElement)) {
      return;
    }
    const n = t.dataset.unicode;
    if (n && i.EmojiUtil.getSkinToneBase(n)) {
      W(n, t);
    }
  };
  const z = (0, C.default)(() => {
    if (k) {
      D(null);
      if (!(S == null)) {
        S(false);
      }
    }
  });
  const K = () => {
    const e = (t = n[I]) !== null && t !== undefined ? t : null;
    var t;
    if (e) {
      if (i.EmojiUtil.getSkinToneBase(e)) {
        const t = j(e);
        if (t) {
          G(t);
        } else {
          const t = (e => {
            if (e < 0) {
              return;
            }
            if (!L.current) {
              return;
            }
            const t = L.current.children;
            if (e >= t.length) {
              return undefined;
            } else {
              return t[e];
            }
          })(I);
          if (t) {
            W(e, t, true);
          }
        }
      } else {
        G(e);
      }
    }
  };
  const Q = () => {
    R(Math.min(I + 1, F - 1));
  };
  const X = () => {
    R(Math.max(I - 1, 0));
  };
  let Z;
  (0, v.useEffect)(() => {
    z();
  }, [z, n]);
  (0, v.useEffect)(() => {
    R(Math.min(I, n.length - 1));
  }, [I, n]);
  (0, y.useListener)(d.EmojiVariantCollection, ["add", "remove", "change:variant"], A);
  (0, v.useImperativeHandle)(t, () => ({
    moveSelectionLeft: X,
    moveSelectionRight: Q,
    pickSelectedEmoji: K
  }));
  if (k) {
    Z = v.default.createElement(g.UIE, {
      displayName: "SkinTonePicker",
      popable: true,
      escapable: true,
      dismissOnWindowResize: true,
      requestDismiss: z
    }, v.default.createElement(E.default, {
      tooltip: k
    }));
  }
  const J = n.slice(0, F).map((e, t) => {
    const n = j(e);
    return v.default.createElement(u.default, {
      element: "span",
      emoji: n != null ? n : e,
      size: "large",
      key: e,
      "data-unicode": e,
      "data-variant": n,
      tabIndex: "-1",
      "data-emoji-index": t,
      selected: I === t && !k
    });
  });
  return v.default.createElement("div", {
    style: {
      width: F * T
    }
  }, v.default.createElement(f.HotKeys, {
    onMouseDown: e => {
      (0, p.stopEvent)(e);
      if (!(e.target instanceof HTMLElement)) {
        return;
      }
      const t = e.target.dataset.unicode;
      if (t && i.EmojiUtil.getSkinToneBase(t)) {
        (e => {
          (0, p.stopEvent)(e);
          q();
          const t = e.target;
          if (!(t instanceof HTMLElement)) {
            return;
          }
          const n = t.dataset.unicode;
          N.current = t;
          x.current = n;
          H();
          P(window, "mouseup", q, {
            capture: true
          });
        })(e);
      }
    },
    onClick: e => {
      (0, p.stopEvent)(e);
      if (!(e.target instanceof HTMLElement)) {
        return;
      }
      const t = e.target.dataset.unicode;
      if (t) {
        if (i.EmojiUtil.getSkinToneBase(t)) {
          const n = j(t);
          if (n) {
            G(n);
          } else {
            Y(e);
          }
        } else {
          G(t);
        }
      }
    },
    onContextMenu: Y
  }, v.default.createElement("div", {
    className: s.default.panel,
    ref: L
  }, J)), Z);
});
exports.EmojiSuggestionsPanel = w;
w.displayName = "EmojiSuggestionsPanel";