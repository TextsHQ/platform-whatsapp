Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaStreamPlaybackWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/684290.js");
var o = require("./989639.js");
var l = require("./64193.js");
const {
  BOOLEAN: i,
  INTEGER: u,
  NUMBER: s,
  TIMER: c
} = a.TYPES;
const d = (0, a.defineEvents)({
  MediaStreamPlayback: [1584, {
    bytesDownloadedStart: [4, s],
    bytesTransferred: [5, s],
    didPlay: [15, i],
    forcedPlayCount: [12, u],
    initialBufferingT: [7, c],
    mediaSize: [2, s],
    mediaType: [3, r.MEDIA_TYPE],
    overallPlayT: [10, c],
    overallT: [1, c],
    playbackCount: [14, u],
    playbackError: [17, u],
    playbackOrigin: [16, o.PLAYBACK_ORIGIN_TYPE],
    playbackState: [11, l.PLAYBACK_STATE_TYPE],
    seekCount: [13, u],
    totalRebufferingCount: [9, u],
    totalRebufferingT: [8, c],
    videoDuration: [6, u]
  }, [1, 1, 1], "regular"]
});
exports.MediaStreamPlaybackWamEvent = d;