var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = function (e) {
  const {
    children: t,
    tooltip: n,
    tooltipPosition: r = p.PopoverPosition.Start,
    tooltipAlignment: f = p.PopoverAlignment.Center,
    type: h = "text",
    disabled: S = false,
    theme: v,
    action: T,
    testid: M,
    tabIndex: A,
    addSpacing: b = false,
    ariaLabel: C,
    selected: P = false,
    pillText: O,
    showTooltipOnOverflow: I = false,
    fixedHeight: R = true
  } = e;
  const [N, D] = (0, _.useState)(false);
  const [w, L] = (0, _.useState)(false);
  const k = (0, _.useRef)();
  const G = (0, _.useRef)(null);
  const U = (0, m.default)();
  const x = () => {
    if (k.current == null) {
      return false;
    }
    const e = k.current.style.overflow;
    if (!(e && e !== "visible")) {
      k.current.style.overflow = "hidden";
    }
    const t = k.current.clientWidth < k.current.scrollWidth || k.current.clientHeight < k.current.scrollHeight;
    k.current.style.overflow = e;
    return t;
  };
  let B;
  if (n != null || x() && I) {
    let e;
    let i = r;
    if (n != null) {
      e = n;
    } else if (n == null && (0, u.isStringOrFbt)(t) && x()) {
      e = t;
      i = p.PopoverPosition.Bottom;
    }
    B = _.default.createElement(p.HoverTooltip, {
      targetRef: G,
      position: i,
      alignment: f,
      buffer: 8
    }, e);
  }
  const F = e => {
    if (!T) {
      return;
    }
    if (!(T(e) === false)) {
      if (U) {
        U.requestDismiss();
      }
    }
  };
  const j = e => {
    if (!e.repeat) {
      F(e);
    }
  };
  const Y = (0, u.isStringOrFbt)(t) || b ? _.default.createElement("div", {
    ref: k,
    className: (0, o.classnamesConvertMeToStylexPlease)(s.default.ellipsify, s.default.action, {
      [s.default.compact]: v === y.COMPACT,
      [s.default.fixedHeight]: R
    }, (0, g.default)(e.xstyle)),
    role: "button",
    "aria-label": C != null ? C : t
  }, t, P && _.default.createElement(a.CheckmarkIcon, {
    className: s.default.checkmark,
    color: d.SvgColorProp.TEAL
  }), O != null ? _.default.createElement(c.Pill, {
    inline: true
  }, O) : null) : t;
  const K = (0, o.classnamesConvertMeToStylexPlease)({
    [s.default.hover]: N || w,
    [s.default.text]: h === "text" || h === "attach-menu-popup",
    [s.default.emoji]: h === "emoji" || h === "emoji-grid" || h === "emoji-preview",
    [s.default.emojiGrid]: h === "emoji-grid",
    [s.default.emojiPreview]: h === "emoji-preview",
    [s.default.icon]: h === "icon",
    [s.default.disabled]: S || v === y.MUTED,
    [s.default.item]: true,
    [s.default.shortcut]: true,
    [s.default.attachMenuPopup]: h === "attach-menu-popup"
  });
  const W = S ? {} : {
    handlers: {
      enter: j,
      space: j
    },
    onContextMenu: E,
    onMouseDown: E,
    onClick: e => {
      F(e);
    },
    onMouseEnter: () => {
      D(true);
    },
    onMouseLeave: () => {
      D(false);
    },
    onFocus: () => {
      L(true);
    },
    onBlur: () => {
      L(false);
    }
  };
  return _.default.createElement(l.HotKeys, (0, i.default)({
    ref: G,
    component: "li",
    className: K,
    "data-animate-dropdown-item": true,
    tabIndex: A != null ? A : 0
  }, W), Y, B);
};
exports.ThemeOptions = undefined;
var i = r(require("../vendor/967154.js"));
var a = require("./731971.js");
var o = require("./396574.js");
var s = r(require("./597357.js"));
var l = require("./81644.js");
var u = require("./317259.js");
var c = require("./90725.js");
var d = require("./220584.js");
var p = require("./258290.js");
var f = r(require("./599001.js"));
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var g = r(require("./156720.js"));
var m = r(require("./321201.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = (0, f.default)({
  COMPACT: null,
  MUTED: null
});
function E(e) {
  e.preventDefault();
}
exports.ThemeOptions = y;