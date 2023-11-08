Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdChatAssignmentSecondaryActionWamEvent = undefined;
var r = require("./901032.js");
var i = require("./80877.js");
var a = require("./958926.js");
var o = require("./469723.js");
var s = require("./687110.js");
var l = require("./776345.js");
const {
  INTEGER: u,
  STRING: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  MdChatAssignmentSecondaryAction: [3716, {
    mdChatAssignmentSecondaryActionAgentId: [1, c],
    mdChatAssignmentSecondaryActionAssignmentType: [8, a.MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE],
    mdChatAssignmentSecondaryActionBrowserId: [2, c],
    mdChatAssignmentSecondaryActionChatType: [3, o.MD_CHAT_ASSIGNMENT_CHAT_TYPE],
    mdChatAssignmentSecondaryActionError: [4, i.ERROR_TYPE],
    mdChatAssignmentSecondaryActionMdId: [5, u],
    mdChatAssignmentSecondaryActionSource: [6, l.MD_CHAT_ASSIGNMENT_SOURCE_TYPE],
    mdChatAssignmentSecondaryActionType: [7, s.MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.MdChatAssignmentSecondaryActionWamEvent = d;