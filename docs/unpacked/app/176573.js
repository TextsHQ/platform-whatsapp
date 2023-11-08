Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateOrphanReceipt = function (e, t, n) {
  return (0, r.getStorage)().lock(["orphan-receipt"], r => {
    let [i] = r;
    return i.bulkGet(n).then(r => {
      const a = n.reduce((n, i, a) => {
        let o = r[a];
        if (o == null) {
          o = {
            msgKey: i
          };
        }
        const s = o[e];
        if (s == null || s > t) {
          o[e] = t;
          n.push(o);
        }
        return n;
      }, []);
      return i.bulkCreateOrReplace(a);
    });
  });
};
exports.getOrphanReceipt = function (e) {
  return (0, i.getOrphanReceiptTable)().get(e);
};
exports.removeOrphanReceipt = function (e) {
  return (0, i.getOrphanReceiptTable)().remove(e);
};
var r = require("./732011.js");
var i = require("./463631.js");