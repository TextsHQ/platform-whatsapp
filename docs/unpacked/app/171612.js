Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDoNotDisturb = function () {
  try {
    return false;
  } catch (e) {
    __LOG__(3)`getDoNotDisturb failed with error ${e}`;
  }
  return false;
};
require("../vendor/76672.js").Mirrored(["UNKNOWN", "SESSION_SCREEN_IS_LOCKED", "SESSION_ON_CONSOLE_KEY", "QUNS_NOT_PRESENT", "QUNS_BUSY", "QUNS_RUNNING_D3D_FULL_SCREEN", "QUNS_PRESENTATION_MODE", "QUNS_ACCEPTS_NOTIFICATIONS", "QUNS_QUIET_TIME", "QUNS_APP", "UNKNOWN_ERROR"]);
require("../vendor/76672.js").Mirrored(["NOT_SUPPORTED", "FAILED", "OFF", "PRIORITY_ONLY", "ALARMS_ONLY"]);