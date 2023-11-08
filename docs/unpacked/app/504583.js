Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return function (t, n) {
    const r = e.length * 2 + t[1].length;
    const i = t[0].length - r;
    if (i > 0) {
      t.index += i;
      t[0] = t[0].slice(i);
    }
    n.lastIndex--;
    return t;
  };
};