Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanUnjoinedSubgroupsJob = function (e, t) {
  return (0, a.createNonPersistedJob)("cleanUnjoinedSubgroups", e => (0, i.cleanUnjoinedSubgroups)(e), {
    priority: r.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted({
    unjoinedSubgroupIds: e,
    parentGroupId: t
  });
};
exports.updateUnjoinedSubgroupsJob = function (e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
  return (0, a.createNonPersistedJob)("updateUnjoinedSubgroups", e => (0, i.updateUnjoinedSubgroups)(e), {
    priority: r.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted({
    unjoinedSubgroups: e,
    parentGroupId: t,
    link: n
  });
};
var r = require("./775593.js");
var i = require("./148143.js");
var a = require("./899137.js");