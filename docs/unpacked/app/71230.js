Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseCallSync = function (e, t) {
  try {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) {
      r[i - 2] = arguments[i];
    }
    return Promise.resolve(e.apply(t, r));
  } catch (e) {
    return Promise.reject(e);
  }
};