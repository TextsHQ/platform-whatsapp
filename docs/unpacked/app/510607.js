Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncDeviceListJob = function (e, t, n) {
  return (0, a.createNonPersistedJob)("syncDeviceList", e => (0, i.syncDeviceList)(e)).waitUntilCompleted({
    wids: e,
    context: t,
    phash: n
  });
};
exports.syncMyDeviceListJob = function () {
  return (0, a.createNonPersistedJob)("syncMyDeviceList", () => (0, i.syncMyDeviceList)(), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted();
};
var r = require("./775593.js");
var i = require("./642569.js");
var a = require("./899137.js");