Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filteredCatch = function (e, t) {
  return n => {
    if (Array.isArray(e) ? e.some(e => n instanceof e) : n instanceof e) {
      return t(n);
    }
    throw n;
  };
};