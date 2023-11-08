var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductCollCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./172949.js");
var s = require("./831426.js");
var l = r(require("./826823.js"));
var u = require("./555622.js");
var c = r(require("./36707.js"));
var d = r(require("./804166.js"));
const p = 100;
const f = e => ({
  id: e.id,
  name: e.name,
  reviewStatus: e.reviewStatus,
  totalItemsCount: e.totalItemsCount,
  canAppeal: e.canAppeal,
  commerceUrl: e.commerceUrl,
  rejectReason: e.rejectReason
});
class _ extends a.BaseCollection {
  constructor() {
    super(...arguments);
    this.afterCursor = "";
  }
  findCollectionsList(e, t, n, r) {
    var a = this;
    return (0, i.default)(function* () {
      if (r) {
        u.QPL.markerPoint(r, "datasource_collections_start");
      }
      try {
        const n = yield (0, s.attemptWithDirectConnectionRetry)(e, n => (0, c.default)({
          catalogWid: e,
          afterCursor: a.afterCursor,
          limit: 10,
          productsCount: t,
          width: p,
          height: p,
          directConnectionEncryptedInfo: n
        }));
        if (r) {
          u.QPL.markerPoint(r, "datasource_collections_end");
        }
        a.afterCursor = n.afterCursor;
        a.add(n.collections.map(f), {
          merge: true
        });
        n.collections.forEach(t => {
          const n = a.get(t.id);
          if (n) {
            n.addProducts(t.products.map(t => (0, o.mapProductResponseToModel)(t, e)));
          }
        });
        a.trigger("change");
      } catch (e) {
        __LOG__(4, true, new Error(), true)`Failed findCollectionsList, error: ${e}`;
        SEND_LOGS("Find collections list failed");
        throw e;
      }
    })();
  }
  getCollectionModels(e) {
    const t = this.toArray();
    if (e) {
      return t;
    } else {
      return t.filter(e => !e.isHidden && e.reviewStatus === "APPROVED");
    }
  }
  findCollectionProducts(e, t, n, r) {
    var a = this;
    return (0, i.default)(function* () {
      let n = a.get(t);
      const i = n ? n.afterCursor : undefined;
      if (r) {
        u.QPL.markerPoint(r, "datasource_start");
      }
      try {
        const l = yield (0, s.attemptWithDirectConnectionRetry)(e, n => (0, d.default)({
          catalogWid: e,
          collectionId: t,
          afterCursor: i,
          limit: 10,
          width: p,
          height: p,
          directConnectionEncryptedInfo: n
        }));
        if (r) {
          u.QPL.markerPoint(r, "datasource_end");
        }
        if (l.collections.length === 1) {
          a.add(l.collections.map(f), {
            merge: true
          });
          n = a.get(t);
          if (n) {
            n.addProducts(l.collections[0].products.map(t => (0, o.mapProductResponseToModel)(t, e)));
            n.afterCursor = l.afterCursor;
          }
        }
      } catch (e) {
        __LOG__(4, true, new Error(), true)`Failed findCollectionProducts, error: ${e}`;
        SEND_LOGS("Find collection products failed");
        throw e;
      }
    })();
  }
}
exports.ProductCollCollection = _;
_.model = l.default;
_.staleCollection = true;