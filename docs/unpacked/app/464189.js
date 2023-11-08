Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("jobs-store").version((0, i.jobsCreateV1Table)(), [s("jobId"), o("type"), o("uniqKey"), l("uniqKey"), o("original"), o("current"), o("step"), o("startTime"), o("endTime"), o("stepHardStartCountAfterTimeout"), o("stepFirstStartTime"), o("waitUntil"), o("backedOffCount"), o("version")]).version((0, i.jobsCreateV2Table)(), [o("stepUnexpectedErrorCount"), u("endTime")]).view(e => ({
    jobId: e.jobId,
    type: e.type,
    uniqKey: e.uniqKey,
    original: e.original,
    current: e.current,
    step: e.step,
    startTime: e.startTime,
    stepHardStartCountAfterTimeout: e.stepHardStartCountAfterTimeout,
    stepFirstStartTime: e.stepFirstStartTime,
    waitUntil: e.waitUntil,
    backedOffCount: e.backedOffCount,
    version: e.version,
    stepUnexpectedErrorCount: e.stepUnexpectedErrorCount
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("jobs-store");
};
var r = require("./325553.js");
var i = require("./277594.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addAutoIncrementingPrimaryKey: s,
  addIndex: l,
  removeColumn: u
} = (0, a.columnBuilder)();