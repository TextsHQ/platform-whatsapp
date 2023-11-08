Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const r = e.entries();
  let i = r.next();
  for (; !i.done;) {
    const a = i.value;
    if (!t.call(n, a[1], a[0], e)) {
      return false;
    }
    i = r.next();
  }
  return true;
};