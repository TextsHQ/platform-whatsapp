var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerModel = exports.Sticker = undefined;
var i = r(require("../vendor/751463.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./481173.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
}(require("./644234.js"));
var u = r(require("./116253.js"));
var c = require("./172259.js");
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = (0, i.default)(() => new g({
  id: "placeholder",
  isPlaceholder: true
}));
const f = (0, i.default)(() => new g({
  id: "createButton",
  isCreateButton: true
}));
class _ extends s.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.mediaData = (0, s.session)();
    this.mediaObject = (0, s.prop)();
    this.deprecatedMms3Url = (0, s.prop)();
    this.directPath = (0, s.prop)();
    this.filehash = (0, s.prop)();
    this.height = (0, s.prop)();
    this.index = (0, s.prop)();
    this.mediaKey = (0, s.prop)();
    this.mediaKeyTimestamp = (0, s.prop)();
    this.mimetype = (0, s.prop)();
    this.size = (0, s.prop)();
    this.type = (0, s.prop)(c.OUTWARD_TYPES.STICKER);
    this.encFilehash = (0, s.prop)();
    this.width = (0, s.prop)();
    this.weight = (0, s.prop)();
    this.stickerPackId = (0, s.prop)();
    this.stickerPackName = (0, s.prop)();
    this.stickerPackPublisher = (0, s.prop)();
    this.isPlaceholder = (0, s.prop)();
    this.isCreateButton = (0, s.prop)();
  }
  initialize() {
    super.initialize();
    const e = new u.default();
    this.addChild("mediaData", e);
    if ((0, o.getABPropConfigValue)("web_sticker_suggestions_enable")) {
      this.listenTo(e, "change:emojis", t => {
        if (t.emojis != null) {
          if (t.emojis.length) {
            this.trigger("sticker_mediaData_emojis_updated");
          }
          this.stopListening(e, "change:emojis");
        }
      });
    }
    if (!(this.isPlaceholder || this.isCreateButton)) {
      l.registerSticker(this);
    }
  }
  downloadMedia(e) {
    return l.downloadStickerOrStickerPackIcon(this, "STICKER", e).catch(e => {
      __LOG__(4, undefined, new Error(), true, ["non-sad"])`id: ${this.id}, error: ${String(e.stack || e)}`;
      SEND_LOGS("sticker-panel:sticker download failed", 1, "non-sad");
    });
  }
  toDbData() {
    return {
      id: this.id || this.filehash,
      index: this.index || 0,
      width: this.width,
      height: this.height,
      size: this.size,
      mimetype: this.mimetype,
      filehash: this.filehash,
      directPath: this.directPath,
      mediaKey: this.mediaKey,
      mediaKeyTimestamp: this.mediaKeyTimestamp != null ? this.mediaKeyTimestamp : (0, a.unixTime)(),
      encFilehash: this.encFilehash,
      deprecatedMms3Url: this.deprecatedMms3Url,
      type: c.OUTWARD_TYPES.STICKER,
      weight: this.weight
    };
  }
  delete() {
    super.delete();
    l.deregisterSticker(this);
  }
}
exports.Sticker = _;
_.Proxy = "sticker";
_.getPlaceholder = p;
_.getCreateButton = f;
const g = (0, s.defineModel)(_);
exports.StickerModel = g;
g.getPlaceholder = p;