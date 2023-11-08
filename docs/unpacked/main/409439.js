Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessUnmuteWamEvent = undefined;
var a = require("../app/901032.js");
const {
  STRING: r
} = a.TYPES;
const o = (0, a.defineEvents)({
  BusinessUnmute: [1378, {
    muteeId: [1, r]
  }, [1, 1, 1], "regular"]
});
exports.BusinessUnmuteWamEvent = o;