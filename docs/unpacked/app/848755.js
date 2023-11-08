Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgKeyFieldsInOpaqueData = exports.MSG_OPAQUE_DATA_KEYS = undefined;
exports.getKey = function (e, t) {
  if (e === "reaction_enc") {
    return n[t];
  }
  return t;
};
exports.MSG_OPAQUE_DATA_KEYS = ["body", "caption", "paymentAmount1000", "futureproofBuffer", "messageSecret", "clientUrl", "loc", "lng", "lat", "isLive", "canonicalUrl", "matchedText", "title", "description", "pollName", "pollSelectableOptionsCount", "isSentCagPollCreation", "pollUpdateParentKey", "encPollVote", "senderTimestampMs", "targetMessageKey", "encIv", "encPayload"];
exports.MsgKeyFieldsInOpaqueData = ["targetMessageKey", "pollUpdateParentKey"];
const n = {
  targetMessageKey: "encReactionTargetMessageKey",
  encIv: "encReactionEncIv",
  encPayload: "encReactionEncPayload",
  encReactionTargetMessageKey: "targetMessageKey",
  encReactionEncIv: "encIv",
  encReactionEncPayload: "encPayload"
};