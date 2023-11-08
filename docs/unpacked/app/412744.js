Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollEncValueSpec = exports.MsgRowOpaqueDataSpec = exports.MsgOpaqueDataSpec = exports.MsgOpaqueData$PollOptionSpec = undefined;
var r = require("./751206.js");
const i = {};
exports.MsgRowOpaqueDataSpec = i;
const a = {};
exports.PollEncValueSpec = a;
const o = {};
exports.MsgOpaqueDataSpec = o;
const s = {};
exports.MsgOpaqueData$PollOptionSpec = s;
i.internalSpec = {
  currentMsg: [1, r.TYPES.MESSAGE, o],
  quotedMsg: [2, r.TYPES.MESSAGE, o]
};
a.internalSpec = {
  encPayload: [1, r.TYPES.BYTES],
  encIv: [2, r.TYPES.BYTES]
};
o.internalSpec = {
  body: [1, r.TYPES.STRING],
  caption: [3, r.TYPES.STRING],
  lng: [5, r.TYPES.DOUBLE],
  isLive: [6, r.TYPES.BOOL],
  lat: [7, r.TYPES.DOUBLE],
  paymentAmount1000: [8, r.TYPES.INT32],
  paymentNoteMsgBody: [9, r.TYPES.STRING],
  canonicalUrl: [10, r.TYPES.STRING],
  matchedText: [11, r.TYPES.STRING],
  title: [12, r.TYPES.STRING],
  description: [13, r.TYPES.STRING],
  futureproofBuffer: [14, r.TYPES.BYTES],
  clientUrl: [15, r.TYPES.STRING],
  loc: [16, r.TYPES.STRING],
  pollName: [17, r.TYPES.STRING],
  pollOptions: [18, r.FLAGS.REPEATED | r.TYPES.MESSAGE, s],
  pollSelectableOptionsCount: [20, r.TYPES.UINT32],
  messageSecret: [21, r.TYPES.BYTES],
  originalSelfAuthor: [51, r.TYPES.STRING],
  senderTimestampMs: [22, r.TYPES.INT64],
  pollUpdateParentKey: [23, r.TYPES.STRING],
  encPollVote: [24, r.TYPES.MESSAGE, a],
  isSentCagPollCreation: [28, r.TYPES.BOOL],
  encReactionTargetMessageKey: [25, r.TYPES.STRING],
  encReactionEncPayload: [26, r.TYPES.BYTES],
  encReactionEncIv: [27, r.TYPES.BYTES],
  botMessageSecret: [29, r.TYPES.BYTES],
  targetMessageKey: [30, r.TYPES.STRING],
  encPayload: [31, r.TYPES.BYTES],
  encIv: [32, r.TYPES.BYTES]
};
s.internalSpec = {
  name: [1, r.TYPES.STRING]
};