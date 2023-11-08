var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttPlaybackLogger = undefined;
var r = require("../app/163755.js");
var o = require("../app/61113.js");
var l = require("./129080.js");
var i = require("./223115.js");
var u = require("./606993.js");
var s = require("./540099.js");
var c = require("./491320.js");
var d = require("./623799.js");
var f = require("./118547.js");
var p = require("./368357.js");
var m = require("./422568.js");
var h = a(require("../app/556869.js"));
exports.PttPlaybackLogger = class {
  constructor(e, t) {
    this.isSequentialPlayback = false;
    this._pttPlaybackSpeedCnt = 0;
    this._pttSeekCnt = 0;
    this._pttPlayedPct = 0;
    this._hasStartedPlayback = false;
    this._pttPlayedOutOfChat = false;
    this._pttMiniPlayerPauseCnt = 0;
    this._pttMiniPlayerClose = false;
    this._pttMiniPlayerClick = 0;
    this._handlePlaying = () => {
      this._hasStartedPlayback = true;
    };
    this._handleRateChange = () => {
      if (this._audio.playbackRate !== this._currentPlaybackRate) {
        this._currentPlaybackRate = this._audio.playbackRate;
        this._pttPlaybackSpeedCnt += 1;
      }
    };
    this._handleTimeupdate = () => {
      const e = (0, l.calculateAudioProgress)(this._audio);
      this._pttPlayedPct = Math.max(e, this._pttPlayedPct);
    };
    this._handleEnded = () => {
      this.commit(true);
    };
    this._handleError = () => {
      this.commit(false);
    };
    this._msg = e;
    this._audio = t;
    this._currentPlaybackRate = this._audio.playbackRate;
    this._audio.addEventListener("playing", this._handlePlaying);
    this._audio.addEventListener("ratechange", this._handleRateChange);
    this._audio.addEventListener("timeupdate", this._handleTimeupdate);
    this._audio.addEventListener("ended", this._handleEnded);
    this._audio.addEventListener("error", this._handleError);
    if (e.type === "ptt") {
      this._disposeTsExternalLogger = (0, d.attachPttPlayTimeSpentLogger)(t);
    }
  }
  dispose() {
    var e;
    this._audio.removeEventListener("playing", this._handlePlaying);
    this._audio.removeEventListener("ratechange", this._handleRateChange);
    this._audio.removeEventListener("timeupdate", this._handleTimeupdate);
    this._audio.removeEventListener("ended", this._handleEnded);
    this._audio.removeEventListener("error", this._handleEnded);
    if (!((e = this._disposeTsExternalLogger) === null || e === undefined)) {
      e.call(this);
    }
  }
  _reset() {
    this._pttPlaybackSpeedCnt = 0;
    this._pttSeekCnt = 0;
    this._pttPlayedPct = 0;
    this._hasStartedPlayback = false;
    this._pttPlayedOutOfChat = false;
    this._pttMiniPlayerPauseCnt = 0;
    this._pttMiniPlayerClose = false;
    this._pttMiniPlayerClick = 0;
    this._disposeTsExternalLogger = null;
  }
  commit(e) {
    if (!this._hasStartedPlayback) {
      return;
    }
    if (this._msg.type !== "ptt") {
      return;
    }
    const {
      playbackRate: t
    } = c.PttPrefs;
    const {
      mediaData: n
    } = this._msg;
    const a = new s.PttPlaybackWamEvent({
      pttSeekCnt: 0,
      pttPlaybackSpeedCnt: 0,
      pttTrigger: this.isSequentialPlayback ? m.PTT_TRIGGER_TYPE.SEQUENTIAL : m.PTT_TRIGGER_TYPE.MANUAL
    });
    a.pttPlaybackFailed = !e;
    a.pttType = function (e) {
      switch (e == null ? undefined : e.split(";")[0]) {
        case "audio/ogg":
          return p.PTT_STREAM_TYPE.OPUS;
        case "audio/aac":
          return p.PTT_STREAM_TYPE.AAC;
        case "audio/mpeg":
          return p.PTT_STREAM_TYPE.MP3;
        case "audio/amr-wb":
          return p.PTT_STREAM_TYPE.AMR_WB;
        case "audio/amr":
        case "audio/3gpp2":
          return p.PTT_STREAM_TYPE.AMR_NB;
        case "audio/3gpp":
        default:
          return p.PTT_STREAM_TYPE.UNKNOWN;
      }
    }(n.mimetype);
    a.pttPlaybackSpeed = function (e) {
      switch (e) {
        case 1:
          return f.PTT_PLAYBACK_SPEED_TYPE.SPEED_1;
        case 1.5:
          return f.PTT_PLAYBACK_SPEED_TYPE.SPEED_1_5;
        case 2:
          return f.PTT_PLAYBACK_SPEED_TYPE.SPEED_2;
        default:
          throw (0, h.default)(`Invalid playback rate: ${e}`);
      }
    }(t);
    const l = (0, u.getDurationFromMediaOrProtobuf)(this._audio, n);
    a.pttDuration = Math.round(l) * 1000;
    a.pttPlaybackSpeedCnt = this._pttPlaybackSpeedCnt;
    a.pttSeekCnt = this._pttSeekCnt;
    a.pttPlayedPct = this._pttPlayedPct;
    a.pttPlayedOutOfChat = this._pttPlayedOutOfChat;
    a.pttMiniPlayerPauseCnt = this._pttMiniPlayerPauseCnt;
    a.pttMiniPlayerClose = this._pttMiniPlayerClose;
    a.pttMiniPlayerClick = this._pttMiniPlayerClick;
    a.commit();
    this._reset();
    const d = this._msg.id;
    const g = d == null ? null : o.MsgCollection.get(d);
    const E = g == null ? null : (0, r.getChat)(g).kind;
    if (E != null) {
      (0, i.incrementPttDailyCount)(i.PttDailyCountKind.PLAYBACK, E);
      if (t > 1) {
        (0, i.incrementPttDailyCount)(i.PttDailyCountKind.FAST_PLAYBACK, E);
      }
    }
  }
  increasePttSeekCount() {
    this._pttSeekCnt += 1;
  }
  markAsPlayedInOoc() {
    this._pttPlayedOutOfChat = true;
  }
  increaseOocPauseCount() {
    this._pttMiniPlayerPauseCnt += 1;
  }
  markAsOocClosedByUser() {
    this._pttMiniPlayerClose = true;
  }
  increaseOocClickToChatCount() {
    this._pttMiniPlayerClick += 1;
  }
};