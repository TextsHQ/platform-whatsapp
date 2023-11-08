Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeepInChatPerfWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./483618.js");
var o = require("./859680.js");
var l = require("./867923.js");
const {
  INTEGER: i,
  STRING: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  KeepInChatPerf: [3488, {
    chatEphemeralityDuration: [1, i],
    kicErrorCode: [2, r.KIC_ERROR_CODE_TYPE],
    kicMessageEphemeralityDuration: [3, i],
    kicRequestType: [4, o.KIC_REQUEST_TYPE_TYPE],
    requestSendTime: [5, i],
    response: [6, l.RESPONSE_TYPE],
    threadId: [7, u]
  }, [1, 1, 1], "regular"]
});
exports.KeepInChatPerfWamEvent = s;