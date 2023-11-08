Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PnhCagDailyMetricsType = undefined;
exports.incrementPnhDailyCount = function (e, t) {
  const n = a.DailyAggregatedStatsCollection.gaddForToday();
  let o = n.pnhCagActions[e.toString()];
  if (o == null) {
    o = {
      pnhIndicatorClicksChat: 0,
      pnhIndicatorClicksInfoScreen: 0,
      reactionDeleteCount: 0,
      reactionOpenTrayCount: 0
    };
    n.pnhCagActions[e.toString()] = o;
  }
  switch (t) {
    case r.PNH_INDICATOR_CLICKS_CHAT:
      o.pnhIndicatorClicksChat++;
      break;
    case r.PNH_INDICATOR_CLICKS_INFO_SCREEN:
      o.pnhIndicatorClicksInfoScreen++;
      break;
    case r.REACTION_DELETE_COUNT:
      o.reactionDeleteCount++;
      break;
    case r.REACTION_OPEN_TRAY_COUNT:
      o.reactionOpenTrayCount++;
  }
};
var a = require("../app/355135.js");
const r = require("../vendor/76672.js").Mirrored(["PNH_INDICATOR_CLICKS_CHAT", "PNH_INDICATOR_CLICKS_INFO_SCREEN", "REACTION_DELETE_COUNT", "REACTION_OPEN_TRAY_COUNT"]);
exports.PnhCagDailyMetricsType = r;