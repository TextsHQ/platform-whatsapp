Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GatedMessageReceivedWamEvent = undefined;
var r = require("./901032.js");
var i = require("./214579.js");
const a = (0, r.defineEvents)({
  GatedMessageReceived: [3152, {
    chatGatedReason: [1, i.CHAT_GATED_REASON]
  }, [1, 1, 1], "regular"]
});
exports.GatedMessageReceivedWamEvent = a;