var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInstance = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  const t = e ? m : h();
  const n = y();
  let r;
  if (T[t]) {
    if ((0, d.hasConfigChanged)(S, n)) {
      __LOG__(2)`[job-orchestrator] config changed `;
      S = n;
      T[t].updateConfig(n);
    }
    return T[t];
  }
  switch (t) {
    case "preemptive":
      r = new a.WAConcurrentPreemptiveJobQueue();
      break;
    case "bucket":
      r = new i.WAConcurrentBucketJobQueue();
      break;
    case "v2":
    case "v1":
    default:
      r = new o.WADefaultJobNoQueue();
  }
  r.init(n, v());
  T[t] = r;
  S = n;
  return r;
};
var i = require("./510530.js");
var a = require("./61205.js");
var o = require("./813039.js");
var s = require("./775593.js");
var l = require("./632157.js");
var u = require("./287461.js");
var c = r(require("./542817.js"));
var d = require("./857540.js");
var p = require("./148257.js");
var f = require("./561913.js");
const _ = {
  maxConcurrency: 1,
  bestEffortWaitTimeoutSec: l.FIVE_MINUTES,
  jobPrioritiesQuota: new Map([[s.JOB_PRIORITY.HIGH, 5], [s.JOB_PRIORITY.LOW, 1], [s.JOB_PRIORITY.OFFLINE, 3], [s.JOB_PRIORITY.HISTORY_SYNC, 1]])
};
const g = {
  maxConcurrency: 1,
  bestEffortWaitTimeoutSec: l.FIVE_MINUTES,
  jobPrioritiesQuota: new Map([[s.JOB_PRIORITY.HIGH, 5], [s.JOB_PRIORITY.LOW, 1], [s.JOB_PRIORITY.OFFLINE, 1], [s.JOB_PRIORITY.HISTORY_SYNC, 1]])
};
const m = "default";
function h() {
  return (0, u.getABPropConfigValue)("web_orchestrator_enabled_version");
}
function y() {
  const e = c.default.getCurrentScenario();
  if (e === f.WEBC_SCENARIO_TYPE.IDLE) {
    return _;
  } else if (e === f.WEBC_SCENARIO_TYPE.OFFLINE_RESUME) {
    return g;
  } else {
    return _;
  }
}
let E;
let S = _;
function v() {
  if (!E) {
    E = new p.JobStatsLogger();
  }
  return E;
}
const T = {};