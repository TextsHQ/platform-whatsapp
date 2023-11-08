var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinInChatCollectionImpl = exports.PinInChatCollection = undefined;
exports.createPinInChatModel = function (e) {
  return new u.PinInChat((0, i.default)({
    id: f(e.parentMsgKey)
  }, e));
};
exports.filterValidPins = function (e) {
  if (!(0, d.isPinnedMessagesM1ReceiverEnabled)()) {
    return [];
  }
  return e.filter(e => e.pinType === c.PIN_STATE.PIN && e.parentMsgKey != null && !_(e)).sort(p.comparator).slice(0, (0, o.getABPropConfigValue)("pinned_messages_m2_pin_max"));
};
exports.getPinInChatId = f;
exports.isPinExpired = _;
exports.isPinValid = function (e) {
  return e.pinType === c.PIN_STATE.PIN && e.parentMsgKey != null && !_(e);
};
var i = r(require("../vendor/81109.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./392125.js");
var l = require("./818454.js");
var u = require("./278812.js");
var c = require("./96374.js");
var d = require("./591800.js");
class p extends s.BaseCollection {
  constructor() {
    super(...arguments);
    this.hydratedChats = new Set();
    this.byChatId = (0, l.aggregated)(e => e.chatId);
  }
  deleteByParentMessageKey(e) {
    this.remove(f(e));
  }
  getByMsgKey(e) {
    return this.findFirst(t => t.msgKey.equals(e));
  }
}
function f(e) {
  return `!!${e.toString()}`;
}
function _(e) {
  var t;
  var n;
  if (e.senderTimestampMs == null) {
    return false;
  }
  const r = e.pinExpiryDuration != null;
  const i = ((t = e.t) !== null && t !== undefined ? t : Math.floor(e.senderTimestampMs / 1000)) + ((n = e.pinExpiryDuration) !== null && n !== undefined ? n : 0);
  return r && i < (0, a.unixTime)();
}
exports.PinInChatCollectionImpl = p;
p.model = u.PinInChat;
p.comparator = (e, t) => Number(t.t) - Number(e.t);
const g = new p();
exports.PinInChatCollection = g;