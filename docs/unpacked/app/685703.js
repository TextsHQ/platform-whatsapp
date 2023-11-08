Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdAppStateMessageRangeWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  MdAppStateMessageRange: [2522, {
    additionalMessagesCount: [1, i]
  }, [1, 20, 1000], "regular"]
});
exports.MdAppStateMessageRangeWamEvent = a;