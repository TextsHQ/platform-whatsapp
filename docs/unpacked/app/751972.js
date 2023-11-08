Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBootstrapHistoryDataStartDownloadingWamEvent = undefined;
var r = require("./901032.js");
var i = require("./729360.js");
var a = require("./599764.js");
const {
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MdBootstrapHistoryDataStartDownloading: [4650, {
    historySyncChunkOrder: [1, o],
    historySyncStageProgress: [2, o],
    mdBootstrapHistoryPayloadType: [3, i.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE],
    mdBootstrapPayloadSize: [4, o],
    mdBootstrapPayloadType: [5, a.MD_BOOTSTRAP_PAYLOAD_TYPE],
    mdBootstrapStepDuration: [6, o],
    mdSessionId: [7, s],
    mdTimestamp: [8, o]
  }, [1, 1, 1], "regular"]
});
exports.MdBootstrapHistoryDataStartDownloadingWamEvent = l;