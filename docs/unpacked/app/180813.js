Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    selectedHost: t,
    fallbackHost: n,
    attemptCount: r,
    lastHostUsed: i,
    lastFetchMadeProgress: a
  } = e;
  if (a && i) {
    return i;
  }
  if (r <= 1) {
    return t;
  }
  if (r === 3 && n) {
    return n;
  }
  if ((i == null ? undefined : i.equals(t)) && t.fallback != null) {
    return t.fallback;
  }
  if (n != null) {
    return n;
  } else {
    return t;
  }
};