var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concurrentIterate = function (e, t, n) {
  const a = [];
  const o = [];
  let l = 0;
  const i = function () {
    var n = (0, r.default)(function* () {
      for (; l < e;) {
        const e = l;
        l++;
        o[e] = yield t(e);
      }
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  const u = Math.min(e, n);
  for (let e = 0; e < u; e++) {
    a.push(i());
  }
  return Promise.all(a).then(() => o);
};
var r = a(require("../vendor/311504.js"));