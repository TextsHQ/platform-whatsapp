Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineResumeWamEvent = undefined;
var r = require("./901032.js");
var i = require("./881570.js");
const {
  BOOLEAN: a,
  INTEGER: o,
  STRING: s,
  TIMER: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  OfflineResume: [3112, {
    chatThreadCount: [1, o],
    expectedOfflineCallCount: [23, o],
    expectedOfflineMessageCount: [17, o],
    expectedOfflineNotificationCount: [18, o],
    expectedOfflineReceiptCount: [19, o],
    isOfflineCompleteMissed: [2, a],
    isResumeInForeground: [13, a],
    isRunningFromServiceExtension: [22, a],
    lastStanzaT: [3, l],
    mailboxAge: [14, o],
    mainScreenLoadT: [4, l],
    offlineCallCount: [24, o],
    offlineDecryptErrorCount: [5, o],
    offlineMessageCount: [6, o],
    offlineNotificationCount: [7, o],
    offlinePreviewT: [8, l],
    offlineProcessingT: [20, l],
    offlineReceiptCount: [9, o],
    offlineResumeResult: [21, i.OFFLINE_RESUME_RESULT_TYPE],
    offlineSizeBytes: [10, o],
    onTrickleMode: [15, a],
    pageLoadT: [11, l],
    passiveModeT: [25, l],
    preackCallCount: [26, o],
    preackMessageCount: [27, o],
    preackNotificationCount: [28, o],
    preackReceiptCount: [29, o],
    processedCallCount: [30, o],
    processedMessageCount: [31, o],
    processedNotificationCount: [32, o],
    processedReceiptCount: [33, o],
    socketConnectT: [12, l],
    transientOfflineSessionId: [34, s]
  }, [1, 1, 1], "regular"]
});
exports.OfflineResumeWamEvent = u;