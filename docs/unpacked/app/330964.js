Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processQueuedJobs = function () {
  const e = (0, r.getWamRuntime)();
  if (e == null) {
    return;
  }
  i.splice(0).forEach(t => {
    if (t.length === 2) {
      e.commit(...t);
    } else {
      e.set(t[1], t[2]);
    }
  });
};
exports.queueEvent = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  i.push([e, t]);
};
exports.queueMetric = function (e, t) {
  i.push([false, e, t]);
};
var r = require("./413950.js");
const i = [];