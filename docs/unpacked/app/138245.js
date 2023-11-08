Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatPsaActionWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./502679.js");
const {
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  ChatPsaAction: [3572, {
    messageMediaType: [1, i.MEDIA_TYPE],
    psaCampaignId: [4, o],
    psaMessageActionType: [2, a.PSA_MESSAGE_ACTION_TYPE],
    psaMsgId: [5, o]
  }, [1, 1, 1], "regular"]
});
exports.ChatPsaActionWamEvent = s;