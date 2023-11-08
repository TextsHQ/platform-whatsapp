var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadManager = undefined;
var a = i(require("../vendor/81109.js"));
var o = i(require("../vendor/348926.js"));
var s = i(require("./84464.js"));
var l = i(require("./703393.js"));
var u = i(require("./66836.js"));
var c = i(require("./670983.js"));
var d = require("./984330.js");
var p = require("./776687.js");
var f = i(require("./904219.js"));
var _ = i(require("./75170.js"));
var g = require("./98516.js");
var m = require("./874962.js");
var h = require("./809293.js");
var y = require("./707132.js");
var E = require("./163755.js");
var S = i(require("./969663.js"));
var v = require("./86595.js");
var T = require("./714698.js");
var M = require("./189123.js");
var A = require("./172259.js");
var b = require("./288057.js");
var C = i(require("./28790.js"));
var P = require("./263958.js");
var O = require("./300098.js");
var I = require("./708761.js");
var R = require("./192737.js");
var N = i(require("./281007.js"));
var D = require("./759694.js");
var w = require("./123816.js");
const L = 1;
const k = 2;
const G = e => {
  switch (e) {
    case I.MEDIA_TYPES.THUMBNAIL_DOCUMENT:
      return k;
    case I.MEDIA_TYPES.VIDEO:
    default:
      return L;
  }
};
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, o.default)(function* (e) {
    const {
      directPath: t,
      encFilehash: n,
      filehash: i,
      mediaKey: a,
      onDecryptStart: s,
      downloadOrigin: l,
      staticUrl: u,
      type: d,
      mode: h,
      progressiveJpegOpts: y,
      partialVideoOpts: E,
      onProgress: M,
      userDownloadAttemptCount: A,
      isViewOnce: I,
      imageDimensions: R,
      chatWid: w
    } = e;
    const L = (0, v.isMediaCryptoExpectedForMediaType)(d);
    if (a == null && L) {
      __LOG__(4, undefined, new Error(), true, ["media"])`[DownloadManager] expected media key for media type ${d}`;
      SEND_LOGS(`missing-media-key-for-media-type-${d}`, 1, "media");
      throw new b.MediaDecryptionError(`decryptMedia: missing key for type ${d}`);
    }
    if (n == null && L) {
      __LOG__(4, undefined, new Error(), true, ["media"])`[DownloadManager] expected encFilehash for media type ${d}`;
      SEND_LOGS(`missing-encfilehash-for-media-type-${d}`, 1, "media");
      throw new b.MediaDecryptionError(`decryptMedia: missing encFilehash for type ${d}`);
    }
    const k = y == null ? undefined : y.scanCount;
    const G = y != null && (y.scanCount == null || y.scanCount === y.scanLengths.length);
    const U = G ? null : k;
    const {
      handleDownloadSuccess: x,
      handleDownloadHostFound: B,
      handleDownloadError: F,
      handleDownloadAttemptSuccess: j,
      handleDownloadAttemptError: Y,
      handleDownloadAndDecryptSuccess: K,
      markDecryptionStart: W,
      markDecryptionEnd: V,
      startNetworkT: H,
      markNetworkT: $,
      mediaId: z
    } = yield (0, p.createMediaDownloadMetrics)({
      directPath: t,
      downloadOrigin: l,
      type: d,
      userDownloadAttemptCount: A,
      isViewOnce: I,
      downloadMode: h,
      isPrefetch: y != null && !G,
      imageDimensions: R,
      chatWid: w
    });
    const q = e.signal || new r().signal;
    const J = (0, T.getDebugString)(i);
    __LOG__(2)`downloadManager.download: [${J}] start`;
    try {
      const e = y != null ? new m.ImageStreamer({
        scanLengths: y.scanLengths,
        scansSidecar: y.scansSidecar,
        mimetype: y.mimetype,
        filehash: i,
        debugString: J,
        onProgressiveUpdate: y.onProgressiveUpdate
      }) : null;
      const r = (0, S.default)({
        partialVideoOpts: E,
        progressiveJpegOpts: y,
        scanCount: U
      });
      const l = U == null && y ? (t, n) => {
        if (!(e == null)) {
          e.handleProgress(t.total, n);
        }
      } : null;
      const p = L && a != null ? (0, f.default)(d, a).then(t => {
        if (!(e == null)) {
          e.setCryptoKeys(t);
        }
        return t;
      }) : Promise.resolve(null);
      const [v, T] = yield Promise.all([p, (0, o.default)(function* () {
        H();
        try {
          return yield C.default.download({
            directPath: t,
            filehash: L ? (0, c.default)(n, "encFilehash") : i,
            staticUrl: u,
            type: d,
            signal: q,
            mode: h,
            byteRange: r,
            onData: l,
            onDownloadHostFound: B,
            onDownloadAttemptSuccess: j,
            onDownloadAttemptError: Y,
            debugString: J,
            onProgress: M
          });
        } finally {
          $();
        }
      })()]);
      x(T.byteLength);
      let A = T;
      if (v != null) {
        O.downloadUploadCrashLogger.mark(z, O.ProgressType.DOWNLOAD_DECRYPTION_STARTED);
        if (!(s == null)) {
          s();
        }
        W();
        if (U != null && r != null) {
          const t = r.end - r.start;
          return (0, c.default)(yield e == null ? undefined : e.handleProgress(t, T), "yield imageStreamer?.handleProgress(encryptedFileSize, ciphertextHmac)");
        }
        A = E ? yield (0, g.decryptPartialMedia)({
          mediaKeys: v,
          ciphertext: T
        }) : yield (0, _.default)({
          mediaKeys: v,
          ciphertextHmac: T,
          expectedPlaintextHash: i,
          debugString: J
        });
        V();
        O.downloadUploadCrashLogger.mark(z, O.ProgressType.DOWNLOAD_DECRYPTION_FINISHED);
      } else if (E == null) {
        if (!(yield (0, D.validateFileash)(A, i))) {
          throw new b.MediaHashMismatch();
        }
      }
      __LOG__(2)`downloadManager.download: [${J}] success`;
      K();
      return A;
    } catch (t) {
      if (t instanceof P.MediaNotFoundError) {
        F(t, Boolean(e.isFinalRmrRetry));
        __LOG__(2, true)`downloadManager.download: [${J}] expected error\n${(0, N.default)(t)}`;
      } else {
        F(t, true);
        __LOG__(3, true)`downloadManager.download: [${J}] error\n${(0, N.default)(t)}`;
      }
      O.downloadUploadCrashLogger.mark(z, O.ProgressType.DOWNLOAD_ERROR);
      throw t;
    }
  })).apply(this, arguments);
}
function B() {
  return F.apply(this, arguments);
}
function F() {
  return (F = (0, o.default)(function* (e) {
    const {
      mediaObject: t
    } = e;
    const n = (0, T.getDebugString)(t.filehash);
    t.filehash;
    t.type;
    __LOG__(2)`downloadManager.rmr: [${n}] start`;
    t.consolidate({
      downloadStage: A.DOWNLOAD_STAGE.REUPLOADING
    });
    const r = self.performance.now();
    const i = new w.WebcMediaRmrWamEvent((0, a.default)((0, a.default)({}, e.rmrData), {}, {
      webcRmrReason: e.rmrReason
    }));
    const o = (0, R.getEffectiveNetworkType)();
    if (o != null) {
      i.webcBrowserNetworkType = o;
    }
    if (t.type) {
      i.messageMediaType = (0, M.webMediaTypeToWamMediaType)(t.type);
    }
    if (t.size != null) {
      i.webcMediaSize = t.size;
    }
    try {
      const e = yield t.rmr({
        onMsgSelect: function (e) {
          const t = (0, E.getMaybeChat)(e);
          if (i.webcChatType == null && t) {
            i.webcChatType = t.getWebcChatType();
          }
          if (i.webcMessageT == null) {
            i.webcMessageT = e.t;
          }
          i.messageMediaType = e.getWamMediaType();
        }
      });
      i.webcRmrStatusCode = e;
      __LOG__(2)`downloadManager.rmr: [${n}] status ${e}`;
      if (e === 404) {
        throw new y.MediaNotOnPhone();
      }
      if (e !== 200) {
        throw new d.ServerStatusCodeError(e);
      }
    } catch (e) {
      i.webcMediaRmrError = true;
      throw e instanceof b.RMRNotSupportedOnNewsletterMessagesError ? (e.mediaType === I.MEDIA_TYPES.NEWSLETTER_STICKER ? t.consolidate({
        downloadStage: A.DOWNLOAD_STAGE.RESOLVED
      }) : __LOG__(3, true)`downloadManager.rmr: [${n}] error RMRNotSupportedOnNewsletterMessagesError${e.message}\n${e.stack}`, e) : e instanceof y.MediaNotOnPhone ? (__LOG__(2, true)`downloadManager.rmr: [${n}] error MediaNotOnPhone\n${(0, N.default)(e)}`, e) : (__LOG__(3, true)`downloadManager.rmr: [${n}] error ${e.status || e.message}\n${e.stack}`, new b.MediaNeedsReupload());
    } finally {
      i.webcMediaRmrT = Math.ceil(self.performance.now() - r);
      i.commit();
    }
  })).apply(this, arguments);
}
function j() {
  return Y.apply(this, arguments);
}
function Y() {
  return (Y = (0, o.default)(function* (e) {
    const {
      directPath: t,
      encFilehash: n,
      signal: i,
      type: a
    } = e;
    yield C.default.checkExistence({
      directPath: t,
      encFilehash: n,
      type: a,
      signal: i || new r().signal
    });
  })).apply(this, arguments);
}
const K = new class {
  constructor() {
    this.preloader = new l.default(10, {
      thumbnail: 4
    });
    this.downloadAndMaybeDecrypt = (0, s.default)(e => (0, h.getLRUStoreKey)(e), new h.DownloadAndDecryptCache(), e => e.isPreload === true ? this.preloader.enqueue(() => U(e), {
      priority: -G(e.type),
      group: "thumbnail",
      signal: e.signal
    }) : U(e));
    this.rmr = (0, u.default)(e => e.mediaObject.filehash || "", B);
    this.checkExistence = (0, u.default)(e => e.encFilehash, j);
    O.downloadUploadCrashLogger.init();
  }
}();
exports.downloadManager = K;