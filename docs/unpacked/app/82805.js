Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcJobInfoWamEvent = undefined;
var r = require("./901032.js");
var i = require("./662708.js");
var a = require("./561913.js");
const {
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  WebcJobInfo: [3054, {
    jobName: [1, s],
    jobPriority: [2, s],
    jobResultType: [5, i.WEBC_JOB_RESULT_TYPE_CODE],
    pendingJobsCount: [4, o],
    scenario: [3, a.WEBC_SCENARIO_TYPE],
    webcJobAddedT: [6, o],
    webcJobCompletedT: [8, o],
    webcJobStartedT: [7, o]
  }, [1, 1, 1], "regular"]
});
exports.WebcJobInfoWamEvent = l;