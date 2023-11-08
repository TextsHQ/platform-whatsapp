Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelAdminWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./684259.js");
var o = require("./269430.js");
const {
  INTEGER: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  ChannelAdmin: [4556, {
    adminFlowActionSequenceNumber: [1, l],
    adminFlowType: [2, r.ADMIN_FLOW_TYPE],
    channelAdminAction: [3, o.CHANNEL_ADMIN_ACTION],
    channelAdminSessionId: [4, l]
  }, [1, 1, 1], "regular"]
});
exports.ChannelAdminWamEvent = i;