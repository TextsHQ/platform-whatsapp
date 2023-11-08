Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiMessageYourselfActionWamEvent = undefined;
var o = require("../app/901032.js");
var r = require("./662374.js");
var a = require("./492330.js");
const {
  STRING: l
} = o.TYPES;
const i = (0, o.defineEvents)({
  UiMessageYourselfAction: [3780, {
    uiMessageYourselfActionSessionId: [1, l],
    uiMessageYourselfActionType: [2, r.UI_MESSAGE_YOURSELF_ACTION_TYPE],
    uiMessageYourselfFunnelName: [3, a.UI_MESSAGE_YOURSELF_FUNNEL_NAME]
  }, [1, 1, 1], "regular"]
});
exports.UiMessageYourselfActionWamEvent = i;