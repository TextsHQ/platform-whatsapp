Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = class {
  start() {
    this._startTime = Date.now();
  }
  stop() {
    this._stopTime = Date.now();
  }
  pause() {
    this.stop();
  }
  resume() {
    this._startTime = Date.now() - this.getTime();
    this._stopTime = null;
  }
  getTime() {
    var e;
    const t = this._startTime;
    if (t == null) {
      return 0;
    }
    return ((e = this._stopTime) !== null && e !== undefined ? e : Date.now()) - t;
  }
};