Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    for (let r = 0; r < e[n].length; ++r) {
      const [i, a] = e[n][r];
      t.push([i, a, n]);
    }
  }
  return t;
};