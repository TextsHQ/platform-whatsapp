Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LowJobBucket = exports.BaseJobBucket = undefined;
var r = require("./775593.js");
class i {
  constructor(e) {
    var t;
    this.tasks = [];
    this.pendingTasks = [];
    this.lastJobStartedTimestampMs = null;
    this.jobMaxConcurrency = (t = e.jobMaxConcurrencyMap) !== null && t !== undefined ? t : {};
  }
  updateConfig(e) {
    var t;
    this.jobMaxConcurrency = (t = e.jobMaxConcurrencyMap) !== null && t !== undefined ? t : {};
  }
  getStats() {
    return [...this.tasks, ...this.pendingTasks].reduce((e, t) => {
      var n;
      const r = (n = e[t.jobName]) !== null && n !== undefined ? n : 0;
      e[t.jobName] = r + 1;
      return e;
    }, {});
  }
  next() {
    if (this.tasks.length === 0) {
      return null;
    }
    const e = this.pendingTasks.reduce((e, t) => {
      var n;
      const r = (n = e.get(t.jobName)) !== null && n !== undefined ? n : 0;
      e.set(t.jobName, r + 1);
      return e;
    }, new Map());
    const t = this.tasks.filter(t => {
      var n;
      var i;
      return ((n = e.get(t.jobName)) !== null && n !== undefined ? n : 0) < ((i = this.jobMaxConcurrency[t.jobName]) !== null && i !== undefined ? i : r.DEFAULT_CONCURRENCY);
    });
    if (t.length > 0) {
      return [t[0]];
    } else {
      return null;
    }
  }
  add(e, t, n, r) {
    const i = {
      jobId: n,
      jobInfo: t,
      jobName: e,
      run: r
    };
    this.tasks.push(i);
    return i;
  }
  markJobTaskPending(e) {
    if (this.pendingTasks.includes(t => t.jobId === e.jobId)) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed::markJobTaskPending found jobId: ${e.jobId} in pending tasks`;
      SEND_LOGS("JobOrchestrator::markJobTaskPending");
    }
    this.lastJobStartedTimestampMs = Date.now();
    this.pendingTasks.push(e);
    this.tasks = this.tasks.filter(t => t.jobId !== e.jobId);
  }
  markJobTaskDone(e) {
    this.pendingTasks = this.pendingTasks.filter(t => t.jobId !== e);
    if (this.tasks.includes(t => t.jobId === e)) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed::markJobTaskDone found jobId: ${e} in scheduled tasks`;
      SEND_LOGS("JobOrchestrator::markJobTaskDone");
    }
  }
  count() {
    return this.tasks.length;
  }
  pendingCount() {
    return this.pendingTasks.length;
  }
  clearWaitingTasks() {
    this.tasks = [];
  }
  clear() {
    this.tasks = [];
    this.pendingTasks = [];
  }
  getLastJobStartedTimestamp() {
    return this.lastJobStartedTimestampMs;
  }
}
exports.BaseJobBucket = i;
exports.LowJobBucket = class extends i {
  next() {
    var e;
    var t;
    if (this.tasks.length === 0) {
      return null;
    }
    const n = this.pendingTasks.reduce((e, t) => {
      var n;
      const r = (n = e.get(t.jobName)) !== null && n !== undefined ? n : 0;
      e.set(t.jobName, r + 1);
      return e;
    }, new Map());
    const r = this.tasks.filter(e => {
      var t;
      var r;
      return ((t = n.get(e.jobName)) !== null && t !== undefined ? t : 0) < ((r = this.jobMaxConcurrency[e.jobName]) !== null && r !== undefined ? r : 1);
    });
    if (r.length === 0) {
      return null;
    }
    const i = (e = this.jobMaxConcurrency[r[0].jobName]) !== null && e !== undefined ? e : 1;
    const a = (t = n.get(r[0].jobName)) !== null && t !== undefined ? t : 0;
    if (i > 1 && a < i) {
      const e = r.filter(e => e.jobName === r[0].jobName);
      const t = Math.min(e.length, i - a);
      return e.slice(0, t);
    }
    return [r[0]];
  }
};