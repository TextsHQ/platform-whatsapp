Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdDeviceSyncAckWamEvent = undefined;
var r = require("./901032.js");
var i = require("./227016.js");
var a = require("./244186.js");
var o = require("./21008.js");
const {
  BOOLEAN: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MdDeviceSyncAck: [2180, {
    chatType: [1, a.MESSAGE_CHAT_TYPE],
    isLid: [3, s],
    localAddressingMode: [5, i.ADDRESSING_MODE],
    revoke: [2, s],
    serverAddressingMode: [6, i.ADDRESSING_MODE],
    typeOfGroup: [4, o.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.MdDeviceSyncAckWamEvent = l;