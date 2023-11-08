Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobInfoEvent = undefined;
exports.JobInfoEvent = class {
  constructor(e, t, n, r) {
    this.jobName = e;
    this.scenario = r;
    this.pendingJobsCount = n;
    this.jobPriority = t;
  }
  logJobAdded() {
    this.webcJobAddedT = Date.now();
  }
  logJobStarted() {
    this.webcJobStartedT = Date.now();
  }
  logJobCompleted(e) {
    this.webcJobCompletedT = Date.now();
    this.jobResultType = e;
  }
};