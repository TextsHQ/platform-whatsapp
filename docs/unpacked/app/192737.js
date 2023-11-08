Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEffectiveNetworkType = function () {
  if (navigator.connection && typeof navigator.connection.effectiveType == "string") {
    return navigator.connection.effectiveType;
  }
  return null;
};