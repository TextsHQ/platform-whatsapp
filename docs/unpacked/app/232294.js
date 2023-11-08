var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canPlayOgg = function () {
  return !!v.canPlayOgg;
};
exports.decodeWebpToRGBANoOpaque = K;
exports.fetchMedia = function () {
  return re.apply(this, arguments);
};
exports.gatherAndSetMetadata = function () {
  return ie.apply(this, arguments);
};
exports.gatherAndSetMetadataNoOpaque = function () {
  return ae.apply(this, arguments);
};
exports.getHighestQualityThumbnailUrl = function (e) {
  if (!e) {
    return null;
  }
  if (e.fullPreviewData) {
    return e.fullPreviewData.url();
  }
  if (e.preview instanceof T.default) {
    return e.preview.url();
  }
  return null;
};
exports.getImageMetadata = function () {
  return q.apply(this, arguments);
};
exports.getImageWidthHeight = function (e) {
  return ne(function () {
    var t = (0, a.default)(function* (t) {
      t(e);
      const n = new Image();
      yield new Promise((t, r) => {
        n.onload = t;
        n.onabort = () => {
          r((0, U.default)("getImageWidthHeight onabort"));
        };
        n.onerror = () => {
          r((0, U.default)("getImageWidthHeight onerror"));
        };
        n.src = e.url();
      });
      return {
        width: n.naturalWidth,
        height: n.naturalHeight
      };
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.getRawDocumentMimetype = Z;
exports.getResizedThumbData = function (e, t) {
  return new Promise(n => {
    const r = new Image();
    r.setAttribute("crossorigin", "anonymous");
    r.onload = () => {
      const e = t.map(e => {
        let {
          width: t,
          height: n,
          minWidth: i,
          minHeight: a,
          imageFormat: o,
          imageFormatOptions: s,
          keepAspectRatio: l
        } = e;
        if (i != null && r.width < i || a != null && r.height < a) {
          return null;
        }
        const u = document.createElement("canvas");
        const c = u.getContext("2d");
        let d;
        let p;
        let f = 0;
        let _ = 0;
        if (r.height > r.width) {
          d = t;
          p = r.height / r.width * t;
          _ = -(p - n) / 2;
        } else {
          p = n;
          d = r.width / r.height * n;
          f = -(d - t) / 2;
        }
        if (l) {
          u.width = d;
          u.height = p;
        } else {
          u.width = t;
          u.height = n;
        }
        c.drawImage(r, f, _, d, p);
        return {
          dataUrl: u.toDataURL(o, s).replace("data:image/jpeg;base64,", ""),
          width: u.width,
          height: u.height
        };
      });
      n(e);
    };
    r.src = e;
  });
};
exports.opaqueDataToArrayBuffer = function (e) {
  return ne(t => {
    t(e);
    const n = e.getBlob();
    if (n) {
      return Y(n);
    }
    const r = (0, l.default)(e.getBase64(), "b64 should be defined");
    return (0, o.decodeB64)(r);
  });
};
exports.parseWebpNoOpaque = V;
exports.processRawAudioVideo = function () {
  return X.apply(this, arguments);
};
exports.processRawDocument = function () {
  return te.apply(this, arguments);
};
exports.processRawImage = function () {
  return J.apply(this, arguments);
};
exports.processRawSticker = function () {
  return Q.apply(this, arguments);
};
exports.shouldUseLruMediaStore = function (e) {
  const t = e === P.MEDIA_TYPES.STICKER || e === P.MEDIA_TYPES.IMAGE || e === P.MEDIA_TYPES.NEWSLETTER_IMAGE || e === P.MEDIA_TYPES.NEWSLETTER_STICKER;
  const n = e === P.MEDIA_TYPES.AUDIO || e === P.MEDIA_TYPES.DOCUMENT || e === P.MEDIA_TYPES.GIF || e === P.MEDIA_TYPES.NEWSLETTER_GIF || e === P.MEDIA_TYPES.PPIC || e === P.MEDIA_TYPES.PRODUCT || e === P.MEDIA_TYPES.PTT || e === P.MEDIA_TYPES.NEWSLETTER_PTT || e === P.MEDIA_TYPES.VIDEO || e === P.MEDIA_TYPES.PTV || e === P.MEDIA_TYPES.NEWSLETTER_VIDEO || e === P.MEDIA_TYPES.TEMPLATE || e === P.MEDIA_TYPES.THUMBNAIL_DOCUMENT || e === P.MEDIA_TYPES.THUMBNAIL_IMAGE || e === P.MEDIA_TYPES.THUMBNAIL_LINK || e === P.MEDIA_TYPES.THUMBNAIL_VIDEO;
  return t || n;
};
exports.shouldUseMediaCache = function (e) {
  return e === P.MEDIA_TYPES.STICKER || e === P.MEDIA_TYPES.IMAGE || e === P.MEDIA_TYPES.PRODUCT || e === P.MEDIA_TYPES.PTT || e === P.MEDIA_TYPES.AUDIO || e === P.MEDIA_TYPES.NEWSLETTER_IMAGE || e === P.MEDIA_TYPES.NEWSLETTER_PTT || e === P.MEDIA_TYPES.NEWSLETTER_STICKER;
};
exports.videoWidthHeightDuration = function (e) {
  return ne(t => {
    t(e);
    return v.videoWidthHeightDuration(e.forceToBlob());
  });
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./417405.js");
var s = require("./122583.js");
var l = r(require("./670983.js"));
var u = require("./71230.js");
var c = require("./423660.js");
var d = require("./287461.js");
var p = require("./588750.js");
var f = r(require("./846870.js"));
var _ = r(require("./945583.js"));
var g = F(require("./48474.js"));
var m = require("./868607.js");
var h = require("./698210.js");
var y = F(require("./428363.js"));
var E = require("./47814.js");
var S = require("./920733.js");
var v = F(require("./197636.js"));
var T = r(require("./756680.js"));
var M = require("./172259.js");
var A = require("./937484.js");
var b = F(require("./288057.js"));
var C = require("./97858.js");
var P = require("./708761.js");
var O = r(require("./809572.js"));
var I = r(require("./79291.js"));
var R = require("./517660.js");
var N = require("./333331.js");
var D = require("./717041.js");
var w = require("./19958.js");
var L = require("./630098.js");
var k = require("./724743.js");
var G = r(require("./794938.js"));
var U = r(require("./556869.js"));
var x = r(require("../vendor/397769.js"));
function B(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (B = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function F(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = B(t);
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
function j(e) {
  return new Promise((t, n) => {
    const r = new Image();
    const i = window.URL.createObjectURL(e);
    r.onload = () => {
      const e = {
        width: r.naturalWidth,
        height: r.naturalHeight
      };
      window.URL.revokeObjectURL(i);
      t(e);
    };
    r.onabort = () => {
      window.URL.revokeObjectURL(i);
      n((0, U.default)("getImageWidthHeight onabort"));
    };
    r.onerror = () => {
      window.URL.revokeObjectURL(i);
      n((0, U.default)("getImageWidthHeight onerror"));
    };
    r.src = i;
  });
}
function Y(e) {
  return (0, h.blobToArrayBuffer)(e).catch(e => {
    __LOG__(3)`MediaUtils error: ${e}`;
    throw e;
  });
}
function K() {
  return W.apply(this, arguments);
}
function W() {
  return (W = (0, a.default)(function* (e) {
    const t = yield Y(e);
    return (0, _.default)(t);
  })).apply(this, arguments);
}
function V() {
  return H.apply(this, arguments);
}
function H() {
  return (H = (0, a.default)(function* (e) {
    const t = yield Y(e);
    return (0, k.parseWebp)(t);
  })).apply(this, arguments);
}
function $(e) {
  return v.videoWidthHeightDuration(e);
}
function z(e, t) {
  return ne(function () {
    var n = (0, a.default)(function* (n) {
      n(e);
      const r = yield v.transcode(e.forceToBlob(), t).then(e => T.default.createFromData(e, e.type));
      n(r);
      r.autorelease();
      return r;
    });
    return function () {
      return n.apply(this, arguments);
    };
  }());
}
function q() {
  return (q = (0, a.default)(function* (e, t) {
    const {
      transparency: n,
      minDimension: r,
      maxDimension: i
    } = t;
    const {
      width: a,
      height: o,
      images: s
    } = yield y.rotateAndResize(e, i, y.BLOB, {
      transparency: n,
      minDimension: r
    });
    return {
      width: a,
      height: o,
      size: s.blob.size
    };
  })).apply(this, arguments);
}
function J() {
  return (J = (0, a.default)(function* (e, t) {
    const {
      transparency: n,
      minDimension: r,
      maxDimension: i
    } = t;
    const a = e.forceToBlob();
    const {
      width: o,
      height: s,
      images: l
    } = yield y.rotateAndResize(a, i, y.BLOB | y.CANVAS, {
      transparency: n,
      minDimension: r
    });
    const {
      images: u
    } = yield y.rotateAndResize(l.canvas, f.default.IMG_THUMB_MAX_EDGE, y.DATA_URL | y.CANVAS);
    const c = (0, p.getResizedDataUrl)(u.canvas, "image/jpeg", 20000);
    const d = c ? I.default.parseDataURL(c).data : null;
    if (!d) {
      __LOG__(2)`processRawImage: Failed to reach max thumbnail size, preview will be null`;
    }
    return {
      type: M.OUTWARD_TYPES.IMAGE,
      mediaBlob: l.blob,
      mimetype: l.blob.type,
      fullWidth: o,
      fullHeight: s,
      preview: d
    };
  })).apply(this, arguments);
}
function Q() {
  return (Q = (0, a.default)(function* (e) {
    const t = e.forceToBlob();
    const {
      width: n,
      height: r,
      images: i
    } = yield y.rotateAndResize(t, (0, d.getABPropConfigValue)("web_image_max_edge"), y.BLOB, {
      transparency: true
    });
    const a = yield y.toWebpSticker(i.blob);
    const o = yield T.default.createFromData(a, a.type);
    return {
      type: M.OUTWARD_TYPES.STICKER,
      mediaBlob: o,
      mimetype: a.type,
      fullWidth: n,
      fullHeight: r
    };
  })).apply(this, arguments);
}
function X() {
  return (X = (0, a.default)(function* (e, t, n, r, a) {
    const o = e.forceToBlob();
    const s = new N.VideoTranscoderWamEvent({
      sourceHeight: n == null ? undefined : n.fullHeight,
      sourceWidth: n == null ? undefined : n.fullWidth,
      sourceDuration: n == null ? undefined : n.duration,
      sourceFileSize: e.size(),
      sourceFormat: r === true ? w.VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.GIF : w.VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.VIDEO
    });
    s.startTranscoderT();
    const l = yield (0, E.checkAndRepair)(o, !!r);
    s.markTranscoderT();
    if (!l) {
      s.set({
        transcoderResult: D.VIDEO_TRANSCODER_RESULT_TYPE.FAILED
      });
      s.commit();
      __LOG__(3)`processRawAudioVideo bad video file ${o.type}`;
      throw new b.InvalidMediaFileType();
    }
    const u = l.type;
    const c = l.file;
    s.set({
      targetFileSize: c.size
    });
    const d = r === true || l.isGif === true;
    switch ((0, h.typeFromMimetype)(u)) {
      case h.FILETYPE.VIDEO:
        {
          if (t) {
            s.set({
              transcoderResult: D.VIDEO_TRANSCODER_RESULT_TYPE.FAILED
            });
            s.commit();
            __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
            SEND_LOGS("media-fault: ptt became video");
            throw new b.InvalidMediaFileType();
          }
          s.set({
            targetFormat: L.VIDEO_TRANSCODER_TARGET_FORMAT_TYPE.VIDEO,
            transcoderResult: D.VIDEO_TRANSCODER_RESULT_TYPE.SUCCEEDED
          });
          const e = {
            type: M.OUTWARD_TYPES.VIDEO,
            mediaBlob: c,
            mimetype: u,
            isGif: d,
            gifAttribution: d ? a || 0 : undefined
          };
          if (n && n.duration != null && n.fullHeight != null && n.fullHeight !== 0 && n.fullWidth != null && n.fullWidth !== 0 && n.preview) {
            const {
              duration: t
            } = n;
            s.set({
              sourceHeight: n.fullHeight,
              sourceWidth: n.fullWidth,
              sourceDuration: t
            });
            s.commit();
            return (0, i.default)((0, i.default)({}, e), {}, {
              fullWidth: n.fullWidth,
              fullHeight: n.fullHeight,
              preview: n.preview,
              duration: t.toString()
            });
          }
          const {
            duration: r,
            thumbs: [o, l]
          } = yield y.generateVideoThumbsAndDuration({
            file: c,
            maxDimensions: [f.default.IMG_THUMB_MAX_EDGE, f.default.VIDEO_THUMB_MAX_EDGE],
            debugHint: "processRawAudioVideo"
          });
          const p = yield T.default.createFromBase64Jpeg(I.default.parseDataURL(l.url).data);
          s.set({
            sourceHeight: o.fullHeight,
            sourceWidth: o.fullWidth,
            sourceDuration: r
          });
          s.commit();
          return (0, i.default)((0, i.default)({}, e), {}, {
            fullWidth: o.fullWidth,
            fullHeight: o.fullHeight,
            preview: I.default.parseDataURL(o.url).data,
            fullPreviewData: p,
            duration: r.toString()
          });
        }
      case h.FILETYPE.AUDIO:
        {
          var p;
          const e = (p = n == null ? undefined : n.duration) !== null && p !== undefined ? p : yield (0, h.getAudioDuration)(c);
          return {
            type: t ? M.OUTWARD_TYPES.PTT : M.OUTWARD_TYPES.AUDIO,
            mediaBlob: c,
            mimetype: u,
            duration: e.toString(),
            waveform: n == null ? undefined : n.waveform
          };
        }
      default:
        s.set({
          transcoderResult: D.VIDEO_TRANSCODER_RESULT_TYPE.FAILED
        });
        s.commit();
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("media-fault: audio/video became other");
        throw (0, U.default)(`audio/video became ${u}`);
    }
  })).apply(this, arguments);
}
function Z() {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = (0, a.default)(function* (e, t) {
    const n = e.type;
    if (n) {
      if (A.DOC_MIMES === "*" || A.DOC_MIMES.includes(n)) {
        return n;
      }
      throw new b.InvalidMediaFileType(`disallowed mimetype ${n}`);
    }
    {
      const n = Math.min(A.MIMETYPE_DETERMINING_LENGTH, e.size);
      const i = yield Y(e.slice(0, n));
      const a = new Uint8Array(i);
      var r;
      if ((0, A.isMsCompoundFileBinaryFormat)(a.subarray(0, 8))) {
        if (t != null && (r = (0, h.getMimeTypeForFilepath)(t)) !== null && r !== undefined) {
          return r;
        } else {
          return A.MSCFB_MIME;
        }
      }
      const o = (0, x.default)(a);
      if (o == null ? undefined : o.mime) {
        const e = (0, A.isAllowedDocumentMimetype)(o.mime, t, true);
        if (e) {
          return e;
        }
      } else if (t) {
        const e = (0, h.getMimeTypeForFilepath)(t);
        if (e) {
          return e;
        }
      }
      throw new b.InvalidMediaFileType(`type: ${String(e.type)} name: ${String(t)}`);
    }
  })).apply(this, arguments);
}
function te() {
  return (te = (0, a.default)(function* (e, t, n, r) {
    var i;
    var a;
    const o = e.forceToBlob();
    const s = (0, S.cleanFilename)(o.name || t || null);
    const l = yield Z(o, s);
    const u = n ? (0, h.blobToText)(o) : null;
    const [c, d] = yield Promise.all([g.enrich(o, l), u]);
    const p = (i = c == null || (a = c.microThumbnail) === null || a === undefined ? undefined : a.dataUrl) !== null && i !== undefined ? i : c == null ? undefined : c.thumbUrl;
    const f = p ? I.default.parseDataURL(p).data : null;
    return {
      type: M.OUTWARD_TYPES.DOCUMENT,
      mediaBlob: yield T.default.createFromData(o, l),
      mimetype: l,
      filename: s || undefined,
      documentPreview: c,
      preview: f,
      fullPreviewData: c == null ? undefined : c.fullPreviewData,
      fullPreviewSize: c ? {
        width: c.width,
        height: c.height
      } : null,
      pageCount: r != null ? r : c == null ? undefined : c.pdfPages,
      isVcardOverMmsDocument: n,
      parsedVcards: d ? (0, R.parseMultiVcard)(d) : null
    };
  })).apply(this, arguments);
}
function ne(e) {
  const t = [];
  return (0, u.promiseCallSync)(e, null, function (e) {
    e.retain();
    t.push(e);
  }).finally(() => {
    for (let e = 0; e < t.length; e++) {
      t[e].autorelease();
    }
  });
}
function re() {
  return (re = (0, a.default)(function* (e) {
    const t = yield (0, O.default)(e, "GET", null, G.default.RESP_TYPE.ARRAY_BUFFER);
    if (t) {
      return Promise.resolve({
        result: t.response,
        status: t.status
      });
    } else {
      return Promise.resolve(null);
    }
  })).apply(this, arguments);
}
function ie() {
  return (ie = (0, a.default)(function* (e, t) {
    let n;
    let r;
    t.retain();
    try {
      switch (e.type) {
        case M.TYPE.VIDEO:
        case M.TYPE.PTV:
          {
            const e = t.forceToBlob();
            const {
              thumbs: [r],
              duration: i
            } = yield y.generateVideoThumbsAndDuration({
              file: e,
              maxDimensions: [f.default.VIDEO_THUMB_MAX_EDGE],
              debugHint: "gatherAndSetMetadata"
            });
            let a;
            if ((0, C.isHighQualityVideoThumbnailsEnabled)()) {
              a = yield T.default.createFromBase64Jpeg(I.default.parseDataURL(r.url).data);
            }
            n = {
              mediaBlob: t,
              renderableUrl: t.url(),
              fullWidth: r.fullWidth,
              fullHeight: r.fullHeight,
              duration: i !== undefined ? `${Math.ceil(i)}` : undefined,
              durationFloat: i,
              fullPreviewData: a
            };
            break;
          }
        case M.TYPE.AUDIO:
          {
            const e = yield z(t);
            e.retain();
            n = {
              mediaBlob: e,
              renderableUrl: e.url()
            };
            r = () => e.autorelease();
            break;
          }
        default:
          if (!(e.type !== M.TYPE.IMAGE && e.type !== M.TYPE.STICKER)) {
            __LOG__(4, undefined, new Error(), true)`object type: ${e.type || ""}`;
            SEND_LOGS("Entering gatherAndSetMetadata (with OpaqueData) unexpectedly");
          }
          n = {
            mediaBlob: t,
            renderableUrl: t.url()
          };
      }
      e.consolidate(n);
    } catch (n) {
      if (!(n instanceof b.MediaUnsupportedError)) {
        throw n;
      }
      e.consolidate({
        mediaBlob: t,
        renderableUrl: t.url()
      });
    } finally {
      t.autorelease();
      if (r != null) {
        r();
      }
    }
  })).apply(this, arguments);
}
function ae() {
  return (ae = (0, a.default)(function* (e, t) {
    const n = yield Promise.resolve().then(() => {
      switch (e.type) {
        case M.TYPE.VIDEO:
        case M.TYPE.PTV:
          return $(t).then(e => ({
            fullWidth: e.width,
            fullHeight: e.height,
            duration: e.duration !== undefined ? `${Math.ceil(e.duration)}` : undefined,
            durationFloat: e.duration
          }));
        case M.TYPE.IMAGE:
          if (e.contentInfo.fullHeight != null && e.contentInfo.fullWidth != null && e.size === t.size) {
            return null;
          } else {
            return j(t).then(e => ({
              fullWidth: e.width,
              fullHeight: e.height,
              size: t.size
            }));
          }
        case M.TYPE.STICKER:
          return (0, m.detectWebpSupport)().then(e => e ? (0, c.promiseProps)({
            widthHeight: j(t),
            webpData: V(t)
          }).then(e => ({
            fullWidth: e.widthHeight.width,
            fullHeight: e.widthHeight.height,
            animationDuration: e.webpData.animationDuration,
            firstFrameLength: e.webpData.firstFrameLength,
            singleLoopDuration: e.webpData.singleLoopDuration,
            emojis: e.webpData.emojis,
            isAnimated: e.webpData.animationDuration > 0,
            size: t.size,
            isFirstParty: e.webpData.isFirstParty,
            isFromStickerMaker: e.webpData.isFromStickerMaker,
            stickerPackId: e.webpData.stickerPackId,
            stickerPackName: e.webpData.stickerPackName,
            stickerPackPublisher: e.webpData.stickerPackPublisher,
            isAvatar: e.webpData.isAvatar,
            isAiSticker: e.webpData.isAiSticker
          })) : V(t).then(function () {
            var e = (0, a.default)(function* (e) {
              let {
                animationDuration: n,
                firstFrameLength: r,
                singleLoopDuration: i,
                emojis: a,
                isFirstParty: o,
                isFromStickerMaker: s,
                stickerPackId: l,
                stickerPackName: u,
                stickerPackPublisher: c,
                isAvatar: d,
                isAiSticker: p
              } = e;
              if (n > 0) {
                return {
                  animationDuration: n,
                  firstFrameLength: r,
                  singleLoopDuration: i,
                  emojis: a,
                  isAnimated: true,
                  size: t.size,
                  isFirstParty: o,
                  isFromStickerMaker: s,
                  stickerPackId: l,
                  stickerPackName: u,
                  stickerPackPublisher: c,
                  isAvatar: d,
                  isAiSticker: p
                };
              }
              const f = yield K(t);
              return {
                animationDuration: n,
                rgbaBuffer: f.rgbaBuffer,
                rgbaWidth: f.width,
                rgbaHeight: f.height,
                emojis: a,
                isAnimated: false,
                size: t.size,
                isFirstParty: o,
                isFromStickerMaker: s,
                stickerPackId: l,
                stickerPackName: u,
                stickerPackPublisher: c,
                isAvatar: d,
                isAiSticker: p
              };
            });
            return function () {
              return e.apply(this, arguments);
            };
          }()));
        case M.TYPE.AUDIO:
        default:
          return {};
      }
    }).catch((0, s.filteredCatch)(b.MediaUnsupportedError, t => {
      e.consolidate({});
      throw t;
    }));
    if (n != null) {
      e.consolidate(n);
    }
  })).apply(this, arguments);
}