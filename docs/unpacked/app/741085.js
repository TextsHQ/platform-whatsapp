Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserDisclosureStage = function (e, t) {
  return (0, i.createNonPersistedJob)("setUserDisclosureStage", () => (0, a.SetUserDisclosureStageQueryJob)(e, t), {
    priority: r.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = require("./775593.js");
var i = require("./899137.js");
var a = require("./617966.js");