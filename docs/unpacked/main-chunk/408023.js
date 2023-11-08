var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatType = exports.BulletedListItemFormats = exports.AdditionalFormatters = undefined;
exports.getSymbol = function (e) {
  switch (e) {
    case s.Bold:
      return "*";
    case s.Italic:
      return "_";
    case s.Strikethrough:
      return "~";
    case s.BulletedListItem:
      return "*";
    case s.InlineCode:
      return "`";
    case s.BlockQuote:
      return ">";
    case s.Code:
      return "```";
    default:
      return "";
  }
};
exports.parseText = function (e, t) {
  const n = (0, r.default)(e, f(t != null ? t : {}), c);
  if (function (e) {
    let t = "";
    for (const n of e.children) {
      t += m(n);
    }
    return t;
  }(n) !== e) {
    return null;
  }
  return n;
};
var r = o(require("../app/146375.js"));
var a = require("../app/233985.js");
var l = o(require("../app/17542.js"));
var i = o(require("../app/556869.js"));
const s = require("../vendor/76672.js").Mirrored(["Bold", "Italic", "Strikethrough", "Code", "InlineCode", "BlockQuote", "BotCommand", "BulletedListItem", "HyphenListItem", "NumberedListItem"]);
exports.FormatType = s;
const u = new Set([s.BulletedListItem, s.HyphenListItem]);
exports.BulletedListItemFormats = u;
const d = new Set([s.Bold, s.Italic, s.Strikethrough, s.Code, s.InlineCode]);
class c extends l.default {
  static onDelimiter() {
    return null;
  }
  static onMutator(e, t, n) {
    const {
      format: o,
      symbol: r
    } = function (e, t) {
      switch (e) {
        case a.Bold:
          return {
            format: s.Bold,
            symbol: "*"
          };
        case a.Italic:
          return {
            format: s.Italic,
            symbol: "_"
          };
        case a.Strikethrough:
          return {
            format: s.Strikethrough,
            symbol: "~"
          };
        case a.BulletedListItemWithEmpty:
          return {
            format: s.BulletedListItem,
            symbol: "*"
          };
        case a.HyphenListItemWithEmpty:
          return {
            format: s.HyphenListItem,
            symbol: "-"
          };
        case a.NumberedListItemWithEmpty:
          return {
            format: s.NumberedListItem,
            symbol: t[1]
          };
        case a.InlineCode:
          return {
            format: s.InlineCode,
            symbol: "`"
          };
        case a.BlockQuoteWithEmpty:
          return {
            format: s.BlockQuote,
            symbol: ">"
          };
        case a.Code:
          return {
            format: s.Code,
            symbol: "```"
          };
        case a.BotCommand:
          return {
            format: s.BotCommand,
            symbol: ""
          };
        default:
          throw (0, i.default)("Unknown format mutator");
      }
    }(e, n);
    return {
      format: o,
      symbol: r,
      children: t.filter(Boolean)
    };
  }
  static onRoot(e) {
    return {
      children: e.filter(Boolean)
    };
  }
  static onText(e) {
    return {
      text: e
    };
  }
}
const f = e => {
  let {
    bulletPointsEnabled: t = false,
    numberedListEnabled: n = false,
    inlineCodeEnabled: o = false,
    blockQuoteEnabled: r = false,
    highlightedBotCommands: l
  } = e;
  return [[[a.Code, {}]], t ? [[a.BulletedListItemWithEmpty, {}]] : null, t ? [[a.HyphenListItemWithEmpty, {}]] : null, n ? [[a.NumberedListItemWithEmpty, {}]] : null, r ? [[a.BlockQuoteWithEmpty, {}]] : null, o ? [[a.InlineCode, {}]] : null, [[a.Bold, {}], [a.Italic, {}], [a.Strikethrough, {}]], l ? [[a.BotCommand, {
    commands: l
  }]] : null].filter(Boolean);
};
function m(e) {
  if (e.text != null) {
    return e.text;
  }
  if (e.children) {
    let t = e.symbol;
    for (const n of e.children) {
      t += m(n);
    }
    if (d.has(e.format)) {
      t += e.symbol;
    }
    return t;
  }
  throw (0, i.default)("should never reach here");
}
exports.AdditionalFormatters = f;