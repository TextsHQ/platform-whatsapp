Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$isEmptyListItem = s;
exports.TextModifierPlugin = function (e) {
  let {
    autoToggleListBulletSymbol: t,
    autoToggleListNumberSymbol: n
  } = e;
  const [u] = (0, r.useLexicalComposerContext)();
  (0, i.useLexicalCommandListener)(u, l.NEW_PARAGRAPH_COMMAND, () => {
    if (t) {
      (function () {
        const e = (0, a.$getSelectionParagraph)();
        if (!e) {
          return;
        }
        const t = e.getPreviousSibling();
        const n = t == null ? undefined : t.getBulletNode();
        if (!t || !n) {
          return;
        }
        if (s(t)) {
          t.remove();
        } else {
          const e = n.getTextContent();
          (0, a.$insertText)(`${e} `);
        }
      })();
    }
    if (n) {
      (function () {
        const e = (0, a.$getSelectionParagraph)();
        if (!e) {
          return;
        }
        const t = e.getPreviousSibling();
        const n = t == null ? undefined : t.getNumberNode();
        if (!t || !n) {
          return;
        }
        if (s(t)) {
          t.remove();
        } else {
          const e = parseInt(n.getTextContent(), 10) + 1;
          if (e <= 99) {
            (0, a.$insertText)(`${e}. `);
          }
        }
      })();
    }
    return false;
  }, o.COMMAND_PRIORITY_NORMAL);
  (0, i.useLexicalCommandListener)(u, o.DELETE_LINE_COMMAND, e => {
    const t = (0, o.$getSelection)();
    return !!(0, o.$isRangeSelection)(t) && (t.isCollapsed() && t.anchor.type === "text" && t.modify("extend", e, "lineboundary"), t.removeText(), true);
  }, o.COMMAND_PRIORITY_HIGH);
  return null;
};
var o = require("./14544.js");
var r = require("./71671.js");
var a = require("./251922.js");
var l = require("./71881.js");
var i = require("./16188.js");
function s(e) {
  const t = (0, a.assertTextNode)(e.getBulletNode() || e.getNumberNode());
  return e.getTextContentSize() - t.getTextContentSize() == 1;
}