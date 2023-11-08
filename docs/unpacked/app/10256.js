Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUserDisclosures = function () {
  return (0, a.createNonPersistedJob)("getAllUserDisclosures", () => (0, i.queryAllUserDisclosures)(), {
    priority: r.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = require("./775593.js");
var i = require("./552428.js");
var a = require("./899137.js");