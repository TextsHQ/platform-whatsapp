var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : String;
  let a = (0, i.default)(e, t.map(r)).join("");
  const o = n ? 4000 : Number.POSITIVE_INFINITY;
  if (a.length > o) {
    a = a.slice(0, o).replace(/\s+$/, " [truncated]");
  }
  return a;
};
var i = r(require("./332193.js"));