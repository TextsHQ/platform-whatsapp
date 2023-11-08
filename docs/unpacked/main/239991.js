var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeLeftEta = function (e) {
  let {
    size: t,
    loadedSize: n,
    sampling: a = 1,
    xstyle: s,
    children: d
  } = e;
  const f = (0, l.useRef)(false);
  const p = (0, l.useRef)(0);
  const m = (0, u.useTimeLeftMs)(n, t);
  if (!f.current && ++p.current >= a && m != null && m >= 10000) {
    f.current = true;
  }
  if (f.current === false || t == null || n == null || n >= t || m == null || m === 0) {
    return null;
  } else {
    return l.default.createElement(l.default.Fragment, null, l.default.createElement("span", {
      className: (0, i.default)(s)
    }, o.fbt._("{progress}% ({eta})", [o.fbt._param("progress", l.default.createElement("span", {
      className: (0, i.default)(c)
    }, Math.floor(n / t * 100))), o.fbt._param("eta", r.Clock.timeLeftStr(Math.ceil(m / 1000)))], {
      hk: "4dwzXQ"
    })), d);
  }
};
var r = require("../app/63014.js");
var o = require("../vendor/548360.js");
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
var u = require("./699824.js");
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
  display: "l7jjieqr"
};