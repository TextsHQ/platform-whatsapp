Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareArrayBuffer = function (e, t) {
  if (!e || !t) {
    return false;
  }
  const n = new Uint8Array(e);
  const r = new Uint8Array(t);
  const i = n.length;
  const a = r.length;
  if (i !== a) {
    return false;
  }
  for (let e = 0; e < i; e++) {
    if (n[e] !== r[e]) {
      return false;
    }
  }
  return true;
};
exports.intToBytes = function (e, t) {
  let n = t;
  const r = new Uint8Array(e);
  for (let t = e - 1; t >= 0; t--) {
    r[t] = n & 255;
    n >>>= 8;
  }
  return r;
};
exports.uint8ArrayToBuffer = function (e) {
  return e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
};