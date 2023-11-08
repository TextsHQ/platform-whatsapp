Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderDetailProductLabel = function (e) {
  return e.filter(Boolean).slice(0, 10).map(e => e.name).join(", ");
};