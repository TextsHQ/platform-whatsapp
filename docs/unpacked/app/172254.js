Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aspectRatioScaled = function (e, t) {
  if (typeof e != "number" || e < 0 || e != e) {
    return {
      width: t,
      height: t
    };
  }
  if (e > 1) {
    return {
      width: t,
      height: Math.max(t / e, 1)
    };
  }
  return {
    width: Math.max(t * e, 1),
    height: t
  };
};
exports.boundHeightWidth = function (e, t, n) {
  let r = t != null ? t : n;
  let i = e != null ? e : n;
  if (r > i) {
    if (r > n) {
      i *= n / r;
      r = n;
    }
  } else if (i > n) {
    r *= n / i;
    i = n;
  }
  return {
    width: Math.max(r, 1),
    height: Math.max(i, 1)
  };
};