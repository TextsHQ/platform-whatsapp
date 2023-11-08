Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToNewsletter = function (e) {
  return (0, o.createNonPersistedJob)("subscribeToNewsletter", () => (0, r.subscribeToNewsletter)(e), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var a = require("../app/775593.js");
var r = require("./886558.js");
var o = require("../app/899137.js");