var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEstimatedFTSDbSize = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./899414.js");
var s = r(require("./422660.js"));
var l = require("./126151.js");
const u = "fts-storage";
const c = 15000;
function d() {
  return (d = (0, i.default)(function* () {
    let {
      sampleRows: e
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      sampleRows: c
    };
    Date.now();
    const t = (0, a.default)(s.default, "indexedDB_");
    const n = yield (0, o.getDatabase)(t, u);
    const r = n.transaction(n.objectStoreNames, "readonly");
    let i = 0;
    let d = 0;
    for (const t of r.objectStoreNames) {
      const n = r.objectStore(t);
      const a = yield (0, o.promisifyRequest)(n.count());
      if (a === 0) {
        continue;
      }
      const s = Math.min(e, a);
      d = s;
      let u = 0;
      yield (0, o.objectStoreIterator)(n, e => {
        u += (0, l.estimateSize)(e, t);
        d--;
        return d > 0;
      });
      i += Math.round(u * (a / (s - d)));
    }
    Date.now();
    return Promise.resolve(i);
  })).apply(this, arguments);
}