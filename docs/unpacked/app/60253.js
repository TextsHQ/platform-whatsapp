Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./684290.js");
const i = {
  document: r.MEDIA_TYPE.DOCUMENT,
  video: r.MEDIA_TYPE.VIDEO,
  gif: r.MEDIA_TYPE.GIF,
  image: r.MEDIA_TYPE.PHOTO,
  audio: r.MEDIA_TYPE.AUDIO
};
exports.default = class {
  constructor(e, t, n) {
    this.mediaPickerSentUnchanged = 0;
    this.mediaPickerDeleted = 0;
    this.mediaPickerChanged = new Set();
    this.mediaPickerCroppedRotated = new Set();
    this.mediaPickerDrawing = new Set();
    this.mediaPickerStickers = new Set();
    this.mediaPickerText = new Set();
    this.mediaPickerLikeDoc = 0;
    this.mediaPickerNotLikeDoc = 0;
    this.mediaPickerT = 0;
    this.t0 = Date.now();
    this.mediaType = i[t];
    this.mediaPickerOrigin = n;
    this.medias = new Set();
    this.medias.add(e);
    this.changeTypes = {
      mediaPickerCroppedRotated: this.mediaPickerCroppedRotated,
      mediaPickerDrawing: this.mediaPickerDrawing,
      mediaPickerStickers: this.mediaPickerStickers,
      mediaPickerText: this.mediaPickerText
    };
  }
  onAdd(e) {
    this.medias.add(e);
    if (this.mediaType === "document") {
      this.mediaPickerLikeDoc++;
    } else {
      this.mediaPickerNotLikeDoc++;
    }
  }
  onChange(e, t) {
    this.mediaPickerChanged.add(e);
    this.changeTypes[t].add(e);
  }
  onDelete(e) {
    this.medias.delete(e);
    this.mediaPickerDeleted++;
    if (this.medias.size === 0) {
      return this.onCancel();
    }
  }
  onSend() {
    this.mediaPickerSent = this.medias.size;
    this.mediaPickerSentUnchanged = this.mediaPickerSent - this.mediaPickerChanged.size;
    return this.dataPreflight();
  }
  onCancel() {
    this.mediaPickerSent = 0;
    this.mediaPickerSentUnchanged = 0;
    return this.dataPreflight();
  }
  onPause() {
    this.mediaPickerT += Date.now() - (this.t0 || 0);
    this.t0 = null;
  }
  onResume() {
    this.t0 = this.t0 != null ? this.t0 : Date.now();
  }
  dataPreflight() {
    let e = this.mediaPickerSentUnchanged;
    if (isNaN(e)) {
      e = 0;
      __LOG__(4, undefined, new Error(), true)`mediaPickerSentUnchange mediaPickerSent: ${this.mediaPickerSent != null && this.mediaPickerSent !== 0 ? this.mediaPickerSent : "undefined"}, mediaPickerChanged: ${this.mediaPickerChanged.size || "undefined"}`;
      SEND_LOGS("mediaPickerSentUnchange is not a number");
    }
    return {
      mediaPickerSent: this.mediaPickerSent,
      mediaPickerSentUnchanged: e,
      mediaPickerT: this.mediaPickerT + (Date.now() - (this.t0 || 0)),
      mediaType: this.mediaType,
      mediaPickerOrigin: this.mediaPickerOrigin,
      mediaPickerChanged: this.mediaPickerChanged.size,
      mediaPickerCroppedRotated: this.mediaPickerCroppedRotated.size,
      mediaPickerDrawing: this.mediaPickerDrawing.size,
      mediaPickerStickers: this.mediaPickerStickers.size,
      mediaPickerText: this.mediaPickerText.size,
      mediaPickerLikeDoc: this.mediaPickerLikeDoc,
      mediaPickerNotLikeDoc: this.mediaPickerNotLikeDoc,
      mediaPickerDeleted: this.mediaPickerDeleted
    };
  }
};