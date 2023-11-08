Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EphemeralSettingChangeWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./298187.js");
var o = require("./900213.js");
const {
  INTEGER: l,
  STRING: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  EphemeralSettingChange: [2370, {
    chatEphemeralityDuration: [1, l],
    ephemeralSettingEntryPoint: [3, r.EPHEMERAL_SETTING_ENTRY_POINT_TYPE],
    ephemeralSettingGroupSize: [5, o.PRECISE_SIZE_BUCKET],
    previousEphemeralityDuration: [2, l],
    threadId: [6, i]
  }, [1, 1, 1], "regular"]
});
exports.EphemeralSettingChangeWamEvent = u;