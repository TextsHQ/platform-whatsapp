Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdAppStateKeyRotationWamEvent = undefined;
var r = require("./901032.js");
var i = require("./310899.js");
const a = (0, r.defineEvents)({
  MdAppStateKeyRotation: [2518, {
    mdAppStateKeyRotationReason: [1, i.MD_APP_STATE_KEY_ROTATION_REASON_CODE]
  }, [1, 20, 1000], "regular"]
});
exports.MdAppStateKeyRotationWamEvent = a;