var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerPackModel = exports.StickerPack = undefined;
var i = require("./481173.js");
var a = r(require("./961252.js"));
class o extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.index = (0, i.prop)();
    this.id = (0, i.prop)();
    this.name = (0, i.prop)();
    this.publisher = (0, i.prop)();
    this.description = (0, i.prop)();
    this.fileSize = (0, i.prop)();
    this.imageDataHash = (0, i.prop)();
    this.animated = (0, i.prop)();
    this.previewImageIds = (0, i.prop)();
    this.trayImageId = (0, i.prop)();
    this.trayImagePreview = (0, i.prop)();
    this.stickers = (0, i.derived)(function () {
      const e = this.id;
      this._stickers = this._stickers || new a.default(e, true);
      return this._stickers;
    }, ["id"]);
  }
}
exports.StickerPack = o;
o.Proxy = "stickerPackMd";
const s = (0, i.defineModel)(o);
exports.StickerPackModel = s;