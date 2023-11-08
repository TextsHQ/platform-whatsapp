Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PnhRequestRevealActionWamEvent = undefined;
var r = require("./901032.js");
var i = require("./334724.js");
var a = require("./1373.js");
var o = require("./126246.js");
var s = require("./262553.js");
const {
  STRING: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  PnhRequestRevealAction: [3808, {
    pnhAction: [1, i.PNH_ACTION_TYPE],
    pnhChatParty: [2, s.PNH_MESSAGE_CHAT_PARTY],
    pnhChatType: [3, a.PNH_CHAT_TYPE_TYPE],
    pnhEntryPoint: [4, o.PNH_ENTRY_POINT_TYPE],
    threadId: [5, l]
  }, [1, 1, 1], "regular"]
});
exports.PnhRequestRevealActionWamEvent = u;