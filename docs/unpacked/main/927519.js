Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const {
    delay: n = 0
  } = t != null ? t : {};
  let a;
  let r;
  let o;
  const l = t => {
    if (o == null || t - o >= n) {
      e(t);
      o = t;
    }
    if (!r) {
      a = window.requestAnimationFrame(l);
    }
  };
  a = window.requestAnimationFrame(l);
  return () => {
    r = true;
    window.cancelAnimationFrame(a);
  };
};