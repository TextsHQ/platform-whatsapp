Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCTWASuggestionTrackingNuxData = function (e, t) {
  return (0, r.createNonPersistedJob)("updateCTWASuggestionTrackingNuxData", () => (0, a.updateTrackingNuxData)(e, t)).waitUntilCompleted();
};
var a = require("./276898.js");
var r = require("../app/899137.js");