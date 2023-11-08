var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderCollectionImpl = exports.OrderCollection = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./392125.js");
var s = require("./239795.js");
var l = r(require("./873969.js"));
var u = require("./27578.js");
var c = require("./974637.js");
var d = require("./486392.js");
var p = r(require("./143192.js"));
var f = require("./459857.js");
var _ = require("./669050.js");
class g extends o.BaseCollection {
  constructor(e, t) {
    super();
    this.width = 80;
    this.height = 80;
    if (e != null) {
      this.width = e;
    }
    if (t != null) {
      this.height = t;
    }
  }
  addOrder() {
    const e = (0, l.default)();
    const t = (0, f.getMeUser)();
    super.add({
      id: e,
      fetchedFromServer: false,
      sellerJid: (0, c.encodeJid)(t),
      createdAt: Math.round(new Date().getTime() / 1000),
      currency: (0, u.currencyForCountryShortcode)((0, d.getCountryShortcodeByPhone)(t.user)),
      products: [],
      tax: null,
      subtotal: null,
      total: null
    });
    return this.assertGet(e);
  }
  findOrder(e, t, n) {
    const r = this.get(e);
    if (r != null) {
      return Promise.resolve(r);
    } else {
      return this._queryOrder(e, t, n);
    }
  }
  _queryOrder(e, t, n) {
    var r = () => super.add;
    var o = this;
    return (0, a.default)(function* () {
      const a = yield (0, s.queryOrder)((0, _.createWid)(t), e, o.width, o.height, n);
      r().call(o, (0, i.default)({
        id: e,
        fetchedFromServer: true,
        sellerJid: t
      }, a));
      const l = o.get(e);
      if (l != null) {
        return Promise.resolve(l);
      }
    })();
  }
}
exports.OrderCollectionImpl = g;
g.model = p.default;
g.staleCollection = true;
const m = new g();
exports.OrderCollection = m;