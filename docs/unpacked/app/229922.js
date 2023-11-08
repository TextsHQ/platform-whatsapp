Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (t == null) {
    return e;
  }
  let n;
  const i = t.aborted ? Promise.reject(new r.AbortError()) : new Promise((e, i) => {
    const a = () => {
      i(new r.AbortError());
    };
    t.addEventListener("abort", a);
    n = () => {
      t.removeEventListener("abort", a);
    };
  });
  return Promise.race([i, e]).finally(() => {
    var e;
    if (!((e = n) === null || e === undefined)) {
      e();
    }
    n = null;
  });
};
var r = require("./898817.js");