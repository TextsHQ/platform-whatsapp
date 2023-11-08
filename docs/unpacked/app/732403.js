Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMessageSendWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./718451.js");
const {
  BOOLEAN: o,
  TIMER: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  WebcMessageSend: [2072, {
    messageIsForward: [3, o],
    messageMediaType: [2, i.MEDIA_TYPE],
    messageSendT: [4, s],
    messageType: [1, a.MESSAGE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.WebcMessageSendWamEvent = l;