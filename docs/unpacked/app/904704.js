var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Binary = undefined;
exports.longFitsInDouble = f;
exports.numUtf8Bytes = p;
exports.parseInt64OrThrow = V;
exports.parseUint64OrThrow = H;
var i = r(require("./415227.js"));
var a = require("./390934.js");
const o = 65533;
const s = new Uint8Array(10);
const l = new Uint8Array(0);
class u {
  constructor() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    this._buffer = new Uint8Array(0);
    this._readEndIndex = 0;
    this._writeIndex = 0;
    this.write = function () {
      for (let t = 0; t < arguments.length; t++) {
        const n = t < 0 || arguments.length <= t ? undefined : arguments[t];
        if (typeof n == "string") {
          e.writeString(n);
        } else if (typeof n == "number") {
          e.writeUint8(n);
        } else if (n instanceof u) {
          e.writeBinary(n);
        } else if (n instanceof ArrayBuffer) {
          e.writeBuffer(n);
        } else if (n instanceof Uint8Array) {
          e.writeByteArray(n);
        }
      }
    };
    if (t instanceof ArrayBuffer) {
      this._buffer = new Uint8Array(t);
      this._readEndIndex = this._writeIndex = t.byteLength;
    } else if (t instanceof Uint8Array) {
      this._buffer = t;
      this._readEndIndex = this._writeIndex = t.length;
    }
    this._bytesTrashed = 0;
    this._earliestIndex = this._readIndex = 0;
    this._view = null;
    this._littleEndian = n;
    this._hiddenReads = 0;
    this._hiddenWrites = 0;
  }
  size() {
    return this._readEndIndex - this._readIndex;
  }
  peek(e, t) {
    this._hiddenReads++;
    const n = this._readIndex;
    const r = this._bytesTrashed;
    try {
      return e(this, t);
    } finally {
      this._hiddenReads--;
      this._readIndex = n - (this._bytesTrashed - r);
    }
  }
  advance(e) {
    this._shiftReadOrThrow(e);
  }
  readWithViewParser(e, t, n, r) {
    return t(this._getView(), this._shiftReadOrThrow(e), e, n, r);
  }
  readWithBytesParser(e, t, n, r) {
    return t(this._buffer, this._shiftReadOrThrow(e), e, n, r);
  }
  readUint8() {
    return _(this, 1, m, false);
  }
  readInt8() {
    return _(this, 1, m, true);
  }
  readUint16() {
    return _(this, 2, h, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._littleEndian);
  }
  readInt32() {
    return _(this, 4, y, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._littleEndian);
  }
  readUint32() {
    return _(this, 4, E, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._littleEndian);
  }
  readInt64() {
    return _(this, 8, S, V, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._littleEndian);
  }
  readUint64() {
    return _(this, 8, S, H, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._littleEndian);
  }
  readLong(e) {
    return _(this, 8, S, e, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian);
  }
  readFloat32() {
    return _(this, 4, v, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._littleEndian);
  }
  readFloat64() {
    return _(this, 8, T, arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._littleEndian);
  }
  readVarInt(e) {
    const t = g(this, 0, M, this.size());
    return g(this, t, A, e);
  }
  readBuffer() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.size();
    if (e === 0) {
      return new ArrayBuffer(0);
    } else {
      return g(this, e, b);
    }
  }
  readByteArray() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.size();
    if (e === 0) {
      return new Uint8Array(0);
    } else {
      return g(this, e, C);
    }
  }
  readBinary() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.size();
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian;
    if (e === 0) {
      return new u(undefined, t);
    }
    const n = g(this, e, C);
    return new u(n, t);
  }
  indexOf(e) {
    if (e.length === 0) {
      return 0;
    }
    const t = this._buffer;
    const n = this._readEndIndex;
    const r = this._readIndex;
    let i = 0;
    let a = r;
    for (let o = r; o < n; o++) {
      if (t[o] === e[i]) {
        if (i === 0) {
          a = o;
        }
        i++;
        if (i === e.byteLength) {
          return o - r - e.byteLength + 1;
        }
      } else if (i > 0) {
        i = 0;
        o = a;
      }
    }
    return -1;
  }
  readString(e) {
    return g(this, e, P);
  }
  ensureCapacity(e) {
    this._maybeReallocate(this._readIndex + e);
  }
  ensureAdditionalCapacity(e) {
    this._maybeReallocate(this._writeIndex + e);
  }
  writeToView(e, t, n, r) {
    const i = this._shiftWriteMaybeReallocate(e);
    return t(this._getView(), i, e, n, r);
  }
  writeToBytes(e, t, n, r) {
    const i = this._shiftWriteMaybeReallocate(e);
    return t(this._buffer, i, e, n, r);
  }
  writeUint8(e) {
    K(e, 0, 256, "uint8");
    I(this, 1, R, e, false);
  }
  writeInt8(e) {
    K(e, -128, 128, "signed int8");
    I(this, 1, R, e, true);
  }
  writeUint16(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian;
    K(e, 0, 65536, "uint16");
    O(this, 2, N, e, t);
  }
  writeInt16(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian;
    K(e, -32768, 32768, "signed int16");
    O(this, 2, D, e, t);
  }
  writeUint32(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian;
    K(e, 0, 4294967296, "uint32");
    O(this, 4, w, e, t);
  }
  writeInt32(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian;
    K(e, -2147483648, 2147483648, "signed int32");
    O(this, 4, L, e, t);
  }
  writeUint64(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian;
    K(e, 0, 18446744073709552000, "uint64");
    O(this, 8, k, e, t);
  }
  writeInt64(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian;
    K(e, -9223372036854776000, 9223372036854776000, "signed int64");
    O(this, 8, k, e, t);
  }
  writeFloat32(e) {
    O(this, 4, G, e, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian);
  }
  writeFloat64(e) {
    O(this, 8, U, e, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian);
  }
  writeVarInt(e) {
    K(e, -9223372036854776000, 9223372036854776000, "varint (signed int64)");
    const t = e < 0;
    const n = t ? -e : e;
    let r = Math.floor(n / 4294967296);
    let i = n - r * 4294967296;
    if (t) {
      r = ~r;
      if (i === 0) {
        r++;
      } else {
        i = -i;
      }
    }
    I(this, Y(r, i), x, r, i);
  }
  writeVarIntFromHexLong(e) {
    const t = (0, a.hexLongIsNegative)(e);
    const n = t ? (0, a.negateHexLong)(e) : e;
    const r = (0, a.hexLongToHex)(n);
    let i = 0;
    let o = 0;
    for (let e = 0; e < a.NUM_HEX_IN_LONG; e++) {
      i = i << 4 | o >>> 28;
      o = o << 4 | (0, a.hexAt)(r, e);
    }
    if (t) {
      i = ~i;
      if (o === 0) {
        i++;
      } else {
        o = -o;
      }
    }
    I(this, Y(i, o), x, i, o);
  }
  writeBinary(e) {
    const t = e.peek(e => e.readByteArray());
    if (t.length) {
      const e = this._shiftWriteMaybeReallocate(t.length);
      this._buffer.set(t, e);
    }
  }
  writeBuffer(e) {
    this.writeByteArray(new Uint8Array(e));
  }
  writeByteArray(e) {
    const t = this._shiftWriteMaybeReallocate(e.length);
    this._buffer.set(e, t);
  }
  writeBufferView(e) {
    this.writeByteArray(new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
  }
  writeString(e) {
    I(this, p(e), B, e);
  }
  writeHexLong(e) {
    O(this, 8, F, e, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._littleEndian);
  }
  writeBytes() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    for (let e = 0; e < t.length; e++) {
      K(t[e], 0, 256, "byte");
    }
    I(this, t.length, j, t);
  }
  writeAtomically(e, t) {
    this._hiddenWrites++;
    let n = this._writeIndex;
    let r = this._bytesTrashed;
    try {
      const i = e(this, t);
      n = this._writeIndex;
      r = this._bytesTrashed;
      return i;
    } finally {
      this._hiddenWrites--;
      this._writeIndex = n - (this._bytesTrashed - r);
    }
  }
  writeWithVarIntLength(e, t) {
    const n = this._writeIndex;
    const r = this.writeAtomically(e, t);
    const i = this._writeIndex;
    this.writeVarInt(i - n);
    const a = this._writeIndex - i;
    const o = this._buffer;
    for (let e = 0; e < a; e++) {
      s[e] = o[i + e];
    }
    for (let e = i - 1; e >= n; e--) {
      o[e + a] = o[e];
    }
    for (let e = 0; e < a; e++) {
      o[n + e] = s[e];
    }
    return r;
  }
  static build() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    let r = 0;
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      if (typeof n == "string") {
        r += p(n);
      } else if (typeof n == "number") {
        r++;
      } else if (n instanceof u) {
        r += n.size();
      } else if (n instanceof ArrayBuffer) {
        r += n.byteLength;
      } else if (n instanceof Uint8Array) {
        r += n.length;
      }
    }
    const i = new u();
    i.ensureCapacity(r);
    i.write.apply(i, arguments);
    return i;
  }
  _getView() {
    return this._view || (this._view = new DataView(this._buffer.buffer, this._buffer.byteOffset));
  }
  _shiftReadOrThrow(e) {
    if (e < 0) {
      throw (0, i.default)("ReadError: given negative number of bytes to read");
    }
    const t = this._readIndex;
    const n = t + e;
    if (n > this._readEndIndex) {
      throw (0, i.default)(t === this._readEndIndex ? "ReadError: tried to read from depleted binary" : "ReadError: tried to read beyond end of binary");
    }
    this._readIndex = n;
    if (!this._hiddenReads) {
      this._earliestIndex = n;
    }
    return t;
  }
  _maybeReallocate(e) {
    const t = this._buffer;
    if (e <= t.length) {
      return e;
    }
    {
      const n = this._earliestIndex;
      const r = e - n;
      const i = Math.max(r, (t.length - n) * 2, 64);
      const a = new Uint8Array(i);
      if (n) {
        a.set(t.subarray(n));
        this._bytesTrashed += n;
        this._readIndex -= n;
        this._readEndIndex -= n;
        this._writeIndex -= n;
        this._earliestIndex = 0;
      } else {
        a.set(t);
      }
      this._buffer = a;
      this._view = null;
      return r;
    }
  }
  _shiftWriteMaybeReallocate(e) {
    const t = this._maybeReallocate(this._writeIndex + e);
    const n = this._writeIndex;
    this._writeIndex = t;
    if (!this._hiddenWrites) {
      this._readEndIndex = t;
    }
    return n;
  }
}
exports.Binary = u;
let c = "";
let d = 0;
function p(e) {
  if (e === c) {
    return d;
  }
  const t = e.length;
  let n = 0;
  for (let r = 0; r < t; r++) {
    const i = e.charCodeAt(r);
    if (i < 128) {
      n++;
    } else if (i < 2048) {
      n += 2;
    } else if (i < 55296 || i >= 57344 && i <= 65535) {
      n += 3;
    } else if (i >= 55296 && i < 56320 && r + 1 !== t) {
      const t = e.charCodeAt(r + 1);
      if (t >= 56320 && t < 57344) {
        r++;
        n += 4;
      } else {
        n += 3;
      }
    } else {
      n += 3;
    }
  }
  c = e;
  return d = n;
}
function f(e, t, n) {
  const r = t >> 21;
  if (e) {
    const e = Boolean(t & 2097151 || n);
    return r === 0 || r === -1 && e;
  }
  return r === 0;
}
function _(e, t, n, r, i) {
  return e.readWithViewParser(t, n, r, i);
}
function g(e, t, n, r, i) {
  return e.readWithBytesParser(t, n, r, i);
}
function m(e, t, n, r) {
  if (r) {
    return e.getInt8(t);
  } else {
    return e.getUint8(t);
  }
}
function h(e, t, n, r) {
  return e.getUint16(t, r);
}
function y(e, t, n, r) {
  return e.getInt32(t, r);
}
function E(e, t, n, r) {
  return e.getUint32(t, r);
}
function S(e, t, n, r, i) {
  return r(e.getInt32(i ? t + 4 : t, i), e.getInt32(i ? t : t + 4, i));
}
function v(e, t, n, r) {
  return e.getFloat32(t, r);
}
function T(e, t, n, r) {
  return e.getFloat64(t, r);
}
function M(e, t, n, r) {
  const a = Math.min(r, 10);
  let o = 0;
  let s = 128;
  for (; o < a && s & 128;) {
    s = e[t + o++];
  }
  if (o === 10 && s > 1) {
    throw (0, i.default)("ParseError: varint exceeds 64 bits");
  }
  if (s & 128) {
    return o + 1;
  } else {
    return o;
  }
}
function A(e, t, n, r) {
  let i = 0;
  let a = 0;
  let o = n;
  if (n === 10) {
    o--;
    a = e[t + o] & 1;
  }
  for (let n = o - 1; n >= 0; n--) {
    i = i << 7 | a >>> 25;
    a = a << 7 | e[t + n] & 127;
  }
  return r(i, a);
}
function b(e, t, n) {
  const r = t + e.byteOffset;
  const i = e.buffer;
  if (r === 0 && n === i.byteLength) {
    return i;
  } else {
    return i.slice(r, r + n);
  }
}
function C(e, t, n) {
  return e.subarray(t, t + n);
}
function P(e, t, n) {
  const r = t + n;
  let i = [];
  let a = null;
  for (let n = t; n < r; n++) {
    if (i.length > 5000) {
      if (!a) {
        a = [];
      }
      a.push(String.fromCharCode.apply(String, i));
      i = [];
    }
    const t = e[n] | 0;
    if ((t & 128) == 0) {
      i.push(t);
    } else if ((t & 224) == 192) {
      const a = $(e, n + 1, r);
      if (a) {
        n++;
        const e = (t & 31) << 6 | a & 63;
        if (e >= 128) {
          i.push(e);
        } else {
          i.push(o);
        }
      } else {
        i.push(o);
      }
    } else if ((t & 240) == 224) {
      const a = $(e, n + 1, r);
      const s = $(e, n + 2, r);
      if (a && s) {
        n += 2;
        const e = (t & 15) << 12 | (a & 63) << 6 | s & 63;
        if (e >= 2048 && !(e >= 55296 && e < 57344)) {
          i.push(e);
        } else {
          i.push(o);
        }
      } else if (a) {
        n++;
        i.push(o);
      } else {
        i.push(o);
      }
    } else if ((t & 248) == 240) {
      const a = $(e, n + 1, r);
      const s = $(e, n + 2, r);
      const l = $(e, n + 3, r);
      if (a && s && l) {
        n += 3;
        const e = (t & 7) << 18 | (a & 63) << 12 | (s & 63) << 6 | l & 63;
        if (e >= 65536 && e <= 1114111) {
          const t = e - 65536;
          i.push(t >> 10 | 55296, t & 1023 | 56320);
        } else {
          i.push(o);
        }
      } else if (a && s) {
        n += 2;
        i.push(o);
      } else if (a) {
        n++;
        i.push(o);
      } else {
        i.push(o);
      }
    } else {
      i.push(o);
    }
  }
  const s = String.fromCharCode.apply(String, i);
  if (a) {
    a.push(s);
    return a.join("");
  } else {
    return s;
  }
}
function O(e, t, n, r, i) {
  return e.writeToView(t, n, r, i);
}
function I(e, t, n, r, i) {
  return e.writeToBytes(t, n, r, i);
}
function R(e, t, n, r) {
  e[t] = r;
}
function N(e, t, n, r, i) {
  e.setUint16(t, r, i);
}
function D(e, t, n, r, i) {
  e.setInt16(t, r, i);
}
function w(e, t, n, r, i) {
  e.setUint32(t, r, i);
}
function L(e, t, n, r, i) {
  e.setInt32(t, r, i);
}
function k(e, t, n, r, i) {
  const a = r < 0;
  const o = a ? -r : r;
  let s = Math.floor(o / 4294967296);
  let l = o - s * 4294967296;
  if (a) {
    s = ~s;
    if (l === 0) {
      s++;
    } else {
      l = -l;
    }
  }
  e.setUint32(i ? t + 4 : t, s, i);
  e.setUint32(i ? t : t + 4, l, i);
}
function G(e, t, n, r, i) {
  e.setFloat32(t, r, i);
}
function U(e, t, n, r, i) {
  e.setFloat64(t, r, i);
}
function x(e, t, n, r, i) {
  let a = r;
  let o = i;
  const s = t + n - 1;
  for (let n = t; n < s; n++) {
    e[n] = o & 127 | 128;
    o = a << 25 | o >>> 7;
    a >>>= 7;
  }
  e[s] = o;
}
function B(e, t, n, r) {
  let i = t;
  const a = r.length;
  for (let t = 0; t < a; t++) {
    const n = r.charCodeAt(t);
    if (n < 128) {
      e[i++] = n;
    } else if (n < 2048) {
      e[i++] = n >> 6 | 192;
      e[i++] = n & 63 | 128;
    } else if (n < 55296 || n >= 57344) {
      e[i++] = n >> 12 | 224;
      e[i++] = n >> 6 & 63 | 128;
      e[i++] = n & 63 | 128;
    } else if (n >= 55296 && n < 56320 && t + 1 !== a) {
      const a = r.charCodeAt(t + 1);
      if (a >= 56320 && a < 57344) {
        t++;
        const r = 65536 + ((n & 1023) << 10 | a & 1023);
        e[i++] = r >> 18 | 240;
        e[i++] = r >> 12 & 63 | 128;
        e[i++] = r >> 6 & 63 | 128;
        e[i++] = r & 63 | 128;
      } else {
        e[i++] = 239;
        e[i++] = 191;
        e[i++] = 189;
      }
    } else {
      e[i++] = 239;
      e[i++] = 191;
      e[i++] = 189;
    }
  }
}
function F(e, t, n, r, i) {
  const o = (0, a.hexLongIsNegative)(r);
  const s = (0, a.hexLongToHex)(r);
  let l = 0;
  let u = 0;
  for (let e = 0; e < 16; e++) {
    l = l << 4 | u >>> 28;
    u = u << 4 | (0, a.hexAt)(s, e);
  }
  if (o) {
    l = ~l;
    if (u === 0) {
      l++;
    } else {
      u = -u;
    }
  }
  e.setUint32(i ? t + 4 : t, l, i);
  e.setUint32(i ? t : t + 4, u, i);
}
function j(e, t, n, r) {
  for (let i = 0; i < n; i++) {
    e[t + i] = r[i];
  }
}
function Y(e, t) {
  let n;
  let r;
  for (e ? (n = 5, r = e >>> 3) : (n = 1, r = t >>> 7); r;) {
    n++;
    r >>>= 7;
  }
  return n;
}
function K(e, t, n, r) {
  if (typeof e != "number" || e != e || Math.floor(e) !== e || e < t || e >= n) {
    throw (0, i.default)(typeof e == "string" ? `TyperError WriteError: string "${e}" is not a valid ${r}` : `TypeError WriteError: ${String(e)} is not a valid ${r}`);
  }
}
function W(e, t, n) {
  let r;
  r = t >= 0 || e ? t : 4294967296 + t;
  const a = r * 4294967296 + (n >= 0 ? n : 4294967296 + n);
  if (!f(e, t, n)) {
    throw (0, i.default)(`ReadError: integer exceeded 53 bits (${a})`);
  }
  return a;
}
function V(e, t) {
  return W(true, e, t);
}
function H(e, t) {
  return W(false, e, t);
}
function $(e, t, n) {
  if (t >= n) {
    return 0;
  }
  const r = e[t] | 0;
  if ((r & 192) == 128) {
    return r;
  } else {
    return 0;
  }
}