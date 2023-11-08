Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canEnableOfflineNotifications = function () {
  const {
    getABPropConfigValue: e
  } = require("./287461.js");
  return a() && e("web_push_notifications");
};
exports.canSupportOfflineNotifications = a;
var r = require("./368170.js");
const i = r.UA.isSafari && Number(r.UA.browserVersion.split(".")[0]) < 16;
function a() {
  return !i;
}