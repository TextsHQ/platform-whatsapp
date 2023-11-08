Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
var i = require("./569299.js");
class a extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.products = (0, r.prop)();
    this.itemCount = (0, r.prop)();
    this.total = (0, r.prop)();
    this.currency = (0, r.prop)();
    this.message = (0, r.prop)();
  }
  countTotals() {
    const e = this.cartItemCollection.reduce((e, t) => {
      var n;
      e.currency.add(t.currency);
      return {
        itemCount: e.itemCount + t.quantity,
        total: e.total + t.quantity * ((n = t.priceAmount1000) !== null && n !== undefined ? n : 0),
        currency: e.currency
      };
    }, {
      itemCount: 0,
      total: 0,
      currency: new Set()
    });
    const t = e.currency.size === 1;
    const n = {
      itemCount: e.itemCount,
      total: t ? e.total : null,
      currency: t ? e.currency.values().next().value : null
    };
    this.set(n, {
      silent: true
    });
  }
  initialize() {
    super.initialize();
    this.cartItemCollection = new i.CartItemCollection();
    this.listenTo(this, "change:cartItemCollection", this.countTotals);
  }
  getCollection() {
    return require("./290895.js").CartCollection;
  }
}
a.Proxy = "cart";
var o = (0, r.defineModel)(a);
exports.default = o;