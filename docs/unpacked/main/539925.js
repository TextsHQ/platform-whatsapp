Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  var n;
  const r = t.toString();
  const o = a.CartCollection.findCart(r).cartItemCollection.get(e);
  if ((n = o == null ? undefined : o.quantity) !== null && n !== undefined) {
    return n;
  } else {
    return 0;
  }
};
var a = require("../app/290895.js");