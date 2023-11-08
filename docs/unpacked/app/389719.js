var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWebpMetadata = function (e, t) {
  const n = new Uint8Array(e);
  if (!(0, a.isExtendedFile)(n)) {
    throw (0, s.default)("Not extended");
  }
  const r = function (e) {
    const t = new TextEncoder();
    const n = JSON.stringify(e);
    const r = t.encode(n);
    const o = function (e) {
      return (0, i.concatTypedArrays)(Uint8Array, [(0, a.stringToUint8)("II"), new Uint8Array([42, 0]), (0, a.numberToLittleEndian)(8), new Uint8Array([1, 0]), (0, a.stringToUint8)("AW"), new Uint8Array([7, 0]), (0, a.numberToLittleEndian)(e.byteLength), (0, a.numberToLittleEndian)(22), e]);
    }(r);
    const s = [l(a.Chunk.EXIF, o.byteLength), o];
    if (r.byteLength % 2 != 0) {
      s.push(new Uint8Array([0]));
    }
    return (0, i.concatTypedArrays)(Uint8Array, s);
  }((0, o.toRawWebpMetadata)(t));
  const u = (0, i.concatTypedArrays)(Uint8Array, [n, r]);
  u.set((0, a.numberToLittleEndian)(u.byteLength - 8), 4);
  return u.buffer;
};
var i = require("./786702.js");
var a = require("./176819.js");
var o = require("./612193.js");
var s = r(require("./556869.js"));
function l(e, t) {
  return (0, i.concatTypedArrays)(Uint8Array, [(0, a.stringToUint8)(e), (0, a.numberToLittleEndian)(t)]);
}