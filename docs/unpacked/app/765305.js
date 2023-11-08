Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = e.map((e, n) => ({
    index: n,
    sortValue: t(e),
    value: e
  }));
  n.sort((e, t) => {
    const n = e.sortValue;
    const r = t.sortValue;
    if (n > r) {
      return 1;
    } else if (n < r) {
      return -1;
    } else {
      return e.index - t.index;
    }
  });
  return n.map(e => e.value);
};