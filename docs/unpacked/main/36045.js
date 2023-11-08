var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerButton = function (e) {
  let {
    active: t,
    id: n
  } = e;
  let a = (0, o.default)(e, h);
  const [l, i] = (0, f.default)(t, n || "");
  return c.default.createElement(v, (0, r.default)({}, a, {
    active: i,
    ref: l
  }));
};
exports.DrawerButtonSimple = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/396574.js");
var i = a(require("./726873.js"));
var u = require("../app/317259.js");
var s = require("../app/180519.js");
var c = function (e, t) {
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
var d = a(require("../app/156720.js"));
var f = a(require("../main-chunk/928361.js"));
var p = a(require("../app/38085.js"));
var m = a(require("../app/83233.js"));
const h = ["active", "id"];
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
const E = {
  active: {
    backgroundColor: "i16jpgpt"
  },
  noDivider: {
    borderTop: "p6zpvmg4"
  }
};
const v = (0, c.forwardRef)((e, t) => {
  const {
    children: n,
    secondaryChildren: a,
    detail: o,
    onClick: f,
    icon: h,
    className: g,
    theme: v,
    disabled: _ = false,
    testid: y,
    xstyle: C,
    xstyleSecondary: b,
    active: M,
    divider: S = true,
    ariaLabel: T
  } = e;
  const [w, A] = (0, m.default)(f, {
    disabled: _
  });
  const P = (0, p.default)(w, t);
  const O = _ ? undefined : e.color;
  const k = h != null ? c.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [i.default.danger]: O === "danger",
      [i.default.success]: O === "success",
      [i.default.icon]: true
    })
  }, h) : null;
  const D = (0, l.classnamesConvertMeToStylexPlease)(i.default.container, g, {
    [i.default.containerNoIcon]: !h,
    [i.default.active]: Boolean(M),
    [i.default.disabled]: Boolean(_),
    [i.default.containerListAligned]: v === "list-aligned",
    [i.default.themeChatInfo]: v === "chat-info",
    [i.default.themeSettingsDrawer]: v === "settings-drawer",
    [i.default.themeChatlist]: v === "chatlist",
    [i.default.containerSecondaryText]: a != null
  }, (0, d.default)(M === true && E.active, C));
  const I = (0, u.isStringOrFbt)(n) ? n : null;
  return c.default.createElement("div", (0, r.default)({}, A, {
    className: D,
    "data-ignore-capture": "any",
    ref: P,
    title: I,
    "aria-label": T
  }), k, c.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [i.default.bodyContainerSecondaryText]: a != null,
      [i.default.bodyContainerHasDetail]: o != null,
      [i.default.bodyContainer]: true
    }, (0, d.default)(!S && E.noDivider))
  }, c.default.createElement("div", {
    className: i.default.body
  }, c.default.createElement(s.TextSpan, {
    className: i.default.bodyPrimary,
    theme: "title",
    color: O
  }, n), a != null ? c.default.createElement(s.TextDiv, {
    className: (0, l.classnamesConvertMeToStylexPlease)(i.default.bodySecondary, (0, d.default)(b)),
    theme: "muted"
  }, a) : null), o != null ? c.default.createElement("div", {
    className: i.default.detail
  }, o) : null));
});
exports.DrawerButtonSimple = v;
v.displayName = "DrawerButtonSimple";