var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastAddOnPreviewCandidateFromReactionRowType = function (e) {
  return {
    msgKey: e.msgKey,
    parentMsgKey: e.parentMsgKey,
    sender: e.senderUserJid,
    reactionText: e.reactionText,
    timestamp: e.timestamp,
    isOrphan: e.orphan === 1,
    type: "reaction"
  };
};
exports.lastAddOnPreviewCandidateFromVoteData = function (e, t) {
  return {
    msgKey: e.msgKey.toString(),
    isOrphan: t,
    selectedOptionsCount: e.selectedOptionLocalIds.length,
    parentMsgKey: e.parentMsgKey.toString(),
    sender: e.sender.toString(),
    timestamp: e.senderTimestampMs,
    type: "poll_vote"
  };
};
exports.lastAddOnPreviewFromCandidate = function (e) {
  switch (e.type) {
    case "reaction":
      return {
        type: "reaction",
        msgKey: e.msgKey,
        parentMsgKey: e.parentMsgKey,
        reactionText: e.reactionText,
        sender: e.sender,
        timestamp: e.timestamp
      };
    case "poll_vote":
      return {
        type: "poll_vote",
        msgKey: e.msgKey,
        parentMsgKey: e.parentMsgKey,
        sender: e.sender,
        timestamp: e.timestamp
      };
  }
};
exports.lastAddOnPreviewFromDeprecatedLastReactionPreview = function (e) {
  return {
    msgKey: e.msgKey,
    parentMsgKey: e.parentMsgKey,
    sender: e.senderUserJid,
    timestamp: e.timestamp,
    reactionText: (0, i.default)(e.reactionText, "lastReactionPreview.reactionText"),
    type: "reaction"
  };
};
var i = r(require("./670983.js"));