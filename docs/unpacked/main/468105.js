Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearNewsletterPreviewCache = function () {
  a.clear();
};
exports.clearPreviewCache = function () {
  n.clear();
};
exports.getNewsletterPreviewCache = function () {
  return a;
};
exports.getPreviewCache = function () {
  return n;
};
const n = new Map();
const a = new Map();