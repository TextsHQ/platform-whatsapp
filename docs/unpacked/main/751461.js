Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisappearingMessageKeepInChatWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./281134.js");
var o = require("./613131.js");
var l = require("./982015.js");
var i = require("../app/684290.js");
const {
  BOOLEAN: u,
  INTEGER: s,
  STRING: c
} = a.TYPES;
const d = (0, a.defineEvents)({
  DisappearingMessageKeepInChat: [3482, {
    canEditDmSettings: [16, u],
    chatEphemeralityDuration: [1, s],
    isAGroup: [2, u],
    isAdmin: [3, u],
    keptCount: [15, s],
    keptDelta: [4, s],
    kicActionName: [5, r.KIC_ACTION_NAME_TYPE],
    kicActor: [6, o.KIC_ACTOR_TYPE],
    kicEntryPoint: [7, l.KIC_ENTRY_POINT_TYPE],
    mediaType: [8, i.MEDIA_TYPE],
    messageExpiredOnUnkeep: [9, u],
    messageExpiryTimer: [10, s],
    messagesInFolder: [11, s],
    messagesSelected: [12, s],
    threadId: [13, c]
  }, [1, 1, 1], "regular"]
});
exports.DisappearingMessageKeepInChatWamEvent = d;