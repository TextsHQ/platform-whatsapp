Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveTextStatusEnabled = i;
exports.receiveTextStatusForNewSurfacesEnabled = function () {
  return i() && (0, r.getABPropConfigValue)("evolve_about_m1_receiver_for_new_surfaces_enabled");
};
exports.sendTextStatusEnabled = function () {
  return (0, r.getABPropConfigValue)("web_evolve_about_send_enabled");
};
var r = require("./287461.js");
function i() {
  return (0, r.getABPropConfigValue)("evolve_about_m1_receiver_enabled");
}