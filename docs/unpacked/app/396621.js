Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseAny = function (e) {
  if (e.length === 0) {
    return Promise.reject(new r.AggregateError([]));
  }
  return Promise.all(e.map(i)).then(e => {
    throw new r.AggregateError(e);
  }, e => e);
};
var r = require("./477689.js");
function i(e) {
  return new Promise((t, n) => Promise.resolve(e).then(n, t));
}