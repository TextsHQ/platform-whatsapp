Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMuteWamEvent = undefined;
var a = require("../app/901032.js");
const {
  STRING: r,
  TIMER: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  BusinessMute: [1376, {
    muteT: [2, o],
    muteeId: [1, r]
  }, [1, 1, 1], "regular"]
});
exports.BusinessMuteWamEvent = l;