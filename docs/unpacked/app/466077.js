var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductMessageListCollectionImpl = exports.ProductMessageListCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./739071.js");
var s = require("./403537.js");
var l = require("./669050.js");
class u extends a.BaseCollection {
  constructor() {
    super(...arguments);
    this.findQueryImpl = e => this.findImpl(e).then(e => [e]);
    this.findImpl = (e, t) => {
      const n = this.get(e);
      if (n == null) {
        return Promise.resolve({
          id: e
        });
      } else {
        return this._queryProductList(n, t == null ? undefined : t.markerId);
      }
    };
  }
  _queryProductList(e, t) {
    return (0, i.default)(function* () {
      const n = e.catalogId;
      const r = yield (0, o.queryProductList)(n, e.getNextProductBatchToLoad(), undefined, undefined, t);
      return {
        id: e.id,
        _products: r
      };
    })();
  }
  getOrAdd(e, t, n, r, i) {
    let a = this.get(e);
    if (a != null) {
      return a;
    }
    if (r == null) {
      return null;
    }
    const o = (0, l.createWid)(r);
    a = this.add({
      id: e,
      catalogId: o,
      _productList: t,
      title: i,
      requiresDirectConnection: n
    })[0];
    if (a != null) {
      return a;
    } else {
      return null;
    }
  }
}
exports.ProductMessageListCollectionImpl = u;
u.model = s.ProductMessageList;
u.staleCollection = true;
const c = new u();
exports.ProductMessageListCollection = c;