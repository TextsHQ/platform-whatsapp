function n(e, t) {
  return e[t];
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFloatFromStylesProp = function (e, t) {
  return parseFloat(n(e, t));
};
exports.getIntFromStylesProp = function (e, t) {
  return parseInt(n(e, t), 10);
};