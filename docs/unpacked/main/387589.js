var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebHistorySyncOnDemandEvents = undefined;
var r = a(require("../app/395654.js"));
class o extends r.default {
  triggerSuccessHistorySyncOd(e) {
    this.trigger("history_sync_on_demand_events:success_history_sync_od", e);
  }
  triggerErrorHistorySyncOd(e) {
    this.trigger("history_sync_on_demand_events:error_history_sync_od", e);
  }
}
const l = new o();
exports.WAWebHistorySyncOnDemandEvents = l;