Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmbPaidMessagesButtonLoggerWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./735543.js");
var o = require("./831246.js");
const {
  INTEGER: l,
  STRING: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  SmbPaidMessagesButtonLogger: [4508, {
    businessPhoneNumber: [1, l],
    pmButtonCount: [2, l],
    pmButtonEventType: [3, r.PM_BUTTON_EVENT_TYPE],
    pmButtonIndex: [4, l],
    pmButtonType: [5, o.PM_BUTTON_TYPE],
    pmServerCampaignId: [6, i]
  }, [1, 1, 1], "private", 113760892]
});
exports.SmbPaidMessagesButtonLoggerWamEvent = u;