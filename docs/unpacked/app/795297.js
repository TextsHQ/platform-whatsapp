var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseEach = undefined;
var i = r(require("../vendor/311504.js"));
const a = function () {
  var e = (0, i.default)(function* (e, t) {
    const n = [];
    for (let r = 0; r < e.length; r++) {
      n.push(yield t(e[r]));
    }
    return n;
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.promiseEach = a;