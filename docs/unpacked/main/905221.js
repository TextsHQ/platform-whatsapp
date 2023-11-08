var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = e.catalogWid.toString();
  const a = o.CartCollection.findCart(n);
  const l = a.cartItemCollection.get(e.id);
  if (!(l == null)) {
    l.set("quantity", t);
  }
  a.trigger("change:cartItemCollection");
  (0, r.default)(a);
};
var r = a(require("./879366.js"));
var o = require("../app/290895.js");