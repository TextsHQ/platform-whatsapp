var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackoffCache = undefined;
var i = r(require("./556869.js"));
exports.BackoffCache = class {
  constructor(e) {
    this.backoffIntervals = [...e];
    this.cache = new Map();
  }
  add(e) {
    if (this.get(e)) {
      throw (0, i.default)("This entry already exists in the backoff cache");
    }
    this.cache.set(e, {
      lastAttempt: Date.now(),
      intervals: [...this.backoffIntervals],
      attempts: 1
    });
  }
  remove(e) {
    this.cache.delete(e);
  }
  get(e) {
    return this.cache.get(e);
  }
  reset(e) {
    this.remove(e);
    this.add(e);
  }
  shouldBackoff(e) {
    const t = this.get(e);
    if (t != null) {
      const e = t.intervals[0];
      if (e != null) {
        if (Date.now() - t.lastAttempt < e) {
          return true;
        }
      }
    }
    return false;
  }
  markAttemptAndShiftInterval(e) {
    const t = this.get(e);
    if (t != null) {
      t.lastAttempt = Date.now();
      t.intervals.shift();
    }
  }
  test(e) {
    const t = this.get(e);
    if (t != null) {
      t.attempts++;
    }
    return !!this.shouldBackoff(e) || (t != null ? this.markAttemptAndShiftInterval(e) : this.add(e), false);
  }
  getCurrentInterval(e) {
    const t = this.get(e);
    if (t != null) {
      return t.intervals[0];
    }
  }
};