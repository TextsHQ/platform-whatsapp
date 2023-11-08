Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = [];
  const r = e.length;
  const i = t.length;
  const a = Math.max(r, i);
  for (let o = 0; o < a; o++) {
    if (o < r) {
      n.push(e[o]);
    }
    if (o < i) {
      n.push(t[o]);
    }
  }
  return n;
};