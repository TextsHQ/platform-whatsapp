var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    children: t,
    disabled: n,
    selections: a,
    model: s,
    checked: f,
    checkboxTheme: p,
    onClick: m = () => {},
    wrapperTestid: h
  } = e;
  const [g, E] = (0, l.useState)(() => a.isSelected(s) || !!f);
  (0, u.useListener)(a, s.id.toString(), e => {
    if (e !== g) {
      E(e);
    }
  });
  return l.default.createElement(o.default, {
    className: (0, i.default)(c),
    onClick: m,
    testid: h,
    role: "checkbox",
    "aria-checked": g,
    tabIndex: -1
  }, l.default.createElement("div", {
    className: (0, i.default)(d)
  }, l.default.createElement(r.CheckBox, {
    onChange: () => {},
    checked: g,
    disabled: n,
    tabIndex: -1,
    theme: p
  })), t);
};
var r = require("./468926.js");
var o = a(require("../app/625903.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
var i = a(require("../app/156720.js"));
var u = require("../app/808446.js");
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  position: "g0rxnol2",
  width: "ln8gz9je"
};
const d = {
  position: "lhggkp7q",
  start: "edqan5gp",
  zIndex: "mb8var44",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  height: "ppled2lx",
  pointerEvents: "m62443ks"
};