var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipColorScheme = exports.MenuType = exports.EMOJI_PICKER_WIDTH = exports.Dropdown = exports.DirY = exports.DirX = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("./670983.js"));
var o = require("./763614.js");
var s = require("./396574.js");
var l = require("./780549.js");
var u = require("./474296.js");
var c = r(require("./727028.js"));
var d = r(require("./988410.js"));
var p = r(require("./335540.js"));
var f = require("./81644.js");
var _ = r(require("./932325.js"));
var g = require("./97858.js");
var m = require("./152189.js");
var h = function (e, t) {
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
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var y = r(require("./38085.js"));
var E = r(require("./321201.js"));
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
const v = (0, m.getIntFromStylesProp)(c.default, "-emoji-picker-width");
exports.EMOJI_PICKER_WIDTH = v;
const T = require("../vendor/76672.js").Mirrored(["Dropdown", "DropdownMenu", "DropdownText", "AttachMenu", "Picker", "EmojiPicker", "StickerPicker", "ColorPicker", "LabelColorPicker", "Tooltip", "ReactionDetailsPane", "ReactionSendTray", "ReactionPicker", "DatePicker", "Suggestions", "AttachMenuPopup", "ExpressionsPanel"]);
exports.MenuType = T;
const M = require("../vendor/76672.js").Mirrored(["Default", "Highlight"]);
exports.TooltipColorScheme = M;
const A = require("../vendor/76672.js").Mirrored(["LEFT", "CENTER", "RIGHT"]);
exports.DirX = A;
const b = require("../vendor/76672.js").Mirrored(["TOP", "BOTTOM"]);
function C(e) {
  switch (e) {
    case A.RIGHT:
      return A.LEFT;
    case A.LEFT:
      return A.RIGHT;
    case A.CENTER:
      return A.CENTER;
  }
}
function P(e, t, n) {
  if (e !== A.CENTER || t == null || n == null) {
    return null;
  } else {
    return {
      left: t.offsetWidth / 2 - n.offsetWidth / 2
    };
  }
}
exports.DirY = b;
const O = (0, h.forwardRef)((e, t) => {
  const {
    type: n = T.Dropdown,
    dirX: r = A.RIGHT,
    dirY: m = b.BOTTOM,
    children: S,
    flipOnRTL: v,
    origin: O,
    style: R,
    horizontal: N,
    isTemporaryRender: D,
    autoFocus: w,
    findFirstItem: L,
    onDefault: k,
    testid: G,
    tooltipColorScheme: U
  } = e;
  const [x, B] = (0, h.useState)(false);
  const [F, j] = (0, h.useState)(null);
  const Y = (0, h.useRef)(null);
  const K = (0, h.useRef)();
  const W = (0, h.useRef)();
  const V = (0, y.default)(t, Y);
  const H = (0, E.default)();
  const $ = (0, h.useMemo)(() => n !== T.EmojiPicker && n !== T.Suggestions && n !== T.ReactionDetailsPane && n !== T.ReactionSendTray && n !== T.StickerPicker && n !== T.DatePicker && n !== T.ColorPicker && n !== T.LabelColorPicker && n !== T.ReactionPicker && n !== T.DropdownText, [n]);
  (0, h.useEffect)(() => {
    if ($) {
      if (w) {
        var e;
        const t = (e = W.current) === null || e === undefined ? undefined : e.querySelector("[tabindex]");
        let n;
        if (L && t || W.current && W.current.firstChild instanceof HTMLDivElement && t) {
          n = t;
        } else if (W.current && W.current.children.length > 0) {
          n = W.current.children[0];
        } else if (S != null) {
          __LOG__(3, undefined, undefined, true)`React components are not focusable elements`;
          SEND_LOGS("unfocusable-react-components-in-dropdown");
          n = h.Children.toArray(S)[0];
        }
        p.default.focus(n);
        B(true);
        j(n);
      } else {
        p.default.focus(Y.current);
      }
    }
  }, []);
  (0, h.useEffect)(() => {
    if (W.current && Y.current && !D) {
      l.Cmd.floaterEscapeOverlap(Y.current, 10);
    }
  }, [D]);
  const z = (0, h.useMemo)(() => {
    const e = {};
    const t = R != null ? R : {};
    const [n, a] = function (e, t, n) {
      return [n && _.default.isRTL() ? C(e) : e, t];
    }(r, m, v);
    e[(0, u.compatPrefix)("transformOrigin")] = function (e, t) {
      const n = C(e);
      return `${t === b.TOP ? b.BOTTOM : b.TOP} ${n}`;
    }(n, a);
    if (!O) {
      return (0, i.default)((0, i.default)({}, t), e);
    }
    const o = function (e, t, n, r) {
      var i;
      var a;
      const o = {};
      switch (e) {
        case A.RIGHT:
          o.left = Math.min(window.innerWidth - ((i = r == null ? undefined : r.offsetWidth) !== null && i !== undefined ? i : 0) - 32, n.x);
          break;
        case A.LEFT:
          o.right = window.innerWidth - n.x;
          break;
        case A.CENTER:
          o.left = n.x - ((a = r == null ? undefined : r.offsetWidth) !== null && a !== undefined ? a : 0) / 2;
          o.marginLeft = 0;
          o.marginRight = 0;
      }
      switch (t) {
        case b.BOTTOM:
          {
            o.top = n.y;
            const e = r == null ? undefined : r.offsetHeight;
            if (e != null) {
              const t = window.innerHeight - e - 32;
              o.top = Math.min(t, n.y);
              if (o.top < 0) {
                o.top = 0;
                o.height = window.innerHeight - 32;
                o.overflowY = "auto";
              }
            }
            break;
          }
        case b.TOP:
          o.bottom = window.innerHeight - n.y;
      }
      return o;
    }(n, a, O, Y.current);
    return (0, i.default)((0, i.default)((0, i.default)({}, t), e), o);
  }, [r, m, v, O, R]);
  const q = () => {
    p.default.focus(Y.current);
    B(false);
  };
  const J = (e, t) => {
    const n = (t < 0 ? e.length - 1 : t) % e.length;
    p.default.focus(e[n]);
    B(true);
    j(e[n]);
  };
  const Q = () => {
    const e = Array.from((0, a.default)(W.current, "listRef.current").querySelectorAll("li:not(.dropdown-item-disabled)"));
    return {
      activeChildren: e,
      currentlyFocusedIndex: e.indexOf(F)
    };
  };
  const X = e => {
    I(e);
    const {
      activeChildren: t,
      currentlyFocusedIndex: n
    } = Q();
    if (t.length !== 0) {
      J(t, n - 1);
    }
  };
  const Z = e => {
    I(e);
    const {
      activeChildren: t,
      currentlyFocusedIndex: n
    } = Q();
    if (t.length !== 0) {
      J(t, n + 1);
    }
  };
  const ee = e => {
    I(e);
    const {
      activeChildren: t,
      currentlyFocusedIndex: n
    } = Q();
    if (t.length === 0) {
      return;
    }
    if (t.length > 12 || t.length === 6) {
      return void Z(e);
    }
    let r;
    const i = (t.length - 2) / 2;
    const a = i;
    const o = t.length - 3;
    r = n === -1 ? 0 : n >= a && n <= o ? n - i : n >= 0 && n <= i - 1 ? n : a;
    J(t, r);
  };
  const te = e => {
    I(e);
    const {
      activeChildren: t,
      currentlyFocusedIndex: n
    } = Q();
    if (t.length === 0) {
      return;
    }
    if (t.length > 12 || t.length === 6) {
      return void X(e);
    }
    let r;
    const i = (t.length - 2) / 2;
    const a = t.length - 3;
    r = n >= i && n <= a ? a + 1 : n >= 0 && n <= i - 1 ? n + i : n;
    J(t, r);
  };
  const ne = e => {
    e.preventDefault();
    if (!(H == null)) {
      H.requestDismiss();
    }
  };
  const re = e => {
    if (k) {
      d.default.shouldIndicateFocus();
      if (!(H == null)) {
        H.requestDismiss();
      }
      k(e);
    }
  };
  const ie = e => {
    e.stopPropagation();
    p.default.focus(Y.current);
    j(undefined);
  };
  const ae = (0, s.classnamesConvertMeToStylexPlease)({
    [c.default.container]: n === T.Dropdown || n === T.DropdownMenu || n === T.EmojiPicker || n === T.StickerPicker || n === T.ColorPicker || n === T.LabelColorPicker || n === T.ReactionDetailsPane || n === T.ReactionSendTray || n === T.ReactionPicker || n === T.DatePicker || n === T.Suggestions || n === T.DropdownText || n === T.AttachMenuPopup || n === T.ExpressionsPanel,
    [c.default.right]: n === T.DropdownMenu,
    [c.default.attachMenu]: n === T.AttachMenu,
    [c.default.picker]: n === T.Picker,
    [c.default.emoji]: n === T.EmojiPicker,
    [c.default.sticker]: n === T.StickerPicker,
    [c.default.colorPicker]: n === T.ColorPicker,
    [c.default.labelColorPicker]: n === T.LabelColorPicker,
    [c.default.reactionDetails]: n === T.ReactionDetailsPane,
    [c.default.reactionSendTray]: n === T.ReactionSendTray,
    [c.default.reactionPicker]: n === T.ReactionPicker,
    [c.default.datePicker]: n === T.DatePicker,
    [c.default.suggestions]: n === T.Suggestions,
    [c.default.attachMenuPopup]: n === T.AttachMenuPopup,
    [c.default.expressionsPanel]: n === T.ExpressionsPanel,
    [c.default.expressionsPanelInsideInput]: n === T.ExpressionsPanel && !(0, o.shouldShowExpressionPanelsOutOfInput)(),
    [c.default.expressionsPanelOutsideInput]: n === T.ExpressionsPanel && (0, o.shouldShowExpressionPanelsOutOfInput)(),
    [c.default.text]: n === T.DropdownText,
    [c.default.tooltip]: n === T.Tooltip,
    [c.default.tooltipHighlight]: U === M.Highlight,
    [c.default.inverse]: (n === T.Picker || n === T.EmojiPicker || n === T.StickerPicker || n === T.ColorPicker || n === T.LabelColorPicker || n === T.ReactionDetailsPane || n === T.ReactionSendTray || n === T.ReactionPicker || n === T.DatePicker || n === T.DropdownText || n === T.Tooltip) && r === A.LEFT,
    [c.default.inverseVertical]: (n === T.EmojiPicker || n === T.StickerPicker || n === T.ColorPicker || n === T.LabelColorPicker || n === T.ReactionDetailsPane || n === T.ReactionSendTray || n === T.ReactionPicker || n === T.DatePicker || n === T.DropdownText) && m === b.TOP
  });
  const oe = n === T.Picker || n === T.EmojiPicker || n === T.StickerPicker || n === T.LabelColorPicker || n === T.DropdownText || n === T.Tooltip ? h.default.createElement("div", {
    ref: K,
    className: c.default.nib,
    "data-animate-dropdown-nib": true,
    style: P(r, Y.current, K.current)
  }) : null;
  if ($) {
    const e = {
      enter: re,
      tab: I,
      "shift+tab": I,
      up: () => {},
      down: () => {}
    };
    let t;
    let r;
    if ((0, g.multiSkinToneEmojiPickerEnabled)() && n === T.Picker) {
      if (_.default.isRTL()) {
        t = te;
        r = ee;
      } else {
        t = ee;
        r = te;
      }
    } else {
      t = X;
      r = Z;
    }
    if (N) {
      e[_.default.LR("left", "right")] = X;
      e[_.default.LR("right", "left")] = Z;
      e[_.default.LR("up", "down")] = t;
      e[_.default.LR("down", "up")] = r;
    } else {
      if (n === T.AttachMenu) {
        e.up = Z;
        e.down = X;
      } else {
        e.up = X;
        e.down = Z;
      }
      if (n !== T.ExpressionsPanel) {
        e[_.default.LR("left", "right")] = ne;
        e[_.default.LR("right", "left")] = re;
      }
    }
    return h.default.createElement(f.HotKeys, {
      ref: V,
      handlers: e,
      role: "application",
      className: ae,
      style: z,
      onMouseMove: x ? q : null,
      onMouseUp: ie
    }, h.default.createElement("ul", {
      ref: W,
      className: c.default.items
    }, S), oe);
  }
  return h.default.createElement("div", {
    ref: V,
    className: ae,
    style: z
  }, S, oe);
});
function I(e) {
  e.stopPropagation();
  e.preventDefault();
}
exports.Dropdown = O;
O.displayName = "Dropdown";