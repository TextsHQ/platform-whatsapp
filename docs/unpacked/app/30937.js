var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAllSyncdMissingKeysJob = function () {
  return (0, l.createNonPersistedJob)("requestAllSyncdMissingKeys", (0, i.default)(function* () {
    yield (0, o.requestAllMissingKeys)();
    self.setTimeout(s.setMissingKeyTimeoutInTransaction, 20000);
  }), {
    priority: a.JOB_PRIORITY.BEST_EFFORT,
    maxTimeoutMs: 30000
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./902941.js");
var s = require("./2893.js");
var l = require("./899137.js");