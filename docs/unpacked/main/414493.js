Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopEvent = function (e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
};
exports.stopPropagation = function (e) {
  if (e) {
    e.stopPropagation();
  }
};