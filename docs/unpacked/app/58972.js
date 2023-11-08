var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = undefined;
var i = r(require("../vendor/967154.js"));
var a = require("./154852.js");
var o = require("./839751.js");
var s = function (e, t) {
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
var l = r(require("./156720.js"));
var u = require("./469572.js");
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
  ellipsis: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae"
  },
  nowrap: {
    whiteSpace: "le5p0ye3"
  },
  wrap: {
    whiteSpace: "bbv8nyr4"
  },
  initial: {
    whiteSpace: "c2jc77nu"
  }
};
const p = (0, s.forwardRef)((e, t) => {
  const {
    as: n = "div",
    testid: r,
    textWrap: c,
    xstyle: p,
    children: f
  } = e;
  const _ = (0, a.getFlexStyles)(e);
  const g = (0, o.getStructureStyles)(e);
  const m = (0, u.useHandlerProps)(e);
  return s.default.createElement(n, (0, i.default)({
    ref: t,
    className: (0, l.default)([_.xstyle, g, c != null && d[c], p]),
    style: _.inline
  }, m), f);
});
exports.Box = p;
p.displayName = "Box";