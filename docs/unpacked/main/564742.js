Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/937001.js");
var r = require("./78043.js");
var o = require("./557674.js");
function l(e, t) {
  if (t === o.MediaType.Video) {
    return Math.min(e, a.ServerProps.statusVideoMaxDuration);
  } else {
    return e;
  }
}
exports.default = class {
  constructor(e) {
    this._isPlaying = true;
    this.addListeners = e => {
      this._handlersMap.bulkSet(e);
    };
    this.removeListener = (e, t) => {
      this._handlersMap.remove(e, t);
    };
    this.setMedia = e => {
      if (this._media !== e) {
        this._unsetMedia();
        this._media = e;
        if (e != null) {
          e.addEventListener("playing", this._handlePlayingHandler);
          e.addEventListener("pause", this._handlePauseHandler);
          e.addEventListener("ended", this._handleEndedHandler);
          e.addEventListener("timeupdate", this._handleTimeUpdate);
          e.addEventListener("loadeddata", this._handleLoadedData);
          e.addEventListener("loadedmetadata", this._handleLoadedMetaData);
          if (this._mediaType === o.MediaType.Audio) {
            e.load();
          }
        }
      }
    };
    this._unsetMedia = () => {
      const e = this._media;
      if (e) {
        this.stop();
        e.removeEventListener("playing", this._handlePlayingHandler);
        e.removeEventListener("pause", this._handlePauseHandler);
        e.removeEventListener("ended", this._handleEndedHandler);
        e.removeEventListener("timeupdate", this._handleTimeUpdate);
        e.removeEventListener("loadeddata", this._handleLoadedData);
        e.removeEventListener("loadedmetadata", this._handleLoadedMetaData);
      }
    };
    this.play = () => {
      var e;
      if (!((e = this._media) === null || e === undefined)) {
        e.play();
      }
    };
    this.pause = () => {
      if (this._media && !this._media.paused) {
        this._media.pause();
      }
    };
    this.resume = () => {
      if (this._media && !this._isPlaying) {
        this._media.play();
      }
    };
    this.stop = () => {
      if (this._media && !this._media.paused) {
        this._media.pause();
      }
    };
    this._changeMuted = e => {
      if (this._media) {
        this._media.muted = e;
        this._handlersMap.execute(e ? r.MediaEvents.OnMute : r.MediaEvents.OnUnmute);
      }
    };
    this.mute = () => {
      this._changeMuted(true);
    };
    this.unmute = () => {
      this._changeMuted(false);
    };
    this._handlePlayingHandler = () => {
      this._isPlaying = true;
      const e = this._media;
      if (e == null) {
        return;
      }
      const t = l(e.duration, this._mediaType);
      const n = (t - e.currentTime) * 1000;
      this._handlersMap.execute(r.MediaEvents.OnPlay, n, t * 1000);
    };
    this._handlePauseHandler = () => {
      this._isPlaying = false;
      this._handlersMap.execute(r.MediaEvents.OnPause);
    };
    this._handleEndedHandler = () => {
      this._handlersMap.execute(r.MediaEvents.OnEnd);
    };
    this._handleTimeUpdate = () => {
      var e;
      const t = (e = this._media) === null || e === undefined ? undefined : e.currentTime;
      if (t != null && (this._handlersMap.execute(r.MediaEvents.OnTimeUpdate, t), this._mediaType === o.MediaType.Video && t >= a.ServerProps.statusVideoMaxDuration)) {
        this.stop();
        this._handleEndedHandler();
        const e = this._media;
        if (e) {
          e.removeEventListener("timeupdate", this._handleTimeUpdate);
          e.removeEventListener("ended", this._handleEndedHandler);
        }
      }
    };
    this._handleLoadedData = () => {
      const e = this._media;
      if (e) {
        const t = this._mediaType === o.MediaType.Audio || e.audioTracks && e.audioTracks.length > 0 || e.mozHasAudio === true || e.webkitAudioDecodedByteCount > 0;
        const n = e.muted;
        this._handlersMap.execute(r.MediaEvents.OnLoad, t, n);
      }
    };
    this._handleLoadedMetaData = () => {
      this._handlersMap.execute(r.MediaEvents.OnMetadataLoad);
    };
    this.removeListeners = () => {
      this.stop();
      this._handlersMap.clear();
    };
    this._mediaType = e;
    this._handlersMap = (0, r.createHandlersMap)();
  }
  get duration() {
    if (this._media == null) {
      return 0;
    } else {
      return l(this._media.duration, this._mediaType) * 1000;
    }
  }
  get currentTime() {
    if (this._media == null) {
      return 0;
    } else {
      return this._media.currentTime;
    }
  }
  get isPlaying() {
    return !!this._media && !this._media.paused;
  }
};