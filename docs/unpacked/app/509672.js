var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deserializePinInChat = function (e) {
  return (0, i.default)((0, i.default)({}, e), {}, {
    msgKey: o.default.fromString(e.msgKey),
    parentMsgKey: o.default.fromString(e.parentMsgKey),
    chatId: (0, c.toChatWid)((0, c.createWid)(e.chatId)),
    sender: (0, c.createUserWid)(e.sender)
  });
};
exports.deserializePinInChatMsgData = function (e) {
  var t;
  const n = o.default.fromString(e.msgKey);
  const {
    from: r,
    to: i,
    author: a
  } = (0, s.msgKeyToTargetInfo)(n);
  return {
    id: o.default.fromString(e.msgKey),
    from: r,
    to: i,
    author: a,
    type: l.MSG_TYPE.PIN_MESSAGE,
    ack: e.ack,
    t: e.t,
    read: e.read,
    pinSenderTimestampMs: e.senderTimestampMs,
    pinParentKey: o.default.fromString(e.parentMsgKey),
    pinMessageType: (t = u.Message$PinInChatMessage$Type.cast(e.pinType)) !== null && t !== undefined ? t : u.Message$PinInChatMessage$Type.UNKNOWN_TYPE,
    pinExpiryDuration: e.pinExpiryDuration
  };
};
exports.serializePinInChat = function (e) {
  return (0, i.default)((0, i.default)({}, e), {}, {
    msgKey: e.msgKey.toString(),
    parentMsgKey: e.parentMsgKey.toString(),
    chatId: e.chatId.toString(),
    sender: e.sender.toString()
  });
};
exports.serializePinInChatMsgData = function (e) {
  var t;
  return {
    msgKey: e.id.toString(),
    ack: e.ack,
    t: e.t,
    read: e.read,
    parentMsgKey: e.pinParentKey.toString(),
    senderTimestampMs: e.pinSenderTimestampMs,
    chatId: e.id.remote.toString(),
    sender: (0, a.default)((t = e.author) !== null && t !== undefined ? t : e.from, "pin.author ?? pin.from").toString(),
    pinType: e.pinMessageType,
    pinExpiryDuration: e.pinExpiryDuration
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./670983.js"));
var o = r(require("./565754.js"));
var s = require("./580046.js");
var l = require("./373070.js");
var u = require("./533494.js");
var c = require("./669050.js");