Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = e.findIndex(t);
  if (n === -1) {
    return;
  }
  if (n >= e.length - 1) {
    return;
  }
  return e[n + 1];
};