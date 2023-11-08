var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanJPEG = function (e) {
  const t = new i.Binary(e);
  const n = new i.Binary(e);
  const r = new i.Binary();
  let K;
  let W = false;
  let V = false;
  let H = false;
  let $ = false;
  const z = {
    version: 257,
    densityUnits: 0,
    xDensity: 1,
    yDensity: 1
  };
  if (t.readUint8() !== 255 || t.readUint8() !== S) {
    throw (0, a.default)("SOI marker not at the start of the file.");
  }
  n.advance(2);
  let q;
  for (; q != null || t.size();) {
    if (q === undefined) {
      const e = t.readUint8();
      if (e !== 255) {
        throw (0, a.default)(`0x${e.toString(16)} is not a marker prefix.`);
      }
      q = t.readUint8();
    }
    switch (q) {
      case b:
        if (V) {
          K = t.readUint16();
          n.advance(K + 2);
          t.advance(t.size() - n.size());
        } else {
          K = t.readUint16();
          if (t.readString(5) !== "JFIF\0") {
            throw (0, a.default)("APP0 marker missing 'JFIF' magic bytes.");
          }
          $ = true;
          z.version = t.readUint16();
          z.densityUnits = t.readUint8();
          z.xDensity = t.readUint16();
          z.yDensity = t.readUint16();
          n.advance(K + 2);
          t.advance(t.size() - n.size());
          V = true;
        }
        break;
      case T:
        {
          if (!H && !$) {
            throw (0, a.default)("Missing magic bytes marker.");
          }
          let e;
          let i;
          t.advance(t.readUint16() - 2);
          let o = t.readUint8();
          for (; t.size();) {
            i = t.readUint8();
            e = o === 255 && !Y.includes(i);
            if (e) {
              q = i;
              break;
            }
            o = i;
          }
          r.writeByteArray(n.readByteArray(n.size() - t.size() - 2));
          continue;
        }
      case C:
        K = t.readUint16();
        if (!H && t.readString(6) !== "Exif\0\0") {
          throw (0, a.default)("APP1 marker missing 'EXIF' magic bytes.");
        }
        H = true;
        n.advance(K + 2);
        t.advance(t.size() - n.size());
        break;
      case x:
      case j:
        if (!H && !$) {
          throw (0, a.default)("Missing magic bytes marker.");
        }
        K = t.readUint16();
        n.advance(K + 2);
        t.advance(t.size() - n.size());
        break;
      case v:
        if (!H && !$) {
          throw (0, a.default)("Missing magic bytes marker.");
        }
        W = true;
        r.writeByteArray(n.readByteArray(2));
        break;
      case o:
      case s:
      case l:
      case u:
      case d:
      case p:
      case f:
      case _:
      case g:
      case m:
      case h:
      case y:
      case E:
      case M:
      case c:
      case A:
        if (!H && !$) {
          throw (0, a.default)("Missing magic bytes marker.");
        }
        K = t.readUint16();
        r.writeByteArray(n.readByteArray(2 + K));
        t.advance(t.size() - n.size());
        break;
      case P:
      case O:
      case I:
      case R:
      case N:
      case D:
      case w:
      case L:
      case k:
      case G:
      case U:
      case B:
      case F:
        throw (0, a.default)(`Received unexpected APP marker 0x${q.toString(16)}`);
      default:
        throw (0, a.default)(`Did not understand marker: 0x${q.toString(16)}`);
    }
    q = undefined;
    if (W) {
      break;
    }
  }
  if (!W) {
    throw (0, a.default)("No EOI tag found.");
  }
  const J = function (e) {
    const t = new i.Binary();
    t.writeBytes(255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0);
    t.writeUint16(e.version);
    t.writeUint8(e.densityUnits);
    t.writeUint16(e.xDensity);
    t.writeUint16(e.yDensity);
    t.writeBytes(0, 0);
    return t.readByteArray();
  }(z);
  return new Blob([J, r.readByteArray()], {
    type: "image/jpeg"
  });
};
var i = require("./904704.js");
var a = r(require("./556869.js"));
const o = 192;
const s = 193;
const l = 194;
const u = 195;
const c = 196;
const d = 197;
const p = 198;
const f = 199;
const _ = 201;
const g = 202;
const m = 203;
const h = 205;
const y = 206;
const E = 207;
const S = 216;
const v = 217;
const T = 218;
const M = 219;
const A = 221;
const b = 224;
const C = 225;
const P = 226;
const O = 227;
const I = 228;
const R = 229;
const N = 230;
const D = 231;
const w = 232;
const L = 233;
const k = 234;
const G = 235;
const U = 236;
const x = 237;
const B = 238;
const F = 239;
const j = 254;
const Y = [0, 208, 209, 210, 211, 212, 213, 214, 215];