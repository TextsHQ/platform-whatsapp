var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAConcurrentPreemptiveJobQueue = undefined;
var i = r(require("../vendor/311504.js"));
var a = r(require("../vendor/73982.js"));
var o = require("./477689.js");
var s = r(require("./415227.js"));
var l = require("./390934.js");
var u = require("./775593.js");
var c = require("./434517.js");
exports.WAConcurrentPreemptiveJobQueue = class {
  constructor() {
    this._isInitialized = false;
    this._maxThreadsCount = 0;
    this._availableThreadsCount = 0;
    this._jobMaxConcurrency = {};
    this._tasks = [];
    this._pendingTasks = [];
  }
  init(e, t) {
    var n;
    if (this._isInitialized) {
      throw (0, s.default)("ConcurrentPreemptiveJobQueue has already initialized");
    }
    this._maxThreadsCount = e.maxConcurrency;
    this._availableThreadsCount = e.maxConcurrency;
    this._jobMaxConcurrency = (n = e.maxConcurrencyPerJob) !== null && n !== undefined ? n : {};
    this._jobLogger = t;
    this._isInitialized = true;
  }
  updateConfig(e) {
    var t;
    this._availableThreadsCount += e.maxConcurrency - this._maxThreadsCount;
    this._maxThreadsCount = e.maxConcurrency;
    this._jobMaxConcurrency = (t = e.maxConcurrencyPerJob) !== null && t !== undefined ? t : {};
    __LOG__(2)`[job-orchestator]: updated ConcurrentPreemptiveJobQueue config`;
  }
  isInitialized() {
    return this._isInitialized;
  }
  clearQueueByPriority(e) {
    if (!this._isInitialized) {
      throw (0, s.default)("ConcurrentPreemptiveJobQueue not initialized");
    }
    this._tasks = this._tasks.filter(t => {
      var n;
      return ((n = t.jobInfo) === null || n === undefined ? undefined : n.priority) !== e;
    });
  }
  clearQueue() {
    if (!this._isInitialized) {
      throw (0, s.default)("ConcurrentPreemptiveJobQueue not initialized");
    }
    this._tasks = [];
    this._pendingTasks = [];
  }
  enqueue(e, t, n) {
    var r;
    var c = this;
    if (!this._isInitialized) {
      return Promise.reject((0, s.default)("ConcurrentPreemptiveJobQueue not initialized"));
    }
    let d;
    let p;
    const f = new Promise((e, t) => {
      d = e;
      p = t;
    });
    const _ = (0, a.default)({
      priority: u.DEFAULT_JOB_PRIORITY
    }, n);
    const g = (r = n == null ? undefined : n.jobId) !== null && r !== undefined ? r : (0, l.randomHex)(8).substr(0, 64);
    const m = this._addJobTask(e, _, g, (0, i.default)(function* () {
      try {
        c._jobLogger.logJobStarted(g);
        const e = yield c._promiseTimeoutWrapper(t(), n == null ? undefined : n.maxTimeoutMs);
        c._jobLogger.logJobCompleted(g);
        d(e);
      } catch (e) {
        if (e instanceof o.TimeoutError) {
          c._jobLogger.logJobTimeout(g);
        } else {
          c._jobLogger.logJobError(g);
        }
        p(e);
      }
    }));
    if (n && n.priority === u.JOB_PRIORITY.UI_ACTION) {
      this._runJobTask(m);
    }
    this._runJobTasks();
    return f;
  }
  getAvailableThreadsCount() {
    return this._availableThreadsCount;
  }
  getJobMaxConcurrency() {
    return this._jobMaxConcurrency;
  }
  _runJobTasks() {
    for (; this._availableThreadsCount > 0;) {
      const e = this._getNextJobTask();
      if (e == null) {
        break;
      }
      this._runJobTask(e);
    }
  }
  _promiseTimeoutWrapper(e, t) {
    if (t !== undefined) {
      return (0, c.promiseTimeout)(e, t);
    } else {
      return e;
    }
  }
  _runJobTask(e) {
    var t = this;
    return (0, i.default)(function* () {
      t._availableThreadsCount--;
      t._markJobTaskPending(e);
      const {
        run: n,
        jobId: r,
        jobName: i
      } = e;
      try {
        var a;
        yield t._promiseTimeoutWrapper(n(), ((a = e.jobInfo) === null || a === undefined ? undefined : a.maxTimeoutMs) === undefined ? u.DEFAULT_JOB_TIMEOUT_MS : undefined);
      } catch (e) {
        if (!(e instanceof o.TimeoutError)) {
          throw e;
        }
        t._jobLogger.logJobTimeout(r);
        __LOG__(2)`[job-orchestator]: ${i} exceeding the timeout, release the thread.`;
      } finally {
        t._availableThreadsCount++;
        t._markJobTaskDone(r);
        setTimeout(() => t._runJobTasks(), 0);
      }
    })();
  }
  _addJobTask(e, t, n, r) {
    const i = {
      jobId: n,
      jobInfo: t,
      jobName: e,
      run: r
    };
    this._jobLogger.logJobCreated({
      jobId: n,
      jobName: e,
      jobPriority: t.priority,
      pendingJobsCount: this._tasks.length
    });
    this._tasks.push(i);
    return i;
  }
  _markJobTaskPending(e) {
    if (this._pendingTasks.includes(t => t.jobId === e.jobId)) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed::markJobTaskPending found jobId: ${e.jobId} in pending tasks`;
      SEND_LOGS("JobOrchestrator::markJobTaskPending");
    }
    this._pendingTasks.push(e);
    this._tasks = this._tasks.filter(t => t.jobId !== e.jobId);
  }
  _markJobTaskDone(e) {
    this._pendingTasks = this._pendingTasks.filter(t => t.jobId !== e);
    if (this._tasks.includes(t => t.jobId === e)) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed::markJobTaskDone found jobId: ${e} in scheduled tasks`;
      SEND_LOGS("JobOrchestrator::markJobTaskDone");
    }
  }
  _getNextJobTask() {
    if (this._tasks.length === 0) {
      return null;
    }
    const e = this._pendingTasks.reduce((e, t) => {
      var n;
      const r = (n = e.get(t.jobName)) !== null && n !== undefined ? n : 0;
      e.set(t.jobName, r + 1);
      return e;
    }, new Map());
    return this._tasks.filter(t => {
      var n;
      var r;
      return ((n = e.get(t.jobName)) !== null && n !== undefined ? n : 0) < ((r = this._jobMaxConcurrency[t.jobName]) !== null && r !== undefined ? r : 1);
    })[0];
  }
};