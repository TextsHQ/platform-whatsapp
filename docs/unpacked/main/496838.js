var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("./583930.js");
var l = a(require("./160733.js"));
exports.default = class {
  constructor(e) {
    this._handleOpusRecorderDuration = () => {
      var e;
      this._waveformRecorder.commitSamples(this.getDuration());
      if (!((e = this._onDuration) === null || e === undefined)) {
        e.call(this, this.getDuration());
      }
    };
    this._onDuration = e.onDuration;
    this._opusRecorder = new o.OpusRecorder({
      createStream: e.createStream,
      onDuration: this._handleOpusRecorderDuration,
      onPage: (t, n) => {
        var a;
        if (!((a = e.onPage) === null || a === undefined)) {
          a.call(e, t, n);
        }
      }
    });
    this._waveformRecorder = new l.default(this._opusRecorder.getMonitorNode(), e.waveformSampleRate);
  }
  start() {
    var e = this;
    return (0, r.default)(function* () {
      return !!(yield e._opusRecorder.start()) && (e._waveformRecorder.start(), true);
    })();
  }
  stop() {
    this._opusRecorder.stop();
    this._waveformRecorder.stop();
  }
  pause() {
    this._opusRecorder.pause();
    this._waveformRecorder.pause();
  }
  resume() {
    var e = this;
    return (0, r.default)(function* () {
      return !!(yield e._opusRecorder.resume()) && (e._waveformRecorder.resume(), true);
    })();
  }
  getDuration() {
    return this._opusRecorder.getDuration();
  }
  getPreciseDuration() {
    var e;
    if ((e = this._waveformRecorder.getDuration()) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  }
  getLiveWaveformSamples() {
    return this._waveformRecorder.getSamples();
  }
  getCorrectedWaveformSamples() {
    return this._waveformRecorder.getCorrectedSamples();
  }
  getPartialRecording() {
    return this._opusRecorder.getPartialRecording();
  }
  getCompleteRecording() {
    return this._opusRecorder.getCompleteRecording();
  }
};