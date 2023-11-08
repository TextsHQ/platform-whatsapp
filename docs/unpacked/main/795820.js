Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineVideoPlaybackClosedWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./257458.js");
var o = require("./58558.js");
var l = require("../app/718451.js");
const {
  BOOLEAN: i,
  INTEGER: u,
  STRING: s,
  TIMER: c
} = a.TYPES;
const d = (0, a.defineEvents)({
  InlineVideoPlaybackClosed: [2032, {
    inlineVideoCancelBeforePlayStateT: [7, c],
    inlineVideoComplete: [8, i],
    inlineVideoCompletionRate: [9, u],
    inlineVideoCtaClick: [10, r.INLINE_VIDEO_CTA_CLICK],
    inlineVideoDurationT: [2, c],
    inlineVideoError: [11, s],
    inlineVideoPlayStartT: [6, c],
    inlineVideoPlayed: [3, i],
    inlineVideoStallT: [4, c],
    inlineVideoType: [1, o.INLINE_VIDEO_TYPE],
    inlineVideoWatchT: [5, c],
    messageType: [12, l.MESSAGE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.InlineVideoPlaybackClosedWamEvent = d;