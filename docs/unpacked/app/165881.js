Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NonMessagePeerDataOperationResponseWamEvent = undefined;
var r = require("./901032.js");
var i = require("./77834.js");
var a = require("./814173.js");
const {
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  NonMessagePeerDataOperationResponse: [3904, {
    peerDataErrorCount: [1, o],
    peerDataNotFoundCount: [2, o],
    peerDataRequestSessionId: [3, s],
    peerDataRequestType: [4, i.PEER_DATA_REQUEST_TYPE],
    peerDataResponseApplyResult: [8, a.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE],
    peerDataResponseCount: [5, o],
    peerDataSuccessProcessCount: [6, o],
    peerDataSuccessResponseCount: [7, o]
  }, [1, 1, 1], "regular"]
});
exports.NonMessagePeerDataOperationResponseWamEvent = l;