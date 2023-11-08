var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecordingSessionStopReason = exports.RecordingSessionState = exports.RecordingSession = exports.AudioResource = undefined;
exports.createRecordingSession = function (e) {
  return new $({
    _chat: e.chat
  });
};
var o = r(require("../vendor/348926.js"));
var l = r(require("../vendors-main/59854.js"));
var i = require("../app/898817.js");
var u = require("../app/815612.js");
var s = r(require("../app/670983.js"));
var c = r(require("../app/229922.js"));
var d = require("../app/481173.js");
var f = r(require("../app/247665.js"));
var p = require("../app/103440.js");
var m = r(require("../app/319753.js"));
var h = r(require("../app/507511.js"));
var g = require("./858770.js");
var E = require("../app/644234.js");
var v = z(require("./213462.js"));
var _ = r(require("../app/842156.js"));
var y = require("../app/197636.js");
var C = r(require("../app/756680.js"));
var b = z(require("../app/288057.js"));
var M = require("../app/454889.js");
var S = require("../app/708761.js");
var T = require("../app/114850.js");
var w = require("../app/639880.js");
var A = require("../app/513681.js");
var P = require("./794181.js");
var O = r(require("./496838.js"));
var k = r(require("./190827.js"));
var D = require("./945305.js");
var I = require("./223115.js");
var R = require("./668544.js");
var N = r(require("../app/281007.js"));
var x = require("../app/937001.js");
var L = require("../app/614729.js");
var j = require("./365063.js");
var B = require("./117548.js");
var F = require("./933606.js");
var G = require("../app/370959.js");
var U = require("../app/464404.js");
var W = r(require("../app/556869.js"));
var H = require("../vendor/548360.js");
var V = r(require("../vendor/441143.js"));
var q = r(require("../vendor/667294.js"));
function Y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (Y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function z(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = Y(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}
const K = require("../vendor/76672.js").Mirrored(["NOT_STARTED", "RECORDING", "PAUSED", "STOPPED", "ERROR"]);
exports.RecordingSessionState = K;
const Q = require("../vendor/76672.js").Mirrored(["CANCEL_BUTTON", "PTT_TOO_SHORT", "SENT", "OTHER"]);
exports.RecordingSessionStopReason = Q;
class X extends d.BaseModel {
  constructor() {
    super(...arguments);
    this.duration = (0, d.prop)(0);
    this.exceedsMinDuration = (0, d.prop)(false);
    this.state = (0, d.prop)(K.NOT_STARTED);
    this._hasStreamingUploadFailed = (0, d.prop)(false);
    this._draftPreviewSeen = (0, d.prop)(false);
    this._draftPlayCount = (0, d.prop)(0);
    this._draftSeekCount = (0, d.prop)(0);
    this._pauseCount = (0, d.prop)(0);
    this._stopTapCount = (0, d.prop)(0);
    this.isRecording = (0, d.derived)(function () {
      return this.state === K.RECORDING;
    }, ["state"]);
  }
  initialize() {
    super.initialize();
    let e = null;
    this.on("change:isRecording", () => {
      var t;
      var n;
      if (!((t = this._endTsExternalEvent) === null || t === undefined)) {
        t.call(this);
      }
      if (this._chat != null) {
        if (this.isRecording) {
          e = A.MainAudioChannel.claim(this, () => {
            this.pause();
          });
          (0, w.markRecording)(this._chat);
          this._endTsExternalEvent = (0, L.beginTsExternalEvent)(G.TS_EXTERNAL_EVENT_SOURCE.PTT_RECORD);
        } else {
          if (!((n = e) === null || n === undefined)) {
            n();
          }
          (0, w.markPaused)(this._chat);
        }
      }
    });
  }
  start() {
    var e = this;
    return (0, o.default)(function* () {
      switch (e.state) {
        case K.NOT_STARTED:
          break;
        case K.RECORDING:
          return true;
        case K.PAUSED:
          return e.resume();
        case K.STOPPED:
        case K.ERROR:
          throw (0, W.default)(`Can't start recording from state ${e.state}`);
      }
      const {
        handleUploadHostFound: t,
        handleUploadAttemptSuccess: r,
        handleUploadAttemptError: l,
        handleUploadSuccess: c,
        handleUploadError: d,
        handleEncryptionStart: f,
        handleEncryptionSuccess: p,
        handleStreamUploadStart: g,
        handleUploadProgress: E,
        handleSendMessageStart: v
      } = (0, m.default)(S.MEDIA_TYPES.PTT, (0, _.default)(e._chat), 0, false, false);
      e._handleSendMessageStart = v;
      if ((0, j.isUploadStreamerRefactorEnabled)()) {
        const n = (0, h.default)();
        e._earlyUploadPromise = new Promise(t => {
          e._resolveEarlyUploadPromise = t;
        });
        const s = new a();
        e._uploaderAbortController = s;
        const f = yield (0, u.getRandomFilehash)();
        const m = new M.UploadStreamer({
          encFilehash: f,
          token: f,
          type: S.MEDIA_TYPES.PTT,
          signal: s.signal,
          byteOffset: 0,
          onUploadHostFound: t,
          onUploadAttemptSuccess: r,
          onUploadAttemptError: l,
          onProgress: (e, t) => {
            E(e.loaded + t);
          },
          onStreamUploadStart: g,
          mediaId: (0, U.generateMediaEventId)()
        });
        m.startUploadFromClient();
        e._encryptor = yield (0, D.createStreamingEncryptor)({
          mediaKey: n.key,
          onChunkEncrypted: (C = (0, o.default)(function* (t) {
            try {
              yield m.uploadChunkFromClient(t);
            } catch (t) {
              var n;
              if (!((n = e._resolveEarlyUploadPromise) === null || n === undefined)) {
                n.call(e, null);
              }
              e._hasStreamingUploadFailed = true;
              if (t.name === i.ABORT_ERROR) {
                return;
              }
              __LOG__(4, undefined, new Error())`onChunkEncrypted: ptt-streaming-upload-error: ${t.message}`;
              __LOG__(4, undefined, new Error(), true)`PTT Streaming Upload cancelled due to a problem uploading`;
              SEND_LOGS("ptt-streaming-upload-failed");
              d(t);
            }
          }), function () {
            return C.apply(this, arguments);
          }),
          onEncryptionCompleted: (y = (0, o.default)(function* (t, a) {
            p();
            try {
              var r;
              yield m.uploadChunkFromClient(new Uint8Array(t));
              const o = yield m.finalizeUploadFromClient(a);
              if (!((r = e._resolveEarlyUploadPromise) === null || r === undefined)) {
                r.call(e, {
                  directPath: o.directPath,
                  mediaKey: n.key,
                  mediaKeyTimestamp: n.timestamp,
                  encFilehash: a,
                  url: o.url
                });
              }
              c();
            } catch (t) {
              var o;
              if (!((o = e._resolveEarlyUploadPromise) === null || o === undefined)) {
                o.call(e, null);
              }
              e._hasStreamingUploadFailed = true;
              if (t.name === i.ABORT_ERROR) {
                return;
              }
              __LOG__(4, undefined, new Error())`onEncryptionCompleted: ptt-streaming-upload-error: ${t.message}`;
              __LOG__(4, undefined, new Error(), true)`PTT Streaming Upload cancelled due to a problem when finalizing upload`;
              SEND_LOGS("ptt-streaming-upload-failed");
              d(t);
            }
          }), function () {
            return y.apply(this, arguments);
          })
        });
      }
      var y;
      var C;
      try {
        let t = true;
        e._recorder = new O.default({
          createStream: ee,
          waveformSampleRate: e.getWaveformSampleRate(),
          onDuration: t => {
            e.duration = t;
            e.exceedsMinDuration = t >= 1;
          },
          onPage: (n, a) => {
            if ((0, j.isUploadStreamerRefactorEnabled)() && !e._hasStreamingUploadFailed) {
              try {
                var r;
                if (t) {
                  f();
                  t = false;
                }
                if (!((r = e._encryptor) === null || r === undefined)) {
                  r.encryptChunk(n, a);
                }
              } catch (t) {
                var o;
                __LOG__(4, undefined, new Error())`PTT Streaming Upload cancelled due to a problem encrypting`;
                if (!((o = e._resolveEarlyUploadPromise) === null || o === undefined)) {
                  o.call(e, null);
                }
                e._hasStreamingUploadFailed = true;
              }
            }
          }
        });
        if (yield e._recorder.start()) {
          e.state = K.RECORDING;
          require("../app/434989.js").PresenceCollection.update(e._chat.presence.id);
          (0, I.incrementPttDailyCount)(I.PttDailyCountKind.RECORD, (0, s.default)(e._chat.kind, "_this._chat.kind"));
          return true;
        }
      } catch (e) {
        __LOG__(4, undefined, new Error())`PTT Recording Error\n${(0, N.default)(e)}`;
      }
      e._endSession();
      e.state = K.ERROR;
      return false;
    })();
  }
  getLiveWaveformSamples() {
    var e;
    var t;
    if ((e = (t = this._recorder) === null || t === undefined ? undefined : t.getLiveWaveformSamples()) !== null && e !== undefined) {
      return e;
    } else {
      return [];
    }
  }
  getCorrectedWaveformSamples() {
    var e;
    var t;
    if ((e = (t = this._recorder) === null || t === undefined ? undefined : t.getCorrectedWaveformSamples()) !== null && e !== undefined) {
      return e;
    } else {
      return [];
    }
  }
  getScaledWaveformSamples() {
    return (0, k.default)(this.getCorrectedWaveformSamples(), 64).map(e => Math.floor(e * 100));
  }
  getPreciseDuration() {
    var e;
    var t;
    if ((e = (t = this._recorder) === null || t === undefined ? undefined : t.getPreciseDuration()) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  }
  _endSession() {
    var e;
    if (!((e = this._recorder) === null || e === undefined)) {
      e.stop();
    }
  }
  pause() {
    if (this.state !== K.RECORDING) {
      return;
    }
    if (!this.exceedsMinDuration) {
      return void this.stop(Q.PTT_TOO_SHORT);
    }
    this.state = K.PAUSED;
    (0, s.default)(this._recorder, "this._recorder").pause();
  }
  resume() {
    var e = this;
    return (0, o.default)(function* () {
      switch (e.state) {
        case K.RECORDING:
          return true;
        case K.PAUSED:
          break;
        case K.NOT_STARTED:
        case K.STOPPED:
        case K.ERROR:
          throw (0, W.default)(`Can't resume recording from state ${e.state}`);
      }
      e.state = K.RECORDING;
      try {
        const t = (0, s.default)(e._recorder, "_this2._recorder");
        return !!(yield t.resume()) || (e.state = K.PAUSED, false);
      } catch (t) {
        e.state = K.ERROR;
        __LOG__(4, undefined, new Error())`Error resuming recording session\n${(0, N.default)(t)}`;
        return false;
      }
    })();
  }
  stop(e) {
    if (this.state === K.STOPPED) {
      return;
    }
    this.state = K.STOPPED;
    this._endSession();
    if (this._recorder == null) {
      return;
    }
    if (e === Q.SENT) {
      (0, I.incrementPttDailyCount)(I.PttDailyCountKind.SEND, (0, s.default)(this._chat.kind, "this._chat.kind"));
    } else if (this.duration > 1) {
      (0, I.incrementPttDailyCount)(I.PttDailyCountKind.CANCEL, (0, s.default)(this._chat.kind, "this._chat.kind"));
    }
    if (e !== Q.SENT && this._uploaderAbortController) {
      this._uploaderAbortController.abort();
    }
    const t = function (e) {
      switch (e) {
        case Q.SENT:
          return B.PTT_RESULT_TYPE.SENT;
        case Q.PTT_TOO_SHORT:
          return B.PTT_RESULT_TYPE.TOO_SHORT;
        case Q.CANCEL_BUTTON:
          return B.PTT_RESULT_TYPE.CANCELLED;
        case Q.OTHER:
          return null;
      }
    }(e);
    if (t != null) {
      this._sendPttWamEvent(t);
    }
  }
  _getDataForSending() {
    var e = this;
    return (0, o.default)(function* () {
      const t = (0, s.default)(e._recorder, "_this3._recorder");
      const n = yield t.getCompleteRecording();
      return C.default.createFromData(n, n.type);
    })();
  }
  _getDataForPlayback() {
    var e = this;
    return (0, o.default)(function* () {
      const t = (0, s.default)(e._recorder, "_this4._recorder");
      const n = yield t.getPartialRecording();
      const a = yield (0, y.transcode)(n);
      return C.default.createFromData(a, a.type);
    })();
  }
  getAudioForPlayback() {
    return new ne(() => this._getDataForPlayback());
  }
  getWaveformSampleRate() {
    return 8.5;
  }
  send() {
    var e = this;
    return (0, o.default)(function* () {
      var t;
      var n;
      if (!((t = e._handleSendMessageStart) === null || t === undefined)) {
        t.call(e);
      }
      const a = (0, s.default)(e._recorder, "_this5._recorder");
      const r = e._chat;
      const o = (0, c.default)(e._getDataForSending(), r.deleteSignal);
      const l = ((n = r.getComposeContents()) === null || n === undefined ? undefined : n.ctwaContext) || undefined;
      (0, E.prepRawMedia)(o, {
        isPtt: true,
        precomputedFields: {
          duration: Math.floor(a.getDuration()),
          waveform: new Uint8Array(e.getScaledWaveformSamples())
        }
      }).sendToChat(r, {
        quotedMsg: r.composeQuotedMsg || undefined,
        addEvenWhilePreparing: true,
        ctwaContext: l
      }, e._earlyUploadPromise);
      r.composeQuotedMsg = null;
      e.stop(Q.SENT);
      yield o.catch((0, i.catchAbort)(() => {}));
    })();
  }
  _sendPttWamEvent(e) {
    var t = this;
    return (0, o.default)(function* () {
      var n;
      const a = (0, s.default)(t._recorder, "_this6._recorder");
      const r = yield a.getCompleteRecording();
      new R.PttWamEvent({
        pttSource: F.PTT_SOURCE_TYPE.FROM_CONVERSATION,
        pttResult: e,
        pttDuration: Math.round(t.duration) * 1000,
        pttSize: (0, l.default)((n = r.size) !== null && n !== undefined ? n : 0, -3),
        pttStop: t._draftPreviewSeen,
        pttDraftPlayCnt: t._draftPlayCount,
        pttDraftSeekCnt: t._draftSeekCount,
        pttPauseCnt: t._pauseCount,
        pttStopTapCnt: t._stopTapCount
      }).commit();
    })();
  }
  markDraftPreviewSeen() {
    if (!this._draftPreviewSeen) {
      this._draftPreviewSeen = true;
      (0, I.incrementPttDailyCount)(I.PttDailyCountKind.DRAFT_REVIEW, (0, s.default)(this._chat.kind, "this._chat.kind"));
    }
  }
  incrementDraftPlayCount() {
    this._draftPlayCount++;
  }
  incrementDraftSeekCount() {
    this._draftSeekCount++;
  }
  incrementPauseButtonCount() {
    if (x.ServerProps.pttPausableEnabled) {
      this._pauseCount++;
      if (this._pauseCount === 1) {
        (0, I.incrementPttDailyCount)(I.PttDailyCountKind.PAUSED_RECORD, (0, s.default)(this._chat.kind, "this._chat.kind"));
      }
    } else {
      this._stopTapCount++;
      (0, V.default)(this._stopTapCount === 1, "User interaction should stop the recording a max of one time");
      (0, I.incrementPttDailyCount)(I.PttDailyCountKind.STOP_TAP, (0, s.default)(this._chat.kind, "this._chat.kind"));
    }
  }
}
function Z() {
  return J.apply(this, arguments);
}
function J() {
  return (J = (0, o.default)(function* () {
    return true;
  })).apply(this, arguments);
}
X.Proxy = "recordingSession";
const $ = (0, d.defineModel)(X);
function ee() {
  return te.apply(this, arguments);
}
function te() {
  return (te = (0, o.default)(function* (e) {
    if (!(yield Z()) || e.aborted) {
      return null;
    }
    if (f.default.activeCall) {
      T.ModalManager.open(q.default.createElement(p.ConfirmPopup, {
        onOK: () => T.ModalManager.close()
      }, H.fbt._("Can't record voice messages during a WhatsApp call.", null, {
        hk: "tITIw"
      })));
      return null;
    }
    const {
      disposeStream: t,
      asyncStream: n
    } = v.start("microphone");
    e.addEventListener("abort", () => {
      t();
    }, {
      once: true
    });
    try {
      return yield n;
    } catch (e) {
      if (e instanceof b.GetUserMedia.NotAllowedError) {
        T.ModalManager.open(q.default.createElement(g.GuidePopup, {
          messaging: g.Messaging.MIC_FAIL,
          type: g.TYPE.GUIDE_UNBLOCK
        }));
        return null;
      }
      if (e instanceof b.GetUserMedia.GetUserMediaError) {
        T.ModalManager.open(q.default.createElement(g.GuidePopup, {
          messaging: g.Messaging.MIC_MISSING,
          type: g.TYPE.GUIDE_NONE
        }));
        return null;
      }
      throw e;
    }
  })).apply(this, arguments);
}
exports.RecordingSession = $;
class ne {
  constructor(e) {
    var t = this;
    this._opaqueDataPromise = e();
    const n = P.AudioManager.createAudioProxy();
    this._audio = n;
    this._unregisterFromAudioChannel = A.MainAudioChannel.registerMedia(n);
    (0, o.default)(function* () {
      const e = yield t._opaqueDataPromise;
      const n = t._audio;
      if (n != null) {
        n.src = e.url();
      }
    })();
  }
  getAudio() {
    (0, V.default)(this._audio != null, "Audio used after disposal");
    return this._audio;
  }
  dispose() {
    var e = this;
    if (this._audio != null) {
      this._unregisterFromAudioChannel();
      this._audio = null;
      (0, o.default)(function* () {
        (yield e._opaqueDataPromise).autorelease();
      })();
    }
  }
}
exports.AudioResource = ne;