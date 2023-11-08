var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCollectionNotification = function (e) {
  const t = a.CatalogCollection.get((0, o.getMeUser)().toString());
  if (t == null ? undefined : t.collections) {
    for (let n = 0; n < e.collectionIds.length; n++) {
      const r = t.collections.get(e.collectionIds[n]);
      if (r) {
        r.set(e.reviewStatuses[n]);
      }
    }
  }
  return Promise.resolve();
};
exports.handleProductNotification = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./713464.js");
var o = require("./459857.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = a.CatalogCollection.get((0, o.getMeUser)().toString());
    if (t) {
      const n = [];
      e.forEach(e => {
        n.push(t.refreshProduct(e));
      });
      yield Promise.all(n);
    }
  })).apply(this, arguments);
}