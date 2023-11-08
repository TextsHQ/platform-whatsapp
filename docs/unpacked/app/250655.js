Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expBackoff = i;
exports.expDelaySec = function (e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
  return (0, r.delayMs)(Math.floor(i(e, t, n, a) * 1000));
};
var r = require("./8304.js");
function i(e, t, n) {
  let r;
  let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
  r = e === 0 ? n || 0 : 2 ** e;
  if (Number.isFinite(t) && r > t) {
    r = t;
  }
  if (typeof n == "number" && Number.isFinite(n) && r < n) {
    r = n;
  }
  if (i) {
    r *= 1 + i * Math.random();
  }
  return r;
}