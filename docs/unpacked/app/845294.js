Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : () => true;
  let i = arguments.length > 3 ? arguments[3] : undefined;
  if (i == null ? undefined : i.aborted) {
    return Promise.reject(new r.AbortError());
  }
  return new Promise(function (a, o) {
    const s = function () {
      var e;
      if (n.apply(this, arguments)) {
        if (!((e = u) === null || e === undefined)) {
          e();
        }
        a.apply(this, arguments);
      }
    };
    const l = () => {
      var e;
      if (!((e = u) === null || e === undefined)) {
        e();
      }
      o(new r.AbortError());
    };
    let u = () => {
      e.removeEventListener(t, s);
      if (!(i == null)) {
        i.removeEventListener("abort", l);
      }
      u = null;
    };
    if (!(i == null)) {
      i.addEventListener("abort", l);
    }
    e.addEventListener(t, s);
  });
};
var r = require("./898817.js");