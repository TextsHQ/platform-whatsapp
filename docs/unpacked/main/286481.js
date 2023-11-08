var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const a = (0, l.default)(e);
  const {
    leading: i,
    trailing: u
  } = n != null ? n : {};
  const s = (0, o.useMemo)(() => (0, r.default)(a, t, n), [t, i, u, a]);
  (0, o.useEffect)(() => s.cancel, [s]);
  return s;
};
var r = a(require("../vendor/823493.js"));
var o = require("../vendor/667294.js");
var l = a(require("../app/17533.js"));