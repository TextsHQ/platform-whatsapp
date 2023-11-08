Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenLockSettingsDataWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  ScreenLockSettingsData: [4802, {
    screenAutoLockDuration: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.ScreenLockSettingsDataWamEvent = a;