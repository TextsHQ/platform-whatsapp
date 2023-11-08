var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPinExpiration = v;
exports.craftPinMessage = E;
exports.seekAndDestroyExpiredPins = function () {
  return _.apply(this, arguments);
};
exports.updatePinCollection = function (e, t) {
  const n = t.map(e => E(e));
  const a = n.map(e => (0, o.default)({
    id: (0, f.getPinInChatId)(e.parentMsgKey)
  }, e));
  f.PinInChatCollection.add(a, {
    merge: true
  });
  f.PinInChatCollection.byChatId(e).filter(e => e.pinType === p.PIN_STATE.PIN).sort((e, t) => t.senderTimestampMs - e.senderTimestampMs).slice((0, i.getABPropConfigValue)("pinned_messages_m2_pin_max")).forEach(e => {
    e.pinType = p.PIN_STATE.UNPIN;
  });
  return n;
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../app/670983.js"));
var i = require("../app/287461.js");
var u = require("./266121.js");
var s = require("../app/163755.js");
var c = require("../app/787742.js");
var d = require("../app/692544.js");
var f = require("../app/722091.js");
var p = require("../app/96374.js");
var m = require("../app/533494.js");
var h = require("../app/459857.js");
var g = require("../app/669050.js");
function E(e) {
  const t = (0, s.getChat)((0, d.msgModelFromMsgData)(e));
  const n = (0, l.default)((0, c.getSender)(e), "getSender(msg)");
  var a;
  return {
    msgKey: e.id,
    parentMsgKey: (0, l.default)(e.pinParentKey, "msg.pinParentKey"),
    senderTimestampMs: (0, l.default)(e.pinSenderTimestampMs, "msg.pinSenderTimestampMs"),
    sender: (0, g.toUserWid)(n),
    pinType: (a = e.pinMessageType, a === m.Message$PinInChatMessage$Type.PIN_FOR_ALL ? p.PIN_STATE.PIN : a === m.Message$PinInChatMessage$Type.UNPIN_FOR_ALL ? p.PIN_STATE.UNPIN : p.PIN_STATE.INVALID),
    pinExpiryDuration: e.pinExpiryDuration,
    t: e.t,
    chatId: (0, g.toChatWid)(t.id),
    ack: e.ack,
    read: (0, h.isMeAccount)(n)
  };
}
function v(e) {
  const t = [];
  const n = [];
  for (const a of e) {
    if ((0, f.isPinExpired)(a)) {
      n.push(a.parentMsgKey);
    } else {
      t.push(a);
    }
  }
  return {
    validPins: t,
    expiredPinParentKeys: n
  };
}
function _() {
  return (_ = (0, r.default)(function* (e) {
    const {
      validPins: t,
      expiredPinParentKeys: n
    } = v(e);
    if (n.length > 0) {
      try {
        yield (0, u.deleteExpiredPins)(n.map(e => e.toString()));
        __LOG__(2)`deleteExpiredPins Success`;
        n.forEach(e => f.PinInChatCollection.deleteByParentMessageKey(e));
      } catch (e) {
        __LOG__(4, undefined, new Error())`deleteExpiredPins: error deleting expired pins from DB: ${e}`;
      }
    }
    return t;
  })).apply(this, arguments);
}