var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobStatsLogger = undefined;
var i = r(require("../vendor/81109.js"));
r(require("./542817.js"));
require("./533415.js");
var a = require("./662708.js");
var o = require("./561913.js");
var s = require("./82805.js");
exports.JobStatsLogger = class {
  constructor() {
    this._jobEventMap = new Map();
  }
  logJobCreated(e) {}
  logJobStarted(e) {}
  logJobCompleted(e) {
    this._logJobFinished(e, a.WEBC_JOB_RESULT_TYPE_CODE.COMPLETED);
  }
  logJobError(e) {
    this._logJobFinished(e, a.WEBC_JOB_RESULT_TYPE_CODE.ERROR);
  }
  logJobTimeout(e) {
    this._logJobFinished(e, a.WEBC_JOB_RESULT_TYPE_CODE.TIMEOUT);
  }
  logJobAborted(e) {
    this._logJobFinished(e, a.WEBC_JOB_RESULT_TYPE_CODE.ABORTED);
  }
  _logJobFinished(e, t) {}
  _maybeCommitJobEvent(e) {
    if (!e) {
      return;
    }
    const {
      jobName: t,
      webcJobCompletedT: n,
      webcJobStartedT: r,
      webcJobAddedT: l,
      jobResultType: u
    } = e;
    const c = u === a.WEBC_JOB_RESULT_TYPE_CODE.COMPLETED;
    __LOG__(2)`[job-orchestrator] ${t} execution time: ${n - r} ms, waiting time: ${r - l} ms, success: ${c}`;
    const d = new s.WebcJobInfoWamEvent((0, i.default)({}, e));
    if (d.scenario === o.WEBC_SCENARIO_TYPE.IDLE) {
      undefined;
      const e = 1;
      d.weight = e;
    }
    d.commit();
  }
};