Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBootstrapHistoryDataReceivedWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/729360.js");
var o = require("../app/599764.js");
const {
  INTEGER: l,
  STRING: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  MdBootstrapHistoryDataReceived: [2998, {
    historySyncChunkOrder: [6, l],
    historySyncStageProgress: [5, l],
    mdBootstrapHistoryPayloadType: [3, r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE],
    mdBootstrapPayloadType: [2, o.MD_BOOTSTRAP_PAYLOAD_TYPE],
    mdSessionId: [1, i],
    mdTimestamp: [4, l]
  }, [1, 1, 1], "regular"]
});
exports.MdBootstrapHistoryDataReceivedWamEvent = u;