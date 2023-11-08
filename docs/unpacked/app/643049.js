var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/103522.js"));
var a = r(require("./84652.js"));
var o = r(require("./496964.js"));
var s = r(require("./759710.js"));
var l = r(require("./932325.js"));
var u = r(require("../vendor/667294.js"));
class c extends o.default {
  static match(e, t) {
    if (!t) {
      return [];
    }
    const {
      terms: n,
      boundary: r = false,
      ignoreDiacritics: o = false
    } = t;
    if (!n.length || n.every(e => e.length === 0)) {
      return [];
    }
    const s = o && l.default.isLatinAlphabetLanguage(e) && n.every(e => l.default.isLatinAlphabetLanguage(e)) && !l.default.isRTL();
    const u = s ? l.default.removeAccents(e) : e;
    return (0, a.default)(u, function (e, t, n) {
      const r = (n ? e.map(e => l.default.removeAccents(e)) : e).map(i.default).join("|");
      if (l.default.isRTL()) {
        return new RegExp(`${t ? "(?:^|\\b)" : ""}(\\S+)?(${r})(\\S+)?`, "ig");
      }
      return new RegExp(`${t ? "(?:^|\\b)" : ""}(${r})`, "ig");
    }(n, r, s));
  }
}
exports.default = c;
c.jsx = (e, t, n) => {
  let {
    selectable: r
  } = n;
  return u.default.createElement(s.default, {
    selectable: r
  }, e);
};