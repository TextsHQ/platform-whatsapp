Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (r != null) {
      t[n] = r;
    }
  }
  return t;
};