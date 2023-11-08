var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCtwaContextData = function (e) {
  const {
    phone: t,
    sourceUrl: n,
    context: a
  } = e;
  if (t == null || t === "" || n == null || n === "" || a == null || a === "") {
    return Promise.reject((0, o.default)("Invalid params passed to fetchCtwaContextData"));
  }
  return (0, r.default)(t, a, n);
};
var r = a(require("./593906.js"));
var o = a(require("../app/556869.js"));