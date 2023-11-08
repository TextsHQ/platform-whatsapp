Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemoizeCache = r;
exports.clearAllMemoizeCache = function () {
  n.forEach(e => e.clear());
};
exports.memoizeWithArgs = function (e, t) {
  let n;
  return function () {
    if (!n) {
      n = r();
    }
    const i = t(...arguments);
    let a = n.get(i);
    if (a == null) {
      a = e(...arguments);
      n.set(i, a);
    }
    return a;
  };
};
const n = [];
function r() {
  const e = new Map();
  n.push(e);
  return e;
}