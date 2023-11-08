function n(e) {
  return parseInt((e + 15) / 16, 10) * 16;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignChunkLengthsToMultipleOfAesBlockSize = function (e, t) {
  const r = [];
  let i = 0;
  let a = 0;
  let o = 0;
  for (let s = 0; s < e.length; ++s) {
    i += e[s];
    if (s === e.length - 1 && t != null) {
      if (i > a) {
        r.push(t - a);
      } else {
        r.pop();
        r.push(t - o);
      }
      break;
    }
    if (i > a) {
      const e = n(i - a);
      o = a;
      r.push(e);
      a += e;
    }
  }
  return r;
};
exports.alignChunkSizeToMultipleAesBlockSize = n;