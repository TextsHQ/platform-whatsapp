Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductCollection = exports.PRODUCT_REVIEW_STATUS = undefined;
var r = require("./392125.js");
var i = require("./517086.js");
const a = {
  NO_REVIEW: "NO_REVIEW",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  APPROVED: "APPROVED",
  OUTDATED: "OUTDATED"
};
exports.PRODUCT_REVIEW_STATUS = a;
class o extends r.BaseCollection {
  getProductModels() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const t = super.toArray();
    if (super.length < 1) {
      return t;
    }
    const n = super.head();
    if (!(n == null ? undefined : n.catalogWid)) {
      return t;
    }
    const r = e ? new Set([a.OUTDATED, a.NO_REVIEW, a.APPROVED, a.REJECTED, a.PENDING]) : new Set([a.APPROVED]);
    const i = super.filter(e => r.has(e.reviewStatus) && !e.old);
    if (e) {
      return i;
    } else {
      return i.filter(e => !e.isHidden);
    }
  }
  add(e, t) {
    const n = t ? super.add(e, t) : super.add(e);
    this.sort();
    return n;
  }
  evictImagesFromCache(e) {
    const t = this.get(e);
    if (t) {
      t.evictImagesFromCache();
    }
  }
  findImpl(e) {
    const t = this.get(e);
    if (t) {
      return Promise.resolve(t);
    } else {
      return Promise.resolve({
        id: e
      });
    }
  }
}
exports.ProductCollection = o;
o.model = i.Product;
o.comparator = function (e, t) {
  return e.index - t.index;
};