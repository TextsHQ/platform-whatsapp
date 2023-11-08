Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = new Error(e);
  if (t.stack === undefined) {
    try {
      throw t;
    } catch (e) {}
  }
  return t;
};