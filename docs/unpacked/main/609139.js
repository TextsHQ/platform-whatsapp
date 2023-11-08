Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GatedChatOpenedWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/214579.js");
const {
  BOOLEAN: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  GatedChatOpened: [3150, {
    chatGatedReason: [1, r.CHAT_GATED_REASON],
    selfInitiated: [2, o]
  }, [1, 1, 1], "regular"]
});
exports.GatedChatOpenedWamEvent = l;