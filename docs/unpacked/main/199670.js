Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnackbarDeleteUndoWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/684290.js");
var o = require("./114443.js");
const {
  BOOLEAN: l,
  INTEGER: i,
  STRING: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  SnackbarDeleteUndo: [3628, {
    isAGroup: [1, l],
    mediaType: [6, r.MEDIA_TYPE],
    messagesUndeleted: [2, i],
    snackbarActionType: [3, o.SNACKBAR_ACTION_TYPE],
    threadId: [4, u]
  }, [1, 1, 1], "regular"]
});
exports.SnackbarDeleteUndoWamEvent = s;