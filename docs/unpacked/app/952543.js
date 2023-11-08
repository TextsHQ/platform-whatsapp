var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaQuality = exports.MediaEditorAction = exports.AttachMedia = exports.ATTACH_MEDIA_STATE = undefined;
var a = i(require("../vendor/348926.js"));
var o = require("./122583.js");
var s = i(require("./66836.js"));
var l = require("./287461.js");
var u = require("./481173.js");
var c = require("./698210.js");
var d = require("./270183.js");
var p = require("./644234.js");
var f = require("./232294.js");
var _ = i(require("./287866.js"));
var g = i(require("./409701.js"));
var m = A(require("./197636.js"));
var h = i(require("./756680.js"));
var y = A(require("./288057.js"));
var E = require("./373070.js");
var S = require("./432938.js");
var v = i(require("./556869.js"));
var T = require("./113189.js");
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function A(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
const b = require("../vendor/76672.js").Mirrored(["Outline", "OutlineDone", "CropRotateCanvas"]);
exports.MediaEditorAction = b;
const C = require("../vendor/76672.js").Mirrored(["Standard", "HD"]);
exports.MediaQuality = C;
const P = {
  READY: "ready",
  PROCESSING: "processing",
  ERROR: "error"
};
exports.ATTACH_MEDIA_STATE = P;
class O extends u.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, u.prop)();
    this.file = (0, u.prop)();
    this.uiProcessed = (0, u.prop)(false);
    this.fileOrigin = (0, u.prop)();
    this.isVcardOverMmsDocument = (0, u.prop)(false);
    this.stickerMaker = (0, u.prop)(false);
    this.supportedTypes = (0, u.prop)();
    this.quality = (0, u.prop)(C.Standard);
    this.originalAttachment = (0, u.session)();
    this.state = (0, u.session)();
    this.mediaPrep = (0, u.session)();
    this.mimetype = (0, u.session)();
    this.originalMimetype = (0, u.session)();
    this.processPromise = (0, u.session)();
    this.exception = (0, u.session)();
    this.caption = (0, u.session)();
    this.type = (0, u.session)(E.MSG_TYPE.UNKNOWN);
    this.hdEligible = (0, u.session)(false);
    this.metadataByQuality = (0, u.session)();
    this.mediaEditorData = (0, u.session)();
    this.lastMediaEditorAction = (0, u.session)();
    this.editedFile = (0, u.session)();
    this._mediaEditorUndoStack = (0, u.session)(() => []);
    this._mediaEditorRedoStack = (0, u.session)(() => []);
    this.preview = (0, u.session)();
    this.fullPreview = (0, u.session)();
    this.fullPreviewSize = (0, u.session)();
    this.filename = (0, u.session)();
    this.documentPageCount = (0, u.session)();
    this.isGif = (0, u.session)();
    this.gifAttribution = (0, u.session)();
    this.previewable = (0, u.derived)(function () {
      if (!this.type || !this.mimetype || !this.fullPreview) {
        return false;
      }
      switch (this.type) {
        case E.MSG_TYPE.DOCUMENT:
          return !!this.filename;
        case E.MSG_TYPE.IMAGE:
        case E.MSG_TYPE.VIDEO:
          return !(!this.fullPreviewSize || !this.preview);
        case E.MSG_TYPE.AUDIO:
        case E.MSG_TYPE.STICKER:
        case E.MSG_TYPE.PTT:
        case E.MSG_TYPE.UNKNOWN:
          return true;
        default:
          throw (0, v.default)(`Unsupported attach media type ${this.type}`);
      }
    }, ["preview", "fullPreview", "type", "filename", "fullPreviewSize", "mimetype"]);
    this.filesize = (0, u.derived)(function () {
      if (this.file instanceof h.default) {
        return this.file.size();
      } else if (this.file instanceof Blob) {
        return this.file.size;
      } else {
        return null;
      }
    }, ["file"]);
    this.fileExt = (0, u.derived)(function () {
      if (this.filename) {
        return (0, c.getFileExtension)(this.filename);
      } else {
        return null;
      }
    }, ["filename"]);
    this._isHdEligible = (0, s.default)(() => "hd-eligible", function () {
      var e = (0, a.default)(function* (e) {
        const {
          file: t
        } = yield e.attachmentPromise;
        const n = window.URL.createObjectURL(t);
        const r = yield m.loadImage(n);
        return (0, d.isHdPhoto)(r.naturalHeight, r.naturalWidth);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  }
  initialize() {
    super.initialize();
    if (!(this.file instanceof Promise)) {
      throw (0, v.default)("cannot process non-promise file");
    }
    this.originalAttachment = this.file;
    this.processAttachment(this.file);
  }
  processAttachment(e) {
    this.state = P.PROCESSING;
    this.mediaEditorData = _.default.create();
    this.processPromise = this._processAttachmentPromiseHelper(e).then(() => {
      const e = new Image();
      e.src = this.fullPreview;
      e.onload = () => {
        const t = {};
        if (this.stickerMaker) {
          t.fitToSquare = true;
          t.scale = 1 - S.STICKER_MAKER_IMAGE_PADDING * 2 / S.STICKER_DIMENSION;
        }
        this.mediaEditorData = this.mediaEditorData.setBackground(e, t);
      };
    });
  }
  _getMaxDimension(e) {
    switch (e != null ? e : this.quality) {
      case C.Standard:
        return (0, l.getABPropConfigValue)("web_image_max_edge");
      case C.HD:
        return (0, l.getABPropConfigValue)("web_image_max_hd_edge");
    }
  }
  updateQuality(e) {
    this.quality = e;
    if (this.originalAttachment != null) {
      this.processAttachment(this.originalAttachment);
    } else {
      __LOG__(4, undefined, new Error(), true, ["media"])`[AttachMediaModel] originalAttachment is null`;
      SEND_LOGS("attach-media-update-quality-null-attachment", 1, "media");
    }
  }
  _supports(e) {
    return e == null || this.supportedTypes == null || this.supportedTypes.has(e);
  }
  _computeMetadataByQuality(e) {
    var t = this;
    return (0, a.default)(function* () {
      t.metadataByQuality = new Map([[C.Standard, yield (0, f.getImageMetadata)(e, {
        maxDimension: t._getMaxDimension(C.Standard)
      })], [C.HD, yield (0, f.getImageMetadata)(e, {
        maxDimension: t._getMaxDimension(C.HD)
      })]]);
    })();
  }
  _processAttachmentPromiseHelper(e) {
    var t = this;
    return e.then(function () {
      var n = (0, a.default)(function* (n) {
        if (!t._supports(n.type)) {
          throw new y.InvalidMediaFileType();
        }
        t.set(n);
        const i = {
          maxDimension: t._getMaxDimension()
        };
        const {
          file: a,
          filename: o,
          isGif: s,
          asSticker: l,
          stickerMaker: u,
          gifAttribution: d,
          isVcardOverMmsDocument: f,
          documentPageCount: _
        } = n;
        if (s === true) {
          i.asGif = true;
          i.gifAttribution = d;
        } else if (n.type === c.FILETYPE.DOCUMENT) {
          i.asDocument = true;
          i.filename = o;
          i.isVcardOverMmsDocument = f;
          i.documentPageCount = _;
        }
        i.asSticker = l;
        if (u === true) {
          i.minDimension = S.STICKER_DIMENSION;
          i.transparency = true;
        }
        i.precomputedFields = {
          fullHeight: n.fullPreviewSize ? n.fullPreviewSize.height : undefined,
          fullWidth: n.fullPreviewSize ? n.fullPreviewSize.width : undefined,
          preview: n.preview,
          duration: n.duration
        };
        const g = h.default.createFromData(a, a.type);
        const m = (0, p.prepRawMedia)(g, i);
        t.set({
          mediaPrep: m
        });
        const v = yield m.waitForPrep();
        const M = v.documentPreview;
        const A = v.mediaBlob instanceof h.default ? window.URL.createObjectURL(v.mediaBlob.forceToBlob()) : window.URL.createObjectURL(v.mediaBlob);
        const b = {
          file: v.mediaBlob,
          fullPreview: A,
          type: v.type,
          filename: v.filename,
          mimetype: v.mimetype,
          originalMimetype: n.mimetype,
          preview: v.preview,
          state: P.READY,
          isGif: v.isGif,
          fullPreviewSize: undefined,
          documentPageCount: _,
          isVcardOverMmsDocument: v.isVcardOverMmsDocument,
          editedFile: v.mediaBlob
        };
        if ((0, T.isNonZeroNumber)(v.fullWidth) && (0, T.isNonZeroNumber)(v.fullHeight)) {
          b.fullPreviewSize = {
            height: v.fullHeight,
            width: v.fullWidth
          };
        }
        if (v.type === E.MSG_TYPE.IMAGE) {
          b.preview = A;
          t.originalAttachment = e;
          if (!v.isGif) {
            t.hdEligible = yield t._isHdEligible({
              attachmentPromise: e,
              signal: new r().signal
            });
            if (t.hdEligible) {
              yield t._computeMetadataByQuality(a);
            }
          }
        }
        if (v.type === E.MSG_TYPE.DOCUMENT && M) {
          b.fullPreview = M.url;
          b.preview = M.thumbUrl;
          b.fullPreviewSize = {
            height: M.height,
            width: M.width
          };
          b.documentPageCount = M.pdfPages;
        }
        t.set(b);
        if (!t.previewable) {
          __LOG__(4, undefined, new Error(), true)`Invariant violated, processed file is not previewable`;
          SEND_LOGS("AttachMedia processFile");
        }
      });
      return function () {
        return n.apply(this, arguments);
      };
    }()).catch((0, o.filteredCatch)([y.InvalidMediaFileType, y.InvalidImageFileType], t => {
      if (this.isGif || this.type === c.FILETYPE.DOCUMENT || !this._supports(E.MSG_TYPE.DOCUMENT)) {
        throw t;
      }
      return this._processAttachmentPromiseHelper(e.then(e => {
        e.type = c.FILETYPE.DOCUMENT;
        return e;
      }));
    })).catch((0, o.filteredCatch)([g.default, y.MediaFileFailedLoad, y.MediaFileEmpty], e => {
      this.set({
        exception: e,
        state: P.ERROR
      });
      return this;
    })).catch(() => {
      __LOG__(3)`AttachMedia:processFile convert unexpected error to InvalidMediaFileType:`;
      this.set({
        exception: new y.InvalidMediaFileType(),
        state: P.ERROR
      });
      return this;
    });
  }
  sendToChat(e, t) {
    if (!this.mediaPrep) {
      return Promise.reject((0, v.default)("MediaPrep not available"));
    }
    if (this.state === P.ERROR) {
      return Promise.reject((0, v.default)(this.exception));
    }
    if (!(this.state !== P.PROCESSING || this.previewable && t.addEvenWhilePreparing)) {
      return Promise.reject((0, v.default)("Media still processing"));
    }
    if (this.state === P.READY) {
      return this.mediaPrep.sendToChat(e, t);
    }
    const n = {
      mimetype: this.mimetype
    };
    switch (this.type) {
      case E.MSG_TYPE.VIDEO:
        n.isGif = this.isGif;
        n.gifAttribution = this.gifAttribution;
      case E.MSG_TYPE.IMAGE:
        n.width = this.fullPreviewSize.width;
        n.height = this.fullPreviewSize.height;
        n.body = this.preview;
        t.placeholderProps = n;
        break;
      case E.MSG_TYPE.DOCUMENT:
        n.pageCount = this.documentPageCount;
        n.filename = this.filename;
        n.body = this.preview;
        t.placeholderProps = n;
        break;
      case E.MSG_TYPE.AUDIO:
      case E.MSG_TYPE.PTT:
    }
    return this.mediaPrep.sendToChat(e, t);
  }
  getFileType() {
    if (!(this.file instanceof Blob || this.file instanceof File)) {
      throw (0, v.default)("expected file to be a Blob or File");
    }
    return (0, c.typeFromMimetype)(this.file.type);
  }
  isViewableOnce() {
    return new Set([E.MSG_TYPE.IMAGE, E.MSG_TYPE.VIDEO]).has(this.type) && !this.isGif;
  }
  delete() {
    if (this.fullPreview) {
      window.URL.revokeObjectURL(this.fullPreview);
    }
    super.delete();
  }
  updateMediaEditorData(e, t) {
    if (!(this.mediaEditorData === e)) {
      if (t.undoable) {
        this._mediaEditorUndoStack.push([this.mediaEditorData, this.lastMediaEditorAction]);
        this.lastMediaEditorAction = t.lastAction;
        this._mediaEditorRedoStack = [];
      }
      this.mediaEditorData = e;
    }
    return this.mediaEditorData;
  }
  undoMediaEditorData() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (this.canUndoMediaEditorData()) {
      if (e) {
        this._mediaEditorRedoStack.push([this.mediaEditorData, this.lastMediaEditorAction]);
      }
      const [t, n] = this._mediaEditorUndoStack.pop();
      this.mediaEditorData = t;
      this.lastMediaEditorAction = n;
    }
  }
  redoMediaEditorData() {
    if (this.canRedoMediaEditorData()) {
      this._mediaEditorUndoStack.push([this.mediaEditorData, this.lastMediaEditorAction]);
      const [e, t] = this._mediaEditorRedoStack.pop();
      this.mediaEditorData = e;
      this.lastMediaEditorAction = t;
    }
  }
  canUndoMediaEditorData() {
    return this._mediaEditorUndoStack.length > 0;
  }
  canRedoMediaEditorData() {
    return this._mediaEditorRedoStack.length > 0;
  }
  updateEditedFile(e) {
    this.editedFile = e;
  }
  updatePreview(e) {
    window.URL.revokeObjectURL(this.preview);
    this.preview = e;
  }
  updateFullPreview(e) {
    window.URL.revokeObjectURL(this.fullPreview);
    this.fullPreview = e;
  }
  updateCaption(e) {
    this.caption = e;
  }
}
O.Proxy = "attachMedia";
const I = (0, u.defineModel)(O);
exports.AttachMedia = I;