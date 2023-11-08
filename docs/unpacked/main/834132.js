var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = exports.PanelSearchInput = exports.HEIGHT = undefined;
var r = require("../app/396574.js");
var o = require("../app/306703.js");
var l = a(require("../app/988410.js"));
var i = a(require("../app/335540.js"));
var u = require("../app/81644.js");
var s = a(require("../app/932325.js"));
var c = a(require("./140000.js"));
var d = require("../main-chunk/931109.js");
var f = require("../app/368170.js");
var p = require("./268929.js");
var m = require("../vendor/548360.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
exports.HEIGHT = 56;
const E = require("../vendor/76672.js").Mirrored(["Default", "ReactionPanel", "ExpressionsPanel"]);
exports.Theme = E;
const v = (0, h.forwardRef)((e, t) => {
  const n = (0, h.useRef)();
  const a = (0, h.useRef)();
  const g = (0, h.useRef)();
  const [v, _] = (0, h.useState)(e.value || "");
  if (e.value != null && e.value !== v) {
    _(e.value);
  }
  const y = () => !!document.activeElement && n.current === document.activeElement;
  const C = e => {
    const t = n.current;
    if (t) {
      if (!y()) {
        i.default.focus(t);
        if (e) {
          l.default.indicateFocus(a.current);
        }
      }
    }
  };
  (0, h.useImperativeHandle)(t, () => ({
    focus: C,
    hasFocus: y,
    getElement: () => g.current
  }));
  const b = t => {
    var n;
    _("");
    if (!((n = e.onChange) === null || n === undefined)) {
      n.call(e, "", t);
    }
  };
  let M = null;
  if (v && !e.tabFocused) {
    M = h.default.createElement("button", {
      "aria-label": m.fbt._("Clear input", null, {
        hk: "8hPIu"
      }),
      className: c.default.cancelIcon,
      onClick: b
    }, h.default.createElement(p.XAltSmallIcon, null));
  }
  const S = e.theme === E.ReactionPanel || e.theme === E.ExpressionsPanel;
  return h.default.createElement(u.HotKeys, {
    ref: g,
    handlers: {
      enter: t => {
        var n;
        t.preventDefault();
        t.stopPropagation();
        if (!((n = e.onEnterKey) === null || n === undefined)) {
          n.call(e, t);
        }
      },
      up: t => {
        var n;
        t.stopPropagation();
        t.preventDefault();
        if (!((n = e.onUpKey) === null || n === undefined)) {
          n.call(e, t);
        }
      },
      down: t => {
        var n;
        t.stopPropagation();
        t.preventDefault();
        if (!((n = e.onDownKey) === null || n === undefined)) {
          n.call(e, t);
        }
      }
    },
    "data-tab": d.TAB_ORDER.PANEL_SEARCH_INPUT,
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [c.default.ffFix]: f.UA.isGecko,
      [c.default.rowShadow]: e.shadow,
      [c.default.rowShadow]: e.shadow,
      [c.default.reactionPanelSearch]: S,
      [c.default.searchRow]: true
    }),
    key: "search-input",
    onFocus: e => {
      C();
      e.stopPropagation();
    },
    onMouseUp: e => {
      e.stopPropagation();
    }
  }, h.default.createElement("label", {
    ref: a,
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [c.default.reactionsRowInput]: S,
      [c.default.rowInput]: true
    })
  }, h.default.createElement("div", {
    className: c.default.inputContainer
  }, h.default.createElement("input", {
    ref: n,
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [c.default.inputReactionSearch]: S,
      [c.default.inputEmojiSearch]: true,
      [o.SELECTABLE_INPUT_CSS_CLASS]: true
    }),
    type: "text",
    role: "searchbox",
    dir: s.default.isRTL() ? "rtl" : "ltr",
    value: e.tabFocused ? "" : v,
    title: e.label,
    placeholder: e.label,
    onMouseDown: e => {
      e.stopPropagation();
    },
    onChange: t => {
      var n;
      _(t.target.value);
      if (!((n = e.onChange) === null || n === undefined)) {
        n.call(e, t.target.value, t);
      }
    }
  }), M)));
});
exports.PanelSearchInput = v;
v.displayName = "PanelSearchInput";