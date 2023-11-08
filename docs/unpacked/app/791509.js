Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdAppStateDirtyBitsWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  MdAppStateDirtyBits: [2520, {
    dirtyBitsFalsePositive: [2, i]
  }, [1, 20, 1000], "regular"]
});
exports.MdAppStateDirtyBitsWamEvent = a;