Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageContextMenuActionsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./880921.js");
var o = require("./145349.js");
const {
  BOOLEAN: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  MessageContextMenuActions: [3694, {
    isAGroup: [1, l],
    isMultiAction: [2, l],
    isOriginalSender: [3, l],
    messageContextMenuAction: [4, r.MESSAGE_CONTEXT_MENU_ACTION_TYPE],
    messageContextMenuOption: [5, o.MESSAGE_CONTEXT_MENU_OPTION_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.MessageContextMenuActionsWamEvent = i;