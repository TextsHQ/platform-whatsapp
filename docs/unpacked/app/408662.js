function n(e, t) {
  if (e === t) {
    return e !== 0 || t !== 0 || 1 / e == 1 / t;
  } else {
    return e != e && t != t;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (n(e, t)) {
    return true;
  }
  if (typeof e != "object" || e == null || typeof t != "object" || t == null) {
    return false;
  }
  const r = Object.keys(e);
  const i = Object.keys(t);
  if (r.length !== i.length) {
    return false;
  }
  for (let i = 0; i < r.length; i++) {
    if (!t.hasOwnProperty(r[i]) || !n(e[r[i]], t[r[i]])) {
      return false;
    }
  }
  return true;
};