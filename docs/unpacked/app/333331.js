Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoTranscoderWamEvent = undefined;
var r = require("./901032.js");
var i = require("./327216.js");
var a = require("./717041.js");
var o = require("./19958.js");
var s = require("./630098.js");
const {
  BOOLEAN: l,
  NUMBER: u,
  TIMER: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  VideoTranscoder: [1802, {
    sourceAudioBitRate: [12, u],
    sourceDuration: [8, c],
    sourceFileSize: [7, u],
    sourceFormat: [14, o.VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE],
    sourceFrameRate: [13, u],
    sourceHeight: [10, u],
    sourceVideoBitRate: [11, u],
    sourceWidth: [9, u],
    targetAudioBitRate: [20, u],
    targetDuration: [16, c],
    targetFileSize: [15, u],
    targetFormat: [22, s.VIDEO_TRANSCODER_TARGET_FORMAT_TYPE],
    targetFrameRate: [21, u],
    targetHeight: [18, u],
    targetVideoBitRate: [19, u],
    targetWidth: [17, u],
    transcoderAlgorithm: [1, i.VIDEO_TRANSCODER_ALGORITHM_TYPE],
    transcoderContainsVideocomposition: [5, l],
    transcoderHasEdits: [6, l],
    transcoderIsPassthrough: [4, l],
    transcoderResult: [2, a.VIDEO_TRANSCODER_RESULT_TYPE],
    transcoderT: [3, c]
  }, [1, 1, 1], "regular"]
});
exports.VideoTranscoderWamEvent = d;