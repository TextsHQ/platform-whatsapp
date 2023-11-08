var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAggregatedMultiple = function (e, t) {
  (0, l.default)(t);
  const n = t.map(t => (0, o.useAggregatedViewImpl)(e, t));
  const a = n.reduce((e, t) => {
    let [n, a] = t;
    return e + a;
  }, 0);
  return (0, r.useMemo)(() => {
    const e = n.reduce((e, t) => {
      let [n] = t;
      if (n == null) {
        return e;
      } else {
        return e.concat(n.toArray());
      }
    }, []);
    if (e.length === 0) {
      return i;
    } else {
      return e;
    }
  }, [a]);
};
var r = require("../vendor/667294.js");
var o = require("./165428.js");
var l = a(require("../app/49710.js"));
const i = [];