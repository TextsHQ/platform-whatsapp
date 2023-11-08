var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimestamp = function (e) {
  if (e.t == null) {
    return e.senderTimestampMs;
  } else {
    return e.t * 1000;
  }
};
exports.pollVoteMsgDataToVoteData = function (e) {
  return {
    msgKey: e.id,
    parentMsgKey: e.pollUpdateParentKey,
    selectedOptionLocalIds: e.selectedOptionLocalIds,
    senderTimestampMs: e.senderTimestampMs,
    t: (0, a.getT)(e),
    sender: (0, u.toUserWid)((0, i.default)((0, a.getSender)(e), "getSender(msgData)")),
    ack: (0, a.getAck)(e),
    read: (0, l.isMeAccount)(e.from)
  };
};
exports.voteDataToPollVoteMsgData = function (e) {
  var t;
  var n;
  const {
    from: r,
    to: i,
    author: a
  } = (0, o.msgKeyToTargetInfo)(e.msgKey);
  return {
    id: e.msgKey,
    to: i,
    from: r,
    author: a,
    type: s.MSG_TYPE.POLL_UPDATE,
    pollUpdateParentKey: e.parentMsgKey,
    selectedOptionLocalIds: e.selectedOptionLocalIds,
    senderTimestampMs: e.senderTimestampMs,
    t: (t = e.t) !== null && t !== undefined ? t : undefined,
    ack: (n = e.ack) !== null && n !== undefined ? n : undefined
  };
};
var i = r(require("./670983.js"));
var a = require("./787742.js");
var o = require("./580046.js");
var s = require("./373070.js");
var l = require("./459857.js");
var u = require("./669050.js");