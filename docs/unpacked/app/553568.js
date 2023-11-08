Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeepLinkClickWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  STRING: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  DeepLinkClick: [1156, {
    deepLinkHasPhoneNumber: [2, i],
    deepLinkHasText: [1, i],
    deepLinkSessionId: [3, a]
  }, [1, 1, 1], "regular"]
});
exports.DeepLinkClickWamEvent = o;