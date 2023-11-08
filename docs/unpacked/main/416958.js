Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToLiveUpdatesJob = function (e) {
  return (0, o.createNonPersistedJob)("subscribeToLiveUpdates", () => (0, r.subscribeToLiveUpdatesQuery)(e), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var a = require("../app/775593.js");
var r = require("./488533.js");
var o = require("../app/899137.js");