var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStickySortedResults = function (e) {
  const t = (0, l.default)(() => new Map());
  return (0, o.useMemo)(() => {
    const n = t.current;
    const a = Array.from(e);
    const o = a.filter(e => {
      let [t] = e;
      return !n.has(t.localId);
    }).sort((e, t) => {
      let [, n] = e;
      let [, a] = t;
      return a.votes.length - n.votes.length;
    }).map(e => {
      let [t] = e;
      return t.localId;
    });
    for (const e of o) {
      n.set(e, n.size);
    }
    return a.sort((e, t) => {
      let [a] = e;
      let [o] = t;
      return (0, r.default)(n.get(a.localId), "localIdsToPositions.get(aOption.localId)") - (0, r.default)(n.get(o.localId), "localIdsToPositions.get(bOption.localId)");
    });
  }, [t, e]);
};
var r = a(require("../app/670983.js"));
var o = require("../vendor/667294.js");
var l = a(require("../app/637660.js"));