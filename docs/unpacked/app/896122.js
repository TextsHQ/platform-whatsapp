Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertReactionRowToFlattenedReaction = function (e) {
  var t;
  return (0, r.createFlattenedReactionModel)({
    msgKey: e.msgKey,
    orphan: e.orphan,
    parentMsgKey: e.parentMsgKey,
    reactionText: e.reactionText,
    read: (t = e.read) !== null && t !== undefined && t,
    senderUserJid: e.senderUserJid,
    timestamp: e.timestamp
  });
};
var r = require("./590677.js");