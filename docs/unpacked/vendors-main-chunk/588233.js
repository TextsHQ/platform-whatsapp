var r = require("./915660.js");
require("./735433.js");
require("./939980.js");
require("./524335.js");
require("./424064.js");
require("./804279.js");
require("./115251.js");
require("./11426.js");
require("./335266.js");
require("./180366.js");
require("./470767.js");
require("./590874.js");
require("./496836.js");
require("./652503.js");
require("./402731.js");
var i = require("./376969.js");
var o = require("./932998.js");
let s = e => e != null && r.languages.hasOwnProperty(e) ? e : undefined;
function l(e, t) {
  for (let n of e.childNodes) {
    if (i.isHTMLElement(n) && n.tagName === t) {
      return true;
    }
    l(n, t);
  }
  return false;
}
class a extends o.ElementNode {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new a(e.__language, e.__key);
  }
  constructor(e, t) {
    super(t);
    this.__language = s(e);
  }
  createDOM(e) {
    let t = document.createElement("code");
    i.addClassNamesToElement(t, e.theme.code);
    t.setAttribute("spellcheck", "false");
    if (e = this.getLanguage()) {
      t.setAttribute("data-highlight-language", e);
    }
    return t;
  }
  updateDOM(e, t) {
    let n = this.__language;
    e = e.__language;
    if (n) {
      if (n !== e) {
        t.setAttribute("data-highlight-language", n);
      }
    } else if (e) {
      t.removeAttribute("data-highlight-language");
    }
    return false;
  }
  static importDOM() {
    return {
      code: e => e.textContent != null && (/\r?\n/.test(e.textContent) || l(e, "BR")) ? {
        conversion: d,
        priority: 1
      } : null,
      div: () => ({
        conversion: g,
        priority: 1
      }),
      pre: () => ({
        conversion: d,
        priority: 0
      }),
      table: e => _(e) ? {
        conversion: f,
        priority: 3
      } : null,
      td: e => {
        let t = e.closest("table");
        if (e.classList.contains("js-file-line")) {
          return {
            conversion: p,
            priority: 3
          };
        } else if (t && _(t)) {
          return {
            conversion: h,
            priority: 3
          };
        } else {
          return null;
        }
      },
      tr: e => (e = e.closest("table")) && _(e) ? {
        conversion: h,
        priority: 3
      } : null
    };
  }
  static importJSON(e) {
    let t = u(e.language);
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      language: this.getLanguage(),
      type: "code",
      version: 1
    };
  }
  insertNewAfter(e, t = true) {
    var n = this.getChildren();
    var r = n.length;
    if (r >= 2 && n[r - 1].getTextContent() === "\n" && n[r - 2].getTextContent() === "\n" && e.isCollapsed() && e.anchor.key === this.__key && e.anchor.offset === r) {
      n[r - 1].remove();
      n[r - 2].remove();
      e = o.$createParagraphNode();
      this.insertAfter(e, t);
      return e;
    }
    t = e.anchor;
    n = e.focus;
    if (C(t = (t.isBefore(n) ? t : n).getNode()) || o.$isTabNode(t)) {
      t = x(t);
      n = [];
      for (;;) {
        if (o.$isTabNode(t)) {
          n.push(o.$createTabNode());
          t = t.getNextSibling();
        } else {
          if (!C(t)) {
            break;
          }
          {
            r = 0;
            let e = t.getTextContent();
            let i = t.getTextContentSize();
            for (; r < i && e[r] === " "; r++);
            if (r !== 0) {
              n.push(E(" ".repeat(r)));
            }
            if (r !== i) {
              break;
            }
            t = t.getNextSibling();
          }
        }
      }
      if (n.length > 0) {
        e.insertNodes([o.$createLineBreakNode(), ...n]);
        return n[n.length - 1];
      }
    }
    return null;
  }
  canIndent() {
    return false;
  }
  collapseAtStart() {
    let e = o.$createParagraphNode();
    this.getChildren().forEach(t => e.append(t));
    this.replace(e);
    return true;
  }
  setLanguage(e) {
    this.getWritable().__language = s(e);
  }
  getLanguage() {
    return this.getLatest().__language;
  }
}
function u(e) {
  return o.$applyNodeReplacement(new a(e));
}
function c(e) {
  return e instanceof a;
}
function d() {
  return {
    node: u()
  };
}
function g(e) {
  let t = e.style.fontFamily.match("monospace") !== null;
  if (t || function (e) {
    for (e = e.parentElement; e !== null;) {
      if (e.style.fontFamily.match("monospace") !== null) {
        return true;
      }
      e = e.parentElement;
    }
    return false;
  }(e)) {
    return {
      after: t => {
        let n = e.parentNode;
        if (n != null && e !== n.lastChild) {
          t.push(o.$createLineBreakNode());
        }
        return t;
      },
      node: t ? u() : null
    };
  } else {
    return {
      node: null
    };
  }
}
function f() {
  return {
    node: u()
  };
}
function h() {
  return {
    node: null
  };
}
function p(e) {
  return {
    after: t => {
      if (e.parentNode && e.parentNode.nextSibling) {
        t.push(o.$createLineBreakNode());
      }
      return t;
    },
    node: null
  };
}
function _(e) {
  return e.classList.contains("js-file-line-container");
}
let m = {
  c: "C",
  clike: "C-like",
  cpp: "C++",
  css: "CSS",
  html: "HTML",
  java: "Java",
  js: "JavaScript",
  markdown: "Markdown",
  objc: "Objective-C",
  plain: "Plain Text",
  py: "Python",
  rust: "Rust",
  sql: "SQL",
  swift: "Swift",
  typescript: "TypeScript",
  xml: "XML"
};
let y = {
  cpp: "cpp",
  java: "java",
  javascript: "js",
  md: "markdown",
  plaintext: "plain",
  python: "py",
  text: "plain",
  ts: "typescript"
};
function N(e) {
  return y[e] || e;
}
class v extends o.TextNode {
  constructor(e, t, n) {
    super(e, n);
    this.__highlightType = t;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new v(e.__text, e.__highlightType || undefined, e.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  createDOM(e) {
    let t = super.createDOM(e);
    e = T(e.theme, this.__highlightType);
    i.addClassNamesToElement(t, e);
    return t;
  }
  updateDOM(e, t, n) {
    let r = super.updateDOM(e, t, n);
    if ((e = T(n.theme, e.__highlightType)) !== (n = T(n.theme, this.__highlightType))) {
      if (e) {
        i.removeClassNamesFromElement(t, e);
      }
      if (n) {
        i.addClassNamesToElement(t, n);
      }
    }
    return r;
  }
  static importJSON(e) {
    let t = E(e.text, e.highlightType);
    t.setFormat(e.format);
    t.setDetail(e.detail);
    t.setMode(e.mode);
    t.setStyle(e.style);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      highlightType: this.getHighlightType(),
      type: "code-highlight",
      version: 1
    };
  }
  setFormat() {
    return this;
  }
  isParentRequired() {
    return true;
  }
  createParentElementNode() {
    return u();
  }
}
function T(e, t) {
  return t && e && e.codeHighlight && e.codeHighlight[t];
}
function E(e, t) {
  return o.$applyNodeReplacement(new v(e, t));
}
function C(e) {
  return e instanceof v;
}
function x(e) {
  let t = e;
  for (; C(e) || o.$isTabNode(e);) {
    t = e;
    e = e.getPreviousSibling();
  }
  return t;
}
function b(e) {
  let t = e;
  for (; C(e) || o.$isTabNode(e);) {
    t = e;
    e = e.getNextSibling();
  }
  return t;
}
let S = {
  defaultLanguage: "javascript",
  tokenize(e, t) {
    return r.tokenize(e, r.languages[t || ""] || r.languages[this.defaultLanguage]);
  }
};
function A(e, t) {
  let n = null;
  var r = null;
  var i = e;
  let s = t;
  let l = e.getTextContent();
  for (;;) {
    if (s === 0) {
      if ((i = i.getPreviousSibling()) === null) {
        break;
      }
      if (!(C(i) || o.$isTabNode(i) || o.$isLineBreakNode(i))) {
        throw Error("Expected a valid Code Node: CodeHighlightNode, TabNode, LineBreakNode");
      }
      if (o.$isLineBreakNode(i)) {
        n = {
          node: i,
          offset: 1
        };
        break;
      }
      s = Math.max(0, i.getTextContentSize() - 1);
      l = i.getTextContent();
    } else {
      s--;
    }
    let e = l[s];
    if (C(i) && e !== " ") {
      r = {
        node: i,
        offset: s
      };
    }
  }
  if (r !== null) {
    return r;
  }
  r = null;
  if (t < e.getTextContentSize()) {
    if (C(e)) {
      r = e.getTextContent()[t];
    }
  } else if (C(i = e.getNextSibling())) {
    r = i.getTextContent()[0];
  }
  if (r !== null && r !== " ") {
    return n;
  }
  r = e;
  i = e.getTextContent();
  e = e.getTextContentSize();
  e: for (;;) {
    if (!C(r) || t === e) {
      if ((r = r.getNextSibling()) === null || o.$isLineBreakNode(r)) {
        e = null;
        break e;
      }
      if (C(r)) {
        t = 0;
        i = r.getTextContent();
        e = r.getTextContentSize();
      }
    }
    if (C(r)) {
      if (i[t] !== " ") {
        e = {
          node: r,
          offset: t
        };
        break e;
      }
      t++;
    }
  }
  if (e !== null) {
    return e;
  } else {
    return n;
  }
}
function O(e) {
  e = b(e);
  if (o.$isLineBreakNode(e)) {
    throw Error("Unexpected lineBreakNode in getEndOfCodeInLine");
  }
  return e;
}
function w(e, t, n) {
  let r = e.getParent();
  if (c(r)) {
    R(r, t, n);
  } else if (C(e)) {
    e.replace(o.$createTextNode(e.__text));
  }
}
let k = new Set();
function R(e, t, n) {
  let r = e.getKey();
  if (!k.has(r)) {
    k.add(r);
    if (e.getLanguage() === undefined) {
      e.setLanguage(n.defaultLanguage);
    }
    t.update(() => {
      !function (e, t) {
        if (c(e = o.$getNodeByKey(e)) && e.isAttached()) {
          var n = o.$getSelection();
          if (o.$isRangeSelection(n)) {
            var r = (n = n.anchor).offset;
            var i = n.type === "element" && o.$isLineBreakNode(e.getChildAtIndex(n.offset - 1));
            var s = 0;
            if (!i) {
              let e = n.getNode();
              s = r + e.getPreviousSiblings().reduce((e, t) => e + t.getTextContentSize(), 0);
            }
            if (t()) {
              if (i) {
                n.getNode().select(r, r);
              } else {
                e.getChildren().some(e => {
                  let t = o.$isTextNode(e);
                  if (t || o.$isLineBreakNode(e)) {
                    let n = e.getTextContentSize();
                    if (t && n >= s) {
                      e.select(s, s);
                      return true;
                    }
                    s -= n;
                  }
                  return false;
                });
              }
            }
          } else {
            t();
          }
        }
      }(r, () => {
        var t = o.$getNodeByKey(r);
        if (!c(t) || !t.isAttached()) {
          return false;
        }
        var i = t.getTextContent();
        i = D(i = n.tokenize(i, t.getLanguage() || n.defaultLanguage));
        var s = t.getChildren();
        for (t = 0; t < s.length && M(s[t], i[t]);) {
          t++;
        }
        var l = s.length;
        let a = i.length;
        let u = Math.min(l, a) - t;
        let d = 0;
        for (; d < u;) {
          d++;
          if (!M(s[l - d], i[a - d])) {
            d--;
            break;
          }
        }
        s = t;
        l -= d;
        i = i.slice(t, a - d);
        let {
          from: g,
          to: f,
          nodesForReplacement: h
        } = {
          from: s,
          nodesForReplacement: i,
          to: l
        };
        return !(g === f && !h.length) && (e.splice(g, f - g, h), true);
      });
    }, {
      onUpdate: () => {
        k.delete(r);
      },
      skipTransforms: true
    });
  }
}
function D(e) {
  let t = [];
  e.forEach(e => {
    if (typeof e == "string") {
      var n = (e = e.split(/(\n|\t)/)).length;
      for (let r = 0; r < n; r++) {
        let n = e[r];
        if (n === "\n" || n === "\r\n") {
          t.push(o.$createLineBreakNode());
        } else if (n === "\t") {
          t.push(o.$createTabNode());
        } else if (n.length > 0) {
          t.push(E(n));
        }
      }
    } else {
      ({
        content: n
      } = e);
      if (typeof n == "string") {
        t.push(E(n, e.type));
      } else if (Array.isArray(n) && n.length === 1 && typeof n[0] == "string") {
        t.push(E(n[0], e.type));
      } else if (Array.isArray(n)) {
        t.push(...D(n));
      }
    }
  });
  return t;
}
function M(e, t) {
  return C(e) && C(t) && e.__text === t.__text && e.__highlightType === t.__highlightType || o.$isTabNode(e) && o.$isTabNode(t) || o.$isLineBreakNode(e) && o.$isLineBreakNode(t);
}
function $(e) {
  if (!o.$isRangeSelection(e)) {
    return false;
  }
  var t = e.anchor.getNode();
  e = e.focus.getNode();
  return !(!t.is(e) || !c(t)) || c(t = t.getParent()) && t.is(e.getParent());
}
function I(e) {
  let t = [[]];
  if ((e = e.getNodes()).length === 1 && c(e[0])) {
    return t;
  }
  let n = t[0];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (!(C(i) || o.$isTabNode(i) || o.$isLineBreakNode(i))) {
      throw Error("Expected selection to be inside CodeBlock and consisting of CodeHighlightNode, TabNode and LineBreakNode");
    }
    if (o.$isLineBreakNode(i)) {
      if (r !== 0 && n.length > 0) {
        n = [];
        t.push(n);
      }
    } else {
      n.push(i);
    }
  }
  return t;
}
function P(e) {
  var t = o.$getSelection();
  if (!o.$isRangeSelection(t) || !$(t)) {
    return false;
  }
  var n = I(t);
  let r = n.length;
  if (n.length > 1) {
    for (t = 0; t < r; t++) {
      var i = n[t];
      if (i.length > 0) {
        i = i[0];
        if (t === 0) {
          i = x(i);
        }
        if (i !== null) {
          if (e === o.INDENT_CONTENT_COMMAND) {
            i.insertBefore(o.$createTabNode());
          } else if (o.$isTabNode(i)) {
            i.remove();
          }
        }
      }
    }
    return true;
  }
  if (!(c(n = t.getNodes()[0]) || C(n) || o.$isTabNode(n) || o.$isLineBreakNode(n))) {
    throw Error("Expected selection firstNode to be CodeHighlightNode or CodeTabNode");
  }
  if (c(n)) {
    if (e === o.INDENT_CONTENT_COMMAND) {
      t.insertNodes([o.$createTabNode()]);
    }
    return true;
  }
  if ((n = x(n)) === null) {
    throw Error("Expected getFirstCodeNodeOfLine to return a valid Code Node");
  }
  if (e === o.INDENT_CONTENT_COMMAND) {
    if (o.$isLineBreakNode(n)) {
      n.insertAfter(o.$createTabNode());
    } else {
      n.insertBefore(o.$createTabNode());
    }
  } else if (o.$isTabNode(n)) {
    n.remove();
  }
  return true;
}
function L(e, t) {
  let n = o.$getSelection();
  if (!o.$isRangeSelection(n)) {
    return false;
  }
  let {
    anchor: r,
    focus: i
  } = n;
  let s = r.offset;
  let l = i.offset;
  let a = r.getNode();
  let u = i.getNode();
  var c = e === o.KEY_ARROW_UP_COMMAND;
  if (!$(n) || !C(a) && !o.$isTabNode(a) || !C(u) && !o.$isTabNode(u)) {
    return false;
  }
  if (!t.altKey) {
    if (n.isCollapsed()) {
      e = a.getParentOrThrow();
      if (c && s === 0 && a.getPreviousSibling() === null) {
        if (e.getPreviousSibling() === null) {
          e.selectPrevious();
          t.preventDefault();
          return true;
        }
      } else if (!c && s === a.getTextContentSize() && a.getNextSibling() === null && e.getNextSibling() === null) {
        e.selectNext();
        t.preventDefault();
        return true;
      }
    }
    return false;
  }
  let d;
  if (a.isBefore(u)) {
    var g = x(a);
    d = b(u);
  } else {
    g = x(u);
    d = b(a);
  }
  if (g == null || d == null) {
    return false;
  }
  let f = g.getNodesBetween(d);
  for (let e = 0; e < f.length; e++) {
    let t = f[e];
    if (!C(t) && !o.$isTabNode(t) && !o.$isLineBreakNode(t)) {
      return false;
    }
  }
  t.preventDefault();
  t.stopPropagation();
  t = c ? g.getPreviousSibling() : d.getNextSibling();
  if (!o.$isLineBreakNode(t)) {
    return true;
  }
  if ((g = c ? t.getPreviousSibling() : t.getNextSibling()) == null) {
    return true;
  }
  let h = (c = C(g) || o.$isTabNode(g) || o.$isLineBreakNode(g) ? c ? x(g) : b(g) : null) != null ? c : g;
  t.remove();
  f.forEach(e => e.remove());
  if (e === o.KEY_ARROW_UP_COMMAND) {
    f.forEach(e => h.insertBefore(e));
    h.insertBefore(t);
  } else {
    h.insertAfter(t);
    h = t;
    f.forEach(e => {
      h.insertAfter(e);
      h = e;
    });
  }
  n.setTextNodeRange(a, s, u, l);
  return true;
}
function F(e, t) {
  let n = o.$getSelection();
  if (!o.$isRangeSelection(n)) {
    return false;
  }
  let {
    anchor: r,
    focus: i
  } = n;
  var s = r.getNode();
  let l = i.getNode();
  e = e === o.MOVE_TO_START;
  if (!C(s) && !o.$isTabNode(s) || !C(l) && !o.$isTabNode(l)) {
    return false;
  }
  if (e) {
    if ((s = A(l, i.offset)) !== null) {
      let {
        node: e,
        offset: t
      } = s;
      if (o.$isLineBreakNode(e)) {
        e.selectNext(0, 0);
      } else {
        n.setTextNodeRange(e, t, e, t);
      }
    } else {
      l.getParentOrThrow().selectStart();
    }
  } else {
    O(l).select();
  }
  t.preventDefault();
  t.stopPropagation();
  return true;
}
exports.$createCodeHighlightNode = E;
exports.$createCodeNode = u;
exports.$isCodeHighlightNode = C;
exports.$isCodeNode = c;
exports.CODE_LANGUAGE_FRIENDLY_NAME_MAP = m;
exports.CODE_LANGUAGE_MAP = y;
exports.CodeHighlightNode = v;
exports.CodeNode = a;
exports.DEFAULT_CODE_LANGUAGE = "javascript";
exports.PrismTokenizer = S;
exports.getCodeLanguages = () => Object.keys(r.languages).filter(e => typeof r.languages[e] != "function").sort();
exports.getDefaultCodeLanguage = () => "javascript";
exports.getEndOfCodeInLine = O;
exports.getFirstCodeNodeOfLine = x;
exports.getLanguageFriendlyName = function (e) {
  e = N(e);
  return m[e] || e;
};
exports.getLastCodeNodeOfLine = b;
exports.getStartOfCodeInLine = A;
exports.normalizeCodeLang = N;
exports.registerCodeHighlighting = function (e, t) {
  if (!e.hasNodes([a, v])) {
    throw Error("CodeHighlightPlugin: CodeNode or CodeHighlightNode not registered on editor");
  }
  if (t == null) {
    t = S;
  }
  return i.mergeRegister(e.registerMutationListener(a, t => {
    e.update(() => {
      for (let [i, s] of t) {
        if (s !== "destroyed") {
          var n = o.$getNodeByKey(i);
          if (n !== null) {
            e: {
              var r = n;
              if ((n = e.getElementByKey(r.getKey())) === null) {
                break e;
              }
              let t = (r = r.getChildren()).length;
              if (t === n.__cachedChildrenLength) {
                break e;
              }
              n.__cachedChildrenLength = t;
              let i = "1";
              let s = 1;
              for (let e = 0; e < t; e++) {
                if (o.$isLineBreakNode(r[e])) {
                  i += "\n" + ++s;
                }
              }
              n.setAttribute("data-gutter", i);
            }
          }
        }
      }
    });
  }), e.registerNodeTransform(a, n => R(n, e, t)), e.registerNodeTransform(o.TextNode, n => w(n, e, t)), e.registerNodeTransform(v, n => w(n, e, t)), e.registerCommand(o.KEY_TAB_COMMAND, t => {
    let n = function (e) {
      var t = o.$getSelection();
      if (!o.$isRangeSelection(t) || !$(t)) {
        return null;
      }
      let n = e ? o.OUTDENT_CONTENT_COMMAND : o.INDENT_CONTENT_COMMAND;
      e = e ? o.OUTDENT_CONTENT_COMMAND : o.INSERT_TAB_COMMAND;
      if (I(t).length > 1) {
        return n;
      }
      var r = t.getNodes()[0];
      if (!(c(r) || C(r) || o.$isTabNode(r) || o.$isLineBreakNode(r))) {
        throw Error("Expected selection firstNode to be CodeHighlightNode or TabNode");
      }
      if (c(r)) {
        return n;
      }
      let i = x(r);
      r = b(r);
      var s = t.anchor;
      let l = t.focus;
      if (l.isBefore(s)) {
        t = l;
      } else {
        t = s;
        s = l;
      }
      if (i !== null && r !== null && t.key === i.getKey() && t.offset === 0 && s.key === r.getKey() && s.offset === r.getTextContentSize()) {
        return n;
      } else {
        return e;
      }
    }(t.shiftKey);
    return n !== null && (t.preventDefault(), e.dispatchCommand(n, undefined), true);
  }, o.COMMAND_PRIORITY_LOW), e.registerCommand(o.INSERT_TAB_COMMAND, () => !!$(o.$getSelection()) && (o.$insertNodes([o.$createTabNode()]), true), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.INDENT_CONTENT_COMMAND, () => P(o.INDENT_CONTENT_COMMAND), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.OUTDENT_CONTENT_COMMAND, () => P(o.OUTDENT_CONTENT_COMMAND), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.KEY_ARROW_UP_COMMAND, e => L(o.KEY_ARROW_UP_COMMAND, e), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.KEY_ARROW_DOWN_COMMAND, e => L(o.KEY_ARROW_DOWN_COMMAND, e), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.MOVE_TO_END, e => F(o.MOVE_TO_END, e), o.COMMAND_PRIORITY_LOW), e.registerCommand(o.MOVE_TO_START, e => F(o.MOVE_TO_START, e), o.COMMAND_PRIORITY_LOW));
};