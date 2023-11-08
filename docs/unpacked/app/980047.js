Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDBEntry = function (e, t, n, r, i) {
  return {
    ftsRowId: e,
    id: t,
    chatId: n,
    timestamp: r,
    prefixes: i
  };
};
exports.buildEntry = function (e, t, n, r) {
  return {
    id: e,
    chatId: t,
    timestamp: n,
    prefixes: r
  };
};