Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const n = new Uint8Array(e);
  const a = (t = (0, i.findWebpChunk)(n, i.Chunk.EXIF)) !== null && t !== undefined ? t : (0, i.findWebpChunk)(n, i.Chunk.XMP);
  if (a == null) {
    return (0, r.sha256Base64)(e);
  }
  const o = n.slice(0, a.position);
  const s = o.byteLength - i.CHUNK_HEADER_SIZE;
  o.set((0, i.numberToLittleEndian)(s), i.FOUR);
  return (0, r.sha256Base64)(o);
};
var r = require("./517301.js");
var i = require("./176819.js");