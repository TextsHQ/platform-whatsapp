Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelCoreEventWamEvent = undefined;
var r = require("./901032.js");
var i = require("./118816.js");
var a = require("./492416.js");
var o = require("./874806.js");
var s = require("./991547.js");
const {
  INTEGER: l,
  STRING: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  ChannelCoreEvent: [4692, {
    channelCoreEventSequenceNumber: [8, l],
    channelCoreEventType: [1, s.CHANNEL_EVENT_TYPE],
    channelDirectorySessionId: [7, l],
    channelEntryPoint: [2, i.CHANNEL_ENTRY_POINT],
    channelEntryPointApp: [3, a.CHANNEL_ENTRY_POINT_APP],
    cid: [4, u],
    directoryChannelIndex: [9, l],
    entryPointMetadata: [5, u],
    eventSurface: [6, o.CHANNEL_EVENT_SURFACE]
  }, [1, 1, 1], "regular"]
});
exports.ChannelCoreEventWamEvent = c;