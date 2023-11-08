var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const r = (0, o.default)(e);
  const {
    leading: s,
    trailing: l,
    maxWait: u
  } = n != null ? n : {};
  const c = (0, a.useMemo)(() => (0, i.default)(r, t, n), [t, s, u, l, r]);
  (0, a.useEffect)(() => c.cancel, [c]);
  return c;
};
var i = r(require("../vendor/23279.js"));
var a = require("../vendor/667294.js");
var o = r(require("./17533.js"));