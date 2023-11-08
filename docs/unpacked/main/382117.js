Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiActionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/227016.js");
var o = require("../app/800277.js");
var l = require("../app/147402.js");
var i = require("./210344.js");
var u = require("./744976.js");
const {
  BOOLEAN: s,
  INTEGER: c,
  TIMER: d
} = a.TYPES;
const f = (0, a.defineEvents)({
  UiAction: [472, {
    agentEngagementType: [9, o.AGENT_ENGAGEMENT_ENUM_TYPE],
    deviceCount: [5, c],
    isLid: [8, s],
    localAddressingMode: [10, r.ADDRESSING_MODE],
    participantCount: [6, c],
    sizeBucket: [4, l.SIZE_BUCKET],
    uiActionChatType: [7, i.UI_ACTION_CHAT_TYPE],
    uiActionPreloaded: [2, s],
    uiActionT: [3, d],
    uiActionType: [1, u.UI_ACTION_TYPE]
  }, [1, 100, 5000], "regular"]
});
exports.UiActionWamEvent = f;