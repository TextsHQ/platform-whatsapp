var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpusRecorderState = exports.OpusRecorder = undefined;
var o = r(require("../vendor/81109.js"));
var l = r(require("../vendor/348926.js"));
var i = r(require("../app/670983.js"));
var u = require("../app/114479.js");
var s = r(require("./65162.js"));
var c = r(require("../app/556869.js"));
const d = {
  bitRate: 16000,
  bufferLength: 4096,
  numberOfChannels: 1,
  encoderSampleRate: 16000,
  maxBuffersPerPage: 40,
  encoderApplication: 2048,
  encoderFrameSize: 20,
  streamOptions: {
    optional: [],
    mandatory: {
      googEchoCancellation: false,
      googAutoGainControl: false,
      googNoiseSuppression: false,
      googHighpassFilter: false
    }
  }
};
const f = require("../vendor/76672.js").Mirrored(["INACTIVE", "RECORDING", "PAUSED", "STOPPED"]);
exports.OpusRecorderState = f;
function p(e) {
  const t = e.reduce((e, t) => e + t.length, 0);
  const n = new Uint8Array(t);
  let a = 0;
  for (const t of e) {
    n.set(t, a);
    a += t.length;
  }
  return new Blob([n], {
    type: "audio/ogg; codecs=opus"
  });
}
function m() {
  return (m = (0, l.default)(function* (e, t, n, a) {
    const r = yield e(a);
    if (a.aborted || r == null) {
      return false;
    }
    const o = t.createMediaStreamSource(r);
    n.forEach(e => {
      o.connect(e);
    });
    a.addEventListener("abort", () => {
      r.getTracks().forEach(e => {
        e.stop();
      });
      o.disconnect();
    }, {
      once: true
    });
    return true;
  })).apply(this, arguments);
}
exports.OpusRecorder = class {
  constructor(e) {
    this._duration = 0;
    this._recordedPages = [];
    this._state = f.INACTIVE;
    this._isFirstBuffer = false;
    this._requestCount = 0;
    this._pendingFlushResolvers = new Map();
    this._handleEncoderMessage = e => {
      const t = e.data;
      switch (t.message) {
        case "page":
          this._storePage(t.page);
          break;
        case "flushed":
          this._handleFlushed(t.requestId);
          break;
        default:
          throw (0, c.default)(`Invalid message event type: ${t.message}`);
      }
    };
    if (!Boolean(window.AudioContext && s.default)) {
      throw (0, c.default)("Recording is not supported in this browser");
    }
    this._createStream = e.createStream;
    this._onDuration = e.onDuration;
    this._onPause = e.onPause;
    this._onResume = e.onResume;
    this._onStart = e.onStart;
    this._onStop = e.onStop;
    this._handlePage = e.onPage;
    this._completeRecordingPromise = new Promise(e => {
      this._resolveCompleteRecordingPromise = e;
    });
    this._audioContext = new AudioContext();
    this._encoderNode = this._audioContext.createScriptProcessor(d.bufferLength, d.numberOfChannels, d.numberOfChannels);
    this._encoderNode.onaudioprocess = e => {
      this._encodeBuffers(e.inputBuffer);
    };
    this._monitorNode = this._audioContext.createGain();
  }
  getState() {
    return this._state;
  }
  start() {
    var e = this;
    return (0, l.default)(function* () {
      var t;
      var n;
      switch (e._state) {
        case f.RECORDING:
          return true;
        case f.STOPPED:
          return false;
        case f.PAUSED:
          return e.resume();
        case f.INACTIVE:
      }
      e._recordedPages = [];
      e._isFirstBuffer = true;
      e._duration = 0;
      const a = (0, u.getOpusEncoderWorker)();
      e._encoder = a;
      a.addEventListener("message", e._handleEncoderMessage);
      return !!(yield e._startRecording()) && ((t = e._onStart) === null || t === undefined || t.call(e), (n = e._onDuration) === null || n === undefined || n.call(e, e._duration), a.postMessage({
        command: "encode-init",
        config: (0, o.default)((0, o.default)({}, d), {}, {
          originalSampleRate: e._audioContext.sampleRate
        })
      }), e._encoderNode.connect(e._audioContext.destination), true);
    })();
  }
  stop() {
    var e;
    var t;
    if (this._state !== f.STOPPED) {
      this._state = f.STOPPED;
      if (!((e = this._recordingAbortController) === null || e === undefined)) {
        e.abort();
      }
      if (this._audioContext.close) {
        this._audioContext.close();
      }
      this._monitorNode.disconnect();
      this._encoderNode.disconnect();
      if (!((t = this._encoder) === null || t === undefined)) {
        t.postMessage({
          command: "encode-done"
        });
      }
    }
  }
  pause() {
    var e;
    var t;
    if (this._state === f.RECORDING) {
      this._state = f.PAUSED;
      if (!((e = this._recordingAbortController) === null || e === undefined)) {
        e.abort();
      }
      if (!((t = this._onPause) === null || t === undefined)) {
        t.call(this);
      }
    }
  }
  resume() {
    var e = this;
    return (0, l.default)(function* () {
      var t;
      switch (e._state) {
        case f.RECORDING:
          return true;
        case f.STOPPED:
          return false;
        case f.INACTIVE:
          throw (0, c.default)("Attempting to resume recording that hasn't started");
        case f.PAUSED:
      }
      return !!(yield e._startRecording()) && ((t = e._onResume) === null || t === undefined || t.call(e), true);
    })();
  }
  getDuration() {
    return this._duration;
  }
  getMonitorNode() {
    return this._monitorNode;
  }
  _encodeBuffers(e) {
    var t;
    if (this._isFirstBuffer) {
      return void (this._isFirstBuffer = false);
    }
    if (this._state !== f.RECORDING) {
      return;
    }
    const n = [];
    for (let t = 0; t < e.numberOfChannels; t++) {
      n[t] = e.getChannelData(t);
    }
    (0, i.default)(this._encoder, "this._encoder").postMessage({
      command: "encode",
      buffers: n
    });
    this._duration += e.duration;
    if (!((t = this._onDuration) === null || t === undefined)) {
      t.call(this, this._duration);
    }
  }
  _getNextRequestId() {
    this._requestCount++;
    return this._requestCount;
  }
  _startRecording() {
    var e = this;
    return (0, l.default)(function* () {
      e._state = f.RECORDING;
      e._recordingAbortController = new a();
      return !!(yield function () {
        return m.apply(this, arguments);
      }(e._createStream, e._audioContext, [e._encoderNode, e._monitorNode], e._recordingAbortController.signal)) || (e.stop(), false);
    })();
  }
  _storePage(e) {
    var t;
    this._recordedPages.push(e);
    if (e[5] & 4) {
      var n;
      var a;
      if (!((n = this._handlePage) === null || n === undefined)) {
        n.call(this, e, true);
      }
      (0, i.default)(this._encoder, "this._encoder").removeEventListener("message", this._handleEncoderMessage);
      this._resolveCompleteRecordingPromise(p(this._recordedPages));
      this._recordedPages = [];
      return void ((a = this._onStop) === null || a === undefined || a.call(this));
    }
    if (!((t = this._handlePage) === null || t === undefined)) {
      t.call(this, e, false);
    }
  }
  _handleFlushed(e) {
    const t = (0, i.default)(this._pendingFlushResolvers.get(e), "this._pendingFlushResolvers.get(requestId)");
    this._pendingFlushResolvers.delete(e);
    t(p(this._recordedPages));
  }
  getPartialRecording() {
    const e = this._getNextRequestId();
    const t = new Promise(t => {
      this._pendingFlushResolvers.set(e, t);
    });
    (0, i.default)(this._encoder, "this._encoder").postMessage({
      command: "flush",
      requestId: e
    });
    return t;
  }
  getCompleteRecording() {
    return this._completeRecordingPromise;
  }
};