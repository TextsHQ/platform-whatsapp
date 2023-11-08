Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrashLogWamEvent = undefined;
var r = require("./901032.js");
var i = require("./958280.js");
const {
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  CrashLog: [494, {
    crashContext: [3, o],
    crashCount: [5, a],
    crashReason: [2, o],
    crashType: [6, i.CRASH_TYPE]
  }, [1, 1, 100], "regular"]
});
exports.CrashLogWamEvent = s;