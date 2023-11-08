Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatFolderOpenWamEvent = undefined;
var a = require("../app/901032.js");
const {
  BOOLEAN: r,
  INTEGER: o,
  STRING: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  ChatFolderOpen: [2808, {
    activityIndicatorCount: [2, o],
    folderType: [1, l],
    hasImportantMessages: [3, r]
  }, [1, 1, 1], "regular"]
});
exports.ChatFolderOpenWamEvent = i;