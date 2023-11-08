Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeepInChatNuxWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./567572.js");
var o = require("./280511.js");
const {
  INTEGER: l,
  STRING: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  KeepInChatNux: [3486, {
    chatEphemeralityDuration: [1, l],
    kicNuxActionName: [2, r.KIC_NUX_ACTION_NAME_TYPE],
    threadId: [3, i],
    trigger: [4, o.TRIGGER_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.KeepInChatNuxWamEvent = u;