var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DailyAggregatedStatsCollectionImpl = exports.DailyAggregatedStatsCollection = undefined;
var i = r(require("./670983.js"));
var a = require("./997853.js");
var o = require("./392125.js");
var s = require("./510337.js");
var l = require("./757453.js");
var u = require("./94872.js");
const c = 86400000;
class d extends o.BaseCollection {
  gaddForDate(e) {
    var t;
    const n = (0, l.getDailyStatsStartTime)();
    const r = e.getTime() - n;
    const a = Math.floor(r / c);
    const o = n + c * a;
    if ((t = this.get(o)) !== null && t !== undefined) {
      return t;
    } else {
      return (0, i.default)(this.add({
        id: o.toString(),
        startTime: o
      })[0], "this.add({\n  id: startTime.toString(),\n  startTime\n})[0]");
    }
  }
  gaddForToday() {
    return this.gaddForDate(new Date());
  }
  initializeFromCache(e) {
    if (e == null) {
      return;
    }
    const t = e.map(e => new s.DailyAggregatedStats(e)).filter(e => f(e) && !e.isExpired());
    this.add(t);
  }
  serialize() {
    return this.toArray().filter(e => f(e) && !e.isExpired()).map(e => e.toJSON());
  }
}
exports.DailyAggregatedStatsCollectionImpl = d;
d.model = s.DailyAggregatedStats;
d.cachePolicy = {
  id: u.COLLECTIONS_KEYS.DAILY_AGGREGATED_STATS_COLLECTION,
  policy: a.CACHE_POLICY.LOAD,
  delay: 1000
};
const p = new d();
function f(e) {
  return (e.startTime - (0, l.getDailyStatsStartTime)()) % c == 0;
}
exports.DailyAggregatedStatsCollection = p;