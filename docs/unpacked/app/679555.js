var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    children: t = "",
    selectable: n,
    text: r,
    inline: p = false,
    quoted: f = false
  } = e;
  const _ = (0, i.dir)(r);
  const g = _ === "rtl" !== s.default.isRTL();
  if (p) {
    return u.default.createElement(a.SelectableSpan, {
      dir: _,
      selectable: n,
      prePlainText: "> ",
      className: (0, c.default)(d.inlineQuote, f && d.quotedColor, g ? d.inlineQuoteLineEnd : d.inlineQuoteLineStart)
    }, t);
  }
  return u.default.createElement(a.SelectableBlockQuote, {
    dir: _,
    selectable: n,
    prePlainText: "> ",
    className: (0, c.default)([d.quote, f && d.quotedColor, l.uiMargin.vert4])
  }, u.default.createElement("div", {
    className: (0, c.default)(d.line, g && d.lineDirMismatch, f && d.lineQuotedColor)
  }), u.default.createElement("div", {
    className: (0, c.default)(d.text, g && d.textDirMismatch)
  }, (0, o.removeFirstLeadingSpace)(t)));
};
var i = require("./12132.js");
var a = require("./306703.js");
var o = require("./266696.js");
var s = r(require("./932325.js"));
var l = require("./676345.js");
var u = r(require("../vendor/667294.js"));
var c = r(require("./156720.js"));
const d = {
  quote: {
    display: "l7jjieqr",
    position: "g0rxnol2",
    width: "ln8gz9je",
    color: "m0zrds2x"
  },
  quotedColor: {
    color: "rr5ev6xu",
    borderTopColor: "bfzlll9e",
    borderEndColor: "q8o23gzp",
    borderBottomColor: "a5mzmuq5",
    borderStartColor: "s1hplugg"
  },
  inlineQuote: {
    display: "ew8mgplc",
    width: "gofbmt1g",
    borderStart: "e1hmztkq",
    marginStart: "k6y3xtnu",
    paddingStart: "mc6o24uu",
    color: "m0zrds2x"
  },
  inlineQuoteLineStart: {
    borderStart: "c0p0blvy",
    marginStart: "k6y3xtnu",
    paddingStart: "mc6o24uu"
  },
  inlineQuoteLineEnd: {
    borderEnd: "fk11u0wd",
    marginEnd: "kjemk6od",
    paddingEnd: "lnjlmjd6"
  },
  line: {
    position: "lhggkp7q",
    start: "tkdu00h0",
    top: "qq0sjtgm",
    height: "ppled2lx",
    width: "c97dh06e",
    backgroundColor: "jvkd3xu3",
    borderTopStartRadius: "gznnndf5",
    borderTopEndRadius: "ee4m4141",
    borderBottomEndRadius: "nzxid4w6",
    borderBottomStartRadius: "pjy5kps4"
  },
  lineQuotedColor: {
    backgroundColor: "tu8hx9v1"
  },
  lineDirMismatch: {
    end: "ebjesfe0"
  },
  text: {
    display: "l7jjieqr",
    paddingStart: "f78eapp6",
    overflowWrap: "s58vrwyt",
    whiteSpace: "hmy10g0s"
  },
  textDirMismatch: {
    paddingStart: "gx1rr48f",
    paddingEnd: "kyc7k6mt"
  }
};