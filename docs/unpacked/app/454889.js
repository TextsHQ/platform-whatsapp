var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadStreamer = undefined;
exports.shouldUseStreamingUpload = function (e, t) {
  const n = b(t);
  return t === E.MEDIA_TYPES.DOCUMENT && n > 0 && e > n;
};
var a = i(require("../vendor/506479.js"));
var o = i(require("../vendor/81109.js"));
var s = i(require("../vendor/348926.js"));
var l = require("./672076.js");
var u = i(require("./60748.js"));
var c = i(require("./616144.js"));
var d = require("./791357.js");
var p = require("./643235.js");
var f = require("./99245.js");
var _ = require("./68799.js");
var g = i(require("./864204.js"));
var m = require("./186322.js");
var h = require("./262912.js");
var y = i(require("./180813.js"));
var E = require("./708761.js");
var S = i(require("./99398.js"));
var v = require("./937001.js");
var T = require("./937849.js");
const M = ["auth"];
function A(e, t) {
  return (0, _.isErrorRetryable)(e) && t < g.default.retries;
}
function b(e) {
  if (e === E.MEDIA_TYPES.DOCUMENT) {
    return v.ServerProps.streamingUploadChunkSize;
  } else {
    return 0;
  }
}
exports.UploadStreamer = class {
  constructor(e) {
    var t;
    this._retryStartTime = Date.now();
    this._offset = 0;
    this._uploadedBytes = 0;
    this._uploadingQueue = Promise.resolve();
    this._encFilehash = e.encFilehash;
    this._type = e.type;
    this._signal = e.signal;
    this._offset = (t = e.byteOffset) !== null && t !== undefined ? t : 0;
    this._debugString = e.encFilehash.slice(0, 10);
    this._token = e.token;
    this._handleUploadHostFound = e.onUploadHostFound;
    this._handleUploadAttemptSuccess = e.onUploadAttemptSuccess;
    this._handleUploadAttemptError = e.onUploadAttemptError;
    this._handleProgress = e.onProgress;
    this._handleFinalize = e.onFinalize;
    this._handleStreamUploadStart = e.onStreamUploadStart;
    this._mediaId = e.mediaId;
  }
  uploadCompleteFile(e) {
    var t = this;
    let {
      ciphertextHmac: n
    } = e;
    return (0, s.default)(function* () {
      var e;
      var r;
      const i = new Uint8Array(n);
      t._uploadSize = i.byteLength;
      const a = b(t._type);
      const o = a === 0 ? i.byteLength : a;
      if (!((e = t._handleStreamUploadStart) === null || e === undefined)) {
        e.call(t);
      }
      __LOG__(2)`uploadStreamer: [${t._debugString}] start upload`;
      yield S.default.waitIfOffline({
        signal: t._signal
      });
      const s = Math.ceil((i.byteLength - t._offset) / o);
      for (let e = 0; e < s; e++) {
        t._logChunkUploadProgress(e, s);
        const n = t._offset + e * o;
        const r = i.subarray(n, n + o);
        yield t._uploadChunkWithBackoff(r, n);
        t._uploadedBytes += r.byteLength;
      }
      const l = yield t._finalizeWithBackoff(t._encFilehash);
      if (!((r = t._handleUploadAttemptSuccess) === null || r === undefined)) {
        r.call(t, Date.now() - t._retryStartTime);
      }
      return l;
    })();
  }
  startUploadFromClient() {
    var e = this;
    return (0, s.default)(function* () {
      var t;
      yield S.default.waitIfOffline({
        signal: e._signal
      });
      if (!((t = e._handleStreamUploadStart) === null || t === undefined)) {
        t.call(e);
      }
    })();
  }
  uploadChunkFromClient(e) {
    var t = this;
    return (0, s.default)(function* () {
      t._uploadingQueue = t._uploadingQueue.then((0, s.default)(function* () {
        yield t._uploadChunkWithBackoff(e, t._offset);
        t._uploadedBytes += e.byteLength;
        t._offset += e.byteLength;
      }));
      yield t._uploadingQueue;
    })();
  }
  finalizeUploadFromClient(e) {
    var t = this;
    return (0, s.default)(function* () {
      var n;
      const r = yield t._uploadingQueue.then(() => t._finalizeWithBackoff(e));
      if (!((n = t._handleUploadAttemptSuccess) === null || n === undefined)) {
        n.call(t, Date.now() - t._retryStartTime);
      }
      return r;
    })();
  }
  _resetRetryStartTime() {
    this._retryStartTime = Date.now();
  }
  _getAttemptTime() {
    return Date.now() - this._retryStartTime;
  }
  _getRemainingBytes() {
    if (this._uploadSize != null) {
      return this._uploadSize - this._uploadedBytes;
    }
  }
  _logChunkUploadProgress(e, t) {
    __LOG__(2)`uploadStreamer: [${this._debugString}] uploading chunk ${e + 1}/${t}`;
  }
  _uploadChunkWithBackoff(e, t) {
    var n = this;
    return (0, l.exponentialBackoff)((0, o.default)((0, o.default)({}, g.default), {}, {
      signal: this._signal
    }), function () {
      var r = (0, s.default)(function* (r, i) {
        try {
          yield n._uploadChunk(e, t, i);
        } catch (e) {
          var a;
          if (A(e, i)) {
            if (!((a = n._handleUploadAttemptError) === null || a === undefined)) {
              a.call(n, e, n._getAttemptTime(), i, T.OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD);
            }
            n._resetRetryStartTime();
            return r(e);
          }
          throw e;
        }
      });
      return function () {
        return r.apply(this, arguments);
      };
    }());
  }
  _finalizeWithBackoff(e) {
    var t = this;
    return (0, l.exponentialBackoff)((0, o.default)((0, o.default)({}, g.default), {}, {
      signal: this._signal
    }), function () {
      var n = (0, s.default)(function* (n, r) {
        try {
          var i;
          if (!((i = t._handleFinalize) === null || i === undefined)) {
            i.call(t);
          }
          return yield t._finalize(e, r);
        } catch (e) {
          var a;
          if (function (e, t) {
            if (e instanceof d.HttpStatusCodeError && e.status >= 500) {
              return false;
            }
            return A(e, t);
          }(e, r)) {
            if (!((a = t._handleUploadAttemptError) === null || a === undefined)) {
              a.call(t, e, t._getAttemptTime(), r, T.OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.FINALIZE);
            }
            t._resetRetryStartTime();
            return n(e);
          }
          throw e;
        }
      });
      return function () {
        return n.apply(this, arguments);
      };
    }());
  }
  _uploadChunk(e, t, n) {
    var i = this;
    return (0, s.default)(function* () {
      let o = null;
      let l = false;
      yield S.default.waitIfOffline({
        signal: i._signal
      });
      const d = yield i._getMediaHosts(n);
      const {
        auth: p
      } = d;
      const f = (0, a.default)(d, M);
      let _ = o = (0, y.default)({
        selectedHost: f.selectedHost,
        fallbackHost: f.fallbackHost,
        lastHostUsed: o,
        lastFetchMadeProgress: l,
        attemptCount: n
      });
      const g = e => {
        var n;
        l = true;
        if (!((n = i._handleProgress) === null || n === undefined)) {
          n.call(i, e, t);
        }
      };
      return (0, c.default)(function () {
        var a = (0, s.default)(function* (a) {
          let {
            retry: s
          } = a;
          const l = new r();
          const {
            signal: c
          } = l;
          const d = yield (0, u.default)([c, i._signal], r => {
            const a = i._uploadSize != null && (0, h.shouldPollUploadHosts)(i._type, i._uploadSize) ? (0, h.pollMediaHosts)({
              connectionBlock: f,
              signal: r,
              getHost: () => _,
              getMediaHosts: () => i._getMediaHosts(n, true),
              getRemainingBytes: () => i._getRemainingBytes()
            }).then(e => ({
              host: e,
              kind: "host-changed"
            })) : null;
            const o = (0, m.mmsUploadStream)({
              auth: p,
              encFilehash: i._encFilehash,
              type: i._type,
              hostname: _.hostname,
              byteStart: t,
              byteEnd: t + e.byteLength,
              chunk: e,
              signal: r,
              onProgress: g,
              mediaId: i._mediaId,
              token: i._token
            }).then(() => ({
              kind: "upload-completed"
            }));
            return Promise.race([o, a].filter(Boolean)).finally(() => l.abort());
          });
          if (d.kind === "host-changed") {
            o = _;
            _ = d.host;
            return s();
          }
        });
        return function () {
          return a.apply(this, arguments);
        };
      }());
    })();
  }
  _finalize(e, t) {
    var n = this;
    return (0, s.default)(function* () {
      yield S.default.waitIfOffline({
        signal: n._signal
      });
      const {
        auth: r,
        selectedHost: i
      } = yield n._getMediaHosts(t);
      __LOG__(2)`uploadStreamer: [${n._debugString}] finalizing`;
      return (0, m.mmsUploadStreamFinalize)({
        auth: r,
        hostname: i.hostname,
        encFilehash: n._encFilehash,
        finalHash: e,
        type: n._type,
        signal: n._signal,
        mediaId: n._mediaId
      });
    })();
  }
  _getMediaHosts(e) {
    var t = this;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return (0, s.default)(function* () {
      var r;
      const i = yield p.mediaHosts.getHostsInfo({
        operation: f.OPERATIONS.UPLOAD,
        encFilehash: t._encFilehash,
        type: t._type,
        signal: t._signal,
        forceRefresh: n
      });
      if (!((r = t._handleUploadHostFound) === null || r === undefined)) {
        r.call(t, {
          failCount: e,
          hostName: i.selectedHost.hostname,
          hostClass: i.selectedHost.class
        });
      }
      return i;
    })();
  }
};