var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportSyncdStatsJob = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./287461.js");
var s = require("./733909.js");
var l = require("./899137.js");
var u = require("./830389.js");
function c() {
  return (c = (0, i.default)(function* () {
    if (yield (0, o.getABPropConfigValue)("md_app_state_report_md_sync_mutation_stats")) {
      return (0, l.createNonPersistedJob)("reportSyncdStats", (0, i.default)(function* () {
        const e = yield (0, u.generateActionStatCounts)();
        for (const t of e.values()) {
          new s.MdAppStateSyncMutationStatsWamEvent({
            syncdAction: t.action,
            applied: (0, u.convertToBucket)(t.applied),
            invalid: (0, u.convertToBucket)(t.invalid),
            orphan: (0, u.convertToBucket)(t.orphan),
            unsupported: (0, u.convertToBucket)(t.unsupported),
            failed: (0, u.convertToBucket)(t.failed)
          }).commit();
        }
      }), {
        priority: a.JOB_PRIORITY.BEST_EFFORT,
        maxTimeoutMs: 30000
      }).waitUntilCompleted();
    }
  })).apply(this, arguments);
}