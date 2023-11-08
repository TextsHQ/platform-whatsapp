var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuBar = function (e) {
  const t = (0, o.classnamesConvertMeToStylexPlease)({
    [l.default.menuDefault]: !e.theme,
    [l.default.menuStrong]: e.theme === "strong",
    [l.default.menuInverse]: e.theme === "inverse",
    [l.default.menuMediaEditor]: e.theme === "media-editor",
    [l.default.navBar]: e.theme === "nav-bar",
    [l.default.menu]: true
  });
  return c.default.createElement("div", {
    className: t
  }, e.children);
};
exports.MenuBarItem = undefined;
var r = a(require("../vendor/967154.js"));
var o = require("../app/396574.js");
var l = a(require("./577585.js"));
var i = require("../app/392632.js");
var u = require("../app/676345.js");
var s = a(require("../app/844453.js"));
var c = function (e, t) {
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
var d = a(require("../app/156720.js"));
var f = a(require("../app/576191.js"));
var p = a(require("../app/38085.js"));
var m = a(require("../app/83233.js"));
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
const g = {
  iconContainer: {
    transitionProperty: "bo8jc6qi",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "brjalhku"
  },
  rotateIcon: {
    transform: "b4a78re4"
  }
};
const E = (0, c.forwardRef)((e, t) => {
  const {
    text: n,
    transitionName: a = "dropdown",
    disabled: h = false,
    children: E,
    icon: v,
    title: _,
    selected: y,
    testid: C,
    theme: b,
    vertical: M,
    xstyle: S,
    buttonStyle: T,
    onTransitionStart: w,
    onTransitionEnd: A
  } = e;
  const [P, O] = (0, c.useState)(false);
  const k = E != null && P ? c.default.createElement(i.UIE, {
    displayName: "MenuBarMenuItem",
    escapable: true,
    popable: true,
    dismissOnWindowResize: true,
    requestDismiss: t => {
      var n;
      if (!(A == null)) {
        A();
      }
      O(false);
      if (!((n = e.onClose) === null || n === undefined)) {
        n.call(e, t);
      }
    }
  }, E) : null;
  const D = (0, o.classnamesConvertMeToStylexPlease)((0, d.default)(S), l.default.item, {
    [l.default.selected]: y,
    [l.default.active]: P,
    [l.default.disabled]: h,
    [l.default.menuBarItemForceSize]: b === "force-size",
    [l.default.vertical]: M
  });
  const [I, R] = (0, m.default)(t => {
    var n;
    if (!(e.onClick && e.onClick(t), t.isDefaultPrevented())) {
      t.preventDefault();
      if (!P) {
        if (!(w == null)) {
          w();
        }
        if (E != null) {
          O(true);
          if (!((n = e.onOpen) === null || n === undefined)) {
            n.call(e);
          }
        }
      }
    }
  }, {
    disabled: h
  });
  const [N, x] = (0, f.default)();
  const L = (0, p.default)(I, N);
  return c.default.createElement("div", {
    ref: t,
    className: D
  }, c.default.createElement("div", (0, r.default)({}, R, {
    className: (0, o.classnamesConvertMeToStylexPlease)(l.default.button, {
      [l.default.itemFocused]: x
    }, (0, d.default)([u.uiPadding.all8, T])),
    "data-tab": h ? undefined : e.tabOrder,
    title: _,
    "aria-label": _,
    ref: L
  }), b === "attach-menu-redesign" ? c.default.createElement("div", {
    className: (0, d.default)(g.iconContainer, P && g.rotateIcon)
  }, v) : v, n && c.default.createElement("span", {
    className: l.default.itemText
  }, n)), c.default.createElement(s.default, {
    transitionName: a
  }, k));
});
exports.MenuBarItem = E;
E.displayName = "MenuBarItem";