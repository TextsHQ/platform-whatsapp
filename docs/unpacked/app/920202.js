Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLines = function (e, t, n, i) {
  const a = [];
  for (const s of e.split("\n")) {
    if (s === "") {
      a.push({
        text: "",
        width: 0,
        words: []
      });
      continue;
    }
    const e = s.split(" ");
    let l = "";
    let u = 0;
    let c = [];
    for (let s = 0; s < e.length; s++) {
      const d = (s !== 0 ? " " : "") + e[s];
      const p = l + d;
      const f = o(p, t, n);
      if (i > 0 && f > i && u > 0) {
        a.push({
          text: l,
          width: u,
          words: c
        });
        l = "";
        u = 0;
        c = [];
        s--;
      } else {
        l = p;
        u = f;
        for (const e of d.split(r.EmojiUtil.emojiRegex())) {
          if (!e) {
            continue;
          }
          let i = null;
          if (r.EmojiUtil.isEmoji(e)) {
            i = r.EmojiUtil.getGlyphPath(e, 64);
          }
          const a = o(e, t, n);
          c.push({
            text: e,
            width: a,
            emojiPath: i
          });
        }
      }
    }
    if (u > 0) {
      a.push({
        text: l,
        width: u,
        words: c
      });
    }
  }
  return a;
};
exports.getTextBounds = function (e, t) {
  const n = `${t}px ${(0, i.getFontStyle)(e).fontFamily}`;
  const r = l.get(n);
  if (r != null) {
    return r;
  }
  const a = "ABCDEF";
  const u = Math.round(o(a, e, t));
  const c = t;
  const d = s().getContext("2d");
  d.textBaseline = "middle";
  d.font = n;
  d.fillStyle = "red";
  d.fillText(a, 0, c / 2);
  const p = d.getImageData(0, 0, u, c).data;
  let f = 1 / 0;
  let _ = 1 / 0;
  let g = 1 / 0;
  for (let e = 0; e < u; e++) {
    for (let t = 0; t < c; t++) {
      if (p[(t * u + e) * 4 + 3] > 0) {
        _ = Math.min(_, t);
        f = Math.min(f, e);
        g = Math.min(g, c - t);
      }
    }
  }
  d.clearRect(0, 0, u, c);
  const m = {
    top: _,
    left: f,
    bottom: g
  };
  l.set(d.font, m);
  return m;
};
var r = require("./70354.js");
var i = require("./490836.js");
let a;
function o(e, t, n) {
  const a = s().getContext("2d");
  a.font = `${n}px ${(0, i.getFontStyle)(t).fontFamily}`;
  let o = 0;
  for (const t of e.split(r.EmojiUtil.emojiRegex())) {
    if (r.EmojiUtil.isEmoji(t)) {
      o += n;
    } else {
      o += a.measureText(t).width;
    }
  }
  return o;
}
function s() {
  if (a == null) {
    a = document.createElement("canvas");
    a.width = 9999;
    a.height = 99;
  }
  return a;
}
const l = new Map();