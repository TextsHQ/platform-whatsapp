Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RevokeMessageSendWamEvent = undefined;
var r = require("./901032.js");
var i = require("./718451.js");
var a = require("./564066.js");
const {
  BOOLEAN: o,
  INTEGER: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  RevokeMessageSend: [3656, {
    messageSendResultIsTerminal: [1, o],
    messageType: [2, i.MESSAGE_TYPE],
    resendCount: [3, s],
    retryCount: [4, s],
    revokeDuration: [5, s],
    revokeType: [6, a.REVOKE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.RevokeMessageSendWamEvent = l;