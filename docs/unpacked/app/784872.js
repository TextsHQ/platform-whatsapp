Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelGapDetectedWamEvent = undefined;
var r = require("./901032.js");
var i = require("./341930.js");
const {
  BOOLEAN: a,
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  ChannelGapDetected: [4768, {
    channelIsForeground: [1, a],
    channelUserType: [2, i.CHANNEL_USER_TYPE],
    cid: [3, s],
    gapSize: [4, o]
  }, [1, 1, 1], "regular"]
});
exports.ChannelGapDetectedWamEvent = l;