var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayBufferMod = function (e, t) {
  const n = new Uint8Array(e);
  if (t > 8388607) {
    throw (0, i.default)("Divisor is too big");
  }
  let r = 0;
  for (let e = 0; e < n.length; ++e) {
    r = ((r << 8) + n[e]) % t;
  }
  return r;
};
exports.arrayBufferToString = function (e) {
  return String.fromCharCode.apply(null, new Uint8Array(e));
};
exports.arrayBuffersEqualUNSAFE = function (e, t) {
  const n = new Uint8Array(e);
  const r = new Uint8Array(t);
  return a(n, r);
};
exports.concatBuffers = function (e) {
  const t = e.map(e => new Uint8Array(e));
  const n = t.reduce((e, t) => e + t.byteLength, 0);
  const r = new Uint8Array(n);
  t.reduce((e, t) => {
    r.set(t, e);
    return e + t.byteLength;
  }, 0);
  return r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength);
};
exports.largeStringToArrayBuffer = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500000;
  return new Promise(n => {
    const r = e.length;
    const i = new ArrayBuffer(r);
    const a = new Uint8Array(i);
    let o = 0;
    setTimeout(function s() {
      const l = Math.min(o + t, r);
      for (; o < l;) {
        a[o] = e.charCodeAt(o);
        o++;
      }
      if (o === r) {
        return void n(i);
      }
      setTimeout(s, 16);
    }, 0);
  });
};
exports.stringToArrayBuffer = function (e) {
  const t = new ArrayBuffer(e.length);
  const n = new Uint8Array(t);
  let r;
  let i;
  r = 0;
  i = e.length;
  for (; r < i; r++) {
    n[r] = e.charCodeAt(r);
  }
  return n.buffer;
};
exports.uint8ArraysEqualUNSAFE = a;
var i = r(require("./415227.js"));
function a(e, t) {
  if (e.byteLength !== t.byteLength) {
    return false;
  }
  for (let n = 0; n !== e.byteLength; n++) {
    if (e[n] !== t[n]) {
      return false;
    }
  }
  return true;
}