var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductMessageList = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./481173.js");
var o = require("./172949.js");
var s = require("./888627.js");
var l = require("./937356.js");
var u = require("./713464.js");
var c = require("./351053.js");
var d = r(require("./565754.js"));
var p = require("./530485.js");
var f = require("./500411.js");
var _ = require("./694630.js");
var g = require("./937001.js");
const m = ["ERROR", "SUCCESS"];
class h extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, a.prop)();
    this.catalogId = (0, a.prop)();
    this.title = (0, a.prop)();
    this.requiresDirectConnection = (0, a.prop)();
    this._productsLoadingStatus = (0, a.session)();
    this._productList = (0, a.session)();
    this._products = (0, a.session)();
  }
  initialize() {
    super.initialize();
    this.productCollection = u.CatalogCollection.gadd({
      id: this.catalogId
    }).productCollection;
    this._productsLoadingStatus = new Map();
    this.listenTo(this, "change:_products", this.triggerProductUpdate);
    this.triggerProductUpdate();
    this.listenTo(this.productCollection, "remove", this.triggerProductRemoved);
    this.listenTo(c.ChatCollection, "add", this.triggerChatAdded);
  }
  triggerProductRemoved(e) {
    (0, s.updateProductListHeaderImageRejected)(e, this.id);
  }
  triggerProductUpdate() {
    if (this._products != null) {
      this._products.forEach(e => {
        const t = this._getFetchStatus(e);
        this.setProductLoadingStatus(e.id, t);
        if (e.status === "DELETED") {
          this.triggerProductRemoved(e);
        }
        if (e.status !== "DELETED" && t !== "ERROR") {
          const t = (0, o.mapProductResponseToModel)(e, this.catalogId);
          if (t.reviewStatus === p.PRODUCT_REVIEW_STATUS.REJECTED) {
            this.triggerProductRemoved(t);
          }
          this.productCollection.add(t, {
            merge: true
          });
        }
      });
      this._products = undefined;
    }
  }
  triggerChatAdded(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (e.id.equals(t.catalogId) && (yield (0, l.isCypherNeeded)(t.catalogId))) {
        t.productCollection.reset();
        t._productsLoadingStatus = new Map();
      }
    })();
  }
  getNextProductBatchToLoad() {
    const e = this.getPageSize();
    const t = this._productList.productSections.reduce((e, t) => {
      let {
        products: n
      } = t;
      return [...e, ...n.map(e => {
        let {
          productId: t
        } = e;
        return t;
      }).filter(Boolean).filter(e => this.getProductLoadingStatus(e) === "NONE")];
    }, []).slice(0, e);
    t.forEach(e => this.setProductLoadingStatus(e, "PENDING"));
    return t;
  }
  getPageSize() {
    const e = g.ServerProps.webProductListMessagePageSize || _.PRODUCT_PAGE_SIZE;
    const t = this.getProductSize();
    if (t < e * 3) {
      return t;
    } else {
      return e * 2;
    }
  }
  getProductSize() {
    return this._productList.productSections.reduce((e, t) => {
      let {
        products: n
      } = t;
      return e + n.length;
    }, 0);
  }
  setProductLoadingStatus(e, t) {
    this._productsLoadingStatus.set(e, t);
  }
  getProductLoadingStatus(e) {
    return this._productsLoadingStatus.get(e) || "NONE";
  }
  getTotalProductsFetchedOrFailed() {
    return Array.from(this._productsLoadingStatus).filter(e => {
      let [t, n] = e;
      return m.includes(n);
    }).length;
  }
  getProductList() {
    return this._productList;
  }
  getSections() {
    return this._productList.productSections;
  }
  getSectionsCount() {
    return this._productList.productSections.reduce((e, t) => {
      let {
        title: n
      } = t;
      if (n != null && n !== "") {
        return e + 1;
      } else {
        return e;
      }
    }, 0);
  }
  isFetching() {
    let e = false;
    this._productsLoadingStatus.forEach(t => {
      if (t === "PENDING") {
        e = true;
      }
    });
    return e;
  }
  _getFetchStatus(e) {
    if (e.status !== f.INVALID_PRODUCT_TOKEN && e.image_cdn_urls) {
      return "SUCCESS";
    } else {
      return "ERROR";
    }
  }
}
h.Proxy = "product_list";
h.idClass = d.default;
const y = (0, a.defineModel)(h);
exports.ProductMessageList = y;