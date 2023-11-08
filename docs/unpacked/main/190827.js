var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (t === e.length) {
    return e;
  }
  if (t === 0) {
    return [];
  }
  if (e.length === 0) {
    return new Array(t).fill(0);
  }
  if (t > e.length) {
    return function (e, t) {
      let n;
      (0, r.default)(t > e.length, `${t} not greater than ${e.length}`);
      if (e.length === 1) {
        n = 0;
      } else {
        n = 1 / (1 + (t - e.length) / (e.length - 1));
      }
      const a = [];
      if (t >= 1) {
        a.push(e[0]);
      }
      for (let r = 1; r < t - 1; r++) {
        const t = r * n;
        const l = Math.floor(t);
        a.push(o(e[l], e[Math.ceil(t)], t - l));
      }
      if (t >= 2) {
        a.push(e[e.length - 1]);
      }
      return a;
    }(e, t);
  }
  return function (e, t) {
    (0, r.default)(t < e.length, `${t} not less than ${e.length}`);
    const n = [];
    const a = t / e.length;
    let o = 0;
    let l = 0;
    let i = 0;
    for (const t of e) {
      o += t;
      i += 1;
      l += a;
      if (l >= 1) {
        n.push(o / i);
        i = 0;
        o = 0;
        l -= 1;
      }
    }
    if (i > 0) {
      n.push(o / i);
    }
    return n;
  }(e, t);
};
var r = a(require("../vendor/441143.js"));
function o(e, t, n) {
  return e + (t - e) * n;
}