module.exports = function (e, t, r) {
  if (e == e) {
    if (r !== undefined) {
      e = e <= r ? e : r;
    }
    if (t !== undefined) {
      e = e >= t ? e : t;
    }
  }
  return e;
};