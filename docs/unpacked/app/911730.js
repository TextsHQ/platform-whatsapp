Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotBizJourneyWamEvent = undefined;
var r = require("./901032.js");
var i = require("./695094.js");
var a = require("./790397.js");
var o = require("./646703.js");
const {
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  BotBizJourney: [4868, {
    appSessionId: [1, s],
    botBizActionType: [5, i.BOT_BIZ_ACTION_TYPE],
    botBizEntryPoint: [6, a.BOT_BIZ_ENTRY_POINT],
    botBizType: [7, o.BOT_BIZ_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.BotBizJourneyWamEvent = l;