Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNonZeroNumber = function (e) {
  return e != null && e !== 0 && !isNaN(e);
};