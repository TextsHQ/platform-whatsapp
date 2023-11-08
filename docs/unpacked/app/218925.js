Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMainStreamModeReadyT = function () {
  if ((0, r.canSupportOfflineNotifications)() && !a && o != null && self.performance.now() - o > 10000) {
    (0, i.setOfflineNotificationsBBStatus)({
      isLongResumeTime: true
    });
  }
};
exports.setStartCommsT = function () {
  if ((0, r.canSupportOfflineNotifications)()) {
    a = false;
    o = self.performance.now();
  }
};
var r = require("./875234.js");
var i = require("./117429.js");
let a = true;
let o = null;