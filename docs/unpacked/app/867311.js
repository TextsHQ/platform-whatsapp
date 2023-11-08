Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatRowOpaqueDataSpec = exports.ChatRowOpaqueData$DraftMessageSpec = exports.ChatRowOpaqueData$DraftMessage$CtwaContextLinkDataSpec = exports.ChatRowOpaqueData$DraftMessage$CtwaContextDataSpec = exports.ChatRowOpaqueData$DraftMessage$CtwaContextData$ContextInfoExternalAdReplyInfoMediaType = undefined;
var r = require("./751206.js");
const i = require("../vendor/76672.js")({
  NONE: 0,
  IMAGE: 1,
  VIDEO: 2
});
exports.ChatRowOpaqueData$DraftMessage$CtwaContextData$ContextInfoExternalAdReplyInfoMediaType = i;
const a = {};
exports.ChatRowOpaqueDataSpec = a;
const o = {};
exports.ChatRowOpaqueData$DraftMessageSpec = o;
const s = {};
exports.ChatRowOpaqueData$DraftMessage$CtwaContextDataSpec = s;
const l = {};
exports.ChatRowOpaqueData$DraftMessage$CtwaContextLinkDataSpec = l;
a.internalSpec = {
  draftMessage: [1, r.TYPES.MESSAGE, o]
};
o.internalSpec = {
  text: [1, r.TYPES.STRING],
  omittedUrl: [2, r.TYPES.STRING],
  ctwaContextLinkData: [3, r.TYPES.MESSAGE, l],
  ctwaContext: [4, r.TYPES.MESSAGE, s],
  timestamp: [5, r.TYPES.INT64]
};
s.internalSpec = {
  conversionSource: [1, r.TYPES.STRING],
  conversionData: [2, r.TYPES.BYTES],
  sourceUrl: [3, r.TYPES.STRING],
  sourceId: [4, r.TYPES.STRING],
  sourceType: [5, r.TYPES.STRING],
  title: [6, r.TYPES.STRING],
  description: [7, r.TYPES.STRING],
  thumbnail: [8, r.TYPES.STRING],
  thumbnailUrl: [9, r.TYPES.STRING],
  mediaType: [10, r.TYPES.ENUM, i],
  mediaUrl: [11, r.TYPES.STRING],
  isSuspiciousLink: [12, r.TYPES.BOOL]
};
l.internalSpec = {
  context: [1, r.TYPES.STRING],
  sourceUrl: [2, r.TYPES.STRING],
  icebreaker: [3, r.TYPES.STRING],
  phone: [4, r.TYPES.STRING]
};