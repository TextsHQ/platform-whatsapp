var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadMediaResultKind = undefined;
exports.cancelUploadMedia = function (e) {
  const {
    uploadPromise: t
  } = e;
  if (t == null) {
    return;
  }
  const n = N.get(t);
  if (n == null) {
    return;
  }
  N.delete(t);
  n();
};
exports.getBlobFromMediaObject = F;
exports.getOrDownloadBlob = x;
exports.uploadMedia = function (e) {
  return U(e, w);
};
exports.uploadUnencryptedMedia = function (e) {
  return U(e, k);
};
var a = i(require("../vendor/348926.js"));
var o = i(require("../vendor/823493.js"));
var s = require("./898817.js");
var l = require("./122583.js");
var u = require("./815612.js");
var c = i(require("./319753.js"));
var d = require("./707132.js");
var p = require("./698210.js");
var f = require("./270183.js");
var _ = require("./86595.js");
var g = R(require("./232294.js"));
var m = require("./509998.js");
var h = require("./445955.js");
var y = require("./196127.js");
var E = R(require("./197636.js"));
var S = require("./102645.js");
var v = require("./172259.js");
var T = require("./288057.js");
var M = require("./263958.js");
var A = require("./947638.js");
var b = require("./708761.js");
var C = i(require("./92577.js"));
var P = require("./885313.js");
var O = i(require("./556869.js"));
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function R(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}
const N = new WeakMap();
const D = {
  SUCCESS: "success",
  CANCELLATION: "cancellation",
  ERROR: "error",
  TIMEOUT: "timeout"
};
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, a.default)(function* (e) {
    var t;
    var n;
    let {
      blob: r,
      forwardedFromWeb: i,
      mediaKeyInfo: a,
      mediaObject: s,
      mediaType: l,
      signal: u,
      uploadEntry: d,
      uploadOrigin: p,
      isViewOnce: _,
      earlyUpload: g
    } = e;
    if (d instanceof m.EncryptedMediaEntry && (d == null ? undefined : d.canReuseMediaKey())) {
      (0, c.default)(l, p, 0, i, _).handleCheckExistingSuccess();
      return d;
    }
    const h = yield g;
    if (h != null) {
      return s.entries.addEntry({
        deprecatedMms3Url: h.url,
        mediaKey: h.mediaKey,
        mediaKeyTimestamp: h.mediaKeyTimestamp,
        encFilehash: h.encFilehash,
        type: l,
        sidecar: h.sidecar,
        directPath: h.directPath,
        firstFrameSidecar: h.firstFrameSidecar,
        debugHint: "upload"
      });
    }
    const y = (0, o.default)((e, t) => {
      const n = e.loaded + t;
      if (Number.isFinite(n)) {
        s.consolidate({
          loadedSize: n
        });
      }
    }, A.FILE_PROGRESS_THROTTLE_WAIT_MS);
    const E = a ? a.key : d == null ? undefined : d.getMediaKey();
    const S = a ? a.timestamp : d == null ? undefined : d.getMediaKeyTimestamp();
    const {
      directPath: T,
      encFilehash: M,
      mediaKey: P,
      mediaKeyTimestamp: O,
      url: I,
      sidecar: R,
      firstFrameSidecar: N
    } = yield C.default.encryptAndUpload({
      blob: r,
      mediaKey: E,
      mediaKeyTimestamp: S,
      type: l,
      signal: u,
      userUploadAttemptCount: s.userUploadAttemptCount,
      forwardedFromWeb: i,
      uploadOrigin: p,
      onProgress: y,
      onFinalize: () => {
        s.consolidate({
          uploadStage: v.UPLOAD_STAGE.FINALIZING
        });
      },
      isViewOnce: _,
      isHdPhoto: l === b.MEDIA_TYPES.IMAGE && (0, f.isHdPhoto)((t = s.contentInfo.fullHeight) !== null && t !== undefined ? t : 0, (n = s.contentInfo.fullWidth) !== null && n !== undefined ? n : 0)
    });
    return s.entries.addEntry({
      deprecatedMms3Url: I,
      mediaKey: P,
      mediaKeyTimestamp: O,
      encFilehash: M,
      type: l,
      sidecar: R,
      directPath: T,
      firstFrameSidecar: N,
      debugHint: "upload"
    });
  })).apply(this, arguments);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, a.default)(function* (e) {
    let {
      blob: t,
      mediaObject: n,
      mediaType: r,
      signal: i,
      uploadOrigin: a,
      isViewOnce: o,
      calculateToken: s
    } = e;
    const l = yield (0, p.blobToArrayBuffer)(t);
    const c = yield (0, u.calculateFilehash)(l);
    const d = yield C.default.unencryptedUpload({
      file: l,
      isViewOnce: o,
      signal: i,
      type: r,
      uploadOrigin: a,
      hash: c,
      token: yield s == null ? undefined : s(c)
    });
    return n.entries.addUnencryptedEntry({
      directPath: d.directPath,
      debugHint: "upload",
      filehash: c,
      type: r,
      handle: d.handle
    });
  })).apply(this, arguments);
}
function U(e, t) {
  let {
    mimetype: n,
    mediaObject: i,
    mediaType: o,
    forwardedFromWeb: u,
    uploadOrigin: c,
    mediaKeyInfo: p,
    isViewOnce: f,
    earlyUpload: h,
    calculateToken: S
  } = e;
  let A = p;
  if (i.uploadPromise) {
    return i.uploadPromise;
  }
  const C = new r();
  const {
    signal: P
  } = C;
  const I = Promise.resolve().then(() => {
    i.consolidate({
      uploadStage: v.UPLOAD_STAGE.UPLOADING
    });
  }).then(() => x({
    mediaObject: i,
    mimetype: n,
    mediaType: o,
    abortSignal: P,
    uploadOrigin: c
  })).then(function () {
    var e = (0, a.default)(function* (e) {
      const n = i.entries.getUploadEntry((0, _.isMediaCryptoExpectedForMediaType)(o));
      if (n instanceof m.EncryptedMediaEntry && A && n.mediaKey !== A.key) {
        var r;
        var a;
        const e = A;
        __LOG__(4, undefined, new Error(), true)`uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same, mediaType: ${o}`;
        SEND_LOGS(`media-keys-not-the-same-${o}`);
        const t = !i.entries.entries.some(t => t.getMediaKey() === e.key);
        __LOG__(2)`[_uploadMediaAndManageErrors]: isNewEntry: ${t} uploadEntry.mediaKey length ${(r = n.mediaKey) === null || r === undefined ? undefined : r.length} - mediaKeyInfo.mediaKey length ${(a = e.key) === null || a === undefined ? undefined : a.length}`;
        if (o !== b.MEDIA_TYPES.STICKER) {
          throw (0, O.default)("uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same");
        }
        A = null;
      }
      const s = yield t({
        blob: e,
        forwardedFromWeb: u,
        mediaKeyInfo: A,
        mediaObject: i,
        mediaType: o,
        signal: P,
        uploadEntry: n,
        uploadOrigin: c,
        isViewOnce: f,
        earlyUpload: h,
        calculateToken: S
      });
      if (!s) {
        throw (0, O.default)("could not create media entry");
      }
      if ((o === b.MEDIA_TYPES.PTT || o === b.MEDIA_TYPES.AUDIO) && !g.canPlayOgg()) {
        if (g.shouldUseMediaCache(o)) {
          const e = i.filehash;
          if (e && i.mediaBlob) {
            return E.transcode(i.mediaBlob.formData()).then(t => {
              y.InMemoryMediaBlobCache.put(e, t);
            }).then(() => s);
          }
        } else if (i.mediaBlob) {
          return g.gatherAndSetMetadata(i, i.mediaBlob).then(() => s);
        }
      }
      return s;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }()).then(e => {
    if (P.aborted) {
      throw new s.AbortError();
    }
    i.consolidate({
      uploadStage: v.UPLOAD_STAGE.UPLOADED
    });
    __LOG__(2)`MediaAlgo.uploadMedia: success`;
    return {
      kind: D.SUCCESS,
      mediaEntry: e
    };
  }).catch(e => {
    if (e.name === s.ABORT_ERROR) {
      __LOG__(2)`MediaAlgo.uploadMedia: canceled`;
    } else {
      __LOG__(3)`MediaAlgo.uploadMedia: ${e}`;
    }
    throw e;
  }).finally(() => {
    delete i.uploadPromise;
  }).catch((0, l.filteredCatch)(T.FileNotReadableError, () => {
    i.consolidate({
      uploadStage: v.UPLOAD_STAGE.ERROR_FILE_NOT_READABLE
    });
    return {
      kind: D.ERROR
    };
  })).catch((0, l.filteredCatch)(d.MediaNotOnPhone, () => {
    i.consolidate({
      uploadStage: v.UPLOAD_STAGE.ERROR_MISSING
    });
    return {
      kind: D.ERROR
    };
  })).catch((0, l.filteredCatch)(M.MediaTooLargeError, () => {
    i.consolidate({
      uploadStage: v.UPLOAD_STAGE.ERROR_TOO_LARGE
    });
    return {
      kind: D.ERROR
    };
  })).catch(e => {
    i.consolidate({
      uploadStage: v.UPLOAD_STAGE.NEED_UPLOAD
    });
    if (e.name === s.ABORT_ERROR) {
      return {
        kind: D.CANCELLATION
      };
    } else {
      return {
        kind: D.ERROR
      };
    }
  });
  N.set(I, () => {
    C.abort();
  });
  i.uploadPromise = I;
  return I;
}
function x() {
  return B.apply(this, arguments);
}
function B() {
  return (B = (0, a.default)(function* (e) {
    let {
      mediaObject: t,
      mimetype: n,
      mediaType: r,
      abortSignal: i,
      uploadOrigin: a,
      chatWid: o
    } = e;
    const s = F(t);
    if (s) {
      return s;
    }
    yield (0, S.downloadMedia)({
      mimetype: n,
      mediaObject: t,
      downloadEvenIfExpensive: true,
      mediaType: r,
      signal: i,
      rmrReason: P.WEBC_RMR_REASON_CODE.UPLOAD,
      downloadOrigin: (0, h.getDownloadOriginFromUploadOrigin)(a),
      mode: "manual",
      chatWid: o
    });
    if (t.downloadStage === v.DOWNLOAD_STAGE.ERROR_MISSING) {
      throw new d.MediaNotOnPhone();
    }
    const l = F(t);
    if (l) {
      return l;
    }
    throw (0, O.default)("cant upload media w/out mediaBlob after download");
  })).apply(this, arguments);
}
function F(e) {
  const t = e.mediaBlob;
  if (t) {
    return t.formData();
  } else if (e.filehash) {
    return y.InMemoryMediaBlobCache.get(e.filehash);
  } else {
    return undefined;
  }
}
exports.UploadMediaResultKind = D;