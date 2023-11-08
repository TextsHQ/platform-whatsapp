var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let r = arguments.length > 3 ? arguments[3] : undefined;
  const a = [];
  let o;
  t.lastIndex = 0;
  for (; (o = t.exec(e)) && t.lastIndex > 0;) {
    if (r) {
      o = r(o, t);
    }
    if (o) {
      a.push((0, i.default)(o, n));
    }
  }
  return a;
};
var i = r(require("./819659.js"));