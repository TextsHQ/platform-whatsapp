var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleCollectionDataSource = exports.CollectionsDataSource = exports.CollectionsContentDataSource = exports.CatalogWithCollectionsDataSource = exports.CatalogListItemScrollHelper = undefined;
exports.getProductStatsInFetched = function (e, t, n) {
  const r = o.CatalogCollection.get(e);
  let i;
  let s;
  if (!r) {
    return;
  }
  if (!t && n) {
    const e = r.productCollection.get(n.id);
    i = e && r.productCollection.indexOf(e);
    return {
      productId: n.id.toString(),
      productIndex: (0, a.isNumber)(i) && i > -1 ? i.toString() : undefined
    };
  }
  if (t) {
    const e = t && r.collections.get(t);
    s = e && r.collections.indexOf(e);
    const a = n && (e == null ? undefined : e.productCollection.get(n.id));
    i = a && (e == null ? undefined : e.productCollection.indexOf(a));
  }
  return {
    collectionId: t || "",
    productId: n == null ? undefined : n.id.toString(),
    collectionIndex: (0, a.isNumber)(s) && s > -1 ? s.toString() : undefined,
    productIndex: (0, a.isNumber)(i) && i > -1 ? i.toString() : undefined
  };
};
var i = r(require("../vendor/348926.js"));
var a = require("./724976.js");
var o = require("./713464.js");
var s = require("./914368.js");
var l = require("./316348.js");
var u = require("./555622.js");
var c = require("./459857.js");
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = e.getData().length || 0;
    const r = !e.getCanLoadMore() || !f(n, e.listItemHeight);
    const i = (0, c.getMaybeMeUser)();
    if (t) {
      u.QPL.markerAnnotate(t, {
        bool: {
          IsCached: r,
          IsConsumer: !i.equals(e.catalog.id)
        }
      });
    }
    if (r) {
      return true;
    }
    yield e.loadMore(true);
    return !f(e.getData().length || 0, e.listItemHeight) || e.loadInitialItems();
  })).apply(this, arguments);
}
exports.SingleCollectionDataSource = class {
  constructor(e, t, n, r) {
    var i;
    this.loading = null;
    this.catalog = e;
    this.collectionId = t;
    this.forCatalogManager = n;
    this.listItemHeight = r;
    if (t) {
      this.canLoadMoreCollectionItems = !(e.collections.length > 0) || ((i = this.catalog.collections.get(t)) === null || i === undefined ? undefined : i.afterCursor) !== "";
    } else {
      this.canLoadMoreAllItems = !(e.productCollection.length > 0) || !!this.catalog.afterCursor;
    }
  }
  loadMore(e) {
    if (this.loading) {
      return this.loading;
    }
    if (!this.getCanLoadMore()) {
      return Promise.resolve();
    }
    const t = this.collectionId;
    if (t) {
      const n = e ? l.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL : undefined;
      this.loading = this.catalog.collections.findCollectionProducts(this.catalog.id, t, false, n).then(() => {
        var e;
        this.canLoadMoreCollectionItems = !!((e = this.catalog.collections.get(t)) === null || e === undefined ? undefined : e.afterCursor);
        this.loading = null;
      });
    } else {
      this.loading = o.CatalogCollection.update(this.catalog.id).then(() => {
        this.canLoadMoreAllItems = !!this.catalog.afterCursor;
        this.loading = null;
      });
    }
    return this.loading;
  }
  loadInitialItems() {
    return d(this, l.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL);
  }
  getCanLoadMore() {
    return this.canLoadMoreCollectionItems || this.canLoadMoreAllItems;
  }
  getData() {
    const e = this.collectionId;
    let t;
    var n;
    if (e) {
      t = ((n = this.catalog.collections.get(e)) === null || n === undefined ? undefined : n.productCollection.getProductModels(this.forCatalogManager)) || [];
    } else {
      t = this.catalog.productCollection.getProductModels(this.forCatalogManager) || [];
    }
    return t.map(e => ({
      product: e,
      collection: undefined
    }));
  }
};
exports.CatalogWithCollectionsDataSource = class {
  constructor(e, t, n, r) {
    this.loading = null;
    this.catalog = e;
    this.forCatalogManager = t;
    this.listItemHeight = n;
    this.canLoadMoreCollections = !(e.collections.length > 0) || !!this.catalog.collections.afterCursor;
    this.canLoadMoreCatalog = !(e.productCollection.length > 0) || !!this.catalog.afterCursor;
    this.canLogQpl = r;
  }
  loadMore(e) {
    if (this.loading) {
      return this.loading;
    }
    if (!this.getCanLoadMore()) {
      return Promise.resolve();
    }
    if (this.canLoadMoreCollections) {
      const t = this.canLogQpl && e === true ? l.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : undefined;
      this.loading = this.catalog.collections.findCollectionsList(this.catalog.id, 3, this.forCatalogManager, t).then(() => {
        this.canLoadMoreCollections = !!this.catalog.collections.afterCursor;
        this.loading = null;
      });
    } else {
      this.loading = o.CatalogCollection.update(this.catalog.id).then(() => {
        this.canLoadMoreCatalog = !!this.catalog.afterCursor;
        this.loading = null;
      });
    }
    return this.loading;
  }
  loadInitialItems() {
    return d(this, this.canLogQpl ? l.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : undefined);
  }
  getCanLoadMore() {
    return this.canLoadMoreCollections || this.canLoadMoreCatalog;
  }
  getData() {
    var e = this;
    const t = this.catalog.collections.getCollectionModels(this.forCatalogManager);
    const n = t.length > 0;
    const r = t.reduce(function () {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      let n = arguments.length > 1 ? arguments[1] : undefined;
      t.push({
        collection: n,
        product: undefined
      });
      const r = n.productCollection.getProductModels(e.forCatalogManager) || [];
      if (r.length > 3) {
        r.length = 3;
      }
      t.push(...r.map(e => ({
        product: e,
        collection: n
      })));
      return t;
    }, []);
    if (this.canLoadMoreCollections) {
      return r;
    }
    if (n) {
      r.push({
        allItems: {
          totalItemsCount: r.length
        }
      });
    }
    const i = this.catalog.productCollection.getProductModels(this.forCatalogManager).map(e => ({
      product: e,
      collection: undefined
    }));
    r.push(...i);
    return r;
  }
};
exports.CollectionsDataSource = class {
  constructor(e, t, n, r) {
    this.loading = null;
    this.canLoadMoreCollections = true;
    this.catalog = e;
    this.forCatalogManager = t;
    this.listItemHeight = n;
    this.canLogQpl = r;
  }
  loadMore(e) {
    if (this.loading) {
      return this.loading;
    }
    if (!this.getCanLoadMore()) {
      return Promise.resolve();
    }
    if (this.canLoadMoreCollections) {
      const t = this.canLogQpl && e === true ? l.QuickLogMarkerId.WHATSAPP_COLLECTIONS_MANAGEMENT_VIEW : undefined;
      this.loading = this.catalog.collections.findCollectionsList(this.catalog.id, 3, this.forCatalogManager, t).then(() => {
        this.canLoadMoreCollections = !!this.catalog.collections.afterCursor;
        this.loading = null;
      });
    }
    return this.loading || Promise.resolve();
  }
  loadInitialItems() {
    return d(this, this.canLogQpl ? l.QuickLogMarkerId.WHATSAPP_COLLECTIONS_MANAGEMENT_VIEW : undefined);
  }
  getCanLoadMore() {
    return this.canLoadMoreCollections;
  }
  resetData() {
    var e;
    if ((e = this.catalog) === null || e === undefined ? undefined : e.collections) {
      this.catalog.collections.reset();
      this.catalog.collections.afterCursor = "";
    }
    this.canLoadMoreCollections = true;
  }
  getData() {
    return this.catalog.collections.getCollectionModels(this.forCatalogManager).map(e => ({
      collection: e,
      product: undefined
    }));
  }
};
function f(e, t) {
  return e * t < window.innerHeight;
}
exports.CollectionsContentDataSource = class {
  constructor(e, t, n) {
    this.loading = null;
    this.canLoadMore = true;
    this.catalog = e;
    this.catalog.stale = true;
    this.catalog.markProductCollectionOld();
    this.catalog.productCollection.reset();
    this.listItemHeight = t;
    this.collectionId = n;
  }
  loadMore() {
    if (this.loading) {
      return this.loading;
    } else if (this.getCanLoadMore()) {
      if (this.canLoadMore) {
        if (this.collectionId) {
          this.loading = o.CatalogCollection.findCollectionMembership(this.catalog.id, this.collectionId).then(() => {
            this.canLoadMore = !!this.catalog.afterCursor;
            this.loading = null;
          });
        } else {
          this.loading = o.CatalogCollection.update(this.catalog.id).then(() => {
            this.canLoadMore = !!this.catalog.afterCursor;
            this.loading = null;
          });
        }
      }
      return this.loading || Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  loadInitialItems() {
    return d(this);
  }
  getCanLoadMore() {
    return this.canLoadMore;
  }
  getData() {
    return this.catalog.productCollection.getProductModels(true).map(e => ({
      product: e,
      collection: undefined
    }));
  }
};
exports.CatalogListItemScrollHelper = class {
  constructor(e) {
    this.dataSource = e;
  }
  isScrollAtBottom(e) {
    return e.scrollTop + s.SCROLL_FUDGE >= e.scrollHeight - e.clientHeight;
  }
  willLoadMore(e) {
    return Boolean(this.dataSource.loading || this.isScrollAtBottom(e));
  }
  onScroll(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      if (n.dataSource.loading) {
        yield n.dataSource.loading;
        return true;
      } else {
        return !!n.isScrollAtBottom(t) && (yield n.dataSource.loadMore(), true);
      }
    })();
  }
};