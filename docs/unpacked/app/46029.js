Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcPhoneDisconnectedWamEvent = undefined;
var r = require("./901032.js");
const {
  TIMER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  WebcPhoneDisconnected: [878, {
    webcPhoneBbarShownT: [2, i],
    webcPhoneDisconnectedT: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.WebcPhoneDisconnectedWamEvent = a;