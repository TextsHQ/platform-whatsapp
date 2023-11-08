Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBootstrapHistoryDataDownloadedWamEvent = undefined;
var r = require("./901032.js");
var i = require("./729360.js");
var a = require("./599764.js");
var o = require("./355933.js");
const {
  INTEGER: s,
  STRING: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  MdBootstrapHistoryDataDownloaded: [2296, {
    historySyncChunkOrder: [15, s],
    historySyncStageProgress: [14, s],
    mdBootstrapChatsCount: [6, s],
    mdBootstrapHistoryPayloadType: [13, i.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE],
    mdBootstrapMessagesCount: [5, s],
    mdBootstrapPayloadSize: [4, s],
    mdBootstrapPayloadType: [2, a.MD_BOOTSTRAP_PAYLOAD_TYPE],
    mdBootstrapStepDuration: [7, s],
    mdBootstrapStepResult: [8, o.MD_BOOTSTRAP_STEP_RESULT],
    mdHsOldestMessageTimestamp: [11, s],
    mdRegAttemptId: [12, l],
    mdSessionId: [1, l],
    mdStorageQuotaBytes: [9, s],
    mdStorageQuotaUsedBytes: [10, s],
    mdTimestamp: [3, s]
  }, [1, 1, 1], "regular"]
});
exports.MdBootstrapHistoryDataDownloadedWamEvent = u;