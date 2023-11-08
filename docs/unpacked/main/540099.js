Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttPlaybackWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./118547.js");
var o = require("./377643.js");
var l = require("./368357.js");
var i = require("./422568.js");
const {
  BOOLEAN: u,
  INTEGER: s,
  NUMBER: c,
  TIMER: d
} = a.TYPES;
const f = (0, a.defineEvents)({
  PttPlayback: [2044, {
    pttDuration: [12, d],
    pttMainThreadBlock: [7, u],
    pttMiniPlayerClick: [15, s],
    pttMiniPlayerClose: [16, u],
    pttMiniPlayerPauseCnt: [17, s],
    pttPlayRequestT: [1, d],
    pttPlaybackFailed: [8, u],
    pttPlaybackOverallT: [4, d],
    pttPlaybackSpeed: [10, r.PTT_PLAYBACK_SPEED_TYPE],
    pttPlaybackSpeedCnt: [11, s],
    pttPlayedOutOfChat: [18, u],
    pttPlayedPct: [14, c],
    pttPlayer: [9, o.PTT_PLAYER_TYPE],
    pttPlayerInitT: [2, d],
    pttPlayerPlayT: [3, d],
    pttSeekCnt: [13, s],
    pttTrigger: [5, i.PTT_TRIGGER_TYPE],
    pttType: [6, l.PTT_STREAM_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.PttPlaybackWamEvent = f;