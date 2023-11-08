function n(e, t) {
  if (e == null || t == null) {
    return [0];
  }
  const n = t / 4;
  const a = e / n;
  let r = [];
  for (let e = -n; e < 0; e++) {
    r.push(a * e);
  }
  for (let e = 0; e < n; e++) {
    r.push(a * e);
  }
  r = r.concat([...r].reverse());
  return r;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHeightJitterValues = n;
exports.generateJitterDistributionArrays = function (e, t, a) {
  if (e == null || t == null || a == null) {
    return [[0]];
  }
  const r = n(e, a);
  const o = [];
  for (let e = 0; e < a; e++) {
    const a = n(r[e], t);
    o.push(a);
  }
  return o;
};