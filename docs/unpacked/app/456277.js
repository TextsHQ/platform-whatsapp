var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaPickerStatsLogger = exports.MediaPickerChangeTypes = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./358127.js");
var o = r(require("./60253.js"));
exports.MediaPickerChangeTypes = {
  mediaPickerCroppedRotated: "mediaPickerCroppedRotated",
  mediaPickerDrawing: "mediaPickerCroppedRotated",
  mediaPickerStickers: "mediaPickerCroppedRotated",
  mediaPickerText: "mediaPickerCroppedRotated"
};
exports.MediaPickerStatsLogger = class {
  constructor() {
    this.mediaByTypeAndOrigin = new Map();
    this.mediaEventReverseIndex = new Map();
    this.chatRecipients = null;
  }
  _getKey(e, t) {
    return `${e}_${t}`;
  }
  _commitLog(e) {
    new a.MediaPickerWamEvent((0, i.default)((0, i.default)({}, e), {}, {
      chatRecipients: this.chatRecipients
    })).commit();
  }
  _processNewMedia(e, t, n) {
    const r = this._getKey(t, n);
    const i = this.mediaByTypeAndOrigin.get(r);
    if (i) {
      i.onAdd(e);
      this.mediaEventReverseIndex.set(e, i);
    } else {
      const i = new o.default(e, t, n);
      this.mediaByTypeAndOrigin.set(r, i);
      this.mediaEventReverseIndex.set(e, i);
    }
  }
  logChange(e, t) {
    const n = this.mediaEventReverseIndex.get(e);
    if (n) {
      n.onChange(e, t);
    }
  }
  logDelete(e) {
    const t = this.mediaEventReverseIndex.get(e);
    if (t) {
      t.onDelete(e);
    }
  }
  logSend(e) {
    this.mediaByTypeAndOrigin.forEach(t => {
      this._commitLog((0, i.default)((0, i.default)({}, t.onSend()), {}, {
        isViewOnce: e.isViewOnce
      }));
    });
  }
  logCancel() {
    this.mediaByTypeAndOrigin.forEach(e => {
      this._commitLog(e.onCancel());
    });
  }
  logAdd(e, t, n) {
    if (!this.mediaEventReverseIndex.get(e)) {
      this._processNewMedia(e, t, n);
    }
  }
};