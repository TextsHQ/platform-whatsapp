Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./392125.js");
var i = require("./163755.js");
var a = require("./772358.js");
class o extends r.BaseCollection {
  constructor() {
    super(...arguments);
    this.hasProductBefore = true;
  }
  delete() {
    super.delete();
    this.stopListening();
    this.reset();
  }
  queryProducts(e) {
    const t = e.msgs;
    this.hasProductBefore = false;
    const n = t.filter(e => (0, i.getAsProduct)(e) != null);
    if (n.length === 0) {
      this.trigger("products_loaded");
    } else {
      this.add(n, {
        at: 0
      });
    }
    return Promise.resolve();
  }
}
exports.default = o;
o.model = a.Msg;
o.comparator = (e, t) => e.t - t.t;