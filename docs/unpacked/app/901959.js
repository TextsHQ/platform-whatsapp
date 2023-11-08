Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaKeyCache = undefined;
exports.shouldUseMediaKeyCache = function () {
  return true;
};
const r = {
  sizeLimit: 10,
  getSize: () => 1
};
const i = new (require("./253972.js").LruCache)(r);
exports.MediaKeyCache = i;