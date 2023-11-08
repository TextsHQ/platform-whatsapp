Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PnhDailyCtwaWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i,
  STRING: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  PnhDailyCtwa: [4280, {
    matMessagesReceived: [1, i],
    threadDs: [3, a],
    threadId: [2, a]
  }, [1, 1, 1], "regular"]
});
exports.PnhDailyCtwaWamEvent = o;