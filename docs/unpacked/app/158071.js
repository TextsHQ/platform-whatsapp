Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2eRetryRejectWamEvent = undefined;
var r = require("./901032.js");
var i = require("./622195.js");
var a = require("./718451.js");
var o = require("./555202.js");
const {
  BOOLEAN: s,
  INTEGER: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  E2eRetryReject: [3578, {
    messageType: [1, a.MESSAGE_TYPE],
    msgRetryCount: [2, l],
    retryRejectReason: [3, o.RETRY_REJECT_REASON],
    retryRevoke: [4, s],
    senderDeviceType: [5, i.DEVICE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.E2eRetryRejectWamEvent = u;