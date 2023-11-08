var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n, r) {
  const {
    quality: o = 90,
    ensureExtendedFormat: s = false
  } = r != null ? r : {};
  return new Promise((r, l) => {
    const u = new a.default();
    u.onerror = function (e) {
      u.terminate();
      l(new i.EncodeWebpError("worker error", e));
    };
    u.onmessageerror = function (e) {
      u.terminate();
      l(new i.EncodeWebpError("worker message error", e));
    };
    u.onmessage = e => {
      u.terminate();
      r(e.data.blob);
    };
    u.postMessage({
      rgbaData: e,
      width: t,
      height: n,
      quality: o,
      ensureExtendedFormat: s
    });
  });
};
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = o(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, a, s);
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
}(require("./288057.js"));
var a = r(require("./632203.js"));
function o(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (o = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}