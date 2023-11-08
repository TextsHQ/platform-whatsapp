Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compactPatch = function (e) {
  return function (e, t) {
    const n = new Set();
    return e.filter(e => {
      const r = t(e);
      return !n.has(r) && (n.add(r), true);
    });
  }(e.reverse(), e => e.index).reverse();
};