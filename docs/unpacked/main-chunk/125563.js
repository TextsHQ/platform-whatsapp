var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFormatShortcutsPlugin = function () {
  const [e] = (0, a.useLexicalComposerContext)();
  (0, u.useLexicalCommandListener)(e, r.KEY_MODIFIER_COMMAND, t => {
    const n = function (e) {
      if (e.metaKey && e.key === "b") {
        return d.Bold;
      }
      if (e.metaKey && e.shiftKey && e.key === "i") {
        return d.InlineCode;
      }
      if (e.metaKey && e.key === "i") {
        return d.Italic;
      }
      if (e.metaKey && e.shiftKey && e.key === "x") {
        return d.Strikethrough;
      }
      if (e.metaKey && e.shiftKey && e.key === "k") {
        return d.Code;
      }
      return null;
    }(t);
    return !(!n || e.isComposing()) && (e.update(() => {
      !function (e) {
        const t = (0, s.$getRangeSelection)();
        if (!t) {
          return false;
        }
        const n = t.extract();
        const o = (0, s.assertTextNode)(n[0]);
        const a = (0, s.assertTextNode)(n.at(-1));
        const u = function (e, t, n) {
          const o = n === d.Code;
          if (e.getParent() !== t.getParent()) {
            return c.Ignore;
          }
          const a = function (e, t) {
            const n = e.getNodesBetween(t);
            const o = [];
            n.forEach(e => {
              if ((0, r.$isTextNode)(e) && (["Bold", "Italic", "Strikethrough"].forEach(t => {
                if (e.hasFormat(t.toLowerCase())) {
                  o.push((0, l.default)(d.cast(t), "TextFormatType.cast(format)"));
                }
              }), e.hasFormat("code"))) {
                const t = e.getStyle().includes("border-radius");
                o.push(t ? d.InlineCode : d.Code);
              }
            });
            return o;
          }(e, t);
          const s = a.length;
          if (s > 1) {
            return c.Ignore;
          }
          if (s === 1 && a[0] !== n) {
            return c.Ignore;
          }
          if (s === 1) {
            if (((0, i.$isDelimiterNode)(e) || (0, i.$isDelimiterNode)(e.getPreviousSibling())) && ((0, i.$isDelimiterNode)(t) || (0, i.$isDelimiterNode)(t.getNextSibling()))) {
              return c.Remove;
            } else {
              return c.Ignore;
            }
          }
          const u = e.getTextContent();
          const f = t.getTextContent();
          if (!o && (u.charAt(0) === " " || f.charAt(f.length - 1) === " ")) {
            return c.Ignore;
          }
          return c.Add;
        }(o, a, e);
        if (u === c.Ignore) {
          return false;
        }
        if (u === c.Remove) {
          let e = o;
          let t = a;
          if (!(0, i.$isDelimiterNode)(e)) {
            e = (0, l.default)(e.getPreviousSibling(), "openingDelimiter.getPreviousSibling<DelimiterNode>()");
          }
          if (!(0, i.$isDelimiterNode)(t)) {
            t = (0, l.default)(t.getNextSibling(), "closingDelimiter.getNextSibling<DelimiterNode>()");
          }
          e.remove();
          t.remove();
        } else {
          var f;
          var m;
          const n = function (e) {
            switch (e) {
              case d.Bold:
                return "*";
              case d.Italic:
                return "_";
              case d.Strikethrough:
                return "~";
              case d.InlineCode:
                return "`";
              case d.Code:
                return "```";
            }
          }(e);
          const l = `${n}${t.getTextContent()}${n}`;
          const i = (0, r.$createTextNode)(l);
          const s = [i];
          const u = e === d.Code;
          const c = (f = o.getPreviousSibling()) === null || f === undefined ? undefined : f.getTextContent();
          if (!(u || c == null || c.charAt(c.length - 1) === " ")) {
            s.unshift((0, r.$createTextNode)(" "));
          }
          const p = (m = a.getNextSibling()) === null || m === undefined ? undefined : m.getTextContent();
          if (!(u || p == null || p.match(/^(\s|\W)/))) {
            s.push((0, r.$createTextNode)(" "));
          }
          t.insertNodes(s);
          t.setTextNodeRange(i, n.length, i, i.getTextContentSize() - n.length);
        }
      }(n);
    }), true);
  }, r.COMMAND_PRIORITY_HIGH);
};
var r = require("./14544.js");
var a = require("./71671.js");
var l = o(require("../app/670983.js"));
var i = require("./616098.js");
var s = require("./251922.js");
var u = require("./16188.js");
const d = require("../vendor/76672.js").Mirrored(["Bold", "Italic", "Strikethrough", "Code", "InlineCode"]);
const c = require("../vendor/76672.js").Mirrored(["Remove", "Add", "Ignore"]);