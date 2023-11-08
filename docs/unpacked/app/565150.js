Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvStoredTimestampExpiredWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  AdvStoredTimestampExpired: [3036, {
    advExpireTimeInHours: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.AdvStoredTimestampExpiredWamEvent = a;