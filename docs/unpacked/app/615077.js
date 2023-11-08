Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SenderKeyExpiredWamEvent = undefined;
var r = require("./901032.js");
var i = require("./499497.js");
var a = require("./244186.js");
var o = require("./147402.js");
const s = (0, r.defineEvents)({
  SenderKeyExpired: [3130, {
    chatType: [1, a.MESSAGE_CHAT_TYPE],
    deviceSizeBucket: [2, o.SIZE_BUCKET],
    expiryReason: [3, i.EXPIRY_REASON]
  }, [1, 1, 1], "regular"]
});
exports.SenderKeyExpiredWamEvent = s;