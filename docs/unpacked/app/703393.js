var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/311504.js"));
var a = r(require("../vendor/73982.js"));
var o = r(require("./670983.js"));
var s = r(require("./758216.js"));
exports.default = class {
  constructor(e, t) {
    this._concurrency = e;
    this._groupLimits = t;
    this._runningTasksByGroup = new Map();
    this._enqueuedTasksByGroup = new Map();
  }
  clearQueue() {
    this._enqueuedTasksByGroup.clear();
    this._runningTasksByGroup.clear();
  }
  enqueue(e, t) {
    let n;
    let r;
    const o = new Promise((e, t) => {
      n = e;
      r = t;
    });
    var s;
    this._doEnqueue((0, a.default)((0, a.default)({}, t), {}, {
      run: (s = (0, i.default)(function* () {
        try {
          const t = yield e();
          n(t);
        } catch (e) {
          r(e);
        }
      }), function () {
        return s.apply(this, arguments);
      })
    }));
    this._runTasks();
    return o;
  }
  _doEnqueue(e) {
    this._getOrCreatePriorityQueueForGroup(e.group).push(e);
  }
  _doDequeue() {
    return this._getHighestPriorityAmongGroups();
  }
  _runTasks() {
    for (; this._getRunningTasksCount() < this._concurrency;) {
      const e = this._doDequeue();
      if (e == null) {
        break;
      }
      this._runTask(e);
    }
  }
  _runTask(e) {
    var t = this;
    return (0, i.default)(function* () {
      const {
        run: n,
        signal: r,
        group: i
      } = e;
      const a = t._getRunningTasksForGroup(i);
      if (r == null ? undefined : r.aborted) {
        setTimeout(() => t._runTasks(), 0);
      } else {
        a.add(e);
        try {
          yield n();
        } finally {
          a.delete(e);
          setTimeout(() => t._runTasks(), 0);
        }
      }
    })();
  }
  _getHighestPriorityAmongGroups() {
    for (const e of this._enqueuedTasksByGroup.values()) {
      const t = e.peek();
      if (t && !this._isFullOfGroup(t.group)) {
        return e.pull();
      }
    }
    return null;
  }
  _getRunningTasksCount() {
    let e = 0;
    for (const t of this._runningTasksByGroup.values()) {
      e += t.size;
    }
    return e;
  }
  getEnqueuedTasksCount() {
    let e = 0;
    for (const t of this._enqueuedTasksByGroup.values()) {
      e += t.size();
    }
    return e;
  }
  _getRunningTasksForGroup(e) {
    if (!this._runningTasksByGroup.has(e)) {
      const t = new Set();
      this._runningTasksByGroup.set(e, t);
      return t;
    }
    return (0, o.default)(this._runningTasksByGroup.get(e), "this._runningTasksByGroup.get(group)");
  }
  _isFullOfGroup(e) {
    const t = this._runningTasksByGroup.get(e);
    return t != null && t.size >= this._getLimitForGroup(e);
  }
  _getOrCreatePriorityQueueForGroup(e) {
    if (!this._enqueuedTasksByGroup.has(e)) {
      const t = new s.default(e => e.priority);
      this._enqueuedTasksByGroup.set(e, t);
    }
    return (0, o.default)(this._enqueuedTasksByGroup.get(e), "this._enqueuedTasksByGroup.get(group)");
  }
  _getLimitForGroup(e) {
    const t = this._groupLimits[e];
    if (t == null) {
      return 1 / 0;
    } else {
      return t;
    }
  }
};