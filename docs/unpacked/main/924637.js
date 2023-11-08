Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelOpenWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/118816.js");
var o = require("../app/341930.js");
const {
  BOOLEAN: l,
  INTEGER: i,
  STRING: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  ChannelOpen: [4316, {
    channelDirectorySessionId: [8, i],
    channelEntryPoint: [1, r.CHANNEL_ENTRY_POINT],
    channelSessionId: [3, i],
    channelUserType: [4, o.CHANNEL_USER_TYPE],
    cid: [6, u],
    hasNetworkConnection: [7, l],
    unreadMessages: [5, i]
  }, [1, 1, 1], "regular"]
});
exports.ChannelOpenWamEvent = s;