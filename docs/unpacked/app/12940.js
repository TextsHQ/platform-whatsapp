var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebLinkDeviceEvents = undefined;
var i = r(require("./395654.js"));
class a extends i.default {
  triggerRefreshAltLinkingCode() {
    this.trigger("link_device_events:refresh_alt_linking_code");
  }
  triggerErrorAltLinking() {
    this.trigger("link_device_events:error_alt_linking");
  }
  triggerPrimaryHelloReceived() {
    this.trigger("link_device_events:primary_hello_received");
  }
}
const o = new a();
exports.WAWebLinkDeviceEvents = o;