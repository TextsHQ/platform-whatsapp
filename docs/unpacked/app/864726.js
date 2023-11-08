Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logDailyStatsJob = function () {
  return (0, i.createNonPersistedJob)("logDailyStats", () => (0, a.logDailyStats)(), {
    priority: r.JOB_PRIORITY.BEST_EFFORT
  }).waitUntilCompleted();
};
var r = require("./775593.js");
var i = require("./899137.js");
var a = require("./520857.js");