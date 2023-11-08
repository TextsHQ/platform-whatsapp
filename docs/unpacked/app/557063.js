var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseReduce = undefined;
var i = r(require("../vendor/311504.js"));
const a = function () {
  var e = (0, i.default)(function* (e, t, n) {
    let r = n;
    const i = e.length;
    for (let n = 0; n < i; n++) {
      r = yield t(r, e[n], n);
    }
    return r;
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.promiseReduce = a;