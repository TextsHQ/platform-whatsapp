var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logCriticalBootstrapStageIfNecessary = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = r(require("./97359.js"));
var l = require("./344092.js");
var u = require("./366891.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    if ((yield (0, o.getABPropConfigValue)("md_app_state_critical_data_processing_logging")) && (0, s.default)(require("./775410.js")).isSyncDCriticalDataSyncInProcess()) {
      new l.MdBootstrapAppStateCriticalDataProcessingWamEvent({
        bootstrapAppStateDataStage: e,
        mdSessionId: yield u.MdSyncFieldStatsMeta.getMdSessionId(),
        mdTimestamp: (0, a.unixTimeMs)()
      }).commit();
    }
  })).apply(this, arguments);
}