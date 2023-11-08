var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAggregatedView = function (e, t) {
  const [n] = l(e, t);
  return (0, r.default)(n, "view");
};
exports.useAggregatedViewImpl = l;
exports.useOptionalAggregatedView = function (e, t) {
  const [n] = l(e, t);
  return n;
};
var r = a(require("../app/670983.js"));
var o = require("../vendor/667294.js");
function l(e, t) {
  const [n, a] = (0, o.useState)(1);
  const r = (0, o.useCallback)(() => a(e => e + 1), [a]);
  const l = (0, o.useMemo)(() => t == null ? null : e(t), Array.isArray(t) ? t : [t]);
  (0, o.useEffect)(() => {
    if (!(l == null)) {
      l.on("all", r);
    }
    return () => {
      if (!(l == null)) {
        l.off("all", r);
      }
    };
  }, [l, r]);
  return [l, n];
}