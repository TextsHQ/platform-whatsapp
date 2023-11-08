var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartCollectionImpl = exports.CartCollection = undefined;
var i = require("./997853.js");
var a = require("./392125.js");
var o = r(require("./657201.js"));
var s = require("./94872.js");
class l extends a.BaseCollection {
  constructor(e, t) {
    super();
    this.imageWidth = 100;
    this.imageHeight = 100;
    if (e != null) {
      this.imageWidth = e;
    }
    if (t != null) {
      this.imageHeight = t;
    }
  }
  initializeFromCache(e) {
    try {
      (e || []).forEach(e => {
        const t = new o.default({
          id: e.id,
          itemCount: e.itemCount,
          total: e.total,
          currency: e.currency,
          message: e.message
        });
        t.cartItemCollection.add(e.products);
        this.add(t, {
          merge: true
        });
      });
    } catch (e) {
      __LOG__(3)`Error while restoring carts from cache, ${String(e)}`;
    }
  }
  findCart(e) {
    return this.gadd(e);
  }
}
exports.CartCollectionImpl = l;
l.model = o.default;
l.cachePolicy = {
  id: s.COLLECTIONS_KEYS.CART_COLLECTION,
  policy: i.CACHE_POLICY.LOAD,
  delay: 2000
};
const u = new l();
exports.CartCollection = u;