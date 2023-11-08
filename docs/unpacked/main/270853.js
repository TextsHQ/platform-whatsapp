Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinInChatInteractionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./607566.js");
var o = require("../app/560588.js");
var l = require("../app/684290.js");
var i = require("./273210.js");
const {
  BOOLEAN: u,
  INTEGER: s
} = a.TYPES;
const c = (0, a.defineEvents)({
  PinInChatInteraction: [4436, {
    groupRole: [1, r.GROUP_ROLE_TYPE],
    groupSize: [2, s],
    groupTypeClient: [3, o.GROUP_TYPE_CLIENT],
    isAGroup: [4, u],
    mediaType: [5, l.MEDIA_TYPE],
    pinCount: [6, s],
    pinInChatInteractionType: [7, i.PIN_IN_CHAT_INTERACTION_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.PinInChatInteractionWamEvent = c;