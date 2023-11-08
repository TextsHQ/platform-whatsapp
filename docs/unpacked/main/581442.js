var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogManagementFlowLoadable = undefined;
exports.createCatalogManagementFlowObject = M;
exports.openCatalogManagementFlow = function (e, t) {
  M((n, a) => {
    const o = (0, m.buildProductCatalogContext)(new h.ProductCatalogSession(), (0, i.getMaybeBizPlatformForLogging)(n.toString()), t);
    u.DrawerManager.openDrawerLeft(_.default.createElement(C, {
      catalog: a,
      catalogId: n,
      product: e
    }), (0, r.default)({
      newDrawerContext: o,
      focusType: c.FocusType.TABBABLE
    }, b));
  });
};
exports.requireBundle = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/713464.js");
var i = require("./834110.js");
var u = require("../app/900316.js");
var s = a(require("../app/97359.js"));
var c = require("../app/299950.js");
var d = a(require("./205106.js"));
var f = a(require("./918546.js"));
var p = a(require("./544142.js"));
var m = require("../app/932523.js");
var h = require("../app/242677.js");
var g = require("../app/454905.js");
var E = require("../app/459857.js");
var v = require("../vendor/548360.js");
var _ = a(require("../vendor/667294.js"));
const y = (0, d.default)((0, o.default)(function* () {
  const e = yield Promise.all([require.e(8295), require.e(1702), require.e(9488), require.e(2790), require.e(275)]).then(require.bind(require, 501685));
  return (0, s.default)(e);
}), "CatalogManagementFlow");
exports.requireBundle = y;
const C = (0, f.default)({
  loader: y,
  loading: e => _.default.createElement(p.default, {
    title: v.fbt._("Catalog", null, {
      hk: "3QDkTE"
    }),
    error: Boolean(e.error)
  })
});
exports.CatalogManagementFlowLoadable = C;
const b = (0, g.topMenuRedesignEnabled)() && {
  transition: "pop-drawer-fast"
};
function M(e) {
  const t = (0, E.getMeUser)();
  const n = l.CatalogCollection.get(t);
  if (n == null) {
    l.CatalogCollection.find(t).then(n => {
      e(t, n);
    }).catch(() => {
      e(t);
    });
  } else {
    n.stale = true;
    n.markProductCollectionOld();
    e(t, n);
  }
}