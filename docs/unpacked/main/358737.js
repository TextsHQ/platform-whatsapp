Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCTWASuggestionTrackingCoolOffData = function (e, t) {
  return (0, r.createNonPersistedJob)("updateCTWASuggestionTrackingCoolOffData", () => (0, a.updateTrackingCoolOffData)(e, t)).waitUntilCompleted();
};
var a = require("./276898.js");
var r = require("../app/899137.js");