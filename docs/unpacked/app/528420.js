Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./632157.js");
var i = require("./127714.js");
var a = require("./997853.js");
var o = require("./392125.js");
var s = require("./843257.js");
var l = require("./94872.js");
class u extends o.BaseCollection {
  initializeFromCache(e) {
    if (!e) {
      return;
    }
    const t = (0, r.unixTime)() - s.ConversionTupleExpiry;
    const n = e.filter(e => e.timestamp - t > 0).map(e => {
      const t = (0, i.parseConversionData)(e.conversionData);
      if (t) {
        e.conversionData = t;
      } else {
        delete e.conversionData;
      }
      return e;
    });
    this.add(n);
    this.saveToCache();
  }
}
u.model = s.ConversionTuple;
u.cachePolicy = {
  id: l.COLLECTIONS_KEYS.CONVERSION_TUPLE_COLLECTION,
  policy: a.CACHE_POLICY.LOAD,
  delay: 1000
};
var c = new u();
exports.default = c;