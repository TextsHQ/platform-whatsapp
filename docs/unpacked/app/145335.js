Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatArrayBuffers = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  const r = t.reduce((e, t) => e + t.byteLength, 0);
  const i = new Uint8Array(r);
  let a = 0;
  t.forEach(e => {
    i.set(new Uint8Array(e), a);
    a += e.byteLength;
  });
  return i.buffer;
};