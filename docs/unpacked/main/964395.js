Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioProxy = undefined;
exports.AudioProxy = class {
  constructor(e) {
    this._src = "";
    this._currentTime = 0;
    this._defaultPlaybackRate = 1;
    this._playbackRate = 1;
    this._audioManager = e;
  }
  addEventListener(e, t) {
    this._audioManager.addAudioListener(this, e, t);
  }
  removeEventListener(e, t) {
    this._audioManager.removeAudioListener(this, e, t);
  }
  play() {
    return this._audioManager.play(this, {
      currentTime: this._currentTime,
      playbackRate: this._playbackRate,
      defaultPlaybackRate: this._defaultPlaybackRate
    });
  }
  pause() {
    this._audioManager.pause(this);
  }
  load() {
    this._audioManager.load(this);
  }
  set src(e) {
    this._src = e;
  }
  get src() {
    return this._src;
  }
  get defaultPlaybackRate() {
    return this._defaultPlaybackRate;
  }
  set defaultPlaybackRate(e) {
    this._defaultPlaybackRate = e;
    this._audioManager.setDefaultPlaybackRate(this, e);
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(e) {
    this._playbackRate = e;
    this._audioManager.setPlaybackRate(this, e);
  }
  get currentTime() {
    const e = this._audioManager.getCurrentTime(this);
    if (e != null) {
      this._currentTime = e;
    }
    return this._currentTime;
  }
  set currentTime(e) {
    this._currentTime = e;
    this._audioManager.setCurrentTime(this, e);
  }
  get duration() {
    const e = this._audioManager.getDuration(this);
    if (e != null) {
      this._duration = e;
    }
    return this._duration;
  }
  get paused() {
    return this._audioManager.getPaused(this);
  }
};