Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NonMessagePeerDataRequestWamEvent = undefined;
var r = require("./901032.js");
var i = require("./77834.js");
const {
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  NonMessagePeerDataRequest: [3906, {
    peerDataRequestCount: [1, a],
    peerDataRequestSessionId: [2, o],
    peerDataRequestType: [3, i.PEER_DATA_REQUEST_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.NonMessagePeerDataRequestWamEvent = s;