var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./481173.js");
var s = require("./739071.js");
var l = require("./172949.js");
var u = require("./587591.js");
var c = require("./530485.js");
var d = require("./517086.js");
var p = r(require("./124928.js"));
class f extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, o.prop)();
    this.afterCursor = (0, o.prop)();
    this.index = (0, o.prop)();
    this.hasCatalogCategories = (0, o.prop)();
    this.fetchedFromServer = (0, o.session)();
    this._products = (0, o.session)();
    this._msgs = (0, o.session)();
  }
  initialize() {
    super.initialize();
    this.productCollection = new c.ProductCollection();
    this.msgProductCollection = new c.ProductCollection();
    this.collections = new u.ProductCollCollection();
    this.listenTo(this, "change:_products", this.triggerProductUpdate);
    this.listenTo(this, "change:_msgs", this.triggerMsgUpdate);
    this.triggerProductUpdate();
    this.triggerMsgUpdate();
  }
  triggerProductUpdate() {
    if (this._products) {
      this.productCollection.add(this._products, {
        merge: true
      });
    }
    this._products = undefined;
  }
  triggerMsgUpdate() {
    if (this._msgs) {
      this.msgProductCollection.add(this._msgs, {
        merge: true
      });
    }
    this._msgs = undefined;
  }
  markProductCollectionOld() {
    this.productCollection.forEach(e => e.markOld());
  }
  addProduct(e) {
    var t = this;
    return (0, i.default)(function* () {
      const {
        id: n
      } = t;
      const r = yield (0, s.addProduct)(e);
      const i = t.productCollection.at(0);
      r.catalogWid = n;
      r.index = i ? i.index - 1 : 0;
      const o = t.productCollection.add(r, {
        merge: true,
        at: 0
      })[0];
      return (0, a.default)(o, "addedProduct");
    })();
  }
  editProduct(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield (0, s.editProduct)(e);
      const r = t.productCollection.add(n, {
        merge: true
      })[0];
      if (t.collections) {
        t.collections.forEach(t => {
          if (t.productCollection.get(e.id)) {
            t.productCollection.add(n, {
              merge: true
            });
          }
        });
      }
      return (0, a.default)(r, "editedProduct");
    })();
  }
  refreshProduct(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = t.productCollection.get(e);
      if (n) {
        n.stale = true;
      }
      const r = yield (0, s.queryProduct)(t.id, e);
      if (r.data != null) {
        const i = (0, l.mapProductResponseToModel)(r.data, t.id);
        if (n) {
          t.productCollection.add(i, {
            merge: true
          });
        }
        if (t.collections) {
          t.collections.forEach(t => {
            if (t.productCollection.get(e)) {
              t.productCollection.add(i, {
                merge: true
              });
            }
          });
        }
      }
    })();
  }
  pullProduct(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = yield (0, s.queryProduct)(n.id, e, undefined, undefined, undefined, t);
      if (r.error === "NOT_FOUND") {
        n.productCollection.remove(e);
      }
      if (r.data != null) {
        const e = new d.Product((0, l.mapProductResponseToModel)(r.data, n.id));
        n.updateProduct(e);
      }
    })();
  }
  updateProduct(e) {
    this.productCollection.add(e, {
      merge: false
    });
  }
  getCollection() {
    return require("./713464.js").CatalogCollection;
  }
}
f.Proxy = "catalog";
f.idClass = p.default;
var _ = (0, o.defineModel)(f);
exports.default = _;