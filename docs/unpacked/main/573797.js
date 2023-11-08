function n(e, t) {
  const n = [];
  const a = t.length;
  const r = e.length;
  if (r > a) {
    return [];
  }
  let o;
  for (let l = 0, i = 0; l < r; l++) {
    o = false;
    const r = e.charCodeAt(l);
    for (; i < a;) {
      if (t.charCodeAt(i++) === r) {
        n.push(i - 1);
        o = true;
        break;
      }
    }
    if (!o) {
      return [];
    }
  }
  return n;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fuzzyMatches = n;
exports.fuzzySearch = function (e, t) {
  return !e || !!n(e, t).length;
};