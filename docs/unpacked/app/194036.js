var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportSyncdKeyStatsJob = function () {
  return (0, o.createNonPersistedJob)("reportSyncdKeyStats", (0, i.default)(function* () {}), {
    priority: a.JOB_PRIORITY.BEST_EFFORT,
    maxTimeoutMs: 30000
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./899137.js");
require("./757342.js");
require("./830389.js");