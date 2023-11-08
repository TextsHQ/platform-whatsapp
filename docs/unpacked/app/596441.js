Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSubgroupSuggestionsJob = function (e, t) {
  return (0, a.createNonPersistedJob)("removeSubgroupSuggestions", e => (0, i.removeSubgroupSuggestionsWithOfflineOption)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    subgroupSuggestions: e,
    isOffline: t
  });
};
var r = require("./775593.js");
var i = require("./900890.js");
var a = require("./899137.js");