Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBootstrapAppStateDataDownloadedWamEvent = undefined;
var r = require("./901032.js");
var i = require("./729360.js");
var a = require("./599764.js");
var o = require("./355933.js");
const {
  INTEGER: s,
  STRING: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  MdBootstrapAppStateDataDownloaded: [2294, {
    mdBootstrapContactsCount: [5, s],
    mdBootstrapHistoryPayloadType: [11, i.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE],
    mdBootstrapPayloadSize: [4, s],
    mdBootstrapPayloadType: [2, a.MD_BOOTSTRAP_PAYLOAD_TYPE],
    mdBootstrapStepDuration: [6, s],
    mdBootstrapStepResult: [7, o.MD_BOOTSTRAP_STEP_RESULT],
    mdRegAttemptId: [10, l],
    mdSessionId: [1, l],
    mdStorageQuotaBytes: [8, s],
    mdStorageQuotaUsedBytes: [9, s],
    mdTimestamp: [3, s]
  }, [1, 1, 1], "regular"]
});
exports.MdBootstrapAppStateDataDownloadedWamEvent = u;