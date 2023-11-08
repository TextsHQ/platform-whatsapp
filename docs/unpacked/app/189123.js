var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaObject = undefined;
exports.consolidate = E;
exports.getInteractiveMsgMediaType = S;
exports.webMediaTypeToWamMediaType = function (e) {
  switch (e) {
    case "VIDEO":
    case "PTV":
      return 3;
    case "IMAGE":
      return 2;
    case "AUDIO":
      return 4;
    case "STICKER":
      return 16;
    case "DOCUMENT":
      return 8;
    case "PRODUCT":
      return 18;
    case "BIZ_COVER_PHOTO":
    default:
      throw (0, y.default)(`web media type is invalid: ${e}`);
  }
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./685639.js");
var l = require("./402994.js");
var u = r(require("./904219.js"));
var c = require("./943914.js");
var d = require("./232294.js");
var p = require("./509998.js");
var f = r(require("./756680.js"));
var _ = require("./172259.js");
var g = require("./708761.js");
var m = require("./373070.js");
var h = r(require("./563226.js"));
var y = r(require("./556869.js"));
function E(e, t) {
  const n = e.contentInfo;
  let r = false;
  const i = function (e) {
    switch (e) {
      case _.OUTWARD_TYPES.IMAGE:
      case _.OUTWARD_TYPES.PRODUCT:
        return _.TYPE.IMAGE;
      case _.OUTWARD_TYPES.VIDEO:
        return _.TYPE.VIDEO;
      case _.OUTWARD_TYPES.PTV:
        return _.TYPE.PTV;
      case _.OUTWARD_TYPES.STICKER:
        return _.TYPE.STICKER;
      case _.OUTWARD_TYPES.AUDIO:
      case _.OUTWARD_TYPES.PTT:
        return _.TYPE.AUDIO;
      case _.OUTWARD_TYPES.DOCUMENT:
      default:
        return;
    }
  }(t.type, t.subtype);
  if (i && !e.type) {
    e.type = i;
    r = true;
  }
  const {
    downloadStage: a,
    uploadStage: o
  } = t;
  if (a && a !== e.downloadStage) {
    e.downloadStage = a;
    r = true;
  }
  if (o && o !== e.uploadStage) {
    e.uploadStage = o;
    r = true;
  }
  if (t.resolvedPreview && !n.preview) {
    t.resolvedPreview.retain();
    n.preview = t.resolvedPreview;
    r = true;
  }
  if (t.progressiveStage !== undefined && t.progressiveStage !== e.progressiveStage) {
    e.progressiveStage = t.progressiveStage;
    r = true;
  }
  const s = t.mediaBlob;
  if (s && !s.isBlobEqual(e.mediaBlob)) {
    if (e.mediaBlob) {
      e.clearBlob();
    }
    s.retain();
    e.mediaBlob = s;
    e.size = s.size();
    r = true;
  }
  if (t.size != null && (e.size == null || t.size < e.size)) {
    e.size = t.size;
    r = true;
  }
  const {
    loadedSize: l
  } = t;
  if (l != null && l !== e.loadedSize) {
    e.loadedSize = l;
    r = true;
  }
  if (t.filehash && !e.filehash) {
    e.filehash = t.filehash;
    r = true;
  }
  if (t.parsedVcards && t.parsedVcards !== e.parsedVcards) {
    e.parsedVcards = t.parsedVcards;
    r = true;
  }
  const u = e.contentFields();
  for (let i = 0; i < u.length; i++) {
    const a = u[i];
    switch (a) {
      case "preview":
        if (t.preview && !n._preview) {
          e.runProcessIfNotRunBefore("preview", A, t.preview);
          n._preview = t.preview;
          r = true;
        }
        break;
      case "fullWidth":
      case "fullHeight":
      case "aspectRatio":
        {
          const e = t[a];
          if (e != null && e !== 0 && n[a] !== e) {
            n[a] = e;
            r = true;
          }
          break;
        }
      case "animationDuration":
      case "singleLoopDuration":
        {
          const e = t[a];
          if (e != null && e !== n[a]) {
            n[a] = e;
            r = true;
          }
          break;
        }
      default:
        {
          const e = t[a];
          if (e !== undefined && n[a] === undefined) {
            n[a] = e;
            r = true;
          }
        }
    }
  }
  if (!(n.aspectRatio != null && n.aspectRatio !== 0)) {
    if (n.fullWidth != null && n.fullWidth !== 0 && n.fullHeight != null && n.fullHeight !== 0) {
      n.aspectRatio = n.fullWidth / n.fullHeight;
      r = true;
    } else if (n.preview) {
      e.runProcessIfNotRunBefore("aspectRatio", C, n.preview);
    }
  }
  return r;
}
function S(e) {
  var t;
  if (((t = e.interactiveHeader) === null || t === undefined ? undefined : t.mediaType) != null) {
    switch (e.interactiveHeader.mediaType) {
      case c.InteractiveMessageHeaderMediaType.DOCUMENT:
        return _.OUTWARD_TYPES.DOCUMENT;
      case c.InteractiveMessageHeaderMediaType.VIDEO:
        return _.OUTWARD_TYPES.VIDEO;
      case c.InteractiveMessageHeaderMediaType.IMAGE:
        return _.OUTWARD_TYPES.IMAGE;
    }
  }
}
function v(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    e[i] = t[i];
  }
}
function T(e, t) {
  if (t.filehash) {
    if (e.id.fromMe && e.ack < l.ACK.SENT) {
      if (!e.local) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("media-fault: unsent media system message not local");
      }
      return function (e) {
        switch (e.uploadStage) {
          case _.UPLOAD_STAGE.INIT:
          case _.UPLOAD_STAGE.PREPARING:
            return _.MEDIA_DATA_STAGE.PREPARING;
          case _.UPLOAD_STAGE.UPLOADING:
            return _.MEDIA_DATA_STAGE.UPLOADING;
          case _.UPLOAD_STAGE.NEED_UPLOAD:
            return _.MEDIA_DATA_STAGE.NEED_UPLOAD;
          case _.UPLOAD_STAGE.ERROR_MISSING:
            return _.MEDIA_DATA_STAGE.ERROR_MISSING;
          case _.UPLOAD_STAGE.ERROR_TOO_LARGE:
            return _.MEDIA_DATA_STAGE.ERROR_TOO_LARGE;
          case _.UPLOAD_STAGE.UPLOADED:
            return _.MEDIA_DATA_STAGE.SENDING;
          case _.UPLOAD_STAGE.ERROR_FILE_NOT_READABLE:
            return _.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE;
          case _.UPLOAD_STAGE.FINALIZING:
            return _.MEDIA_DATA_STAGE.FINALIZING;
        }
      }(t);
    } else {
      return M(t);
    }
  } else {
    return _.MEDIA_DATA_STAGE.PREPARING;
  }
}
function M(e) {
  switch (e.downloadStage) {
    case _.DOWNLOAD_STAGE.INIT:
      return _.MEDIA_DATA_STAGE.INIT;
    case _.DOWNLOAD_STAGE.EXISTS:
      return _.MEDIA_DATA_STAGE.EXISTS;
    case _.DOWNLOAD_STAGE.PREPARING:
      return _.MEDIA_DATA_STAGE.PREPARING;
    case _.DOWNLOAD_STAGE.REUPLOADING:
      return _.MEDIA_DATA_STAGE.REUPLOADING;
    case _.DOWNLOAD_STAGE.FETCHING:
      return _.MEDIA_DATA_STAGE.FETCHING;
    case _.DOWNLOAD_STAGE.PROCESSING:
      return _.MEDIA_DATA_STAGE.DECRYPTING;
    case _.DOWNLOAD_STAGE.NEED_POKE:
      return _.MEDIA_DATA_STAGE.NEED_POKE;
    case _.DOWNLOAD_STAGE.ERROR_MISSING:
      return _.MEDIA_DATA_STAGE.ERROR_MISSING;
    case _.DOWNLOAD_STAGE.ERROR_UNSUPPORTED:
      return _.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED;
    case _.DOWNLOAD_STAGE.RESOLVED:
      return _.MEDIA_DATA_STAGE.RESOLVED;
    case _.DOWNLOAD_STAGE.PROGRESSIVE_READY:
      return _.MEDIA_DATA_STAGE.PROGRESSIVE_READY;
  }
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, a.default)(function* (e) {
    const t = yield f.default.createFromBase64Jpeg(e);
    t.autorelease();
    return {
      resolvedPreview: t
    };
  })).apply(this, arguments);
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, a.default)(function* (e) {
    const {
      width: t,
      height: n
    } = yield (0, d.getImageWidthHeight)(e);
    return {
      aspectRatio: t / n
    };
  })).apply(this, arguments);
}
exports.MediaObject = class {
  constructor() {
    this._msgs = [];
    this._notifyTimer = new s.ShiftTimer(() => {
      !function (e) {
        const t = {};
        v(t, e, _.FIELDS.RAW);
        v(t, e.contentInfo, e.contentFields());
        if (e.mediaBlob) {
          t.renderableUrl = e.mediaBlob.url();
        }
        const n = e._msgs;
        const r = n.length;
        for (let i = 0; i < r; i++) {
          const [r, a] = n[i];
          if (r != null && !a) {
            if (r.type !== m.MSG_TYPE.CIPHERTEXT) {
              t.mediaStage = T(r, e);
              for (let e = 0; e < _.MSG_SPECIFIC_FIELDS.length; e++) {
                const n = _.MSG_SPECIFIC_FIELDS[e];
                t[n] = r.get(_.MEDIA_TO_MSG[n]);
              }
              if (t.type === m.MSG_TYPE.INTERACTIVE) {
                t.type = S(r);
              }
            } else {
              delete t.mediaStage;
              for (let e = 0; e < _.MSG_SPECIFIC_FIELDS.length; e++) {
                delete t[_.MSG_SPECIFIC_FIELDS[e]];
              }
            }
            r.mediaData.set(t);
          }
        }
        for (let e = n.length - 1; e >= 0; e--) {
          if (n[e][1]) {
            n.splice(e, 1);
          }
        }
        const i = e._callOnConsolidate;
        if (!e._pendingChanges && i) {
          e._callOnConsolidate = null;
          i.forEach(e => {
            e();
          });
        }
        if (e._saveMedia) {
          e._saveMedia(e);
        }
      }(this);
      (function (e) {
        const t = {};
        v(t, e, _.FIELDS.RAW);
        v(t, e.contentInfo, e.contentFields());
        if (e.mediaBlob) {
          t.renderableUrl = e.mediaBlob.url();
        }
        const n = M(e);
        e._stickers = e._stickers.filter(e => {
          let [t, n] = e;
          return !n;
        });
        e._stickers.forEach(e => {
          let [r, a] = e;
          r.mediaData.set((0, i.default)((0, i.default)({}, t), {}, {
            mediaStage: n
          }));
        });
        e._stickerPacks = e._stickerPacks.filter(e => {
          let [t, n] = e;
          return !n;
        });
        e._stickerPacks.forEach(e => {
          let [r, a] = e;
          r.mediaData.set((0, i.default)((0, i.default)({}, t), {}, {
            mediaStage: n
          }));
        });
        if (!e._pendingChanges && e._callOnConsolidate) {
          e._callOnConsolidate.forEach(e => {
            e();
          });
          e._callOnConsolidate = null;
        }
        if (e._saveMedia) {
          e._saveMedia(e);
        }
      })(this);
    });
    this._callOnConsolidate = null;
    this._keyedProcesses = null;
    this._pendingChangesCount = 0;
    this._saveMedia = null;
    this._stickers = [];
    this._stickerPacks = [];
    this.entries = new p.MediaEntryList();
    this.downloadStage = _.DOWNLOAD_STAGE.INIT;
    this.uploadStage = _.UPLOAD_STAGE.INIT;
    this.userUploadAttemptCount = 0;
    this.userDownloadAttemptCount = 0;
    this.downloadPromise = null;
    this.uploadPromise = null;
    this.mediaBlob = null;
    this.size = undefined;
    this.loadedSize = undefined;
    this.filehash = undefined;
    this.contentInfo = {};
    this.progressiveStage = undefined;
    this.parsedVcards = null;
  }
  consolidate(e) {
    return !!E(this, e) && (this.notifyMsgsAsync(), true);
  }
  clearBlob(e) {
    const t = this.mediaBlob;
    if (t) {
      this.mediaBlob = null;
      t.autorelease();
    }
    if ((e == null ? undefined : e.reset) === true) {
      this._resetDownloadLoadStage();
    }
  }
  _resetDownloadLoadStage() {
    this.consolidate({
      downloadStage: _.DOWNLOAD_STAGE.INIT
    });
  }
  contentFields() {
    const e = this.type || _.TYPE.DOCUMENT;
    return _.FIELDS[e];
  }
  resolveWhenConsolidated() {
    if (this._notifyTimer.ts || this._pendingChanges) {
      return new Promise(e => {
        if (this._callOnConsolidate) {
          this._callOnConsolidate.push(e);
        } else {
          this._callOnConsolidate = [e];
        }
      });
    } else {
      return Promise.resolve();
    }
  }
  notifyMsgsAsync() {
    this._notifyTimer.debounce(0);
  }
  addMsg(e) {
    const t = this._msgs;
    for (let n = 0; n < t.length; n++) {
      const [r, i] = t[n];
      if (!(r !== e || i)) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("redundant-media-msg");
      }
    }
    t.push([e, false]);
    this.notifyMsgsAsync();
  }
  removeMsg(e) {
    const t = this._msgs;
    let n = false;
    for (let r = 0; !n && r < t.length; r++) {
      const [i, a] = t[r];
      if (!(i !== e || a)) {
        t[r][1] = true;
        n = true;
      }
    }
  }
  hasAssociatedMsgsOrStickers() {
    const e = this._msgs;
    for (let t = 0; t < e.length; t++) {
      if (!e[t][1]) {
        return true;
      }
    }
    return this.hasAssociatedStickers() || this.hasAssociatedStickerPacks();
  }
  associatedMsgs() {
    const e = this._msgs;
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const [r, i] = e[n];
      if (!i) {
        t.push(r);
      }
    }
    return t;
  }
  rmr(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (t.associatedStickers().length > 0) {
        if (t.associatedMsgs().filter(e => e != null).length === 0) {
          __LOG__(2)`The sticker associated message has been deleted.`;
          return Promise.resolve(200);
        }
      }
      const [n] = t._msgs.find(e => {
        let [t, n] = e;
        return !n && !t.isUnsentPhoneMsg();
      }) || [null];
      if (!n) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("media-fault: rmr called on MediaObject with no msg");
        return Promise.reject((0, y.default)("rmr called on MediaObject with no msg"));
      }
      e.onMsgSelect(n);
      const r = yield (0, h.default)(n);
      if (r.status === 200) {
        const e = n.mediaData.type;
        if (e === "unknown") {
          return Promise.reject((0, y.default)("rmr called on MediaData with unknown type"));
        }
        const i = r.isMD ? t.entries.updateEntry({
          deprecatedMms3Url: n.deprecatedMms3Url,
          encFilehash: n.encFilehash,
          directPath: r.directPath
        }) : t.entries.addEntry({
          deprecatedMms3Url: r.url,
          mediaKey: r.mediaKey || (0, o.default)(n.mediaKey, "chosen.mediaKey"),
          mediaKeyTimestamp: r.mediaKeyTimestamp,
          encFilehash: r.encFilehash,
          type: e,
          directPath: r.directPath,
          debugHint: "rmr"
        });
        if (!i) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("media-fault: rmr entry can not be found");
        }
        if (!(i == null)) {
          i.markWhetherOnServer(true);
        }
      }
      return r.status;
    })();
  }
  msgProps(e) {
    const t = {};
    v(t, this, _.FIELDS.RAW);
    v(t, this.contentInfo, this.contentFields());
    v(t, e, _.MSG_SPECIFIC_FIELDS);
    t.preview = this.contentInfo._preview;
    const n = {};
    for (const e in t) {
      const r = _.MEDIA_TO_MSG[e];
      if (r) {
        n[r] = t[e];
      }
    }
    return n;
  }
  delete() {
    this._saveMedia = null;
    const {
      cancelDownloadMedia: e,
      cancelUploadMedia: t
    } = require("./644234.js");
    e(this);
    t(this);
    this.clearBlob();
  }
  runProcessIfNotRunBefore(e, t, n) {
    let r = this._keyedProcesses;
    if (!r) {
      r = this._keyedProcesses = {};
    }
    if (!r.hasOwnProperty(e)) {
      this._pendingChangesCount++;
      r[e] = Promise.resolve(n).then(t).then(e => {
        this.consolidate(e);
      }).finally(() => {
        this._pendingChangesCount--;
        if (this._pendingChangesCount === 0) {
          this.notifyMsgsAsync();
        }
      });
    }
  }
  getPendingProcess(e) {
    if (this._pendingChangesCount !== 0 && this._keyedProcesses && this._keyedProcesses.hasOwnProperty(e)) {
      return this._keyedProcesses[e];
    } else {
      return Promise.resolve();
    }
  }
  videoStreamingInfo(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (t.type !== _.TYPE.VIDEO) {
        __LOG__(4, undefined, new Error(), true)`type: ${String(t.type)}`;
        return void SEND_LOGS("media-fault: media streaming info request for non-video type");
      }
      const n = t.entries.getDownloadEntry(true);
      if (!(n && n.sidecar && n instanceof p.EncryptedMediaEntry)) {
        return null;
      }
      const [r, a] = yield Promise.all([(0, u.default)(g.MEDIA_TYPES.VIDEO, n.mediaKey), n.url()]);
      return {
        cryptoKeys: (0, i.default)((0, i.default)({}, r), {}, {
          cipherKey: r.encKey,
          sidecar: n.sidecar
        }),
        streamData: {
          clientUrl: a,
          size: t.size,
          msgKey: e
        }
      };
    })();
  }
  addStickerPack(e) {
    const t = this._stickerPacks;
    for (let n = 0; n < t.length; n++) {
      const [r, i] = t[n];
      if (!(r !== e || i)) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("redundant-sticker-pack-add");
      }
    }
    t.push([e, false]);
    this.notifyMsgsAsync();
  }
  addSticker(e) {
    const t = this._stickers;
    for (let n = 0; n < t.length; n++) {
      const [r, i] = t[n];
      if (!(r !== e || i)) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("redundant-sticker-add");
      }
    }
    t.push([e, false]);
    this.notifyMsgsAsync();
  }
  removeSticker(e) {
    const t = this._stickers;
    let n = false;
    for (let r = 0; !n && r < t.length; r++) {
      const [i, a] = t[r];
      if (!(i !== e || a)) {
        t[r][1] = true;
        n = true;
      }
    }
  }
  removeStickerPack(e) {
    const t = this._stickerPacks;
    let n = false;
    for (let r = 0; !n && r < t.length; r++) {
      const [i, a] = t[r];
      if (!(i !== e || a)) {
        t[r][1] = true;
        n = true;
      }
    }
  }
  hasAssociatedStickers() {
    return this._stickers.some(e => {
      let [t, n] = e;
      return !n;
    });
  }
  hasAssociatedStickerPacks() {
    return this._stickerPacks.some(e => {
      let [t, n] = e;
      return !n;
    });
  }
  associatedStickers() {
    return this._stickers.reduce((e, t) => {
      let [n, r] = t;
      if (r) {
        return e;
      } else {
        return e.concat(n);
      }
    }, []);
  }
  toJSON() {
    return {
      mediaBlob: this.mediaBlob,
      size: this.size,
      filehash: this.filehash,
      type: this.type,
      contentInfo: this.contentInfo,
      downloadStage: this.downloadStage,
      uploadStage: this.uploadStage
    };
  }
};