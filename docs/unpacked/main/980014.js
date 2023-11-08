Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAggregated = function (e, t) {
  return l(e, t);
};
exports.useOptionalAggregated = l;
var a = require("../vendor/667294.js");
var r = require("./165428.js");
const o = [];
function l(e, t) {
  const [n, l] = (0, r.useAggregatedViewImpl)(e, t);
  return (0, a.useMemo)(() => {
    const e = n == null ? undefined : n.toArray();
    if (Array.isArray(e)) {
      if (e.length === 0) {
        return o;
      } else {
        return e;
      }
    } else {
      return o;
    }
  }, [n, l]);
}