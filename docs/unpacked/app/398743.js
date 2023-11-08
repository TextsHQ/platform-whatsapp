Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestAnonymousWeeklyIdWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  TestAnonymousWeeklyId: [2956, {
    psTestBooleanField: [2, i],
    psTestStringField: [3, o],
    psTimeSinceLastEventInMin: [1, a]
  }, [1, 1, 1], "private", 42196056]
});
exports.TestAnonymousWeeklyIdWamEvent = s;