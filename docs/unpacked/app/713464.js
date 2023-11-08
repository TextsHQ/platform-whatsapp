var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCollectionImpl = exports.CatalogCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./724976.js");
var o = require("./984330.js");
var s = require("./392125.js");
var l = require("./739071.js");
var u = require("./172949.js");
var c = r(require("./723873.js"));
var d = require("./778466.js");
var p = require("./555622.js");
var f = require("./937001.js");
var _ = require("./669050.js");
var g = r(require("./556869.js"));
class m extends s.BaseCollection {
  constructor() {
    super(...arguments);
    this.findQueryImpl = (e, t) => this._findImplCommon(e, t).then(e => [e]);
    this.findImpl = e => this._findImplCommon(e);
  }
  addMsgAsProduct(e) {
    const t = e.businessOwnerJid && (0, _.createWid)(e.businessOwnerJid);
    if (!t) {
      return;
    }
    const n = this.get(t);
    const r = n && e.productId && n.msgProductCollection.get(e.productId);
    const i = n && e.productId ? n.productCollection.get(e.productId) : null;
    if ((i == null ? undefined : i.t) && i.t >= e.t) {
      return;
    }
    if (r == null ? undefined : r.fetchedFromServer) {
      return;
    }
    const a = (0, u.mapMsgToProductModel)(e);
    return super.add({
      id: t,
      afterCursor: undefined,
      _msgs: [a],
      stale: true,
      fetchedFromServer: !!i
    }, {
      merge: true
    });
  }
  _queryProduct(e) {
    var t = () => super.add;
    var n = this;
    let {
      catalogWid: r,
      productId: a,
      productMsgMediaData: s,
      width: c,
      height: d,
      shouldFetchComplianceFields: p,
      canLogQpl: f
    } = e;
    return (0, i.default)(function* () {
      const e = yield (0, l.queryProduct)(r, a, c, d, p, f);
      if (e.error === "NOT_FOUND") {
        const e = n.get(r);
        if (!(e == null)) {
          e.productCollection.remove(a);
        }
        return Promise.reject(new o.E404("CatalogCollection:findProduct:_queryProduct NOT_FOUND"));
      }
      if (!e.data) {
        return t().call(n, {
          id: r,
          afterCursor: undefined
        });
      }
      const {
        data: i
      } = e;
      if (!i.image_cdn_urls) {
        return Promise.reject((0, g.default)("CatalogCollection:findProduct:_queryProduct: could not find image_cdn_urls for product"));
      }
      const _ = (0, u.mapProductResponseToModel)(i, r);
      _.productMsgMediaData = s;
      const m = [_];
      return t().call(n, {
        id: r,
        afterCursor: undefined,
        _products: m,
        _msgs: m
      }, {
        merge: true
      });
    })();
  }
  findProduct(e) {
    let {
      catalogWid: t,
      productId: n,
      productMsgMediaData: r,
      shouldFetchComplianceFields: i,
      canLogQpl: a
    } = e;
    if (n) {
      return this._queryProduct({
        catalogWid: t,
        productId: n,
        productMsgMediaData: r,
        shouldFetchComplianceFields: i,
        canLogQpl: a
      });
    } else {
      return Promise.reject((0, g.default)("CatalogCollection:findProduct Received productId type " + (n === undefined ? "undefined" : "null")));
    }
  }
  _queryCatalog(e, t, n, r, a, o) {
    return (0, i.default)(function* () {
      const i = e ? e.index : 0;
      if (o) {
        p.QPL.markerPoint(o, "datasource_catalog_start");
      }
      const s = yield (0, l.queryCatalog)(t, n, 10, undefined, undefined, r, a);
      if (o) {
        p.QPL.markerPoint(o, "datasource_catalog_end");
      }
      if (!s.data.length) {
        return {
          id: t,
          afterCursor: ""
        };
      }
      const c = [];
      s.data.forEach(e => {
        if (e.image_cdn_urls) {
          c.push((0, u.mapProductResponseToModel)(e, t));
        }
      });
      return {
        id: t,
        afterCursor: s.paging.cursors.after,
        _products: c,
        fetchedFromServer: true,
        index: i + c.length
      };
    })();
  }
  _findImplCommon(e, t) {
    const n = this.get(e);
    const r = n && !n.stale ? n.afterCursor : undefined;
    return this._queryCatalog(n, e, r, undefined, undefined, t == null ? undefined : t.markerId);
  }
  findCarouselCatalog(e) {
    var t = () => super.add;
    var n = this;
    return (0, i.default)(function* () {
      const r = n.get(e);
      const i = (0, a.isString)(e) ? (0, _.createWid)(e) : e;
      if (r) {
        r.set({
          index: 0
        });
      }
      const o = yield n._queryCatalog(r, i, undefined, undefined, Boolean(f.ServerProps.shopsProductGrid));
      if (r) {
        r.markProductCollectionOld();
      }
      return t().call(n, o, {
        merge: true
      });
    })();
  }
  findNextProductPage(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      if (t === true) {
        (0, d.qplPointCatalogView)("datasource_start");
      }
      const r = yield n.update(e);
      if (t === true) {
        (0, d.qplPointCatalogView)("datasource_end");
      }
      return (Array.isArray(r) ? r[0] : r).productCollection.getProductModels();
    })();
  }
  findCollectionMembership(e, t) {
    var n = () => super.add;
    var r = this;
    return (0, i.default)(function* () {
      let i = r.get(e);
      const o = (0, a.isString)(e) ? (0, _.createWid)(e) : e;
      const s = i && !i.stale ? i.afterCursor : undefined;
      const l = yield r._queryCatalog(i, o, s, t);
      n().call(r, l, {
        merge: true
      });
      i = r.get(e);
      if (i) {
        i.stale = false;
      }
    })();
  }
  removeCatalog(e) {
    const t = this.get(e);
    if (t) {
      this.remove(t);
    } else {
      __LOG__(4, undefined, new Error())`Catalog data cleanup called on a non-existent catalogId`;
    }
  }
}
exports.CatalogCollectionImpl = m;
m.model = c.default;
m.staleCollection = true;
const h = new m();
exports.CatalogCollection = h;