Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcOfflineNotificationProcessWamEvent = undefined;
var r = require("./901032.js");
var i = require("./111879.js");
const {
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  WebcOfflineNotificationProcess: [4222, {
    currentOfflineProcessStage: [4, i.OFFLINE_PROCESS_STAGES],
    offlineProcessDecryptErrorCount: [5, a],
    offlineProcessMailboxAge: [6, a],
    offlineProcessMessageCount: [7, a],
    offlineProcessNotificationCount: [8, a],
    offlineProcessSessionId: [9, o],
    offlineProcessStageTimestampMs: [10, a],
    swVersion: [11, o]
  }, [1, 1, 1], "regular"]
});
exports.WebcOfflineNotificationProcessWamEvent = s;