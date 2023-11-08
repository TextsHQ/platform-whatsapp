var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./481173.js");
var a = r(require("./116253.js"));
var o = require("./172259.js");
class s extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.price = (0, i.prop)();
    this.currency = (0, i.prop)();
    this.name = (0, i.prop)();
    this.quantity = (0, i.prop)();
    this.thumbnailId = (0, i.prop)();
    this.thumbnailUrl = (0, i.prop)();
    this.isCustomItem = (0, i.prop)();
    this.isQuantitySet = (0, i.prop)();
    this.mediaData = (0, i.derived)(function () {
      return new a.default({
        mediaStage: this.thumbnailUrl != null ? o.MEDIA_DATA_STAGE.RESOLVED : o.MEDIA_DATA_STAGE.PREPARING,
        renderableUrl: this.thumbnailUrl != null ? `${this.thumbnailUrl}` : null
      });
    }, ["thumbnailUrl"]);
  }
  getCollection() {
    return require("./699411.js").OrderCollection;
  }
}
s.Proxy = "order-item";
var l = (0, i.defineModel)(s);
exports.default = l;