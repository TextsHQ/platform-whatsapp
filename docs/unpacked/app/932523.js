Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildProductCatalogContext = a;
exports.getProductCatalogContext = o;
exports.getProductCatalogSessionId = function (e) {
  return o(e).session.toString();
};
exports.toDataForCatalogViewEvents = function (e) {
  return {
    catalogSessionId: e.session.toString(),
    bizPlatform: e.bizPlatform,
    catalogEntryPoint: e.entryPoint
  };
};
var r = require("./242677.js");
var i = require("./618112.js");
function a() {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new r.ProductCatalogSession();
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i.BIZ_PLATFORM.UNKNOWN;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  return {
    type: "product_catalog",
    session: e,
    entryPoint: n,
    bizPlatform: t
  };
}
function o(e) {
  if (e.type === "product_catalog") {
    return e;
  } else {
    return a(new r.ProductCatalogSession(true));
  }
}