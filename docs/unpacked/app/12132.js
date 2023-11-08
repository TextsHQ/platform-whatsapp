let r;
let i;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dir = function (e) {
  !function () {
    if (r) {
      return;
    }
    const e = require("./260222.js").D;
    const t = e.length / 2;
    r = new Int32Array(t);
    i = new Int32Array(t);
    for (let n = 0, a = 0; n < t; n++, a += 2) {
      r[n] = e[a] + (n === 0 ? 0 : r[n - 1]);
      i[n] = e[a + 1];
    }
  }();
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t) | 0;
    if (n >= 55296 && n < 56320) {
      if (++t === e.length) {
        break;
      }
      const r = e.charCodeAt(t);
      if (!(r >= 56320 && r < 57344)) {
        continue;
      }
      n = 65536 + ((n & 1023) << 10 | r & 1023);
    } else if (n >= 56320 && n < 57344) {
      continue;
    }
    if (n < r[0]) {
      continue;
    }
    const a = r.length | 0;
    let o = 0;
    let s = a - 1 | 0;
    for (; o < s;) {
      const e = s + o >> 1;
      if (r[e] > n) {
        s = e - 1 | 0;
      } else {
        if (r[e + 1] > n) {
          s = e;
          break;
        }
        o = e + 1 | 0;
      }
    }
    const l = i[s];
    const u = r[s] + Math.abs(l) | 0;
    if (n < u) {
      if (l < 0) {
        return "rtl";
      } else {
        return "ltr";
      }
    }
  }
  return;
};