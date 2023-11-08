Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisclosuresContentsJob = function (e) {
  return (0, a.createNonPersistedJob)("getDisclosuresContentsJob", () => (0, i.getUserDisclosureContentsQueryJob)(e), {
    priority: r.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = require("./775593.js");
var i = require("./405394.js");
var a = require("./899137.js");