Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFanOutListJob = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return (0, o.createNonPersistedJob)("getFanOutList", e => (0, r.getFanOutList)(e), {
    priority: a.JOB_PRIORITY.SKIP
  }).waitUntilCompleted({
    wids: e,
    includeHostedDevice: t
  });
};
var a = require("../app/775593.js");
var r = require("../app/83672.js");
var o = require("../app/899137.js");