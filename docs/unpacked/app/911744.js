var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emojiLocaleDictsToTrie = function (e) {
  let t = e[0];
  if (e.length > 1) {
    t = (0, i.default)((0, i.default)({}, t), e[1]);
  }
  return function (e, t) {
    const n = p.default.fromForwardsStrings(e.map(e => e[t]), e);
    return {
      getMatches: e => n.search(e)
    };
  }((0, a.default)(t, (e, t) => {
    const n = t.toLowerCase();
    const r = n.substring(0, 5);
    return {
      value: e,
      keyword: n,
      shortKeyword: r
    };
  }), "shortKeyword");
};
exports.emojiSearch = function (e, t) {
  let n = [];
  if (e) {
    const r = function (e, t) {
      const n = function (e, t) {
        if (!t) {
          return [];
        }
        if (e.length <= 5) {
          return t.getMatches(e);
        }
        const n = e.substring(0, 5).trim();
        let r = t.getMatches(n);
        r = (0, c.default)(r, t => t.keyword.startsWith(e));
        return r;
      }(e, t);
      const r = h((0, u.default)(n, e => e.value));
      const i = h((0, u.default)(n.filter(t => t.keyword === e), e => e.value));
      const a = (0, l.default)(h(_.RecentEmojiCollection.map(e => e.id)), r);
      const o = (0, l.default)(h(g), r);
      const d = (0, l.default)((0, s.default)(a, o), i);
      return (0, s.default)(d, E(i), a, o, E(r));
    }(e.toLowerCase(), t);
    n = (0, d.default)(r);
  }
  return n;
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/435161.js"));
var o = r(require("../vendor/751463.js"));
var s = r(require("../vendor/393386.js"));
var l = r(require("../vendor/225325.js"));
var u = r(require("../vendor/594654.js"));
var c = r(require("../vendor/763105.js"));
var d = r(require("../vendor/944908.js"));
var p = r(require("./43312.js"));
var f = require("./70354.js");
var _ = require("./326425.js");
const g = ["😂", "🤣", "❤", "🥺", "🥰", "😘", "😭", "😍", "😁", "🙏", "😅", "😆", "😊", "🙂", "😔", "🥳", "😒", "☺", "🎂", "👍", "💖", "😢", "🙄", "😏", "😎", "💋", "😞", "😉", "👏", "🙃", "😡", "😀", "😄", "😇", "🤩", "😌", "🤔", "🌹", "😋", "💗", "🤗", "💕", "💔", "😚", "☹", "😃", "🎉", "🔥", "🥴", "😳"];
const m = ["SMILEYS_PEOPLE", "ANIMALS_NATURE", "FOOD_DRINK", "ACTIVITY", "TRAVEL_PLACES", "OBJECTS", "SYMBOLS", "FLAGS", "VARIATION"];
function h(e) {
  return e.map(f.EmojiUtil.normalizeEmoji).filter(Boolean);
}
const y = (0, o.default)(() => {
  const e = new Map();
  let t = 0;
  for (const n of m) {
    const r = f.EmojiUtil.getEmojisInCategory(n);
    for (const n of r) {
      e.set(n, t);
      t++;
    }
  }
  return e;
});
function E(e) {
  const t = y();
  return [...e].sort((e, n) => {
    var r;
    var i;
    return ((r = t.get(e)) !== null && r !== undefined ? r : Number.MAX_SAFE_INTEGER) - ((i = t.get(n)) !== null && i !== undefined ? i : Number.MAX_SAFE_INTEGER);
  });
}