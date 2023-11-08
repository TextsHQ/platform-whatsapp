Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdChatAssignmentWamEvent = undefined;
var r = require("./901032.js");
var i = require("./466993.js");
var a = require("./374224.js");
var o = require("./802783.js");
const {
  INTEGER: s,
  STRING: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  MdChatAssignment: [3752, {
    assignerAgentId: [1, l],
    assignerBrowserId: [2, l],
    assignerMdId: [3, s],
    chatAssignmentAction: [4, i.CHAT_ASSIGNMENT_ACTION_TYPE],
    chatAssignmentAgentId: [5, l],
    chatAssignmentBrowserId: [6, l],
    chatAssignmentChatType: [7, a.CHAT_ASSIGNMENT_CHAT_TYPE],
    chatAssignmentEntryPoint: [8, o.CHAT_ASSIGNMENT_ENTRY_POINT_TYPE],
    chatAssignmentMdId: [9, s],
    chatsCnt: [10, s]
  }, [1, 1, 1], "regular"]
});
exports.MdChatAssignmentWamEvent = u;