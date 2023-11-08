Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeMutations = function (e, t, n) {
  const r = new MutationObserver(n);
  r.observe(e, t);
  return () => {
    r.disconnect();
  };
};