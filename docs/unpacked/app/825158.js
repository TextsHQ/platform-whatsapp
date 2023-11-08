var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onClick: t,
    wrapInHiddenToken: n = true,
    id: r,
    plural: l,
    params: c,
    className: d,
    tabIndex: p
  } = e;
  return s.default.createElement(a.SelectableSpan, {
    dir: o.default.isRTL() ? "rtl" : "ltr",
    selectable: !n,
    onClick: t,
    className: d,
    tabIndex: p
  }, (() => {
    const e = o.default.t_DO_NOT_USE(r, {
      _plural: l
    });
    if (!c || (0, i.default)(c)) {
      return e;
    }
    let t;
    let n;
    const a = [];
    for (; t = u.exec(e);) {
      const e = t;
      a.push(e[1]);
      const r = e[2];
      if (r && c[r] != null) {
        const e = Array.isArray(c[r]) ? c[r].map((e, t) => s.default.createElement(s.Fragment, {
          key: `child_${t}`
        }, e)) : s.default.createElement(s.Fragment, {
          key: r
        }, c[r]);
        a.push(e);
      }
      n = e.index + e[0].length;
    }
    if (typeof n == "number" && n < e.length) {
      a.push(e.slice(n));
    }
    if (a.length === 0) {
      return e;
    } else {
      return a;
    }
  })());
};
var i = r(require("../vendor/441609.js"));
var a = require("./306703.js");
var o = r(require("./932325.js"));
var s = function (e, t) {
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
const u = /(.*?)__(\w+?)__/g;