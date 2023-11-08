var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerPackModel = exports.StickerPack = exports.PRE_PLACEHOLDER_ID = undefined;
var i = require("./481173.js");
var a = r(require("./116253.js"));
var o = require("./172259.js");
var s = r(require("./961252.js"));
const l = "placeholder:";
exports.PRE_PLACEHOLDER_ID = l;
const u = e => {
  let {
    index: t,
    page: n
  } = e;
  return new d({
    id: `placeholder:${t}`,
    index: t,
    page: n
  });
};
class c extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.index = (0, i.prop)();
    this.name = (0, i.prop)();
    this.page = (0, i.prop)();
    this.url = (0, i.prop)();
    this.mimetype = (0, i.prop)("image/png");
    this.mediaData = (0, i.session)();
    this.mediaObject = (0, i.prop)();
    this.directPath = (0, i.prop)();
    this.filehash = (0, i.prop)();
    this.mediaKey = (0, i.prop)();
    this.mediaKeyTimestamp = (0, i.prop)();
    this.size = (0, i.prop)();
    this.type = (0, i.prop)(o.OUTWARD_TYPES.IMAGE);
    this.encFilehash = (0, i.prop)();
    this.deprecatedMms3Url = (0, i.derived)(function () {
      if (this.isFirstParty) {
        return "";
      } else {
        return this.url;
      }
    }, ["url", "isFirstParty"]);
    this.stickers = (0, i.derived)(function () {
      this._stickers = this._stickers || new s.default(this.id.split("#")[0], this.isFirstParty);
      return this._stickers;
    }, ["id"]);
    this.isPlaceholder = (0, i.derived)(function () {
      return c.isPlaceholderId(this.id);
    }, ["id"]);
    this.isFirstParty = (0, i.derived)(function () {
      return Boolean(this.url) && !this.mediaKey;
    }, ["url", "mediaKey"]);
  }
  initialize() {
    super.initialize();
    if (!(this.isPlaceholder || this.isFirstParty)) {
      this.addChild("mediaData", new a.default({
        renderableUrl: ""
      }));
      require("./644234.js").registerStickerPackIcon(this);
    }
  }
  downloadMedia() {
    if (this.isPlaceholder || this.isFirstParty) {
      return Promise.resolve();
    } else {
      return require("./644234.js").downloadStickerOrStickerPackIcon(this, "STICKER_PACK").catch(e => {
        __LOG__(4, undefined, new Error(), true)`id: ${this.id}, error: ${String(e.stack || e)}`;
        SEND_LOGS("sticker-panel:sticker-pack download failed");
      });
    }
  }
  delete() {
    super.delete();
    require("./644234.js").deregisterStickerPackIcon(this);
  }
}
exports.StickerPack = c;
c.Proxy = "stickerPack";
c.createPlaceholder = u;
c.isPlaceholderId = e => new RegExp("^placeholder:").test(e);
const d = (0, i.defineModel)(c);
exports.StickerPackModel = d;
d.createPlaceholder = u;
d.isPlaceholderId = c.isPlaceholderId;