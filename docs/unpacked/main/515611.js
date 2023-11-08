Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSafeDuration = function (e) {
  const t = e.duration;
  if (!Number.isFinite(t)) {
    return null;
  }
  return t;
};