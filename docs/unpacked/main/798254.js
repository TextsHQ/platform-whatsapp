Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHistorySyncOd = function (e) {
  a.WAWebHistorySyncOnDemandEvents.trigger("history_sync_on_demand_events:error_history_sync_od", e);
};
exports.successHistorySyncOd = function (e) {
  a.WAWebHistorySyncOnDemandEvents.trigger("history_sync_on_demand_events:success_history_sync_od", e);
};
var a = require("./387589.js");