var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./564742.js"));
var o = a(require("./125622.js"));
var l = require("./78043.js");
var i = require("./557674.js");
const u = () => {};
const s = 6000;
exports.default = class {
  constructor() {
    this.addListeners = e => {
      this._handlersMap.bulkSet(e);
    };
    this.removeListeners = () => {
      this._handlersMap.clear();
      this._videoController.removeListeners();
      this._countdownController.removeListeners();
    };
    this.removeListener = (e, t) => {
      this._handlersMap.remove(e, t);
    };
    this.setMedia = (e, t) => {
      if (this._video !== e) {
        this._video = e;
        if (t != null) {
          this._duration = t;
        }
        this._videoController.setMedia(e);
      }
    };
    this._handleVideoStartHandler = () => {
      const e = this._video;
      if (e == null) {
        return;
      }
      const t = e.duration || this._duration;
      const n = Math.max(t * 3 * 1000, s);
      const a = n - t * 1000 * this._playCounter - e.currentTime * 1000;
      this._handlersMap.execute(l.MediaEvents.OnPlay, a, n);
    };
    this._handleVideoPauseHandler = () => {
      this._handlersMap.execute(l.MediaEvents.OnPause);
    };
    this._handleVideoEndedHandler = () => {
      const e = this._video;
      if (e != null) {
        this._playCounter++;
        if (this._playCounter === 3) {
          this._videoEnded = true;
          if (this._timerEnded) {
            this._handlersMap.execute(l.MediaEvents.OnEnd);
          }
        }
        e.currentTime = 0;
        if (!(this._videoEnded && this._timerEnded)) {
          self.setTimeout(() => {
            this._videoController.play();
          }, 0);
        }
      }
    };
    this._handleVideoLoadedHandler = () => {
      this._handlersMap.execute(l.MediaEvents.OnLoad, false, true);
    };
    this._handleLoadedMetaData = () => {
      this._handlersMap.execute(l.MediaEvents.OnMetadataLoad);
    };
    this._handleTimerEndedHandler = () => {
      this._timerEnded = true;
      if (this._videoEnded) {
        this._handlersMap.execute(l.MediaEvents.OnEnd);
      }
    };
    this.play = () => {
      this._videoController.play();
      this._countdownController.play();
    };
    this.stop = () => {
      this._videoController.stop();
      this._countdownController.stop();
    };
    this.resume = () => {
      this._videoController.resume();
      this._countdownController.resume();
    };
    this.pause = () => {
      this._videoController.pause();
      this._countdownController.pause();
    };
    this.mute = u;
    this.unmute = u;
    this._handlersMap = (0, l.createHandlersMap)();
    this._playCounter = 0;
    this._timerEnded = false;
    this._videoEnded = false;
    this._videoController = new r.default(i.MediaType.Video);
    this._countdownController = new o.default(s);
    this._videoController.addListeners({
      onPlay: this._handleVideoStartHandler,
      onPause: this._handleVideoPauseHandler,
      onEnd: this._handleVideoEndedHandler,
      onLoad: this._handleVideoLoadedHandler,
      onMetadataLoad: this._handleLoadedMetaData
    });
    this._countdownController.addListeners({
      onEnd: this._handleTimerEndedHandler
    });
  }
  get duration() {
    var e;
    return Math.max((((e = this._video) === null || e === undefined ? undefined : e.duration) || this._duration) * 3 * 1000, s);
  }
};