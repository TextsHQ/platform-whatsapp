Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
var i = require("./530485.js");
class a extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.name = (0, r.prop)();
    this.isHidden = (0, r.prop)();
    this.reviewStatus = (0, r.prop)();
    this.commerceUrl = (0, r.prop)();
    this.rejectReason = (0, r.prop)();
    this.totalItemsCount = (0, r.prop)();
    this.afterCursor = (0, r.prop)();
    this.canAppeal = (0, r.prop)();
  }
  initialize() {
    super.initialize();
    this.productCollection = new i.ProductCollection();
    this.afterCursor = undefined;
  }
  addProducts(e) {
    this.productCollection.add(e, {
      merge: true
    });
  }
}
a.Proxy = "productColl";
var o = (0, r.defineModel)(a);
exports.default = o;