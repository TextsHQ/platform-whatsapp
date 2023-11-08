var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncdSyncAllCollectionsJob = function () {
  return (0, u.createNonPersistedJob)("syncdSyncAllCollections", (0, i.default)(function* () {
    __LOG__(2)`syncd: periodic sync for all collection`;
    yield (0, o.markCollectionsForSync)([s.CollectionName.CriticalBlock, s.CollectionName.CriticalUnblockLow, s.CollectionName.Regular, s.CollectionName.RegularLow, s.CollectionName.RegularHigh]);
    yield (0, c.setLastPeriodicAppStateSyncTs)((0, l.unixTime)());
  }), {
    priority: a.JOB_PRIORITY.LOW,
    maxTimeoutMs: 30000
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./280015.js");
var s = require("./122393.js");
var l = require("./632157.js");
var u = require("./899137.js");
var c = require("./960523.js");