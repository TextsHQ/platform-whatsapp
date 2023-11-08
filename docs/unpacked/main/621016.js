var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlaybackController = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/8304.js");
var l = require("../app/163755.js");
var i = require("./711735.js");
var u = require("../app/513681.js");
var s = require("./129080.js");
var c = require("./504046.js");
var d = require("./902983.js");
var f = require("./883170.js");
var p = require("./491320.js");
const m = "playing";
const h = "timeupdate";
const g = "ended";
exports.AudioPlaybackController = class {
  constructor(e) {
    var t = this;
    this._isSequentialPlayback = false;
    this._handleMarkPlayed = () => {
      if ((0, i.canMarkPlayed)(this._msg.unsafe())) {
        (0, i.markPlayed)(this._msg.unsafe());
      }
    };
    this._handlePlaybackProgress = () => {
      this._msg.updateLastPlaybackProgress((0, s.calculateAudioProgress)(this.audio, this._msg.mediaData));
    };
    this._handlePlayingMessage = () => {
      this._clearPlayingMessage = p.PttPrefs.setPlayingMessage(this._msg);
    };
    this._handleEnded = () => {
      var e;
      var t;
      if (!((e = this._clearPlayingMessage) === null || e === undefined)) {
        e.call(this);
      }
      this._clearPlayingMessage = null;
      this.audio.currentTime = 0;
      this._msg.updateLastPlaybackProgress(0);
      this._maybePlayNext();
      if (this._isSequentialPlayback) {
        if (!((t = this._disposeAudio) === null || t === undefined)) {
          t.call(this);
        }
        this._disposeAudio = null;
      }
    };
    this._maybePlayNext = (0, r.default)(function* () {
      const e = (0, c.findSequentialMsg)(t._msg);
      let a = false;
      const r = u.MainAudioChannel.claim(t, () => {
        a = true;
      });
      yield (0, o.delayMs)(400);
      r();
      if (!a) {
        if (e) {
          (0, f.playMidPttTone)();
          const t = require("./31078.js").MsgAudioStore.acquireAudio(e);
          t.controller.playAsSequential();
          t.dispose();
        } else if (t._isSequentialPlayback) {
          (0, f.playEndPttTone)();
          t._isSequentialPlayback = false;
          t.pttPlaybackLogger.isSequentialPlayback = false;
        }
      }
    });
    this.audio = e.audio;
    this.pttPlaybackLogger = new d.PttPlaybackLogger(e.msg, e.audio);
    this._msg = e.msg;
    this.audio.addEventListener(m, this._handlePlayingMessage);
    this.audio.addEventListener(g, this._handleEnded);
    if (this._msg.type === "ptt") {
      this.audio.addEventListener(m, this._handleMarkPlayed);
    }
    this.audio.addEventListener(h, this._handlePlaybackProgress);
  }
  playAsSequential() {
    p.PttPrefs.outOfChatPlayerMessage = this._msg;
    this._disposeAudio = require("./31078.js").MsgAudioStore.acquireAudio(this._msg).dispose;
    this._isSequentialPlayback = true;
    this.pttPlaybackLogger.isSequentialPlayback = true;
    const e = (0, l.getAsPttLike)(this._msg.unsafe()) == null ? 1 : p.PttPrefs.playbackRate;
    this.audio.playbackRate = e;
    this.audio.defaultPlaybackRate = e;
    this.audio.currentTime = 0;
    this.audio.play();
  }
  dispose() {
    var e;
    if (this._msg.type === "ptt") {
      this.audio.removeEventListener(m, this._handleMarkPlayed);
    }
    this.audio.removeEventListener(h, this._handlePlaybackProgress);
    this.audio.removeEventListener(m, this._handlePlayingMessage);
    this.audio.removeEventListener(g, this._handleEnded);
    this.pttPlaybackLogger.dispose();
    if (!((e = this._clearPlayingMessage) === null || e === undefined)) {
      e.call(this);
    }
  }
};