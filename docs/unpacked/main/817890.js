var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementPnhCtwaDailyCount = function () {
  return u.apply(this, arguments);
};
exports.incrementPnhCtwaDailyCount = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/698867.js");
var l = require("../app/355135.js");
function i() {
  return (i = (0, r.default)(function* (e) {
    const t = l.DailyAggregatedStatsCollection.gaddForToday();
    const n = yield (0, o.getChatThreadID)(e.toJid());
    if (n != null) {
      const e = t.pnhCtwaActions[n];
      t.pnhCtwaActions[n] = e != null ? e + 1 : 1;
    }
  })).apply(this, arguments);
}
function u() {
  return (u = (0, r.default)(function* (e) {
    const t = l.DailyAggregatedStatsCollection.gaddForToday();
    const n = yield (0, o.getChatThreadID)(e.toJid());
    if (n != null) {
      const e = t.pnhCtwaActions[n];
      t.pnhCtwaActions[n] = e != null ? e - 1 : 0;
    }
  })).apply(this, arguments);
}