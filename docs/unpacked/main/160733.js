var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = a(require("./388058.js"));
var l = a(require("./190827.js"));
var i = a(require("./927519.js"));
exports.default = class {
  constructor(e, t) {
    this._durationTimer = new o.default();
    this._samples = [];
    this._correctedSamples = [];
    this._pendingAmplitude = 0;
    this._updateSamples = () => {
      this._pendingAmplitude = Math.max(this._pendingAmplitude, this._getCurrentAmplitude());
      const e = this._samples.length / this._sampleRate;
      const t = Math.floor((this.getDuration() - e) * this._sampleRate);
      if (t !== 0) {
        for (let e = 0; e < t; e++) {
          this._samples.push(this._pendingAmplitude);
        }
        this._pendingAmplitude = 0;
      }
    };
    this._committedSamplesRangeEnd = 0;
    this._analyserNode = function (e) {
      const t = e.context.createAnalyser();
      t.fftSize = 32;
      t.smoothingTimeConstant = 0;
      t.minDecibels = -60;
      t.maxDecibels = -10;
      return t;
    }(e);
    e.connect(this._analyserNode);
    this._sampleRate = t;
  }
  start() {
    this._durationTimer.start();
    this._startSamplesUpdater();
  }
  stop() {
    var e;
    this._durationTimer.stop();
    if (!((e = this._stopSamplesUpdater) === null || e === undefined)) {
      e.call(this);
    }
  }
  pause() {
    var e;
    this._durationTimer.pause();
    if (!((e = this._stopSamplesUpdater) === null || e === undefined)) {
      e.call(this);
    }
  }
  resume() {
    this._durationTimer.resume();
    this._startSamplesUpdater();
  }
  _startSamplesUpdater() {
    this._stopSamplesUpdater = (0, i.default)(this._updateSamples);
  }
  _getCurrentAmplitude() {
    var e;
    const t = (0, r.default)(this._analyserNode, "this._analyserNode");
    this._analyserData = (e = this._analyserData) !== null && e !== undefined ? e : new Uint8Array(t.frequencyBinCount);
    const n = this._analyserData;
    t.getByteFrequencyData(n);
    return Math.max(...Array.from(n)) / 255;
  }
  commitSamples(e) {
    const t = Math.floor(e * this._sampleRate) - this._correctedSamples.length;
    const n = this._samples.length - this._committedSamplesRangeEnd;
    if (t === 0 || n === 0) {
      return;
    }
    const a = this._samples.slice(this._committedSamplesRangeEnd, this._samples.length);
    const r = (0, l.default)(a, t);
    for (const e of r) {
      this._correctedSamples.push(e);
    }
    this._committedSamplesRangeEnd = this._samples.length;
  }
  getSamples() {
    return this._samples;
  }
  getDuration() {
    var e;
    return ((e = this._durationTimer.getTime()) !== null && e !== undefined ? e : 0) / 1000;
  }
  getCorrectedSamples() {
    return this._correctedSamples;
  }
};