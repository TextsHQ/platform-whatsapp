Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskScheduledTime = function (e) {
  return (0, i.getTasksScheduledTimeTable)().get(e).then(e => e == null ? undefined : e.time);
};
exports.updateTaskScheduledTime = function (e, t) {
  return (0, r.getStorage)().lock(["tasks-scheduled-time"], n => {
    let [r] = n;
    return r.createOrReplace({
      taskName: e,
      time: t
    });
  });
};
var r = require("./732011.js");
var i = require("./228462.js");