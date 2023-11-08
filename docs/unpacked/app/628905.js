var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJobManager = function () {
  if (p == null) {
    throw (0, d.default)("jobs manager has not been initialized");
  }
  return p;
};
exports.maybeCreateJob = g;
exports.startWebPersistedJobManager = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
var o = require("./811158.js");
var s = require("./632157.js");
var l = require("./900038.js");
var u = r(require("./354679.js"));
var c = require("./464189.js");
var d = r(require("./556869.js"));
let p = null;
function f() {
  return (f = (0, i.default)(function* () {
    yield (0, l.initialize)();
    const e = (0, c.getTable)();
    p = new o.PersistedJobManager({
      accessors: _(),
      unfinishedJobEntries: e.all(),
      isRestartAfterCrash: false,
      listeners: {
        onJobStarted: () => {},
        onJobFinished: () => null
      },
      deprecatedJobs: {}
    });
    (0, u.default)(p);
  })).apply(this, arguments);
}
function _() {
  return {
    deletePersistedJob: e => (0, c.getTable)().remove(e),
    updatePersistedJob: e => (0, c.getTable)().createOrReplace(e),
    readPersistedJob: e => (0, c.getTable)().get(e),
    loadAllJobs: () => (0, c.getTable)().all(),
    maybeCreateJob: g
  };
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    var t;
    var n;
    const r = (0, c.getTable)();
    const i = JSON.stringify([e.type, (t = e.uniqKey) !== null && t !== undefined ? t : (0, a.randomHex)(32)]);
    const l = {
      type: e.type,
      uniqKey: i,
      startTime: (0, s.unixTime)(),
      version: (n = e.version) !== null && n !== undefined ? n : 1,
      original: e.args,
      current: e.args,
      step: o.UNSTARTED_JOB,
      waitUntil: null,
      stepFirstStartTime: null,
      stepHardStartCountAfterTimeout: 0,
      stepUnexpectedErrorCount: 0,
      backedOffCount: 0
    };
    if (e.uniqKey == null) {
      return r.createOrReplace(l).then(e => ({
        id: e,
        newlyCreated: true
      }));
    }
    const u = yield r.equals(["uniqKey"], [e.uniqKey]);
    if (u.length === 0) {
      return r.createOrReplace(l).then(e => ({
        id: e,
        newlyCreated: true
      }));
    }
    const d = [];
    let p = null;
    for (const e of u) {
      if (e.step !== o.FINISHED_JOB) {
        p = e;
      } else {
        d.push(r.remove(e.jobId));
      }
    }
    yield Promise.all(d);
    if (p != null) {
      return {
        id: p.jobId,
        newlyCreated: false
      };
    } else {
      return r.createOrReplace(l).then(e => ({
        id: e,
        newlyCreated: true
      }));
    }
  })).apply(this, arguments);
}