Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageHighRetryCountWamEvent = undefined;
var r = require("./901032.js");
var i = require("./195222.js");
var a = require("./684290.js");
var o = require("./718451.js");
var s = require("./147402.js");
const {
  INTEGER: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  MessageHighRetryCount: [3132, {
    deviceSizeBucket: [5, s.SIZE_BUCKET],
    e2eSenderType: [3, i.E2E_SENDER_TYPE],
    mediaType: [1, a.MEDIA_TYPE],
    messageType: [4, o.MESSAGE_TYPE],
    retryCount: [2, l]
  }, [1, 20, 20], "regular"]
});
exports.MessageHighRetryCountWamEvent = u;