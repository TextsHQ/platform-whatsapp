Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusReplyWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./351917.js");
var o = require("./873225.js");
const {
  BOOLEAN: l,
  INTEGER: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  StatusReply: [1180, {
    isPosterBiz: [4, l],
    isPosterInAddressBook: [6, l],
    statusReplyMessageType: [3, r.STATUS_REPLY_MESSAGE_TYPE],
    statusReplyResult: [2, o.STATUS_REPLY_RESULT],
    statusSessionId: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.StatusReplyWamEvent = u;