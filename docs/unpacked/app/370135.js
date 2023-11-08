var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollVote = undefined;
var i = r(require("./670983.js"));
var a = require("./402994.js");
var o = require("./626596.js");
var s = require("./481173.js");
var l = require("./177938.js");
var u = require("./163755.js");
var c = require("./521109.js");
var d = require("./459857.js");
class p extends o.AddOnBaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.msgKey = (0, s.prop)();
    this.parentMsgKey = (0, s.prop)();
    this.selectedOptionLocalIds = (0, s.prop)();
    this.senderTimestampMs = (0, s.prop)();
    this.t = (0, s.prop)();
    this.sender = (0, s.prop)();
    this.read = (0, s.prop)();
    this.parentMsg = (0, s.derived)(function () {
      const {
        MsgCollection: e
      } = require("./61113.js");
      const t = (0, i.default)(e.get(this.parentMsgKey), "MsgCollection.get(this.parentMsgKey)");
      return (0, i.default)((0, u.getAsPollCreation)(t), "getAsPollCreation(msg)");
    });
    this.senderObj = (0, s.derived)(function () {
      return l.ContactCollection.gadd(this.sender);
    });
    this.isUnvote = (0, s.derived)(function () {
      return this.selectedOptionLocalIds.length === 0;
    }, ["selectedOptionLocalIds"]);
    this.isFailed = (0, s.derived)(function () {
      return (0, d.isMeAccount)(this.sender) && this.ack != null && this.ack < a.ACK.CLOCK || Boolean(this.isSendFailure);
    }, ["ack", "isSendFailure"]);
    this.timestamp = (0, s.derived)(function () {
      return (0, c.getTimestamp)(this);
    }, ["t", "senderTimestampMs"]);
  }
  getData() {
    return {
      msgKey: this.msgKey,
      parentMsgKey: this.parentMsgKey,
      selectedOptionLocalIds: this.selectedOptionLocalIds,
      senderTimestampMs: this.senderTimestampMs,
      t: this.t,
      sender: this.sender,
      ack: this.ack,
      read: this.read
    };
  }
}
p.Proxy = "poll_vote";
const f = (0, s.defineModel)(p);
exports.PollVote = f;