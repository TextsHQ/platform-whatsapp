var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./481173.js");
var o = require("./76882.js");
var s = r(require("./454903.js"));
class l extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, a.prop)();
    this.products = (0, a.prop)();
    this.itemCount = (0, a.prop)();
    this.subtotal = (0, a.prop)();
    this.tax = (0, a.prop)();
    this.total = (0, a.prop)();
    this.currency = (0, a.prop)();
    this.createdAt = (0, a.prop)();
    this.sellerJid = (0, a.prop)();
    this.totalItemCount = (0, a.derived)(function () {
      return this.products.reduce((e, t) => e + t.quantity, 0);
    }, ["products"]);
  }
  initialize() {
    super.initialize();
    this.orderItemCollection = new o.OrderItemCollection();
    this.listenTo(this, "change:cartItemCollection", this.triggerItemCollectionUpdate);
    this.triggerItemCollectionUpdate();
  }
  triggerItemCollectionUpdate() {
    this.orderItemCollection.set(this.products.map(e => new s.default((0, i.default)({}, e))), {
      merge: true
    });
  }
  getCollection() {
    return require("./699411.js").OrderCollection;
  }
}
l.Proxy = "order";
var u = (0, a.defineModel)(l);
exports.default = u;