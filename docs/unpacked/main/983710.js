Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisappearingModeSettingEventsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./901952.js");
var o = require("./254014.js");
const {
  INTEGER: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  DisappearingModeSettingEvents: [3446, {
    disappearingModeEntryPoint: [5, r.DISAPPEARING_MODE_ENTRY_POINT_TYPE],
    disappearingModeSettingEventName: [1, o.DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE],
    lastToggleTimestamp: [2, l],
    newEphemeralityDuration: [3, l],
    previousEphemeralityDuration: [4, l]
  }, [1, 1, 1], "regular"]
});
exports.DisappearingModeSettingEventsWamEvent = i;