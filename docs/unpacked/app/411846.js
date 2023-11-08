Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepEqual = function e(t, n) {
  if (t === n) {
    return true;
  }
  if (!t || !n || typeof t != "object" && typeof n != "object") {
    return false;
  }
  const r = Array.isArray(t);
  const i = Array.isArray(n);
  if (r !== i) {
    return false;
  }
  let a = true;
  if (r) {
    const r = t.length;
    if (r !== n.length) {
      return false;
    }
    for (let i = 0; a && i < r; i++) {
      a = e(t[i], n[i]);
    }
    return a;
  }
  const o = Object.keys(t);
  for (let r = 0; a && r < o.length; r++) {
    const i = o[r];
    a = n.propertyIsEnumerable(i) && e(t[i], n[i]);
  }
  return a && Object.keys(n).length === o.length;
};