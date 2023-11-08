Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoMuteLargeGroupActionsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./741571.js");
const {
  INTEGER: o,
  STRING: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  AutoMuteLargeGroupActions: [3880, {
    autoMuteAction: [1, r.AUTO_MUTE_ACTION_TYPE],
    autoMuteGroupId: [2, l],
    autoMuteGroupSize: [3, o]
  }, [1, 1, 1], "regular"]
});
exports.AutoMuteLargeGroupActionsWamEvent = i;