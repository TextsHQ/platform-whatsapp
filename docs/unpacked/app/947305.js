Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBootstrapHistorySyncStatusAfterPairingWamEvent = undefined;
var r = require("./901032.js");
var i = require("./864318.js");
var a = require("./729360.js");
var o = require("./498645.js");
const {
  BOOLEAN: s,
  INTEGER: l,
  STRING: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  MdBootstrapHistorySyncStatusAfterPairing: [4652, {
    activeTimeAfterPairing: [1, i.ACTIVE_TIME_AFTER_PAIRING],
    isLoopRunning: [12, s],
    lastProcessedNotificationChunkOrder: [2, l],
    lastProcessedNotificationChunkProgress: [3, l],
    mdBootstrapHistoryPayloadType: [4, a.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE],
    mdHistorySyncStatusResult: [5, o.MD_HISTORY_SYNC_STATUS_RESULT],
    mdSessionId: [6, u],
    mdTimestamp: [7, l],
    missingNotificationCount: [8, l],
    nextNotificationChunkOrder: [9, l],
    totalProcessedMessageCount: [10, l],
    unprocessedNotificationCount: [11, l]
  }, [1, 1, 1], "regular"]
});
exports.MdBootstrapHistorySyncStatusAfterPairingWamEvent = c;