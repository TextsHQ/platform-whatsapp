var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOnCartClickWithLog = function (e, t, n) {
  return () => {
    e();
    (function (e, t) {
      h(e, "ACTION_CART_ICON_CLICK", (0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)));
    })(t, n);
  };
};
exports.logAddProductToCart = function (e, t, n, a) {
  const o = (0, l.getProductStatsInFetched)(e.catalogWid.toString(), a, e) || undefined;
  h(e.catalogWid.toString(), "ACTION_CART_ADD_PRODUCT", (0, r.default)((0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)), {}, {
    quantity: n,
    collectionStats: o
  }));
};
exports.logCartAbandon = function (e, t) {
  h(e, "ACTION_CART_ABANDON", (0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)));
};
exports.logCartListImpression = function (e, t) {
  h(e, "ACTION_CART_LIST_IMPRESSION", (0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)));
};
exports.logCartToastClick = function (e, t) {
  h(e, "ACTION_CART_SNACKBAR_CLICK", (0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)));
};
exports.logCreateNewCart = function (e, t, n, a) {
  const o = (0, l.getProductStatsInFetched)(e.catalogWid.toString(), n, e) || undefined;
  h(e.catalogWid.toString(), "ACTION_CREATE_CART", (0, r.default)((0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)), {}, {
    collectionStats: o,
    quantity: a
  }));
};
exports.logDeleteProduct = function (e, t, n) {
  const a = (0, l.getProductStatsInFetched)(e.catalogWid.toString(), n, e) || undefined;
  h(e.catalogWid.toString(), "ACTION_CART_DELETE_PRODUCT", (0, r.default)((0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)), {}, {
    collectionStats: a
  }));
};
exports.logEditProduct = function (e, t, n, a) {
  const o = (0, l.getProductStatsInFetched)(e.catalogWid.toString(), a, e) || undefined;
  h(e.catalogWid.toString(), "ACTION_CART_EDIT_PRODUCT", (0, r.default)((0, r.default)({}, (0, c.toDataForCatalogViewEvents)(t)), {}, {
    quantity: n,
    collectionStats: o
  }));
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/477627.js");
var i = require("../app/298471.js");
var u = require("../app/72696.js");
var s = require("../app/104209.js");
var c = require("../app/932523.js");
var d = require("../app/459857.js");
var f = require("../app/937789.js");
var p = require("../app/115879.js");
const m = ["bizPlatform", "collectionStats"];
function h(e, t, n) {
  const a = e === (0, d.getMeUser)().toString();
  const {
    bizPlatform: l,
    collectionStats: c
  } = n;
  const h = (0, o.default)(n, m);
  if (a && f.CATALOG_BIZ_ACTION[t] !== undefined) {
    new s.CatalogBizWamEvent((0, r.default)({
      catalogBizAction: f.CATALOG_BIZ_ACTION[t],
      collectionIndex: c == null ? undefined : c.collectionIndex,
      productIndex: c == null ? undefined : c.productIndex
    }, h)).commit();
  } else if (a || p.CATALOG_VIEW_ACTION[t] === undefined || !(0, u.isPSForCatalogViewEnabled)()) {
    __LOG__(3)`logCartAction: unsupported log action - ${t}`;
  } else {
    new i.BizCatalogViewWamEvent((0, r.default)((0, r.default)({
      catalogViewAction: p.CATALOG_VIEW_ACTION[t],
      catalogOwnerJid: e,
      bizPlatform: l
    }, c), h)).commit();
  }
}