Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = e.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/\s*xmlns:/g, "~::~xmlns:").replace(/\s*xmlns=/g, "~::~xmlns=").split("~::~");
  const n = t.length;
  let r = false;
  let i = 0;
  let a = "";
  let o = 0;
  const s = ["\n"];
  for (o = 0; o < 100; o++) {
    s.push(s[o] + "    ");
  }
  const l = function (e, t) {
    const n = /^<[\w:\-.,]+/.exec(e[t - 1]);
    const r = /^<\/[\w:\-.,]+/.exec(e[t]);
    return n != null && r != null && n[0] === r[0];
  };
  for (o = 0; o < n; o++) {
    if (t[o].search(/<!/) > -1) {
      a += s[i] + t[o];
      r = true;
      if (t[o].search(/-->/) > -1 || t[o].search(/\]>/) > -1 || t[o].search(/!DOCTYPE/) > -1) {
        r = false;
      }
    } else if (t[o].search(/-->/) > -1 || t[o].search(/\]>/) > -1) {
      a += t[o];
      r = false;
    } else if (l(t, o)) {
      a += t[o];
      if (!r) {
        i--;
      }
    } else if (t[o].search(/<\w/) > -1 && t[o].search(/<\//) === -1 && t[o].search(/\/>/) === -1) {
      a = a += r ? t[o] : s[i++] + t[o];
    } else if (t[o].search(/<\w/) > -1 && t[o].search(/<\//) > -1) {
      a = a += r ? t[o] : s[i] + t[o];
    } else if (t[o].search(/<\//) > -1) {
      a = a += r ? t[o] : s[i === 0 ? i : --i] + t[o];
    } else if (t[o].search(/\/>/) > -1) {
      a = a += r ? t[o] : s[i] + t[o];
    } else if (t[o].search(/<\?/) > -1 || t[o].search(/xmlns:/) > -1 || t[o].search(/xmlns=/) > -1) {
      a += s[i] + t[o];
    } else {
      a += t[o];
    }
  }
  if (a[0] === "\n") {
    return a.slice(1);
  } else {
    return a;
  }
};