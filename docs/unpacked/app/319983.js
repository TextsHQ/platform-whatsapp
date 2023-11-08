Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_DOMINANT_COLOR = undefined;
exports.getDominantColor = function (e) {
  const t = function (e) {
    const t = document.createElement("canvas");
    const n = t.getContext("2d");
    if (!n) {
      return null;
    }
    const r = t.height = e.height;
    const i = t.width = e.width;
    n.drawImage(e, 0, 0);
    try {
      return n.getImageData(0, 0, i, r).data;
    } catch (e) {
      return null;
    }
  }(e);
  if (!t) {
    return i;
  }
  return function (e) {
    let t = 0;
    let n = 0;
    let i = 0;
    let a = 0;
    let o = 0;
    for (let r = 0; r < e.length; r += 20) {
      const s = e[r + 3];
      t += e[r] * s;
      n += e[r + 1] * s;
      i += e[r + 2] * s;
      a += s;
      o++;
    }
    if (a) {
      return new r.Color(Math.round(t / a), Math.round(n / a), Math.round(i / a), Math.round(a / o) / 255);
    } else {
      return new r.Color(0, 0, 0, 0);
    }
  }(t);
};
var r = require("./102826.js");
const i = new r.Color(220, 220, 220);
exports.DEFAULT_DOMINANT_COLOR = i;