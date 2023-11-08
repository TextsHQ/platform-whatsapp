Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBootstrapAppStateCriticalDataProcessingWamEvent = undefined;
var r = require("./901032.js");
var i = require("./25942.js");
var a = require("./599764.js");
const {
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MdBootstrapAppStateCriticalDataProcessing: [3164, {
    bootstrapAppStateDataStage: [1, i.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE],
    mdBootstrapPayloadType: [2, a.MD_BOOTSTRAP_PAYLOAD_TYPE],
    mdRegAttemptId: [3, s],
    mdSessionId: [4, s],
    mdTimestamp: [5, o]
  }, [1, 1, 1], "regular"]
});
exports.MdBootstrapAppStateCriticalDataProcessingWamEvent = l;