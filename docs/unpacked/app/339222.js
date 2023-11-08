Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bytesToCrockford = function (e) {
  const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
  let r = 0;
  let i = 0;
  let a = "";
  for (let e = 0; e < t.byteLength; e++) {
    i = i << 8 | t.getUint8(e);
    r += 8;
    i = i << 8 | t.getUint8(e);
    r += 8;
    for (; r >= 5;) {
      a += n[i >>> r - 5 & 31];
      r -= 5;
    }
  }
  if (r > 0) {
    a += n[i << 5 - r & 31];
  }
  return a;
};
const n = "123456789ABCDEFGHJKLMNPQRSTVWXYZ";