var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./898817.js");
var o = require("./122583.js");
var s = r(require("./66836.js"));
var l = require("./632157.js");
var u = r(require("./319753.js"));
var c = r(require("./584656.js"));
var d = r(require("./507511.js"));
var p = require("./698210.js");
var f = require("./714698.js");
var _ = r(require("./28790.js"));
var g = require("./263958.js");
var m = require("./300098.js");
var h = require("./245598.js");
var y = r(require("./665810.js"));
var E = require("./937001.js");
function S(e) {
  let {
    mediaKey: t,
    mediaKeyTimestamp: n
  } = e;
  if (t != null && n != null) {
    return {
      mediaKey: t,
      mediaKeyTimestamp: n
    };
  }
  const {
    key: r,
    timestamp: i
  } = (0, d.default)();
  return {
    mediaKey: r,
    mediaKeyTimestamp: i
  };
}
var v = new class {
  constructor() {
    var e = this;
    this._checkIfAlreadyUploaded = (0, s.default)(e => e.token, function () {
      var e = (0, i.default)(function* (e) {
        const {
          encFilehash: t,
          type: n
        } = e;
        const r = (0, f.getDebugString)(t);
        __LOG__(2)`uploadManager.checkIfAlreadyUploaded: [${r}] start`;
        try {
          const t = yield _.default.checkIfUploadExists(e).catch((0, o.filteredCatch)(g.MediaNotFoundError, () => null));
          __LOG__(2)`uploadManager.checkIfAlreadyUploaded: [${r}] success`;
          return t;
        } catch (e) {
          if (e.name === a.ABORT_ERROR) {
            __LOG__(2)`uploadManager.checkIfAlreadyUploaded: [${r}] canceled`;
          } else {
            __LOG__(3)`uploadManager.checkIfAlreadyUploaded: [${r}] error`;
          }
          throw e;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    this._memoizedUpload = (0, s.default)(e => e.token, function () {
      var e = (0, i.default)(function* (e) {
        var t;
        const {
          ciphertextHmac: n,
          encFilehash: r,
          type: i,
          signal: a,
          onUploadHostFound: o,
          onUploadAttemptSuccess: s,
          onUploadAttemptError: l,
          onUploadSuccess: u,
          onProgress: c,
          onFinalize: d,
          onStreamUploadStart: p,
          mediaId: f
        } = e;
        const g = yield _.default.upload({
          ciphertextHmac: n,
          encFilehash: r,
          type: i,
          signal: a,
          onUploadHostFound: o,
          onUploadAttemptSuccess: s,
          onUploadAttemptError: l,
          onProgress: c,
          byteOffset: (t = e.byteOffset) !== null && t !== undefined ? t : 0,
          onFinalize: d,
          onStreamUploadStart: p,
          mediaId: f,
          token: e.token
        });
        u();
        return g;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    this._getExistingOrUpload = (0, s.default)(e => e.token, function () {
      var t = (0, i.default)(function* (t) {
        const {
          ciphertextHmac: n,
          encFilehash: r,
          signal: i,
          type: o,
          onCheckExistingSuccess: s,
          onCheckExistingError: l,
          onUploadHostFound: u,
          onUploadAttemptSuccess: c,
          onUploadAttemptError: d,
          onUploadSuccess: p,
          onProgress: _,
          onFinalize: g,
          onStreamUploadStart: m,
          mediaId: h
        } = t;
        const y = (0, f.getDebugString)(r);
        __LOG__(2)`uploadManager._getExistingOrUpload: [${y}] start`;
        try {
          const a = yield e._checkIfAlreadyUploaded({
            encFilehash: r,
            type: o,
            signal: i,
            mediaId: h,
            token: t.token
          }).catch(e => {
            l(e);
            throw e;
          }).then(a => (a == null ? undefined : a.complete) === true ? (s(), {
            directPath: a.directPath,
            handle: a.handle,
            url: a.url
          }) : e._memoizedUpload({
            ciphertextHmac: n,
            encFilehash: r,
            type: o,
            signal: i,
            onUploadHostFound: u,
            onUploadAttemptSuccess: c,
            onUploadAttemptError: d,
            onUploadSuccess: p,
            onCheckExistingSuccess: s,
            onCheckExistingError: l,
            onProgress: _,
            onFinalize: g,
            onStreamUploadStart: m,
            byteOffset: a == null ? undefined : a.resume,
            mediaId: h,
            token: t.token
          }));
          __LOG__(2)`uploadManager._getExistingOrUpload: [${y}] success`;
          return a;
        } catch (e) {
          if (e.name === a.ABORT_ERROR) {
            __LOG__(2)`uploadManager._getExistingOrUpload: [${y}] canceled`;
          } else {
            __LOG__(3)`uploadManager._getExistingOrUpload: [${y}] error`;
          }
          throw e;
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    m.downloadUploadCrashLogger.init();
  }
  encryptAndUpload(e) {
    var t = this;
    return (0, i.default)(function* () {
      const {
        blob: n,
        signal: r,
        type: o,
        userUploadAttemptCount: s,
        forwardedFromWeb: l,
        uploadOrigin: d,
        onProgress: f,
        onFinalize: _,
        isViewOnce: g,
        isHdPhoto: y
      } = e;
      __LOG__(2)`uploadManager.encryptAndUpload: start`;
      const {
        handleCheckExistingSuccess: v,
        handleCheckExistingError: M,
        handleUploadHostFound: A,
        handleUploadAttemptSuccess: b,
        handleUploadAttemptError: C,
        handleUploadSuccess: P,
        handleArrayBufferCreated: O,
        handleUploadError: I,
        mediaId: R,
        handleEncryptionStart: N,
        handleEncryptionSuccess: D,
        handleStreamUploadStart: w,
        handleUploadProgress: L
      } = (0, u.default)(o, d, s, l, g, y);
      const k = (e, t) => {
        if (!(f == null)) {
          f(e, t);
        }
        const n = t + e.loaded;
        L(n);
      };
      m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_ENCRYPTION_STARTED);
      try {
        let a;
        if ((0, h.isPerformanceExperimentEnabled)()) {
          const i = S(e);
          a = Promise.resolve(n).then(e => {
            m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED, {
              size: n instanceof Blob ? n.size : n.byteLength
            });
            const t = e instanceof Blob ? (0, p.blobToArrayBuffer)(e) : e;
            m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED);
            return t;
          }).then(e => {
            O(e.byteLength);
            N();
            return (0, c.default)({
              type: o,
              plaintext: e,
              mediaKey: i.mediaKey
            });
          }).then(n => {
            var a;
            let {
              hash: s,
              ciphertextHmac: u,
              sidecar: c,
              firstFrameSidecar: d
            } = n;
            D();
            m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_ENCRYPTION_FINISHED);
            return (e.mediaKey ? t._getExistingOrUpload : t._memoizedUpload)({
              ciphertextHmac: u,
              encFilehash: s,
              type: o,
              signal: r,
              onCheckExistingSuccess: v,
              onCheckExistingError: M,
              onUploadHostFound: A,
              onUploadAttemptSuccess: b,
              onUploadAttemptError: C,
              onUploadSuccess: P,
              onProgress: k,
              onFinalize: _,
              onStreamUploadStart: w,
              mediaId: R,
              token: (a = e.token) !== null && a !== undefined ? a : s
            }).then(e => ({
              directPath: l && E.ServerProps.mmsCatV1ForwardHotOverrideEnabled ? T(e.directPath) : e.directPath,
              encFilehash: s,
              mediaKey: i.mediaKey,
              mediaKeyTimestamp: i.mediaKeyTimestamp,
              sidecar: c,
              firstFrameSidecar: d,
              url: e.url,
              handle: e.handle
            }));
          });
        } else {
          m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED, {
            size: n instanceof Blob ? n.size : n.byteLength
          });
          const s = n instanceof Blob ? (0, p.blobToArrayBuffer)(n) : Promise.resolve(n);
          m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED);
          a = s.then(function () {
            var n = (0, i.default)(function* (n) {
              var i;
              O(n.byteLength);
              const {
                mediaKey: a,
                mediaKeyTimestamp: s
              } = S(e);
              N();
              const {
                ciphertextHmac: u,
                hash: d,
                sidecar: p,
                firstFrameSidecar: f
              } = yield (0, c.default)({
                type: o,
                plaintext: n,
                mediaKey: a
              });
              D();
              m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_ENCRYPTION_FINISHED);
              const g = e.mediaKey ? t._getExistingOrUpload : t._memoizedUpload;
              const h = yield g({
                ciphertextHmac: u,
                encFilehash: d,
                type: o,
                signal: r,
                onCheckExistingSuccess: v,
                onCheckExistingError: M,
                onUploadHostFound: A,
                onUploadAttemptSuccess: b,
                onUploadAttemptError: C,
                onUploadSuccess: P,
                onFinalize: _,
                onStreamUploadStart: w,
                onProgress: k,
                mediaId: R,
                token: (i = e.token) !== null && i !== undefined ? i : d
              });
              return {
                directPath: l && E.ServerProps.mmsCatV1ForwardHotOverrideEnabled ? T(h.directPath) : h.directPath,
                encFilehash: d,
                mediaKey: a,
                mediaKeyTimestamp: s,
                sidecar: p,
                firstFrameSidecar: f,
                url: h.url,
                handle: h.handle
              };
            });
            return function () {
              return n.apply(this, arguments);
            };
          }());
        }
        const s = yield a;
        __LOG__(2)`uploadManager.encryptAndUpload: success`;
        m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_FINISHED);
        return s;
      } catch (e) {
        if (e.name === a.ABORT_ERROR) {
          __LOG__(2)`uploadManager.encryptAndUpload: canceled`;
        } else {
          __LOG__(3)`uploadManager.encryptAndUpload: error`;
        }
        m.downloadUploadCrashLogger.mark(R, m.ProgressType.UPLOAD_ERROR);
        I(e);
        throw e;
      }
    })();
  }
  unencryptedUpload(e) {
    var t;
    const {
      file: n,
      hash: r,
      type: i,
      signal: a,
      uploadOrigin: o,
      isViewOnce: s
    } = e;
    const {
      handleCheckExistingSuccess: l,
      handleCheckExistingError: c,
      handleUploadHostFound: d,
      handleUploadAttemptSuccess: p,
      handleUploadAttemptError: f,
      handleUploadSuccess: _,
      handleStreamUploadStart: g,
      handleUploadProgress: m,
      mediaId: h
    } = (0, u.default)(i, o, 0, false, s);
    const y = (t = e.token) !== null && t !== undefined ? t : r;
    return this._getExistingOrUpload({
      ciphertextHmac: n,
      encFilehash: r,
      type: i,
      signal: a,
      onCheckExistingSuccess: l,
      onCheckExistingError: c,
      onUploadHostFound: d,
      onUploadAttemptSuccess: p,
      onUploadAttemptError: f,
      onUploadSuccess: _,
      onStreamUploadStart: g,
      onProgress: (e, t) => {
        m(e.loaded + t);
      },
      mediaId: h,
      token: y
    });
  }
  uploadCoverPhoto(e) {
    var t;
    const {
      file: n,
      hash: r,
      type: i,
      signal: a,
      uploadOrigin: o,
      isViewOnce: s
    } = e;
    const {
      handleCheckExistingSuccess: l,
      handleCheckExistingError: c,
      handleUploadHostFound: d,
      handleUploadAttemptSuccess: p,
      handleUploadAttemptError: f,
      handleUploadSuccess: _,
      handleStreamUploadStart: g,
      handleUploadProgress: m,
      mediaId: h
    } = (0, u.default)(i, o, 0, false, s);
    const y = {
      ciphertextHmac: n,
      encFilehash: r,
      type: i,
      signal: a,
      onCheckExistingSuccess: l,
      onCheckExistingError: c,
      onUploadHostFound: d,
      onUploadAttemptSuccess: p,
      onUploadAttemptError: f,
      onUploadSuccess: _,
      onStreamUploadStart: g,
      onProgress: (e, t) => {
        m(e.loaded + t);
      },
      mediaId: h,
      token: (t = e.token) !== null && t !== undefined ? t : e.hash
    };
    return this._memoizedUpload(y);
  }
}();
function T(e) {
  const [t, n] = e.split("?");
  const r = new y.default(n);
  const i = (0, l.unixTime)();
  r.set("_nc_hot", String(i));
  return `${t}?${r.toString()}`;
}
exports.default = v;