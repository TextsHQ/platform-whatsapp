Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxPerGroup = function (e, t, n) {
  const r = new Map();
  for (const i of e) {
    const e = n(i);
    const a = r.get(e);
    if (a == null || t(i) >= t(a)) {
      r.set(e, i);
    }
  }
  return Array.from(r.values());
};