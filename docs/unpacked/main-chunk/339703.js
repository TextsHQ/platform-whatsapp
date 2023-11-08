Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatFilterEventWamEvent = undefined;
var o = require("../app/901032.js");
var r = require("../app/571444.js");
var a = require("./965858.js");
var l = require("./167532.js");
var i = require("./894760.js");
const {
  INTEGER: s,
  STRING: u
} = o.TYPES;
const d = (0, o.defineEvents)({
  ChatFilterEvent: [1616, {
    actionType: [1, r.CHAT_FILTER_ACTION_TYPES],
    activitySessionId: [6, u],
    filterType: [2, l.CHAT_FILTER_TYPES],
    metadata: [7, u],
    searchQueryId: [8, u],
    searchRequestId: [9, u],
    searchResultType: [4, i.CHAT_SEARCH_RESULT_TYPE],
    sessionId: [3, s],
    targetScreen: [5, a.CHAT_FILTER_TARGET_SCREEN]
  }, [1, 1, 1], "regular"]
});
exports.ChatFilterEventWamEvent = d;