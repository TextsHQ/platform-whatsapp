var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = (0, a.default)(t);
  const [r, o] = (0, i.useState)(e);
  const s = (0, i.useCallback)(() => o(e => {
    const t = !e;
    n(t);
    return t;
  }), [n]);
  return [r, s];
};
var i = require("../vendor/667294.js");
var a = r(require("./17533.js"));