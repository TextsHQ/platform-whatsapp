var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferToStr = function (e) {
  const t = new o(0);
  if (e.byteLength > 0) {
    t.buffer = e;
    t.offset = 0;
    t.limit = e.byteLength;
    t.view = e.byteLength > 0 ? new DataView(e) : null;
  }
  return t.toBinaryString();
};
exports.strToBuffer = function (e) {
  if (typeof e != "string") {
    throw (0, i.default)("TypedError: Illegal input => not a string");
  }
  const t = e.length;
  const n = new o(t);
  for (let a = 0; a < t; a++) {
    var r;
    const t = e.charCodeAt(a);
    if (t > 255) {
      throw (0, i.default)(`RangeError: Illegal charCode at ${a}: 0 <= ${t} <= 255`);
    }
    if (!((r = n.view) === null || r === undefined)) {
      r.setUint8(a, t);
    }
  }
  n.limit = t;
  return n.toArrayBuffer();
};
var i = r(require("./415227.js"));
const a = new ArrayBuffer(0);
class o {
  constructor(e) {
    this.offset = 0;
    this.limit = 0;
    this.capacity = e != null ? e : 16;
    if (e == null || e < 0) {
      throw (0, i.default)("RangeError: Illegal capacity");
    }
    this.buffer = this.capacity === 0 ? a : new ArrayBuffer(this.capacity);
    this.view = this.capacity === 0 ? null : new DataView(this.buffer);
  }
  toArrayBuffer() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    let t = this.offset;
    let n = this.limit;
    if (t > n) {
      const e = t;
      t = n;
      n = e;
    }
    if (t == null || t % 1 != 0) {
      throw (0, i.default)("TypeError: Illegal offset: Not a valid integer");
    }
    t >>>= 0;
    if (n == null || n % 1 != 0) {
      throw (0, i.default)("TypeError: Illegal limit: Not a valid integer");
    }
    n >>>= 0;
    if (t < 0 || t > n || n > this.buffer.byteLength) {
      throw (0, i.default)(`RangeError: Illegal range: 0 <= ${t} <= ${n} <= ${this.buffer.byteLength}`);
    }
    if (!e && t === 0 && n === this.buffer.byteLength) {
      return this.buffer;
    }
    if (t === n) {
      return a;
    }
    const r = new ArrayBuffer(n - t);
    new Uint8Array(r).set(new Uint8Array(this.buffer).subarray(t, n), 0);
    return r;
  }
  toBinaryString(e, t) {
    let n = e != null ? e : this.offset;
    let r = t != null ? t : this.limit;
    if (n == null || n % 1 != 0) {
      throw (0, i.default)("TypeError: Illegal begin: Not a valid integer");
    }
    n >>>= 0;
    if (r == null || r % 1 != 0) {
      throw (0, i.default)("TypeError: Illegal end: Not a valid integer");
    }
    r >>>= 0;
    if (n < 0 || n > r || r > this.buffer.byteLength) {
      throw (0, i.default)(`RangeError: Illegal range: 0 <= ${n} <= ${r} <= ${this.buffer.byteLength}`);
    }
    if (n === r) {
      return "";
    }
    let a = [];
    const o = [];
    for (; n < r;) {
      var s;
      a.push((s = this.view) === null || s === undefined ? undefined : s.getUint8(n++));
      if (a.length >= 1024) {
        o.push(String.fromCharCode.apply(String, a));
        a = [];
      }
    }
    return o.join("") + String.fromCharCode.apply(String, a);
  }
}