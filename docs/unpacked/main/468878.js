var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEMES = exports.MenuTab = undefined;
var r = require("../app/396574.js");
var o = a(require("../app/335540.js"));
var l = a(require("./826426.js"));
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = {
  CAROUSEL: "CAROUSEL",
  CAROUSEL_END: "CAROUSEL_END",
  MENU: "MENU",
  NONE: "NONE"
};
exports.THEMES = s;
const c = (0, i.forwardRef)(function (e, t) {
  const {
    theme: n,
    title: a,
    selected: u,
    showFocusIndicator: c,
    width: d,
    transform: f,
    children: p,
    testid: m,
    role: h = "button"
  } = e;
  const g = (0, i.useRef)();
  const E = () => !!document.activeElement && g.current === document.activeElement;
  const v = () => {
    if (g == null ? undefined : g.current) {
      if (!E()) {
        o.default.focus(g.current);
      }
    }
  };
  (0, i.useImperativeHandle)(t, () => ({
    hasFocus: E,
    focus: v
  }));
  const _ = (0, i.useMemo)(() => ({
    width: d,
    transform: f
  }), [d, f]);
  return i.default.createElement("div", {
    ref: t => {
      var n;
      g.current = t;
      if (!((n = e.onRef) === null || n === undefined)) {
        n.call(e, t);
      }
    },
    role: h,
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [l.default.menu]: n === s.MENU,
      [l.default.carousel]: n === s.CAROUSEL || n === s.CAROUSEL_END,
      [l.default.carouselEnd]: n === s.CAROUSEL_END,
      [l.default.selected]: u,
      [l.default.highlightOnFocus]: c,
      [l.default.tab]: true
    }),
    onClick: t => {
      var n;
      if (!((n = e.onClick) === null || n === undefined)) {
        n.call(e, e.sectionId, t);
      }
    },
    style: _,
    title: a,
    tabIndex: "0"
  }, p);
});
exports.MenuTab = c;
c.displayName = "MenuTab";