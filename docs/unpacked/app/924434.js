Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdAppStateSyncDailyWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  MdAppStateSyncDaily: [2300, {
    crossIndexConflictCount: [11, i],
    invalidActionCount: [4, i],
    keyRotationRemoveCount: [12, i],
    missingKeyCount: [9, i],
    mutationCount: [1, i],
    storedMutationCount: [7, i],
    unsetActionCount: [8, i],
    unsupportedActionCount: [5, i],
    uploadConflictCount: [10, i]
  }, [1, 1, 1], "regular"]
});
exports.MdAppStateSyncDailyWamEvent = a;