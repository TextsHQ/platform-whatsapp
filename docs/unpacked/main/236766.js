Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickReplyWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./962854.js");
var o = require("./476674.js");
var l = require("./416678.js");
var i = require("./938010.js");
const {
  BOOLEAN: u,
  INTEGER: s,
  STRING: c
} = a.TYPES;
const d = (0, a.defineEvents)({
  QuickReply: [1468, {
    attachmentGifCount: [7, s],
    attachmentImageCount: [5, s],
    attachmentVideoCount: [6, s],
    isSmartDefault: [10, u],
    labelThreadId: [12, c],
    quickReplyAction: [1, r.QUICK_REPLY_ACTION],
    quickReplyCount: [2, s],
    quickReplyEntryPoint: [11, o.QUICK_REPLY_ENTRY_POINT],
    quickReplyKeywordCount: [3, s],
    quickReplyKeywordMatched: [4, u],
    quickReplyOrigin: [9, l.QUICK_REPLY_ORIGIN],
    quickReplyTranscodeResult: [8, i.QUICK_REPLY_TRANSCODE_RESULT],
    threadCreationDate: [14, c],
    threadEntryPoint: [13, c],
    threadIdHmac: [15, c]
  }, [1, 1, 1], "regular"]
});
exports.QuickReplyWamEvent = d;