var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./481173.js");
var o = r(require("./97359.js"));
var s = require("./920733.js");
var l = require("./196127.js");
var u = require("./172259.js");
class c extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.type = (0, a.prop)(u.OUTWARD_TYPES.UNKNOWN);
    this.directPath = (0, a.prop)();
    this.mediaKey = (0, a.prop)();
    this.mediaKeyTimestamp = (0, a.prop)();
    this.encFilehash = (0, a.prop)();
    this.mediaStage = (0, a.prop)(u.MEDIA_DATA_STAGE.INIT);
    this.size = (0, a.prop)();
    this.loadedSize = (0, a.prop)();
    this.filehash = (0, a.prop)();
    this.mimetype = (0, a.prop)();
    this.mediaBlob = (0, a.prop)();
    this.renderableUrl = (0, a.prop)();
    this.fullHeight = (0, a.prop)();
    this.fullWidth = (0, a.prop)();
    this.aspectRatio = (0, a.prop)();
    this.rgbaBuffer = (0, a.prop)();
    this.rgbaHeight = (0, a.prop)();
    this.rgbaWidth = (0, a.prop)();
    this.animationDuration = (0, a.prop)(0);
    this.animatedAsNewMsg = (0, a.prop)(false);
    this.isAnimated = (0, a.prop)();
    this.isFirstParty = (0, a.prop)();
    this.isFromStickerMaker = (0, a.prop)();
    this.isAvatar = (0, a.prop)();
    this.isAiSticker = (0, a.prop)();
    this.stickerPackId = (0, a.prop)();
    this.stickerPackName = (0, a.prop)();
    this.stickerPackPublisher = (0, a.prop)();
    this.singleLoopDuration = (0, a.prop)();
    this.firstFrameLength = (0, a.prop)();
    this.firstFrameSidecar = (0, a.prop)();
    this.emojis = (0, a.prop)();
    this.progressiveStage = (0, a.prop)();
    this.isViewOnce = (0, a.prop)(false);
    this.staticUrl = (0, a.prop)();
    this.preview = (0, a.prop)();
    this.sidecar = (0, a.prop)();
    this.duration = (0, a.prop)();
    this.durationFloat = (0, a.prop)();
    this.isGif = (0, a.prop)();
    this.gifAttribution = (0, a.prop)();
    this.streamable = (0, a.derived)(function () {
      return this.isStreamable();
    }, ["isGif", "isViewOnce", "mediaStage", "sidecar", "type", "_swStreamingSupported"]);
    this._swStreamingSupported = (0, a.prop)(false);
    this._listeningToSwSupport = (0, a.prop)(false);
    this.filename = (0, a.prop)();
    this.pageCount = (0, a.prop)();
    this.documentPreview = (0, a.prop)();
    this.isVcardOverMmsDocument = (0, a.prop)(false);
    this.parsedVcards = (0, a.prop)();
    this.fullPreviewSize = (0, a.prop)();
    this.fullPreviewData = (0, a.prop)();
    this.subtype = (0, a.prop)();
    this.waveform = (0, a.prop)();
  }
  initialize() {
    super.initialize();
  }
  set(e, t, n) {
    let r;
    let a = n;
    if (typeof e == "string") {
      r = {
        [e]: t
      };
    } else {
      r = e;
      a = t;
    }
    r = function (e) {
      if (e.filename && e.type === d.TYPE.DOCUMENT) {
        const t = (0, s.cleanFilename)(e.filename);
        return (0, i.default)((0, i.default)({}, e), {}, {
          filename: t,
          caption: t
        });
      }
      return e;
    }(r);
    return super.set(r, a);
  }
  isStreamable() {
    return this.isStreamableType() && this.listenToServiceWorkerSupport() && !this.isViewOnce;
  }
  _updateStreamingSupported(e) {
    this._swStreamingSupported = e;
  }
  listenToServiceWorkerSupport() {
    if (this._listeningToSwSupport) {
      return this._swStreamingSupported;
    }
    {
      const e = (0, o.default)(require("./478885.js"));
      this.listenTo(e, "change:streamingSupported", this._updateStreamingSupported);
      this._swStreamingSupported = Boolean(e.streamingSupported);
    }
    this._listeningToSwSupport = true;
    return this._swStreamingSupported;
  }
  isStreamableType() {
    return this.type === u.OUTWARD_TYPES.VIDEO && !this.isGif && (this.mediaStage === u.MEDIA_DATA_STAGE.INIT || this.mediaStage === u.MEDIA_DATA_STAGE.FETCHING || this.mediaStage === u.MEDIA_DATA_STAGE.DECRYPTING || this.mediaStage === u.MEDIA_DATA_STAGE.RESOLVED) && this.fullWidth != null && this.fullHeight != null && Boolean(this.sidecar && this.sidecar.byteLength > 0);
  }
  isDownloadable() {
    return !this.isViewOnce && (this.renderableUrl != null || l.InMemoryMediaBlobCache.has(this.filehash) || this.mediaStage === u.MEDIA_DATA_STAGE.EXISTS || this.mediaStage === u.MEDIA_DATA_STAGE.PROGRESSIVE_READY);
  }
}
c.Proxy = "mediaData";
const d = (0, a.defineModel)(c);
d.TYPE = u.OUTWARD_TYPES;
var p = d;
exports.default = p;