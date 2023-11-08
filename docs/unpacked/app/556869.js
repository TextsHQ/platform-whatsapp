Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function e(t) {
  const n = new Error(t);
  if (n.stack === undefined) {
    try {
      throw e;
    } catch (e) {}
  }
  return n;
};