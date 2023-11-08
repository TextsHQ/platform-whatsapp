Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinInChatMessageSendWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./607566.js");
var o = require("../app/560588.js");
var l = require("../app/684290.js");
var i = require("./771092.js");
const {
  BOOLEAN: u,
  INTEGER: s
} = a.TYPES;
const c = (0, a.defineEvents)({
  PinInChatMessageSend: [4438, {
    groupRole: [1, r.GROUP_ROLE_TYPE],
    groupTypeClient: [2, o.GROUP_TYPE_CLIENT],
    isAGroup: [3, u],
    mediaType: [4, l.MEDIA_TYPE],
    pinInChatExpirySecs: [5, s],
    pinInChatType: [6, i.PIN_IN_CHAT_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.PinInChatMessageSendWamEvent = c;