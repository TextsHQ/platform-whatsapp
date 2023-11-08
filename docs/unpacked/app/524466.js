var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deregisterSticker = function (e) {
  const {
    mediaObject: t
  } = e;
  if (t) {
    d.disassociateMediaFromSticker(t, e);
  }
};
exports.deregisterStickerPackIcon = function (e) {
  const {
    mediaObject: t
  } = e;
  if (t) {
    d.disassociateMediaFromStickerPack(t, e);
  }
};
exports.downloadStickerOrStickerPackIcon = function () {
  return S.apply(this, arguments);
};
exports.prepSticker = function (e) {
  __LOG__(2)`Prepping sticker`;
  const t = e.mediaObject;
  const n = e.mediaData.toJSON();
  n.fullWidth = 125;
  n.fullHeight = 125;
  if (!t) {
    __LOG__(4, undefined, new Error(), true)`id: ${e.id}`;
    SEND_LOGS("media-fault: prepSticker sticker without mediaObject");
    return new c.MediaPrep(n.type, Promise.reject((0, h.default)("non initialized media")));
  }
  return new c.MediaPrep(n.type, Promise.resolve(n));
};
exports.registerSticker = function (e) {
  E(e, e.mediaObject || function (e) {
    if (!e.filehash) {
      __LOG__(4, undefined, new Error(), true)`Unexpected sticker with no filehash`;
      return void SEND_LOGS("sticker-filehash-error");
    }
    const t = d.getOrCreateMediaObject(e.filehash);
    d.associateMediaWithSticker(t, e);
    return t;
  }(e), _.MEDIA_TYPES.STICKER);
};
exports.registerStickerPackIcon = function (e) {
  E(e, e.mediaObject || function (e) {
    if (!e.filehash) {
      __LOG__(4, undefined, new Error(), true)`Unexpected sticker pack with no filehash`;
      return void SEND_LOGS("sticker-pack-filehash-error");
    }
    const t = d.getOrCreateMediaObject(e.filehash);
    d.associateMediaWithStickerPack(t, e);
    return t;
  }(e), _.MEDIA_TYPES.IMAGE);
};
var a = i(require("../vendor/348926.js"));
var o = require("./122583.js");
var s = require("./941555.js");
var l = require("./509998.js");
var u = require("./102645.js");
var c = require("./328793.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
}(require("./231385.js"));
var p = require("./172259.js");
var f = require("./288057.js");
var _ = require("./708761.js");
var g = require("./59095.js");
var m = require("./885313.js");
var h = i(require("./556869.js"));
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function E(e, t, n) {
  const r = function (e) {
    const t = {};
    p.MAPPED_STICKER_PROPS.forEach(n => {
      const r = e[n];
      const i = p.MSG_TO_MEDIA[n];
      t[i] = r;
    });
    return t;
  }(e);
  e.mediaData.set(r);
  if (!t) {
    return;
  }
  e.mediaObject = t;
  const {
    deprecatedMms3Url: i,
    encFilehash: a
  } = e;
  if ((a || i) && !t.entries.has({
    encFilehash: a,
    deprecatedMms3Url: i
  })) {
    if (t.entries.addEntry({
      deprecatedMms3Url: i,
      mediaKey: e.mediaKey,
      mediaKeyTimestamp: e.mediaKeyTimestamp,
      encFilehash: a,
      type: n,
      directPath: e.directPath,
      debugHint: "setMediaObjectValues"
    }) && t.downloadStage === p.DOWNLOAD_STAGE.ERROR_MISSING) {
      r.downloadStage = p.DOWNLOAD_STAGE.INIT;
    }
  }
  t.consolidate(r);
}
function S() {
  return (S = (0, a.default)(function* (e, t) {
    let i = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    if (e.isPlaceholder || e.isCreateButton) {
      e.mediaData.mediaStage = p.MEDIA_DATA_STAGE.PREPARING;
      return Promise.resolve();
    }
    const a = e.mediaObject;
    if (!a) {
      return Promise.reject((0, h.default)("media-fault: downloadStickerOrStickerPackIcon sticker/stickerPack without mediaObject"));
    }
    const c = t === "STICKER" ? m.WEBC_RMR_REASON_CODE.STICKER_PANEL_STICKER : m.WEBC_RMR_REASON_CODE.STICKER_PANEL_ICON;
    let d = false;
    yield a.getPendingProcess("fromDisk").then(() => {
      if (!e.filehash || !e.mediaKey || !e.encFilehash) {
        d = true;
        return s.downloadManager.rmr({
          mediaObject: a,
          signal: new r().signal,
          rmrReason: c
        });
      }
    }).then(() => (0, u.downloadMedia)({
      mimetype: e.mimetype,
      mediaObject: e.mediaObject,
      downloadEvenIfExpensive: true,
      mediaType: (0, _.msgToMediaType)({
        type: e.type,
        isGif: false,
        isNewsletter: false
      }),
      rmrReason: c,
      downloadOrigin: g.DOWNLOAD_ORIGIN_TYPE.STICKER_PICKER,
      shouldThrow: i
    })).catch((0, o.filteredCatch)(f.RMRNotSupportedOnNewsletterMessagesError, e => {
      if (e.mediaType !== _.MEDIA_TYPES.NEWSLETTER_STICKER) {
        __LOG__(4, undefined, new Error(), true)`Unexpected RMR error for media type ${e.mediaType}`;
        SEND_LOGS("failed-to-download-sticker-rmr");
        throw e;
      }
    }));
    const y = a.entries.getDownloadEntry(true);
    if (d && y instanceof l.EncryptedMediaEntry) {
      require("./951220.js").RecentStickerCollectionMd.updateStickerMediaData(e.filehash, y);
    }
  })).apply(this, arguments);
}