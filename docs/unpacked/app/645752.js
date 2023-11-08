var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportDbVersionsJob = function () {
  return (0, s.createNonPersistedJob)("reportDbVersions", (0, i.default)(function* () {
    (yield (0, o.getLocalSchemaVersions)()).forEach((e, t) => {
      new u.WebDbVersionNonAnonymousWamEvent({
        webDbName: (0, l.convertDBName)(t),
        webDbVersionNumber: e
      }).commit();
    });
  }), {
    priority: a.JOB_PRIORITY.BEST_EFFORT,
    maxTimeoutMs: 30000
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./177414.js");
var s = require("./899137.js");
var l = require("./309998.js");
var u = require("./205693.js");