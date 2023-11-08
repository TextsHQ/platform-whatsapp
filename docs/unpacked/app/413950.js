Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWamRuntime = function () {
  return i;
};
exports.setWamRuntime = function (e) {
  if (i != null) {
    return void __LOG__(4, undefined, new Error())`wamRuntime already set`;
  }
  i = e;
  (0, r.processQueuedJobs)();
};
var r = require("./330964.js");
let i = null;