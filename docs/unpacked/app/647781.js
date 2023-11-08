var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebQRCode = function (e) {
  const {
    data: t,
    size: n,
    colorDark: r,
    correctLevel: l,
    onChange: u
  } = e;
  const c = (0, o.useRef)(null);
  const [d, p] = (0, o.useState)(null);
  (0, o.useEffect)(() => {
    if (t == null) {
      if (d) {
        d.clear();
      }
    } else if (d) {
      d.makeCode(t);
    } else if (c.current) {
      p(new a.default(c.current, (0, i.default)({
        correctLevel: a.default.CorrectLevel[l != null ? l : "L"],
        height: n,
        text: t,
        width: n
      }, r != null && {
        colorDark: r
      })));
    }
    if (!(u == null)) {
      u(c.current);
    }
  }, [t, d, n, u, r, l]);
  if (e.children) {
    return e.children(c);
  } else {
    return o.default.createElement("div", {
      className: (0, s.default)(e.xstyle),
      ref: c
    });
  }
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./478000.js"));
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
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
var s = r(require("./156720.js"));
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}