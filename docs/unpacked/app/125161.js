Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeIndexWithoutPreservingOrder = function (e, t) {
  const n = e.pop();
  if (t < e.length) {
    e[t] = n;
  }
};