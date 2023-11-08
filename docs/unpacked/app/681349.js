Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastADVDeviceInfoCheckTime = function () {
  if (i == null) {
    i = (0, r.getTaskScheduledTime)("advDeviceInfoCheck");
  }
  return i;
};
exports.setLastADVDeviceInfoCheckTime = function (e) {
  i = Promise.resolve(e);
};
var r = require("./447465.js");
let i;