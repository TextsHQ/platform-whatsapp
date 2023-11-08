var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRowFromVote = function (e) {
  const t = {
    msgKey: e.msgKey.toString(),
    parentMsgKey: e.parentMsgKey.toString(),
    selectedOptionLocalIds: new Uint8Array(e.selectedOptionLocalIds).buffer,
    senderTimestampMs: e.senderTimestampMs,
    sender: e.sender.toString(),
    read: e.read
  };
  if (e.t != null) {
    t.t = e.t;
  }
  if (e.ack != null) {
    t.ack = e.ack;
  }
  return t;
};
exports.voteFromDbRow = function (e) {
  var t;
  return {
    msgKey: i.default.fromString(e.msgKey),
    parentMsgKey: i.default.fromString(e.parentMsgKey),
    selectedOptionLocalIds: Array.from(new Uint8Array(e.selectedOptionLocalIds)),
    senderTimestampMs: e.senderTimestampMs,
    t: e.t,
    sender: (0, a.createUserWid)(e.sender),
    ack: e.ack,
    read: (t = e.read) === null || t === undefined || t
  };
};
var i = r(require("./565754.js"));
var a = require("./669050.js");