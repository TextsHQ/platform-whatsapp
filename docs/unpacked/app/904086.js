var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseLoop = function () {
  return a.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
function a() {
  return (a = (0, i.default)(function* (e, t) {
    let n;
    let r = false;
    const i = e => {
      r = true;
      n = e;
    };
    let a = 0;
    let o = t;
    for (; !r;) {
      o = yield e(i, o, a);
      a++;
    }
    return n;
  })).apply(this, arguments);
}