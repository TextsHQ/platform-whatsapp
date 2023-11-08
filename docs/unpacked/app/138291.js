var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncSleep = o;
exports.asyncSleepAfterGivenLoopIteration = function () {
  return a.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
function a() {
  return (a = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    if (e > 0 && e % t == 0) {
      yield o(n);
    }
  })).apply(this, arguments);
}
function o(e) {
  return new Promise(t => setTimeout(t, e));
}