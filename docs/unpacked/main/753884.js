var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  if (e.textStatusEmoji != null) {
    const n = r.EmojiUtil.normalizeEmojiFromString(e.textStatusEmoji);
    if (n != null) {
      t = u.default.createElement("div", {
        className: (0, s.default)(i.uiPadding.end5)
      }, u.default.createElement(o.default, {
        key: "low-res",
        emoji: n,
        size: "small"
      }));
    }
  }
  return u.default.createElement("div", {
    className: (0, s.default)(c.chatSubtitle, e.location === "title" && c.chatSubtitleHeader)
  }, t, u.default.createElement(l.EmojiText, {
    titlify: true,
    xstyle: c.chatSubtitleText,
    direction: "inherit",
    text: e.text,
    ariaLabel: e.ariaLabel,
    selectable: true
  }));
};
var r = require("../app/70354.js");
var o = a(require("../app/225148.js"));
var l = require("../app/305521.js");
var i = require("../app/676345.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  chatSubtitle: {
    display: "p357zi0d",
    alignItems: "r15c9g6i"
  },
  chatSubtitleHeader: {
    minHeight: "g4oj0cdv",
    fontSize: "ovllcyds",
    lineHeight: "l0vqccxk",
    color: "pm5hny62"
  },
  chatSubtitleText: {
    flexGrow: "ggj6brxn",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  }
};