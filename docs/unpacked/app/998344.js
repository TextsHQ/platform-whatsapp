Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartItem = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.priceAmount1000 = (0, r.prop)();
    this.currency = (0, r.prop)();
    this.name = (0, r.prop)();
    this.quantity = (0, r.prop)();
    this.imageHash = (0, r.prop)();
    this.imageCdnUrl = (0, r.prop)();
    this.maxAvailable = (0, r.prop)();
  }
  getCollection() {
    return require("./290895.js").CartCollection;
  }
}
i.Proxy = "cart-item";
const a = (0, r.defineModel)(i);
exports.CartItem = a;