Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatPsaRemoveWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./249737.js");
var o = require("./560670.js");
var s = require("./8402.js");
var l = require("./591077.js");
const {
  STRING: u,
  TIMER: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  ChatPsaRemove: [3582, {
    lastReceivedMediaType: [2, i.MEDIA_TYPE],
    lastReceivedMessageTs: [4, c],
    lastReceivedMsgId: [8, u],
    psaBlockReason: [10, a.PSA_BLOCK_REASON],
    psaCampaignId: [9, u],
    psaMessageRemoveAction: [5, o.PSA_MESSAGE_REMOVE_ACTION],
    psaMessageRemoveEntryPoint: [6, s.PSA_MESSAGE_REMOVE_ENTRY_POINT],
    waOfficialAccountName: [7, l.WA_OFFICIAL_ACCOUNT_NAME]
  }, [1, 1, 1], "regular"]
});
exports.ChatPsaRemoveWamEvent = d;