Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UtmMessageSendWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  UtmMessageSend: [4018, {
    businessPhoneNumber: [1, i]
  }, [1, 1, 1], "private", 0]
});
exports.UtmMessageSendWamEvent = a;