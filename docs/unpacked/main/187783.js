var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = o.CartCollection.findCart(e);
  n.cartItemCollection.remove(t);
  n.trigger("change:cartItemCollection");
  (0, r.default)(n);
  return n.itemCount;
};
var r = a(require("./879366.js"));
var o = require("../app/290895.js");