Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("tasks-scheduled-time").version((0, i.tasksScheduledTimeCreateTable)(), [n("taskName"), t("time")]).view(e => e);
};
exports.getTasksScheduledTimeTable = function () {
  return (0, r.getStorage)().table("tasks-scheduled-time");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");