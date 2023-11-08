Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisappearingModeSettingChangeWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./901952.js");
const {
  INTEGER: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  DisappearingModeSettingChange: [3056, {
    disappearingModeEntryPoint: [4, r.DISAPPEARING_MODE_ENTRY_POINT_TYPE],
    lastToggleTimestamp: [3, o],
    newEphemeralityDuration: [2, o],
    previousEphemeralityDuration: [1, o]
  }, [1, 1, 1], "regular"]
});
exports.DisappearingModeSettingChangeWamEvent = l;