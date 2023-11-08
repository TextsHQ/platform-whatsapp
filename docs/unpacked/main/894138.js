var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    product: t,
    context: n,
    collectionId: a
  } = e;
  const m = (0, d.default)(t);
  return p.default.createElement(s.default, {
    maxQuantity: t.maxAvailable,
    onAddOneClick: () => {
      const e = (0, c.getProductCatalogContext)(n);
      const {
        newCount: o,
        status: l,
        totalCartCount: i
      } = (0, r.addProductToCart)(t);
      if (l === r.AddToCartStatus.SUCCESS) {
        if (i === 1) {
          (0, u.logCreateNewCart)(t, e, a, i);
        }
        if (m === 0) {
          (0, u.logAddProductToCart)(t, e, o, a);
        } else if (m > 0) {
          (0, u.logEditProduct)(t, e, o, a);
        }
      }
    },
    onRemoveOneClick: () => {
      const e = (0, c.getProductCatalogContext)(n);
      const r = (0, l.default)(t.id, t.catalogWid);
      (0, i.default)(t, r - 1);
      if (m === 1) {
        const n = t.catalogWid.toString();
        const r = (0, o.default)(n, t.id.toString());
        (0, u.logDeleteProduct)(t, e, a);
        if (r === 0) {
          (0, u.logCartAbandon)(n, e);
        }
      } else if (m > 1) {
        (0, u.logEditProduct)(t, e, m - 1, a);
      }
    },
    quantity: m,
    quantityTitle: f.fbt._("Items in cart", null, {
      hk: "2zwAzN"
    })
  });
};
var r = require("./550234.js");
var o = a(require("./187783.js"));
var l = a(require("./539925.js"));
var i = a(require("./905221.js"));
var u = require("./957256.js");
var s = a(require("./763879.js"));
var c = require("../app/932523.js");
var d = a(require("./311613.js"));
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));