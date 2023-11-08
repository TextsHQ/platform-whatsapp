var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebExternalBetaEvents = undefined;
var r = a(require("../app/395654.js"));
class o extends r.default {
  triggerBetaOptInStatusChanges() {
    this.trigger("external_beta_events:opt_in_status_changed");
  }
}
const l = new o();
exports.WAWebExternalBetaEvents = l;