Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClockSkewDifferenceTWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  ClockSkewDifferenceT: [3178, {
    clockSkewHourly: [1, i]
  }, [1, 1000, 10000], "private", 37887164]
});
exports.ClockSkewDifferenceTWamEvent = a;