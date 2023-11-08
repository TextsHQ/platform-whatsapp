Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, r.useMemo)(() => (e => {
    var t;
    var n;
    const r = (t = (n = e.catalogWid) === null || n === undefined ? undefined : n.toString()) !== null && t !== undefined ? t : null;
    if (r) {
      return a.CartCollection.findCart(r);
    } else {
      return null;
    }
  })(e), [e]);
  const [n, i] = (0, r.useState)(l(e, t));
  (0, o.useListener)(t, "change:cartItemCollection", () => i(l(e, t)));
  return n;
};
var a = require("../app/290895.js");
var r = require("../vendor/667294.js");
var o = require("../app/808446.js");
const l = (e, t) => {
  var n;
  var a;
  const r = (n = t == null ? undefined : t.cartItemCollection.get(e.id)) !== null && n !== undefined ? n : null;
  if ((a = r == null ? undefined : r.get("quantity")) !== null && a !== undefined) {
    return a;
  } else {
    return 0;
  }
};