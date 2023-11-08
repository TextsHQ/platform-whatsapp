Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCatalogLink = function (e) {
  return `https://wa.me/c/${e}`;
};
exports.createProductLink = function (e, t) {
  return `https://wa.me/p/${t}/${e}`;
};