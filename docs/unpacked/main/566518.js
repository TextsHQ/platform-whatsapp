var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return new Promise((t, n) => {
    const a = new o.default();
    a.onerror = function (e) {
      a.terminate();
      n(new r.DecodeWebpResultsError("worker error", e));
    };
    a.onmessageerror = function (e) {
      a.terminate();
      n(new r.DecodeWebpResultsError("worker message error", e));
    };
    a.onmessage = e => {
      a.terminate();
      const n = e.data;
      t(n);
    };
    a.postMessage({
      webpBuffer: e
    }, [e]);
  });
};
var r = function (e, t) {
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
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, o, i);
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
}(require("../app/288057.js"));
var o = a(require("./774087.js"));
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