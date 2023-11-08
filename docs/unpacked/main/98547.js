Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeInteractedCTWASuggestion = function (e) {
  return (0, r.createNonPersistedJob)("removeInteractedCTWASuggestion", () => (0, a.removeSuggestion)(e)).waitUntilCompleted();
};
var a = require("./276898.js");
var r = require("../app/899137.js");