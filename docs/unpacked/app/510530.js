var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAConcurrentBucketJobQueue = undefined;
var i = r(require("../vendor/311504.js"));
var a = r(require("../vendor/73982.js"));
var o = require("./417405.js");
var s = require("./477689.js");
var l = r(require("./415227.js"));
var u = require("./775593.js");
var c = require("./61472.js");
var d = require("./984783.js");
var p = r(require("./670983.js"));
var f = require("./434517.js");
const _ = new Map([[u.JOB_PRIORITY.HIGH, 5], [u.JOB_PRIORITY.LOW, 1]]);
exports.WAConcurrentBucketJobQueue = class {
  constructor() {
    this._isInitialized = false;
    this._maxThreadsCount = 0;
    this._availableThreadsCount = 0;
    this._bestEffortBucketWaitTimeoutSec = 0;
    this._jobBucketsMap = new Map();
    this._remainingJobCountMap = new Map();
    this._jobQuotaConfig = new Map();
    this._initTimestampMs = 0;
  }
  init(e, t) {
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    if (this._isInitialized) {
      throw (0, l.default)("WAConcurrentBucketJobQueue has already initialized");
    }
    this._bestEffortBucketWaitTimeoutSec = (n = e == null ? undefined : e.bestEffortWaitTimeoutSec) !== null && n !== undefined ? n : 30;
    this._maxThreadsCount = e.maxConcurrency;
    this._availableThreadsCount = e.maxConcurrency;
    this._jobLogger = t;
    this._jobQuotaConfig = this._getMergedQuotaConfig(e == null ? undefined : e.jobPrioritiesQuota);
    this._remainingJobCountMap = new Map(this._jobQuotaConfig);
    this._jobBucketsMap = new Map();
    this._initTimestampMs = Date.now();
    const d = new c.BaseJobBucket({
      jobMaxConcurrencyMap: (r = e.maxConcurrencyPerJob) !== null && r !== undefined ? r : {}
    });
    const p = new c.LowJobBucket({
      jobMaxConcurrencyMap: (i = e.maxConcurrencyPerJob) !== null && i !== undefined ? i : {}
    });
    const f = new c.LowJobBucket({
      jobMaxConcurrencyMap: (a = e.maxConcurrencyPerJob) !== null && a !== undefined ? a : {}
    });
    const _ = new c.BaseJobBucket({
      jobMaxConcurrencyMap: (o = e.maxConcurrencyPerJob) !== null && o !== undefined ? o : {}
    });
    const g = new c.BaseJobBucket({
      jobMaxConcurrencyMap: (s = e.maxConcurrencyPerJob) !== null && s !== undefined ? s : {}
    });
    this._jobBucketsMap.set(u.JOB_PRIORITY.UI_ACTION, d);
    this._jobBucketsMap.set(u.JOB_PRIORITY.HIGH, d);
    this._jobBucketsMap.set(u.JOB_PRIORITY.OFFLINE, _);
    this._jobBucketsMap.set(u.JOB_PRIORITY.HISTORY_SYNC, g);
    this._jobBucketsMap.set(u.JOB_PRIORITY.LOW, p);
    this._jobBucketsMap.set(u.JOB_PRIORITY.BEST_EFFORT, f);
    this._isInitialized = true;
  }
  updateConfig(e) {
    this._availableThreadsCount += e.maxConcurrency - this._maxThreadsCount;
    this._maxThreadsCount = e.maxConcurrency;
    this._jobBucketsMap.forEach(t => {
      var n;
      return t.updateConfig({
        jobMaxConcurrencyMap: (n = e.maxConcurrencyPerJob) !== null && n !== undefined ? n : {}
      });
    });
    this._jobQuotaConfig = this._getMergedQuotaConfig(e == null ? undefined : e.jobPrioritiesQuota);
    __LOG__(2)`[job-orchestator]: updated WAConcurrentBucketJobQueue config`;
  }
  isInitialized() {
    return this._isInitialized;
  }
  clearQueue() {
    if (!this._isInitialized) {
      throw (0, l.default)("WAConcurrentBucketJobQueue not initialized");
    }
    this._jobBucketsMap.forEach(e => e.clear());
  }
  clearQueueByPriority(e) {
    var t;
    if (!this._isInitialized) {
      throw (0, l.default)("WAConcurrentBucketJobQueue not initialized");
    }
    if (!((t = this._jobBucketsMap.get(e)) === null || t === undefined)) {
      t.clearWaitingTasks();
    }
  }
  getIntStats() {
    const e = e => {
      var t;
      var n;
      const r = this._jobBucketsMap.get(e);
      return ((t = r == null ? undefined : r.count()) !== null && t !== undefined ? t : 0) + ((n = r == null ? undefined : r.pendingCount()) !== null && n !== undefined ? n : 0);
    };
    return {
      highPriorityBucketSize: e(u.JOB_PRIORITY.HIGH),
      lowPriorityBucketSize: e(u.JOB_PRIORITY.LOW),
      bestEffortPriorityBucketSize: e(u.JOB_PRIORITY.BEST_EFFORT)
    };
  }
  getStringStats() {
    const e = e => {
      var t;
      var n;
      const r = (t = (n = this._jobBucketsMap.get(e)) === null || n === undefined ? undefined : n.getStats()) !== null && t !== undefined ? t : {};
      const [, i] = Object.keys(r).reduce((e, t) => {
        let [n, i] = e;
        const a = r[t];
        if (a > n) {
          return [a, t];
        } else {
          return [n, i];
        }
      }, [0, null]);
      return i;
    };
    return {
      highPriorityMaxJob: e(u.JOB_PRIORITY.HIGH),
      lowPriorityMaxJob: e(u.JOB_PRIORITY.LOW),
      bestEffortPriorityMaxJob: e(u.JOB_PRIORITY.BEST_EFFORT)
    };
  }
  enqueue(e, t, n, r) {
    var c;
    var p;
    var f = this;
    if (!this._isInitialized) {
      return Promise.reject((0, l.default)("WAConcurrentBucketJobQueue not initialized"));
    }
    let _;
    let g;
    const m = new Promise((e, t) => {
      _ = e;
      g = t;
    });
    const h = (0, a.default)({
      priority: u.DEFAULT_JOB_PRIORITY
    }, n);
    const y = this.getJobBucketByType(h.priority);
    if (!y) {
      return Promise.reject((0, l.default)(`WAConcurrentBucketJobQueue no bucket for job with name ${e} was found.`));
    }
    (0, d.getEventLoopDelay)().then(e => {
      if (!(r == null)) {
        r.addPoint("measure_event_loop_delay", {
          int: {
            eventLoopDelay: e
          }
        });
      }
    });
    if (!(r == null)) {
      r.addPoint("scheduling_job", {
        string: (0, a.default)((0, a.default)({}, this.getStringStats()), {}, {
          priority: h.priority
        }),
        int: (0, a.default)((0, a.default)({}, this.getIntStats()), {}, {
          maxTimeoutMs: (c = n == null ? undefined : n.maxTimeoutMs) !== null && c !== undefined ? c : 0
        })
      });
    }
    const E = `${h.priority}-${e}-${(p = n == null ? undefined : n.jobId) !== null && p !== undefined ? p : (0, o.randomBase64)(8)}`;
    const S = y.add(e, h, E, (0, i.default)(function* () {
      try {
        f._jobLogger.logJobStarted(E);
        const e = yield f._promiseTimeoutWrapper(t(), n == null ? undefined : n.maxTimeoutMs);
        f._jobLogger.logJobCompleted(E);
        _(e);
      } catch (e) {
        if (e instanceof s.TimeoutError) {
          f._jobLogger.logJobTimeout(E);
        } else {
          f._jobLogger.logJobError(E);
        }
        g(e);
      }
    }));
    this._jobLogger.logJobCreated({
      jobId: E,
      jobName: e,
      jobPriority: h.priority,
      pendingJobsCount: y.count()
    });
    if (n && n.priority === u.JOB_PRIORITY.UI_ACTION) {
      this._runJobTask(S);
    }
    this._runJobTasks();
    return m;
  }
  getAvailableThreadsCount() {
    return this._availableThreadsCount;
  }
  getJobQuotaConfig() {
    return this._jobQuotaConfig;
  }
  getRemainingJobCountMap() {
    return this._remainingJobCountMap;
  }
  getJobBucketByType(e) {
    return this._jobBucketsMap.get(e);
  }
  _getMergedQuotaConfig(e) {
    let t;
    t = e ? new Map(e) : new Map(_);
    t.set(u.JOB_PRIORITY.BEST_EFFORT, 0);
    return t;
  }
  _getJobsRemainingQuota(e) {
    var t;
    if ((t = this._remainingJobCountMap.get(e)) !== null && t !== undefined) {
      return t;
    } else {
      return 0;
    }
  }
  _refreshJobsRemainingQuota() {
    this._remainingJobCountMap = new Map(this._jobQuotaConfig);
  }
  _getNextJobBucket() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    let t = 0;
    let n = null;
    let r = 0;
    this._jobBucketsMap.forEach((e, i) => {
      t += e == null ? undefined : e.count();
      r += this._getJobsRemainingQuota(i);
      if (n == null && e.count() > 0 && this._getJobsRemainingQuota(i) > 0) {
        n = e;
      }
    });
    const i = n == null || r === 0;
    if (i) {
      this._refreshJobsRemainingQuota();
    }
    if (this._shouldRunBestEffortBucket(t, i)) {
      return this.getJobBucketByType(u.JOB_PRIORITY.BEST_EFFORT);
    } else if (n == null && e) {
      return this._getNextJobBucket(false);
    } else {
      return n;
    }
  }
  _shouldRunBestEffortBucket(e, t) {
    var n;
    function r(e, t) {
      const n = Date.now();
      return !(e > n) && n - e < t * 1000;
    }
    const i = this.getJobBucketByType(u.JOB_PRIORITY.BEST_EFFORT);
    const a = e - ((n = i == null ? undefined : i.count()) !== null && n !== undefined ? n : 0);
    const o = i == null ? undefined : i.getLastJobStartedTimestamp();
    if ((i == null ? undefined : i.count()) === 0) {
      return false;
    }
    if (o == null && r(this._initTimestampMs, this._bestEffortBucketWaitTimeoutSec)) {
      if (this._bestEffortScheduledRun == null) {
        const e = function (e, t) {
          const n = Math.ceil(e - Date.now()) + t * 1000;
          if (n > 0) {
            return n;
          } else {
            return 0;
          }
        }(this._initTimestampMs, this._bestEffortBucketWaitTimeoutSec);
        this._bestEffortScheduledRun = setTimeout(() => {
          this._runJobTasks();
          this._bestEffortScheduledRun = null;
        }, e);
      }
      return false;
    }
    return !(a > 0 && o != null && r(o, this._bestEffortBucketWaitTimeoutSec)) && t;
  }
  _getJobBucketByJobId(e) {
    const t = this._getJobBucketTypeByJobId(e);
    return (0, p.default)(this._jobBucketsMap.get(t), "this._jobBucketsMap.get((type: JOB_PRIORITY))");
  }
  _getJobBucketTypeByJobId(e) {
    const t = e.split("-")[0];
    const n = u.JOB_PRIORITY.cast(t);
    if (!n) {
      throw (0, l.default)(`ConcurrentBucketQueue cannot extract known job priority type from id: ${e}`);
    }
    return n;
  }
  _decrementJobsQuota(e) {
    const t = this._getJobBucketTypeByJobId(e);
    if (this._getJobsRemainingQuota(t) > 0) {
      this._remainingJobCountMap.set(t, this._getJobsRemainingQuota(t) - 1);
    } else {
      this._remainingJobCountMap.set(t, 0);
    }
  }
  _runJobTasks() {
    for (; this._availableThreadsCount > 0;) {
      const e = this._getNextJobBucket();
      const t = e == null ? undefined : e.next();
      if (t == null) {
        break;
      }
      t.forEach(e => {
        this._decrementJobsQuota(e.jobId);
        this._runJobTask(e);
      });
    }
  }
  _promiseTimeoutWrapper(e, t) {
    if (t !== undefined) {
      return (0, f.promiseTimeout)(e, t);
    } else {
      return e;
    }
  }
  _runJobTask(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = t._getJobBucketByJobId(e.jobId);
      t._availableThreadsCount--;
      n.markJobTaskPending(e);
      const {
        run: r,
        jobId: i,
        jobName: a
      } = e;
      try {
        var o;
        yield t._promiseTimeoutWrapper(r(), ((o = e.jobInfo) === null || o === undefined ? undefined : o.maxTimeoutMs) === undefined ? u.DEFAULT_JOB_TIMEOUT_MS : undefined);
      } catch (e) {
        if (!(e instanceof s.TimeoutError)) {
          throw e;
        }
        t._jobLogger.logJobTimeout(i);
        __LOG__(2)`[job-orchestator]: ${a} exceeding the timeout, release the thread.`;
      } finally {
        t._availableThreadsCount++;
        n.markJobTaskDone(i);
        if (t._availableThreadsCount > 0) {
          setTimeout(() => t._runJobTasks(), 0);
        }
      }
    })();
  }
};