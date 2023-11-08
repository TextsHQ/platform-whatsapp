Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersect = function (e, t, n, a, r, o, l, i) {
  const u = {
    x: null,
    y: null,
    onLine1: false,
    onLine2: false
  };
  const s = (i - o) * (n - e) - (l - r) * (a - t);
  if (s === 0) {
    return u;
  }
  let c = t - o;
  let d = e - r;
  const f = (n - e) * c - (a - t) * d;
  c = ((l - r) * c - (i - o) * d) / s;
  d = f / s;
  u.x = e + c * (n - e);
  u.y = t + c * (a - t);
  if (c > 0 && c < 1) {
    u.onLine1 = true;
  }
  if (d > 0 && d < 1) {
    u.onLine2 = true;
  }
  return u;
};
exports.roundUp10thPercentage = function (e, t) {
  if (e === 0 || t === 0) {
    return 0;
  }
  const n = e / t * 100;
  if (n % 10 == 0) {
    return n;
  }
  return (parseInt(n / 10, 10) + 1) * 10;
};