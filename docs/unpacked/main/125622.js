Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./78043.js");
const r = () => {};
exports.default = class {
  constructor(e) {
    this.addListeners = e => {
      this._handlersMap.bulkSet(e);
    };
    this.removeListener = (e, t) => {
      this._handlersMap.remove(e, t);
    };
    this.removeListeners = () => {
      this._handlersMap.clear();
    };
    this.play = () => {
      if (this._timer) {
        __LOG__(2)`Duplicate timer start`;
      } else {
        this._timer = self.setTimeout(this._handleTimeup, this._timeout);
        this._start = new Date().getTime();
        this._handlersMap.execute(a.MediaEvents.OnPlay, this._timeout, this._duration);
        this._handlersMap.execute(a.MediaEvents.OnLoad, false, true);
      }
    };
    this.stop = () => {
      if (this._timer) {
        self.clearTimeout(this._timer);
        this._timer = null;
        const e = new Date().getTime();
        this._timeout -= e - this._start;
        this._handlersMap.execute(a.MediaEvents.OnPause);
      } else {
        __LOG__(2)`Timer stop called on stopped timer`;
      }
    };
    this.resume = () => {
      this.play();
    };
    this.pause = () => {
      this.stop();
    };
    this._handleTimeup = () => {
      this._handlersMap.execute(a.MediaEvents.OnEnd);
    };
    this.mute = r;
    this.unmute = r;
    this._duration = e;
    this._timeout = this._duration;
    this._start = 0;
    this._handlersMap = (0, a.createHandlersMap)();
  }
  get duration() {
    return this._duration;
  }
};