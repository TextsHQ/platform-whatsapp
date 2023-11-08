var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightedText = function (e) {
  const {
    searchQuery: t,
    text: n = "",
    xstyle: a
  } = e;
  const d = (0, s.useSearchText)(t);
  const f = (0, o.fuzzyMatches)(d.toLowerCase(), n.toLowerCase());
  let p = 0;
  const m = n.split(" ").map((e, t) => {
    const n = e.split("").map((e, t) => {
      const n = f.includes(p++);
      return u.default.createElement(l.TextSpan, {
        key: t,
        xstyle: [n && c.textMatch, !n && c.text, i.uiPadding.top3]
      }, e);
    });
    p++;
    return u.default.createElement(l.TextSpan, {
      key: t
    }, t > 0 && u.default.createElement(l.TextSpan, {
      xstyle: c.space
    }, " "), n);
  });
  return u.default.createElement(r.FlexRow, {
    wrap: "wrap",
    xstyle: [c.container, a]
  }, m);
};
var r = require("../app/690495.js");
var o = require("./573797.js");
var l = require("../app/180519.js");
var i = require("../app/676345.js");
var u = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var s = require("./388364.js");
const c = {
  textMatch: {
    fontWeight: "nbipi2bn",
    color: "j3oq2rgp"
  },
  text: {
    color: "k2bacm8l"
  },
  container: {
    fontSize: "f8jlpxt4",
    color: "hp667wtd"
  },
  space: {
    whiteSpace: "ag95hn57"
  }
};