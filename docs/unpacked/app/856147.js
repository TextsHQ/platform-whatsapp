Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NonMessagePeerDataMediaUploadWamEvent = undefined;
var r = require("./901032.js");
var i = require("./77834.js");
var a = require("./603472.js");
const {
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  NonMessagePeerDataMediaUpload: [3902, {
    peerDataErrorCount: [1, o],
    peerDataExistingDataNoUploadCount: [2, o],
    peerDataNotFoundCount: [3, o],
    peerDataRequestCount: [4, o],
    peerDataRequestSessionId: [5, s],
    peerDataRequestType: [6, i.PEER_DATA_REQUEST_TYPE],
    peerDataResponseResult: [8, a.PEER_DATA_RESPONSE_RESULT_TYPE],
    peerDataSuccessInlineNoUploadCount: [9, o],
    peerDataSuccessUploadCount: [7, o]
  }, [1, 1, 1], "regular"]
});
exports.NonMessagePeerDataMediaUploadWamEvent = l;