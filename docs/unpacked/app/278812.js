Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinInChat = undefined;
var r = require("./29797.js");
var i = require("./626596.js");
var a = require("./481173.js");
var o = require("./459857.js");
class s extends i.AddOnBaseModel {
  constructor() {
    super(...arguments);
    this.msgKey = (0, a.prop)();
    this.parentMsgKey = (0, a.prop)();
    this.senderTimestampMs = (0, a.prop)();
    this.t = (0, a.prop)();
    this.sender = (0, a.prop)();
    this.chatId = (0, a.prop)();
    this.pinType = (0, a.prop)();
    this.pinExpiryDuration = (0, a.prop)();
    this.id = (0, a.prop)();
    this.read = (0, a.prop)();
    this.isFailed = (0, a.derived)(function () {
      return (0, o.isMeAccount)(this.sender) && this.ack != null && this.ack < r.ACK.CLOCK || Boolean(this.isSendFailure);
    }, ["sender", "ack", "isSendFailure"]);
  }
}
const l = (0, a.defineModel)(s);
exports.PinInChat = l;