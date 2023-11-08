Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatPsaReadWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./2055.js");
const {
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  ChatPsaRead: [3574, {
    messageMediaType: [1, i.MEDIA_TYPE],
    psaCampaignId: [4, o],
    psaMsgId: [5, o],
    readEntryPoint: [3, a.READ_ENTRY_POINT]
  }, [1, 1, 1], "regular"]
});
exports.ChatPsaReadWamEvent = s;