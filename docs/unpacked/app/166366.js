Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineResumeStageWamEvent = undefined;
var r = require("./901032.js");
var i = require("./932489.js");
var a = require("./689732.js");
const {
  BOOLEAN: o,
  INTEGER: s,
  STRING: l,
  TIMER: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  OfflineResumeStage: [3536, {
    attemptId: [13, s],
    chatThreadCount: [4, s],
    currentOfflineStage: [1, a.OFFLINE_RESUME_STAGES],
    isResumeInForeground: [5, o],
    isResumeStartedInForeground: [14, o],
    lastPushTimestampMs: [12, s],
    mailboxAge: [6, s],
    offlineCallCount: [15, s],
    offlineDecryptErrorCount: [7, s],
    offlineMessageCount: [8, s],
    offlineNotificationCount: [9, s],
    offlineReceiptCount: [10, s],
    offlineResumeMode: [11, i.OFFLINE_RESUME_MODES],
    offlineSessionId: [2, l],
    offlineSizeBytes: [16, s],
    offlineStageTimestampMs: [3, s],
    passiveModeT: [17, u]
  }, [1, 1, 1], "regular"]
});
exports.OfflineResumeStageWamEvent = c;