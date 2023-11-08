Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDeleteActionsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./983017.js");
var o = require("../app/684290.js");
const {
  BOOLEAN: l,
  INTEGER: i,
  STRING: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  MessageDeleteActions: [3626, {
    deleteActionType: [1, r.DELETE_ACTION_TYPE],
    isAGroup: [2, l],
    mediaType: [6, o.MEDIA_TYPE],
    messagesDeleted: [3, i],
    threadId: [4, u]
  }, [1, 1, 1], "regular"]
});
exports.MessageDeleteActionsWamEvent = s;