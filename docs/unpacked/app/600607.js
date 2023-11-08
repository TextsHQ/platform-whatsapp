Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenLockSettingsWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  ScreenLockSettings: [3872, {
    screenLockDuration: [1, i]
  }, [1, 1, 1], "private", 113760892]
});
exports.ScreenLockSettingsWamEvent = a;