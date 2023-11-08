Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (e.length === 1) {
    return e;
  }
  const n = [];
  let r;
  for (; r = e.pop();) {
    const [e,,, i, a] = r;
    const [o,, s] = t[a];
    let l = true;
    const {
      length: u
    } = n;
    for (let r = u - 1; r >= 0; --r) {
      const [,, a, u, c] = n[r];
      if (e > u) {
        continue;
      }
      const [d,, p] = t[c];
      if (i > a) {
        if (s < p && n.splice(r, 1)) {
          continue;
        }
        l = false;
        break;
      }
      if (d.mutates && !(l = false)) {
        break;
      }
      if (o.compatibility) {
        if (!o.nestable(d)) {
          l = false;
        }
        break;
      }
      if ((o.nestable(d) || d.compatibility || !(s < p) || !n.splice(r, 1)) && !o.compatibility && !d.format) {
        l = false;
        break;
      }
    }
    if (l) {
      n.push(r);
    }
  }
  return n;
};