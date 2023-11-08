Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayMs = function (e, t) {
  return new Promise((n, i) => {
    if (t == null ? undefined : t.aborted) {
      throw new r.AbortError();
    }
    const a = setTimeout(function () {
      if (!(t == null)) {
        t.removeEventListener("abort", o);
      }
      n();
    }, e);
    function o() {
      if (!(t == null)) {
        t.removeEventListener("abort", o);
      }
      clearTimeout(a);
      i(new r.AbortError());
    }
    if (!(t == null)) {
      t.addEventListener("abort", o);
    }
  });
};
exports.withTimeout = function (e, t, n) {
  return new Promise((r, i) => {
    const a = setTimeout(() => {
      try {
        r(n());
      } catch (e) {
        i(e);
      }
    }, t);
    e.then(e => {
      clearTimeout(a);
      r(e);
    }, e => {
      clearTimeout(a);
      i(e);
    });
  });
};
var r = require("./898817.js");