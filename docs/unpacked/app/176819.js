var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEBP_HEADER_SIZE = exports.FOUR = exports.Chunk = exports.CHUNK_HEADER_SIZE = undefined;
exports.findWebpChunk = l;
exports.findWebpMetadata = function (e) {
  if (!u(e)) {
    __LOG__(2)`Sticker file not extended format.`;
    return null;
  }
  const t = l(e, o.EXIF);
  if (!t) {
    return null;
  }
  const n = e.slice(t.position, t.position + t.size);
  let r;
  let i;
  for (let e = n.byteLength; e > 0; --e) {
    if (i == null && n[e] === s) {
      i = e;
    } else if (i != null && n[e] === 0) {
      r = e + 1;
      break;
    }
  }
  if (r == null || i == null) {
    __LOG__(3)`JSON not found in sticker file`;
    return null;
  }
  return {
    position: t.position + r,
    size: i - r + 1
  };
};
exports.isAnimatedWebp = function (e) {
  const t = new Uint8Array(e);
  return u(t) && (t[20] & 2) != 0;
};
exports.isExtendedFile = u;
exports.littleEndianToNumber = c;
exports.numberToLittleEndian = function (e) {
  const t = new i.Binary();
  t.writeUint32(e, true);
  return t.readByteArray();
};
exports.stringToUint8 = d;
var i = require("./904704.js");
var a = r(require("./735821.js"));
const o = require("../vendor/76672.js")({
  VP8X: "VP8X",
  ANMF: "ANMF",
  EXIF: "EXIF",
  XMP: "XMP "
});
exports.Chunk = o;
exports.WEBP_HEADER_SIZE = 12;
exports.CHUNK_HEADER_SIZE = 8;
exports.FOUR = 4;
const s = "}".charCodeAt(0);
function l(e, t) {
  const n = d(t);
  let r = 0;
  for (r += 12; r < e.byteLength;) {
    const t = e.slice(r, r + 8);
    const i = t.slice(0, 4);
    let o = c(t.slice(4, 8));
    if (o % 2 != 0) {
      o += 1;
    }
    if ((0, a.default)(i, n)) {
      return {
        position: r,
        size: o + 4 + 4
      };
    }
    r += 8 + o;
  }
  return null;
}
function u(e) {
  const t = e.slice(12, 16);
  return (0, a.default)(t, d(o.VP8X));
}
function c(e) {
  return e.reduce((e, t, n) => e + (t << n * 8), 0);
}
function d(e) {
  const t = new i.Binary();
  t.writeString(e);
  return t.readByteArray();
}