var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClipboardPlugin = function (e) {
  let {
    onTextPaste: t,
    onFiles: n,
    ignoreLineBreakOnPaste: o = false,
    pasteFromHTML: b = false
  } = e;
  const [M] = (0, i.useLexicalComposerContext)();
  const O = (0, E.default)(function () {
    var e = (0, r.default)(function* (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!e.clipboardData) {
        return;
      }
      const o = new m.default(e.clipboardData);
      if (function (e) {
        if (!e.hasFiles()) {
          return false;
        }
        if (e.hasType("text/html")) {
          const t = e.getData("text/html");
          if (t) {
            if (t.includes(S)) {
              return false;
            }
            const e = t.includes(_);
            const n = t.includes(T);
            if (e && !n) {
              return false;
            }
          }
        }
        return true;
      }(o)) {
        return void (n == null || n(o));
      }
      const [r, i, p] = yield Promise.all([o.getText([f.APP_TEXT_MIMETYPE]), o.getText(["text/html"]), o.getText(["text/plain"])]);
      let h;
      if (r != null) {
        h = r;
      } else if (i != null && b) {
        h = function (e) {
          try {
            const t = new DOMParser().parseFromString(e, "text/html");
            const n = [];
            const o = function () {
              if (!N) {
                N = (0, a.createEditor)({
                  namespace: "headless-editor",
                  onError: () => {},
                  nodes: [c.HeadingNode, d.ListNode, d.ListItemNode, c.QuoteNode, l.CodeNode, u.AutoLinkNode, u.LinkNode]
                });
              }
              return N;
            }();
            o.update(() => {
              const e = (0, s.$generateNodesFromDOM)(o, t).reverse();
              let r = null;
              for (; e.length;) {
                const t = e.pop();
                var l;
                if (y(t)) {
                  if (r) {
                    n.push(v(r));
                    r = null;
                  }
                  if ((0, a.$isParagraphNode)(t)) {
                    n.push(v(t.getChildren()));
                    n.push("");
                  } else if ((0, c.$isHeadingNode)(t)) {
                    n.push(`*${t.getTextContent()}*`);
                    n.push("");
                  } else if ((0, c.$isQuoteNode)(t)) {
                    n.push(`>${t.getTextContent()}`);
                    n.push("");
                  } else if ((0, d.$isListNode)(t)) {
                    const e = t.getListType() === "bullet";
                    const o = t.getListType() === "number";
                    let r = "";
                    if (e) {
                      r = "* ";
                    } else if (o) {
                      r = "1. ";
                    }
                    for (const e of t.getChildren()) {
                      n.push(`${r}${v(e.getChildren())}`);
                      if (o) {
                        r = `${parseInt(r, 10) + 1}. `;
                      }
                    }
                    n.push("");
                  }
                } else {
                  r = (l = r) !== null && l !== undefined ? l : [];
                  r.push(t);
                }
              }
              if (r) {
                n.push(v(r));
              }
            });
            return n.join("\n");
          } catch (e) {
            return null;
          }
        }(i);
      } else if (p != null) {
        h = p;
      }
      if (h != null && (t == null ? undefined : t(h)) !== true) {
        M.dispatchCommand(g, h);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
  const A = (0, E.default)(e => {
    let t;
    t = o ? [e.replace(C, "")] : e.split(C);
    M.update(() => {
      const e = (0, p.$getRangeSelection)();
      if (e) {
        if (!e.isCollapsed()) {
          e.removeText();
        }
        t.forEach((t, n) => {
          if (n !== 0) {
            e.insertParagraph();
          }
          e.insertText(t);
        });
      }
    });
  });
  (0, h.useLexicalCommandListener)(M, a.CUT_COMMAND, e => e instanceof ClipboardEvent && (e.preventDefault(), e.stopPropagation(), function (e) {
    const {
      currentTarget: t,
      clipboardData: n
    } = e;
    if (!(t instanceof HTMLElement && n)) {
      return;
    }
    const o = f.Clipboard.fromSelection(t, window.getSelection());
    n.setData("text/plain", o.toPlainString());
    try {
      n.setData(f.APP_TEXT_MIMETYPE, o.toAppString());
    } catch (e) {}
  }(e), function (e) {
    e.update(() => {
      const e = (0, p.$getRangeSelection)();
      if (e) {
        e.removeText();
      }
    });
  }(M), true));
  (0, h.useLexicalCommandListener)(M, a.PASTE_COMMAND, e => {
    O(e);
    return true;
  });
  (0, h.useLexicalCommandListener)(M, g, e => {
    A(e);
    return true;
  });
  return null;
};
exports.PASTE_TEXT_COMMAND = undefined;
var r = o(require("../vendor/348926.js"));
var a = require("./14544.js");
var l = require("./630754.js");
var i = require("./71671.js");
var s = require("./69910.js");
var u = require("./200891.js");
var d = require("./276971.js");
var c = require("./552654.js");
var f = require("../app/791429.js");
var m = o(require("./194886.js"));
var p = require("./251922.js");
var h = require("./16188.js");
var E = o(require("../app/17533.js"));
const g = (0, a.createCommand)();
exports.PASTE_TEXT_COMMAND = g;
const C = /\r?\n|\r/g;
const _ = "urn:schemas-microsoft-com:office";
const T = "urn:schemas-microsoft-com:office:excel";
const S = "<meta name=ProgId content=PowerPoint.Slide>";
let N;
function v(e) {
  const t = [];
  for (const n of e) {
    if ((0, a.$isTextNode)(n)) {
      t.push(b(n));
    } else if ((0, u.$isLinkNode)(n)) {
      const e = n.getTextContent();
      const o = n.getURL();
      if (e === o) {
        t.push(o);
      } else {
        t.push(`${e} (${o})`);
      }
    } else {
      t.push(n.getTextContent());
    }
  }
  return t.join("");
}
function b(e) {
  let t = e.getTextContent();
  if (e.hasFormat("italic")) {
    t = `_${t}_`;
  }
  if (e.hasFormat("bold")) {
    t = `*${t}*`;
  }
  if (e.hasFormat("strikethrough")) {
    t = `~${t}~`;
  }
  if (e.hasFormat("code")) {
    t = `\`${t}\``;
  }
  return t;
}
function y(e) {
  return (0, a.$isParagraphNode)(e) || (0, c.$isHeadingNode)(e) || (0, c.$isQuoteNode)(e) || (0, d.$isListNode)(e);
}