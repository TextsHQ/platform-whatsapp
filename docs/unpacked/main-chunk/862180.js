var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFormatPreviewPlugin = function (e) {
  let {
    bulletPointsEnabled: t,
    numberedListEnabled: n,
    inlineCodeEnabled: o,
    blockQuoteEnabled: l,
    highlightedBotCommands: i
  } = e;
  const [s] = (0, a.useLexicalComposerContext)();
  (0, p.useEffect)(() => {
    let e = false;
    function a() {
      h(s, {
        bulletPointsEnabled: t,
        numberedListEnabled: n,
        inlineCodeEnabled: o,
        blockQuoteEnabled: l,
        highlightedBotCommands: i
      });
    }
    const u = s.registerTextContentListener(() => {
      e = true;
    });
    const d = s.registerUpdateListener(() => {
      if (!s.isComposing() && e) {
        e = false;
        a();
      }
    });
    const c = s.registerMutationListener(r.ParagraphNode, e => {
      for (const [, t] of e) {
        if (t === "created" || t === "destroyed") {
          self.setTimeout(a, 0);
          break;
        }
      }
    });
    return () => {
      u();
      c();
      d();
    };
  }, [s, t, n, o, l, i]);
  (0, p.useEffect)(() => {
    h(s, {
      bulletPointsEnabled: t,
      numberedListEnabled: n,
      inlineCodeEnabled: o,
      blockQuoteEnabled: l,
      highlightedBotCommands: i
    });
    return () => {
      s.update(S);
    };
  }, [s, t, n, o, l, i]);
  return null;
};
var r = require("./14544.js");
var a = require("./71671.js");
var l = o(require("../app/670983.js"));
var i = require("./616098.js");
var s = require("./251922.js");
var u = require("./330007.js");
var d = require("./699306.js");
var c = require("./331853.js");
var f = require("./347572.js");
var m = require("./408023.js");
var p = require("../vendor/667294.js");
function h(e, t) {
  e.update(() => {
    const e = function () {
      const e = [];
      for (const t of (0, r.$getRoot)().getChildren()) {
        const n = [];
        for (const e of t.getChildren()) {
          let t = e.getTextContent();
          if ((0, c.$isMentionNode)(e)) {
            t = t.replace(/[\*_~`]/g, "=");
          }
          n.push(t);
        }
        e.push(n.join(""));
      }
      return e.join("\n");
    }();
    if (!e) {
      return void S();
    }
    const n = (0, m.parseText)(e, t);
    if (n) {
      (function (e) {
        try {
          if (!(0, r.$getRoot)().getFirstChild()) {
            return;
          }
          let t = function () {
            let e = (0, s.assertParagraphNode)((0, r.$getRoot)().getFirstChild());
            for (; !e.getFirstChild();) {
              if (!e.getNextSibling()) {
                return null;
              }
              e = (0, s.assertParagraphNode)(e.getNextSibling());
            }
            const t = e.getFirstChild();
            return t && (0, s.assertTextNode)(t, "get first text node");
          }();
          if (!t) {
            return;
          }
          for (const n of e.children) {
            if (!t) {
              break;
            }
            t = E(n, t, []);
          }
        } catch (e) {
          if (!(e instanceof s.NodeTypeAssertionError)) {
            throw e;
          }
          S();
        }
      })(n);
      (function () {
        let e = (0, r.$getRoot)().getFirstChild();
        for (; e;) {
          (0, s.assertParagraphNode)(e);
          T(e);
          e = e.getNextSibling();
        }
      })();
    } else {
      S();
    }
  }, {
    tag: "history-merge",
    skipTransforms: true
  });
}
function E(e, t, n) {
  if (e.text != null) {
    let o = t;
    const r = e.text.replace(/\n/g, "");
    if (!r) {
      return o;
    }
    for (o of function* (e, t) {
      let n = e;
      let o = 0;
      for (; n && o < t;) {
        n = N(n);
        const e = n.getTextContentSize();
        const r = t - o;
        if (r < e) {
          [n] = n.splitText(0, r);
        }
        yield n;
        o += e;
        n = g(n);
      }
    }(o, r.length)) {
      _(o, n);
    }
    return g(o);
  }
  if (m.BulletedListItemFormats.has(e.format) && e.children) {
    let o = g((0, u.$transformToListBulletNode)(C(t, e.symbol)));
    for (const t of e.children) {
      if (!o) {
        break;
      }
      o = E(t, o, n);
    }
    return o;
  }
  if (e.format === m.FormatType.NumberedListItem && e.children) {
    let o = g((0, d.$transformToListNumberNode)(C(t, e.symbol)));
    for (const t of e.children) {
      if (!o) {
        break;
      }
      o = E(t, o, n);
    }
    return o;
  }
  if (e.format === m.FormatType.BlockQuote && e.children) {
    let o = g((0, f.$transformToQuoteLineNode)(C(t, e.symbol)));
    for (const t of e.children) {
      if (!o) {
        break;
      }
      o = E(t, o, [m.FormatType.BlockQuote, ...n]);
    }
    return o;
  }
  if (e.format === m.FormatType.BotCommand && e.children) {
    let o = t;
    for (const t of e.children) {
      if (!o) {
        break;
      }
      o = E(t, o, [m.FormatType.BotCommand, ...n]);
    }
    return o;
  }
  if (e.children) {
    let o = (0, s.assertTextNode)(N(t), "text node starts with an opening symbol");
    const r = g((0, i.$transformToDelimiterNode)(C(o, e.symbol)));
    o = (0, l.default)(r, "nextNode");
    for (const t of e.children) {
      const r = E(t, o, [...n, e.format]);
      o = (0, l.default)(r, "n");
    }
    return g((0, i.$transformToDelimiterNode)(C((0, s.assertTextNode)(o, "text node starts with a closing symbol"), e.symbol)));
  }
}
function g(e) {
  let t = e == null ? undefined : e.getNextSibling();
  if (t) {
    return (0, s.assertTextNode)(t, "getNextTextNode: has next sibling");
  }
  let n = (0, s.assertParagraphNode)(e == null ? undefined : e.getParent());
  for (; n && !t && (n = n.getNextSibling(), n);) {
    t = (0, s.assertParagraphNode)(n).getFirstChild();
  }
  return t && (0, s.assertTextNode)(t, "getNextTextNode: found next node");
}
function C(e, t) {
  const n = e.getTextContentSize();
  if (n === t.length) {
    return e;
  }
  if (n > t.length) {
    const [n] = e.splitText(0, t.length);
    return n;
  }
  let o = e;
  for (; o.getTextContentSize() < t.length;) {
    const [e] = (0, l.default)(g(o), "$getNextTextNode(symbolNode)").splitText(0, t.length - o.getTextContentSize());
    o = o.mergeWithSibling(e);
  }
  return o;
}
function _(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if ((0, r.$isTextNode)(e) && !e.isToken()) {
    v(e);
    for (const o of t) {
      switch (o) {
        case m.FormatType.Bold:
          e.toggleFormat("bold");
          break;
        case m.FormatType.Italic:
          e.toggleFormat("italic");
          break;
        case m.FormatType.Strikethrough:
          e.toggleFormat("strikethrough");
          break;
        case m.FormatType.Code:
          e.toggleFormat("code");
          break;
        case m.FormatType.InlineCode:
          e.toggleFormat("code");
          b(e, "color: var(--inline-code-text);", "border-radius: 6px;", "background-color: var(--inline-code-background);", "padding: 0 4px;");
          break;
        case m.FormatType.BlockQuote:
          if (!(n || (0, c.$isMentionNode)(e))) {
            b(e, "color: var(--block-quote-text);");
          }
          break;
        case m.FormatType.BotCommand:
          b(e, "color: var(--bot-command-text);");
          break;
        case m.FormatType.BulletedListItem:
        case m.FormatType.HyphenListItem:
        case m.FormatType.NumberedListItem:
      }
    }
  }
}
function T(e) {
  e.setIndent(e.getTargetIndent());
}
function S() {
  (0, r.$getRoot)().getChildren().forEach(e => {
    e.setIndent(0);
    e.getChildren().forEach(e => {
      const t = N(e);
      t.setFormat(0);
      t.setStyle("");
    });
  });
}
function N(e) {
  if (!(e instanceof u.ListBulletNode || e instanceof d.ListNumberNode || e instanceof f.QuoteLineNode || e instanceof i.DelimiterNode)) {
    return e;
  }
  const t = new r.TextNode(e.getTextContent());
  e.replace(t);
  return t;
}
function v(e) {
  e.setStyle("");
  e.setFormat(0);
}
function b(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) {
    n[o - 1] = arguments[o];
  }
  e.setStyle(`${e.getStyle()} ${n.join("")}`);
}