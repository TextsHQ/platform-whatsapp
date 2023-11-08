Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseMap = function (e, t) {
  return Promise.resolve(e).then(e => Promise.all(e.map((e, n) => t(e, n))));
};