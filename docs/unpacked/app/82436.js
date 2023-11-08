var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./370257.js");
var a = require("./70354.js");
var o = r(require("./357220.js"));
var s = r(require("./84652.js"));
var l = r(require("./496964.js"));
var u = r(require("../vendor/667294.js"));
class c extends l.default {
  static jsx(e, t, n) {
    let [r] = t;
    let {
      size: i,
      selectable: a = false,
      emojiXstyle: s
    } = n;
    return u.default.createElement(o.default, {
      emoji: r,
      size: i,
      selectable: a,
      xstyle: s
    });
  }
  static match(e, t, n) {
    const r = n != null && n !== 0 ? n : e.length;
    const o = (0, i.firstNCodepoints)(e, r);
    return (0, s.default)(o, a.EmojiUtil.emojiRegex(), 0, d);
  }
}
function d(e) {
  if (a.EmojiUtil.getGlyphId(e[0])) {
    return e;
  } else {
    return null;
  }
}
exports.default = c;
c.compatibility = true;