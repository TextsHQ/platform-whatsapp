Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendRevokeMessageWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./718451.js");
const {
  INTEGER: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  SendRevokeMessage: [1348, {
    messageMediaType: [2, i.MEDIA_TYPE],
    messageType: [1, a.MESSAGE_TYPE],
    revokeSendDelay: [3, o]
  }, [1, 1, 1], "regular"]
});
exports.SendRevokeMessageWamEvent = s;