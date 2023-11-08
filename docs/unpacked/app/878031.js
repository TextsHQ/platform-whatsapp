Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelMessageHistoryRequestWamEvent = undefined;
var r = require("./901032.js");
var i = require("./357892.js");
var a = require("./341930.js");
const {
  BOOLEAN: o,
  INTEGER: s,
  STRING: l,
  TIMER: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  ChannelMessageHistoryRequest: [4770, {
    batchSize: [1, s],
    channelMessageHistoryRequestType: [2, i.CHANNEL_MESSAGE_HISTORY_REQUEST_TYPE],
    channelUserType: [3, a.CHANNEL_USER_TYPE],
    cid: [4, l],
    processingDurationT: [5, u],
    requestDurationT: [6, u],
    requestSuccessful: [7, o]
  }, [1, 1, 1], "regular"]
});
exports.ChannelMessageHistoryRequestWamEvent = c;