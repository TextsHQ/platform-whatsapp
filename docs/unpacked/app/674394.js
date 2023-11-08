Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLayerId = function (e) {
  const t = Math.random().toString(36).substring(2, 10);
  return `${e}-${t}`;
};