Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = function (e, t) {
  const n = new Map();
  for (let r = 0; r < e.length; r++) {
    const i = t(e[r]);
    const a = n.get(i);
    if (a == null) {
      n.set(i, [e[r]]);
    } else {
      a.push(e[r]);
    }
  }
  return Array.from(n.entries());
};