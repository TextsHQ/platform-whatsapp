Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (e === t) {
    return true;
  }
  if (e.length !== t.length) {
    return false;
  }
  return e.every((e, n) => e === t[n]);
};