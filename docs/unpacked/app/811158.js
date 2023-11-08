var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNSTARTED_JOB = exports.RetryOnBackoff = exports.RequiresPage = exports.PersistedJobManager = exports.InterruptJob = exports.FINISHED_JOB = undefined;
var i = r(require("../vendor/311504.js"));
var a = require("./704910.js");
var o = require("./504425.js");
var s = require("./632157.js");
class l {
  constructor(e) {
    this.feature = e;
  }
  toString() {
    return `RequiresPage: ${this.feature}`;
  }
}
exports.RequiresPage = l;
class u {
  constructor(e) {
    this.backoffOptions = e;
  }
  toString() {
    return "RetryOnBackoff";
  }
}
exports.RetryOnBackoff = u;
class c {
  constructor(e) {
    this.result = e;
  }
}
exports.InterruptJob = c;
const d = "$unstarted";
exports.UNSTARTED_JOB = d;
const p = "$finished";
exports.FINISHED_JOB = p;
function f(e) {
  return `Job[${e.jobId}] (${e.type})`;
}
function _(e) {
  return `Job[${e.jobId}] (${e.type}.${e.step})`;
}
function g(e, t, n) {
  if (e === "unsatisfiable") {
    __LOG__(2)`${_(n)} halting because of ${t}`;
  } else if (e === "unsatisfied") {
    __LOG__(2)`${_(n)} waiting on ${t}`;
  }
}
function m(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return {
    jobStartTime: e.startTime,
    afterCrash: t,
    interruptJob: h
  };
}
function h(e) {
  return new c(e);
}
exports.PersistedJobManager = class {
  constructor(e) {
    const {
      isRestartAfterCrash: t,
      accessors: n,
      unfinishedJobEntries: r
    } = e;
    const i = new Map();
    const a = r.then(e => {
      const r = [];
      const a = [];
      e.forEach(e => {
        if (e.stepHardStartCountAfterTimeout >= 5) {
          r.push(e);
        } else {
          a.push(e);
        }
      });
      return Promise.all(r.map(e => {
        var t;
        __LOG__(4, undefined, new Error(), true)`${(t = e, `[Job ${t.type}] `)}: stuck on the step ${e.step}, aborting the job`;
        SEND_LOGS(`job-stuck-${e.type}`);
        return n.deletePersistedJob(e.jobId);
      })).then(() => {
        a.forEach(e => {
          if (!i.has(e.jobId)) {
            __LOG__(2)`${f(e)}: restarting`;
            i.set(e.jobId, this._runJob(e, t));
          }
        });
      });
    });
    this.implementationLoaders = new Map();
    this.implementations = new Map();
    this.stepBlockers = new WeakMap();
    this.accessors = n;
    this.activeJobs = i;
    this.initialJobsPromise = a;
    this.listeners = e.listeners;
    this.deprecatedJobs = e.deprecatedJobs;
  }
  loadAndRunJobFromId(e) {
    const t = this.activeJobs.get(e);
    if (t != null) {
      return t;
    }
    const n = this._loadAndRunJobFromId(e);
    this.activeJobs.set(e, n);
    return n;
  }
  _loadAndRunJobFromId(e) {
    var t = this;
    return (0, i.default)(function* () {
      const {
        initialJobsPromise: n,
        accessors: r
      } = t;
      yield n;
      const i = yield r.readPersistedJob(e);
      if (i) {
        return t._runJob(i, false);
      } else {
        __LOG__(3)`Persisted job missing for given ID`;
        return null;
      }
    })();
  }
  _getJobImplementation(e) {
    const {
      implementations: t,
      implementationLoaders: n
    } = this;
    const r = t.get(e);
    if (r) {
      return r;
    }
    const i = n.get(e);
    if (!i) {
      return null;
    }
    const a = i();
    t.set(e, a);
    return a;
  }
  _waitForBlockers(e, t) {
    if (t == null || t.length === 0) {
      return Promise.resolve();
    }
    const {
      stepBlockers: n
    } = this;
    let r = n.get(t);
    if (r == null) {
      r = (0, a.joinRequirements)(t.map(e => e()), g);
      n.set(t, r);
    }
    return r(e);
  }
  _runRemainingSteps(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let r = arguments.length > 3 ? arguments[3] : undefined;
    const {
      step: i
    } = e;
    const a = t.findIndex(e => e.stepName === i);
    const {
      requirements: o,
      code: l
    } = t[a].info(e.current, e.original, m(e, n));
    let u = this._waitForBlockers(e, o);
    if (r) {
      u = u.then(r);
    }
    return u.then(() => {
      __LOG__(2)`${_(e)}: running step`;
      return l(e.current, e.original, m(e, n));
    }).then(r => {
      if (r instanceof c) {
        __LOG__(2)`${_(e)}: InterruptJob`;
        return r.result;
      }
      const i = a + 1;
      if (i >= t.length) {
        return r;
      }
      const o = t[i];
      e.step = o.stepName;
      e.current = r;
      e.stepHardStartCountAfterTimeout = 0;
      e.stepFirstStartTime = (0, s.unixTime)();
      e.stepUnexpectedErrorCount = 0;
      e.waitUntil = null;
      e.backedOffCount = 0;
      return this.accessors.updatePersistedJob(e).then(() => this._runRemainingSteps(e, t, n));
    });
  }
  _runJob(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      var r;
      const {
        accessors: a,
        activeJobs: c,
        deprecatedJobs: g,
        listeners: {
          onJobFinished: h,
          onJobStarted: y
        }
      } = n;
      let E = yield n._getJobImplementation(e.type);
      const S = g[e.type];
      if (!E) {
        if (!S) {
          __LOG__(4, undefined, new Error(), true)`No implementation for ${e.type}. Maybe it should have been put to the deprecated list?`;
          SEND_LOGS("missing-job-implementation");
          yield a.deletePersistedJob(e.jobId);
          return null;
        }
        if (S === "NOOP") {
          __LOG__(3)`No implementation for deprecated ${e.type}, job deleted`;
          yield a.deletePersistedJob(e.jobId);
          return null;
        }
        E = yield S();
      }
      const v = E;
      if (S) {
        __LOG__(2)`Running deprecated job ${e.type}`;
      }
      const T = (r = e.stepFirstStartTime) !== null && r !== undefined ? r : (0, s.unixTime)();
      e.stepFirstStartTime = T;
      e.stepUnexpectedErrorCount = e.stepUnexpectedErrorCount || 0;
      e.backedOffCount = e.backedOffCount || 0;
      if (e.step === p) {
        let t = e.waitUntil;
        const r = (0, s.secondsUntil)(T);
        if (t != null && (0, s.isInFuture)(t) && r > 0) {
          __LOG__(2)`${f(e)}: skew detected, adjusting accordingly`;
          t = (0, s.castToUnixTime)(t - r);
          if ((0, s.isInFuture)(t)) {
            e.stepFirstStartTime = (0, s.castToUnixTime)(T - r);
            e.waitUntil = t;
            yield n.accessors.updatePersistedJob(e);
          }
        }
        if (!(t != null && (0, s.isInFuture)(t))) {
          __LOG__(2)`${f(e)}: removing completed, expired job from db`;
          yield a.deletePersistedJob(e.jobId);
        }
        c.delete(e.jobId);
        return e.current;
      }
      const M = e.step !== d ? E.find(t => t.stepName === e.step) : E[0];
      if (!M) {
        __LOG__(4, undefined, new Error(), true)`No implementation for ${e.type}.${e.step}`;
        SEND_LOGS("missing-job-step");
        yield a.deletePersistedJob(e.jobId);
        return null;
      }
      e.step = M.stepName;
      const A = () => {
        const r = e.waitUntil;
        let i = Promise.resolve();
        if (r != null) {
          const t = (0, s.futureUnixTime)(s.DAY_SECONDS);
          if (r > t) {
            __LOG__(2)`${_(e)}: trim wait from ${r} to ${t}`;
            e.waitUntil = t;
            i = n.accessors.updatePersistedJob(e).then(() => (0, s.delayUntil)(t));
          } else {
            __LOG__(2)`${_(e)}: delaying until ${r}`;
            i = (0, s.delayUntil)(r);
          }
        }
        return i.then(() => n._runRemainingSteps(e, v, t, () => {
          e.waitUntil = null;
          if (!(0, s.happenedWithin)(T, s.DAY_SECONDS)) {
            e.stepHardStartCountAfterTimeout++;
          }
          return n.accessors.updatePersistedJob(e);
        }).catch(t => {
          if (t instanceof l) {
            __LOG__(2)`${_(e)}: requires page`;
            if (e.stepHardStartCountAfterTimeout > 0) {
              --e.stepHardStartCountAfterTimeout;
              n.accessors.updatePersistedJob(e);
            }
            return new Promise(() => {});
          }
          if (t instanceof u) {
            __LOG__(2)`${_(e)}: RetryOnBackoff`;
            const r = (0, o.getDelay)(++e.backedOffCount, t.backoffOptions);
            e.waitUntil = (0, s.futureUnixTime)(Math.ceil(r / 1000));
            if (e.stepHardStartCountAfterTimeout > 0) {
              --e.stepHardStartCountAfterTimeout;
            }
            return n.accessors.updatePersistedJob(e).then(A);
          }
          if (e.stepUnexpectedErrorCount < 1) {
            __LOG__(3)`${_(e)}: Unhandled exception. Tried ${e.stepUnexpectedErrorCount} times`;
            e.stepUnexpectedErrorCount++;
            return n.accessors.updatePersistedJob(e).then(A);
          }
          throw t;
        }));
      };
      const b = A();
      const C = b.then(function () {
        var t = (0, i.default)(function* (t) {
          __LOG__(2)`${_(e)}: finished job`;
          let r = null;
          try {
            r = h(e.jobId, e.type, e.original, t);
          } catch (t) {
            __LOG__(4, undefined, new Error(), true)`onJobFinished for ${e.type} threw exception ${t}`;
            SEND_LOGS("onJobFinished-threw");
          }
          if (r != null && r > 0) {
            e.waitUntil = (0, s.futureUnixTime)(Math.ceil(r / 1000));
            e.step = p;
            e.current = t;
            e.stepFirstStartTime = (0, s.unixTime)();
            yield n.accessors.updatePersistedJob(e);
          } else {
            yield a.deletePersistedJob(e.jobId);
            c.delete(e.jobId);
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      }(), function () {
        var n = (0, i.default)(function* (n) {
          __LOG__(4, undefined, new Error(), true)`${e.type} failed with error ${n}`;
          SEND_LOGS(`job-threw-exception-${e.type}`);
          const r = v.find(t => t.stepName === e.step);
          if (r) {
            const n = r.info(e.current, e.original, m(e, t));
            if (n.stopRetryIf != null) {
              yield n.stopRetryIf.onStopRetry(e.current, e.original, m(e, t));
            }
          } else {
            __LOG__(4, undefined, new Error())`${e.type}: ${e.step} step not found`;
          }
          yield a.deletePersistedJob(e.jobId);
          c.delete(e.jobId);
        });
        return function () {
          return n.apply(this, arguments);
        };
      }());
      try {
        y(e.jobId, e.type, e.original);
      } catch (t) {
        __LOG__(4, undefined, new Error(), true)`onJobStarted for ${e.type} threw exception ${t}`;
        SEND_LOGS("onJobStarted-threw");
      }
      return C.then(() => b);
    })();
  }
  addPersistedJobImplementation(e, t) {
    const {
      implementationLoaders: n,
      deprecatedJobs: r
    } = this;
    if (n.has(e)) {
      __LOG__(4, undefined, new Error(), true)`addPersistedJobImplementation called twice for ${e}`;
      return void SEND_LOGS("repeat-job-loader");
    }
    if (r) {
      r[e];
    }
    n.set(e, t);
  }
  fireAndForget(e) {
    this.accessors.maybeCreateJob(e).then(e => {
      let {
        id: t
      } = e;
      return this.loadAndRunJobFromId(t);
    });
  }
  waitUntilPersisted(e) {
    return this.accessors.maybeCreateJob(e).then(e => {
      let {
        id: t
      } = e;
      this.loadAndRunJobFromId(t);
    });
  }
  waitUntilCompleted(e) {
    return this.accessors.maybeCreateJob(e).then(e => {
      let {
        id: t
      } = e;
      return this.loadAndRunJobFromId(t);
    });
  }
  fireAndForgetNonPersisted() {
    __LOG__(2)`fireAndForgetNonPersisted not implemented in PersistedJobManager`;
  }
  waitUntilCompletedNonPersisted() {
    return Promise.resolve(() => __LOG__(2)`waitUntilCompletedNonPersisted not implemented in PersistedJobManager`);
  }
};