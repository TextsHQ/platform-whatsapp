Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmojiSpritesExperimentalPath = function (e, t, n, r) {
  return o("sprite", e, n, `${t}.${r}`);
};
exports.getGlyphExperimentalPath = function (e, t, n) {
  return function (e, t, n, r) {
    const i = function (e) {
      return Array.from(e).map(e => e.codePointAt(0).toString(16).padStart(6, "0")).join("_");
    }(e);
    return o("single", n, t, `${i}.${r}`);
  }(e, n, t, "png");
};
const n = "https://web.whatsapp.com/emoji/v1";
const r = 0;
const i = 0;
const a = 0;
function o(e, t, o, s) {
  return [n, r, i, a, e, t.toLowerCase().slice(0, 1), o, s].join("/");
}