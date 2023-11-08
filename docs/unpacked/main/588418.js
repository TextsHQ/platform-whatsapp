var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/474296.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
var i = a(require("../app/408662.js"));
var u = a(require("../app/156720.js"));
var s = a(require("../app/49710.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = {
  position: "lhggkp7q",
  width: "ln8gz9je",
  ":hover": {
    zIndex: "rx9719la"
  }
};
const f = (0, o.compatPrefix)("transform");
const p = (0, o.compatPrefix)("transition");
function m(e, t) {
  const {
    data: n,
    zIndex: a,
    renderItem: o,
    testid: i
  } = e;
  const [c, m] = (0, l.useState)(true);
  const h = function (e, t, n) {
    if (!e.animate) {
      return false;
    }
    if (e.data.itemKey !== t) {
      return false;
    }
    return e.data.offset !== n;
  }(e, (0, s.default)(n.itemKey), (0, s.default)(n.offset));
  if (h !== c) {
    m(h);
  }
  const g = c ? `${f} 200ms ease-in-out` : "none";
  const E = e.listDirection === "horizontal" ? {
    width: n.width,
    [f]: `translateX(${n.offset}px)`
  } : {
    height: n.height,
    [f]: `translateY(${n.offset}px)`
  };
  const v = (0, r.default)({
    zIndex: a,
    [p]: g
  }, E);
  const _ = o(n);
  return l.default.createElement("div", {
    ref: t,
    className: (0, u.default)(d),
    style: v,
    onFocus: e.onFocus,
    role: e.role
  }, _);
}
const h = (e, t) => e.animate === t.animate && e.zIndex === t.zIndex && e.renderItem === t.renderItem && (0, i.default)(e.data, t.data);
var g = (0, l.memo)((0, l.forwardRef)(m), h);
exports.default = g;