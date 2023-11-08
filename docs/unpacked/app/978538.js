Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncContactListInChunksJob = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  return (0, a.createNonPersistedJob)("syncContactListInChunks", e => (0, i.syncContactListInChunks)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    contactIds: e,
    shouldDelayBetweenChunks: t
  });
};
exports.syncContactListJob = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  return (0, a.createNonPersistedJob)("syncContactList", e => (0, i.syncContactList)(e), {
    priority: r.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    contactIds: e,
    shouldSyncDevice: t
  });
};
var r = require("./775593.js");
var i = require("./588251.js");
var a = require("./899137.js");