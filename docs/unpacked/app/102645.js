var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoEntryAfterRMR = exports.MissingEncFilehash = undefined;
exports.cancelDownloadMedia = function (e) {
  var t;
  const {
    downloadPromise: n
  } = e;
  if (n == null) {
    return;
  }
  const r = (t = k.get(n)) === null || t === undefined ? undefined : t.abort;
  if (r == null) {
    return;
  }
  k.delete(n);
  r();
};
exports.checkExistence = function () {
  return j.apply(this, arguments);
};
exports.downloadMedia = B;
exports.manuallySetMedia = function () {
  return G.apply(this, arguments);
};
var a = i(require("../vendor/348926.js"));
var o = i(require("../vendor/823493.js"));
var s = require("./898817.js");
var l = require("./477689.js");
var u = require("./122583.js");
var c = i(require("./670983.js"));
var d = i(require("./60748.js"));
var p = require("./941555.js");
var f = require("./707132.js");
var _ = require("./698210.js");
var g = require("./86595.js");
var m = require("./232294.js");
var h = require("./509998.js");
var y = require("./196127.js");
var E = R(require("./197636.js"));
var S = i(require("./756680.js"));
var v = require("./172259.js");
var T = require("./937484.js");
var M = R(require("./288057.js"));
var A = require("./263958.js");
var b = require("./947638.js");
var C = require("./708761.js");
var P = require("./517660.js");
var O = require("./581470.js");
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
class N extends (0, l.customError)("NoEntryAfterRMR") {}
exports.NoEntryAfterRMR = N;
class D extends (0, l.customError)("MissingEncFilehash") {}
exports.MissingEncFilehash = D;
const w = 3;
const L = 4;
const k = new WeakMap();
function G() {
  return (G = (0, a.default)(function* (e) {
    let {
      mimetype: t,
      mediaObject: n,
      mediaBlob: r,
      mediaType: i,
      rmrReason: a,
      downloadOrigin: o,
      chatWid: s
    } = e;
    if (!n.mediaBlob) {
      yield (0, m.gatherAndSetMetadata)(n, r);
      yield B({
        mimetype: t,
        mediaObject: n,
        downloadEvenIfExpensive: false,
        mediaType: i,
        rmrReason: a,
        downloadOrigin: o,
        chatWid: s
      });
    }
  })).apply(this, arguments);
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, a.default)(function* (e) {
    var t;
    var n;
    const {
      mimetype: r
    } = e;
    const i = (0, o.default)(t => {
      e.mediaObject.consolidate({
        loadedSize: t.loaded
      });
    }, b.FILE_PROGRESS_THROTTLE_WAIT_MS);
    const a = yield p.downloadManager.downloadAndMaybeDecrypt({
      directPath: e.directPath,
      encFilehash: e.encFilehash,
      filehash: e.objFilehash,
      isFinalRmrRetry: e.isFinalRmrRetry,
      mediaKey: e.mediaKey,
      mediaKeyTimestamp: e.mediaKeyTimestamp,
      signal: e.signal,
      staticUrl: e.staticUrl,
      type: e.mediaType,
      onDecryptStart: () => {
        e.mediaObject.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.PROCESSING
        });
      },
      onProgress: i,
      userDownloadAttemptCount: e.mediaObject.userDownloadAttemptCount,
      downloadOrigin: e.downloadOrigin,
      mode: e.mode,
      progressiveJpegOpts: Y({
        scanLengths: e.scanLengths,
        scansSidecar: e.scansSidecar,
        mimetype: r,
        mediaObject: e.mediaObject
      }),
      isViewOnce: e.isViewOnce,
      imageDimensions: e.mediaType === C.MEDIA_TYPES.IMAGE ? {
        fileHeight: (t = e.mediaObject.contentInfo.fullHeight) !== null && t !== undefined ? t : 0,
        fileWidth: (n = e.mediaObject.contentInfo.fullWidth) !== null && n !== undefined ? n : 0
      } : undefined,
      chatWid: e.chatWid
    });
    const s = r != null && r !== "" ? r : (0, T.getMediaMimeType)(e.mediaType, new Uint8Array(a));
    return new Blob([a], {
      type: s
    });
  })).apply(this, arguments);
}
function B() {
  return F.apply(this, arguments);
}
function F() {
  return (F = (0, a.default)(function* (e) {
    let {
      mimetype: t,
      mediaObject: n,
      downloadEvenIfExpensive: i,
      mediaType: o,
      signal: l,
      rmrReason: T,
      rmrData: b,
      downloadOrigin: O,
      shouldThrow: I,
      isVcardOverMmsDocument: R,
      mode: w,
      isAutoDownload: L,
      isFinalRmrRetry: G,
      isViewOnce: x,
      chatWid: F
    } = e;
    const j = !L;
    if (!n) {
      return;
    }
    const Y = n.filehash;
    if (!Y) {
      return;
    }
    const K = V(n);
    if (K && j) {
      K.shouldStoreInMemory = true;
    }
    if (n.downloadPromise) {
      return n.downloadPromise;
    }
    if (n.downloadStage === v.DOWNLOAD_STAGE.ERROR_MISSING) {
      return;
    }
    if (n.downloadStage === v.DOWNLOAD_STAGE.PREPARING) {
      return;
    }
    if (n.mediaBlob) {
      if (yield n.mediaBlob.validate()) {
        return void n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.RESOLVED
        });
      } else {
        n.clearBlob();
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.NEED_POKE
        });
        return void n.notifyMsgsAsync();
      }
    }
    const W = y.InMemoryMediaBlobCache.get(Y);
    let H;
    let $;
    const z = new r();
    return (0, d.default)([z.signal, l].filter(Boolean), e => {
      var l;
      const d = function () {
        var r = (0, a.default)(function* () {
          if (W) {
            $ = W;
          } else {
            var r;
            var a;
            var s;
            H = n.entries.getDownloadEntry((0, g.isMediaCryptoExpectedForMediaType)(o));
            if (!H) {
              if (!i || !(0, g.isRmrSupportedForMediaType)(o)) {
                if (!(0, g.isRmrSupportedForMediaType)(o)) {
                  throw new f.MediaNotOnPhone();
                }
                return void n.consolidate({
                  downloadStage: v.DOWNLOAD_STAGE.NEED_POKE
                });
              }
              yield p.downloadManager.rmr({
                mediaObject: n,
                signal: e,
                rmrReason: T,
                rmrData: b
              });
              H = n.entries.getDownloadEntry((0, g.isMediaCryptoExpectedForMediaType)(o));
              if (!H) {
                if (o !== C.MEDIA_TYPES.STICKER) {
                  throw new N();
                }
                return;
              }
            }
            n.consolidate({
              downloadStage: v.DOWNLOAD_STAGE.FETCHING
            });
            H = (0, c.default)(H, "entry");
            const {
              scansSidecar: u,
              scanLengths: d,
              directPath: _,
              staticUrl: m
            } = H;
            var l;
            if (H instanceof h.EncryptedMediaEntry && H.getEncfilehash() == null) {
              if (!((l = H) === null || l === undefined)) {
                l.markWhetherOnServer(false);
              }
              throw new D();
            }
            const y = yield U({
              directPath: _,
              encFilehash: (r = H) === null || r === undefined ? undefined : r.getEncfilehash(),
              objFilehash: Y,
              isFinalRmrRetry: G,
              mediaKey: (a = H) === null || a === undefined ? undefined : a.getMediaKey(),
              mediaKeyTimestamp: (s = H) === null || s === undefined ? undefined : s.getMediaKeyTimestamp(),
              signal: e,
              staticUrl: m,
              mediaType: o,
              mediaObject: n,
              downloadOrigin: O,
              mode: w,
              scanLengths: d,
              mimetype: t,
              scansSidecar: u,
              isViewOnce: x,
              chatWid: F
            });
            $ = o === C.MEDIA_TYPES.PTT || o === C.MEDIA_TYPES.NEWSLETTER_PTT || o === C.MEDIA_TYPES.AUDIO ? yield E.transcode(y) : y;
          }
          if ($.type === "text/vcard" && R) {
            try {
              const e = yield (0, _.blobToText)($);
              if (e) {
                const t = (0, P.parseMultiVcard)(e);
                if (t.length > 0) {
                  n.consolidate({
                    parsedVcards: t
                  });
                } else {
                  __LOG__(4, undefined, new Error(), true, ["non-sad"])`Assertion failed!`;
                  SEND_LOGS("vcard_over_mms:Failed to parse vcard over mms contents", 1, "non-sad");
                }
              }
            } catch (e) {
              __LOG__(4, undefined, new Error(), true, ["non-sad"])`Failed to retrieve blob text contents ${String(e)}`;
              SEND_LOGS(`vcard_over_mms:blobToText failed with error: ${String(e)}`, 1, "non-sad");
            }
          }
          if ((0, m.shouldUseMediaCache)(o)) {
            const e = V(n);
            if ((e == null ? undefined : e.shouldStoreInMemory) || j) {
              y.InMemoryMediaBlobCache.put(Y, $);
              yield (0, m.gatherAndSetMetadataNoOpaque)(n, $);
            }
          } else {
            const e = yield S.default.createFromData($, $.type);
            yield (0, m.gatherAndSetMetadata)(n, e);
          }
          n.consolidate({
            downloadStage: v.DOWNLOAD_STAGE.RESOLVED
          });
          n.downloadPromise = null;
          return n.resolveWhenConsolidated();
        });
        return function () {
          return r.apply(this, arguments);
        };
      }()().catch((0, u.filteredCatch)(A.MediaNotFoundError, function () {
        var e = (0, a.default)(function* (e) {
          if (!H) {
            throw e;
          }
          H.markWhetherOnServer(false);
          if (!i) {
            throw e;
          }
          yield p.downloadManager.rmr({
            mediaObject: n,
            signal: new r().signal,
            rmrReason: T,
            rmrData: b
          });
          n.downloadPromise = null;
          return B({
            mimetype: t,
            mediaObject: n,
            downloadEvenIfExpensive: false,
            mediaType: o,
            rmrReason: T,
            rmrData: b,
            downloadOrigin: O,
            isFinalRmrRetry: true,
            isVcardOverMmsDocument: R,
            mode: w,
            isAutoDownload: L,
            chatWid: F
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      }())).catch((0, u.filteredCatch)(M.MediaUnsupportedError, e => {
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.ERROR_UNSUPPORTED
        });
        __LOG__(3)`downloadMedia: media unsupported error: ${e.name}, ${e.message}, ${t || ""}`;
        __LOG__(4, undefined, new Error(), true, ["non-sad"])`Assertion failed! ${e.message}`;
        SEND_LOGS("downloadMedia: media unsupported error:", 1, "non-sad");
        if (I) {
          throw e;
        }
      })).catch((0, u.filteredCatch)(f.MediaNotOnPhone, e => {
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.ERROR_MISSING
        });
        if (I) {
          throw e;
        }
      })).catch((0, u.filteredCatch)([N, D], e => {
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.ERROR_MISSING
        });
        if ((e !== N || o !== C.MEDIA_TYPES.STICKER) && (__LOG__(3)`Unexpected download error: ${e.name}`, __LOG__(4, undefined, new Error(), true, ["non-sad"])`Assertion failed!`, SEND_LOGS(`unexpected download error: ${e.name}`, 1, "non-sad"), I)) {
          throw e;
        }
      })).catch((0, u.filteredCatch)([M.MediaDecryptionError, M.MediaHashMismatch], e => {
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.ERROR_MISSING
        });
        if (I) {
          throw e;
        }
      })).catch(e => {
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.NEED_POKE
        });
        if (e instanceof M.MediaLoadError) {
          __LOG__(3)`downloadMedia: media unsupported error: ${e.name}, ${e.message}, ${t || ""}`;
          __LOG__(4, undefined, new Error(), true, ["non-sad"])`Assertion failed! ${e.message}`;
          SEND_LOGS("downloadMedia: media load error:", 0, "non-sad");
          if (I) {
            throw e;
          }
        } else if (e instanceof M.TranscodeBlobTooLargeError) {
          __LOG__(3)`downloadMedia: error: ${e.message}, ${t || ""}`;
          __LOG__(4, undefined, new Error(), true, ["non-sad"])`Assertion failed! ${e.message}`;
          SEND_LOGS("downloadMedia: transcode blob too large", 0, "non-sad");
          if (I) {
            throw e;
          }
        } else if (e instanceof M.UnableToPlayVideoError) {
          __LOG__(3)`downloadMedia: error: ${e.message}, ${t || ""}`;
          __LOG__(4, undefined, new Error(), true, ["non-sad"])`Assertion failed! ${e.message}`;
          SEND_LOGS("downloadMedia: unable to play video", 0, "non-sad");
          if (I) {
            throw e;
          }
        } else if (e.name !== s.ABORT_ERROR) {
          __LOG__(2)`downloadMedia: error`;
          if (I) {
            throw e;
          }
        } else if (I) {
          throw e;
        }
      }).finally(() => {
        n.downloadPromise = null;
      });
      k.set(d, {
        abort: () => {
          z.abort();
        },
        shouldStoreInMemory: ((l = V(n)) === null || l === undefined ? undefined : l.shouldStoreInMemory) || j
      });
      n.downloadPromise = d;
      return d;
    });
  })).apply(this, arguments);
}
function j() {
  return (j = (0, a.default)(function* (e) {
    let {
      mimetype: t,
      mediaObject: n,
      mediaType: i
    } = e;
    const {
      filehash: a
    } = n;
    if (!a) {
      return;
    }
    if (n.downloadStage !== v.DOWNLOAD_STAGE.INIT) {
      return;
    }
    if (yield K(n)) {
      return;
    }
    const o = y.InMemoryMediaBlobCache.get(a);
    const s = new r();
    if (o) {
      return void (n.downloadStage === v.DOWNLOAD_STAGE.INIT && n.consolidate({
        downloadStage: v.DOWNLOAD_STAGE.EXISTS
      }));
    }
    const l = n.entries.getDownloadEntry((0, g.isMediaCryptoExpectedForMediaType)(i));
    if (!l) {
      return void (n.downloadStage === v.DOWNLOAD_STAGE.INIT && n.consolidate({
        downloadStage: v.DOWNLOAD_STAGE.NEED_POKE
      }));
    }
    if (l instanceof h.UnencryptedMediaEntry) {
      return;
    }
    const u = l.getEncfilehash();
    if (!u) {
      l.markWhetherOnServer(false);
      return void (n.downloadStage === v.DOWNLOAD_STAGE.INIT && n.consolidate({
        downloadStage: v.DOWNLOAD_STAGE.NEED_POKE
      }));
    }
    try {
      yield p.downloadManager.checkExistence({
        directPath: l.directPath,
        encFilehash: u,
        signal: s.signal,
        type: i
      });
      if (n.downloadStage === v.DOWNLOAD_STAGE.INIT) {
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.EXISTS
        });
      }
    } catch (e) {
      if (n.downloadStage === v.DOWNLOAD_STAGE.INIT) {
        n.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.NEED_POKE
        });
      }
      __LOG__(2)`checkExistence: error`;
    }
  })).apply(this, arguments);
}
function Y(e) {
  const {
    scanLengths: t,
    scansSidecar: n,
    mimetype: r,
    mediaObject: i
  } = e;
  if (!function (e, t) {
    return !!(e && t && e.length >= 2 && e.length * 10 === t.byteLength);
  }(t, n)) {
    return null;
  }
  const a = new O.WebcProgressiveImageWamEvent({
    webcFirstRenderScans: 0
  });
  return {
    mimetype: r,
    scansSidecar: (0, c.default)(n, "scansSidecar"),
    scanLengths: (0, c.default)(t, "scanLengths"),
    onProgressiveUpdate: e => {
      if (i.downloadStage !== v.DOWNLOAD_STAGE.RESOLVED) {
        i.consolidate({
          downloadStage: v.DOWNLOAD_STAGE.PROGRESSIVE_READY,
          progressiveStage: e
        });
        if (!a.webcFirstRenderScans) {
          a.webcFirstRenderScans = e;
          a.markWebcFirstRenderT();
        }
        if (e >= w && !a.webcMidQualityT) {
          a.markWebcMidQualityT();
        }
        if (!(e !== L || a.webcFullQualityT)) {
          a.markWebcFullQualityT();
          a.commit();
        }
      }
    }
  };
}
function K() {
  return W.apply(this, arguments);
}
function W() {
  return (W = (0, a.default)(function* (e) {
    if (!e.mediaBlob) {
      return false;
    }
    if (yield e.mediaBlob.validate()) {
      e.consolidate({
        downloadStage: v.DOWNLOAD_STAGE.RESOLVED
      });
      return true;
    } else {
      e.clearBlob();
      e.consolidate({
        downloadStage: v.DOWNLOAD_STAGE.NEED_POKE
      });
      e.notifyMsgsAsync();
      return false;
    }
  })).apply(this, arguments);
}
function V(e) {
  const {
    downloadPromise: t
  } = e;
  if (t) {
    return k.get(t);
  } else {
    return null;
  }
}