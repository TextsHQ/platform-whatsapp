var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emojiKeywordToUnicodeSearch = function (e) {
  return (0, l.emojiSearch)(e, (0, o.default)(f, "Emoji Trie expected to be loaded."));
};
exports.updateEmojiTrie = m;
var i = r(require("../vendor/944908.js"));
var a = r(require("./98017.js"));
var o = r(require("./670983.js"));
var s = require("./381525.js");
var l = require("./911744.js");
var u = r(require("./799132.js"));
var c = r(require("./932325.js"));
var d = require("./973981.js");
const p = new Set(["ar", "bn", "cs", "de", "en", "es", "fa", "fr", "gu", "he", "hi", "hu", "id", "it", "mr", "ms", "nl", "pl", "pt", "pt-BR", "ro", "ru", "sk", "th", "tr", "uk", "ur", "zh-CN", "zh-TW", "zh-HK"]);
let f = null;
let _ = null;
let g = [];
function m() {
  const e = (0, i.default)(["en", c.default.getLocale()]).filter(e => p.has(e));
  if ((0, a.default)(g, e)) {
    return;
  }
  g = e;
  const t = Promise.all(e.map(e => (0, s.downloadEmojiSuggestions)(e))).then(e => {
    if (_ === t) {
      f = (0, l.emojiLocaleDictsToTrie)(e);
    }
  }).catch(() => {}).finally(() => {
    if (_ === t) {
      _ = null;
    }
  });
  _ = t;
}
c.default.on("locale_change", () => {
  m();
});
(0, u.default)(d.Stream, "change:mode", () => d.Stream.mode === d.StreamMode.MAIN).then(() => {
  m();
});