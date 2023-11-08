Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestAnonymousIdLessWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  TestAnonymousIdLess: [3004, {
    psTimeSinceLastEventInMin: [1, i]
  }, [1, 1, 1], "private", 0]
});
exports.TestAnonymousIdLessWamEvent = a;