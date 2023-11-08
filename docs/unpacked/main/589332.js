Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = function (e) {
  if (e == null) {
    return [];
  }
  if (Array.isArray(e)) {
    return [...e];
  }
  return [e];
};