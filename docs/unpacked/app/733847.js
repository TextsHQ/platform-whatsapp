var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DO_NOT_RESCHEDULE = undefined;
exports.awaitTaskPromise = function (e) {
  return c("awaitTaskPromise").awaitTaskPromise(e);
};
exports.deactivate = function (e) {
  u(e, o.DEFAULT_UNIXTIME);
};
exports.getScheduledTime = function (e) {
  return c("getScheduledTime").getScheduledTime(e);
};
exports.registerTask = function (e, t) {
  c("registerTask").registerTask(e, t);
};
exports.reschedule = u;
exports.rescheduleNow = function (e) {
  u(e, (0, o.unixTime)());
};
exports.startScheduler = function (e) {
  __LOG__(2)`startScheduler invoked`;
  if (!l) {
    l = new s(e);
  }
};
var i = r(require("./415227.js"));
var a = require("./504425.js");
var o = require("./632157.js");
exports.DO_NOT_RESCHEDULE = "no_reschedule";
class s {
  constructor(e) {
    this._started = false;
    this._resolvers = {};
    this._timers = {};
    this._timeoutIDs = {};
    this._taskImplementations = new Map();
    this._scheduledTimeResolver = e.scheduledTimeResolver;
  }
  _startTask(e) {
    const t = this._taskImplementations.get(e);
    if (t != null) {
      this._scheduledTimeResolver.get(e).then(n => {
        const r = n == null;
        if (!r && n === o.DEFAULT_UNIXTIME) {
          return void __LOG__(2)`Task ${e} deactivated`;
        }
        let i = n == null ? 0 : n * 1000 - (0, o.unixTimeMs)();
        i = Math.max(0, i);
        i = Math.min(i, ~(1 << 31));
        __LOG__(2)`Scheduling task ${e} in ${i}ms`;
        this._timeoutIDs[e] = setTimeout(() => {
          delete this._timeoutIDs[e];
          __LOG__(2)`Firing task ${e}`;
          t(r).then(t => {
            if (t === "no_reschedule") {
              return new Promise(() => {});
            }
            let n;
            if (t === o.DEFAULT_UNIXTIME) {
              __LOG__(2)`Task ${e} complete, deactivating`;
              delete this._timers[e];
              n = o.DEFAULT_UNIXTIME;
            } else if (t >= 0) {
              __LOG__(2)`Task ${e} complete, waiting ${t}`;
              delete this._timers[e];
              n = (0, o.futureUnixTime)(t);
            } else {
              __LOG__(2)`Task ${e} will try again later`;
              n = this._getNextRun(e);
            }
            return this._scheduledTimeResolver.set(e, n);
          }).then(() => {
            this._startTask(e);
            if (this._resolvers[e]) {
              this._resolvers[e].forEach(e => e());
              delete this._resolvers[e];
            }
          }).catch(t => {
            __LOG__(2)`Task ${e} failed, try again later: ${t}`;
            return this._scheduledTimeResolver.set(e, this._getNextRun(e)).then(() => {
              this._startTask(e);
            });
          });
        }, i);
      });
    } else {
      __LOG__(4, undefined, new Error())`Tried to start task ${e} before registering its implementation`;
    }
  }
  _getNextRun(e) {
    if (!this._timers[e]) {
      this._timers[e] = (0, a.createTimer)({
        jitter: 0.1,
        max: o.HOUR_SECONDS * 1000,
        algo: {
          type: "fibonacci",
          first: 1000,
          second: 2000
        }
      });
    }
    return (0, o.futureUnixTime)(Math.round(this._timers[e]() / 1000));
  }
  _registerResolver(e, t) {
    if (!this._resolvers[e]) {
      this._resolvers[e] = [];
    }
    this._resolvers[e].push(t);
  }
  awaitTaskPromise(e) {
    return new Promise(t => {
      this._registerResolver(e, t);
    });
  }
  reschedule(e, t) {
    if (this._started) {
      this._scheduledTimeResolver.set(e, t);
      if (this._timeoutIDs[e] != null) {
        clearTimeout(this._timeoutIDs[e]);
      }
      this._startTask(e);
    } else {
      this._scheduledTimeResolver.set(e, t);
    }
  }
  registerTask(e, t) {
    if (!this._started) {
      this._started = true;
    }
    this._taskImplementations.set(e, t);
    this._startTask(e);
  }
  getScheduledTime(e) {
    return this._scheduledTimeResolver.get(e);
  }
}
let l = null;
function u(e, t) {
  c("reschedule").reschedule(e, t);
}
function c(e) {
  if (l) {
    return l;
  }
  throw (0, i.default)(`TaskScheduler::${e} called before startScheduler`);
}