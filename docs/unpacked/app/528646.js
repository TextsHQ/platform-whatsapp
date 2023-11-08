Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoizeWithClear = function (e) {
  let t;
  return [function () {
    if (!t) {
      t = [e()];
    }
    return t[0];
  }, function () {
    t = null;
  }];
};