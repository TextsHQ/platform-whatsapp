var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WADefaultJobNoQueue = undefined;
var i = r(require("../vendor/311504.js"));
var a = r(require("./415227.js"));
var o = require("./390934.js");
var s = require("./775593.js");
exports.WADefaultJobNoQueue = class {
  constructor() {
    this._isInitialized = false;
  }
  init(e, t) {
    if (this._isInitialized) {
      throw (0, a.default)("DefaultNoQueue has already initialized");
    }
    this._jobLogger = t;
    this._isInitialized = true;
  }
  updateConfig() {}
  isInitialized() {
    return this._isInitialized;
  }
  clearQueue() {}
  clearQueueByPriority() {}
  enqueue(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      var i;
      var a;
      const l = (i = n == null ? undefined : n.jobId) !== null && i !== undefined ? i : (0, o.randomHex)(8).substr(0, 64);
      r._jobLogger.logJobCreated({
        jobId: l,
        jobName: e,
        jobPriority: (a = n == null ? undefined : n.priority) !== null && a !== undefined ? a : s.JOB_PRIORITY.LOW,
        pendingJobsCount: 0
      });
      try {
        r._jobLogger.logJobStarted(l);
        const e = yield t();
        r._jobLogger.logJobCompleted(l);
        return e;
      } catch (e) {
        r._jobLogger.logJobError(l);
        throw e;
      }
    })();
  }
};