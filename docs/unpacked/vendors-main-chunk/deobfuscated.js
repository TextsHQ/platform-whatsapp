/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([[4700], {
  986907: (e, t, n) => {
    "use strict";

    const r = n(471313);
    e.exports = r;
  },
  471313: (e, t, n) => {
    "use strict";

    var r = n(587592);
    var i = n(389408);
    var o = n(376969);
    var s = n(932998);
    function l(e) {
      throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
    }
    function a(e) {
      let t = s.$getSelection();
      if (t == null) {
        throw Error("Expected valid LexicalSelection");
      }
      if (s.$isRangeSelection(t) && t.isCollapsed() || t.getNodes().length === 0) {
        return "";
      } else {
        return r.$generateHtmlFromNodes(e, t);
      }
    }
    function u(e) {
      let t = s.$getSelection();
      if (t == null) {
        throw Error("Expected valid LexicalSelection");
      }
      if (s.$isRangeSelection(t) && t.isCollapsed() || t.getNodes().length === 0) {
        return null;
      } else {
        return JSON.stringify(g(e, t));
      }
    }
    function c(e, t, n) {
      if ((s.DEPRECATED_$isGridSelection(n) || o.$findMatchingParent(n.anchor.getNode(), e => s.DEPRECATED_$isGridCellNode(e)) !== null && o.$findMatchingParent(n.focus.getNode(), e => s.DEPRECATED_$isGridCellNode(e)) !== null) && t.length === 1 && s.DEPRECATED_$isGridNode(t[0])) {
        (function (e, t, n, r) {
          if (!(e.length === 1 && s.DEPRECATED_$isGridNode(e[0]))) {
            l(42);
          }
          var i = e[0];
          e = i.getChildren();
          n = i.getFirstChildOrThrow().getChildrenSize();
          var a = i.getChildrenSize();
          var u = o.$findMatchingParent(t.anchor.getNode(), e => s.DEPRECATED_$isGridCellNode(e));
          t = (i = u && o.$findMatchingParent(u, e => s.DEPRECATED_$isGridRowNode(e))) && o.$findMatchingParent(i, e => s.DEPRECATED_$isGridNode(e));
          if (!(s.DEPRECATED_$isGridCellNode(u) && s.DEPRECATED_$isGridRowNode(i) && s.DEPRECATED_$isGridNode(t))) {
            l(43);
          }
          var c = i.getIndexWithinParent();
          var d = Math.min(t.getChildrenSize() - 1, c + a - 1);
          let g;
          let f;
          a = u.getIndexWithinParent();
          u = Math.min(i.getChildrenSize() - 1, a + n - 1);
          n = Math.min(a, u);
          i = Math.min(c, d);
          a = Math.max(a, u);
          c = Math.max(c, d);
          d = t.getChildren();
          u = 0;
          for (let t = i; t <= c; t++) {
            var h = d[t];
            if (!s.DEPRECATED_$isGridRowNode(h)) {
              l(24);
            }
            var p = e[u];
            if (!s.DEPRECATED_$isGridRowNode(p)) {
              l(24);
            }
            h = h.getChildren();
            p = p.getChildren();
            let r = 0;
            for (let e = n; e <= a; e++) {
              let o = h[e];
              if (!s.DEPRECATED_$isGridCellNode(o)) {
                l(25);
              }
              let u = p[r];
              if (!s.DEPRECATED_$isGridCellNode(u)) {
                l(25);
              }
              if (t === i && e === n) {
                g = o.getKey();
              } else if (t === c && e === a) {
                f = o.getKey();
              }
              let d = o.getChildren();
              u.getChildren().forEach(e => {
                if (s.$isTextNode(e)) {
                  s.$createParagraphNode().append(e);
                }
                o.append(e);
              });
              d.forEach(e => e.remove());
              r++;
            }
            u++;
          }
          if (g && f) {
            (e = s.DEPRECATED_$createGridSelection()).set(t.getKey(), g, f);
            s.$setSelection(e);
            r.dispatchCommand(s.SELECTION_CHANGE_COMMAND, undefined);
          }
        })(t, n, false, e);
      } else {
        (function (e, t) {
          let n = [];
          let r = null;
          for (let t = 0; t < e.length; t++) {
            let i = e[t];
            let o = s.$isLineBreakNode(i);
            if (o || s.$isDecoratorNode(i) && i.isInline() || s.$isElementNode(i) && i.isInline() || s.$isTextNode(i) || i.isParentRequired()) {
              if (r === null && (r = i.createParentElementNode(), n.push(r), o)) {
                continue;
              }
              if (r !== null) {
                r.append(i);
              }
            } else {
              n.push(i);
              r = null;
            }
          }
          if (s.$isRangeSelection(t)) {
            t.insertNodes(n);
          } else if (s.DEPRECATED_$isGridSelection(t)) {
            e = t.anchor.getNode();
            if (!s.DEPRECATED_$isGridCellNode(e)) {
              l(41);
            }
            e.append(...n);
          }
        })(t, n);
      }
    }
    function d(e, t, n, r = []) {
      let o = t == null || n.isSelected(t);
      let a = s.$isElementNode(n) && n.excludeFromCopy("html");
      var u = n;
      if (t !== null) {
        var c = i.$cloneWithProperties(n);
        u = c = s.$isTextNode(c) && t != null ? i.$sliceSelectedTextNodeContent(t, c) : c;
      }
      let g = s.$isElementNode(u) ? u.getChildren() : [];
      var f = u;
      if ((c = f.exportJSON()).type !== f.constructor.getType()) {
        l(58);
      }
      var h = c.children;
      if (s.$isElementNode(f)) {
        if (!Array.isArray(h)) {
          l(59);
        }
      }
      if (s.$isTextNode(u)) {
        if ((u = u.__text).length > 0) {
          c.text = u;
        } else {
          o = false;
        }
      }
      u = 0;
      for (; u < g.length; u++) {
        h = d(e, t, f = g[u], c.children);
        if (!o && s.$isElementNode(n) && h && n.extractWithChild(f, t, "clone")) {
          o = true;
        }
      }
      if (o && !a) {
        r.push(c);
      } else if (Array.isArray(c.children)) {
        for (e = 0; e < c.children.length; e++) {
          r.push(c.children[e]);
        }
      }
      return o;
    }
    function g(e, t) {
      let n = [];
      let r = s.$getRoot().getChildren();
      for (let i = 0; i < r.length; i++) {
        d(e, t, r[i], n);
      }
      return {
        namespace: e._config.namespace,
        nodes: n
      };
    }
    function f(e) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let r = s.$parseSerializedNode(e[n]);
        if (s.$isTextNode(r)) {
          i.$addNodeStyle(r);
        }
        t.push(r);
      }
      return t;
    }
    let h = null;
    function p(e, t) {
      var n = window.getSelection();
      if (!n) {
        return false;
      }
      var r = n.anchorNode;
      n = n.focusNode;
      if (r !== null && n !== null && !s.isSelectionWithinEditor(e, r, n)) {
        return false;
      }
      t.preventDefault();
      t = t.clipboardData;
      r = s.$getSelection();
      if (t === null || r === null) {
        return false;
      }
      n = a(e);
      e = u(e);
      let i = "";
      if (r !== null) {
        i = r.getTextContent();
      }
      if (n !== null) {
        t.setData("text/html", n);
      }
      if (e !== null) {
        t.setData("application/x-lexical-editor", e);
      }
      t.setData("text/plain", i);
      return true;
    }
    t.$generateJSONFromSelectedNodes = g;
    t.$generateNodesFromSerializedNodes = f;
    t.$getHtmlContent = a;
    t.$getLexicalContent = u;
    t.$insertDataTransferForPlainText = function (e, t) {
      if ((e = e.getData("text/plain") || e.getData("text/uri-list")) != null) {
        t.insertRawText(e);
      }
    };
    t.$insertDataTransferForRichText = function (e, t, n) {
      var i = e.getData("application/x-lexical-editor");
      if (i) {
        try {
          let e = JSON.parse(i);
          if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) {
            return c(n, f(e.nodes), t);
          }
        } catch {}
      }
      if (i = e.getData("text/html")) {
        try {
          var o = new DOMParser().parseFromString(i, "text/html");
          var l = r.$generateNodesFromDOM(n, o);
          return c(n, l, t);
        } catch {}
      }
      if ((e = e.getData("text/plain") || e.getData("text/uri-list")) != null) {
        if (s.$isRangeSelection(t)) {
          n = (e = e.split(/(\r?\n|\t)/)).length;
          o = 0;
          n = (e = e.split(/(\r?\n|\t)/)).length;
          o = 0;
          for (; o < n; o++) {
            if ((l = e[o]) === "\n" || l === "\r\n") {
              t.insertParagraph();
            } else if (l === "\t") {
              t.insertNodes([s.$createTabNode()]);
            } else {
              t.insertText(l);
            }
          }
        } else {
          t.insertRawText(e);
        }
      }
    };
    t.$insertGeneratedNodes = c;
    t.copyToClipboard = async function (e, t) {
      if (h !== null) {
        return false;
      }
      if (t !== null) {
        return new Promise(n => {
          e.update(() => {
            n(p(e, t));
          });
        });
      }
      var n = e.getRootElement();
      let r = document.getSelection();
      if (n === null || r === null) {
        return false;
      }
      let i = document.createElement("span");
      i.style.cssText = "position: fixed; top: -1000px;";
      i.append(document.createTextNode("#"));
      n.append(i);
      (n = new Range()).setStart(i, 0);
      n.setEnd(i, 1);
      r.removeAllRanges();
      r.addRange(n);
      return new Promise(t => {
        let n = e.registerCommand(s.COPY_COMMAND, r => {
          if (r instanceof ClipboardEvent) {
            n();
            if (h !== null) {
              window.clearTimeout(h);
              h = null;
            }
            t(p(e, r));
          }
          return true;
        }, s.COMMAND_PRIORITY_CRITICAL);
        h = window.setTimeout(() => {
          n();
          h = null;
          t(false);
        }, 50);
        document.execCommand("copy");
        i.remove();
      });
    };
  },
  323277: (e, t, n) => {
    "use strict";

    const r = n(588233);
    e.exports = r;
  },
  588233: (e, t, n) => {
    "use strict";

    var r = n(915660);
    n(735433);
    n(939980);
    n(524335);
    n(424064);
    n(804279);
    n(115251);
    n(11426);
    n(335266);
    n(180366);
    n(470767);
    n(590874);
    n(496836);
    n(652503);
    n(402731);
    var i = n(376969);
    var o = n(932998);
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
    t.$createCodeHighlightNode = E;
    t.$createCodeNode = u;
    t.$isCodeHighlightNode = C;
    t.$isCodeNode = c;
    t.CODE_LANGUAGE_FRIENDLY_NAME_MAP = m;
    t.CODE_LANGUAGE_MAP = y;
    t.CodeHighlightNode = v;
    t.CodeNode = a;
    t.DEFAULT_CODE_LANGUAGE = "javascript";
    t.PrismTokenizer = S;
    t.getCodeLanguages = () => Object.keys(r.languages).filter(e => typeof r.languages[e] != "function").sort();
    t.getDefaultCodeLanguage = () => "javascript";
    t.getEndOfCodeInLine = O;
    t.getFirstCodeNodeOfLine = x;
    t.getLanguageFriendlyName = function (e) {
      e = N(e);
      return m[e] || e;
    };
    t.getLastCodeNodeOfLine = b;
    t.getStartOfCodeInLine = A;
    t.normalizeCodeLang = N;
    t.registerCodeHighlighting = function (e, t) {
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
  },
  570573: (e, t, n) => {
    "use strict";

    const r = n(97370);
    e.exports = r;
  },
  97370: (e, t, n) => {
    "use strict";

    var r = n(932998);
    t.registerDragonSupport = function (e) {
      let t = window.location.origin;
      let n = n => {
        if (n.origin === t) {
          var i = e.getRootElement();
          if (document.activeElement === i && typeof (i = n.data) == "string") {
            try {
              var o = JSON.parse(i);
            } catch (e) {
              return;
            }
            if (o && o.protocol === "nuanria_messaging" && o.type === "request" && (o = o.payload) && o.functionId === "makeChanges" && (o = o.args)) {
              const [t, i, s, l, a] = o;
              e.update(() => {
                const e = r.$getSelection();
                if (r.$isRangeSelection(e)) {
                  var o = e.anchor;
                  let u = o.getNode();
                  let c = 0;
                  let d = 0;
                  if (r.$isTextNode(u) && t >= 0 && i >= 0) {
                    c = t;
                    d = t + i;
                    e.setTextNodeRange(u, c, u, d);
                  }
                  if (!(c === d && s === "")) {
                    e.insertRawText(s);
                    u = o.getNode();
                  }
                  if (r.$isTextNode(u)) {
                    c = l;
                    d = l + a;
                    c = c > (o = u.getTextContentSize()) ? o : c;
                    d = d > o ? o : d;
                    e.setTextNodeRange(u, c, u, d);
                  }
                  n.stopImmediatePropagation();
                }
              });
            }
          }
        }
      };
      window.addEventListener("message", n, true);
      return () => {
        window.removeEventListener("message", n, true);
      };
    };
  },
  548854: (e, t, n) => {
    "use strict";

    const r = n(654379);
    e.exports = r;
  },
  654379: (e, t, n) => {
    "use strict";

    var r = n(376969);
    var i = n(932998);
    function o(e, t) {
      let n = Date.now();
      let r = 0;
      return (o, s, l, a, u, c) => {
        let d = Date.now();
        if (c.has("historic")) {
          r = 0;
          n = d;
          return 2;
        }
        let g = function (e, t, n, r, o) {
          if (e === null || n.size === 0 && r.size === 0 && !o) {
            return 0;
          }
          var s = t._selection;
          var l = e._selection;
          if (o) {
            return 1;
          }
          if (!(i.$isRangeSelection(s) && i.$isRangeSelection(l) && l.isCollapsed() && s.isCollapsed())) {
            return 0;
          }
          o = t._nodeMap;
          let a = [];
          for (let e of n) {
            if ((n = o.get(e)) !== undefined) {
              a.push(n);
            }
          }
          for (let [e, t] of r) {
            if (t) {
              if (!((r = o.get(e)) === undefined || i.$isRootNode(r))) {
                a.push(r);
              }
            }
          }
          if (a.length === 0) {
            return 0;
          } else if (a.length > 1) {
            t = (r = t._nodeMap).get(s.anchor.key);
            l = r.get(l.anchor.key);
            if (t && l && !e._nodeMap.has(t.__key) && i.$isTextNode(t) && t.__text.length === 1 && s.anchor.offset === 1) {
              return 2;
            } else {
              return 0;
            }
          } else {
            t = a[0];
            e = e._nodeMap.get(t.__key);
            if (i.$isTextNode(e) && i.$isTextNode(t) && e.__mode === t.__mode) {
              if ((e = e.__text) === (t = t.__text)) {
                return 0;
              } else {
                s = s.anchor;
                l = l.anchor;
                if (s.key !== l.key || s.type !== "text") {
                  return 0;
                } else {
                  s = s.offset;
                  l = l.offset;
                  if ((e = t.length - e.length) == 1 && l === s - 1) {
                    return 2;
                  } else if (e === -1 && l === s + 1) {
                    return 3;
                  } else if (e === -1 && l === s) {
                    return 4;
                  } else {
                    return 0;
                  }
                }
              }
            } else {
              return 0;
            }
          }
        }(o, s, a, u, e.isComposing());
        let f = (() => {
          var f = l === null || l.editor === e;
          var h = c.has("history-push");
          if (!h && f && c.has("history-merge")) {
            return 0;
          }
          if (o === null) {
            return 1;
          }
          var p = s._selection;
          if (!(a.size > 0 || u.size > 0)) {
            if (p !== null) {
              return 0;
            } else {
              return 2;
            }
          }
          if (h === false && g !== 0 && g === r && d < n + t && f) {
            return 0;
          }
          if (a.size === 1) {
            {
              h = Array.from(a)[0];
              f = o._nodeMap.get(h);
              h = s._nodeMap.get(h);
              p = o._selection;
              let e = s._selection;
              let t = false;
              if (i.$isRangeSelection(p) && i.$isRangeSelection(e)) {
                t = p.anchor.type === "element" && p.focus.type === "element" && e.anchor.type === "text" && e.focus.type === "text";
              }
              f = !(t || !i.$isTextNode(f) || !i.$isTextNode(h)) && f.__type === h.__type && f.__text === h.__text && f.__mode === h.__mode && f.__detail === h.__detail && f.__style === h.__style && f.__format === h.__format && f.__parent === h.__parent;
            }
            if (f) {
              return 0;
            }
          }
          return 1;
        })();
        n = d;
        r = g;
        return f;
      };
    }
    t.createEmptyHistoryState = function () {
      return {
        current: null,
        redoStack: [],
        undoStack: []
      };
    };
    t.registerHistory = function (e, t, n) {
      let s = o(e, n);
      n = ({
        editorState: n,
        prevEditorState: r,
        dirtyLeaves: o,
        dirtyElements: l,
        tags: a
      }) => {
        const u = t.current;
        const c = t.redoStack;
        const d = t.undoStack;
        const g = u === null ? null : u.editorState;
        if (u === null || n !== g) {
          if ((r = s(r, n, u, o, l, a)) === 1) {
            if (c.length !== 0) {
              t.redoStack = [];
              e.dispatchCommand(i.CAN_REDO_COMMAND, false);
            }
            if (u !== null) {
              d.push({
                ...u
              });
              e.dispatchCommand(i.CAN_UNDO_COMMAND, true);
            }
          } else if (r === 2) {
            return;
          }
          t.current = {
            editor: e,
            editorState: n
          };
        }
      };
      let l = r.mergeRegister(e.registerCommand(i.UNDO_COMMAND, () => {
        let n = t.redoStack;
        let r = t.undoStack;
        if (r.length !== 0) {
          let o = t.current;
          let s = r.pop();
          if (o !== null) {
            n.push(o);
            e.dispatchCommand(i.CAN_REDO_COMMAND, true);
          }
          if (r.length === 0) {
            e.dispatchCommand(i.CAN_UNDO_COMMAND, false);
          }
          t.current = s || null;
          if (s) {
            s.editor.setEditorState(s.editorState, {
              tag: "historic"
            });
          }
        }
        return true;
      }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.REDO_COMMAND, () => {
        let n = t.redoStack;
        var r = t.undoStack;
        if (n.length !== 0) {
          let o = t.current;
          if (o !== null) {
            r.push(o);
            e.dispatchCommand(i.CAN_UNDO_COMMAND, true);
          }
          r = n.pop();
          if (n.length === 0) {
            e.dispatchCommand(i.CAN_REDO_COMMAND, false);
          }
          t.current = r || null;
          if (r) {
            r.editor.setEditorState(r.editorState, {
              tag: "historic"
            });
          }
        }
        return true;
      }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_EDITOR_COMMAND, () => {
        t.undoStack = [];
        t.redoStack = [];
        t.current = null;
        return false;
      }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_HISTORY_COMMAND, () => {
        t.undoStack = [];
        t.redoStack = [];
        t.current = null;
        e.dispatchCommand(i.CAN_REDO_COMMAND, false);
        e.dispatchCommand(i.CAN_UNDO_COMMAND, false);
        return true;
      }, i.COMMAND_PRIORITY_EDITOR), e.registerUpdateListener(n));
      let a = e.registerUpdateListener(n);
      return () => {
        l();
        a();
      };
    };
  },
  587592: (e, t, n) => {
    "use strict";

    const r = n(164478);
    e.exports = r;
  },
  164478: (e, t, n) => {
    "use strict";

    var r = n(389408);
    var i = n(932998);
    function o(e, t, n, s = null) {
      let l = s == null || t.isSelected(s);
      let a = i.$isElementNode(t) && t.excludeFromCopy("html");
      var u = t;
      if (s !== null) {
        u = r.$cloneWithProperties(t);
        u = i.$isTextNode(u) && s != null ? r.$sliceSelectedTextNodeContent(s, u) : u;
      }
      let c = i.$isElementNode(u) ? u.getChildren() : [];
      let {
        element: d,
        after: g
      } = u.exportDOM(e);
      if (!d) {
        return false;
      }
      let f = document.createDocumentFragment();
      for (let n = 0; n < c.length; n++) {
        let r = c[n];
        let a = o(e, r, f, s);
        if (!l && i.$isElementNode(t) && a && t.extractWithChild(r, s, "html")) {
          l = true;
        }
      }
      if (l && !a) {
        d.append(f);
        n.append(d);
        if (g && (e = g.call(u, d))) {
          d.replaceWith(e);
        }
      } else {
        n.append(f);
      }
      return l;
    }
    let s = new Set(["STYLE", "SCRIPT"]);
    function l(e, t, n = new Map(), r) {
      let o = [];
      if (s.has(e.nodeName)) {
        return o;
      }
      let a = null;
      var u;
      var {
        nodeName: c
      } = e;
      var d = t._htmlConversions.get(c.toLowerCase());
      c = null;
      if (d !== undefined) {
        for (u of d) {
          if ((d = u(e)) !== null && (c === null || c.priority < d.priority)) {
            c = d;
          }
        }
      }
      c = (u = c !== null ? c.conversion : null) ? u(e) : null;
      u = null;
      if (c !== null) {
        u = c.after;
        d = c.node;
        a = Array.isArray(d) ? d[d.length - 1] : d;
        if (a !== null) {
          for (var [, g] of n) {
            a = g(a, r);
            if (!a) {
              break;
            }
          }
          if (a) {
            o.push(...(Array.isArray(d) ? d : [a]));
          }
        }
        if (c.forChild != null) {
          n.set(e.nodeName, c.forChild);
        }
      }
      e = e.childNodes;
      r = [];
      g = 0;
      for (; g < e.length; g++) {
        r.push(...l(e[g], t, new Map(n), a));
      }
      if (u != null) {
        r = u(r);
      }
      if (a == null) {
        o = o.concat(r);
      } else if (i.$isElementNode(a)) {
        a.append(...r);
      }
      return o;
    }
    t.$generateHtmlFromNodes = function (e, t) {
      if (typeof document == "undefined" || typeof window == "undefined") {
        throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
      }
      let n = document.createElement("div");
      let r = i.$getRoot().getChildren();
      for (let i = 0; i < r.length; i++) {
        o(e, r[i], n, t);
      }
      return n.innerHTML;
    };
    t.$generateNodesFromDOM = function (e, t) {
      t = t.body ? t.body.childNodes : [];
      let n = [];
      for (let i = 0; i < t.length; i++) {
        var r = t[i];
        if (!s.has(r.nodeName)) {
          if ((r = l(r, e)) !== null) {
            n = n.concat(r);
          }
        }
      }
      return n;
    };
  },
  873435: (e, t, n) => {
    "use strict";

    const r = n(813906);
    e.exports = r;
  },
  813906: (e, t, n) => {
    "use strict";

    var r = n(376969);
    var i = n(932998);
    let o = new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
    class s extends i.ElementNode {
      static getType() {
        return "link";
      }
      static clone(e) {
        return new s(e.__url, {
          rel: e.__rel,
          target: e.__target,
          title: e.__title
        }, e.__key);
      }
      constructor(e, t = {}, n) {
        super(n);
        let {
          target: r = null,
          rel: i = null,
          title: o = null
        } = t;
        this.__url = e;
        this.__target = r;
        this.__rel = i;
        this.__title = o;
      }
      createDOM(e) {
        let t = document.createElement("a");
        t.href = this.sanitizeUrl(this.__url);
        if (this.__target !== null) {
          t.target = this.__target;
        }
        if (this.__rel !== null) {
          t.rel = this.__rel;
        }
        if (this.__title !== null) {
          t.title = this.__title;
        }
        r.addClassNamesToElement(t, e.theme.link);
        return t;
      }
      updateDOM(e, t) {
        let n = this.__url;
        let r = this.__target;
        let i = this.__rel;
        let o = this.__title;
        if (n !== e.__url) {
          t.href = n;
        }
        if (r !== e.__target) {
          if (r) {
            t.target = r;
          } else {
            t.removeAttribute("target");
          }
        }
        if (i !== e.__rel) {
          if (i) {
            t.rel = i;
          } else {
            t.removeAttribute("rel");
          }
        }
        if (o !== e.__title) {
          if (o) {
            t.title = o;
          } else {
            t.removeAttribute("title");
          }
        }
        return false;
      }
      static importDOM() {
        return {
          a: () => ({
            conversion: l,
            priority: 1
          })
        };
      }
      static importJSON(e) {
        let t = a(e.url, {
          rel: e.rel,
          target: e.target,
          title: e.title
        });
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      sanitizeUrl(e) {
        try {
          let t = new URL(e);
          if (!o.has(t.protocol)) {
            return "about:blank";
          }
        } catch {}
        return e;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          rel: this.getRel(),
          target: this.getTarget(),
          title: this.getTitle(),
          type: "link",
          url: this.getURL(),
          version: 1
        };
      }
      getURL() {
        return this.getLatest().__url;
      }
      setURL(e) {
        this.getWritable().__url = e;
      }
      getTarget() {
        return this.getLatest().__target;
      }
      setTarget(e) {
        this.getWritable().__target = e;
      }
      getRel() {
        return this.getLatest().__rel;
      }
      setRel(e) {
        this.getWritable().__rel = e;
      }
      getTitle() {
        return this.getLatest().__title;
      }
      setTitle(e) {
        this.getWritable().__title = e;
      }
      insertNewAfter(e, t = true) {
        e = this.getParentOrThrow().insertNewAfter(e, t);
        if (i.$isElementNode(e)) {
          t = a(this.__url, {
            rel: this.__rel,
            target: this.__target,
            title: this.__title
          });
          e.append(t);
          return t;
        } else {
          return null;
        }
      }
      canInsertTextBefore() {
        return false;
      }
      canInsertTextAfter() {
        return false;
      }
      canBeEmpty() {
        return false;
      }
      isInline() {
        return true;
      }
      extractWithChild(e, t) {
        if (!i.$isRangeSelection(t)) {
          return false;
        }
        e = t.anchor.getNode();
        let n = t.focus.getNode();
        return this.isParentOf(e) && this.isParentOf(n) && t.getTextContent().length > 0;
      }
    }
    function l(e) {
      let t = null;
      if (r.isHTMLAnchorElement(e)) {
        let n = e.textContent;
        if (n !== null && n !== "") {
          t = a(e.getAttribute("href") || "", {
            rel: e.getAttribute("rel"),
            target: e.getAttribute("target"),
            title: e.getAttribute("title")
          });
        }
      }
      return {
        node: t
      };
    }
    function a(e, t) {
      return i.$applyNodeReplacement(new s(e, t));
    }
    function u(e) {
      return e instanceof s;
    }
    class c extends s {
      static getType() {
        return "autolink";
      }
      static clone(e) {
        return new c(e.__url, {
          rel: e.__rel,
          target: e.__target,
          title: e.__title
        }, e.__key);
      }
      static importJSON(e) {
        let t = d(e.url, {
          rel: e.rel,
          target: e.target,
          title: e.title
        });
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      static importDOM() {
        return null;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          type: "autolink",
          version: 1
        };
      }
      insertNewAfter(e, t = true) {
        e = this.getParentOrThrow().insertNewAfter(e, t);
        if (i.$isElementNode(e)) {
          t = d(this.__url, {
            rel: this._rel,
            target: this.__target,
            title: this.__title
          });
          e.append(t);
          return t;
        } else {
          return null;
        }
      }
    }
    function d(e, t) {
      return i.$applyNodeReplacement(new c(e, t));
    }
    let g = i.createCommand("TOGGLE_LINK_COMMAND");
    t.$createAutoLinkNode = d;
    t.$createLinkNode = a;
    t.$isAutoLinkNode = function (e) {
      return e instanceof c;
    };
    t.$isLinkNode = u;
    t.AutoLinkNode = c;
    t.LinkNode = s;
    t.TOGGLE_LINK_COMMAND = g;
    t.toggleLink = function (e, t = {}) {
      let {
        target: n,
        title: r
      } = t;
      let o = t.rel === undefined ? "noopener" : t.rel;
      t = i.$getSelection();
      if (i.$isRangeSelection(t)) {
        t = t.extract();
        if (e === null) {
          t.forEach(e => {
            if (u(e = e.getParent())) {
              let t = e.getChildren();
              for (let n = 0; n < t.length; n++) {
                e.insertBefore(t[n]);
              }
              e.remove();
            }
          });
        } else {
          if (t.length === 1) {
            var s = t[0];
            if ((s = u(s) ? s : function (e, t) {
              for (; e !== null && (e = e.getParent()) !== null && !t(e););
              return e;
            }(s, u)) !== null) {
              s.setURL(e);
              if (n !== undefined) {
                s.setTarget(n);
              }
              if (o !== null) {
                s.setRel(o);
              }
              return void (r !== undefined && s.setTitle(r));
            }
          }
          let l = null;
          let c = null;
          t.forEach(t => {
            var s = t.getParent();
            if (s !== c && s !== null && (!i.$isElementNode(t) || t.isInline())) {
              if (u(s)) {
                c = s;
                s.setURL(e);
                if (n !== undefined) {
                  s.setTarget(n);
                }
                if (o !== null) {
                  c.setRel(o);
                }
                if (r !== undefined) {
                  c.setTitle(r);
                }
              } else {
                if (!s.is(l)) {
                  l = s;
                  c = a(e, {
                    rel: o,
                    target: n
                  });
                  if (u(s)) {
                    if (t.getPreviousSibling() === null) {
                      s.insertBefore(c);
                    } else {
                      s.insertAfter(c);
                    }
                  } else {
                    t.insertBefore(c);
                  }
                }
                if (u(t)) {
                  if (!t.is(c)) {
                    if (c !== null) {
                      s = t.getChildren();
                      for (let e = 0; e < s.length; e++) {
                        c.append(s[e]);
                      }
                    }
                    t.remove();
                  }
                } else if (c !== null) {
                  c.append(t);
                }
              }
            }
          });
        }
      }
    };
  },
  244783: (e, t, n) => {
    "use strict";

    const r = n(319206);
    e.exports = r;
  },
  319206: (e, t, n) => {
    "use strict";

    var r = n(932998);
    var i = n(376969);
    function o(e) {
      throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
    }
    function s(e) {
      let t = 1;
      for (e = e.getParent(); e != null;) {
        if (E(e)) {
          if (w(e = e.getParent())) {
            t++;
            e = e.getParent();
            continue;
          }
          o(40);
        }
        break;
      }
      return t;
    }
    function l(e) {
      if (!w(e = e.getParent())) {
        o(40);
      }
      let t = e;
      for (; t !== null;) {
        t = t.getParent();
        if (w(t)) {
          e = t;
        }
      }
      return e;
    }
    function a(e) {
      let t = [];
      e = e.getChildren().filter(E);
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        let i = r.getFirstChild();
        if (w(i)) {
          t = t.concat(a(i));
        } else {
          t.push(r);
        }
      }
      return t;
    }
    function u(e) {
      return E(e) && w(e.getFirstChild());
    }
    function c(e) {
      return T().append(e);
    }
    function d(e, t) {
      return E(e) && (t.length === 0 || t.length === 1 && e.is(t[0]) && e.getChildrenSize() === 0);
    }
    function g(e, t) {
      e.splice(e.getChildrenSize(), 0, t);
    }
    function f(e, t) {
      if (w(e)) {
        return e;
      }
      let n = e.getPreviousSibling();
      let r = e.getNextSibling();
      let i = T();
      i.setFormat(e.getFormatType());
      i.setIndent(e.getIndent());
      g(i, e.getChildren());
      if (w(n) && t === n.getListType()) {
        n.append(i);
        e.remove();
        if (w(r) && t === r.getListType()) {
          g(n, r.getChildren());
          r.remove();
        }
        return n;
      } else if (w(r) && t === r.getListType()) {
        r.getFirstChildOrThrow().insertBefore(i);
        e.remove();
        return r;
      } else {
        (t = O(t)).append(i);
        e.replace(t);
        p(t);
        return t;
      }
    }
    function h(e, t) {
      var n = e.getLastChild();
      let r = t.getFirstChild();
      if (n && r && u(n) && u(r)) {
        h(n.getFirstChild(), r.getFirstChild());
        r.remove();
      }
      if ((n = t.getChildren()).length > 0) {
        e.append(...n);
        p(e);
      }
      t.remove();
    }
    function p(e, t) {
      if ((e = t || e.getChildren()) !== undefined) {
        for (t = 0; t < e.length; t++) {
          let s = e[t];
          if (E(s)) {
            let e = s.getValue();
            var n = s;
            var r = n.getParent();
            var i = 1;
            if (r != null) {
              if (w(r)) {
                i = r.getStart();
              } else {
                o(44);
              }
            }
            n = n.getPreviousSiblings();
            r = 0;
            for (; r < n.length; r++) {
              let e = n[r];
              if (E(e) && !w(e.getFirstChild())) {
                i++;
              }
            }
            if (e !== i) {
              s.setValue(i);
            }
          }
        }
      }
    }
    function _(e) {
      if (!u(e)) {
        var t = e.getParent();
        var n = t ? t.getParent() : undefined;
        var r = n ? n.getParent() : undefined;
        if (w(r) && E(n) && w(t)) {
          var i = t ? t.getFirstChild() : undefined;
          var o = t ? t.getLastChild() : undefined;
          if (e.is(i)) {
            n.insertBefore(e);
            if (t.isEmpty()) {
              n.remove();
            }
          } else if (e.is(o)) {
            n.insertAfter(e);
            if (t.isEmpty()) {
              n.remove();
            }
          } else {
            var s = t.getListType();
            i = T();
            let r = O(s);
            i.append(r);
            e.getPreviousSiblings().forEach(e => r.append(e));
            o = T();
            s = O(s);
            o.append(s);
            g(s, e.getNextSiblings());
            n.insertBefore(i);
            n.insertAfter(o);
            n.replace(e);
          }
          p(t);
          p(r);
        }
      }
    }
    class m extends r.ElementNode {
      static getType() {
        return "listitem";
      }
      static clone(e) {
        return new m(e.__value, e.__checked, e.__key);
      }
      constructor(e, t, n) {
        super(n);
        this.__value = e === undefined ? 1 : e;
        this.__checked = t;
      }
      createDOM(e) {
        let t = document.createElement("li");
        let n = this.getParent();
        if (w(n) && n.getListType() === "check") {
          N(t, this, null);
        }
        t.value = this.__value;
        y(t, e.theme, this);
        return t;
      }
      updateDOM(e, t, n) {
        let r = this.getParent();
        if (w(r) && r.getListType() === "check") {
          N(t, this, e);
        }
        t.value = this.__value;
        y(t, n.theme, this);
        return false;
      }
      static transform() {
        return e => {
          let t = e.getParent();
          if (w(t)) {
            p(t);
            if (t.getListType() !== "check" && e.getChecked() != null) {
              e.setChecked(undefined);
            }
          }
        };
      }
      static importDOM() {
        return {
          li: () => ({
            conversion: v,
            priority: 0
          })
        };
      }
      static importJSON(e) {
        let t = new m(e.value, e.checked);
        t.setFormat(e.format);
        t.setDirection(e.direction);
        return t;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          checked: this.getChecked(),
          type: "listitem",
          value: this.getValue(),
          version: 1
        };
      }
      append(...e) {
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (r.$isElementNode(n) && this.canMergeWith(n)) {
            let e = n.getChildren();
            this.append(...e);
            n.remove();
          } else {
            super.append(n);
          }
        }
        return this;
      }
      replace(e, t) {
        if (E(e)) {
          return super.replace(e);
        }
        this.setIndent(0);
        let n = this.getParentOrThrow();
        if (!w(n)) {
          return e;
        }
        if (n.__first === this.getKey()) {
          n.insertBefore(e);
        } else if (n.__last === this.getKey()) {
          n.insertAfter(e);
        } else {
          let t = O(n.getListType());
          let r = this.getNextSibling();
          for (; r;) {
            let e = r;
            r = r.getNextSibling();
            t.append(e);
          }
          n.insertAfter(e);
          e.insertAfter(t);
        }
        if (t) {
          this.getChildren().forEach(t => {
            e.append(t);
          });
        }
        this.remove();
        if (n.getChildrenSize() === 0) {
          n.remove();
        }
        return e;
      }
      insertAfter(e, t = true) {
        var n = this.getParentOrThrow();
        if (!w(n)) {
          o(39);
        }
        var r = this.getNextSiblings();
        if (E(e)) {
          t = super.insertAfter(e, t);
          if (w(e = e.getParentOrThrow())) {
            p(e);
          }
          return t;
        }
        if (w(e)) {
          n = e;
          r = (e = e.getChildren()).length - 1;
          for (; r >= 0; r--) {
            n = e[r];
            this.insertAfter(n, t);
          }
          return n;
        }
        n.insertAfter(e, t);
        if (r.length !== 0) {
          let i = O(n.getListType());
          r.forEach(e => i.append(e));
          e.insertAfter(i, t);
        }
        return e;
      }
      remove(e) {
        let t = this.getPreviousSibling();
        let n = this.getNextSibling();
        super.remove(e);
        if (t && n && u(t) && u(n)) {
          h(t.getFirstChild(), n.getFirstChild());
          n.remove();
        } else if (n) {
          if (w(e = n.getParent())) {
            p(e);
          }
        }
      }
      insertNewAfter(e, t = true) {
        e = T(this.__checked == null && undefined);
        this.insertAfter(e, t);
        return e;
      }
      collapseAtStart(e) {
        let t = r.$createParagraphNode();
        this.getChildren().forEach(e => t.append(e));
        var n = this.getParentOrThrow();
        var i = n.getParentOrThrow();
        let o = E(i);
        if (n.getChildrenSize() === 1) {
          if (o) {
            n.remove();
            i.select();
          } else {
            n.insertBefore(t);
            n.remove();
            n = e.anchor;
            e = e.focus;
            i = t.getKey();
            if (n.type === "element" && n.getNode().is(this)) {
              n.set(i, n.offset, "element");
            }
            if (e.type === "element" && e.getNode().is(this)) {
              e.set(i, e.offset, "element");
            }
          }
        } else {
          n.insertBefore(t);
          this.remove();
        }
        return true;
      }
      getValue() {
        return this.getLatest().__value;
      }
      setValue(e) {
        this.getWritable().__value = e;
      }
      getChecked() {
        return this.getLatest().__checked;
      }
      setChecked(e) {
        this.getWritable().__checked = e;
      }
      toggleChecked() {
        this.setChecked(!this.__checked);
      }
      getIndent() {
        var e = this.getParent();
        if (e === null) {
          return this.getLatest().__indent;
        }
        e = e.getParentOrThrow();
        let t = 0;
        for (; E(e);) {
          e = e.getParentOrThrow().getParentOrThrow();
          t++;
        }
        return t;
      }
      setIndent(e) {
        if (!(typeof e == "number" && e > -1)) {
          o(117);
        }
        let t = this.getIndent();
        for (; t !== e;) {
          if (t < e) {
            e: {
              var n = new Set();
              if (u(this) || n.has(this.getKey())) {
                break e;
              }
              let e = this.getParent();
              var r = this.getNextSibling();
              var i = this.getPreviousSibling();
              if (u(r) && u(i)) {
                if (w(i = i.getFirstChild())) {
                  i.append(this);
                  var s = r.getFirstChild();
                  if (w(s)) {
                    g(i, s = s.getChildren());
                    r.remove();
                    n.add(r.getKey());
                  }
                  p(i);
                }
              } else if (u(r)) {
                if (w(r = r.getFirstChild())) {
                  if ((n = r.getFirstChild()) !== null) {
                    n.insertBefore(this);
                  }
                  p(r);
                }
              } else if (u(i)) {
                if (w(r = i.getFirstChild())) {
                  r.append(this);
                  p(r);
                }
              } else if (w(e)) {
                n = T();
                s = O(e.getListType());
                n.append(s);
                s.append(this);
                if (i) {
                  i.insertAfter(n);
                } else if (r) {
                  r.insertBefore(n);
                } else {
                  e.append(n);
                }
                p(s);
              }
              if (w(e)) {
                p(e);
              }
            }
            t++;
          } else {
            _(this);
            t--;
          }
        }
        return this;
      }
      insertBefore(e) {
        if (E(e)) {
          let e = this.getParentOrThrow();
          if (w(e)) {
            p(e, this.getNextSiblings());
          }
        }
        return super.insertBefore(e);
      }
      canInsertAfter(e) {
        return E(e);
      }
      canReplaceWith(e) {
        return E(e);
      }
      canMergeWith(e) {
        return r.$isParagraphNode(e) || E(e);
      }
      extractWithChild(e, t) {
        if (!r.$isRangeSelection(t)) {
          return false;
        }
        e = t.anchor.getNode();
        let n = t.focus.getNode();
        return this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t.getTextContent().length;
      }
      isParentRequired() {
        return true;
      }
      createParentElementNode() {
        return O("bullet");
      }
    }
    function y(e, t, n) {
      let r = [];
      let o = [];
      var s = (t = t.list) ? t.listitem : undefined;
      if (t && t.nested) {
        var l = t.nested.listitem;
      }
      if (s !== undefined) {
        s = s.split(" ");
        r.push(...s);
      }
      if (t) {
        s = w(s = n.getParent()) && s.getListType() === "check";
        let e = n.getChecked();
        if (!(s && !e)) {
          o.push(t.listitemUnchecked);
        }
        if (!(s && e)) {
          o.push(t.listitemChecked);
        }
        if (s) {
          r.push(e ? t.listitemChecked : t.listitemUnchecked);
        }
      }
      if (l !== undefined) {
        l = l.split(" ");
        if (n.getChildren().some(e => w(e))) {
          r.push(...l);
        } else {
          o.push(...l);
        }
      }
      if (o.length > 0) {
        i.removeClassNamesFromElement(e, ...o);
      }
      if (r.length > 0) {
        i.addClassNamesToElement(e, ...r);
      }
    }
    function N(e, t, n) {
      if (w(t.getFirstChild())) {
        e.removeAttribute("role");
        e.removeAttribute("tabIndex");
        e.removeAttribute("aria-checked");
      } else {
        e.setAttribute("role", "checkbox");
        e.setAttribute("tabIndex", "-1");
        if (!(n && t.__checked === n.__checked)) {
          e.setAttribute("aria-checked", t.getChecked() ? "true" : "false");
        }
      }
    }
    function v(e) {
      return {
        node: T(e = i.isHTMLElement(e) && e.getAttribute("aria-checked") === "true")
      };
    }
    function T(e) {
      return r.$applyNodeReplacement(new m(undefined, e));
    }
    function E(e) {
      return e instanceof m;
    }
    class C extends r.ElementNode {
      static getType() {
        return "list";
      }
      static clone(e) {
        return new C(e.__listType || A[e.__tag], e.__start, e.__key);
      }
      constructor(e, t, n) {
        super(n);
        this.__listType = e = A[e] || e;
        this.__tag = e === "number" ? "ol" : "ul";
        this.__start = t;
      }
      getTag() {
        return this.__tag;
      }
      setListType(e) {
        let t = this.getWritable();
        t.__listType = e;
        t.__tag = e === "number" ? "ol" : "ul";
      }
      getListType() {
        return this.__listType;
      }
      getStart() {
        return this.__start;
      }
      createDOM(e) {
        let t = document.createElement(this.__tag);
        if (this.__start !== 1) {
          t.setAttribute("start", String(this.__start));
        }
        t.__lexicalListType = this.__listType;
        x(t, e.theme, this);
        return t;
      }
      updateDOM(e, t, n) {
        return e.__tag !== this.__tag || (x(t, n.theme, this), false);
      }
      static importDOM() {
        return {
          ol: () => ({
            conversion: S,
            priority: 0
          }),
          ul: () => ({
            conversion: S,
            priority: 0
          })
        };
      }
      static importJSON(e) {
        let t = O(e.listType, e.start);
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      exportDOM(e) {
        ({
          element: e
        } = super.exportDOM(e));
        if (e) {
          if (this.__start !== 1) {
            e.setAttribute("start", String(this.__start));
          }
          if (this.__listType === "check") {
            e.setAttribute("__lexicalListType", "check");
          }
        }
        return {
          element: e
        };
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          listType: this.getListType(),
          start: this.getStart(),
          tag: this.getTag(),
          type: "list",
          version: 1
        };
      }
      canBeEmpty() {
        return false;
      }
      canIndent() {
        return false;
      }
      append(...e) {
        for (let n = 0; n < e.length; n++) {
          var t = e[n];
          if (E(t)) {
            super.append(t);
          } else {
            let e = T();
            if (w(t)) {
              e.append(t);
            } else if (r.$isElementNode(t)) {
              t = r.$createTextNode(t.getTextContent());
              e.append(t);
            } else {
              e.append(t);
            }
            super.append(e);
          }
        }
        p(this);
        return this;
      }
      extractWithChild(e) {
        return E(e);
      }
    }
    function x(e, t, n) {
      let r = [];
      let o = [];
      var l = t.list;
      if (l !== undefined) {
        let e = l[`${n.__tag}Depth`] || [];
        let i = (t = s(n) - 1) % e.length;
        var a = e[i];
        let u;
        let c = l[n.__tag];
        if ((l = l.nested) !== undefined && l.list) {
          u = l.list;
        }
        if (c !== undefined) {
          r.push(c);
        }
        if (a !== undefined) {
          a = a.split(" ");
          r.push(...a);
          a = 0;
          a = a.split(" ");
          r.push(...a);
          a = 0;
          for (; a < e.length; a++) {
            if (a !== i) {
              o.push(n.__tag + a);
            }
          }
        }
        if (u !== undefined) {
          n = u.split(" ");
          if (t > 1) {
            r.push(...n);
          } else {
            o.push(...n);
          }
        }
      }
      if (o.length > 0) {
        i.removeClassNamesFromElement(e, ...o);
      }
      if (r.length > 0) {
        i.addClassNamesToElement(e, ...r);
      }
    }
    function b(e) {
      let t = [];
      for (let r = 0; r < e.length; r++) {
        var n = e[r];
        if (E(n)) {
          t.push(n);
          if ((n = n.getChildren()).length > 1) {
            n.forEach(e => {
              if (w(e)) {
                t.push(c(e));
              }
            });
          }
        } else {
          t.push(c(n));
        }
      }
      return t;
    }
    function S(e) {
      let t = e.nodeName.toLowerCase();
      let n = null;
      if (t === "ol") {
        n = O("number", e.start);
      } else if (t === "ul") {
        n = i.isHTMLElement(e) && e.getAttribute("__lexicallisttype") === "check" ? O("check") : O("bullet");
      }
      return {
        after: b,
        node: n
      };
    }
    let A = {
      ol: "number",
      ul: "bullet"
    };
    function O(e, t = 1) {
      return r.$applyNodeReplacement(new C(e, t));
    }
    function w(e) {
      return e instanceof C;
    }
    let k = r.createCommand("INSERT_UNORDERED_LIST_COMMAND");
    let R = r.createCommand("INSERT_ORDERED_LIST_COMMAND");
    let D = r.createCommand("INSERT_CHECK_LIST_COMMAND");
    let M = r.createCommand("REMOVE_LIST_COMMAND");
    t.$createListItemNode = T;
    t.$createListNode = O;
    t.$getListDepth = s;
    t.$handleListInsertParagraph = function () {
      var e = r.$getSelection();
      if (!r.$isRangeSelection(e) || !e.isCollapsed()) {
        return false;
      }
      if (!E(e = e.anchor.getNode()) || e.getTextContent() !== "") {
        return false;
      }
      var t = l(e);
      var n = e.getParent();
      if (!w(n)) {
        o(40);
      }
      let i;
      let s = n.getParent();
      if (r.$isRootOrShadowRoot(s)) {
        i = r.$createParagraphNode();
        t.insertAfter(i);
      } else {
        if (!E(s)) {
          return false;
        }
        i = T();
        s.insertAfter(i);
      }
      i.select();
      if ((t = e.getNextSiblings()).length > 0) {
        let e = O(n.getListType());
        if (r.$isParagraphNode(i)) {
          i.insertAfter(e);
        } else {
          (n = T()).append(e);
          i.insertAfter(n);
        }
        t.forEach(t => {
          t.remove();
          e.append(t);
        });
      }
      (function (e) {
        for (; e.getNextSibling() == null && e.getPreviousSibling() == null;) {
          let t = e.getParent();
          if (t == null || !E(e) && !w(e)) {
            break;
          }
          e = t;
        }
        e.remove();
      })(e);
      return true;
    };
    t.$isListItemNode = E;
    t.$isListNode = w;
    t.INSERT_CHECK_LIST_COMMAND = D;
    t.INSERT_ORDERED_LIST_COMMAND = R;
    t.INSERT_UNORDERED_LIST_COMMAND = k;
    t.ListItemNode = m;
    t.ListNode = C;
    t.REMOVE_LIST_COMMAND = M;
    t.insertList = function (e, t) {
      e.update(() => {
        var e = r.$getSelection();
        if (r.$isRangeSelection(e) || r.DEPRECATED_$isGridSelection(e)) {
          var n = e.getNodes();
          var i = (e = e.anchor.getNode()).getParent();
          if (d(e, n)) {
            n = O(t);
            if (r.$isRootOrShadowRoot(i)) {
              e.replace(n);
              i = T();
              if (r.$isElementNode(e)) {
                i.setFormat(e.getFormatType());
                i.setIndent(e.getIndent());
              }
              n.append(i);
            } else if (E(e)) {
              g(n, (e = e.getParentOrThrow()).getChildren());
              e.replace(n);
            }
          } else {
            e = new Set();
            i = 0;
            e = new Set();
            i = 0;
            for (; i < n.length; i++) {
              var o = n[i];
              if (r.$isElementNode(o) && o.isEmpty() && !e.has(o.getKey())) {
                f(o, t);
              } else if (r.$isLeafNode(o)) {
                for (o = o.getParent(); o != null;) {
                  let n = o.getKey();
                  if (w(o)) {
                    if (!e.has(n)) {
                      var s = O(t);
                      g(s, o.getChildren());
                      o.replace(s);
                      p(s);
                      e.add(n);
                    }
                    break;
                  }
                  s = o.getParent();
                  if (r.$isRootOrShadowRoot(s) && !e.has(n)) {
                    e.add(n);
                    f(o, t);
                    break;
                  }
                  o = s;
                }
              }
            }
          }
        }
      });
    };
    t.removeList = function (e) {
      e.update(() => {
        let e = r.$getSelection();
        if (r.$isRangeSelection(e)) {
          var t = new Set();
          var n = e.getNodes();
          var o = e.anchor.getNode();
          if (d(o, n)) {
            t.add(l(o));
          } else {
            for (o = 0; o < n.length; o++) {
              var s = n[o];
              if (r.$isLeafNode(s)) {
                if ((s = i.$getNearestNodeOfType(s, m)) != null) {
                  t.add(l(s));
                }
              }
            }
          }
          for (let i of t) {
            t = i;
            n = a(i);
            for (let i of n) {
              g(n = r.$createParagraphNode(), i.getChildren());
              t.insertAfter(n);
              t = n;
              if (i.__key === e.anchor.key) {
                e.anchor.set(n.getKey(), 0, "element");
              }
              if (i.__key === e.focus.key) {
                e.focus.set(n.getKey(), 0, "element");
              }
              i.remove();
            }
            i.remove();
          }
        }
      });
    };
  },
  329428: (e, t, n) => {
    "use strict";

    const r = n(174301);
    e.exports = r;
  },
  174301: (e, t, n) => {
    "use strict";

    var r = n(932998);
    var i = n(376969);
    class o extends r.ElementNode {
      static getType() {
        return "mark";
      }
      static clone(e) {
        return new o(Array.from(e.__ids), e.__key);
      }
      static importDOM() {
        return null;
      }
      static importJSON(e) {
        let t = s(e.ids);
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          ids: this.getIDs(),
          type: "mark",
          version: 1
        };
      }
      constructor(e, t) {
        super(t);
        this.__ids = e || [];
      }
      createDOM(e) {
        let t = document.createElement("mark");
        i.addClassNamesToElement(t, e.theme.mark);
        if (this.__ids.length > 1) {
          i.addClassNamesToElement(t, e.theme.markOverlap);
        }
        return t;
      }
      updateDOM(e, t, n) {
        e = e.__ids.length;
        let r = this.__ids.length;
        n = n.theme.markOverlap;
        if (e !== r) {
          if (e === 1) {
            if (r === 2) {
              i.addClassNamesToElement(t, n);
            }
          } else if (r === 1) {
            i.removeClassNamesFromElement(t, n);
          }
        }
        return false;
      }
      hasID(e) {
        let t = this.getIDs();
        for (let n = 0; n < t.length; n++) {
          if (e === t[n]) {
            return true;
          }
        }
        return false;
      }
      getIDs() {
        let e = this.getLatest();
        if (l(e)) {
          return e.__ids;
        } else {
          return [];
        }
      }
      addID(e) {
        var t = this.getWritable();
        if (l(t)) {
          let n = t.__ids;
          t.__ids = n;
          t = 0;
          for (; t < n.length; t++) {
            if (e === n[t]) {
              return;
            }
          }
          n.push(e);
        }
      }
      deleteID(e) {
        var t = this.getWritable();
        if (l(t)) {
          let n = t.__ids;
          t.__ids = n;
          t = 0;
          for (; t < n.length; t++) {
            if (e === n[t]) {
              n.splice(t, 1);
              break;
            }
          }
        }
      }
      insertNewAfter(e, t = true) {
        e = this.getParentOrThrow().insertNewAfter(e, t);
        if (r.$isElementNode(e)) {
          t = s(this.__ids);
          e.append(t);
          return t;
        } else {
          return null;
        }
      }
      canInsertTextBefore() {
        return false;
      }
      canInsertTextAfter() {
        return false;
      }
      canBeEmpty() {
        return false;
      }
      isInline() {
        return true;
      }
      extractWithChild(e, t, n) {
        if (!r.$isRangeSelection(t) || n === "html") {
          return false;
        }
        let i = t.anchor;
        let o = t.focus;
        e = i.getNode();
        n = o.getNode();
        t = t.isBackward() ? i.offset - o.offset : o.offset - i.offset;
        return this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t;
      }
      excludeFromCopy(e) {
        return e !== "clone";
      }
    }
    function s(e) {
      return r.$applyNodeReplacement(new o(e));
    }
    function l(e) {
      return e instanceof o;
    }
    t.$createMarkNode = s;
    t.$getMarkIDs = function (e, t) {
      for (; e !== null;) {
        if (l(e)) {
          return e.getIDs();
        }
        if (r.$isTextNode(e) && t === e.getTextContentSize()) {
          let t = e.getNextSibling();
          if (l(t)) {
            return t.getIDs();
          }
        }
        e = e.getParent();
      }
      return null;
    };
    t.$isMarkNode = l;
    t.$unwrapMarkNode = function (e) {
      let t = e.getChildren();
      let n = null;
      for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (n === null) {
          e.insertBefore(i);
        } else {
          n.insertAfter(i);
        }
        n = i;
      }
      e.remove();
    };
    t.$wrapSelectionInMarkNode = function (e, t, n, i) {
      let o = e.getNodes();
      var a = e.anchor.offset;
      var u = e.focus.offset;
      e = o.length;
      let c;
      let d;
      let g = t ? u : a;
      a = t ? a : u;
      u = 0;
      for (; u < e; u++) {
        var f = o[u];
        if (r.$isElementNode(d) && d.isParentOf(f)) {
          continue;
        }
        var h = u === 0;
        let t = u === e - 1;
        var p = null;
        if (r.$isTextNode(f)) {
          p = f.getTextContentSize();
          let e = h ? g : 0;
          let n = t ? a : p;
          if (e === 0 && n === 0) {
            continue;
          }
          p = (f = f.splitText(e, n)).length > 1 && (f.length === 3 || h && !t || n === p) ? f[1] : f[0];
        } else {
          if (l(f)) {
            continue;
          }
          if (r.$isElementNode(f) && f.isInline()) {
            p = f;
          }
        }
        if (p !== null) {
          if (!(p && p.is(c))) {
            if (!((h = p.getParent()) != null && h.is(c))) {
              d = undefined;
            }
            c = h;
            if (d === undefined) {
              d = (i || s)([n]);
              p.insertBefore(d);
            }
            d.append(p);
          }
        } else {
          d = c = undefined;
        }
      }
      if (r.$isElementNode(d)) {
        if (t) {
          d.selectStart();
        } else {
          d.selectEnd();
        }
      }
    };
    t.MarkNode = o;
  },
  99299: (e, t, n) => {
    "use strict";

    const r = n(161490);
    e.exports = r;
  },
  161490: (e, t, n) => {
    "use strict";

    var r = n(986907);
    var i = n(389408);
    var o = n(376969);
    var s = n(932998);
    let l = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
    let a = l && "documentMode" in document ? document.documentMode : null;
    if (l) {
      /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    }
    if (l) {
      /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
    }
    let u = !(!l || !("InputEvent" in window) || a) && "getTargetRanges" in new window.InputEvent("input");
    let c = l && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
    let d = l && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let g = l && /^(?=.*Chrome).*/i.test(navigator.userAgent);
    let f = l && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !g;
    function h(e, t) {
      t.update(() => {
        let n = e instanceof KeyboardEvent ? null : e.clipboardData;
        let i = s.$getSelection();
        if (i !== null && n != null) {
          e.preventDefault();
          let o = r.$getHtmlContent(t);
          if (o !== null) {
            n.setData("text/html", o);
          }
          n.setData("text/plain", i.getTextContent());
        }
      });
    }
    t.registerPlainText = function (e) {
      return o.mergeRegister(e.registerCommand(s.DELETE_CHARACTER_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.deleteCharacter(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_WORD_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.deleteWord(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_LINE_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.deleteLine(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CONTROLLED_TEXT_INSERTION_COMMAND, e => {
        const t = s.$getSelection();
        if (!s.$isRangeSelection(t)) {
          return false;
        }
        if (typeof e == "string") {
          t.insertText(e);
        } else {
          const n = e.dataTransfer;
          if (n != null) {
            r.$insertDataTransferForPlainText(n, t);
          } else if (e = e.data) {
            t.insertText(e);
          }
        }
        return true;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.REMOVE_TEXT_COMMAND, () => {
        const e = s.$getSelection();
        return !!s.$isRangeSelection(e) && (e.removeText(), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_LINE_BREAK_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.insertLineBreak(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_PARAGRAPH_COMMAND, () => {
        const e = s.$getSelection();
        return !!s.$isRangeSelection(e) && (e.insertLineBreak(), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_LEFT_COMMAND, e => {
        const t = s.$getSelection();
        if (!s.$isRangeSelection(t)) {
          return false;
        }
        const n = e.shiftKey;
        return !!i.$shouldOverrideDefaultCharacterSelection(t, true) && (e.preventDefault(), i.$moveCharacter(t, n, true), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_RIGHT_COMMAND, e => {
        const t = s.$getSelection();
        if (!s.$isRangeSelection(t)) {
          return false;
        }
        const n = e.shiftKey;
        return !!i.$shouldOverrideDefaultCharacterSelection(t, false) && (e.preventDefault(), i.$moveCharacter(t, n, false), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_BACKSPACE_COMMAND, t => {
        const n = s.$getSelection();
        return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, true));
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_DELETE_COMMAND, t => {
        const n = s.$getSelection();
        return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, false));
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ENTER_COMMAND, t => {
        const n = s.$getSelection();
        if (!s.$isRangeSelection(n)) {
          return false;
        }
        if (t !== null) {
          if ((d || c || f) && u) {
            return false;
          }
          t.preventDefault();
        }
        return e.dispatchCommand(s.INSERT_LINE_BREAK_COMMAND, false);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.COPY_COMMAND, t => {
        const n = s.$getSelection();
        return !!s.$isRangeSelection(n) && (h(t, e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CUT_COMMAND, t => {
        const n = s.$getSelection();
        return !!s.$isRangeSelection(n) && (function (e, t) {
          h(e, t);
          t.update(() => {
            let e = s.$getSelection();
            if (s.$isRangeSelection(e)) {
              e.removeText();
            }
          });
        }(t, e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.PASTE_COMMAND, t => {
        const n = s.$getSelection();
        return !!s.$isRangeSelection(n) && (function (e, t) {
          e.preventDefault();
          t.update(() => {
            let t = s.$getSelection();
            let n = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
            if (n != null && s.$isRangeSelection(t)) {
              r.$insertDataTransferForPlainText(n, t);
            }
          }, {
            tag: "paste"
          });
        }(t, e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DROP_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (e.preventDefault(), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGSTART_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (e.preventDefault(), true);
      }, s.COMMAND_PRIORITY_EDITOR));
    };
  },
  111356: (e, t, n) => {
    "use strict";

    const r = n(650024);
    e.exports = r;
  },
  650024: (e, t, n) => {
    "use strict";

    var r = n(84260);
    var i = n(932998);
    var o = n(667294);
    var s = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? o.useLayoutEffect : o.useEffect;
    t.ClearEditorPlugin = function ({
      onClear: e
    }) {
      let [t] = r.useLexicalComposerContext();
      s(() => t.registerCommand(i.CLEAR_EDITOR_COMMAND, () => {
        t.update(() => {
          if (e == null) {
            let e = i.$getRoot();
            let t = i.$getSelection();
            let n = i.$createParagraphNode();
            e.clear();
            e.append(n);
            if (t !== null) {
              n.select();
            }
          } else {
            e();
          }
        });
        return true;
      }, i.COMMAND_PRIORITY_EDITOR), [t, e]);
      return null;
    };
  },
  822292: (e, t, n) => {
    "use strict";

    const r = n(544149);
    e.exports = r;
  },
  544149: (e, t, n) => {
    "use strict";

    var r = n(84260);
    var i = n(932998);
    var o = n(667294);
    let s = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
    var l = s ? o.useLayoutEffect : o.useEffect;
    let a = {
      tag: "history-merge"
    };
    t.LexicalComposer = function ({
      initialConfig: e,
      children: t
    }) {
      let n = o.useMemo(() => {
        const {
          theme: t,
          namespace: n,
          editor__DEPRECATED: o,
          nodes: l,
          onError: u,
          editorState: c
        } = e;
        const d = r.createLexicalComposerContext(null, t);
        let g = o || null;
        if (g === null) {
          const r = i.createEditor({
            editable: e.editable,
            namespace: n,
            nodes: l,
            onError: e => u(e, r),
            theme: t
          });
          !function (e, t) {
            if (t !== null) {
              if (t === undefined) {
                e.update(() => {
                  var t = i.$getRoot();
                  if (t.isEmpty()) {
                    let n = i.$createParagraphNode();
                    t.append(n);
                    t = s ? document.activeElement : null;
                    if (i.$getSelection() !== null || t !== null && t === e.getRootElement()) {
                      n.select();
                    }
                  }
                }, a);
              } else if (t !== null) {
                switch (typeof t) {
                  case "string":
                    let n = e.parseEditorState(t);
                    e.setEditorState(n, a);
                    break;
                  case "object":
                    e.setEditorState(t, a);
                    break;
                  case "function":
                    e.update(() => {
                      if (i.$getRoot().isEmpty()) {
                        t(e);
                      }
                    }, a);
                }
              }
            }
          }(r, c);
          g = r;
        }
        return [g, d];
      }, []);
      l(() => {
        let t = e.editable;
        let [r] = n;
        r.setEditable(t === undefined || t);
      }, []);
      return o.createElement(r.LexicalComposerContext.Provider, {
        value: n
      }, t);
    };
  },
  84260: (e, t, n) => {
    "use strict";

    const r = n(433489);
    e.exports = r;
  },
  433489: (e, t, n) => {
    "use strict";

    var r = n(667294);
    let i = r.createContext(null);
    t.LexicalComposerContext = i;
    t.createLexicalComposerContext = function (e, t) {
      let n = null;
      if (e != null) {
        n = e[1];
      }
      return {
        getTheme: function () {
          if (t != null) {
            return t;
          } else if (n != null) {
            return n.getTheme();
          } else {
            return null;
          }
        }
      };
    };
    t.useLexicalComposerContext = function () {
      let e = r.useContext(i);
      if (e == null) {
        throw Error("Minified Lexical error #8; visit https://lexical.dev/docs/error?code=8 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
      }
      return e;
    };
  },
  777943: (e, t, n) => {
    "use strict";

    const r = n(279848);
    e.exports = r;
  },
  279848: (e, t, n) => {
    "use strict";

    var r = n(667294);
    function i(e, t) {
      return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    var o = {
      error: null
    };
    var s = function (e) {
      function t() {
        for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) {
          r[i] = arguments[i];
        }
        (t = e.call.apply(e, [this].concat(r)) || this).state = o;
        t.resetErrorBoundary = function () {
          for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) {
            r[i] = arguments[i];
          }
          if (!(t.props.onReset == null)) {
            (e = t.props).onReset.apply(e, r);
          }
          t.reset();
        };
        return t;
      }
      !function (e, t) {
        e.prototype = Object.create(t.prototype);
        e.prototype.constructor = e;
        i(e, t);
      }(t, e);
      t.getDerivedStateFromError = function (e) {
        return {
          error: e
        };
      };
      var n = t.prototype;
      n.reset = function () {
        this.setState(o);
      };
      n.componentDidCatch = function (e, t) {
        var n;
        var r;
        if (!((n = (r = this.props).onError) == null)) {
          n.call(r, e, t);
        }
      };
      n.componentDidUpdate = function (e, t) {
        var n;
        var r;
        var i = this.props.resetKeys;
        if (this.state.error !== null && t.error !== null && function (e, t) {
          if (e === undefined) {
            e = [];
          }
          if (t === undefined) {
            t = [];
          }
          return e.length !== t.length || e.some(function (e, n) {
            return !Object.is(e, t[n]);
          });
        }(e.resetKeys, i)) {
          if (!((n = (r = this.props).onResetKeysChange) == null)) {
            n.call(r, e.resetKeys, i);
          }
          this.reset();
        }
      };
      n.render = function () {
        var e = this.state.error;
        var t = this.props;
        var n = t.fallbackRender;
        var i = t.FallbackComponent;
        t = t.fallback;
        if (e !== null) {
          e = {
            error: e,
            resetErrorBoundary: this.resetErrorBoundary
          };
          if (r.isValidElement(t)) {
            return t;
          }
          if (typeof n == "function") {
            return n(e);
          }
          if (i) {
            return r.createElement(i, e);
          }
          throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
        }
        return this.props.children;
      };
      return t;
    }(r.Component);
    e.exports = function ({
      children: e,
      onError: t
    }) {
      return r.createElement(s, {
        fallback: r.createElement("div", {
          style: {
            border: "1px solid #f00",
            color: "#f00",
            padding: "8px"
          }
        }, "An error was thrown."),
        onError: t
      }, e);
    };
  },
  704506: (e, t, n) => {
    "use strict";

    const r = n(800548);
    e.exports = r;
  },
  800548: (e, t, n) => {
    "use strict";

    var r = n(84260);
    var i = n(548854);
    var o = n(667294);
    t.createEmptyHistoryState = i.createEmptyHistoryState;
    t.HistoryPlugin = function ({
      externalHistoryState: e
    }) {
      let [t] = r.useLexicalComposerContext();
      (function (e, t, n = 1000) {
        let r = o.useMemo(() => t || i.createEmptyHistoryState(), [t]);
        o.useEffect(() => i.registerHistory(e, r, n), [n, e, r]);
      })(t, e);
      return null;
    };
  },
  717150: (e, t, n) => {
    "use strict";

    const r = n(224800);
    e.exports = r;
  },
  224800: (e, t, n) => {
    "use strict";

    var r = n(84260);
    var i = n(909722);
    var o = n(667294);
    var s = n(302977);
    var l = n(376969);
    var a = n(973935);
    var u = n(570573);
    var c = n(99299);
    var d = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? o.useLayoutEffect : o.useEffect;
    function g(e) {
      return e.getEditorState().read(s.$canShowPlaceholderCurry(e.isComposing()));
    }
    function f({
      content: e
    }) {
      var [t] = r.useLexicalComposerContext();
      t = function (e) {
        let [t, n] = o.useState(() => g(e));
        d(() => {
          function t() {
            let t = g(e);
            n(t);
          }
          t();
          return l.mergeRegister(e.registerUpdateListener(() => {
            t();
          }), e.registerEditableListener(() => {
            t();
          }));
        }, [e]);
        return t;
      }(t);
      let n = i();
      if (t) {
        if (typeof e == "function") {
          return e(n);
        } else {
          return e;
        }
      } else {
        return null;
      }
    }
    t.PlainTextPlugin = function ({
      contentEditable: e,
      placeholder: t,
      ErrorBoundary: n
    }) {
      let [i] = r.useLexicalComposerContext();
      n = function (e, t) {
        let [n, r] = o.useState(() => e.getDecorators());
        d(() => e.registerDecoratorListener(e => {
          a.flushSync(() => {
            r(e);
          });
        }), [e]);
        o.useEffect(() => {
          r(e.getDecorators());
        }, [e]);
        return o.useMemo(() => {
          let r = [];
          let i = Object.keys(n);
          for (let s = 0; s < i.length; s++) {
            let l = i[s];
            let u = o.createElement(t, {
              onError: t => e._onError(t)
            }, o.createElement(o.Suspense, {
              fallback: null
            }, n[l]));
            let c = e.getElementByKey(l);
            if (c !== null) {
              r.push(a.createPortal(u, c, l));
            }
          }
          return r;
        }, [t, n, e]);
      }(i, n);
      (function (e) {
        d(() => l.mergeRegister(c.registerPlainText(e), u.registerDragonSupport(e)), [e]);
      })(i);
      return o.createElement(o.Fragment, null, e, o.createElement(f, {
        content: t
      }), n);
    };
  },
  847480: (e, t, n) => {
    "use strict";

    const r = n(22210);
    e.exports = r;
  },
  22210: (e, t, n) => {
    "use strict";

    var r = n(587592);
    var i = n(873435);
    var o = n(329428);
    var s = n(376969);
    var l = n(932998);
    var a = n(667294);
    let u = Object.freeze({
      "\t": "\\t",
      "\n": "\\n"
    });
    let c = new RegExp(Object.keys(u).join("|"), "g");
    let d = Object.freeze({
      ancestorHasNextSibling: "|",
      ancestorIsLastChild: " ",
      hasNextSibling: "├",
      isLastChild: "└",
      selectedChar: "^",
      selectedLine: ">"
    });
    function g(e, t, n) {
      let s = e.getEditorState();
      let a = e._config;
      let u = e._compositionKey;
      let g = e._editable;
      if (n) {
        let t = "";
        s.read(() => {
          var n = r.$generateHtmlFromNodes(e);
          let i = document.createElement("div");
          i.innerHTML = n.trim();
          t = T(i, 0).innerHTML;
        });
        return t;
      }
      let p = " root\n";
      n = s.read(() => {
        const e = l.$getSelection();
        f(l.$getRoot(), (t, n) => {
          const r = `(${t.getKey()})`;
          const s = t.getType() || "";
          const a = t.isSelected();
          const u = o.$isMarkNode(t) ? ` id: [ ${t.getIDs().join(", ")} ] ` : "";
          var g = p;
          var f = a ? d.selectedLine : " ";
          var _ = n.join(" ");
          if (l.$isTextNode(t)) {
            var m = t.getTextContent();
            var T = m.length === 0 ? "(empty)" : `"${h(m)}"`;
            m = [T, (m = [v(t), y(t), N(t)].filter(Boolean).join(", ")).length !== 0 ? `{ ${m} }` : null].filter(Boolean).join(" ").trim();
          } else if (i.$isLinkNode(t)) {
            m = (m = t.getURL()).length === 0 ? "(empty)" : `"${h(m)}"`;
            if ((T = t.getTarget()) != null) {
              T = "target: " + T;
            }
            var E = Boolean;
            var C = t.getRel();
            if (C != null) {
              C = "rel: " + C;
            }
            let e = t.getTitle();
            if (e != null) {
              e = "title: " + e;
            }
            m = [m, (T = [T, C, e].filter(E).join(", ")).length !== 0 ? `{ ${T} }` : null].filter(Boolean).join(" ").trim();
          } else {
            m = "";
          }
          p = g + `${f} ${_} ${r} ${s} ${u} ${m}\n`;
          p += function ({
            indent: e,
            isSelected: t,
            node: n,
            nodeKeyDisplay: r,
            selection: i,
            typeDisplay: o
          }) {
            if (!l.$isTextNode(n) || !l.$isRangeSelection(i) || !t || l.$isElementNode(n)) {
              return "";
            }
            t = i.anchor;
            var s = i.focus;
            if (n.getTextContent() === "" || t.getNode() === i.focus.getNode() && t.offset === s.offset) {
              return "";
            }
            s = i.anchor;
            let a = i.focus;
            let u = n.getTextContent();
            let g = u.length;
            t = i = -1;
            if (s.type === "text" && a.type === "text") {
              let e = s.getNode();
              let r = a.getNode();
              if (e === r && n === e && s.offset !== a.offset) {
                [i, t] = s.offset < a.offset ? [s.offset, a.offset] : [a.offset, s.offset];
              } else {
                [i, t] = n === e ? e.isBefore(r) ? [s.offset, g] : [0, s.offset] : n === r ? r.isBefore(e) ? [a.offset, g] : [0, a.offset] : [0, g];
              }
            }
            n = (u.slice(0, i).match(c) || []).length;
            s = (u.slice(i, t).match(c) || []).length;
            let [f, h] = [i + n, t + n + s];
            if (f === h) {
              return "";
            } else {
              n = e[e.length - 1] === d.hasNextSibling ? d.ancestorHasNextSibling : d.ancestorIsLastChild;
              e = [...e.slice(0, e.length - 1), n];
              n = Array(f + 1).fill(" ");
              i = Array(h - f).fill(d.selectedChar);
              r = Array(r.length + (o.length + 3)).fill(" ");
              return [d.selectedLine, e.join(" "), [...r, ...n, ...i].join("")].join(" ") + "\n";
            }
          }({
            indent: n,
            isSelected: a,
            node: t,
            nodeKeyDisplay: r,
            selection: e,
            typeDisplay: s
          });
        });
        if (e === null) {
          return ": null";
        } else if (l.$isRangeSelection(e)) {
          return function (e) {
            let t = "";
            var n = v(e);
            t += `: range ${n !== "" ? `{ ${n} }` : ""} ${e.style !== "" ? `{ style: ${e.style} } ` : ""}`;
            n = e.anchor;
            e = e.focus;
            let r = n.offset;
            let i = e.offset;
            t += `\n  ├ anchor { key: ${n.key}, offset: ${r === null ? "null" : r}, type: ${n.type} }`;
            return t + `\n  └ focus { key: ${e.key}, offset: ${i === null ? "null" : i}, type: ${e.type} }`;
          }(e);
        } else if (l.DEPRECATED_$isGridSelection(e)) {
          return `: grid\n  └ { grid: ${e.gridKey}, anchorCell: ${e.anchor.key}, focusCell: ${e.focus.key} }`;
        } else {
          return `: node\n  └ [${Array.from(e._nodes).join(", ")}]`;
        }
      });
      p += "\n selection" + n;
      p += "\n\n commands:";
      if (t.length) {
        for (let {
          type: e,
          payload: n
        } of t) {
          p += `\n  └ { type: ${e}, payload: ${n instanceof Event ? n.constructor.name : n} }`;
        }
      } else {
        p += "\n  └ None dispatched.";
      }
      p += "\n\n editor:";
      p += `\n  └ namespace ${a.namespace}`;
      if (u !== null) {
        p += `\n  └ compositionKey ${u}`;
      }
      return p += `\n  └ editable ${String(g)}`;
    }
    function f(e, t, n = []) {
      let r = (e = e.getChildren()).length;
      e.forEach((e, i) => {
        t(e, n.concat(i === r - 1 ? d.isLastChild : d.hasNextSibling));
        if (l.$isElementNode(e)) {
          f(e, t, n.concat(i === r - 1 ? d.ancestorIsLastChild : d.ancestorHasNextSibling));
        }
      });
    }
    function h(e) {
      return Object.entries(u).reduce((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n)), e);
    }
    let p = [e => e.hasFormat("bold") && "Bold", e => e.hasFormat("code") && "Code", e => e.hasFormat("italic") && "Italic", e => e.hasFormat("strikethrough") && "Strikethrough", e => e.hasFormat("subscript") && "Subscript", e => e.hasFormat("superscript") && "Superscript", e => e.hasFormat("underline") && "Underline"];
    let _ = [e => e.isDirectionless() && "Directionless", e => e.isUnmergeable() && "Unmergeable"];
    let m = [e => e.isToken() && "Token", e => e.isSegmented() && "Segmented"];
    function y(e) {
      let t = _.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
      if (t !== "") {
        t = "detail: " + t;
      }
      return t;
    }
    function N(e) {
      let t = m.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
      if (t !== "") {
        t = "mode: " + t;
      }
      return t;
    }
    function v(e) {
      let t = p.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
      if (t !== "") {
        t = "format: " + t;
      }
      return t;
    }
    function T(e, t) {
      let n;
      let r = Array(1 + t++).join("  ");
      let i = Array(t - 1).join("  ");
      for (let o = 0; o < e.children.length; o++) {
        n = document.createTextNode("\n" + r);
        e.insertBefore(n, e.children[o]);
        T(e.children[o], t);
        if (e.lastElementChild === e.children[o]) {
          n = document.createTextNode("\n" + i);
          e.appendChild(n);
        }
      }
      return e;
    }
    t.TreeView = function ({
      treeTypeButtonClassName: e,
      timeTravelButtonClassName: t,
      timeTravelPanelSliderClassName: n,
      timeTravelPanelButtonClassName: r,
      viewClassName: i,
      timeTravelPanelClassName: o,
      editor: u
    }) {
      let [c, d] = a.useState([]);
      let [f, h] = a.useState("");
      let [p, _] = a.useState(false);
      let [m, y] = a.useState(false);
      let N = a.useRef(0);
      let v = a.useRef(null);
      let T = a.useRef(null);
      let [E, C] = a.useState(false);
      let [x, b] = a.useState(false);
      let [S, A] = a.useState(false);
      let O = a.useRef(null);
      let w = function (e) {
        let [t, n] = a.useState([]);
        a.useEffect(() => {
          let t = new Set();
          for (let [r] of e._commands) {
            t.add(e.registerCommand(r, e => {
              n(t => {
                (t = [...t]).push({
                  payload: e,
                  type: r.type ? r.type : "UNKNOWN"
                });
                if (t.length > 10) {
                  t.shift();
                }
                return t;
              });
              return false;
            }, l.COMMAND_PRIORITY_HIGH));
          }
          return () => t.forEach(e => e());
        }, [e]);
        return a.useMemo(() => t, [t]);
      }(u);
      let k = a.useCallback(e => {
        const t = g(u, w, m);
        h(t);
        if (!p) {
          d(t => [...t, [Date.now(), e]]);
        }
      }, [w, u, p, m]);
      a.useEffect(() => {
        let e = u.getEditorState();
        if (!S && e._nodeMap.size < 1000) {
          h(g(u, w, m));
        }
      }, [w, u, S, m]);
      a.useEffect(() => s.mergeRegister(u.registerUpdateListener(({
        editorState: e
      }) => {
        if (!(!S && e._nodeMap.size > 1000 && (O.current = e, b(true), !S))) {
          k(e);
        }
      }), u.registerEditableListener(() => {
        let e = g(u, w, m);
        h(e);
      })), [w, u, m, x, k, S]);
      let R = c.length;
      a.useEffect(() => {
        if (E) {
          let e;
          let t = () => {
            const n = N.current;
            if (n === R - 1) {
              C(false);
            } else {
              e = setTimeout(() => {
                N.current++;
                const e = N.current;
                const n = T.current;
                if (n !== null) {
                  n.value = String(e);
                }
                u.setEditorState(c[e][1]);
                t();
              }, c[n + 1][0] - c[n][0]);
            }
          };
          t();
          return () => {
            clearTimeout(e);
          };
        }
      }, [c, E, u, R]);
      a.useEffect(() => {
        let e = v.current;
        if (e !== null) {
          e.__lexicalEditor = u;
          return () => {
            e.__lexicalEditor = null;
          };
        }
      }, [u]);
      return a.createElement("div", {
        className: i
      }, !S && x ? a.createElement("div", {
        style: {
          padding: 20
        }
      }, a.createElement("span", {
        style: {
          marginRight: 20
        }
      }, "Detected large EditorState, this can impact debugging performance."), a.createElement("button", {
        onClick: () => {
          A(true);
          let e = O.current;
          if (e !== null) {
            O.current = null;
            k(e);
          }
        },
        style: {
          background: "transparent",
          border: "1px solid white",
          color: "white",
          cursor: "pointer",
          padding: 5
        }
      }, "Show full tree")) : null, S ? null : a.createElement("button", {
        onClick: () => y(!m),
        className: e,
        type: "button"
      }, m ? "Tree" : "Export DOM"), !p && (S || !x) && R > 2 && a.createElement("button", {
        onClick: () => {
          let e = u.getRootElement();
          if (e !== null) {
            e.contentEditable = "false";
            N.current = R - 1;
            _(true);
          }
        },
        className: t,
        type: "button"
      }, "Time Travel"), (S || !x) && a.createElement("pre", {
        ref: v
      }, f), p && (S || !x) && a.createElement("div", {
        className: o
      }, a.createElement("button", {
        className: r,
        onClick: () => {
          if (N.current === R - 1) {
            N.current = 1;
          }
          C(!E);
        },
        type: "button"
      }, E ? "Pause" : "Play"), a.createElement("input", {
        className: n,
        ref: T,
        onChange: e => {
          e = Number(e.target.value);
          let t = c[e];
          if (t) {
            N.current = e;
            u.setEditorState(t[1]);
          }
        },
        type: "range",
        min: "1",
        max: R - 1
      }), a.createElement("button", {
        className: r,
        onClick: () => {
          var e = u.getRootElement();
          if (e !== null) {
            e.contentEditable = "true";
            e = c.length - 1;
            u.setEditorState(c[e][1]);
            let t = T.current;
            if (t !== null) {
              t.value = String(e);
            }
            _(false);
            C(false);
          }
        },
        type: "button"
      }, "Exit")));
    };
  },
  909722: (e, t, n) => {
    "use strict";

    const r = n(965836);
    e.exports = r;
  },
  965836: (e, t, n) => {
    "use strict";

    var r = n(84260);
    var i = n(667294);
    var o = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? i.useLayoutEffect : i.useEffect;
    function s(e) {
      return {
        initialValueFn: () => e.isEditable(),
        subscribe: t => e.registerEditableListener(t)
      };
    }
    e.exports = function () {
      return function (e) {
        let [t] = r.useLexicalComposerContext();
        let n = i.useMemo(() => e(t), [t, e]);
        let s = i.useRef(n.initialValueFn());
        let [l, a] = i.useState(s.current);
        o(() => {
          let {
            initialValueFn: e,
            subscribe: t
          } = n;
          let r = e();
          if (s.current !== r) {
            s.current = r;
            a(r);
          }
          return t(e => {
            s.current = e;
            a(e);
          });
        }, [n, e]);
        return l;
      }(s);
    };
  },
  2903: (e, t, n) => {
    "use strict";

    const r = n(640925);
    e.exports = r;
  },
  640925: (e, t, n) => {
    "use strict";

    var r = n(986907);
    var i = n(389408);
    var o = n(376969);
    var s = n(932998);
    function l(e, t) {
      if (document.caretRangeFromPoint !== undefined) {
        if ((e = document.caretRangeFromPoint(e, t)) === null) {
          return null;
        } else {
          return {
            node: e.startContainer,
            offset: e.startOffset
          };
        }
      } else if (document.caretPositionFromPoint !== "undefined") {
        if ((e = document.caretPositionFromPoint(e, t)) === null) {
          return null;
        } else {
          return {
            node: e.offsetNode,
            offset: e.offset
          };
        }
      } else {
        return null;
      }
    }
    let a = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
    let u = a && "documentMode" in document ? document.documentMode : null;
    if (a) {
      /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    }
    if (a) {
      /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
    }
    let c = !(!a || !("InputEvent" in window) || u) && "getTargetRanges" in new window.InputEvent("input");
    let d = a && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
    let g = a && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let f = a && /^(?=.*Chrome).*/i.test(navigator.userAgent);
    let h = a && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !f;
    let p = s.createCommand("DRAG_DROP_PASTE_FILE");
    class _ extends s.ElementNode {
      static getType() {
        return "quote";
      }
      static clone(e) {
        return new _(e.__key);
      }
      constructor(e) {
        super(e);
      }
      createDOM(e) {
        let t = document.createElement("blockquote");
        o.addClassNamesToElement(t, e.theme.quote);
        return t;
      }
      updateDOM() {
        return false;
      }
      static importDOM() {
        return {
          blockquote: () => ({
            conversion: T,
            priority: 0
          })
        };
      }
      exportDOM(e) {
        ({
          element: e
        } = super.exportDOM(e));
        if (e && this.isEmpty()) {
          e.append(document.createElement("br"));
        }
        if (e) {
          var t = this.getFormatType();
          e.style.textAlign = t;
          if (t = this.getDirection()) {
            e.dir = t;
          }
        }
        return {
          element: e
        };
      }
      static importJSON(e) {
        let t = m();
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          type: "quote"
        };
      }
      insertNewAfter(e, t) {
        e = s.$createParagraphNode();
        let n = this.getDirection();
        e.setDirection(n);
        this.insertAfter(e, t);
        return e;
      }
      collapseAtStart() {
        let e = s.$createParagraphNode();
        this.getChildren().forEach(t => e.append(t));
        this.replace(e);
        return true;
      }
    }
    function m() {
      return s.$applyNodeReplacement(new _());
    }
    class y extends s.ElementNode {
      static getType() {
        return "heading";
      }
      static clone(e) {
        return new y(e.__tag, e.__key);
      }
      constructor(e, t) {
        super(t);
        this.__tag = e;
      }
      getTag() {
        return this.__tag;
      }
      createDOM(e) {
        let t = this.__tag;
        let n = document.createElement(t);
        if ((e = e.theme.heading) !== undefined) {
          o.addClassNamesToElement(n, e[t]);
        }
        return n;
      }
      updateDOM() {
        return false;
      }
      static importDOM() {
        return {
          h1: () => ({
            conversion: v,
            priority: 0
          }),
          h2: () => ({
            conversion: v,
            priority: 0
          }),
          h3: () => ({
            conversion: v,
            priority: 0
          }),
          h4: () => ({
            conversion: v,
            priority: 0
          }),
          h5: () => ({
            conversion: v,
            priority: 0
          }),
          h6: () => ({
            conversion: v,
            priority: 0
          }),
          p: e => (e = e.firstChild) !== null && N(e) ? {
            conversion: () => ({
              node: null
            }),
            priority: 3
          } : null,
          span: e => N(e) ? {
            conversion: () => ({
              node: E("h1")
            }),
            priority: 3
          } : null
        };
      }
      exportDOM(e) {
        ({
          element: e
        } = super.exportDOM(e));
        if (e && this.isEmpty()) {
          e.append(document.createElement("br"));
        }
        if (e) {
          var t = this.getFormatType();
          e.style.textAlign = t;
          if (t = this.getDirection()) {
            e.dir = t;
          }
        }
        return {
          element: e
        };
      }
      static importJSON(e) {
        let t = E(e.tag);
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          tag: this.getTag(),
          type: "heading",
          version: 1
        };
      }
      insertNewAfter(e, t = true) {
        e = (e = e ? e.anchor.offset : 0) > 0 && e < this.getTextContentSize() ? E(this.getTag()) : s.$createParagraphNode();
        let n = this.getDirection();
        e.setDirection(n);
        this.insertAfter(e, t);
        return e;
      }
      collapseAtStart() {
        let e = this.isEmpty() ? s.$createParagraphNode() : E(this.getTag());
        this.getChildren().forEach(t => e.append(t));
        this.replace(e);
        return true;
      }
      extractWithChild() {
        return true;
      }
    }
    function N(e) {
      return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
    }
    function v(e) {
      let t = null;
      if (!((e = e.nodeName.toLowerCase()) !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6")) {
        t = E(e);
      }
      return {
        node: t
      };
    }
    function T() {
      return {
        node: m()
      };
    }
    function E(e) {
      return s.$applyNodeReplacement(new y(e));
    }
    function C(e) {
      let t = null;
      if (e instanceof DragEvent) {
        t = e.dataTransfer;
      } else if (e instanceof ClipboardEvent) {
        t = e.clipboardData;
      }
      if (t === null) {
        return [false, [], false];
      }
      var n = t.types;
      e = n.includes("Files");
      n = n.includes("text/html") || n.includes("text/plain");
      return [e, Array.from(t.files), n];
    }
    function x(e) {
      var t = s.$getSelection();
      if (!s.$isRangeSelection(t)) {
        return false;
      }
      let n = new Set();
      t = t.getNodes();
      for (let s = 0; s < t.length; s++) {
        var r = t[s];
        var i = r.getKey();
        if (!n.has(i)) {
          i = (r = o.$getNearestBlockElementAncestorOrThrow(r)).getKey();
          if (r.canIndent() && !n.has(i)) {
            n.add(i);
            e(r);
          }
        }
      }
      return n.size > 0;
    }
    function b(e) {
      e = s.$getNearestNodeFromDOMNode(e);
      return s.$isDecoratorNode(e);
    }
    t.$createHeadingNode = E;
    t.$createQuoteNode = m;
    t.$isHeadingNode = function (e) {
      return e instanceof y;
    };
    t.$isQuoteNode = function (e) {
      return e instanceof _;
    };
    t.DRAG_DROP_PASTE = p;
    t.HeadingNode = y;
    t.QuoteNode = _;
    t.eventFiles = C;
    t.registerRichText = function (e) {
      return o.mergeRegister(e.registerCommand(s.CLICK_COMMAND, () => {
        const e = s.$getSelection();
        return !!s.$isNodeSelection(e) && (e.clear(), true);
      }, 0), e.registerCommand(s.DELETE_CHARACTER_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.deleteCharacter(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_WORD_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.deleteWord(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DELETE_LINE_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.deleteLine(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CONTROLLED_TEXT_INSERTION_COMMAND, t => {
        const n = s.$getSelection();
        if (typeof t == "string") {
          if (s.$isRangeSelection(n)) {
            n.insertText(t);
          } else {
            s.DEPRECATED_$isGridSelection(n);
          }
        } else {
          if (!s.$isRangeSelection(n) && !s.DEPRECATED_$isGridSelection(n)) {
            return false;
          }
          const i = t.dataTransfer;
          if (i != null) {
            r.$insertDataTransferForRichText(i, n, e);
          } else if (s.$isRangeSelection(n) && (t = t.data)) {
            n.insertText(t);
          }
        }
        return true;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.REMOVE_TEXT_COMMAND, () => {
        const e = s.$getSelection();
        return !!s.$isRangeSelection(e) && (e.removeText(), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.FORMAT_TEXT_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.formatText(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.FORMAT_ELEMENT_COMMAND, e => {
        var t = s.$getSelection();
        if (!s.$isRangeSelection(t) && !s.$isNodeSelection(t)) {
          return false;
        }
        t = t.getNodes();
        for (const n of t) {
          o.$getNearestBlockElementAncestorOrThrow(n).setFormat(e);
        }
        return true;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_LINE_BREAK_COMMAND, e => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (t.insertLineBreak(e), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_PARAGRAPH_COMMAND, () => {
        const e = s.$getSelection();
        return !!s.$isRangeSelection(e) && (e.insertParagraph(), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INSERT_TAB_COMMAND, () => {
        s.$insertNodes([s.$createTabNode()]);
        return true;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.INDENT_CONTENT_COMMAND, () => x(e => {
        const t = e.getIndent();
        e.setIndent(t + 1);
      }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.OUTDENT_CONTENT_COMMAND, () => x(e => {
        const t = e.getIndent();
        if (t > 0) {
          e.setIndent(t - 1);
        }
      }), s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_UP_COMMAND, e => {
        var t = s.$getSelection();
        if (s.$isNodeSelection(t) && !b(e.target)) {
          if ((e = t.getNodes()).length > 0) {
            e[0].selectPrevious();
            return true;
          }
        } else if (s.$isRangeSelection(t) && (t = s.$getAdjacentNode(t.focus, true), s.$isDecoratorNode(t) && !t.isIsolated() && !t.isInline())) {
          t.selectPrevious();
          e.preventDefault();
          return true;
        }
        return false;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_DOWN_COMMAND, e => {
        var t = s.$getSelection();
        if (s.$isNodeSelection(t)) {
          if ((e = t.getNodes()).length > 0) {
            e[0].selectNext(0, 0);
            return true;
          }
        } else if (s.$isRangeSelection(t)) {
          let n = t.focus;
          if (n.key === "root" && n.offset === s.$getRoot().getChildrenSize()) {
            e.preventDefault();
            return true;
          }
          t = s.$getAdjacentNode(t.focus, false);
          if (s.$isDecoratorNode(t) && !t.isIsolated() && !t.isInline()) {
            t.selectNext();
            e.preventDefault();
            return true;
          }
        }
        return false;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_LEFT_COMMAND, e => {
        const t = s.$getSelection();
        if (s.$isNodeSelection(t)) {
          var n = t.getNodes();
          if (n.length > 0) {
            e.preventDefault();
            n[0].selectPrevious();
            return true;
          }
        }
        return !!s.$isRangeSelection(t) && !!i.$shouldOverrideDefaultCharacterSelection(t, true) && (n = e.shiftKey, e.preventDefault(), i.$moveCharacter(t, n, true), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ARROW_RIGHT_COMMAND, e => {
        const t = s.$getSelection();
        if (s.$isNodeSelection(t) && !b(e.target)) {
          var n = t.getNodes();
          if (n.length > 0) {
            e.preventDefault();
            n[0].selectNext(0, 0);
            return true;
          }
        }
        return !!s.$isRangeSelection(t) && (n = e.shiftKey, !!i.$shouldOverrideDefaultCharacterSelection(t, false) && (e.preventDefault(), i.$moveCharacter(t, n, false), true));
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_BACKSPACE_COMMAND, t => {
        if (b(t.target)) {
          return false;
        }
        const n = s.$getSelection();
        if (!s.$isRangeSelection(n)) {
          return false;
        }
        t.preventDefault();
        ({
          anchor: t
        } = n);
        const r = t.getNode();
        if (n.isCollapsed() && t.offset === 0 && !s.$isRootNode(r) && o.$getNearestBlockElementAncestorOrThrow(r).getIndent() > 0) {
          return e.dispatchCommand(s.OUTDENT_CONTENT_COMMAND, undefined);
        } else {
          return e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, true);
        }
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_DELETE_COMMAND, t => {
        if (b(t.target)) {
          return false;
        }
        const n = s.$getSelection();
        return !!s.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(s.DELETE_CHARACTER_COMMAND, false));
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ENTER_COMMAND, t => {
        const n = s.$getSelection();
        if (!s.$isRangeSelection(n)) {
          return false;
        }
        if (t !== null) {
          if ((g || d || h) && c) {
            return false;
          }
          t.preventDefault();
          if (t.shiftKey) {
            return e.dispatchCommand(s.INSERT_LINE_BREAK_COMMAND, false);
          }
        }
        return e.dispatchCommand(s.INSERT_PARAGRAPH_COMMAND, undefined);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.KEY_ESCAPE_COMMAND, () => {
        const t = s.$getSelection();
        return !!s.$isRangeSelection(t) && (e.blur(), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DROP_COMMAND, t => {
        const [, n] = C(t);
        if (n.length > 0) {
          var r = l(t.clientX, t.clientY);
          if (r !== null) {
            const {
              offset: t,
              node: o
            } = r;
            var i = s.$getNearestNodeFromDOMNode(o);
            if (i !== null) {
              r = s.$createRangeSelection();
              if (s.$isTextNode(i)) {
                r.anchor.set(i.getKey(), t, "text");
                r.focus.set(i.getKey(), t, "text");
              } else {
                const e = i.getParentOrThrow().getKey();
                i = i.getIndexWithinParent() + 1;
                r.anchor.set(e, i, "element");
                r.focus.set(e, i, "element");
              }
              r = s.$normalizeSelection__EXPERIMENTAL(r);
              s.$setSelection(r);
            }
            e.dispatchCommand(p, n);
          }
          t.preventDefault();
          return true;
        }
        t = s.$getSelection();
        return !!s.$isRangeSelection(t);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGSTART_COMMAND, e => {
        [e] = C(e);
        const t = s.$getSelection();
        return !(e && !s.$isRangeSelection(t));
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.DRAGOVER_COMMAND, e => {
        var [t] = C(e);
        const n = s.$getSelection();
        return !(t && !s.$isRangeSelection(n)) && ((t = l(e.clientX, e.clientY)) !== null && (t = s.$getNearestNodeFromDOMNode(t.node), s.$isDecoratorNode(t) && e.preventDefault()), true);
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.COPY_COMMAND, t => {
        r.copyToClipboard(e, t instanceof ClipboardEvent ? t : null);
        return true;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.CUT_COMMAND, t => {
        (async function (e, t) {
          await r.copyToClipboard(t, e instanceof ClipboardEvent ? e : null);
          t.update(() => {
            let e = s.$getSelection();
            if (s.$isRangeSelection(e)) {
              e.removeText();
            } else if (s.$isNodeSelection(e)) {
              e.getNodes().forEach(e => e.remove());
            }
          });
        })(t, e);
        return true;
      }, s.COMMAND_PRIORITY_EDITOR), e.registerCommand(s.PASTE_COMMAND, t => {
        const [, n, i] = C(t);
        if (n.length > 0 && !i) {
          e.dispatchCommand(p, n);
          return true;
        }
        if (s.isSelectionCapturedInDecoratorInput(t.target)) {
          return false;
        }
        const o = s.$getSelection();
        return !(!s.$isRangeSelection(o) && !s.DEPRECATED_$isGridSelection(o)) && (function (e, t) {
          e.preventDefault();
          t.update(() => {
            let n = s.$getSelection();
            let i = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
            if (i != null && (s.$isRangeSelection(n) || s.DEPRECATED_$isGridSelection(n))) {
              r.$insertDataTransferForRichText(i, n, t);
            }
          }, {
            tag: "paste"
          });
        }(t, e), true);
      }, s.COMMAND_PRIORITY_EDITOR));
    };
  },
  389408: (e, t, n) => {
    "use strict";

    const r = n(649235);
    e.exports = r;
  },
  649235: (e, t, n) => {
    "use strict";

    var r = n(932998);
    let i = new Map();
    function o(e) {
      for (; e != null;) {
        if (e.nodeType === Node.TEXT_NODE) {
          return e;
        }
        e = e.firstChild;
      }
      return null;
    }
    function s(e) {
      let t = e.parentNode;
      if (t == null) {
        throw Error("Should never happen");
      }
      return [t, Array.from(t.childNodes).indexOf(e)];
    }
    function l(e) {
      let t = {};
      e = e.split(";");
      for (let n of e) {
        if (n !== "") {
          let [e, r] = n.split(/:([^]+)/);
          t[e.trim()] = r.trim();
        }
      }
      return t;
    }
    function a(e) {
      let t = i.get(e);
      if (t === undefined) {
        t = l(e);
        i.set(e, t);
      }
      return t;
    }
    function u(e, t) {
      var n = a("getStyle" in e ? e.getStyle() : e.style);
      n = function (e) {
        let t = "";
        for (let n in e) {
          if (n) {
            t += `${n}: ${e[n]};`;
          }
        }
        return t;
      }(t = Object.entries(t).reduce((e, [t, n]) => {
        if (n === null) {
          delete e[t];
        } else {
          e[t] = n;
        }
        return e;
      }, {
        ...n
      }));
      e.setStyle(n);
      i.set(n, t);
    }
    function c(e) {
      for (; e !== null && !r.$isRootOrShadowRoot(e);) {
        let t = e.getLatest();
        let n = e.getParent();
        if (t.getChildrenSize() === 0) {
          e.remove(true);
        }
        e = n;
      }
    }
    function d(e, t, n, i, o = null) {
      if (t.length !== 0) {
        var s = t[0];
        var l = new Map();
        var a = [];
        if ((s = r.$isElementNode(s) ? s : s.getParentOrThrow()).isInline()) {
          s = s.getParentOrThrow();
        }
        for (var u = false; s !== null;) {
          var d = s.getPreviousSibling();
          if (d !== null) {
            s = d;
            u = true;
            break;
          }
          s = s.getParentOrThrow();
          if (r.$isRootOrShadowRoot(s)) {
            break;
          }
        }
        d = new Set();
        for (var g = 0; g < n; g++) {
          var f = t[g];
          if (r.$isElementNode(f) && f.getChildrenSize() === 0) {
            d.add(f.getKey());
          }
        }
        var h = new Set();
        for (g = 0; g < n; g++) {
          var p = (f = t[g]).getParent();
          if (p !== null && p.isInline()) {
            p = p.getParent();
          }
          if (p !== null && r.$isLeafNode(f) && !h.has(f.getKey())) {
            f = p.getKey();
            if (l.get(f) === undefined) {
              let e = i();
              e.setFormat(p.getFormatType());
              e.setIndent(p.getIndent());
              a.push(e);
              l.set(f, e);
              p.getChildren().forEach(t => {
                e.append(t);
                h.add(t.getKey());
                if (r.$isElementNode(t)) {
                  t.getChildrenKeys().forEach(e => h.add(e));
                }
              });
              c(p);
            }
          } else if (d.has(f.getKey())) {
            (p = i()).setFormat(f.getFormatType());
            p.setIndent(f.getIndent());
            a.push(p);
            f.remove(true);
          }
        }
        if (o !== null) {
          for (t = 0; t < a.length; t++) {
            o.append(a[t]);
          }
        }
        t = null;
        if (r.$isRootOrShadowRoot(s)) {
          if (u) {
            if (o !== null) {
              s.insertAfter(o);
            } else {
              for (o = a.length - 1; o >= 0; o--) {
                s.insertAfter(a[o]);
              }
            }
          } else {
            u = s.getFirstChild();
            if (r.$isElementNode(u)) {
              s = u;
            }
            if (u === null) {
              if (o) {
                s.append(o);
              } else {
                for (o = 0; o < a.length; o++) {
                  u = a[o];
                  s.append(u);
                  t = u;
                }
              }
            } else if (o !== null) {
              u.insertBefore(o);
            } else {
              for (s = 0; s < a.length; s++) {
                o = a[s];
                u.insertBefore(o);
                t = o;
              }
            }
          }
        } else if (o) {
          s.insertAfter(o);
        } else {
          for (o = a.length - 1; o >= 0; o--) {
            u = a[o];
            s.insertAfter(u);
            t = u;
          }
        }
        a = r.$getPreviousSelection();
        if (r.$isRangeSelection(a) && a.anchor.getNode().isAttached() && a.focus.getNode().isAttached()) {
          r.$setSelection(a.clone());
        } else if (t !== null) {
          t.selectEnd();
        } else {
          e.dirty = true;
        }
      }
    }
    function g(e, t, n, r) {
      e.modify(t ? "extend" : "move", n, r);
    }
    function f(e) {
      e = e.anchor.getNode();
      return (r.$isRootNode(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
    }
    t.$addNodeStyle = function (e) {
      let t = l(e = e.getStyle());
      i.set(e, t);
    };
    t.$cloneWithProperties = function (e) {
      let t = (e = e.getLatest()).constructor.clone(e);
      t.__parent = e.__parent;
      t.__next = e.__next;
      t.__prev = e.__prev;
      if (r.$isElementNode(e) && r.$isElementNode(t)) {
        t.__first = e.__first;
        t.__last = e.__last;
        t.__size = e.__size;
        t.__format = e.__format;
        t.__indent = e.__indent;
        t.__dir = e.__dir;
        return t;
      } else {
        if (r.$isTextNode(e) && r.$isTextNode(t)) {
          t.__format = e.__format;
          t.__style = e.__style;
          t.__mode = e.__mode;
          t.__detail = e.__detail;
        }
        return t;
      }
    };
    t.$getSelectionStyleValueForProperty = function (e, t, n = "") {
      let i = null;
      let o = e.getNodes();
      var s = e.anchor;
      var l = e.focus;
      var u = e.isBackward();
      let c = u ? l.offset : s.offset;
      s = u ? l.getNode() : s.getNode();
      if (e.style !== "" && (e = a(e.style)) !== null && t in e) {
        return e[t];
      }
      for (e = 0; e < o.length; e++) {
        var d = o[e];
        if ((e === 0 || c !== 0 || !d.is(s)) && r.$isTextNode(d)) {
          l = t;
          u = n;
          l = (d = a(d = d.getStyle())) !== null && d[l] || u;
          if (i === null) {
            i = l;
          } else if (i !== l) {
            i = "";
            break;
          }
        }
      }
      if (i === null) {
        return n;
      } else {
        return i;
      }
    };
    t.$isAtNodeEnd = function (e) {
      if (e.type === "text") {
        return e.offset === e.getNode().getTextContentSize();
      } else {
        return e.offset === e.getNode().getChildrenSize();
      }
    };
    t.$isParentElementRTL = f;
    t.$moveCaretSelection = g;
    t.$moveCharacter = function (e, t, n) {
      let r = f(e);
      g(e, t, n ? !r : r, "character");
    };
    t.$patchStyleText = function (e, t) {
      var n = e.getNodes();
      let i = n.length - 1;
      let o = n[0];
      let s = n[i];
      if (e.isCollapsed()) {
        u(e, t);
      } else {
        var l = e.anchor;
        var a = e.focus;
        var c = o.getTextContent().length;
        var d = a.offset;
        var g = l.offset;
        var f = l.isBefore(a);
        var h = f ? g : d;
        e = f ? d : g;
        var p = f ? l.type : a.type;
        var _ = f ? a.type : l.type;
        l = f ? a.key : l.key;
        if (r.$isTextNode(o) && h === c) {
          a = o.getNextSibling();
          if (r.$isTextNode(a)) {
            h = g = 0;
            o = a;
          }
        }
        if (n.length === 1) {
          if (r.$isTextNode(o)) {
            if ((h = p === "element" ? 0 : g > d ? d : g) !== (e = _ === "element" ? c : g > d ? g : d)) {
              if (h === 0 && e === c) {
                u(o, t);
                o.select(h, e);
              } else {
                n = o.splitText(h, e);
                u(n = h === 0 ? n[0] : n[1], t);
                n.select(0, e - h);
              }
            }
          }
        } else {
          if (r.$isTextNode(o) && h < o.getTextContentSize()) {
            if (h !== 0) {
              o = o.splitText(h)[1];
            }
            u(o, t);
          }
          if (r.$isTextNode(s)) {
            h = s.getTextContent().length;
            if (s.__key !== l && e !== 0) {
              e = h;
            }
            if (e !== h) {
              [s] = s.splitText(e);
            }
            if (e !== 0) {
              u(s, t);
            }
          }
          e = 1;
          if (r.$isTextNode(o) && h < o.getTextContentSize()) {
            if (h !== 0) {
              o = o.splitText(h)[1];
            }
            u(o, t);
          }
          if (r.$isTextNode(s)) {
            h = s.getTextContent().length;
            if (s.__key !== l && e !== 0) {
              e = h;
            }
            if (e !== h) {
              [s] = s.splitText(e);
            }
            if (e !== 0) {
              u(s, t);
            }
          }
          e = 1;
          for (; e < i; e++) {
            c = (h = n[e]).getKey();
            if (r.$isTextNode(h) && c !== o.getKey() && c !== s.getKey() && !h.isToken()) {
              u(h, t);
            }
          }
        }
      }
    };
    t.$selectAll = function (e) {
      let t = e.anchor;
      e = e.focus;
      var n = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
      let i = n.getFirstDescendant();
      n = n.getLastDescendant();
      let o = "element";
      let s = "element";
      let l = 0;
      if (r.$isTextNode(i)) {
        o = "text";
      } else if (!(r.$isElementNode(i) || i === null)) {
        i = i.getParentOrThrow();
      }
      if (r.$isTextNode(n)) {
        s = "text";
        l = n.getTextContentSize();
      } else if (!(r.$isElementNode(n) || n === null)) {
        n = n.getParentOrThrow();
      }
      if (i && n) {
        t.set(i.getKey(), 0, o);
        e.set(n.getKey(), l, s);
      }
    };
    t.$setBlocksType = function (e, t) {
      if (e.anchor.key === "root") {
        t = t();
        var n = r.$getRoot();
        if (e = n.getFirstChild()) {
          e.replace(t, true);
        } else {
          n.append(t);
        }
      } else {
        n = e.getNodes();
        e = e.anchor.getNode().getParentOrThrow();
        if (n.indexOf(e) === -1) {
          n.push(e);
        }
        if (e.isInline()) {
          e = e.getParentOrThrow();
          if (n.indexOf(e) === -1) {
            n.push(e);
          }
        }
        e = 0;
        n = e.getNodes();
        e = e.anchor.getNode().getParentOrThrow();
        if (n.indexOf(e) === -1) {
          n.push(e);
        }
        if (e.isInline()) {
          e = e.getParentOrThrow();
          if (n.indexOf(e) === -1) {
            n.push(e);
          }
        }
        e = 0;
        for (; e < n.length; e++) {
          let s = n[e];
          var i = s;
          if (!r.$isElementNode(i) || r.$isRootOrShadowRoot(i)) {
            i = false;
          } else {
            var o = i.getFirstChild();
            o = o === null || r.$isTextNode(o) || o.isInline();
            i = !i.isInline() && i.canBeEmpty() !== false && o;
          }
          if (i) {
            (i = t()).setFormat(s.getFormatType());
            i.setIndent(s.getIndent());
            s.replace(i, true);
          }
        }
      }
    };
    t.$shouldOverrideDefaultCharacterSelection = function (e, t) {
      e = r.$getAdjacentNode(e.focus, t);
      return r.$isDecoratorNode(e) && !e.isIsolated() || r.$isElementNode(e) && !e.isInline() && !e.canBeEmpty();
    };
    t.$sliceSelectedTextNodeContent = function (e, t) {
      if (t.isSelected() && !t.isSegmented() && !t.isToken() && (r.$isRangeSelection(e) || r.DEPRECATED_$isGridSelection(e))) {
        var n = e.anchor.getNode();
        var i = e.focus.getNode();
        var o = t.is(n);
        var s = t.is(i);
        if (o || s) {
          o = e.isBackward();
          let r;
          let [l, a] = e.getCharacterOffsets();
          e = n.is(i);
          s = t.is(o ? i : n);
          i = t.is(o ? n : i);
          n = 0;
          if (e) {
            n = l > a ? a : l;
            r = l > a ? l : a;
          } else if (s) {
            n = o ? a : l;
            r = undefined;
          } else if (i) {
            n = 0;
            r = o = o ? l : a;
          }
          t.__text = t.__text.slice(n, r);
        }
      }
      return t;
    };
    t.$wrapNodes = function (e, t, n = null) {
      var i = e.getNodes();
      let o = i.length;
      var s = e.anchor;
      if (o === 0 || o === 1 && s.type === "element" && s.getNode().getChildrenSize() === 0) {
        i = (e = s.type === "text" ? s.getNode().getParentOrThrow() : s.getNode()).getChildren();
        let r = t();
        r.setFormat(e.getFormatType());
        r.setIndent(e.getIndent());
        i.forEach(e => r.append(e));
        if (n) {
          r = n.append(r);
        }
        e.replace(r);
      } else {
        s = null;
        var l = [];
        for (let a = 0; a < o; a++) {
          let o = i[a];
          if (r.$isRootOrShadowRoot(o)) {
            d(e, l, l.length, t, n);
            l = [];
            s = o;
          } else if (s === null || s !== null && r.$hasAncestor(o, s)) {
            l.push(o);
          } else {
            d(e, l, l.length, t, n);
            l = [o];
          }
        }
        d(e, l, l.length, t, n);
      }
    };
    t.createDOMRange = function (e, t, n, i, l) {
      let a = t.getKey();
      let u = i.getKey();
      let c = document.createRange();
      let d = e.getElementByKey(a);
      e = e.getElementByKey(u);
      if (r.$isTextNode(t)) {
        d = o(d);
      }
      if (r.$isTextNode(i)) {
        e = o(e);
      }
      if (t === undefined || i === undefined || d === null || e === null) {
        return null;
      }
      if (d.nodeName === "BR") {
        [d, n] = s(d);
      }
      if (e.nodeName === "BR") {
        [e, l] = s(e);
      }
      t = d.firstChild;
      if (d === e && t != null && t.nodeName === "BR" && n === 0 && l === 0) {
        l = 1;
      }
      try {
        c.setStart(d, n);
        c.setEnd(e, l);
      } catch (e) {
        return null;
      }
      if (!(!c.collapsed || n === l && a === u)) {
        c.setStart(e, l);
        c.setEnd(d, n);
      }
      return c;
    };
    t.createRectsFromDOMRange = function (e, t) {
      var n = e.getRootElement();
      if (n === null) {
        return [];
      }
      e = n.getBoundingClientRect();
      n = getComputedStyle(n);
      n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
      let r;
      let i = (t = Array.from(t.getClientRects())).length;
      t.sort((e, t) => {
        let n = e.top - t.top;
        if (Math.abs(n) <= 3) {
          return e.left - t.left;
        } else {
          return n;
        }
      });
      for (let o = 0; o < i; o++) {
        let s = t[o];
        let l = s.width + n === e.width;
        if (r && r.top <= s.top && r.top + r.height > s.top && r.left + r.width > s.left || l) {
          t.splice(o--, 1);
          i--;
        } else {
          r = s;
        }
      }
      return t;
    };
    t.getStyleObjectFromCSS = a;
    t.trimTextContentFromAnchor = function (e, t, n) {
      let i = t.getNode();
      if (r.$isElementNode(i)) {
        var o = i.getDescendantByIndex(t.offset);
        if (o !== null) {
          i = o;
        }
      }
      for (; n > 0 && i !== null;) {
        var s = i.getPreviousSibling();
        var l = 0;
        if (s === null) {
          for (var a = (o = i.getParentOrThrow()).getPreviousSibling(); a === null;) {
            if ((o = o.getParent()) === null) {
              s = null;
              break;
            }
            a = o.getPreviousSibling();
          }
          if (o !== null) {
            l = o.isInline() ? 0 : 2;
            s = r.$isElementNode(a) ? a.getLastDescendant() : a;
          }
        }
        if ((a = i.getTextContent()) === "" && r.$isElementNode(i) && !i.isInline()) {
          a = "\n\n";
        }
        o = i.getTextContentSize();
        if (!r.$isTextNode(i) || n >= o) {
          a = i.getParent();
          i.remove();
          if (!(a == null || a.getChildrenSize() !== 0 || r.$isRootNode(a))) {
            a.remove();
          }
          n -= o + l;
          i = s;
        } else {
          let u = i.getKey();
          l = e.getEditorState().read(() => {
            const e = r.$getNodeByKey(u);
            if (r.$isTextNode(e) && e.isSimpleText()) {
              return e.getTextContent();
            } else {
              return null;
            }
          });
          s = o - n;
          let c = a.slice(0, s);
          if (l !== null && l !== a) {
            n = r.$getPreviousSelection();
            o = i;
            if (i.isSimpleText()) {
              i.setTextContent(l);
            } else {
              o = r.$createTextNode(l);
              i.replace(o);
            }
            if (r.$isRangeSelection(n) && n.isCollapsed()) {
              n = n.anchor.offset;
              o.select(n, n);
            }
          } else if (i.isSimpleText()) {
            l = t.key === u;
            if ((a = t.offset) < n) {
              a = o;
            }
            n = l ? a - n : 0;
            o = l ? a : s;
            if (l && n === 0) {
              [n] = i.splitText(n, o);
              n.remove();
            } else {
              [, n] = i.splitText(n, o);
              n.remove();
            }
          } else {
            n = r.$createTextNode(c);
            i.replace(n);
          }
          n = 0;
        }
      }
    };
  },
  302977: (e, t, n) => {
    "use strict";

    const r = n(328263);
    e.exports = r;
  },
  328263: (e, t, n) => {
    "use strict";

    var r = n(932998);
    function i(e, t = true) {
      return !e && (e = o(), t && (e = e.trim()), e === "");
    }
    function o() {
      return r.$getRoot().getTextContent();
    }
    function s(e) {
      if (!i(e, false)) {
        return false;
      }
      let t = (e = r.$getRoot().getChildren()).length;
      if (t > 1) {
        return false;
      }
      for (let i = 0; i < t; i++) {
        var n = e[i];
        if (r.$isDecoratorNode(n)) {
          return false;
        }
        if (r.$isElementNode(n)) {
          if (!r.$isParagraphNode(n) || n.__indent !== 0) {
            return false;
          }
          let e = (n = n.getChildren()).length;
          for (let t = 0; t < e; t++) {
            if (!r.$isTextNode(n[i])) {
              return false;
            }
          }
        }
      }
      return true;
    }
    t.$canShowPlaceholder = s;
    t.$canShowPlaceholderCurry = function (e) {
      return () => s(e);
    };
    t.$findTextIntersectionFromCharacters = function (e, t) {
      var n = e.getFirstChild();
      e = 0;
      e: for (; n !== null;) {
        if (r.$isElementNode(n)) {
          var i = n.getFirstChild();
          if (i !== null) {
            n = i;
            continue;
          }
        } else if (r.$isTextNode(n)) {
          if (e + (i = n.getTextContentSize()) > t) {
            return {
              node: n,
              offset: t - e
            };
          }
          e += i;
        }
        if ((i = n.getNextSibling()) === null) {
          for (n = n.getParent(); n !== null;) {
            if ((i = n.getNextSibling()) !== null) {
              n = i;
              continue e;
            }
            n = n.getParent();
          }
          break;
        }
        n = i;
      }
      return null;
    };
    t.$isRootTextContentEmpty = i;
    t.$isRootTextContentEmptyCurry = function (e, t) {
      return () => i(e, t);
    };
    t.$rootTextContent = o;
    t.registerLexicalTextEntity = function (e, t, n, i) {
      let o = e => {
        const t = r.$createTextNode(e.getTextContent());
        t.setFormat(e.getFormat());
        e.replace(t);
      };
      return [e.registerNodeTransform(r.TextNode, e => {
        if (e.isSimpleText()) {
          var s = e.getPreviousSibling();
          var l = e.getTextContent();
          var a = e;
          if (r.$isTextNode(s)) {
            var u = s.getTextContent();
            var c = t(u + l);
            if (s instanceof n) {
              if (c === null || s.getLatest().__mode !== 0) {
                return void o(s);
              }
              if ((c = c.end - u.length) > 0) {
                a = u + (a = l.slice(0, c));
                s.select();
                s.setTextContent(a);
                return void (c === l.length ? e.remove() : (s = l.slice(c), e.setTextContent(s)));
              }
            } else if (c === null || c.start < u.length) {
              return;
            }
          }
          for (;;) {
            l = c = (e = t(l)) === null ? "" : l.slice(e.end);
            if (c === "") {
              u = a.getNextSibling();
              if (r.$isTextNode(u)) {
                c = a.getTextContent() + u.getTextContent();
                if ((c = t(c)) === null) {
                  if (u instanceof n) {
                    o(u);
                  } else {
                    u.markDirty();
                  }
                  break;
                }
                if (c.start !== 0) {
                  break;
                }
              }
            } else if ((u = t(c)) !== null && u.start === 0) {
              break;
            }
            if (e === null) {
              break;
            }
            if (e.start === 0 && r.$isTextNode(s) && s.isTextEntity()) {
              continue;
            }
            let d;
            if (e.start === 0) {
              [d, a] = a.splitText(e.end);
            } else {
              [, d, a] = a.splitText(e.start, e.end);
            }
            (e = i(d)).setFormat(d.getFormat());
            d.replace(e);
            if (a == null) {
              break;
            }
          }
        }
      }), e = e.registerNodeTransform(n, e => {
        var i = e.getTextContent();
        const s = t(i);
        if (s === null || s.start !== 0) {
          o(e);
        } else if (i.length > s.end) {
          e.splitText(s.end);
        } else {
          i = e.getPreviousSibling();
          if (r.$isTextNode(i) && i.isTextEntity()) {
            o(i);
            o(e);
          }
          i = e.getNextSibling();
          if (r.$isTextNode(i) && i.isTextEntity()) {
            o(i);
            if (e instanceof n) {
              o(e);
            }
          }
        }
      })];
    };
  },
  376969: (e, t, n) => {
    "use strict";

    const r = n(487502);
    e.exports = r;
  },
  487502: (e, t, n) => {
    "use strict";

    var r = n(389408);
    var i = n(932998);
    function o(e, t) {
      for (let n of t) {
        if (e.type.startsWith(n)) {
          return true;
        }
      }
      return false;
    }
    function s(e, t) {
      for (; e !== i.$getRoot() && e != null;) {
        if (t(e)) {
          return e;
        }
        e = e.getParent();
      }
      return null;
    }
    function l(e) {
      return e.nodeType === 1;
    }
    t.$splitNode = i.$splitNode;
    t.$dfs = function (e, t) {
      let n = [];
      e = (e || i.$getRoot()).getLatest();
      t = t || (i.$isElementNode(e) ? e.getLastDescendant() : e);
      for (var r = e, o = 0; (r = r.getParent()) !== null;) {
        o++;
      }
      for (r = o; e !== null && !e.is(t);) {
        n.push({
          depth: r,
          node: e
        });
        if (i.$isElementNode(e) && e.getChildrenSize() > 0) {
          e = e.getFirstChild();
          r++;
        } else {
          for (o = null; o === null && e !== null;) {
            if ((o = e.getNextSibling()) === null) {
              e = e.getParent();
              r--;
            } else {
              e = o;
            }
          }
        }
      }
      if (e !== null && e.is(t)) {
        n.push({
          depth: r,
          node: e
        });
      }
      return n;
    };
    t.$findMatchingParent = s;
    t.$getNearestBlockElementAncestorOrThrow = function (e) {
      e = s(e, e => i.$isElementNode(e) && !e.isInline());
      if (!i.$isElementNode(e)) {
        throw Error("Minified Lexical error #4; visit https://lexical.dev/docs/error?code=4 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
      }
      return e;
    };
    t.$getNearestNodeOfType = function (e, t) {
      for (; e != null;) {
        if (e instanceof t) {
          return e;
        }
        e = e.getParent();
      }
      return null;
    };
    t.$insertNodeToNearestRoot = function (e) {
      var t = i.$getSelection();
      if (i.$isRangeSelection(t)) {
        var {
          focus: n
        } = t;
        t = n.getNode();
        n = n.offset;
        if (i.$isRootOrShadowRoot(t)) {
          if ((n = t.getChildAtIndex(n)) == null) {
            t.append(e);
          } else {
            n.insertBefore(e);
          }
          e.selectNext();
        } else {
          let r;
          let o;
          if (i.$isTextNode(t)) {
            r = t.getParentOrThrow();
            o = t.getIndexWithinParent();
            if (n > 0) {
              o += 1;
              t.splitText(n);
            }
          } else {
            r = t;
            o = n;
          }
          [, t] = i.$splitNode(r, o);
          t.insertBefore(e);
          t.selectStart();
        }
      } else {
        if (i.$isNodeSelection(t) || i.DEPRECATED_$isGridSelection(t)) {
          (t = t.getNodes())[t.length - 1].getTopLevelElementOrThrow().insertAfter(e);
        } else {
          i.$getRoot().append(e);
        }
        t = i.$createParagraphNode();
        e.insertAfter(t);
        t.select();
      }
      return e.getLatest();
    };
    t.$restoreEditorState = function (e, t) {
      let n = new Map();
      let o = e._pendingEditorState;
      for (let [e, o] of t._nodeMap) {
        let t = r.$cloneWithProperties(o);
        if (i.$isTextNode(t)) {
          t.__text = o.__text;
        }
        n.set(e, t);
      }
      if (o) {
        o._nodeMap = n;
      }
      e._dirtyType = 2;
      e = t._selection;
      i.$setSelection(e === null ? null : e.clone());
    };
    t.$wrapNodeInElement = function (e, t) {
      t = t();
      e.replace(t);
      t.append(e);
      return t;
    };
    t.addClassNamesToElement = function (e, ...t) {
      t.forEach(t => {
        if (typeof t == "string") {
          t = t.split(" ").filter(e => e !== "");
          e.classList.add(...t);
        }
      });
    };
    t.isHTMLAnchorElement = function (e) {
      return l(e) && e.tagName === "A";
    };
    t.isHTMLElement = l;
    t.isMimeType = o;
    t.mediaFileReader = function (e, t) {
      let n = e[Symbol.iterator]();
      return new Promise((e, r) => {
        let i = [];
        let s = () => {
          const {
            done: l,
            value: a
          } = n.next();
          if (l) {
            return e(i);
          }
          const u = new FileReader();
          u.addEventListener("error", r);
          u.addEventListener("load", () => {
            const e = u.result;
            if (typeof e == "string") {
              i.push({
                file: a,
                result: e
              });
            }
            s();
          });
          if (o(a, t)) {
            u.readAsDataURL(a);
          } else {
            s();
          }
        };
        s();
      });
    };
    t.mergeRegister = function (...e) {
      return () => {
        e.forEach(e => e());
      };
    };
    t.registerNestedElementResolver = function (e, t, n, r) {
      return e.registerNodeTransform(t, e => {
        e: {
          for (var i = e.getChildren(), o = 0; o < i.length; o++) {
            if (i[o] instanceof t) {
              i = null;
              break e;
            }
          }
          for (i = e; i !== null;) {
            o = i;
            if ((i = i.getParent()) instanceof t) {
              i = {
                child: o,
                parent: i
              };
              break e;
            }
          }
          i = null;
        }
        if (i !== null) {
          const {
            child: t,
            parent: s
          } = i;
          if (t.is(e)) {
            r(s, e);
            i = (e = t.getNextSiblings()).length;
            s.insertAfter(t);
            if (i !== 0) {
              o = n(s);
              t.insertAfter(o);
              for (let t = 0; t < i; t++) {
                o.append(e[t]);
              }
            }
            if (!(s.canBeEmpty() || s.getChildrenSize() !== 0)) {
              s.remove();
            }
          }
        }
      });
    };
    t.removeClassNamesFromElement = function (e, ...t) {
      t.forEach(t => {
        if (typeof t == "string") {
          e.classList.remove(...t.split(" "));
        }
      });
    };
  },
  932998: (e, t, n) => {
    "use strict";

    const r = n(734556);
    e.exports = r;
  },
  734556: (e, t) => {
    "use strict";

    let n = {};
    let r = {};
    let i = {};
    let o = {};
    let s = {};
    let l = {};
    let a = {};
    let u = {};
    let c = {};
    let d = {};
    let g = {};
    let f = {};
    let h = {};
    let p = {};
    let _ = {};
    let m = {};
    let y = {};
    let N = {};
    let v = {};
    let T = {};
    let E = {};
    let C = {};
    let x = {};
    let b = {};
    let S = {};
    let A = {};
    let O = {};
    let w = {};
    let k = {};
    let R = {};
    let D = {};
    let M = {};
    let $ = {};
    let I = {};
    let P = {};
    function L(e) {
      throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
    }
    let F = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
    let B = F && "documentMode" in document ? document.documentMode : null;
    let z = F && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    let W = F && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
    let K = !(!F || !("InputEvent" in window) || B) && "getTargetRanges" in new window.InputEvent("input");
    let U = F && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
    let Y = F && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let j = F && /^(?=.*Chrome).*/i.test(navigator.userAgent);
    let H = F && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !j;
    let G = U || Y || H ? " " : "​";
    let V = W ? " " : G;
    let J = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/;
    let Z = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/;
    let q = {
      bold: 1,
      code: 16,
      highlight: 128,
      italic: 2,
      strikethrough: 4,
      subscript: 32,
      superscript: 64,
      underline: 8
    };
    let X = {
      directionless: 1,
      unmergeable: 2
    };
    let Q = {
      center: 2,
      end: 6,
      justify: 4,
      left: 1,
      right: 3,
      start: 5
    };
    let ee = {
      2: "center",
      6: "end",
      4: "justify",
      1: "left",
      3: "right",
      5: "start"
    };
    let te = {
      normal: 0,
      segmented: 2,
      token: 1
    };
    let ne = {
      0: "normal",
      2: "segmented",
      1: "token"
    };
    let re = false;
    let ie = 0;
    function oe(e) {
      ie = e.timeStamp;
    }
    function se(e, t, n) {
      return t.__lexicalLineBreak === e || e[`__lexicalKey_${n._key}`] !== undefined;
    }
    function le(e, t, n) {
      re = true;
      let r = performance.now() - ie > 100;
      try {
        br(e, () => {
          let i = er() || function (e) {
            return e.getEditorState().read(() => {
              let e = er();
              if (e !== null) {
                return e.clone();
              } else {
                return null;
              }
            });
          }(e);
          var o = new Map();
          var s = e.getRootElement();
          var l = e._editorState;
          var a = e._blockCursorElement;
          let u = false;
          let c = "";
          for (var d = 0; d < t.length; d++) {
            var g = t[d];
            var f = g.type;
            var h = g.target;
            var p = Se(h, l);
            if (!(p === null && h !== s || Ar(p))) {
              if (f === "characterData") {
                if (g = r && wn(p)) {
                  e: {
                    f = h;
                    var _ = p;
                    if (Fn(g = i)) {
                      var m = g.anchor.getNode();
                      if (m.is(_) && g.format !== m.getFormat()) {
                        g = false;
                        break e;
                      }
                    }
                    g = f.nodeType === 3 && _.isAttached();
                  }
                }
                if (g) {
                  f = g = null;
                  if ((_ = et(e._window)) !== null && _.anchorNode === h) {
                    g = _.anchorOffset;
                    f = _.focusOffset;
                  }
                  if ((h = h.nodeValue) !== null) {
                    Pe(p, h, g, f, false);
                  }
                }
              } else if (f === "childList") {
                u = true;
                f = g.addedNodes;
                _ = 0;
                for (; _ < f.length; _++) {
                  var y = be(m = f[_]);
                  var N = m.parentNode;
                  if (!(N == null || m === a || y !== null || m.nodeName === "BR" && se(m, N, e))) {
                    if (W && (y = m.innerText || m.nodeValue)) {
                      c += y;
                    }
                    N.removeChild(m);
                  }
                }
                if ((f = (g = g.removedNodes).length) > 0) {
                  _ = 0;
                  m = 0;
                  for (; m < f; m++) {
                    if ((N = g[m]).nodeName === "BR" && se(N, h, e) || a === N) {
                      h.appendChild(N);
                      _++;
                    }
                  }
                  if (f !== _) {
                    if (h === s) {
                      p = l._nodeMap.get("root");
                    }
                    o.set(h, p);
                  }
                }
              }
            }
          }
          if (o.size > 0) {
            for (let [t, n] of o) {
              if (wr(n)) {
                o = n.getChildrenKeys();
                s = t.firstChild;
                l = 0;
                o = n.getChildrenKeys();
                s = t.firstChild;
                l = 0;
                for (; l < o.length; l++) {
                  if ((a = e.getElementByKey(o[l])) !== null) {
                    if (s == null) {
                      t.appendChild(a);
                      s = a;
                    } else if (s !== a) {
                      t.replaceChild(a, s);
                    }
                    s = s.nextSibling;
                  }
                }
              } else if (wn(n)) {
                n.markDirty();
              }
            }
          }
          if ((o = n.takeRecords()).length > 0) {
            for (s = 0; s < o.length; s++) {
              l = (a = o[s]).addedNodes;
              a = a.target;
              d = 0;
              l = (a = o[s]).addedNodes;
              a = a.target;
              d = 0;
              for (; d < l.length; d++) {
                if (!((h = (p = l[d]).parentNode) == null || p.nodeName !== "BR" || se(p, a, e))) {
                  h.removeChild(p);
                }
              }
            }
            n.takeRecords();
          }
          if (i !== null) {
            if (u) {
              i.dirty = true;
              ke(i);
            }
            if (W && We(e)) {
              i.insertRawText(c);
            }
          }
        });
      } finally {
        re = false;
      }
    }
    function ae(e) {
      let t = e._observer;
      if (t !== null) {
        le(e, t.takeRecords(), t);
      }
    }
    function ue(e) {
      if (ie === 0) {
        He(e).addEventListener("textInput", oe, true);
      }
      e._observer = new MutationObserver((t, n) => {
        le(e, t, n);
      });
    }
    let ce = 1;
    let de = typeof queueMicrotask == "function" ? queueMicrotask : e => {
      Promise.resolve().then(e);
    };
    function ge(e) {
      let t = document.activeElement;
      if (t === null) {
        return false;
      }
      let n = t.nodeName;
      return Ar(Se(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && t.__lexicalEditor == null);
    }
    function fe(e, t, n) {
      let r = e.getRootElement();
      try {
        return r !== null && r.contains(t) && r.contains(n) && t !== null && !ge(t) && he(t) === e;
      } catch (e) {
        return false;
      }
    }
    function he(e) {
      for (; e != null;) {
        let t = e.__lexicalEditor;
        if (t != null) {
          return t;
        }
        e = Ye(e);
      }
      return null;
    }
    function pe(e) {
      return e.isToken() || e.isSegmented();
    }
    function _e(e) {
      for (; e != null;) {
        if (e.nodeType === 3) {
          return e;
        }
        e = e.firstChild;
      }
      return null;
    }
    function me(e, t, n) {
      if (e & (t = q[t]) && (n === null || (n & t) == 0)) {
        return e ^ t;
      } else if (n === null || n & t) {
        return e | t;
      } else {
        return e;
      }
    }
    function ye(e) {
      return wn(e) || fn(e) || Ar(e);
    }
    function Ne(e, t) {
      if (t != null) {
        e.__key = t;
      } else {
        hr();
        if (dr > 99) {
          L(14);
        }
        t = _r();
        var n = pr();
        var r = "" + ce++;
        n._nodeMap.set(r, e);
        if (wr(e)) {
          t._dirtyElements.set(r, true);
        } else {
          t._dirtyLeaves.add(r);
        }
        t._cloneNotNeeded.add(r);
        t._dirtyType = 1;
        e.__key = r;
      }
    }
    function ve(e) {
      var t = e.getParent();
      if (t !== null) {
        let i = e.getWritable();
        t = t.getWritable();
        var n = e.getPreviousSibling();
        e = e.getNextSibling();
        if (n === null) {
          if (e !== null) {
            var r = e.getWritable();
            t.__first = e.__key;
            r.__prev = null;
          } else {
            t.__first = null;
          }
        } else {
          r = n.getWritable();
          if (e !== null) {
            let t = e.getWritable();
            t.__prev = r.__key;
            r.__next = t.__key;
          } else {
            r.__next = null;
          }
          i.__prev = null;
        }
        if (e === null) {
          if (n !== null) {
            e = n.getWritable();
            t.__last = n.__key;
            e.__next = null;
          } else {
            t.__last = null;
          }
        } else {
          e = e.getWritable();
          if (n !== null) {
            (n = n.getWritable()).__next = e.__key;
            e.__prev = n.__key;
          } else {
            e.__prev = null;
          }
          i.__next = null;
        }
        t.__size--;
        i.__parent = null;
      }
    }
    function Te(e) {
      if (dr > 99) {
        L(14);
      }
      var t = e.getLatest();
      var n = t.__parent;
      var r = pr();
      let i = _r();
      let o = r._nodeMap;
      r = i._dirtyElements;
      if (n !== null) {
        e: for (; n !== null && !r.has(n);) {
          let e = o.get(n);
          if (e === undefined) {
            break;
          }
          r.set(n, false);
          n = e.__parent;
        }
      }
      t = t.__key;
      i._dirtyType = 1;
      if (wr(e)) {
        r.set(t, true);
      } else {
        i._dirtyLeaves.add(t);
      }
    }
    function Ee(e) {
      hr();
      var t = _r();
      let n = t._compositionKey;
      if (e !== n) {
        t._compositionKey = e;
        if (n !== null) {
          if ((t = xe(n)) !== null) {
            t.getWritable();
          }
        }
        if (e !== null) {
          if ((e = xe(e)) !== null) {
            e.getWritable();
          }
        }
      }
    }
    function Ce() {
      if (fr()) {
        return null;
      } else {
        return _r()._compositionKey;
      }
    }
    function xe(e, t) {
      if ((e = (t || pr())._nodeMap.get(e)) === undefined) {
        return null;
      } else {
        return e;
      }
    }
    function be(e, t) {
      if ((e = e[`__lexicalKey_${_r()._key}`]) !== undefined) {
        return xe(e, t);
      } else {
        return null;
      }
    }
    function Se(e, t) {
      for (; e != null;) {
        let n = be(e, t);
        if (n !== null) {
          return n;
        }
        e = Ye(e);
      }
      return null;
    }
    function Ae(e) {
      let t = Object.assign({}, e._decorators);
      return e._pendingDecorators = t;
    }
    function Oe(e) {
      return e.read(() => we().getTextContent());
    }
    function we() {
      return pr()._nodeMap.get("root");
    }
    function ke(e) {
      hr();
      let t = pr();
      if (e !== null) {
        e.dirty = true;
        e._cachedNodes = null;
      }
      t._selection = e;
    }
    function Re(e) {
      var t;
      var n = _r();
      e: {
        for (t = e; t != null;) {
          let e = t[`__lexicalKey_${n._key}`];
          if (e !== undefined) {
            t = e;
            break e;
          }
          t = Ye(t);
        }
        t = null;
      }
      if (t === null) {
        if (e === (n = n.getRootElement())) {
          return xe("root");
        } else {
          return null;
        }
      } else {
        return xe(t);
      }
    }
    function De(e) {
      return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
    }
    function Me(e) {
      let t = [];
      for (; e !== null;) {
        t.push(e);
        e = e._parentEditor;
      }
      return t;
    }
    function $e() {
      return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
    }
    function Ie(e, t, n) {
      if ((t = et(t._window)) !== null) {
        var r = t.anchorNode;
        var {
          anchorOffset: i,
          focusOffset: o
        } = t;
        if (r !== null && (t = r.nodeType === 3 ? r.nodeValue : null, r = Se(r), t !== null && wn(r))) {
          if (t === G && n) {
            t = n;
            o = i = n.length;
          }
          if (t !== null) {
            Pe(r, t, i, o, e);
          }
        }
      }
    }
    function Pe(e, t, n, r, i) {
      let o = e;
      if (o.isAttached() && (i || !o.isDirty())) {
        let u = o.isComposing();
        let c = t;
        if ((u || i) && t[t.length - 1] === G) {
          c = t.slice(0, -1);
        }
        t = o.getTextContent();
        if (i || c !== t) {
          if (c === "") {
            Ee(null);
            if (U || Y || H) {
              o.remove();
            } else {
              let e = _r();
              setTimeout(() => {
                e.update(() => {
                  if (o.isAttached()) {
                    o.remove();
                  }
                });
              }, 20);
            }
          } else {
            i = o.getParent();
            t = tr();
            var s = o.getTextContentSize();
            var l = Ce();
            var a = o.getKey();
            if (o.isToken() || l !== null && a === l && !u || Fn(t) && (i !== null && !i.canInsertTextBefore() && t.anchor.offset === 0 || t.anchor.key === e.__key && t.anchor.offset === 0 && !o.canInsertTextBefore() || t.focus.key === e.__key && t.focus.offset === s && !o.canInsertTextAfter())) {
              o.markDirty();
            } else {
              if (Fn(e = er()) && n !== null && r !== null) {
                e.setTextNodeRange(o, n, o, r);
                if (o.isSegmented()) {
                  n = On(n = o.getTextContent());
                  o.replace(n);
                  o = n;
                }
              }
              o.setTextContent(c);
            }
          }
        }
      }
    }
    function Le(e, t) {
      var n = e[t];
      if (typeof n == "string") {
        n = n.split(" ");
        return e[t] = n;
      } else {
        return n;
      }
    }
    function Fe(e, t, n, r, i) {
      if (n.size !== 0) {
        n = r.__key;
        if ((t = t.get(r.__type)) === undefined) {
          L(33);
        }
        r = t.klass;
        if ((t = e.get(r)) === undefined) {
          t = new Map();
          e.set(r, t);
        }
        r = (e = t.get(n)) === "destroyed" && i === "created";
        if (e === undefined || r) {
          t.set(n, r ? "updated" : i);
        }
      }
    }
    function Be(e, t, n) {
      let r = e.getParent();
      let i = n;
      if (r !== null) {
        if (t && n === 0) {
          i = e.getIndexWithinParent();
          e = r;
        } else if (!(t || n !== e.getChildrenSize())) {
          i = e.getIndexWithinParent() + 1;
          e = r;
        }
      }
      return e.getChildAtIndex(t ? i - 1 : i);
    }
    function ze(e, t) {
      var n = e.offset;
      if (e.type === "element") {
        return Be(e = e.getNode(), t, n);
      } else {
        e = e.getNode();
        if (t && n === 0 || !t && n === e.getTextContentSize()) {
          if ((n = t ? e.getPreviousSibling() : e.getNextSibling()) === null) {
            return Be(e.getParentOrThrow(), t, e.getIndexWithinParent() + (t ? 0 : 1));
          } else {
            return n;
          }
        } else {
          return null;
        }
      }
    }
    function We(e) {
      return (e = (e = He(e).event) && e.inputType) === "insertFromPaste" || e === "insertFromPasteAsQuotation";
    }
    function Ke(e) {
      return !Dr(e) && !e.isLastChild() && !e.isInline();
    }
    function Ue(e, t) {
      if ((e = e._keyToDOMMap.get(t)) === undefined) {
        L(75);
      }
      return e;
    }
    function Ye(e) {
      if ((e = e.assignedSlot || e.parentElement) !== null && e.nodeType === 11) {
        return e.host;
      } else {
        return e;
      }
    }
    function je(e, t) {
      for (e = e.getParent(); e !== null;) {
        if (e.is(t)) {
          return true;
        }
        e = e.getParent();
      }
      return false;
    }
    function He(e) {
      if ((e = e._window) === null) {
        L(78);
      }
      return e;
    }
    function Ge(e) {
      for (e = e.getParentOrThrow(); e !== null && !Ve(e);) {
        e = e.getParentOrThrow();
      }
      return e;
    }
    function Ve(e) {
      return Dr(e) || wr(e) && e.isShadowRoot();
    }
    function Je(e) {
      Ne(e = e.constructor.clone(e), null);
      return e;
    }
    function Ze(e) {
      var t = _r();
      let n = e.constructor.getType();
      if ((t = t._nodes.get(n)) === undefined) {
        L(97);
      }
      if ((t = t.replace) !== null) {
        if (!((t = t(e)) instanceof e.constructor)) {
          L(98);
        }
        return t;
      } else {
        return e;
      }
    }
    function qe(e, t) {
      if (!(!Dr(e = e.getParent()) || wr(t) || Ar(t))) {
        L(99);
      }
    }
    function Xe(e) {
      return (Ar(e) || wr(e) && !e.canBeEmpty()) && !e.isInline();
    }
    function Qe(e, t, n) {
      n.style.removeProperty("caret-color");
      t._blockCursorElement = null;
      if ((t = e.parentElement) !== null) {
        t.removeChild(e);
      }
    }
    function et(e) {
      if (F) {
        return (e || window).getSelection();
      } else {
        return null;
      }
    }
    function tt(e, t) {
      let n = e.getChildAtIndex(t);
      if (n == null) {
        n = e;
      }
      if (Ve(e)) {
        L(102);
      }
      let r = e => {
        const t = e.getParentOrThrow();
        const i = Ve(t);
        const o = e !== n || i ? Je(e) : e;
        if (i) {
          e.insertAfter(o);
          return [e, o, o];
        }
        const [s, l, a] = r(t);
        e = e.getNextSiblings();
        a.append(o, ...e);
        return [s, l, o];
      };
      let [i, o] = r(n);
      return [i, o];
    }
    function nt(e, t) {
      for (; e !== we() && e != null;) {
        if (t(e)) {
          return e;
        }
        e = e.getParent();
      }
      return null;
    }
    function rt(e) {
      let t = [];
      let n = [e];
      for (; n.length > 0;) {
        let r = n.pop();
        if (r === undefined) {
          L(112);
        }
        if (wr(r)) {
          n.unshift(...r.getChildren());
        }
        if (r !== e) {
          t.push(r);
        }
      }
      return t;
    }
    function it(e, t, n, r, i, o) {
      for (e = e.getFirstChild(); e !== null;) {
        let s = e.__key;
        if (e.__parent === t) {
          if (wr(e)) {
            it(e, s, n, r, i, o);
          }
          if (!n.has(s)) {
            o.delete(s);
          }
          i.push(s);
        }
        e = e.getNextSibling();
      }
    }
    function ot(e, t) {
      let n = e.__mode;
      let r = e.__format;
      e = e.__style;
      let i = t.__mode;
      let o = t.__format;
      t = t.__style;
      return !(n !== null && n !== i || r !== null && r !== o || e !== null && e !== t);
    }
    function st(e, t) {
      let n = e.mergeWithSibling(t);
      let r = _r()._normalizedNodes;
      r.add(e.__key);
      r.add(t.__key);
      return n;
    }
    function lt(e) {
      if (e.__text === "" && e.isSimpleText() && !e.isUnmergeable()) {
        e.remove();
      } else {
        for (var t; (t = e.getPreviousSibling()) !== null && wn(t) && t.isSimpleText() && !t.isUnmergeable();) {
          if (t.__text !== "") {
            if (ot(t, e)) {
              e = st(t, e);
            }
            break;
          }
          t.remove();
        }
        for (var n; (n = e.getNextSibling()) !== null && wn(n) && n.isSimpleText() && !n.isUnmergeable();) {
          if (n.__text !== "") {
            if (ot(e, n)) {
              st(e, n);
            }
            break;
          }
          n.remove();
        }
      }
    }
    function at(e) {
      ut(e.anchor);
      ut(e.focus);
      return e;
    }
    function ut(e) {
      for (; e.type === "element";) {
        var t = e.getNode();
        var n = e.offset;
        if (n === t.getChildrenSize()) {
          t = t.getChildAtIndex(n - 1);
          n = true;
        } else {
          t = t.getChildAtIndex(n);
          n = false;
        }
        if (wn(t)) {
          e.set(t.__key, n ? t.getTextContentSize() : 0, "text");
          break;
        }
        if (!wr(t)) {
          break;
        }
        e.set(t.__key, n ? t.getChildrenSize() : 0, "element");
      }
    }
    let ct;
    let dt;
    let gt;
    let ft;
    let ht;
    let pt;
    let _t;
    let mt;
    let yt;
    let Nt;
    let vt = "";
    let Tt = "";
    let Et = "";
    let Ct = false;
    let xt = false;
    let bt = null;
    function St(e, t) {
      let n = _t.get(e);
      if (t !== null) {
        let n = zt(e);
        if (n.parentNode === t) {
          t.removeChild(n);
        }
      }
      if (!mt.has(e)) {
        dt._keyToDOMMap.delete(e);
      }
      if (wr(n)) {
        At(e = Pt(n, _t), 0, e.length - 1, null);
      }
      if (n !== undefined) {
        Fe(Nt, gt, ft, n, "destroyed");
      }
    }
    function At(e, t, n, r) {
      for (; t <= n; ++t) {
        let n = e[t];
        if (n !== undefined) {
          St(n, r);
        }
      }
    }
    function Ot(e, t) {
      e.setProperty("text-align", t);
    }
    function wt(e, t) {
      var n = ct.theme.indent;
      if (typeof n == "string") {
        let r = e.classList.contains(n);
        if (t > 0 && !r) {
          e.classList.add(n);
        } else if (t < 1 && r) {
          e.classList.remove(n);
        }
      }
      n = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || "40px";
      e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * ${n})`);
    }
    function kt(e, t) {
      e = e.style;
      if (t === 0) {
        Ot(e, "");
      } else if (t === 1) {
        Ot(e, "left");
      } else if (t === 2) {
        Ot(e, "center");
      } else if (t === 3) {
        Ot(e, "right");
      } else if (t === 4) {
        Ot(e, "justify");
      } else if (t === 5) {
        Ot(e, "start");
      } else if (t === 6) {
        Ot(e, "end");
      }
    }
    function Rt(e, t, n) {
      let r = mt.get(e);
      if (r === undefined) {
        L(60);
      }
      let i = r.createDOM(ct, dt);
      var o = dt._keyToDOMMap;
      i["__lexicalKey_" + dt._key] = e;
      o.set(e, i);
      if (wn(r)) {
        i.setAttribute("data-lexical-text", "true");
      } else if (Ar(r)) {
        i.setAttribute("data-lexical-decorator", "true");
      }
      if (wr(r)) {
        e = r.__indent;
        o = r.__size;
        if (e !== 0) {
          wt(i, e);
        }
        if (o !== 0) {
          --o;
          e = Pt(r, mt);
          var s = Tt;
          Tt = "";
          Dt(e, r, 0, o, i, null);
          It(r, i);
          Tt = s;
        }
        if ((e = r.__format) !== 0) {
          kt(i, e);
        }
        if (!r.isInline()) {
          $t(null, r, i);
        }
        if (Ke(r)) {
          vt += "\n\n";
          Et += "\n\n";
        }
      } else {
        o = r.getTextContent();
        if (Ar(r)) {
          if ((s = r.decorate(dt, ct)) !== null) {
            Ft(e, s);
          }
          i.contentEditable = "false";
        } else if (wn(r)) {
          if (!r.isDirectionless()) {
            Tt += o;
          }
        }
        vt += o;
        Et += o;
      }
      if (t !== null) {
        if (n != null) {
          t.insertBefore(i, n);
        } else if ((n = t.__lexicalLineBreak) != null) {
          t.insertBefore(i, n);
        } else {
          t.appendChild(i);
        }
      }
      Fe(Nt, gt, ft, r, "created");
      return i;
    }
    function Dt(e, t, n, r, i, o) {
      let s = vt;
      for (vt = ""; n <= r; ++n) {
        Rt(e[n], i, o);
      }
      if (Ke(t)) {
        vt += "\n\n";
      }
      i.__lexicalTextContent = vt;
      vt = s + vt;
    }
    function Mt(e, t) {
      return fn(e = t.get(e)) || Ar(e) && e.isInline();
    }
    function $t(e, t, n) {
      e = e !== null && (e.__size === 0 || Mt(e.__last, _t));
      t = t.__size === 0 || Mt(t.__last, mt);
      if (e) {
        if (!t) {
          if ((t = n.__lexicalLineBreak) != null) {
            n.removeChild(t);
          }
          n.__lexicalLineBreak = null;
        }
      } else if (t) {
        t = document.createElement("br");
        n.__lexicalLineBreak = t;
        n.appendChild(t);
      }
    }
    function It(e, t) {
      var n = t.__lexicalDir;
      if (t.__lexicalDirTextContent !== Tt || n !== bt) {
        let o = Tt === "";
        if (o) {
          var r = bt;
        } else {
          r = Tt;
          r = J.test(r) ? "rtl" : Z.test(r) ? "ltr" : null;
        }
        if (r !== n) {
          let s = t.classList;
          let l = ct.theme;
          var i = n !== null ? l[n] : undefined;
          let a = r !== null ? l[r] : undefined;
          if (i !== undefined) {
            if (typeof i == "string") {
              i = i.split(" ");
              i = l[n] = i;
            }
            s.remove(...i);
          }
          if (r === null || o && r === "ltr") {
            t.removeAttribute("dir");
          } else {
            if (a !== undefined) {
              if (typeof a == "string") {
                n = a.split(" ");
                a = l[r] = n;
              }
              if (a !== undefined) {
                s.add(...a);
              }
            }
            t.dir = r;
          }
          if (!xt) {
            e.getWritable().__dir = r;
          }
        }
        bt = r;
        t.__lexicalDirTextContent = Tt;
        t.__lexicalDir = r;
      }
    }
    function Pt(e, t) {
      let n = [];
      for (e = e.__first; e !== null;) {
        let r = t.get(e);
        if (r === undefined) {
          L(101);
        }
        n.push(e);
        e = r.__next;
      }
      return n;
    }
    function Lt(e, t) {
      var n = _t.get(e);
      var r = mt.get(e);
      if (!(n !== undefined && r !== undefined)) {
        L(61);
      }
      var i = Ct || pt.has(e) || ht.has(e);
      let o = Ue(dt, e);
      if (n === r && !i) {
        if (wr(n)) {
          if ((r = o.__lexicalTextContent) !== undefined) {
            vt += r;
            Et += r;
          }
          if ((r = o.__lexicalDirTextContent) !== undefined) {
            Tt += r;
          }
        } else {
          r = n.getTextContent();
          if (wn(n) && !n.isDirectionless()) {
            Tt += r;
          }
          Et += r;
          vt += r;
        }
        return o;
      }
      if (n !== r && i) {
        Fe(Nt, gt, ft, r, "updated");
      }
      if (r.updateDOM(n, o, ct)) {
        r = Rt(e, null, null);
        if (t === null) {
          L(62);
        }
        t.replaceChild(r, o);
        St(e, null);
        return r;
      }
      if (wr(n) && wr(r)) {
        if ((e = r.__indent) !== n.__indent) {
          wt(o, e);
        }
        if ((e = r.__format) !== n.__format) {
          kt(o, e);
        }
        if (i) {
          e = r;
          i = Tt;
          Tt = "";
          t = vt;
          var s = n.__size;
          var l = e.__size;
          vt = "";
          if (s === 1 && l === 1) {
            var a = n.__first;
            var u = e.__first;
            if (a === u) {
              Lt(a, o);
            } else {
              var c = zt(a);
              u = Rt(u, null, null);
              o.replaceChild(u, c);
              St(a, null);
            }
          } else {
            u = Pt(n, _t);
            var d = Pt(e, mt);
            if (s === 0) {
              if (l !== 0) {
                Dt(d, e, 0, l - 1, o, null);
              }
            } else if (l === 0) {
              if (s !== 0) {
                At(u, 0, s - 1, (a = o.__lexicalLineBreak == null) ? null : o);
                if (a) {
                  o.textContent = "";
                }
              }
            } else {
              var g = u;
              u = d;
              d = s - 1;
              s = l - 1;
              let t = o.firstChild;
              let n = 0;
              for (l = 0; n <= d && l <= s;) {
                var f = g[n];
                let e = u[l];
                if (f === e) {
                  t = Bt(Lt(e, o));
                  n++;
                  l++;
                } else {
                  if (a === undefined) {
                    a = new Set(g);
                  }
                  if (c === undefined) {
                    c = new Set(u);
                  }
                  let r = c.has(f);
                  let i = a.has(e);
                  if (r) {
                    if (i) {
                      if ((f = Ue(dt, e)) === t) {
                        t = Bt(Lt(e, o));
                      } else {
                        if (t != null) {
                          o.insertBefore(f, t);
                        } else {
                          o.appendChild(f);
                        }
                        Lt(e, o);
                      }
                      n++;
                    } else {
                      Rt(e, o, t);
                    }
                    l++;
                  } else {
                    t = Bt(zt(f));
                    St(f, o);
                    n++;
                  }
                }
              }
              c = l > s;
              if ((a = n > d) && !c) {
                Dt(u, e, l, s, o, a = (a = u[s + 1]) === undefined ? null : dt.getElementByKey(a));
              } else if (c && !a) {
                At(g, n, d, o);
              }
            }
          }
          if (Ke(e)) {
            vt += "\n\n";
          }
          o.__lexicalTextContent = vt;
          vt = t + vt;
          It(e, o);
          Tt = i;
          if (!(Dr(r) || r.isInline())) {
            $t(n, r, o);
          }
        }
        if (Ke(r)) {
          vt += "\n\n";
          Et += "\n\n";
        }
      } else {
        n = r.getTextContent();
        if (Ar(r)) {
          if ((i = r.decorate(dt, ct)) !== null) {
            Ft(e, i);
          }
        } else if (wn(r) && !r.isDirectionless()) {
          Tt += n;
        }
        vt += n;
        Et += n;
      }
      if (!xt && Dr(r) && r.__cachedText !== Et) {
        (r = r.getWritable()).__cachedText = Et;
      }
      return o;
    }
    function Ft(e, t) {
      let n = dt._pendingDecorators;
      let r = dt._decorators;
      if (n === null) {
        if (r[e] === t) {
          return;
        }
        n = Ae(dt);
      }
      n[e] = t;
    }
    function Bt(e) {
      if ((e = e.nextSibling) !== null && e === dt._blockCursorElement) {
        e = e.nextSibling;
      }
      return e;
    }
    function zt(e) {
      if ((e = yt.get(e)) === undefined) {
        L(75);
      }
      return e;
    }
    let Wt = Object.freeze({});
    let Kt = [["keydown", function (e, t) {
      Ut = e.timeStamp;
      Yt = e.keyCode;
      if (!t.isComposing()) {
        var {
          keyCode: n,
          shiftKey: r,
          ctrlKey: s,
          metaKey: l,
          altKey: a
        } = e;
        if (!Er(t, p, e)) {
          if (n !== 39 || s || l || a) {
            if (n !== 39 || a || r || !s && !l) {
              if (n !== 37 || s || l || a) {
                if (n !== 37 || a || r || !s && !l) {
                  if (n !== 38 || s || l) {
                    if (n !== 40 || s || l) {
                      if (n === 13 && r) {
                        Zt = true;
                        Er(t, E, e);
                      } else if (n === 32) {
                        Er(t, C, e);
                      } else if (z && s && n === 79) {
                        e.preventDefault();
                        Zt = true;
                        Er(t, o, true);
                      } else if (n !== 13 || r) {
                        if (z ? a || l || !(n === 8 || n === 72 && s) : s || a || l || n !== 8) {
                          if (n === 27) {
                            Er(t, b, e);
                          } else if (z ? r || a || l || !(n === 46 || n === 68 && s) : s || a || l || n !== 46) {
                            if (n === 8 && (z ? a : s)) {
                              e.preventDefault();
                              Er(t, c, true);
                            } else if (n === 46 && (z ? a : s)) {
                              e.preventDefault();
                              Er(t, c, false);
                            } else if (z && l && n === 8) {
                              e.preventDefault();
                              Er(t, d, true);
                            } else if (z && l && n === 46) {
                              e.preventDefault();
                              Er(t, d, false);
                            } else if (n === 66 && !a && (z ? l : s)) {
                              e.preventDefault();
                              Er(t, g, "bold");
                            } else if (n === 85 && !a && (z ? l : s)) {
                              e.preventDefault();
                              Er(t, g, "underline");
                            } else if (n === 73 && !a && (z ? l : s)) {
                              e.preventDefault();
                              Er(t, g, "italic");
                            } else if (n !== 9 || a || s || l) {
                              if (n === 90 && !r && (z ? l : s)) {
                                e.preventDefault();
                                Er(t, f, undefined);
                              } else {
                                var u = z ? n === 90 && l && r : n === 89 && s || n === 90 && s && r;
                                if (u) {
                                  e.preventDefault();
                                  Er(t, h, undefined);
                                } else if (Kn(t._editorState._selection)) {
                                  if (u = !r && n === 67 && (z ? l : s)) {
                                    e.preventDefault();
                                    Er(t, D, e);
                                  } else if (u = !r && n === 88 && (z ? l : s)) {
                                    e.preventDefault();
                                    Er(t, M, e);
                                  } else if (n === 65 && (z ? l : s)) {
                                    e.preventDefault();
                                    t.update(() => {
                                      let e = we();
                                      e.select(0, e.getChildrenSize());
                                    });
                                  }
                                }
                              }
                            } else {
                              Er(t, A, e);
                            }
                          } else if (n === 46) {
                            Er(t, S, e);
                          } else {
                            e.preventDefault();
                            Er(t, i, false);
                          }
                        } else if (n === 8) {
                          Er(t, x, e);
                        } else {
                          e.preventDefault();
                          Er(t, i, true);
                        }
                      } else {
                        Zt = false;
                        Er(t, E, e);
                      }
                    } else {
                      Er(t, T, e);
                    }
                  } else {
                    Er(t, v, e);
                  }
                } else {
                  Er(t, N, e);
                }
              } else {
                Er(t, y, e);
              }
            } else {
              Er(t, m, e);
            }
          } else {
            Er(t, _, e);
          }
          if (s || r || a || l) {
            Er(t, P, e);
          }
        }
      }
    }], ["pointerdown", function (e, t) {
      let n = e.target;
      e = e.pointerType;
      if (n instanceof Node && e !== "touch") {
        br(t, () => {
          if (!Ar(Se(n))) {
            Jt = true;
          }
        });
      }
    }], ["compositionstart", function (e, t) {
      br(t, () => {
        let n = er();
        if (Fn(n) && !t.isComposing()) {
          let r = n.anchor;
          let i = n.anchor.getNode();
          Ee(r.key);
          if (e.timeStamp < Ut + 30 || r.type === "element" || !n.isCollapsed() || i.getFormat() !== n.format || i.getStyle() !== n.style) {
            Er(t, l, V);
          }
        }
      });
    }], ["compositionend", function (e, t) {
      if (W) {
        qt = true;
      } else {
        br(t, () => {
          rn(t, e.data);
        });
      }
    }], ["input", function (e, t) {
      e.stopPropagation();
      br(t, () => {
        var n = er();
        var r = e.data;
        var i = nn(e);
        if (r != null && Fn(n) && Qt(n, i, r, e.timeStamp, false)) {
          if (qt) {
            rn(t, r);
            qt = false;
          }
          var o = n.anchor;
          var s = o.getNode();
          if ((i = et(t._window)) === null) {
            return;
          }
          let a = o.offset;
          if (o = K && !n.isCollapsed() && wn(s) && i.anchorNode !== null) {
            o = (s = s.getTextContent().slice(0, a) + r + s.getTextContent().slice(a + n.focus.offset)) === ((i = i.anchorNode).nodeType === 3 ? i.nodeValue : null);
          }
          if (!o) {
            Er(t, l, r);
          }
          r = r.length;
          if (W && r > 1 && e.inputType === "insertCompositionText" && !t.isComposing()) {
            n.anchor.offset -= r;
          }
          if (!(U || Y || H || !t.isComposing())) {
            Ut = 0;
            Ee(null);
          }
        } else {
          Ie(false, t, r !== null ? r : undefined);
          if (qt) {
            rn(t, r || undefined);
            qt = false;
          }
        }
        hr();
        ae(n = _r());
      });
      Ht = null;
    }], ["click", function (e, t) {
      br(t, () => {
        let n = er();
        var i = et(t._window);
        let o = tr();
        if (i) {
          if (Fn(n)) {
            let t = n.anchor;
            var s = t.getNode();
            if (t.type === "element" && t.offset === 0 && n.isCollapsed() && !Dr(s) && we().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && n.is(o)) {
              i.removeAllRanges();
              n.dirty = true;
            } else if (!(e.detail !== 3 || n.isCollapsed())) {
              if (s !== (i = n.focus.getNode())) {
                if (wr(s)) {
                  s.select(0);
                } else {
                  s.getParentOrThrow().select(0);
                }
              }
            }
          } else if (e.pointerType === "touch" && (s = i.anchorNode) !== null && ((s = s.nodeType) === 1 || s === 3)) {
            ke(i = Qn(o, i, t));
          }
        }
        Er(t, r, e);
      });
    }], ["cut", Wt], ["copy", Wt], ["dragstart", Wt], ["dragover", Wt], ["dragend", Wt], ["paste", Wt], ["focus", Wt], ["blur", Wt], ["drop", Wt]];
    if (K) {
      Kt.push(["beforeinput", (e, t) => function (e, t) {
        let n = e.inputType;
        let r = nn(e);
        if (!(n === "deleteCompositionText" || W && We(t))) {
          if (n !== "insertCompositionText") {
            br(t, () => {
              let p = er();
              if (n === "deleteContentBackward") {
                if (p === null) {
                  var _ = tr();
                  if (!Fn(_)) {
                    return;
                  }
                  ke(_.clone());
                }
                if (Fn(p)) {
                  return void (Yt === 229 && e.timeStamp < Ut + 30 && t.isComposing() && p.anchor.key === p.focus.key ? (Ee(null), Ut = 0, setTimeout(() => {
                    br(t, () => {
                      Ee(null);
                    });
                  }, 30), Fn(p) && (_ = p.anchor.getNode(), _.markDirty(), p.format = _.getFormat(), p.style = _.getStyle())) : (e.preventDefault(), Er(t, i, true)));
                }
              }
              if (Fn(p)) {
                _ = e.data;
                if (Ht !== null) {
                  Ie(false, t, Ht);
                }
                if (!(p.dirty && Ht === null || !p.isCollapsed() || Dr(p.anchor.getNode()) || r === null)) {
                  p.applyDOMRange(r);
                }
                Ht = null;
                var m = p.focus;
                var y = p.anchor.getNode();
                m = m.getNode();
                if (n === "insertText" || n === "insertTranspose") {
                  if (_ === "\n") {
                    e.preventDefault();
                    Er(t, o, false);
                  } else if (_ === "\n\n") {
                    e.preventDefault();
                    Er(t, s, undefined);
                  } else if (_ == null && e.dataTransfer) {
                    _ = e.dataTransfer.getData("text/plain");
                    e.preventDefault();
                    p.insertRawText(_);
                  } else if (_ != null && Qt(p, r, _, e.timeStamp, true)) {
                    e.preventDefault();
                    Er(t, l, _);
                  } else {
                    Ht = _;
                  }
                  jt = e.timeStamp;
                } else {
                  e.preventDefault();
                  switch (n) {
                    case "insertFromYank":
                    case "insertFromDrop":
                    case "insertReplacementText":
                      Er(t, l, e);
                      break;
                    case "insertFromComposition":
                      Ee(null);
                      Er(t, l, e);
                      break;
                    case "insertLineBreak":
                      Ee(null);
                      Er(t, o, false);
                      break;
                    case "insertParagraph":
                      Ee(null);
                      if (Zt) {
                        Zt = false;
                        Er(t, o, false);
                      } else {
                        Er(t, s, undefined);
                      }
                      break;
                    case "insertFromPaste":
                    case "insertFromPasteAsQuotation":
                      Er(t, a, e);
                      break;
                    case "deleteByComposition":
                      if (function (e, t) {
                        return e !== t || wr(e) || wr(t) || !e.isToken() || !t.isToken();
                      }(y, m)) {
                        Er(t, u, undefined);
                      }
                      break;
                    case "deleteByDrag":
                    case "deleteByCut":
                      Er(t, u, undefined);
                      break;
                    case "deleteContent":
                      Er(t, i, false);
                      break;
                    case "deleteWordBackward":
                      Er(t, c, true);
                      break;
                    case "deleteWordForward":
                      Er(t, c, false);
                      break;
                    case "deleteHardLineBackward":
                    case "deleteSoftLineBackward":
                      Er(t, d, true);
                      break;
                    case "deleteContentForward":
                    case "deleteHardLineForward":
                    case "deleteSoftLineForward":
                      Er(t, d, false);
                      break;
                    case "formatStrikeThrough":
                      Er(t, g, "strikethrough");
                      break;
                    case "formatBold":
                      Er(t, g, "bold");
                      break;
                    case "formatItalic":
                      Er(t, g, "italic");
                      break;
                    case "formatUnderline":
                      Er(t, g, "underline");
                      break;
                    case "historyUndo":
                      Er(t, f, undefined);
                      break;
                    case "historyRedo":
                      Er(t, h, undefined);
                  }
                }
              }
            });
          }
        }
      }(e, t)]);
    }
    let Ut = 0;
    let Yt = 0;
    let jt = 0;
    let Ht = null;
    let Gt = 0;
    let Vt = false;
    let Jt = false;
    let Zt = false;
    let qt = false;
    let Xt = [0, "", 0, "root", 0];
    function Qt(e, t, n, r, i) {
      let o = e.anchor;
      let s = e.focus;
      let l = o.getNode();
      var a = _r();
      let u = et(a._window);
      let c = u !== null ? u.anchorNode : null;
      let d = o.key;
      a = a.getElementByKey(d);
      let g = n.length;
      return d !== s.key || !wn(l) || (!i && (!K || jt < r + 50) || l.isDirty() && g < 2 || De(n)) && o.offset !== s.offset && !l.isComposing() || pe(l) || l.isDirty() && g > 1 || (i || !K) && a !== null && !l.isComposing() && c !== _e(a) || u !== null && t !== null && (!t.collapsed || t.startContainer !== u.anchorNode || t.startOffset !== u.anchorOffset) || l.getFormat() !== e.format || l.getStyle() !== e.style || function (e, t) {
        if (t.isSegmented()) {
          return true;
        }
        if (!e.isCollapsed()) {
          return false;
        }
        e = e.anchor.offset;
        let n = t.getParentOrThrow();
        let r = t.isToken();
        if (e === 0) {
          if (!(e = !t.canInsertTextBefore() || !n.canInsertTextBefore() || r)) {
            e = (wn(t = t.getPreviousSibling()) || wr(t) && t.isInline()) && !t.canInsertTextAfter();
          }
          return e;
        } else {
          return e === t.getTextContentSize() && (!t.canInsertTextAfter() || !n.canInsertTextAfter() || r);
        }
      }(e, l);
    }
    function en(e, t) {
      return e !== null && e.nodeValue !== null && e.nodeType === 3 && t !== 0 && t !== e.nodeValue.length;
    }
    function tn(e, t, r) {
      let {
        anchorNode: i,
        anchorOffset: o,
        focusNode: s,
        focusOffset: l
      } = e;
      if (!(Vt && (Vt = false, en(i, o) && en(s, l)))) {
        br(t, () => {
          if (r) {
            if (fe(t, i, s)) {
              var o = er();
              if (Fn(o)) {
                var l = o.anchor;
                var a = l.getNode();
                if (o.isCollapsed()) {
                  if (e.type === "Range" && e.anchorNode === e.focusNode) {
                    o.dirty = true;
                  }
                  var u = He(t).event;
                  u = u ? u.timeStamp : performance.now();
                  let [n, r, i, s, c] = Xt;
                  if (u < c + 200 && l.offset === i && l.key === s) {
                    o.format = n;
                    o.style = r;
                  } else if (l.type === "text") {
                    o.format = a.getFormat();
                    o.style = a.getStyle();
                  } else if (l.type === "element") {
                    o.format = 0;
                    o.style = "";
                  }
                } else {
                  l = 255;
                  a = false;
                  let e = (u = o.getNodes()).length;
                  for (let t = 0; t < e; t++) {
                    let e = u[t];
                    if (wn(e) && (a = true, (l &= e.getFormat()) === 0)) {
                      break;
                    }
                  }
                  o.format = a ? l : 0;
                }
              }
              Er(t, n, undefined);
            }
          } else {
            ke(null);
          }
        });
      }
    }
    function nn(e) {
      if (e.getTargetRanges) {
        if ((e = e.getTargetRanges()).length === 0) {
          return null;
        } else {
          return e[0];
        }
      } else {
        return null;
      }
    }
    function rn(e, t) {
      var n = e._compositionKey;
      Ee(null);
      if (n !== null && t != null) {
        if (t === "") {
          t = xe(n);
          return void ((e = _e(e.getElementByKey(n))) !== null && e.nodeValue !== null && wn(t) && Pe(t, e.nodeValue, null, null, true));
        }
        if (t[t.length - 1] === "\n" && Fn(n = er())) {
          t = n.focus;
          n.anchor.set(t.key, t.offset, t.type);
          return void Er(e, E, null);
        }
      }
      Ie(true, e, t);
    }
    function on(e) {
      let t = e.__lexicalEventHandles;
      if (t === undefined) {
        t = [];
        e.__lexicalEventHandles = t;
      }
      return t;
    }
    let sn = new Map();
    function ln(e) {
      let t = et((e = e.target) == null ? null : e.nodeType === 9 ? e.defaultView : e.ownerDocument.defaultView);
      if (t !== null) {
        var n = he(t.anchorNode);
        if (n !== null) {
          if (Jt) {
            Jt = false;
            br(n, () => {
              var e = tr();
              var r = t.anchorNode;
              if (r !== null && ((r = r.nodeType) === 1 || r === 3)) {
                ke(e = Qn(e, t, n));
              }
            });
          }
          var r = (e = (e = Me(n))[e.length - 1])._key;
          var i = sn.get(r);
          var o = i || e;
          if (o !== n) {
            tn(t, o, false);
          }
          tn(t, n, true);
          if (n !== e) {
            sn.set(r, n);
          } else if (i) {
            sn.delete(r);
          }
        }
      }
    }
    function an(e, t, n) {
      hr();
      var r = e.__key;
      let i = e.getParent();
      if (i !== null) {
        var o = function (e, t = 0) {
          if (t !== 0) {
            L(1);
          }
          if (!Fn(t = er()) || !wr(e)) {
            return t;
          }
          let {
            anchor: n,
            focus: r
          } = t;
          let i = n.getNode();
          let o = r.getNode();
          if (je(i, e)) {
            n.set(e.__key, 0, "element");
          }
          if (je(o, e)) {
            r.set(e.__key, 0, "element");
          }
          return t;
        }(e);
        var s = false;
        if (Fn(o) && t) {
          let t = o.anchor;
          let n = o.focus;
          if (t.key === r) {
            ir(t, e, i, e.getPreviousSibling(), e.getNextSibling());
            s = true;
          }
          if (n.key === r) {
            ir(n, e, i, e.getPreviousSibling(), e.getNextSibling());
            s = true;
          }
        }
        if (Fn(o) && t && !s) {
          r = e.getIndexWithinParent();
          ve(e);
          nr(o, i, r, -1);
        } else {
          ve(e);
        }
        if (!(n || Ve(i) || i.canBeEmpty() || !i.isEmpty())) {
          an(i, t);
        }
        if (t && Dr(i) && i.isEmpty()) {
          i.selectEnd();
        }
      }
    }
    class un {
      static getType() {
        L(64);
      }
      static clone() {
        L(65);
      }
      constructor(e) {
        this.__type = this.constructor.getType();
        this.__next = this.__prev = this.__parent = null;
        Ne(this, e);
      }
      getType() {
        return this.__type;
      }
      isAttached() {
        for (var e = this.__key; e !== null;) {
          if (e === "root") {
            return true;
          }
          if ((e = xe(e)) === null) {
            break;
          }
          e = e.__parent;
        }
        return false;
      }
      isSelected(e) {
        if ((e = e || er()) == null) {
          return false;
        }
        let t = e.getNodes().some(e => e.__key === this.__key);
        return (wn(this) || !Fn(e) || e.anchor.type !== "element" || e.focus.type !== "element" || e.anchor.key !== e.focus.key || e.anchor.offset !== e.focus.offset) && t;
      }
      getKey() {
        return this.__key;
      }
      getIndexWithinParent() {
        var e = this.getParent();
        if (e === null) {
          return -1;
        }
        e = e.getFirstChild();
        let t = 0;
        for (; e !== null;) {
          if (this.is(e)) {
            return t;
          }
          t++;
          e = e.getNextSibling();
        }
        return -1;
      }
      getParent() {
        let e = this.getLatest().__parent;
        if (e === null) {
          return null;
        } else {
          return xe(e);
        }
      }
      getParentOrThrow() {
        let e = this.getParent();
        if (e === null) {
          L(66);
        }
        return e;
      }
      getTopLevelElement() {
        let e = this;
        for (; e !== null;) {
          let t = e.getParent();
          if (Ve(t)) {
            return e;
          }
          e = t;
        }
        return null;
      }
      getTopLevelElementOrThrow() {
        let e = this.getTopLevelElement();
        if (e === null) {
          L(67);
        }
        return e;
      }
      getParents() {
        let e = [];
        let t = this.getParent();
        for (; t !== null;) {
          e.push(t);
          t = t.getParent();
        }
        return e;
      }
      getParentKeys() {
        let e = [];
        let t = this.getParent();
        for (; t !== null;) {
          e.push(t.__key);
          t = t.getParent();
        }
        return e;
      }
      getPreviousSibling() {
        let e = this.getLatest().__prev;
        if (e === null) {
          return null;
        } else {
          return xe(e);
        }
      }
      getPreviousSiblings() {
        let e = [];
        var t = this.getParent();
        if (t === null) {
          return e;
        }
        for (t = t.getFirstChild(); t !== null && !t.is(this);) {
          e.push(t);
          t = t.getNextSibling();
        }
        return e;
      }
      getNextSibling() {
        let e = this.getLatest().__next;
        if (e === null) {
          return null;
        } else {
          return xe(e);
        }
      }
      getNextSiblings() {
        let e = [];
        let t = this.getNextSibling();
        for (; t !== null;) {
          e.push(t);
          t = t.getNextSibling();
        }
        return e;
      }
      getCommonAncestor(e) {
        let t = this.getParents();
        var n = e.getParents();
        if (wr(this)) {
          t.unshift(this);
        }
        if (wr(e)) {
          n.unshift(e);
        }
        e = t.length;
        var r = n.length;
        if (e === 0 || r === 0 || t[e - 1] !== n[r - 1]) {
          return null;
        }
        n = new Set(n);
        r = 0;
        for (; r < e; r++) {
          let e = t[r];
          if (n.has(e)) {
            return e;
          }
        }
        return null;
      }
      is(e) {
        return e != null && this.__key === e.__key;
      }
      isBefore(e) {
        if (this === e) {
          return false;
        }
        if (e.isParentOf(this)) {
          return true;
        }
        if (this.isParentOf(e)) {
          return false;
        }
        var t = this.getCommonAncestor(e);
        let n = this;
        for (;;) {
          var r = n.getParentOrThrow();
          if (r === t) {
            r = n.getIndexWithinParent();
            break;
          }
          n = r;
        }
        for (n = e;;) {
          if ((e = n.getParentOrThrow()) === t) {
            t = n.getIndexWithinParent();
            break;
          }
          n = e;
        }
        return r < t;
      }
      isParentOf(e) {
        let t = this.__key;
        if (t === e.__key) {
          return false;
        }
        for (; e !== null;) {
          if (e.__key === t) {
            return true;
          }
          e = e.getParent();
        }
        return false;
      }
      getNodesBetween(e) {
        let t = this.isBefore(e);
        let n = [];
        let r = new Set();
        for (var i = this;;) {
          var o = i.__key;
          if (!r.has(o)) {
            r.add(o);
            n.push(i);
          }
          if (i === e) {
            break;
          }
          if ((o = wr(i) ? t ? i.getFirstChild() : i.getLastChild() : null) !== null) {
            i = o;
          } else if ((o = t ? i.getNextSibling() : i.getPreviousSibling()) !== null) {
            i = o;
          } else {
            i = i.getParentOrThrow();
            if (!r.has(i.__key)) {
              n.push(i);
            }
            if (i === e) {
              break;
            }
            o = i;
            do {
              if (o === null) {
                L(68);
              }
              i = t ? o.getNextSibling() : o.getPreviousSibling();
              if ((o = o.getParent()) !== null) {
                if (!(i !== null || r.has(o.__key))) {
                  n.push(o);
                }
              }
            } while (i === null);
          }
        }
        if (!t) {
          n.reverse();
        }
        return n;
      }
      isDirty() {
        let e = _r()._dirtyLeaves;
        return e !== null && e.has(this.__key);
      }
      getLatest() {
        let e = xe(this.__key);
        if (e === null) {
          L(113);
        }
        return e;
      }
      getWritable() {
        hr();
        var e = pr();
        var t = _r();
        e = e._nodeMap;
        let n = this.__key;
        let r = this.getLatest();
        let i = r.__parent;
        t = t._cloneNotNeeded;
        var o = er();
        if (o !== null) {
          o._cachedNodes = null;
        }
        if (t.has(n)) {
          Te(r);
          return r;
        } else {
          (o = r.constructor.clone(r)).__parent = i;
          o.__next = r.__next;
          o.__prev = r.__prev;
          if (wr(r) && wr(o)) {
            o.__first = r.__first;
            o.__last = r.__last;
            o.__size = r.__size;
            o.__indent = r.__indent;
            o.__format = r.__format;
            o.__dir = r.__dir;
          } else if (wn(r) && wn(o)) {
            o.__format = r.__format;
            o.__style = r.__style;
            o.__mode = r.__mode;
            o.__detail = r.__detail;
          }
          t.add(n);
          o.__key = n;
          Te(o);
          e.set(n, o);
          return o;
        }
      }
      getTextContent() {
        return "";
      }
      getTextContentSize() {
        return this.getTextContent().length;
      }
      createDOM() {
        L(70);
      }
      updateDOM() {
        L(71);
      }
      exportDOM(e) {
        return {
          element: this.createDOM(e._config, e)
        };
      }
      exportJSON() {
        L(72);
      }
      static importJSON() {
        L(18);
      }
      static transform() {
        return null;
      }
      remove(e) {
        an(this, true, e);
      }
      replace(e, t) {
        hr();
        var n = er();
        if (n !== null) {
          n = n.clone();
        }
        qe(this, e);
        let r = this.getLatest();
        let i = this.__key;
        let o = e.__key;
        let s = e.getWritable();
        let l = (e = this.getParentOrThrow().getWritable()).__size;
        ve(s);
        let a = r.getPreviousSibling();
        let u = r.getNextSibling();
        let c = r.__prev;
        let d = r.__next;
        let g = r.__parent;
        an(r, false, true);
        if (a === null) {
          e.__first = o;
        } else {
          a.getWritable().__next = o;
        }
        s.__prev = c;
        if (u === null) {
          e.__last = o;
        } else {
          u.getWritable().__prev = o;
        }
        s.__next = d;
        s.__parent = g;
        e.__size = l;
        if (t) {
          this.getChildren().forEach(e => {
            s.append(e);
          });
        }
        if (Fn(n)) {
          ke(n);
          t = n.anchor;
          n = n.focus;
          if (t.key === i) {
            $n(t, s);
          }
          if (n.key === i) {
            $n(n, s);
          }
        }
        if (Ce() === i) {
          Ee(o);
        }
        return s;
      }
      insertAfter(e, t = true) {
        hr();
        qe(this, e);
        var n = this.getWritable();
        let r = e.getWritable();
        var i = r.getParent();
        let o = er();
        var s = false;
        var l = false;
        if (i !== null) {
          var a = e.getIndexWithinParent();
          ve(r);
          if (Fn(o)) {
            l = i.__key;
            s = o.anchor;
            i = o.focus;
            s = s.type === "element" && s.key === l && s.offset === a + 1;
            l = i.type === "element" && i.key === l && i.offset === a + 1;
          }
        }
        i = this.getNextSibling();
        a = this.getParentOrThrow().getWritable();
        let u = r.__key;
        let c = n.__next;
        if (i === null) {
          a.__last = u;
        } else {
          i.getWritable().__prev = u;
        }
        a.__size++;
        n.__next = u;
        r.__next = c;
        r.__prev = n.__key;
        r.__parent = n.__parent;
        if (t && Fn(o)) {
          nr(o, a, (t = this.getIndexWithinParent()) + 1);
          n = a.__key;
          if (s) {
            o.anchor.set(n, t + 2, "element");
          }
          if (l) {
            o.focus.set(n, t + 2, "element");
          }
        }
        return e;
      }
      insertBefore(e, t = true) {
        hr();
        qe(this, e);
        var n = this.getWritable();
        let r = e.getWritable();
        let i = r.__key;
        ve(r);
        let o = this.getPreviousSibling();
        let s = this.getParentOrThrow().getWritable();
        let l = n.__prev;
        let a = this.getIndexWithinParent();
        if (o === null) {
          s.__first = i;
        } else {
          o.getWritable().__next = i;
        }
        s.__size++;
        n.__prev = i;
        r.__prev = l;
        r.__next = n.__key;
        r.__parent = n.__parent;
        n = er();
        if (t && Fn(n)) {
          nr(n, t = this.getParentOrThrow(), a);
        }
        return e;
      }
      isParentRequired() {
        return false;
      }
      createParentElementNode() {
        return Fr();
      }
      selectPrevious(e, t) {
        hr();
        let n = this.getPreviousSibling();
        let r = this.getParentOrThrow();
        if (n === null) {
          return r.select(0, 0);
        } else if (wr(n)) {
          return n.select();
        } else if (wn(n)) {
          return n.select(e, t);
        } else {
          e = n.getIndexWithinParent() + 1;
          return r.select(e, e);
        }
      }
      selectNext(e, t) {
        hr();
        let n = this.getNextSibling();
        let r = this.getParentOrThrow();
        if (n === null) {
          return r.select();
        } else if (wr(n)) {
          return n.select(0, 0);
        } else if (wn(n)) {
          return n.select(e, t);
        } else {
          e = n.getIndexWithinParent();
          return r.select(e, e);
        }
      }
      markDirty() {
        this.getWritable();
      }
    }
    class cn extends un {
      static getType() {
        return "linebreak";
      }
      static clone(e) {
        return new cn(e.__key);
      }
      constructor(e) {
        super(e);
      }
      getTextContent() {
        return "\n";
      }
      createDOM() {
        return document.createElement("br");
      }
      updateDOM() {
        return false;
      }
      static importDOM() {
        return {
          br: e => {
            let t;
            let n;
            let r = e.parentElement;
            if (r !== null && ((t = r.firstChild) === e || t.nextSibling === e && t.nodeType === 3 && (t.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null) && ((n = r.lastChild) === e || n.previousSibling === e && n.nodeType === 3 && (n.textContent || "").match(/^[\s|\r?\n|\t]+$/) !== null)) {
              return null;
            } else {
              return {
                conversion: dn,
                priority: 0
              };
            }
          }
        };
      }
      static importJSON() {
        return gn();
      }
      exportJSON() {
        return {
          type: "linebreak",
          version: 1
        };
      }
    }
    function dn() {
      return {
        node: gn()
      };
    }
    function gn() {
      return Ze(new cn());
    }
    function fn(e) {
      return e instanceof cn;
    }
    function hn(e, t) {
      if (t & 16) {
        return "code";
      } else if (t & 128) {
        return "mark";
      } else if (t & 32) {
        return "sub";
      } else if (t & 64) {
        return "sup";
      } else {
        return null;
      }
    }
    function pn(e, t) {
      if (t & 1) {
        return "strong";
      } else if (t & 2) {
        return "em";
      } else {
        return "span";
      }
    }
    function _n(e, t, n, r, i) {
      e = r.classList;
      if ((r = Le(i, "base")) !== undefined) {
        e.add(...r);
      }
      let o = false;
      let s = t & 8 && t & 4;
      var l = n & 8 && n & 4;
      if ((r = Le(i, "underlineStrikethrough")) !== undefined) {
        if (l) {
          o = true;
          if (!s) {
            e.add(...r);
          }
        } else if (s) {
          e.remove(...r);
        }
      }
      for (let a in q) {
        l = q[a];
        if ((r = Le(i, a)) !== undefined) {
          if (n & l && (!o || a !== "underline" && a !== "strikethrough")) {
            if ((t & l) == 0 || s && a === "underline" || a === "strikethrough") {
              e.add(...r);
            }
          } else if (t & l) {
            e.remove(...r);
          }
        }
      }
    }
    function mn(e, t, n) {
      let r = t.firstChild;
      e += (n = n.isComposing()) ? G : "";
      if (r == null) {
        t.textContent = e;
      } else if ((t = r.nodeValue) !== e) {
        if (n || W) {
          n = t.length;
          let i = e.length;
          let o = 0;
          let s = 0;
          for (; o < n && o < i && t[o] === e[o];) {
            o++;
          }
          for (; s + o < n && s + o < i && t[n - s - 1] === e[i - s - 1];) {
            s++;
          }
          e = [o, n - o - s, e.slice(o, i - s)];
          let [l, a, u] = e;
          if (a !== 0) {
            r.deleteData(l, a);
          }
          r.insertData(l, u);
        } else {
          r.nodeValue = e;
        }
      }
    }
    function yn(e, t) {
      (t = document.createElement(t)).appendChild(e);
      return t;
    }
    class Nn extends un {
      static getType() {
        return "text";
      }
      static clone(e) {
        return new Nn(e.__text, e.__key);
      }
      constructor(e, t) {
        super(t);
        this.__text = e;
        this.__format = 0;
        this.__style = "";
        this.__detail = this.__mode = 0;
      }
      getFormat() {
        return this.getLatest().__format;
      }
      getDetail() {
        return this.getLatest().__detail;
      }
      getMode() {
        let e = this.getLatest();
        return ne[e.__mode];
      }
      getStyle() {
        return this.getLatest().__style;
      }
      isToken() {
        return this.getLatest().__mode === 1;
      }
      isComposing() {
        return this.__key === Ce();
      }
      isSegmented() {
        return this.getLatest().__mode === 2;
      }
      isDirectionless() {
        return (this.getLatest().__detail & 1) != 0;
      }
      isUnmergeable() {
        return (this.getLatest().__detail & 2) != 0;
      }
      hasFormat(e) {
        e = q[e];
        return (this.getFormat() & e) != 0;
      }
      isSimpleText() {
        return this.__type === "text" && this.__mode === 0;
      }
      getTextContent() {
        return this.getLatest().__text;
      }
      getFormatFlags(e, t) {
        return me(this.getLatest().__format, e, t);
      }
      createDOM(e) {
        var t = this.__format;
        var n = hn(0, t);
        let r = pn(0, t);
        let i = document.createElement(n === null ? r : n);
        let o = i;
        if (n !== null) {
          o = document.createElement(r);
          i.appendChild(o);
        }
        n = o;
        mn(this.__text, n, this);
        if ((e = e.theme.text) !== undefined) {
          _n(r, 0, t, n, e);
        }
        if ((t = this.__style) !== "") {
          i.style.cssText = t;
        }
        return i;
      }
      updateDOM(e, t, n) {
        let r = this.__text;
        var i = e.__format;
        var o = this.__format;
        var s = hn(0, i);
        let l = hn(0, o);
        var a = pn(0, i);
        let u = pn(0, o);
        return (s === null ? a : s) !== (l === null ? u : l) || (s === l && a !== u ? ((i = t.firstChild) == null && L(48), mn(r, e = s = document.createElement(u), this), (n = n.theme.text) !== undefined && _n(u, 0, o, e, n), t.replaceChild(s, i), false) : (a = t, l !== null && s !== null && (a = t.firstChild) == null && L(49), mn(r, a, this), (n = n.theme.text) !== undefined && i !== o && _n(u, i, o, a, n), o = this.__style, e.__style !== o && (t.style.cssText = o), false));
      }
      static importDOM() {
        return {
          "#text": () => ({
            conversion: Cn,
            priority: 0
          }),
          b: () => ({
            conversion: Tn,
            priority: 0
          }),
          code: () => ({
            conversion: An,
            priority: 0
          }),
          em: () => ({
            conversion: An,
            priority: 0
          }),
          i: () => ({
            conversion: An,
            priority: 0
          }),
          s: () => ({
            conversion: An,
            priority: 0
          }),
          span: () => ({
            conversion: vn,
            priority: 0
          }),
          strong: () => ({
            conversion: An,
            priority: 0
          }),
          sub: () => ({
            conversion: An,
            priority: 0
          }),
          sup: () => ({
            conversion: An,
            priority: 0
          }),
          u: () => ({
            conversion: An,
            priority: 0
          })
        };
      }
      static importJSON(e) {
        let t = On(e.text);
        t.setFormat(e.format);
        t.setDetail(e.detail);
        t.setMode(e.mode);
        t.setStyle(e.style);
        return t;
      }
      exportDOM(e) {
        ({
          element: e
        } = super.exportDOM(e));
        if (e !== null) {
          if (this.hasFormat("bold")) {
            e = yn(e, "b");
          }
          if (this.hasFormat("italic")) {
            e = yn(e, "i");
          }
          if (this.hasFormat("strikethrough")) {
            e = yn(e, "s");
          }
          if (this.hasFormat("underline")) {
            e = yn(e, "u");
          }
        }
        return {
          element: e
        };
      }
      exportJSON() {
        return {
          detail: this.getDetail(),
          format: this.getFormat(),
          mode: this.getMode(),
          style: this.getStyle(),
          text: this.getTextContent(),
          type: "text",
          version: 1
        };
      }
      selectionTransform() {}
      setFormat(e) {
        let t = this.getWritable();
        t.__format = typeof e == "string" ? q[e] : e;
        return t;
      }
      setDetail(e) {
        let t = this.getWritable();
        t.__detail = typeof e == "string" ? X[e] : e;
        return t;
      }
      setStyle(e) {
        let t = this.getWritable();
        t.__style = e;
        return t;
      }
      toggleFormat(e) {
        e = q[e];
        return this.setFormat(this.getFormat() ^ e);
      }
      toggleDirectionless() {
        let e = this.getWritable();
        e.__detail ^= 1;
        return e;
      }
      toggleUnmergeable() {
        let e = this.getWritable();
        e.__detail ^= 2;
        return e;
      }
      setMode(e) {
        e = te[e];
        if (this.__mode === e) {
          return this;
        }
        let t = this.getWritable();
        t.__mode = e;
        return t;
      }
      setTextContent(e) {
        if (this.__text === e) {
          return this;
        }
        let t = this.getWritable();
        t.__text = e;
        return t;
      }
      select(e, t) {
        hr();
        let n = er();
        var r = this.getTextContent();
        let i = this.__key;
        if (typeof r == "string") {
          r = r.length;
          if (e === undefined) {
            e = r;
          }
          if (t === undefined) {
            t = r;
          }
        } else {
          t = e = 0;
        }
        if (Fn(n)) {
          if (!((r = Ce()) !== n.anchor.key && r !== n.focus.key)) {
            Ee(i);
          }
          n.setTextNodeRange(this, e, this, t);
          return n;
        } else {
          return qn(i, e, i, t, "text", "text");
        }
      }
      spliceText(e, t, n, r) {
        let i = this.getWritable();
        let o = i.__text;
        let s = n.length;
        let l = e;
        if (l < 0) {
          l = s + l;
          if (l < 0) {
            l = 0;
          }
        }
        let a = er();
        if (r && Fn(a)) {
          e += s;
          a.setTextNodeRange(i, e, i, e);
        }
        t = o.slice(0, l) + n + o.slice(l + t);
        i.__text = t;
        return i;
      }
      canInsertTextBefore() {
        return true;
      }
      canInsertTextAfter() {
        return true;
      }
      splitText(...e) {
        hr();
        var t = this.getLatest();
        var n = t.getTextContent();
        var r = t.__key;
        var i = Ce();
        var o = new Set(e);
        e = [];
        for (var s = n.length, l = "", a = 0; a < s; a++) {
          if (l !== "" && o.has(a)) {
            e.push(l);
            l = "";
          }
          l += n[a];
        }
        if (l !== "") {
          e.push(l);
        }
        if ((o = e.length) === 0) {
          return [];
        }
        if (e[0] === n) {
          return [t];
        }
        var u = e[0];
        n = t.getParentOrThrow();
        a = t.getFormat();
        let c = t.getStyle();
        let d = t.__detail;
        s = false;
        if (t.isSegmented()) {
          (l = On(u)).__format = a;
          l.__style = c;
          l.__detail = d;
          s = true;
        } else {
          (l = t.getWritable()).__text = u;
        }
        t = er();
        l = [l];
        u = u.length;
        for (let n = 1; n < o; n++) {
          var g = e[n];
          var f = g.length;
          (g = On(g).getWritable()).__format = a;
          g.__style = c;
          g.__detail = d;
          let o = g.__key;
          f = u + f;
          if (Fn(t)) {
            let e = t.anchor;
            let n = t.focus;
            if (e.key === r && e.type === "text" && e.offset > u && e.offset <= f) {
              e.key = o;
              e.offset -= u;
              t.dirty = true;
            }
            if (n.key === r && n.type === "text" && n.offset > u && n.offset <= f) {
              n.key = o;
              n.offset -= u;
              t.dirty = true;
            }
          }
          if (i === r) {
            Ee(o);
          }
          u = f;
          l.push(g);
        }
        r = this.getPreviousSibling();
        i = this.getNextSibling();
        if (r !== null) {
          Te(r);
        }
        if (i !== null) {
          Te(i);
        }
        r = n.getWritable();
        i = this.getIndexWithinParent();
        if (s) {
          r.splice(i, 0, l);
          this.remove();
        } else {
          r.splice(i, 1, l);
        }
        if (Fn(t)) {
          nr(t, n, i, o - 1);
        }
        return l;
      }
      mergeWithSibling(e) {
        var t = e === this.getPreviousSibling();
        if (!(t || e === this.getNextSibling())) {
          L(50);
        }
        var n = this.__key;
        let r = e.__key;
        let i = this.__text;
        let o = i.length;
        if (Ce() === r) {
          Ee(n);
        }
        let s = er();
        if (Fn(s)) {
          let i = s.anchor;
          let l = s.focus;
          if (i !== null && i.key === r) {
            or(i, t, n, e, o);
            s.dirty = true;
          }
          if (l !== null && l.key === r) {
            or(l, t, n, e, o);
            s.dirty = true;
          }
        }
        n = e.__text;
        this.setTextContent(t ? n + i : i + n);
        t = this.getWritable();
        e.remove();
        return t;
      }
      isTextEntity() {
        return false;
      }
    }
    function vn(e) {
      let t = e.style.fontWeight === "700";
      let n = e.style.textDecoration === "line-through";
      let r = e.style.fontStyle === "italic";
      let i = e.style.textDecoration === "underline";
      let o = e.style.verticalAlign;
      return {
        forChild: e => wn(e) ? (t && e.toggleFormat("bold"), n && e.toggleFormat("strikethrough"), r && e.toggleFormat("italic"), i && e.toggleFormat("underline"), o === "sub" && e.toggleFormat("subscript"), o === "super" && e.toggleFormat("superscript"), e) : e,
        node: null
      };
    }
    function Tn(e) {
      let t = e.style.fontWeight === "normal";
      return {
        forChild: e => {
          if (wn(e) && !t) {
            e.toggleFormat("bold");
          }
          return e;
        },
        node: null
      };
    }
    let En = new WeakMap();
    function Cn(e) {
      if (e.parentElement === null) {
        throw Error("Expected parentElement of Text not to be null");
      }
      for (var t, n = e.textContent || "", r = e.parentNode, i = [e]; r !== null && (t = En.get(r)) === undefined && !(r.nodeName === "PRE" || r.nodeType === 1 && r.style.whiteSpace.startsWith("pre"));) {
        i.push(r);
        r = r.parentNode;
      }
      t = t === undefined ? r : t;
      r = 0;
      for (; r < i.length; r++) {
        En.set(i[r], t);
      }
      if (t !== null) {
        e = [];
        i = (n = n.split(/(\r?\n|\t)/)).length;
        t = 0;
        for (; t < i; t++) {
          if ((r = n[t]) === "\n" || r === "\r\n") {
            e.push(gn());
          } else if (r === "\t") {
            e.push(Rn());
          } else if (r !== "") {
            e.push(On(r));
          }
        }
        return {
          node: e
        };
      }
      if ((n = n.replace(/\r?\n|\t/gm, " ").replace("\r", "").replace(/\s+/g, " ")) === "") {
        return {
          node: null
        };
      }
      if (n[0] === " ") {
        i = e;
        t = true;
        for (; i !== null && (i = bn(i, false)) !== null;) {
          if ((r = i.textContent || "").length > 0) {
            if (r.match(/(?:\s|\r?\n|\t)$/)) {
              n = n.slice(1);
            }
            t = false;
            break;
          }
        }
        if (t) {
          n = n.slice(1);
        }
      }
      if (n[n.length - 1] === " ") {
        for (i = true; e !== null && (e = bn(e, true)) !== null;) {
          if ((e.textContent || "").replace(/^[\s|\r?\n|\t]+/, "").length > 0) {
            i = false;
            break;
          }
        }
        if (i) {
          n = n.slice(0, n.length - 1);
        }
      }
      if (n === "") {
        return {
          node: null
        };
      } else {
        return {
          node: On(n)
        };
      }
    }
    let xn = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");
    function bn(e, t) {
      for (;;) {
        for (var n = undefined; (n = t ? e.nextSibling : e.previousSibling) === null;) {
          if ((e = e.parentElement) === null) {
            return null;
          }
        }
        if ((e = n).nodeType === 1 && ((n = e.style.display) === "" && e.nodeName.match(xn) === null || n !== "" && !n.startsWith("inline"))) {
          return null;
        }
        for (; (n = t ? e.firstChild : e.lastChild) !== null;) {
          e = n;
        }
        if (e.nodeType === 3) {
          return e;
        }
        if (e.nodeName === "BR") {
          return null;
        }
      }
    }
    let Sn = {
      code: "code",
      em: "italic",
      i: "italic",
      s: "strikethrough",
      strong: "bold",
      sub: "subscript",
      sup: "superscript",
      u: "underline"
    };
    function An(e) {
      let t = Sn[e.nodeName.toLowerCase()];
      if (t === undefined) {
        return {
          node: null
        };
      } else {
        return {
          forChild: e => {
            if (wn(e) && !e.hasFormat(t)) {
              e.toggleFormat(t);
            }
            return e;
          },
          node: null
        };
      }
    }
    function On(e = "") {
      return Ze(new Nn(e));
    }
    function wn(e) {
      return e instanceof Nn;
    }
    class kn extends Nn {
      static getType() {
        return "tab";
      }
      static clone(e) {
        let t = new kn(e.__key);
        t.__text = e.__text;
        t.__format = e.__format;
        t.__style = e.__style;
        return t;
      }
      constructor(e) {
        super("\t", e);
        this.__detail = 2;
      }
      static importDOM() {
        return null;
      }
      static importJSON(e) {
        let t = Rn();
        t.setFormat(e.format);
        t.setStyle(e.style);
        return t;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          type: "tab",
          version: 1
        };
      }
      setTextContent() {
        throw Error("TabNode does not support setTextContent");
      }
      setDetail() {
        throw Error("TabNode does not support setDetail");
      }
      setMode() {
        throw Error("TabNode does not support setMode");
      }
      canInsertTextBefore() {
        return false;
      }
      canInsertTextAfter() {
        return false;
      }
    }
    function Rn() {
      return Ze(new kn());
    }
    class Dn {
      constructor(e, t, n) {
        this._selection = null;
        this.key = e;
        this.offset = t;
        this.type = n;
      }
      is(e) {
        return this.key === e.key && this.offset === e.offset && this.type === e.type;
      }
      isBefore(e) {
        let t = this.getNode();
        let n = e.getNode();
        let r = this.offset;
        e = e.offset;
        if (wr(t)) {
          var i = t.getDescendantByIndex(r);
          t = i != null ? i : t;
        }
        if (wr(n)) {
          i = n.getDescendantByIndex(e);
          n = i != null ? i : n;
        }
        if (t === n) {
          return r < e;
        } else {
          return t.isBefore(n);
        }
      }
      getNode() {
        let e = xe(this.key);
        if (e === null) {
          L(20);
        }
        return e;
      }
      set(e, t, n) {
        let r = this._selection;
        let i = this.key;
        this.key = e;
        this.offset = t;
        this.type = n;
        if (!fr()) {
          if (Ce() === i) {
            Ee(e);
          }
          if (r !== null) {
            r._cachedNodes = null;
            r.dirty = true;
          }
        }
      }
    }
    function Mn(e, t) {
      let n = t.__key;
      let r = e.offset;
      let i = "element";
      if (wn(t)) {
        i = "text";
        if (r > (t = t.getTextContentSize())) {
          r = t;
        }
      } else if (!wr(t)) {
        var o = t.getNextSibling();
        if (wn(o)) {
          n = o.__key;
          r = 0;
          i = "text";
        } else if (o = t.getParent()) {
          n = o.__key;
          r = t.getIndexWithinParent() + 1;
        }
      }
      e.set(n, r, i);
    }
    function $n(e, t) {
      if (wr(t)) {
        let n = t.getLastDescendant();
        if (wr(n) || wn(n)) {
          Mn(e, n);
        } else {
          Mn(e, t);
        }
      } else {
        Mn(e, t);
      }
    }
    function In(e, t, n, r) {
      let i = e.getNode();
      let o = i.getChildAtIndex(e.offset);
      let s = On();
      let l = Dr(i) ? Fr().append(s) : s;
      s.setFormat(n);
      s.setStyle(r);
      if (o === null) {
        i.append(l);
      } else {
        o.insertBefore(l);
      }
      if (e.is(t)) {
        t.set(s.__key, 0, "text");
      }
      e.set(s.__key, 0, "text");
    }
    function Pn(e, t, n, r) {
      e.key = t;
      e.offset = n;
      e.type = r;
    }
    class Ln {
      constructor(e) {
        this.dirty = false;
        this._nodes = e;
        this._cachedNodes = null;
      }
      is(e) {
        if (!Kn(e)) {
          return false;
        }
        let t = this._nodes;
        let n = e._nodes;
        return t.size === n.size && Array.from(t).every(e => n.has(e));
      }
      add(e) {
        this.dirty = true;
        this._nodes.add(e);
        this._cachedNodes = null;
      }
      delete(e) {
        this.dirty = true;
        this._nodes.delete(e);
        this._cachedNodes = null;
      }
      clear() {
        this.dirty = true;
        this._nodes.clear();
        this._cachedNodes = null;
      }
      has(e) {
        return this._nodes.has(e);
      }
      clone() {
        return new Ln(new Set(this._nodes));
      }
      extract() {
        return this.getNodes();
      }
      insertRawText() {}
      insertText() {}
      insertNodes(e, t) {
        let n = this.getNodes();
        let r = n.length;
        var i = n[r - 1];
        if (wn(i)) {
          i = i.select();
        } else {
          let e = i.getIndexWithinParent() + 1;
          i = i.getParentOrThrow().select(e, e);
        }
        i.insertNodes(e, t);
        e = 0;
        for (; e < r; e++) {
          n[e].remove();
        }
        return true;
      }
      getNodes() {
        var e = this._cachedNodes;
        if (e !== null) {
          return e;
        }
        var t = this._nodes;
        e = [];
        for (let n of t) {
          if ((t = xe(n)) !== null) {
            e.push(t);
          }
        }
        if (!fr()) {
          this._cachedNodes = e;
        }
        return e;
      }
      getTextContent() {
        let e = this.getNodes();
        let t = "";
        for (let n = 0; n < e.length; n++) {
          t += e[n].getTextContent();
        }
        return t;
      }
    }
    function Fn(e) {
      return e instanceof Wn;
    }
    class Bn {
      constructor(e, t, n) {
        this.gridKey = e;
        this.anchor = t;
        this.focus = n;
        this.dirty = false;
        this._cachedNodes = null;
        t._selection = this;
        n._selection = this;
      }
      is(e) {
        return !!zn(e) && this.gridKey === e.gridKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
      }
      set(e, t, n) {
        this.dirty = true;
        this.gridKey = e;
        this.anchor.key = t;
        this.focus.key = n;
        this._cachedNodes = null;
      }
      clone() {
        return new Bn(this.gridKey, this.anchor, this.focus);
      }
      isCollapsed() {
        return false;
      }
      isBackward() {
        return this.focus.isBefore(this.anchor);
      }
      getCharacterOffsets() {
        return Yn(this);
      }
      extract() {
        return this.getNodes();
      }
      insertRawText() {}
      insertText() {}
      insertNodes(e, t) {
        let n = this.focus.getNode();
        return at(n.select(0, n.getChildrenSize())).insertNodes(e, t);
      }
      getShape() {
        var e = xe(this.anchor.key);
        if (e === null) {
          L(21);
        }
        var t = e.getIndexWithinParent();
        e = e.getParentOrThrow().getIndexWithinParent();
        var n = xe(this.focus.key);
        if (n === null) {
          L(22);
        }
        var r = n.getIndexWithinParent();
        let i = n.getParentOrThrow().getIndexWithinParent();
        n = Math.min(t, r);
        t = Math.max(t, r);
        r = Math.min(e, i);
        e = Math.max(e, i);
        return {
          fromX: Math.min(n, t),
          fromY: Math.min(r, e),
          toX: Math.max(n, t),
          toY: Math.max(r, e)
        };
      }
      getNodes() {
        function e(e) {
          let {
            cell: t,
            startColumn: n,
            startRow: r
          } = e;
          l = Math.min(l, n);
          a = Math.min(a, r);
          u = Math.max(u, n + t.__colSpan - 1);
          c = Math.max(c, r + t.__rowSpan - 1);
        }
        var t = this._cachedNodes;
        if (t !== null) {
          return t;
        }
        var n = this.anchor.getNode();
        t = this.focus.getNode();
        n = nt(n, Kr);
        var r = nt(t, Kr);
        if (!Kr(n)) {
          L(103);
        }
        if (!Kr(r)) {
          L(104);
        }
        if (!Hr(t = n.getParent())) {
          L(105);
        }
        if (!Yr(t = t.getParent())) {
          L(106);
        }
        let [i, o, s] = sr(t, n, r);
        let l = Math.min(o.startColumn, s.startColumn);
        let a = Math.min(o.startRow, s.startRow);
        let u = Math.max(o.startColumn + o.cell.__colSpan - 1, s.startColumn + s.cell.__colSpan - 1);
        let c = Math.max(o.startRow + o.cell.__rowSpan - 1, s.startRow + s.cell.__rowSpan - 1);
        n = l;
        r = a;
        for (var d = l, g = a; l < n || a < r || u > d || c > g;) {
          if (l < n) {
            var f = g - r;
            --n;
            for (var h = 0; h <= f; h++) {
              e(i[r + h][n]);
            }
          }
          if (a < r) {
            f = d - n;
            --r;
            h = 0;
            f = d - n;
            --r;
            h = 0;
            for (; h <= f; h++) {
              e(i[r][n + h]);
            }
          }
          if (u > d) {
            f = g - r;
            d += 1;
            h = 0;
            f = g - r;
            d += 1;
            h = 0;
            for (; h <= f; h++) {
              e(i[r + h][d]);
            }
          }
          if (c > g) {
            f = d - n;
            g += 1;
            h = 0;
            f = d - n;
            g += 1;
            h = 0;
            for (; h <= f; h++) {
              e(i[g][n + h]);
            }
          }
        }
        t = [t];
        n = null;
        r = a;
        for (; r <= c; r++) {
          for (d = l; d <= u; d++) {
            ({
              cell: g
            } = i[r][d]);
            if (!Hr(f = g.getParent())) {
              L(107);
            }
            if (f !== n) {
              t.push(f);
            }
            t.push(g, ...rt(g));
            n = f;
          }
        }
        if (!fr()) {
          this._cachedNodes = t;
        }
        return t;
      }
      getTextContent() {
        let e = this.getNodes();
        let t = "";
        for (let n = 0; n < e.length; n++) {
          t += e[n].getTextContent();
        }
        return t;
      }
    }
    function zn(e) {
      return e instanceof Bn;
    }
    class Wn {
      constructor(e, t, n, r) {
        this.anchor = e;
        this.focus = t;
        this.dirty = false;
        this.format = n;
        this.style = r;
        this._cachedNodes = null;
        e._selection = this;
        t._selection = this;
      }
      is(e) {
        return !!Fn(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
      }
      isBackward() {
        return this.focus.isBefore(this.anchor);
      }
      isCollapsed() {
        return this.anchor.is(this.focus);
      }
      getNodes() {
        var e = this._cachedNodes;
        if (e !== null) {
          return e;
        }
        e = this.anchor;
        var t = this.focus;
        var n = e.isBefore(t);
        var r = n ? e : t;
        n = n ? t : e;
        e = r.getNode();
        t = n.getNode();
        let i = r.offset;
        r = n.offset;
        if (wr(e)) {
          n = e.getDescendantByIndex(i);
          e = n != null ? n : e;
        }
        if (wr(t)) {
          if ((n = t.getDescendantByIndex(r)) !== null && n !== e && t.getChildAtIndex(r) === n) {
            n = n.getPreviousSibling();
          }
          t = n != null ? n : t;
        }
        e = e.is(t) ? wr(e) && e.getChildrenSize() > 0 ? [] : [e] : e.getNodesBetween(t);
        if (!fr()) {
          this._cachedNodes = e;
        }
        return e;
      }
      setTextNodeRange(e, t, n, r) {
        Pn(this.anchor, e.__key, t, "text");
        Pn(this.focus, n.__key, r, "text");
        this._cachedNodes = null;
        this.dirty = true;
      }
      getTextContent() {
        let e = this.getNodes();
        if (e.length === 0) {
          return "";
        }
        let t = e[0];
        let n = e[e.length - 1];
        let r = this.anchor;
        let i = this.focus;
        let o = r.isBefore(i);
        let [s, l] = Yn(this);
        let a = "";
        let u = true;
        for (let c = 0; c < e.length; c++) {
          let d = e[c];
          if (wr(d) && !d.isInline()) {
            if (!u) {
              a += "\n";
            }
            u = !d.isEmpty();
          } else {
            u = false;
            if (wn(d)) {
              let e = d.getTextContent();
              if (d === t) {
                if (d === n) {
                  if (!(r.type === "element" && i.type === "element" && i.offset !== r.offset)) {
                    e = s < l ? e.slice(s, l) : e.slice(l, s);
                  }
                } else {
                  e = o ? e.slice(s) : e.slice(l);
                }
              } else if (d === n) {
                e = o ? e.slice(0, l) : e.slice(0, s);
              }
              a += e;
            } else if (!(!Ar(d) && !fn(d) || d === n && this.isCollapsed())) {
              a += d.getTextContent();
            }
          }
        }
        return a;
      }
      applyDOMRange(e) {
        let t = _r();
        let n = t.getEditorState()._selection;
        if ((e = Jn(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n)) !== null) {
          var [r, i] = e;
          Pn(this.anchor, r.key, r.offset, r.type);
          Pn(this.focus, i.key, i.offset, i.type);
          this._cachedNodes = null;
        }
      }
      clone() {
        let e = this.anchor;
        let t = this.focus;
        return new Wn(new Dn(e.key, e.offset, e.type), new Dn(t.key, t.offset, t.type), this.format, this.style);
      }
      toggleFormat(e) {
        this.format = me(this.format, e, null);
        this.dirty = true;
      }
      setStyle(e) {
        this.style = e;
        this.dirty = true;
      }
      hasFormat(e) {
        return (this.format & q[e]) != 0;
      }
      insertRawText(e) {
        let t = [];
        let n = (e = e.split(/(\r?\n|\t)/)).length;
        for (let r = 0; r < n; r++) {
          let n = e[r];
          if (n === "\n" || n === "\r\n") {
            t.push(gn());
          } else if (n === "\t") {
            t.push(Rn());
          } else {
            t.push(On(n));
          }
        }
        this.insertNodes(t);
      }
      insertText(e) {
        var t = this.anchor;
        var n = this.focus;
        var r = this.isCollapsed() || t.isBefore(n);
        var i = this.format;
        var o = this.style;
        if (r && t.type === "element") {
          In(t, n, i, o);
        } else if (!(r || n.type !== "element")) {
          In(n, t, i, o);
        }
        var s = this.getNodes();
        var l = s.length;
        var a = r ? n : t;
        n = (r ? t : n).offset;
        var u = a.offset;
        if (!wn(t = s[0])) {
          L(26);
        }
        r = t.getTextContent().length;
        var c = t.getParentOrThrow();
        var d = s[l - 1];
        if (this.isCollapsed() && n === r && (t.isSegmented() || t.isToken() || !t.canInsertTextAfter() || !c.canInsertTextAfter() && t.getNextSibling() === null)) {
          var g = t.getNextSibling();
          if (!(wn(g) && g.canInsertTextBefore() && !pe(g))) {
            (g = On()).setFormat(i);
            if (c.canInsertTextAfter()) {
              t.insertAfter(g);
            } else {
              c.insertAfter(g);
            }
          }
          g.select(0, 0);
          t = g;
          if (e !== "") {
            return void this.insertText(e);
          }
        } else if (this.isCollapsed() && n === 0 && (t.isSegmented() || t.isToken() || !t.canInsertTextBefore() || !c.canInsertTextBefore() && t.getPreviousSibling() === null)) {
          if (!(wn(g = t.getPreviousSibling()) && !pe(g))) {
            (g = On()).setFormat(i);
            if (c.canInsertTextBefore()) {
              t.insertBefore(g);
            } else {
              c.insertBefore(g);
            }
          }
          g.select();
          t = g;
          if (e !== "") {
            return void this.insertText(e);
          }
        } else if (t.isSegmented() && n !== r) {
          (c = On(t.getTextContent())).setFormat(i);
          t.replace(c);
          t = c;
        } else if (!(this.isCollapsed() || e === "" || (g = d.getParent(), c.canInsertTextBefore() && c.canInsertTextAfter() && (!wr(g) || g.canInsertTextBefore() && g.canInsertTextAfter())))) {
          this.insertText("");
          Vn(this.anchor, this.focus, null);
          return void this.insertText(e);
        }
        if (l === 1) {
          if (t.isToken()) {
            (e = On(e)).select();
            t.replace(e);
          } else {
            s = t.getFormat();
            l = t.getStyle();
            if (n === u && (s !== i || l !== o)) {
              if (t.getTextContent() !== "") {
                (s = On(e)).setFormat(i);
                s.setStyle(o);
                s.select();
                if (n === 0) {
                  t.insertBefore(s, false);
                } else {
                  [l] = t.splitText(n);
                  l.insertAfter(s, false);
                }
                return void (s.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length));
              }
              t.setFormat(i);
              t.setStyle(o);
            }
            if ((t = t.spliceText(n, u - n, e, true)).getTextContent() === "") {
              t.remove();
            } else if (this.anchor.type === "text") {
              if (t.isComposing()) {
                this.anchor.offset -= e.length;
              } else {
                this.format = s;
                this.style = l;
              }
            }
          }
        } else {
          i = new Set([...t.getParentKeys(), ...d.getParentKeys()]);
          g = wr(t) ? t : t.getParentOrThrow();
          o = wr(d) ? d : d.getParentOrThrow();
          c = d;
          if (!g.is(o) && o.isInline()) {
            do {
              c = o;
              o = o.getParentOrThrow();
            } while (o.isInline());
          }
          if (a.type === "text" && (u !== 0 || d.getTextContent() === "") || a.type === "element" && d.getIndexWithinParent() < u) {
            if (wn(d) && !d.isToken() && u !== d.getTextContentSize()) {
              if (d.isSegmented()) {
                a = On(d.getTextContent());
                d.replace(a);
                d = a;
              }
              d = d.spliceText(0, u, "");
              i.add(d.__key);
            } else if ((a = d.getParentOrThrow()).canBeEmpty() || a.getChildrenSize() !== 1) {
              d.remove();
            } else {
              a.remove();
            }
          } else {
            i.add(d.__key);
          }
          a = o.getChildren();
          u = new Set(s);
          d = g.is(o);
          g = g.isInline() && t.getNextSibling() === null ? g : t;
          for (let e = a.length - 1; e >= 0; e--) {
            let n = a[e];
            if (n.is(t) || wr(n) && n.isParentOf(t)) {
              break;
            }
            if (n.isAttached()) {
              if (!u.has(n) || n.is(c)) {
                if (!d) {
                  g.insertAfter(n, false);
                }
              } else {
                n.remove();
              }
            }
          }
          if (!d) {
            a = o;
            u = null;
            a = o;
            u = null;
            for (; a !== null;) {
              if ((d = (o = a.getChildren()).length) === 0 || o[d - 1].is(u)) {
                i.delete(a.__key);
                u = a;
              }
              a = a.getParent();
            }
          }
          if (t.isToken()) {
            if (n === r) {
              t.select();
            } else {
              (e = On(e)).select();
              t.replace(e);
            }
          } else if ((t = t.spliceText(n, r - n, e, true)).getTextContent() === "") {
            t.remove();
          } else if (t.isComposing() && this.anchor.type === "text") {
            this.anchor.offset -= e.length;
          }
          e = 1;
          for (; e < l; e++) {
            t = s[e];
            if (!i.has(t.__key)) {
              t.remove();
            }
          }
        }
      }
      removeText() {
        this.insertText("");
      }
      formatText(e) {
        if (this.isCollapsed()) {
          this.toggleFormat(e);
          Ee(null);
        } else {
          var t = this.getNodes();
          var n = [];
          for (var r of t) {
            if (wn(r)) {
              n.push(r);
            }
          }
          var i = n.length;
          if (i === 0) {
            this.toggleFormat(e);
            Ee(null);
          } else {
            r = this.anchor;
            var o = this.focus;
            var s = this.isBackward();
            t = s ? o : r;
            r = s ? r : o;
            var l = 0;
            var a = n[0];
            o = t.type === "element" ? 0 : t.offset;
            if (t.type === "text" && o === a.getTextContentSize()) {
              l = 1;
              a = n[1];
              o = 0;
            }
            if (a != null) {
              s = a.getFormatFlags(e, null);
              var u = i - 1;
              var c = n[u];
              i = r.type === "text" ? r.offset : c.getTextContentSize();
              if (a.is(c)) {
                if (o !== i) {
                  if (o === 0 && i === a.getTextContentSize()) {
                    a.setFormat(s);
                  } else {
                    e = a.splitText(o, i);
                    (e = o === 0 ? e[0] : e[1]).setFormat(s);
                    if (t.type === "text") {
                      t.set(e.__key, 0, "text");
                    }
                    if (r.type === "text") {
                      r.set(e.__key, i - o, "text");
                    }
                  }
                  this.format = s;
                }
              } else {
                if (o !== 0) {
                  [, a] = a.splitText(o);
                  o = 0;
                }
                a.setFormat(s);
                var d = c.getFormatFlags(e, s);
                if (i > 0) {
                  if (i !== c.getTextContentSize()) {
                    [c] = c.splitText(i);
                  }
                  c.setFormat(d);
                }
                l += 1;
                for (; l < u; l++) {
                  let t = n[l];
                  if (!t.isToken()) {
                    let n = t.getFormatFlags(e, d);
                    t.setFormat(n);
                  }
                }
                if (t.type === "text") {
                  t.set(a.__key, o, "text");
                }
                if (r.type === "text") {
                  r.set(c.__key, i, "text");
                }
                this.format = s | d;
              }
            }
          }
        }
      }
      insertNodes(e, t) {
        if (!this.isCollapsed()) {
          var n = this.isBackward() ? this.anchor : this.focus;
          var r = n.getNode().getNextSibling();
          r = r ? r.getKey() : null;
          n = (n = n.getNode().getPreviousSibling()) ? n.getKey() : null;
          this.removeText();
          if (this.isCollapsed() && this.focus.type === "element") {
            if (this.focus.key === r && this.focus.offset === 0) {
              var i = On();
              this.focus.getNode().insertBefore(i);
            } else if (this.focus.key === n && this.focus.offset === this.focus.getNode().getChildrenSize()) {
              i = On();
              this.focus.getNode().insertAfter(i);
            }
            if (i) {
              this.focus.set(i.__key, 0, "text");
              this.anchor.set(i.__key, 0, "text");
            }
          }
        }
        n = (i = this.anchor).offset;
        var o = i.getNode();
        r = o;
        if (i.type === "element") {
          r = (r = (i = i.getNode()).getChildAtIndex(n - 1)) === null ? i : r;
        }
        i = [];
        var s = o.getNextSiblings();
        var l = Ve(o) ? null : o.getTopLevelElementOrThrow();
        if (wn(o)) {
          r = o.getTextContent().length;
          if (n === 0 && r !== 0) {
            r = (r = o.getPreviousSibling()) !== null ? r : o.getParentOrThrow();
            i.push(o);
          } else if (n === r) {
            r = o;
          } else {
            if (o.isToken()) {
              return false;
            }
            [r, o] = o.splitText(n);
            i.push(o);
          }
        }
        o = r;
        i.push(...s);
        s = e[0];
        var a = false;
        var u = null;
        for (let t = 0; t < e.length; t++) {
          var c = e[t];
          if (Ve(r) || Ar(r) || !wr(c) || c.isInline()) {
            if (a && !wr(c) && !Ar(c) && Ve(r.getParent())) {
              L(28);
            }
          } else {
            if (c.is(s)) {
              if (wr(r) && r.isEmpty() && r.canReplaceWith(c)) {
                r.replace(c);
                r = c;
                a = true;
                continue;
              }
              if (ye(a = c.getFirstDescendant())) {
                for (var d = a.getParentOrThrow(); d.isInline();) {
                  d = d.getParentOrThrow();
                }
                a = (u = d.getChildren()).length;
                if (wr(r)) {
                  var g = r.getFirstChild();
                  for (let e = 0; e < a; e++) {
                    let t = u[e];
                    if (g === null) {
                      r.append(t);
                    } else {
                      g.insertAfter(t);
                    }
                    g = t;
                  }
                } else {
                  for (g = a - 1; g >= 0; g--) {
                    r.insertAfter(u[g]);
                  }
                  r = r.getParentOrThrow();
                }
                u = u[a - 1];
                d.remove();
                a = true;
                if (d.is(c)) {
                  continue;
                }
              }
            }
            if (wn(r)) {
              if (l === null) {
                L(27);
              }
              r = l;
            }
          }
          a = false;
          if (wr(r) && !r.isInline()) {
            u = c;
            if (Ar(c) && !c.isInline()) {
              r = r.insertAfter(c, false);
            } else if (wr(c)) {
              if (!(!c.canBeEmpty() && c.isEmpty())) {
                if (Dr(r)) {
                  if ((d = r.getChildAtIndex(n)) !== null) {
                    d.insertBefore(c);
                  } else {
                    r.append(c);
                  }
                  r = c;
                } else if (c.isInline()) {
                  r.append(c);
                  r = c;
                } else {
                  r = r.insertAfter(c, false);
                }
              }
            } else {
              if ((d = r.getFirstChild()) !== null) {
                d.insertBefore(c);
              } else {
                r.append(c);
              }
              r = c;
            }
          } else if (!wr(c) || wr(c) && c.isInline() || Ar(r) && !r.isInline()) {
            u = c;
            if (Fn(this) && Ar(c) && (wr(r) || wn(r)) && !c.isInline()) {
              if (wn(r)) {
                d = r.getParentOrThrow();
                [r] = r.splitText(n);
                r = r.getIndexWithinParent() + 1;
              } else {
                d = r;
                r = n;
              }
              [, r] = tt(d, r);
              r = r.insertBefore(c);
            } else {
              r = r.insertAfter(c, false);
            }
          } else {
            c = r.getParentOrThrow();
            if (fn(r)) {
              r.remove();
            }
            r = c;
            t--;
          }
        }
        if (t) {
          if (wn(o)) {
            o.select();
          } else if (wn(e = r.getPreviousSibling())) {
            e.select();
          } else {
            e = r.getIndexWithinParent();
            r.getParentOrThrow().select(e, e);
          }
        }
        if (wr(r)) {
          e = wn(u) ? u : wr(u) && u.isInline() ? u.getLastDescendant() : r.getLastDescendant();
          if (!t) {
            if (e === null) {
              r.select();
            } else if (wn(e)) {
              if (e.getTextContent() === "") {
                e.selectPrevious();
              } else {
                e.select();
              }
            } else {
              e.selectNext();
            }
          }
          if (i.length !== 0) {
            t = r;
            e = i.length - 1;
            t = r;
            e = i.length - 1;
            for (; e >= 0; e--) {
              l = (n = i[e]).getParentOrThrow();
              if (!wr(r) || Zn(n) || Ar(n) && (!n.isInline() || n.isIsolated())) {
                if (wr(r) || Zn(n)) {
                  if (wr(n) && !n.canInsertAfter(r)) {
                    if (!wr(o = l.constructor.clone(l))) {
                      L(29);
                    }
                    o.append(n);
                    r.insertAfter(o);
                  } else {
                    r.insertAfter(n);
                  }
                } else {
                  r.insertBefore(n);
                  r = n;
                }
              } else {
                if (t === r) {
                  r.append(n);
                } else {
                  r.insertBefore(n);
                }
                r = n;
              }
              if (l.isEmpty() && !l.canBeEmpty()) {
                l.remove();
              }
            }
          }
        } else if (!t) {
          if (wn(r)) {
            r.select();
          } else {
            t = r.getParentOrThrow();
            e = r.getIndexWithinParent() + 1;
            t.select(e, e);
          }
        }
        return true;
      }
      insertParagraph() {
        if (!this.isCollapsed()) {
          this.removeText();
        }
        var e = this.anchor;
        var t = e.offset;
        var n = [];
        if (e.type === "text") {
          var r = e.getNode();
          var i = r.getNextSiblings().reverse();
          var o = r.getParentOrThrow();
          var s = o.isInline();
          var l = s ? o.getTextContentSize() : r.getTextContentSize();
          if (t === 0) {
            i.push(r);
          } else {
            if (s) {
              n = o.getNextSiblings();
            }
            if (!(t === l || s && t === r.getTextContentSize())) {
              [, r] = r.splitText(t);
              i.push(r);
            }
          }
        } else {
          if (Ve(o = e.getNode())) {
            i = Fr();
            n = o.getChildAtIndex(t);
            i.select();
            return void (n !== null ? n.insertBefore(i, false) : o.append(i));
          }
          i = o.getChildren().slice(t).reverse();
        }
        r = i.length;
        if (t === 0 && r > 0 && o.isInline()) {
          if (wr(i = (n = o.getParentOrThrow()).insertNewAfter(this, false))) {
            n = n.getChildren();
            o = 0;
            n = n.getChildren();
            o = 0;
            for (; o < n.length; o++) {
              i.append(n[o]);
            }
          }
        } else if ((s = o.insertNewAfter(this, false)) === null) {
          this.insertLineBreak();
        } else if (wr(s)) {
          l = o.getFirstChild();
          if (t === 0 && (o.is(e.getNode()) || l && l.is(e.getNode())) && r > 0) {
            o.insertBefore(s);
          } else {
            o = null;
            t = n.length;
            e = s.getParentOrThrow();
            if (t > 0) {
              for (l = 0; l < t; l++) {
                e.append(n[l]);
              }
            }
            if (r !== 0) {
              for (n = 0; n < r; n++) {
                t = i[n];
                if (o === null) {
                  s.append(t);
                } else {
                  o.insertBefore(t);
                }
                o = t;
              }
            }
            if (s.canBeEmpty() || s.getChildrenSize() !== 0) {
              s.selectStart();
            } else {
              s.selectPrevious();
              s.remove();
            }
          }
        }
      }
      insertLineBreak(e) {
        let t = gn();
        var n = this.anchor;
        if (n.type === "element") {
          if (Dr(n = n.getNode())) {
            this.insertParagraph();
          }
        }
        if (e) {
          this.insertNodes([t], true);
        } else if (this.insertNodes([t])) {
          t.selectNext(0, 0);
        }
      }
      getCharacterOffsets() {
        return Yn(this);
      }
      extract() {
        var e = this.getNodes();
        var t = e.length;
        var n = t - 1;
        var r = this.anchor;
        let i = this.focus;
        var o = e[0];
        let s = e[n];
        let [l, a] = Yn(this);
        if (t === 0) {
          return [];
        } else if (t === 1) {
          if (wn(o) && !this.isCollapsed()) {
            e = l > a ? a : l;
            n = o.splitText(e, l > a ? l : a);
            if ((e = e === 0 ? n[0] : n[1]) != null) {
              return [e];
            } else {
              return [];
            }
          } else {
            return [o];
          }
        } else {
          t = r.isBefore(i);
          if (wn(o)) {
            if ((r = t ? l : a) === o.getTextContentSize()) {
              e.shift();
            } else if (r !== 0) {
              [, o] = o.splitText(r);
              e[0] = o;
            }
          }
          if (wn(s)) {
            o = s.getTextContent().length;
            if ((t = t ? a : l) === 0) {
              e.pop();
            } else if (t !== o) {
              [s] = s.splitText(t);
              e[n] = s;
            }
          }
          return e;
        }
      }
      modify(e, t, n) {
        var r = this.focus;
        var i = this.anchor;
        var o = e === "move";
        var s = ze(r, t);
        if (Ar(s) && !s.isIsolated()) {
          if (o && s.isKeyboardSelectable()) {
            (t = Xn()).add(s.__key);
            ke(t);
          } else if (wn(e = t ? s.getPreviousSibling() : s.getNextSibling())) {
            s = e.__key;
            t = t ? e.getTextContent().length : 0;
            r.set(s, t, "text");
            if (o) {
              i.set(s, t, "text");
            }
          } else {
            n = s.getParentOrThrow();
            if (wr(e)) {
              n = e.__key;
              s = t ? e.getChildrenSize() : 0;
            } else {
              s = s.getIndexWithinParent();
              n = n.__key;
              if (!t) {
                s++;
              }
            }
            r.set(n, s, "element");
            if (o) {
              i.set(n, s, "element");
            }
          }
        } else if (r = et((i = _r())._window)) {
          var l = i._blockCursorElement;
          var a = i._rootElement;
          if (!(a === null || l === null || !wr(s) || s.isInline() || s.canBeEmpty())) {
            Qe(l, i, a);
          }
          r.modify(e, t ? "backward" : "forward", n);
          if (r.rangeCount > 0 && (s = r.getRangeAt(0), i = Dr(i = this.anchor.getNode()) ? i : Ge(i), this.applyDOMRange(s), this.dirty = true, !o)) {
            o = this.getNodes();
            e = [];
            n = false;
            l = 0;
            for (; l < o.length; l++) {
              if (je(a = o[l], i)) {
                e.push(a);
              } else {
                n = true;
              }
            }
            if (n && e.length > 0) {
              if (t) {
                if (wr(t = e[0])) {
                  t.selectStart();
                } else {
                  t.getParentOrThrow().selectStart();
                }
              } else if (wr(t = e[e.length - 1])) {
                t.selectEnd();
              } else {
                t.getParentOrThrow().selectEnd();
              }
            }
            if (!(r.anchorNode === s.startContainer && r.anchorOffset === s.startOffset)) {
              t = this.focus;
              r = (o = this.anchor).key;
              s = o.offset;
              i = o.type;
              Pn(o, t.key, t.offset, t.type);
              Pn(t, r, s, i);
              this._cachedNodes = null;
            }
          }
        }
      }
      deleteCharacter(e) {
        let t = this.isCollapsed();
        if (this.isCollapsed()) {
          var r = this.anchor;
          var i = this.focus;
          var o = r.getNode();
          if (!e && (r.type === "element" && wr(o) && r.offset === o.getChildrenSize() || r.type === "text" && r.offset === o.getTextContentSize())) {
            var s = o.getParent();
            if (wr(s = o.getNextSibling() || (s === null ? null : s.getNextSibling())) && s.isShadowRoot()) {
              return;
            }
          }
          if (Ar(s = ze(i, e)) && !s.isIsolated()) {
            return void (s.isKeyboardSelectable() && wr(o) && o.getChildrenSize() === 0 ? (o.remove(), e = Xn(), e.add(s.__key), ke(e)) : (s.remove(), _r().dispatchCommand(n, undefined)));
          }
          if (!e && wr(s) && wr(o) && o.isEmpty()) {
            o.remove();
            return void s.selectStart();
          }
          this.modify("extend", e, "character");
          if (this.isCollapsed()) {
            if (e && r.offset === 0 && (r.type === "element" ? r.getNode() : r.getNode().getParentOrThrow()).collapseAtStart(this)) {
              return;
            }
          } else {
            s = i.type === "text" ? i.getNode() : null;
            o = r.type === "text" ? r.getNode() : null;
            if (s !== null && s.isSegmented()) {
              r = i.offset;
              i = s.getTextContentSize();
              if (s.is(o) || e && r !== i || !e && r !== 0) {
                return void jn(s, e, r);
              }
            } else if (o !== null && o.isSegmented() && (r = r.offset, i = o.getTextContentSize(), o.is(s) || e && r !== 0 || !e && r !== i)) {
              return void jn(o, e, r);
            }
            o = this.anchor;
            s = this.focus;
            if ((r = o.getNode()) === (i = s.getNode()) && o.type === "text" && s.type === "text") {
              var l = o.offset;
              var a = s.offset;
              let t = l < a;
              if ((i = t ? l : a) !== (l = (a = t ? a : l) - 1)) {
                if (!De(r = r.getTextContent().slice(i, a))) {
                  if (e) {
                    s.offset = l;
                  } else {
                    o.offset = l;
                  }
                }
              }
            }
          }
        }
        this.removeText();
        if (e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
          if ((e = this.anchor.getNode()).isEmpty() && Dr(e.getParent()) && e.getIndexWithinParent() === 0) {
            e.collapseAtStart(this);
          }
        }
      }
      deleteLine(e) {
        if (this.isCollapsed()) {
          if (this.anchor.type === "text") {
            this.modify("extend", e, "lineboundary");
          }
          if ((e ? this.focus : this.anchor).offset === 0) {
            this.modify("extend", e, "character");
          }
        }
        this.removeText();
      }
      deleteWord(e) {
        if (this.isCollapsed()) {
          this.modify("extend", e, "word");
        }
        this.removeText();
      }
    }
    function Kn(e) {
      return e instanceof Ln;
    }
    function Un(e) {
      let t = e.offset;
      if (e.type === "text") {
        return t;
      } else if (t === (e = e.getNode()).getChildrenSize()) {
        return e.getTextContent().length;
      } else {
        return 0;
      }
    }
    function Yn(e) {
      let t = e.anchor;
      e = e.focus;
      if (t.type === "element" && e.type === "element" && t.key === e.key && t.offset === e.offset) {
        return [0, 0];
      } else {
        return [Un(t), Un(e)];
      }
    }
    function jn(e, t, n) {
      let r = e.getTextContent().split(/(?=\s)/g);
      let i = r.length;
      let o = 0;
      let s = 0;
      for (let e = 0; e < i; e++) {
        let l = e === i - 1;
        s = o;
        o += r[e].length;
        if (t && o === n || o > n || l) {
          r.splice(e, 1);
          if (l) {
            s = undefined;
          }
          break;
        }
      }
      if ((t = r.join("").trim()) === "") {
        e.remove();
      } else {
        e.setTextContent(t);
        e.select(s, s);
      }
    }
    function Hn(e, t, n, r) {
      var i = t;
      if (e.nodeType === 1) {
        let l = false;
        var o = e.childNodes;
        var s = o.length;
        if (i === s) {
          l = true;
          i = s - 1;
        }
        let a = o[i];
        s = false;
        if (a === r._blockCursorElement) {
          a = o[i + 1];
          s = true;
        } else if (r._blockCursorElement !== null) {
          i--;
        }
        if (wn(r = Re(a))) {
          i = l ? r.getTextContentSize() : 0;
        } else {
          if ((o = Re(e)) === null) {
            return null;
          }
          if (wr(o)) {
            if (t = wr(e = o.getChildAtIndex(i))) {
              t = e.getParent();
              t = n === null || t === null || !t.canBeEmpty() || t !== n.getNode();
            }
            if (t) {
              if ((n = l ? e.getLastDescendant() : e.getFirstDescendant()) === null) {
                o = e;
                i = 0;
              } else {
                o = wr(e = n) ? e : e.getParentOrThrow();
              }
            }
            if (wn(e)) {
              r = e;
              o = null;
              i = l ? e.getTextContentSize() : 0;
            } else if (e !== o && l && !s) {
              i++;
            }
          } else {
            i = o.getIndexWithinParent();
            i = t === 0 && Ar(o) && Re(e) === o ? i : i + 1;
            o = o.getParentOrThrow();
          }
          if (wr(o)) {
            return new Dn(o.__key, i, "element");
          }
        }
      } else {
        r = Re(e);
      }
      if (wn(r)) {
        return new Dn(r.__key, i, "text");
      } else {
        return null;
      }
    }
    function Gn(e, t, n) {
      var r = e.offset;
      var i = e.getNode();
      if (r === 0) {
        r = i.getPreviousSibling();
        i = i.getParent();
        if (t) {
          if ((n || !t) && r === null && wr(i) && i.isInline()) {
            if (wn(t = i.getPreviousSibling())) {
              e.key = t.__key;
              e.offset = t.getTextContent().length;
            }
          }
        } else if (wr(r) && !n && r.isInline()) {
          e.key = r.__key;
          e.offset = r.getChildrenSize();
          e.type = "element";
        } else if (wn(r)) {
          e.key = r.__key;
          e.offset = r.getTextContent().length;
        }
      } else if (r === i.getTextContent().length) {
        r = i.getNextSibling();
        i = i.getParent();
        if (t && wr(r) && r.isInline()) {
          e.key = r.__key;
          e.offset = 0;
          e.type = "element";
        } else if ((n || t) && r === null && wr(i) && i.isInline() && !i.canInsertTextAfter()) {
          if (wn(t = i.getNextSibling())) {
            e.key = t.__key;
            e.offset = 0;
          }
        }
      }
    }
    function Vn(e, t, n) {
      if (e.type === "text" && t.type === "text") {
        var r = e.isBefore(t);
        let i = e.is(t);
        Gn(e, r, i);
        Gn(t, !r, i);
        if (i) {
          t.key = e.key;
          t.offset = e.offset;
          t.type = e.type;
        }
        if ((r = _r()).isComposing() && r._compositionKey !== e.key && Fn(n)) {
          r = n.anchor;
          n = n.focus;
          Pn(e, r.key, r.offset, r.type);
          Pn(t, n.key, n.offset, n.type);
        }
      }
    }
    function Jn(e, t, n, r, i, o) {
      if (e !== null && n !== null && fe(i, e, n)) {
        if ((t = Hn(e, t, Fn(o) ? o.anchor : null, i)) === null || (r = Hn(n, r, Fn(o) ? o.focus : null, i)) === null || t.type === "element" && r.type === "element" && (e = Re(e), n = Re(n), Ar(e) && Ar(n))) {
          return null;
        } else {
          Vn(t, r, o);
          return [t, r];
        }
      } else {
        return null;
      }
    }
    function Zn(e) {
      return wr(e) && !e.isInline();
    }
    function qn(e, t, n, r, i, o) {
      let s = pr();
      (e = new Wn(new Dn(e, t, i), new Dn(n, r, o), 0, "")).dirty = true;
      return s._selection = e;
    }
    function Xn() {
      return new Ln(new Set());
    }
    function Qn(e, t, n) {
      var r = n._window;
      if (r === null) {
        return null;
      }
      var i = r.event;
      var o = i ? i.type : undefined;
      let s;
      r = o === "selectionchange";
      i = !re && (r || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && i && i.detail === 3 || o === "drop" || o === undefined);
      if (Fn(e) && !i) {
        return e.clone();
      }
      if (t === null) {
        return null;
      }
      i = t.anchorNode;
      o = t.focusNode;
      s = t.anchorOffset;
      t = t.focusOffset;
      if (r && Fn(e) && !fe(n, i, o)) {
        return e.clone();
      }
      if ((n = Jn(i, s, o, t, n, e)) === null) {
        return null;
      }
      let [l, a] = n;
      return new Wn(l, a, Fn(e) ? e.format : 0, Fn(e) ? e.style : "");
    }
    function er() {
      return pr()._selection;
    }
    function tr() {
      return _r()._editorState._selection;
    }
    function nr(e, t, n, r = 1) {
      var i = e.anchor;
      var o = e.focus;
      var s = i.getNode();
      var l = o.getNode();
      if (t.is(s) || t.is(l)) {
        s = t.__key;
        if (e.isCollapsed()) {
          if (n <= (t = i.offset) && r > 0 || n < t && r < 0) {
            n = Math.max(0, t + r);
            i.set(s, n, "element");
            o.set(s, n, "element");
            rr(e);
          }
        } else {
          let u = e.isBackward();
          var a = (l = u ? o : i).getNode();
          o = (i = u ? i : o).getNode();
          if (t.is(a)) {
            if (n <= (a = l.offset) && r > 0 || n < a && r < 0) {
              l.set(s, Math.max(0, a + r), "element");
            }
          }
          if (t.is(o)) {
            if (n <= (t = i.offset) && r > 0 || n < t && r < 0) {
              i.set(s, Math.max(0, t + r), "element");
            }
          }
        }
        rr(e);
      }
    }
    function rr(e) {
      var t = e.anchor;
      var n = t.offset;
      let r = e.focus;
      var i = r.offset;
      var o = t.getNode();
      var s = r.getNode();
      if (e.isCollapsed()) {
        if (wr(o)) {
          if (wn(s = (i = n >= (s = o.getChildrenSize())) ? o.getChildAtIndex(s - 1) : o.getChildAtIndex(n))) {
            n = 0;
            if (i) {
              n = s.getTextContentSize();
            }
            t.set(s.__key, n, "text");
            r.set(s.__key, n, "text");
          }
        }
      } else {
        if (wr(o)) {
          let r = o.getChildrenSize();
          if (wn(n = (e = n >= r) ? o.getChildAtIndex(r - 1) : o.getChildAtIndex(n))) {
            o = 0;
            if (e) {
              o = n.getTextContentSize();
            }
            t.set(n.__key, o, "text");
          }
        }
        if (wr(s)) {
          if (wn(i = (t = i >= (n = s.getChildrenSize())) ? s.getChildAtIndex(n - 1) : s.getChildAtIndex(i))) {
            s = 0;
            if (t) {
              s = i.getTextContentSize();
            }
            r.set(i.__key, s, "text");
          }
        }
      }
    }
    function ir(e, t, n, r, i) {
      let o = null;
      let s = 0;
      let l = null;
      if (r !== null) {
        o = r.__key;
        if (wn(r)) {
          s = r.getTextContentSize();
          l = "text";
        } else if (wr(r)) {
          s = r.getChildrenSize();
          l = "element";
        }
      } else if (i !== null) {
        o = i.__key;
        if (wn(i)) {
          l = "text";
        } else if (wr(i)) {
          l = "element";
        }
      }
      if (o !== null && l !== null) {
        e.set(o, s, l);
      } else {
        s = t.getIndexWithinParent();
        if (s === -1) {
          s = n.getChildrenSize();
        }
        e.set(n.__key, s, "element");
      }
    }
    function or(e, t, n, r, i) {
      if (e.type === "text") {
        e.key = n;
        if (!t) {
          e.offset += i;
        }
      } else if (e.offset > r.getIndexWithinParent()) {
        --e.offset;
      }
    }
    function sr(e, t, n) {
      let r = [];
      let i = null;
      let o = null;
      e = e.getChildren();
      for (let c = 0; c < e.length; c++) {
        var s = e[c];
        if (!Hr(s)) {
          L(108);
        }
        var l = s.getChildren();
        s = 0;
        for (let e of l) {
          for (Kr(e) || L(109); r[c] !== undefined && r[c][s] !== undefined;) {
            s++;
          }
          var a = s;
          var u = e;
          let d = {
            cell: u,
            startColumn: a,
            startRow: l = c
          };
          let g = u.__rowSpan;
          let f = u.__colSpan;
          for (let e = 0; e < g; e++) {
            if (r[l + e] === undefined) {
              r[l + e] = [];
            }
            for (let t = 0; t < f; t++) {
              r[l + e][a + t] = d;
            }
          }
          if (t.is(u)) {
            i = d;
          }
          if (n.is(u)) {
            o = d;
          }
          s += e.__colSpan;
        }
      }
      if (i === null) {
        L(110);
      }
      if (o === null) {
        L(111);
      }
      return [r, i, o];
    }
    let lr = null;
    let ar = null;
    let ur = false;
    let cr = false;
    let dr = 0;
    let gr = {
      characterData: true,
      childList: true,
      subtree: true
    };
    function fr() {
      return ur || lr !== null && lr._readOnly;
    }
    function hr() {
      if (ur) {
        L(13);
      }
    }
    function pr() {
      if (lr === null) {
        L(15);
      }
      return lr;
    }
    function _r() {
      if (ar === null) {
        L(16);
      }
      return ar;
    }
    function mr(e, t, n) {
      var r = t.__type;
      let i = e._nodes.get(r);
      if (i === undefined) {
        L(30);
      }
      if ((e = n.get(r)) === undefined) {
        e = Array.from(i.transforms);
        n.set(r, e);
      }
      n = e.length;
      r = 0;
      for (; r < n && (e[r](t), t.isAttached()); r++);
    }
    function yr(e, t) {
      var n = t.get(e.type);
      if (n === undefined) {
        L(17);
      }
      n = n.klass;
      if (e.type !== n.getType()) {
        L(18);
      }
      n = n.importJSON(e);
      e = e.children;
      if (wr(n) && Array.isArray(e)) {
        for (let r = 0; r < e.length; r++) {
          let i = yr(e[r], t);
          n.append(i);
        }
      }
      return n;
    }
    function Nr(e, t) {
      let n = lr;
      let r = ur;
      let i = ar;
      lr = e;
      ur = true;
      ar = null;
      try {
        return t();
      } finally {
        lr = n;
        ur = r;
        ar = i;
      }
    }
    function vr(e) {
      let t = e._pendingEditorState;
      let r = e._rootElement;
      let i = e._headless || r === null;
      if (t !== null) {
        var o = e._editorState;
        var s = o._selection;
        var l = t._selection;
        var a = e._dirtyType !== 0;
        var u = lr;
        var c = ur;
        var d = ar;
        var g = e._updating;
        var f = e._observer;
        var h = null;
        e._pendingEditorState = null;
        e._editorState = t;
        if (!i && a && f !== null) {
          ar = e;
          lr = t;
          ur = false;
          e._updating = true;
          try {
            let n = e._dirtyType;
            let i = e._dirtyElements;
            let s = e._dirtyLeaves;
            f.disconnect();
            var p = i;
            var _ = s;
            Tt = Et = vt = "";
            Ct = n === 2;
            bt = null;
            dt = e;
            ct = e._config;
            gt = e._nodes;
            ft = dt._listeners.mutation;
            ht = p;
            pt = _;
            _t = o._nodeMap;
            mt = t._nodeMap;
            xt = t._readOnly;
            yt = new Map(e._keyToDOMMap);
            let l = new Map();
            Nt = l;
            Lt("root", null);
            Nt = yt = ct = mt = _t = pt = ht = gt = dt = undefined;
            h = l;
          } catch (n) {
            if (n instanceof Error) {
              e._onError(n);
            }
            if (cr) {
              throw n;
            }
            Br(e, null, r, t);
            ue(e);
            e._dirtyType = 2;
            cr = true;
            vr(e);
            return void (cr = false);
          } finally {
            f.observe(r, gr);
            e._updating = g;
            lr = u;
            ur = c;
            ar = d;
          }
        }
        if (!t._readOnly) {
          t._readOnly = true;
        }
        var m = e._dirtyLeaves;
        var y = e._dirtyElements;
        var N = e._normalizedNodes;
        var v = e._updateTags;
        var T = e._deferred;
        if (a) {
          e._dirtyType = 0;
          e._cloneNotNeeded.clear();
          e._dirtyLeaves = new Set();
          e._dirtyElements = new Map();
          e._normalizedNodes = new Set();
          e._updateTags = new Set();
        }
        var E;
        var C = e._decorators;
        var x = e._pendingDecorators || C;
        var b = t._nodeMap;
        for (E in x) {
          if (!b.has(E)) {
            if (x === C) {
              x = Ae(e);
            }
            delete x[E];
          }
        }
        var S = i ? null : et(e._window);
        if (e._editable && S !== null && (a || l === null || l.dirty)) {
          ar = e;
          lr = t;
          try {
            if (f !== null) {
              f.disconnect();
            }
            if (a || l === null || l.dirty) {
              let t = e._blockCursorElement;
              if (t !== null) {
                Qe(t, e, r);
              }
              e: {
                let t = S.anchorNode;
                let n = S.focusNode;
                let i = S.anchorOffset;
                let o = S.focusOffset;
                let a = document.activeElement;
                if (!(v.has("collaboration") && a !== r || a !== null && ge(a))) {
                  if (Fn(l)) {
                    var A = l.anchor;
                    var O = l.focus;
                    var w = A.key;
                    var k = O.key;
                    var R = Ue(e, w);
                    var D = Ue(e, k);
                    var M = A.offset;
                    var $ = O.offset;
                    var I = l.format;
                    var P = l.style;
                    var L = l.isCollapsed();
                    var F = R;
                    var B = D;
                    var z = false;
                    if (A.type === "text") {
                      F = _e(R);
                      let e = A.getNode();
                      z = e.getFormat() !== I || e.getStyle() !== P;
                    } else if (Fn(s) && s.anchor.type === "text") {
                      z = true;
                    }
                    if (O.type === "text") {
                      B = _e(D);
                    }
                    if (F !== null && B !== null) {
                      if (L && (s === null || z || Fn(s) && (s.format !== I || s.style !== P))) {
                        var W = performance.now();
                        Xt = [I, P, M, w, W];
                      }
                      if (i === M && o === $ && t === F && n === B && (S.type !== "Range" || !L) && (a !== null && r.contains(a) || r.focus({
                        preventScroll: true
                      }), A.type !== "element")) {
                        break e;
                      }
                      try {
                        S.setBaseAndExtent(F, M, B, $);
                      } catch (e) {}
                      if (!v.has("skip-scroll-into-view") && l.isCollapsed() && r !== null && r === document.activeElement) {
                        let t = l instanceof Wn && l.anchor.type === "element" ? F.childNodes[M] || null : S.rangeCount > 0 ? S.getRangeAt(0) : null;
                        if (t !== null) {
                          let n;
                          if (t instanceof Text) {
                            let e = document.createRange();
                            e.selectNode(t);
                            n = e.getBoundingClientRect();
                          } else {
                            n = t.getBoundingClientRect();
                          }
                          let i = r.ownerDocument;
                          let o = i.defaultView;
                          if (o !== null) {
                            for (var K, U, {
                                top: Y,
                                bottom: j
                              } = n, H = r; H !== null;) {
                              let t = H === i.body;
                              if (t) {
                                K = 0;
                                U = He(e).innerHeight;
                              } else {
                                let e = H.getBoundingClientRect();
                                K = e.top;
                                U = e.bottom;
                              }
                              let n = 0;
                              if (Y < K) {
                                n = -(K - Y);
                              } else if (j > U) {
                                n = j - U;
                              }
                              if (n !== 0) {
                                if (t) {
                                  o.scrollBy(0, n);
                                } else {
                                  let e = H.scrollTop;
                                  H.scrollTop += n;
                                  let t = H.scrollTop - e;
                                  Y -= t;
                                  j -= t;
                                }
                              }
                              if (t) {
                                break;
                              }
                              H = Ye(H);
                            }
                          }
                        }
                      }
                      Vt = true;
                    }
                  } else if (s !== null && fe(e, t, n)) {
                    S.removeAllRanges();
                  }
                }
              }
            }
            e: {
              let t = e._blockCursorElement;
              if (Fn(l) && l.isCollapsed() && l.anchor.type === "element" && r.contains(document.activeElement)) {
                let n = l.anchor;
                let i = n.getNode();
                let o = n.offset;
                let s = i.getChildrenSize();
                let a = false;
                let u = null;
                if (o === s) {
                  if (Xe(i.getChildAtIndex(o - 1))) {
                    a = true;
                  }
                } else {
                  let t = i.getChildAtIndex(o);
                  if (Xe(t)) {
                    let n = t.getPreviousSibling();
                    if (n === null || Xe(n)) {
                      a = true;
                      u = e.getElementByKey(t.__key);
                    }
                  }
                }
                if (a) {
                  let n = e.getElementByKey(i.__key);
                  if (t === null) {
                    let n = e._config.theme;
                    let r = document.createElement("div");
                    r.contentEditable = "false";
                    r.setAttribute("data-lexical-cursor", "true");
                    let i = n.blockCursor;
                    if (i !== undefined) {
                      if (typeof i == "string") {
                        let e = i.split(" ");
                        i = n.blockCursor = e;
                      }
                      if (i !== undefined) {
                        r.classList.add(...i);
                      }
                    }
                    e._blockCursorElement = t = r;
                  }
                  r.style.caretColor = "transparent";
                  if (u === null) {
                    n.appendChild(t);
                  } else {
                    n.insertBefore(t, u);
                  }
                  break e;
                }
              }
              if (t !== null) {
                Qe(t, e, r);
              }
            }
            if (f !== null) {
              f.observe(r, gr);
            }
          } finally {
            ar = d;
            lr = u;
          }
        }
        if (h !== null) {
          var G = h;
          let t = Array.from(e._listeners.mutation);
          let n = t.length;
          for (let e = 0; e < n; e++) {
            let [n, r] = t[e];
            let i = G.get(r);
            if (i !== undefined) {
              n(i, {
                dirtyLeaves: m,
                updateTags: v
              });
            }
          }
        }
        if (!(Fn(l) || l === null || s !== null && s.is(l))) {
          e.dispatchCommand(n, undefined);
        }
        var V = e._pendingDecorators;
        if (V !== null) {
          e._decorators = V;
          e._pendingDecorators = null;
          Tr("decorator", e, true, V);
        }
        var J = Oe(o);
        var Z = Oe(t);
        if (J !== Z) {
          Tr("textcontent", e, true, Z);
        }
        Tr("update", e, true, {
          dirtyElements: y,
          dirtyLeaves: m,
          editorState: t,
          normalizedNodes: N,
          prevEditorState: o,
          tags: v
        });
        e._deferred = [];
        if (T.length !== 0) {
          let t = e._updating;
          e._updating = true;
          try {
            for (let e = 0; e < T.length; e++) {
              T[e]();
            }
          } finally {
            e._updating = t;
          }
        }
        var q = e._updates;
        if (q.length !== 0) {
          let t = q.shift();
          if (t) {
            let [n, r] = t;
            xr(e, n, r);
          }
        }
      }
    }
    function Tr(e, t, n, ...r) {
      let i = t._updating;
      t._updating = n;
      try {
        let n = Array.from(t._listeners[e]);
        for (e = 0; e < n.length; e++) {
          n[e].apply(null, r);
        }
      } finally {
        t._updating = i;
      }
    }
    function Er(e, t, n) {
      if (e._updating === false || ar !== e) {
        let r = false;
        e.update(() => {
          r = Er(e, t, n);
        });
        return r;
      }
      let r = Me(e);
      for (let o = 4; o >= 0; o--) {
        for (let s = 0; s < r.length; s++) {
          var i = r[s]._commands.get(t);
          if (i !== undefined && (i = i[o]) !== undefined) {
            let t = (i = Array.from(i)).length;
            for (let r = 0; r < t; r++) {
              if (i[r](n, e) === true) {
                return true;
              }
            }
          }
        }
      }
      return false;
    }
    function Cr(e, t) {
      let n = e._updates;
      for (t = t || false; n.length !== 0;) {
        var r = n.shift();
        if (r) {
          let n;
          let [i, o] = r;
          if (o !== undefined) {
            r = o.onUpdate;
            n = o.tag;
            if (o.skipTransforms) {
              t = true;
            }
            if (r) {
              e._deferred.push(r);
            }
            if (n) {
              e._updateTags.add(n);
            }
          }
          i();
        }
      }
      return t;
    }
    function xr(e, t, n) {
      let r = e._updateTags;
      var i;
      var o = i = false;
      if (n !== undefined) {
        var s = n.onUpdate;
        if ((i = n.tag) != null) {
          r.add(i);
        }
        i = n.skipTransforms || false;
        o = n.discrete || false;
      }
      if (s) {
        e._deferred.push(s);
      }
      n = e._editorState;
      let l = false;
      if ((s = e._pendingEditorState) === null || s._readOnly) {
        s = e._pendingEditorState = new Ir(new Map((s || n)._nodeMap));
        l = true;
      }
      s._flushSync = o;
      o = lr;
      let a = ur;
      let u = ar;
      let c = e._updating;
      lr = s;
      ur = false;
      e._updating = true;
      ar = e;
      try {
        if (l) {
          if (e._headless) {
            if (n._selection != null) {
              s._selection = n._selection.clone();
            }
          } else {
            s._selection = function (e) {
              let t = e.getEditorState()._selection;
              let n = et(e._window);
              if (Kn(t) || zn(t)) {
                return t.clone();
              } else {
                return Qn(t, n, e);
              }
            }(e);
          }
        }
        let r = e._compositionKey;
        t();
        i = Cr(e, i);
        (function (e, t) {
          t = t.getEditorState()._selection;
          if (Fn(e = e._selection)) {
            var n = e.anchor;
            let r;
            let i = e.focus;
            if (n.type === "text") {
              r = n.getNode();
              r.selectionTransform(t, e);
            }
            if (i.type === "text" && r !== (n = i.getNode())) {
              n.selectionTransform(t, e);
            }
          }
        })(s, e);
        if (e._dirtyType !== 0) {
          if (i) {
            (function (e, t) {
              t = t._dirtyLeaves;
              e = e._nodeMap;
              for (let n of t) {
                if (wn(t = e.get(n)) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable()) {
                  lt(t);
                }
              }
            })(s, e);
          } else {
            (function (e, t) {
              let n = t._dirtyLeaves;
              let r = t._dirtyElements;
              e = e._nodeMap;
              let i = Ce();
              let o = new Map();
              var s = n;
              let l = s.size;
              for (var a = r, u = a.size; l > 0 || u > 0;) {
                if (l > 0) {
                  t._dirtyLeaves = new Set();
                  for (let r of s) {
                    if (wn(s = e.get(r)) && s.isAttached() && s.isSimpleText() && !s.isUnmergeable()) {
                      lt(s);
                    }
                    if (s !== undefined && s !== undefined && s.__key !== i && s.isAttached()) {
                      mr(t, s, o);
                    }
                    n.add(r);
                  }
                  l = (s = t._dirtyLeaves).size;
                  if (l > 0) {
                    dr++;
                    continue;
                  }
                }
                t._dirtyLeaves = new Set();
                t._dirtyElements = new Map();
                for (let n of a) {
                  a = n[0];
                  u = n[1];
                  if (a === "root" || u) {
                    if ((s = e.get(a)) !== undefined && s !== undefined && s.__key !== i && s.isAttached()) {
                      mr(t, s, o);
                    }
                    r.set(a, u);
                  }
                }
                l = (s = t._dirtyLeaves).size;
                u = (a = t._dirtyElements).size;
                dr++;
              }
              t._dirtyLeaves = n;
              t._dirtyElements = r;
            })(s, e);
          }
          Cr(e);
          (function (e, t, n, r) {
            e = e._nodeMap;
            t = t._nodeMap;
            let i = [];
            for (let [n] of r) {
              let o = t.get(n);
              if (!(o === undefined || o.isAttached())) {
                if (wr(o)) {
                  it(o, n, e, t, i, r);
                }
                if (!e.has(n)) {
                  r.delete(n);
                }
                i.push(n);
              }
            }
            for (let e of i) {
              t.delete(e);
            }
            for (let i of n) {
              if (!((r = t.get(i)) === undefined || r.isAttached())) {
                if (!e.has(i)) {
                  n.delete(i);
                }
                t.delete(i);
              }
            }
          })(n, s, e._dirtyLeaves, e._dirtyElements);
        }
        if (r !== e._compositionKey) {
          s._flushSync = true;
        }
        let d = s._selection;
        if (Fn(d)) {
          let e = s._nodeMap;
          let t = d.focus.key;
          if (!(e.get(d.anchor.key) !== undefined && e.get(t) !== undefined)) {
            L(19);
          }
        } else if (Kn(d) && d._nodes.size === 0) {
          s._selection = null;
        }
      } catch (t) {
        if (t instanceof Error) {
          e._onError(t);
        }
        e._pendingEditorState = n;
        e._dirtyType = 2;
        e._cloneNotNeeded.clear();
        e._dirtyLeaves = new Set();
        e._dirtyElements.clear();
        return void vr(e);
      } finally {
        lr = o;
        ur = a;
        ar = u;
        e._updating = c;
        dr = 0;
      }
      if (e._dirtyType !== 0 || function (e, t) {
        t = t.getEditorState()._selection;
        if ((e = e._selection) !== null) {
          if (e.dirty || !e.is(t)) {
            return true;
          }
        } else if (t !== null) {
          return true;
        }
        return false;
      }(s, e)) {
        if (s._flushSync) {
          s._flushSync = false;
          vr(e);
        } else if (l) {
          de(() => {
            vr(e);
          });
        }
      } else {
        s._flushSync = false;
        if (l) {
          r.clear();
          e._deferred = [];
          e._pendingEditorState = null;
        }
      }
    }
    function br(e, t, n) {
      if (e._updating) {
        e._updates.push([t, n]);
      } else {
        xr(e, t, n);
      }
    }
    class Sr extends un {
      constructor(e) {
        super(e);
      }
      decorate() {
        L(47);
      }
      isIsolated() {
        return false;
      }
      isInline() {
        return true;
      }
      isKeyboardSelectable() {
        return true;
      }
    }
    function Ar(e) {
      return e instanceof Sr;
    }
    class Or extends un {
      constructor(e) {
        super(e);
        this.__last = this.__first = null;
        this.__indent = this.__format = this.__size = 0;
        this.__dir = null;
      }
      getFormat() {
        return this.getLatest().__format;
      }
      getFormatType() {
        let e = this.getFormat();
        return ee[e] || "";
      }
      getIndent() {
        return this.getLatest().__indent;
      }
      getChildren() {
        let e = [];
        let t = this.getFirstChild();
        for (; t !== null;) {
          e.push(t);
          t = t.getNextSibling();
        }
        return e;
      }
      getChildrenKeys() {
        let e = [];
        let t = this.getFirstChild();
        for (; t !== null;) {
          e.push(t.__key);
          t = t.getNextSibling();
        }
        return e;
      }
      getChildrenSize() {
        return this.getLatest().__size;
      }
      isEmpty() {
        return this.getChildrenSize() === 0;
      }
      isDirty() {
        let e = _r()._dirtyElements;
        return e !== null && e.has(this.__key);
      }
      isLastChild() {
        let e = this.getLatest();
        let t = this.getParentOrThrow().getLastChild();
        return t !== null && t.is(e);
      }
      getAllTextNodes() {
        let e = [];
        let t = this.getFirstChild();
        for (; t !== null;) {
          if (wn(t)) {
            e.push(t);
          }
          if (wr(t)) {
            let n = t.getAllTextNodes();
            e.push(...n);
          }
          t = t.getNextSibling();
        }
        return e;
      }
      getFirstDescendant() {
        let e = this.getFirstChild();
        for (; e !== null;) {
          if (wr(e)) {
            let t = e.getFirstChild();
            if (t !== null) {
              e = t;
              continue;
            }
          }
          break;
        }
        return e;
      }
      getLastDescendant() {
        let e = this.getLastChild();
        for (; e !== null;) {
          if (wr(e)) {
            let t = e.getLastChild();
            if (t !== null) {
              e = t;
              continue;
            }
          }
          break;
        }
        return e;
      }
      getDescendantByIndex(e) {
        let t = this.getChildren();
        let n = t.length;
        if (e >= n) {
          return wr(e = t[n - 1]) && e.getLastDescendant() || e || null;
        } else {
          return wr(e = t[e]) && e.getFirstDescendant() || e || null;
        }
      }
      getFirstChild() {
        let e = this.getLatest().__first;
        if (e === null) {
          return null;
        } else {
          return xe(e);
        }
      }
      getFirstChildOrThrow() {
        let e = this.getFirstChild();
        if (e === null) {
          L(45);
        }
        return e;
      }
      getLastChild() {
        let e = this.getLatest().__last;
        if (e === null) {
          return null;
        } else {
          return xe(e);
        }
      }
      getLastChildOrThrow() {
        let e = this.getLastChild();
        if (e === null) {
          L(96);
        }
        return e;
      }
      getChildAtIndex(e) {
        var t = this.getChildrenSize();
        let n;
        if (e < t / 2) {
          n = this.getFirstChild();
          t = 0;
          for (; n !== null && t <= e;) {
            if (t === e) {
              return n;
            }
            n = n.getNextSibling();
            t++;
          }
          return null;
        }
        n = this.getLastChild();
        --t;
        for (; n !== null && t >= e;) {
          if (t === e) {
            return n;
          }
          n = n.getPreviousSibling();
          t--;
        }
        return null;
      }
      getTextContent() {
        let e = "";
        let t = this.getChildren();
        let n = t.length;
        for (let r = 0; r < n; r++) {
          let i = t[r];
          e += i.getTextContent();
          if (wr(i) && r !== n - 1 && !i.isInline()) {
            e += "\n\n";
          }
        }
        return e;
      }
      getTextContentSize() {
        let e = 0;
        let t = this.getChildren();
        let n = t.length;
        for (let r = 0; r < n; r++) {
          let i = t[r];
          e += i.getTextContentSize();
          if (wr(i) && r !== n - 1 && !i.isInline()) {
            e += 2;
          }
        }
        return e;
      }
      getDirection() {
        return this.getLatest().__dir;
      }
      hasFormat(e) {
        return e !== "" && (e = Q[e], (this.getFormat() & e) != 0);
      }
      select(e, t) {
        hr();
        let n = er();
        let r = e;
        let i = t;
        var o = this.getChildrenSize();
        if (!this.canBeEmpty()) {
          if (e === 0 && t === 0) {
            if (wn(e = this.getFirstChild()) || wr(e)) {
              return e.select(0, 0);
            }
          } else if (!(e !== undefined && e !== o || t !== undefined && t !== o) && (wn(e = this.getLastChild()) || wr(e))) {
            return e.select();
          }
        }
        if (r === undefined) {
          r = o;
        }
        if (i === undefined) {
          i = o;
        }
        o = this.__key;
        if (Fn(n)) {
          n.anchor.set(o, r, "element");
          n.focus.set(o, i, "element");
          n.dirty = true;
          return n;
        } else {
          return qn(o, r, o, i, "element", "element");
        }
      }
      selectStart() {
        let e = this.getFirstDescendant();
        if (wr(e) || wn(e)) {
          return e.select(0, 0);
        } else if (e !== null) {
          return e.selectPrevious();
        } else {
          return this.select(0, 0);
        }
      }
      selectEnd() {
        let e = this.getLastDescendant();
        if (wr(e) || wn(e)) {
          return e.select();
        } else if (e !== null) {
          return e.selectNext();
        } else {
          return this.select();
        }
      }
      clear() {
        let e = this.getWritable();
        this.getChildren().forEach(e => e.remove());
        return e;
      }
      append(...e) {
        return this.splice(this.getChildrenSize(), 0, e);
      }
      setDirection(e) {
        let t = this.getWritable();
        t.__dir = e;
        return t;
      }
      setFormat(e) {
        this.getWritable().__format = e !== "" ? Q[e] : 0;
        return this;
      }
      setIndent(e) {
        this.getWritable().__indent = e;
        return this;
      }
      splice(e, t, n) {
        let r = n.length;
        let i = this.getChildrenSize();
        let o = this.getWritable();
        let s = o.__key;
        var l = [];
        var a = [];
        let u = this.getChildAtIndex(e + t);
        let c = null;
        let d = i - t + r;
        if (e !== 0) {
          if (e === i) {
            c = this.getLastChild();
          } else {
            var g = this.getChildAtIndex(e);
            if (g !== null) {
              c = g.getPreviousSibling();
            }
          }
        }
        if (t > 0) {
          var f = c === null ? this.getFirstChild() : c.getNextSibling();
          for (g = 0; g < t; g++) {
            if (f === null) {
              L(100);
            }
            var h = f.getNextSibling();
            var p = f.__key;
            ve(f = f.getWritable());
            a.push(p);
            f = h;
          }
        }
        g = c;
        h = 0;
        for (; h < r; h++) {
          p = n[h];
          if (g !== null && p.is(g)) {
            c = g = g.getPreviousSibling();
          }
          if ((f = p.getWritable()).__parent === s) {
            d--;
          }
          ve(f);
          let e = p.__key;
          if (g === null) {
            o.__first = e;
            f.__prev = null;
          } else {
            (g = g.getWritable()).__next = e;
            f.__prev = g.__key;
          }
          if (p.__key === s) {
            L(76);
          }
          f.__parent = s;
          l.push(e);
          g = p;
        }
        if (e + t === i) {
          if (g !== null) {
            g.getWritable().__next = null;
            o.__last = g.__key;
          }
        } else if (u !== null) {
          e = u.getWritable();
          if (g !== null) {
            t = g.getWritable();
            e.__prev = g.__key;
            t.__next = u.__key;
          } else {
            e.__prev = null;
          }
        }
        o.__size = d;
        if (a.length && Fn(e = er())) {
          a = new Set(a);
          l = new Set(l);
          let {
            anchor: t,
            focus: n
          } = e;
          if (kr(t, a, l)) {
            ir(t, t.getNode(), this, c, u);
          }
          if (kr(n, a, l)) {
            ir(n, n.getNode(), this, c, u);
          }
          if (!(d !== 0 || this.canBeEmpty() || Ve(this))) {
            this.remove();
          }
        }
        return o;
      }
      exportJSON() {
        return {
          children: [],
          direction: this.getDirection(),
          format: this.getFormatType(),
          indent: this.getIndent(),
          type: "element",
          version: 1
        };
      }
      insertNewAfter() {
        return null;
      }
      canIndent() {
        return true;
      }
      collapseAtStart() {
        return false;
      }
      excludeFromCopy() {
        return false;
      }
      canExtractContents() {
        return true;
      }
      canReplaceWith() {
        return true;
      }
      canInsertAfter() {
        return true;
      }
      canBeEmpty() {
        return true;
      }
      canInsertTextBefore() {
        return true;
      }
      canInsertTextAfter() {
        return true;
      }
      isInline() {
        return false;
      }
      isShadowRoot() {
        return false;
      }
      canMergeWith() {
        return false;
      }
      extractWithChild() {
        return false;
      }
    }
    function wr(e) {
      return e instanceof Or;
    }
    function kr(e, t, n) {
      for (e = e.getNode(); e;) {
        let r = e.__key;
        if (t.has(r) && !n.has(r)) {
          return true;
        }
        e = e.getParent();
      }
      return false;
    }
    class Rr extends Or {
      static getType() {
        return "root";
      }
      static clone() {
        return new Rr();
      }
      constructor() {
        super("root");
        this.__cachedText = null;
      }
      getTopLevelElementOrThrow() {
        L(51);
      }
      getTextContent() {
        let e = this.__cachedText;
        if (!fr() && _r()._dirtyType !== 0 || e === null) {
          return super.getTextContent();
        } else {
          return e;
        }
      }
      remove() {
        L(52);
      }
      replace() {
        L(53);
      }
      insertBefore() {
        L(54);
      }
      insertAfter() {
        L(55);
      }
      updateDOM() {
        return false;
      }
      append(...e) {
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (!(wr(n) || Ar(n))) {
            L(56);
          }
        }
        return super.append(...e);
      }
      static importJSON(e) {
        let t = we();
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      exportJSON() {
        return {
          children: [],
          direction: this.getDirection(),
          format: this.getFormatType(),
          indent: this.getIndent(),
          type: "root",
          version: 1
        };
      }
      collapseAtStart() {
        return true;
      }
    }
    function Dr(e) {
      return e instanceof Rr;
    }
    function Mr() {
      return new Ir(new Map([["root", new Rr()]]));
    }
    function $r(e) {
      let t = e.exportJSON();
      if (t.type !== e.constructor.getType()) {
        L(58);
      }
      let n = t.children;
      if (wr(e)) {
        if (!Array.isArray(n)) {
          L(59);
        }
        e = e.getChildren();
        for (let t = 0; t < e.length; t++) {
          let r = $r(e[t]);
          n.push(r);
        }
      }
      return t;
    }
    class Ir {
      constructor(e, t) {
        this._nodeMap = e;
        this._selection = t || null;
        this._readOnly = this._flushSync = false;
      }
      isEmpty() {
        return this._nodeMap.size === 1 && this._selection === null;
      }
      read(e) {
        return Nr(this, e);
      }
      clone(e) {
        (e = new Ir(this._nodeMap, e === undefined ? this._selection : e))._readOnly = true;
        return e;
      }
      toJSON() {
        return Nr(this, () => ({
          root: $r(we())
        }));
      }
    }
    class Pr extends Or {
      static getType() {
        return "paragraph";
      }
      static clone(e) {
        return new Pr(e.__key);
      }
      createDOM(e) {
        let t = document.createElement("p");
        if ((e = Le(e.theme, "paragraph")) !== undefined) {
          t.classList.add(...e);
        }
        return t;
      }
      updateDOM() {
        return false;
      }
      static importDOM() {
        return {
          p: () => ({
            conversion: Lr,
            priority: 0
          })
        };
      }
      exportDOM(e) {
        ({
          element: e
        } = super.exportDOM(e));
        if (e && this.isEmpty()) {
          e.append(document.createElement("br"));
        }
        if (e) {
          var t = this.getFormatType();
          e.style.textAlign = t;
          if (t = this.getDirection()) {
            e.dir = t;
          }
          if ((t = this.getIndent()) > 0) {
            e.style.textIndent = t * 20 + "px";
          }
        }
        return {
          element: e
        };
      }
      static importJSON(e) {
        let t = Fr();
        t.setFormat(e.format);
        t.setIndent(e.indent);
        t.setDirection(e.direction);
        return t;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          type: "paragraph",
          version: 1
        };
      }
      insertNewAfter(e, t) {
        e = Fr();
        let n = this.getDirection();
        e.setDirection(n);
        this.insertAfter(e, t);
        return e;
      }
      collapseAtStart() {
        let e = this.getChildren();
        if (e.length === 0 || wn(e[0]) && e[0].getTextContent().trim() === "") {
          if (this.getNextSibling() !== null) {
            this.selectNext();
            this.remove();
            return true;
          }
          if (this.getPreviousSibling() !== null) {
            this.selectPrevious();
            this.remove();
            return true;
          }
        }
        return false;
      }
    }
    function Lr(e) {
      let t = Fr();
      if (e.style) {
        t.setFormat(e.style.textAlign);
        if ((e = parseInt(e.style.textIndent, 10) / 20) > 0) {
          t.setIndent(e);
        }
      }
      return {
        node: t
      };
    }
    function Fr() {
      return Ze(new Pr());
    }
    function Br(e, t, n, r) {
      let i = e._keyToDOMMap;
      i.clear();
      e._editorState = Mr();
      e._pendingEditorState = r;
      e._compositionKey = null;
      e._dirtyType = 0;
      e._cloneNotNeeded.clear();
      e._dirtyLeaves = new Set();
      e._dirtyElements.clear();
      e._normalizedNodes = new Set();
      e._updateTags = new Set();
      e._updates = [];
      e._blockCursorElement = null;
      if ((r = e._observer) !== null) {
        r.disconnect();
        e._observer = null;
      }
      if (t !== null) {
        t.textContent = "";
      }
      if (n !== null) {
        n.textContent = "";
        i.set("root", n);
      }
    }
    class zr {
      constructor(e, t, n, r, i, o, s) {
        this._parentEditor = t;
        this._rootElement = null;
        this._editorState = e;
        this._compositionKey = this._pendingEditorState = null;
        this._deferred = [];
        this._keyToDOMMap = new Map();
        this._updates = [];
        this._updating = false;
        this._listeners = {
          decorator: new Set(),
          editable: new Set(),
          mutation: new Map(),
          root: new Set(),
          textcontent: new Set(),
          update: new Set()
        };
        this._commands = new Map();
        this._config = r;
        this._nodes = n;
        this._decorators = {};
        this._pendingDecorators = null;
        this._dirtyType = 0;
        this._cloneNotNeeded = new Set();
        this._dirtyLeaves = new Set();
        this._dirtyElements = new Map();
        this._normalizedNodes = new Set();
        this._updateTags = new Set();
        this._observer = null;
        this._key = $e();
        this._onError = i;
        this._htmlConversions = o;
        this._editable = s;
        this._headless = t !== null && t._headless;
        this._blockCursorElement = this._window = null;
      }
      isComposing() {
        return this._compositionKey != null;
      }
      registerUpdateListener(e) {
        let t = this._listeners.update;
        t.add(e);
        return () => {
          t.delete(e);
        };
      }
      registerEditableListener(e) {
        let t = this._listeners.editable;
        t.add(e);
        return () => {
          t.delete(e);
        };
      }
      registerDecoratorListener(e) {
        let t = this._listeners.decorator;
        t.add(e);
        return () => {
          t.delete(e);
        };
      }
      registerTextContentListener(e) {
        let t = this._listeners.textcontent;
        t.add(e);
        return () => {
          t.delete(e);
        };
      }
      registerRootListener(e) {
        let t = this._listeners.root;
        e(this._rootElement, null);
        t.add(e);
        return () => {
          e(null, this._rootElement);
          t.delete(e);
        };
      }
      registerCommand(e, t, n) {
        if (n === undefined) {
          L(35);
        }
        let r = this._commands;
        if (!r.has(e)) {
          r.set(e, [new Set(), new Set(), new Set(), new Set(), new Set()]);
        }
        let i = r.get(e);
        if (i === undefined) {
          L(36);
        }
        let o = i[n];
        o.add(t);
        return () => {
          o.delete(t);
          if (i.every(e => e.size === 0)) {
            r.delete(e);
          }
        };
      }
      registerMutationListener(e, t) {
        if (this._nodes.get(e.getType()) === undefined) {
          L(37);
        }
        let n = this._listeners.mutation;
        n.set(t, e);
        return () => {
          n.delete(t);
        };
      }
      registerNodeTransformToKlass(e, t) {
        e = e.getType();
        if ((e = this._nodes.get(e)) === undefined) {
          L(37);
        }
        e.transforms.add(t);
        return e;
      }
      registerNodeTransform(e, t) {
        var n = this.registerNodeTransformToKlass(e, t);
        let r = [n];
        if ((n = n.replaceWithKlass) != null) {
          n = this.registerNodeTransformToKlass(n, t);
          r.push(n);
        }
        (function (e, t) {
          br(e, () => {
            var e = pr();
            if (!e.isEmpty()) {
              if (t === "root") {
                we().markDirty();
              } else {
                e = e._nodeMap;
                for (let [, t] of e) {
                  t.markDirty();
                }
              }
            }
          }, e._pendingEditorState === null ? {
            tag: "history-merge"
          } : undefined);
        })(this, e.getType());
        return () => {
          r.forEach(e => e.transforms.delete(t));
        };
      }
      hasNodes(e) {
        for (let t = 0; t < e.length; t++) {
          let n = e[t].getType();
          if (!this._nodes.has(n)) {
            return false;
          }
        }
        return true;
      }
      dispatchCommand(e, t) {
        return Er(this, e, t);
      }
      getDecorators() {
        return this._decorators;
      }
      getRootElement() {
        return this._rootElement;
      }
      getKey() {
        return this._key;
      }
      setRootElement(e) {
        let t = this._rootElement;
        if (e !== t) {
          let i = Le(this._config.theme, "root");
          var n = this._pendingEditorState || this._editorState;
          this._rootElement = e;
          Br(this, t, e, n);
          if (t !== null) {
            if (!this._config.disableEvents) {
              if (Gt !== 0) {
                Gt--;
                if (Gt === 0) {
                  t.ownerDocument.removeEventListener("selectionchange", ln);
                }
              }
              if ((n = t.__lexicalEditor) != null) {
                if (n._parentEditor !== null) {
                  var r = Me(n);
                  r = r[r.length - 1]._key;
                  if (sn.get(r) === n) {
                    sn.delete(r);
                  }
                } else {
                  sn.delete(n._key);
                }
                t.__lexicalEditor = null;
              }
              n = on(t);
              r = 0;
              for (; r < n.length; r++) {
                n[r]();
              }
              t.__lexicalEventHandles = [];
            }
            if (i != null) {
              t.classList.remove(...i);
            }
          }
          if (e !== null) {
            n = (n = e.ownerDocument) && n.defaultView || null;
            (r = e.style).userSelect = "text";
            r.whiteSpace = "pre-wrap";
            r.wordBreak = "break-word";
            e.setAttribute("data-lexical-editor", "true");
            this._window = n;
            this._dirtyType = 2;
            ue(this);
            this._updateTags.add("history-merge");
            vr(this);
            if (!this._config.disableEvents) {
              (function (e, t) {
                if (Gt === 0) {
                  e.ownerDocument.addEventListener("selectionchange", ln);
                }
                Gt++;
                e.__lexicalEditor = t;
                let n = on(e);
                for (let r = 0; r < Kt.length; r++) {
                  let [i, o] = Kt[r];
                  let s = typeof o == "function" ? e => {
                    if (e._lexicalHandled !== true) {
                      e._lexicalHandled = true;
                      if (t.isEditable()) {
                        o(e, t);
                      }
                    }
                  } : e => {
                    if (e._lexicalHandled !== true && (e._lexicalHandled = true, t.isEditable())) {
                      switch (i) {
                        case "cut":
                          return Er(t, M, e);
                        case "copy":
                          return Er(t, D, e);
                        case "paste":
                          return Er(t, a, e);
                        case "dragstart":
                          return Er(t, w, e);
                        case "dragover":
                          return Er(t, k, e);
                        case "dragend":
                          return Er(t, R, e);
                        case "focus":
                          return Er(t, $, e);
                        case "blur":
                          return Er(t, I, e);
                        case "drop":
                          return Er(t, O, e);
                      }
                    }
                  };
                  e.addEventListener(i, s);
                  n.push(() => {
                    e.removeEventListener(i, s);
                  });
                }
              })(e, this);
            }
            if (i != null) {
              e.classList.add(...i);
            }
          } else {
            this._window = null;
          }
          Tr("root", this, false, e, t);
        }
      }
      getElementByKey(e) {
        return this._keyToDOMMap.get(e) || null;
      }
      getEditorState() {
        return this._editorState;
      }
      setEditorState(e, t) {
        if (e.isEmpty()) {
          L(38);
        }
        ae(this);
        let n = this._pendingEditorState;
        let r = this._updateTags;
        t = t !== undefined ? t.tag : null;
        if (!(n === null || n.isEmpty())) {
          if (t != null) {
            r.add(t);
          }
          vr(this);
        }
        this._pendingEditorState = e;
        this._dirtyType = 2;
        this._dirtyElements.set("root", false);
        this._compositionKey = null;
        if (t != null) {
          r.add(t);
        }
        vr(this);
      }
      parseEditorState(e, t) {
        e = typeof e == "string" ? JSON.parse(e) : e;
        let n = Mr();
        let r = lr;
        let i = ur;
        let o = ar;
        let s = this._dirtyElements;
        let l = this._dirtyLeaves;
        let a = this._cloneNotNeeded;
        let u = this._dirtyType;
        this._dirtyElements = new Map();
        this._dirtyLeaves = new Set();
        this._cloneNotNeeded = new Set();
        this._dirtyType = 0;
        lr = n;
        ur = false;
        ar = this;
        try {
          yr(e.root, this._nodes);
          if (t) {
            t();
          }
          n._readOnly = true;
        } catch (e) {
          if (e instanceof Error) {
            this._onError(e);
          }
        } finally {
          this._dirtyElements = s;
          this._dirtyLeaves = l;
          this._cloneNotNeeded = a;
          this._dirtyType = u;
          lr = r;
          ur = i;
          ar = o;
        }
        return n;
      }
      update(e, t) {
        br(this, e, t);
      }
      focus(e, t = {}) {
        let n = this._rootElement;
        if (n !== null) {
          n.setAttribute("autocapitalize", "off");
          br(this, () => {
            let e = er();
            let n = we();
            if (e !== null) {
              e.dirty = true;
            } else if (n.getChildrenSize() !== 0) {
              if (t.defaultSelection === "rootStart") {
                n.selectStart();
              } else {
                n.selectEnd();
              }
            }
          }, {
            onUpdate: () => {
              n.removeAttribute("autocapitalize");
              if (e) {
                e();
              }
            },
            tag: "focus"
          });
          if (this._pendingEditorState === null) {
            n.removeAttribute("autocapitalize");
          }
        }
      }
      blur() {
        var e = this._rootElement;
        if (e !== null) {
          e.blur();
        }
        if ((e = et(this._window)) !== null) {
          e.removeAllRanges();
        }
      }
      isEditable() {
        return this._editable;
      }
      setEditable(e) {
        if (this._editable !== e) {
          this._editable = e;
          Tr("editable", this, true, e);
        }
      }
      toJSON() {
        return {
          editorState: this._editorState.toJSON()
        };
      }
    }
    class Wr extends Or {
      constructor(e, t) {
        super(t);
        this.__colSpan = e;
        this.__rowSpan = 1;
      }
      exportJSON() {
        return {
          ...super.exportJSON(),
          colSpan: this.__colSpan,
          rowSpan: this.__rowSpan
        };
      }
      getColSpan() {
        return this.__colSpan;
      }
      setColSpan(e) {
        this.getWritable().__colSpan = e;
        return this;
      }
      getRowSpan() {
        return this.__rowSpan;
      }
      setRowSpan(e) {
        this.getWritable().__rowSpan = e;
        return this;
      }
    }
    function Kr(e) {
      return e instanceof Wr;
    }
    class Ur extends Or {}
    function Yr(e) {
      return e instanceof Ur;
    }
    class jr extends Or {}
    function Hr(e) {
      return e instanceof jr;
    }
    t.$addUpdateTag = function (e) {
      hr();
      _r()._updateTags.add(e);
    };
    t.$applyNodeReplacement = Ze;
    t.$copyNode = Je;
    t.$createLineBreakNode = gn;
    t.$createNodeSelection = Xn;
    t.$createParagraphNode = Fr;
    t.$createRangeSelection = function () {
      let e = new Dn("root", 0, "element");
      let t = new Dn("root", 0, "element");
      return new Wn(e, t, 0, "");
    };
    t.$createTabNode = Rn;
    t.$createTextNode = On;
    t.$getAdjacentNode = ze;
    t.$getNearestNodeFromDOMNode = Se;
    t.$getNearestRootOrShadowRoot = Ge;
    t.$getNodeByKey = xe;
    t.$getPreviousSelection = tr;
    t.$getRoot = we;
    t.$getSelection = er;
    t.$getTextContent = function () {
      let e = er();
      if (e === null) {
        return "";
      } else {
        return e.getTextContent();
      }
    };
    t.$hasAncestor = je;
    t.$hasUpdateTag = function (e) {
      return _r()._updateTags.has(e);
    };
    t.$insertNodes = function (e, t) {
      let n = er();
      if (n === null) {
        n = we().selectEnd();
      }
      return n.insertNodes(e, t);
    };
    t.$isBlockElementNode = Zn;
    t.$isDecoratorNode = Ar;
    t.$isElementNode = wr;
    t.$isInlineElementOrDecoratorNode = function (e) {
      return wr(e) && e.isInline() || Ar(e) && e.isInline();
    };
    t.$isLeafNode = ye;
    t.$isLineBreakNode = fn;
    t.$isNodeSelection = Kn;
    t.$isParagraphNode = function (e) {
      return e instanceof Pr;
    };
    t.$isRangeSelection = Fn;
    t.$isRootNode = Dr;
    t.$isRootOrShadowRoot = Ve;
    t.$isTabNode = function (e) {
      return e instanceof kn;
    };
    t.$isTextNode = wn;
    t.$nodesOfType = function (e) {
      var t = pr();
      let n = t._readOnly;
      let r = e.getType();
      t = t._nodeMap;
      let i = [];
      for (let [, o] of t) {
        if (o instanceof e && o.__type === r && (n || o.isAttached())) {
          i.push(o);
        }
      }
      return i;
    };
    t.$normalizeSelection__EXPERIMENTAL = at;
    t.$parseSerializedNode = function (e) {
      return yr(e, _r()._nodes);
    };
    t.$setCompositionKey = Ee;
    t.$setSelection = ke;
    t.$splitNode = tt;
    t.BLUR_COMMAND = I;
    t.CAN_REDO_COMMAND = {};
    t.CAN_UNDO_COMMAND = {};
    t.CLEAR_EDITOR_COMMAND = {};
    t.CLEAR_HISTORY_COMMAND = {};
    t.CLICK_COMMAND = r;
    t.COMMAND_PRIORITY_CRITICAL = 4;
    t.COMMAND_PRIORITY_EDITOR = 0;
    t.COMMAND_PRIORITY_HIGH = 3;
    t.COMMAND_PRIORITY_LOW = 1;
    t.COMMAND_PRIORITY_NORMAL = 2;
    t.CONTROLLED_TEXT_INSERTION_COMMAND = l;
    t.COPY_COMMAND = D;
    t.CUT_COMMAND = M;
    t.DELETE_CHARACTER_COMMAND = i;
    t.DELETE_LINE_COMMAND = d;
    t.DELETE_WORD_COMMAND = c;
    t.DEPRECATED_$computeGridMap = sr;
    t.DEPRECATED_$createGridSelection = function () {
      let e = new Dn("root", 0, "element");
      let t = new Dn("root", 0, "element");
      return new Bn("root", e, t);
    };
    t.DEPRECATED_$getNodeTriplet = function (e) {
      if (!(e instanceof Wr)) {
        if (e instanceof un) {
          if (!Kr(e = nt(e, Kr))) {
            L(114);
          }
        } else if (!Kr(e = nt(e.getNode(), Kr))) {
          L(114);
        }
      }
      let t = e.getParent();
      if (!Hr(t)) {
        L(115);
      }
      let n = t.getParent();
      if (!Yr(n)) {
        L(116);
      }
      return [e, t, n];
    };
    t.DEPRECATED_$isGridCellNode = Kr;
    t.DEPRECATED_$isGridNode = Yr;
    t.DEPRECATED_$isGridRowNode = Hr;
    t.DEPRECATED_$isGridSelection = zn;
    t.DEPRECATED_GridCellNode = Wr;
    t.DEPRECATED_GridNode = Ur;
    t.DEPRECATED_GridRowNode = jr;
    t.DRAGEND_COMMAND = R;
    t.DRAGOVER_COMMAND = k;
    t.DRAGSTART_COMMAND = w;
    t.DROP_COMMAND = O;
    t.DecoratorNode = Sr;
    t.ElementNode = Or;
    t.FOCUS_COMMAND = $;
    t.FORMAT_ELEMENT_COMMAND = {};
    t.FORMAT_TEXT_COMMAND = g;
    t.INDENT_CONTENT_COMMAND = {};
    t.INSERT_LINE_BREAK_COMMAND = o;
    t.INSERT_PARAGRAPH_COMMAND = s;
    t.INSERT_TAB_COMMAND = {};
    t.KEY_ARROW_DOWN_COMMAND = T;
    t.KEY_ARROW_LEFT_COMMAND = y;
    t.KEY_ARROW_RIGHT_COMMAND = _;
    t.KEY_ARROW_UP_COMMAND = v;
    t.KEY_BACKSPACE_COMMAND = x;
    t.KEY_DELETE_COMMAND = S;
    t.KEY_DOWN_COMMAND = p;
    t.KEY_ENTER_COMMAND = E;
    t.KEY_ESCAPE_COMMAND = b;
    t.KEY_MODIFIER_COMMAND = P;
    t.KEY_SPACE_COMMAND = C;
    t.KEY_TAB_COMMAND = A;
    t.LineBreakNode = cn;
    t.MOVE_TO_END = m;
    t.MOVE_TO_START = N;
    t.OUTDENT_CONTENT_COMMAND = {};
    t.PASTE_COMMAND = a;
    t.ParagraphNode = Pr;
    t.REDO_COMMAND = h;
    t.REMOVE_TEXT_COMMAND = u;
    t.RootNode = Rr;
    t.SELECTION_CHANGE_COMMAND = n;
    t.TabNode = kn;
    t.TextNode = Nn;
    t.UNDO_COMMAND = f;
    t.createCommand = function () {
      return {};
    };
    t.createEditor = function (e) {
      var t = e || {};
      var n = ar;
      var r = t.theme || {};
      let i = e === undefined ? n : t.parentEditor || null;
      let o = t.disableEvents || false;
      let s = Mr();
      let l = t.namespace || (i !== null ? i._config.namespace : $e());
      let a = t.editorState;
      let u = [Rr, Nn, cn, kn, Pr, ...(t.nodes || [])];
      let c = t.onError;
      t = t.editable === undefined || t.editable;
      if (e === undefined && n !== null) {
        e = n._nodes;
      } else {
        e = new Map();
        n = 0;
        e = new Map();
        n = 0;
        for (; n < u.length; n++) {
          let t = u[n];
          let r = null;
          var d = null;
          if (typeof t != "function") {
            t = (d = t).replace;
            r = d.with;
            d = d.withKlass ? d.withKlass : null;
          }
          let i = t.getType();
          let o = t.transform();
          let s = new Set();
          if (o !== null) {
            s.add(o);
          }
          e.set(i, {
            klass: t,
            replace: r,
            replaceWithKlass: d,
            transforms: s
          });
        }
      }
      r = new zr(s, i, e, {
        disableEvents: o,
        namespace: l,
        theme: r
      }, c || console.error, function (e) {
        let t = new Map();
        let n = new Set();
        e.forEach(e => {
          if ((e = e.klass.importDOM != null ? e.klass.importDOM.bind(e.klass) : null) != null && !n.has(e)) {
            n.add(e);
            var r = e();
            if (r !== null) {
              Object.keys(r).forEach(e => {
                let n = t.get(e);
                if (n === undefined) {
                  n = [];
                  t.set(e, n);
                }
                n.push(r[e]);
              });
            }
          }
        });
        return t;
      }(e), t);
      if (a !== undefined) {
        r._pendingEditorState = a;
        r._dirtyType = 2;
      }
      return r;
    };
    t.getNearestEditorFromDOMNode = he;
    t.isSelectionCapturedInDecoratorInput = ge;
    t.isSelectionWithinEditor = fe;
  },
  804279: () => {
    Prism.languages.c = Prism.languages.extend("clike", {
      comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
      },
      string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: true
      },
      keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
      function: /\b[a-z_]\w*(?=\s*\()/i,
      number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
      operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
    });
    Prism.languages.insertBefore("c", "string", {
      char: {
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: true
      }
    });
    Prism.languages.insertBefore("c", "string", {
      macro: {
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: true,
        greedy: true,
        alias: "property",
        inside: {
          string: [{
            pattern: /^(#\s*include\s*)<[^>]+>/,
            lookbehind: true
          }, Prism.languages.c.string],
          char: Prism.languages.c.char,
          comment: Prism.languages.c.comment,
          "macro-name": [{
            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
            lookbehind: true
          }, {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: true,
            alias: "function"
          }],
          directive: {
            pattern: /^(#\s*)[a-z]+/,
            lookbehind: true,
            alias: "keyword"
          },
          "directive-hash": /^#/,
          punctuation: /##|\\(?=[\r\n])/,
          expression: {
            pattern: /\S[\s\S]*/,
            inside: Prism.languages.c
          }
        }
      }
    });
    Prism.languages.insertBefore("c", "function", {
      constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
    });
    delete Prism.languages.c.boolean;
  },
  735433: () => {
    Prism.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
  },
  402731: () => {
    !function (e) {
      var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
      var n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
        return t.source;
      });
      e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
            return t.source;
          })),
          lookbehind: true
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: t,
        number: {
          pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
          greedy: true
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
      });
      e.languages.insertBefore("cpp", "string", {
        module: {
          pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
            return n;
          }) + ")"),
          lookbehind: true,
          greedy: true,
          inside: {
            string: /^[<"][\s\S]+/,
            operator: /:/,
            punctuation: /\./
          }
        },
        "raw-string": {
          pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
          alias: "string",
          greedy: true
        }
      });
      e.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
          pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
          inside: {
            function: /^\w+/,
            generic: {
              pattern: /<[\s\S]+/,
              alias: "class-name",
              inside: e.languages.cpp
            }
          }
        }
      });
      e.languages.insertBefore("cpp", "operator", {
        "double-colon": {
          pattern: /::/,
          alias: "punctuation"
        }
      });
      e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
          pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
          lookbehind: true,
          greedy: true,
          inside: e.languages.extend("cpp", {})
        }
      });
      e.languages.insertBefore("inside", "double-colon", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
      }, e.languages.cpp["base-clause"]);
    }(Prism);
  },
  115251: () => {
    !function (e) {
      var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
          }
        },
        url: {
          pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + t.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
          lookbehind: true
        },
        string: {
          pattern: t,
          greedy: true
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        punctuation: /[(){};:,]/
      };
      e.languages.css.atrule.inside.rest = e.languages.css;
      var n = e.languages.markup;
      if (n) {
        n.tag.addInlined("style", "css");
        n.tag.addAttribute("style", "css");
      }
    }(Prism);
  },
  652503: () => {
    !function (e) {
      var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;
      var n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;
      var r = {
        pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
        lookbehind: true,
        inside: {
          namespace: {
            pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
            inside: {
              punctuation: /\./
            }
          },
          punctuation: /\./
        }
      };
      e.languages.java = e.languages.extend("clike", {
        string: {
          pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
          lookbehind: true,
          greedy: true
        },
        "class-name": [r, {
          pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: true,
          inside: r.inside
        }, {
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
          lookbehind: true,
          inside: r.inside
        }],
        keyword: t,
        function: [e.languages.clike.function, {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: true
        }],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
          pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
          lookbehind: true
        }
      });
      e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
          pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
          greedy: true,
          alias: "string"
        },
        char: {
          pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
          greedy: true
        }
      });
      e.languages.insertBefore("java", "class-name", {
        annotation: {
          pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
          lookbehind: true,
          alias: "punctuation"
        },
        generics: {
          pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
          inside: {
            "class-name": r,
            keyword: t,
            punctuation: /[<>(),.:]/,
            operator: /[?&|]/
          }
        },
        import: [{
          pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: true,
          inside: {
            namespace: r.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        }, {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: true,
          alias: "static",
          inside: {
            namespace: r.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        }],
        namespace: {
          pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function () {
            return t.source;
          })),
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        }
      });
    }(Prism);
  },
  939980: () => {
    Prism.languages.javascript = Prism.languages.extend("clike", {
      "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }],
      keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
        lookbehind: true
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: Prism.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    });
    Prism.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    });
    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined("script", "javascript");
      Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
    }
    Prism.languages.js = Prism.languages.javascript;
  },
  424064: () => {
    !function (e) {
      var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function n(e) {
        e = e.replace(/<inner>/g, function () {
          return t;
        });
        return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")");
      }
      var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
      var i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
        return r;
      });
      var o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      e.languages.markdown = e.languages.extend("markup", {});
      e.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: true,
          greedy: true,
          inside: {
            punctuation: /^---|---$/,
            "front-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: e.languages.yaml
            }
          }
        },
        blockquote: {
          pattern: /^>(?:[\t ]*>)*/m,
          alias: "punctuation"
        },
        table: {
          pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
          inside: {
            "table-data-rows": {
              pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"),
              lookbehind: true,
              inside: {
                "table-data": {
                  pattern: RegExp(r),
                  inside: e.languages.markdown
                },
                punctuation: /\|/
              }
            },
            "table-line": {
              pattern: RegExp("^(" + i + ")" + o + "$"),
              lookbehind: true,
              inside: {
                punctuation: /\||:?-{3,}:?/
              }
            },
            "table-header-row": {
              pattern: RegExp("^" + i + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(r),
                  alias: "important",
                  inside: e.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [{
          pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: true,
          alias: "keyword"
        }, {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: true,
          inside: {
            "code-block": {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: true
            },
            "code-language": {
              pattern: /^(```).+/,
              lookbehind: true
            },
            punctuation: /```/
          }
        }],
        title: [{
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: "important",
          inside: {
            punctuation: /==+$|--+$/
          }
        }, {
          pattern: /(^\s*)#.+/m,
          lookbehind: true,
          alias: "important",
          inside: {
            punctuation: /^#+|#+$/
          }
        }],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        list: {
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        "url-reference": {
          pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: {
              pattern: /^(!?\[)[^\]]+/,
              lookbehind: true
            },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: "url"
        },
        bold: {
          pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: true,
              inside: {}
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: true,
              inside: {}
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: true,
              inside: {}
            },
            punctuation: /~~?/
          }
        },
        "code-snippet": {
          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: true,
          greedy: true,
          alias: ["code", "keyword"]
        },
        url: {
          pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: true,
              inside: {}
            },
            variable: {
              pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
              lookbehind: true
            },
            url: {
              pattern: /(^\]\()[^\s)]+/,
              lookbehind: true
            },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: true
            }
          }
        }
      });
      ["url", "bold", "italic", "strike"].forEach(function (t) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (n) {
          if (t !== n) {
            e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n];
          }
        });
      });
      e.hooks.add("after-tokenize", function (e) {
        if (!(e.language !== "markdown" && e.language !== "md")) {
          (function e(t) {
            if (t && typeof t != "string") {
              for (var n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                if (i.type === "code") {
                  var o = i.content[1];
                  var s = i.content[3];
                  if (o && s && o.type === "code-language" && s.type === "code-block" && typeof o.content == "string") {
                    var l = o.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                    var a = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                    if (s.alias) {
                      if (typeof s.alias == "string") {
                        s.alias = [s.alias, a];
                      } else {
                        s.alias.push(a);
                      }
                    } else {
                      s.alias = [a];
                    }
                  }
                } else {
                  e(i.content);
                }
              }
            }
          })(e.tokens);
        }
      });
      e.hooks.add("wrap", function (t) {
        if (t.type === "code-block") {
          for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
            var o = t.classes[r];
            var u = /language-(.+)/.exec(o);
            if (u) {
              n = u[1];
              break;
            }
          }
          var c;
          var d = e.languages[n];
          if (d) {
            t.content = e.highlight((c = t.content, c.replace(s, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
              var n;
              if ((t = t.toLowerCase())[0] === "#") {
                n = t[1] === "x" ? parseInt(t.slice(2), 16) : Number(t.slice(1));
                return a(n);
              }
              var r = l[t];
              return r || e;
            })), d, n);
          } else if (n && n !== "none" && e.plugins.autoloader) {
            var g = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 10000000000000000);
            t.attributes.id = g;
            e.plugins.autoloader.loadLanguages(n, function () {
              var t = document.getElementById(g);
              if (t) {
                t.innerHTML = e.highlight(t.textContent, e.languages[n], n);
              }
            });
          }
        }
      });
      var s = RegExp(e.languages.markup.tag.pattern.source, "gi");
      var l = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: "\""
      };
      var a = String.fromCodePoint || String.fromCharCode;
      e.languages.md = e.languages.markdown;
    }(Prism);
  },
  524335: () => {
    Prism.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      }, /&#x?[\da-f]{1,8};/i]
    };
    Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
    Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
    Prism.hooks.add("wrap", function (e) {
      if (e.type === "entity") {
        e.attributes.title = e.content.replace(/&amp;/, "&");
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      value: function (e, t) {
        var n = {
          ["language-" + t]: {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism.languages[t]
          },
          cdata: /^<!\[CDATA\[|\]\]>$/i
        };
        var r = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: n
          }
        };
        r["language-" + t] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[t]
        };
        var i = {};
        i[e] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
            return e;
          }), "i"),
          lookbehind: true,
          greedy: true,
          inside: r
        };
        Prism.languages.insertBefore("markup", "cdata", i);
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
      value: function (e, t) {
        Prism.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [t, "language-" + t],
                  inside: Prism.languages[t]
                },
                punctuation: [{
                  pattern: /^=/,
                  alias: "attr-equals"
                }, /"|'/]
              }
            }
          }
        });
      }
    });
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    Prism.languages.xml = Prism.languages.extend("markup", {});
    Prism.languages.ssml = Prism.languages.xml;
    Prism.languages.atom = Prism.languages.xml;
    Prism.languages.rss = Prism.languages.xml;
  },
  11426: () => {
    Prism.languages.objectivec = Prism.languages.extend("c", {
      string: {
        pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: true
      },
      keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
      operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
    });
    delete Prism.languages.objectivec["class-name"];
    Prism.languages.objc = Prism.languages.objectivec;
  },
  180366: () => {
    Prism.languages.python = {
      comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true
      },
      "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
            lookbehind: true,
            inside: {
              "format-spec": {
                pattern: /(:)[^:(){}]+(?=\}$)/,
                lookbehind: true
              },
              "conversion-option": {
                pattern: /![sra](?=[:}]$)/,
                alias: "punctuation"
              },
              rest: null
            }
          },
          string: /[\s\S]+/
        }
      },
      "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: true,
        alias: "string"
      },
      string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: true
      },
      function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: true
      },
      "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: true
      },
      decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: true,
        alias: ["annotation", "punctuation"],
        inside: {
          punctuation: /\./
        }
      },
      keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
      builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
      boolean: /\b(?:False|None|True)\b/,
      number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
      operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
      punctuation: /[{}[\];(),.:]/
    };
    Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
    Prism.languages.py = Prism.languages.python;
  },
  470767: () => {
    !function (e) {
      for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++) {
        t = t.replace(/<self>/g, function () {
          return t;
        });
      }
      t = t.replace(/<self>/g, function () {
        return /[^\s\S]/.source;
      });
      e.languages.rust = {
        comment: [{
          pattern: RegExp(/(^|[^\\])/.source + t),
          lookbehind: true,
          greedy: true
        }, {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }],
        string: {
          pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
          greedy: true
        },
        char: {
          pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
          greedy: true
        },
        attribute: {
          pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
          greedy: true,
          alias: "attr-name",
          inside: {
            string: null
          }
        },
        "closure-params": {
          pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
          lookbehind: true,
          greedy: true,
          inside: {
            "closure-punctuation": {
              pattern: /^\||\|$/,
              alias: "punctuation"
            },
            rest: null
          }
        },
        "lifetime-annotation": {
          pattern: /'\w+/,
          alias: "symbol"
        },
        "fragment-specifier": {
          pattern: /(\$\w+:)[a-z]+/,
          lookbehind: true,
          alias: "punctuation"
        },
        variable: /\$\w+/,
        "function-definition": {
          pattern: /(\bfn\s+)\w+/,
          lookbehind: true,
          alias: "function"
        },
        "type-definition": {
          pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
          lookbehind: true,
          alias: "class-name"
        },
        "module-declaration": [{
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: true,
          alias: "namespace"
        }, {
          pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: true,
          alias: "namespace",
          inside: {
            punctuation: /::/
          }
        }],
        keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
        macro: {
          pattern: /\b\w+!/,
          alias: "property"
        },
        constant: /\b[A-Z_][A-Z_\d]+\b/,
        "class-name": /\b[A-Z]\w*\b/,
        namespace: {
          pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
          inside: {
            punctuation: /::/
          }
        },
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
      };
      e.languages.rust["closure-params"].inside.rest = e.languages.rust;
      e.languages.rust.attribute.inside.string = e.languages.rust.string;
    }(Prism);
  },
  335266: () => {
    Prism.languages.sql = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: true
      },
      variable: [{
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: true
      }, /@[\w.$]+/],
      string: {
        pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
        greedy: true,
        lookbehind: true
      },
      identifier: {
        pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
        greedy: true,
        lookbehind: true,
        inside: {
          punctuation: /^`|`$/
        }
      },
      function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
      keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
      boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
      number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
      operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
      punctuation: /[;[\]()`,.]/
    };
  },
  590874: () => {
    Prism.languages.swift = {
      comment: {
        pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
        lookbehind: true,
        greedy: true
      },
      "string-literal": [{
        pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: true,
            inside: null
          },
          "interpolation-punctuation": {
            pattern: /^\)|\\\($/,
            alias: "punctuation"
          },
          punctuation: /\\(?=[\r\n])/,
          string: /[\s\S]+/
        }
      }, {
        pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: true,
            inside: null
          },
          "interpolation-punctuation": {
            pattern: /^\)|\\#+\($/,
            alias: "punctuation"
          },
          string: /[\s\S]+/
        }
      }],
      directive: {
        pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ \t]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"),
        alias: "property",
        inside: {
          "directive-name": /^#\w+/,
          boolean: /\b(?:false|true)\b/,
          number: /\b\d+(?:\.\d+)*\b/,
          operator: /!|&&|\|\||[<>]=?/,
          punctuation: /[(),]/
        }
      },
      literal: {
        pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
        alias: "constant"
      },
      "other-directive": {
        pattern: /#\w+\b/,
        alias: "property"
      },
      attribute: {
        pattern: /@\w+/,
        alias: "atrule"
      },
      "function-definition": {
        pattern: /(\bfunc\s+)\w+/,
        lookbehind: true,
        alias: "function"
      },
      label: {
        pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
        lookbehind: true,
        alias: "important"
      },
      keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
      boolean: /\b(?:false|true)\b/,
      nil: {
        pattern: /\bnil\b/,
        alias: "constant"
      },
      "short-argument": /\$\d+\b/,
      omit: {
        pattern: /\b_\b/,
        alias: "keyword"
      },
      number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
      "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
      function: /\b[a-z_]\w*(?=\s*\()/i,
      constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
      operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
      punctuation: /[{}[\]();,.:\\]/
    };
    Prism.languages.swift["string-literal"].forEach(function (e) {
      e.inside.interpolation.inside = Prism.languages.swift;
    });
  },
  496836: () => {
    !function (e) {
      e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      });
      e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
      delete e.languages.typescript.parameter;
      delete e.languages.typescript["literal-property"];
      var t = e.languages.extend("typescript", {});
      delete t["class-name"];
      e.languages.typescript["class-name"].inside = t;
      e.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: {
              pattern: /^@/,
              alias: "operator"
            },
            function: /^[\s\S]+/
          }
        },
        "generic-function": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: true,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: {
              pattern: /<[\s\S]+/,
              alias: "class-name",
              inside: t
            }
          }
        }
      });
      e.languages.ts = e.languages.typescript;
    }(Prism);
  },
  915660: (e, t, n) => {
    var r = function (e) {
      var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var n = 0;
      var r = {};
      var i = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(t) {
            if (t instanceof o) {
              return new o(t.type, e(t.content), t.alias);
            } else if (Array.isArray(t)) {
              return t.map(e);
            } else {
              return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            if (!e.__id) {
              Object.defineProperty(e, "__id", {
                value: ++n
              });
            }
            return e.__id;
          },
          clone: function e(t, n) {
            var r;
            var o;
            n = n || {};
            switch (i.util.type(t)) {
              case "Object":
                o = i.util.objId(t);
                if (n[o]) {
                  return n[o];
                }
                r = {};
                n[o] = r;
                for (var s in t) {
                  if (t.hasOwnProperty(s)) {
                    r[s] = e(t[s], n);
                  }
                }
                return r;
              case "Array":
                o = i.util.objId(t);
                if (n[o]) {
                  return n[o];
                } else {
                  r = [];
                  n[o] = r;
                  t.forEach(function (t, i) {
                    r[i] = e(t, n);
                  });
                  return r;
                }
              default:
                return t;
            }
          },
          getLanguage: function (e) {
            for (; e;) {
              var n = t.exec(e.className);
              if (n) {
                return n[1].toLowerCase();
              }
              e = e.parentElement;
            }
            return "none";
          },
          setLanguage: function (e, n) {
            e.className = e.className.replace(RegExp(t, "gi"), "");
            e.classList.add("language-" + n);
          },
          currentScript: function () {
            if (typeof document == "undefined") {
              return null;
            }
            if ("currentScript" in document) {
              return document.currentScript;
            }
            try {
              throw new Error();
            } catch (r) {
              var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
              if (e) {
                var t = document.getElementsByTagName("script");
                for (var n in t) {
                  if (t[n].src == e) {
                    return t[n];
                  }
                }
              }
              return null;
            }
          },
          isActive: function (e, t, n) {
            for (var r = "no-" + t; e;) {
              var i = e.classList;
              if (i.contains(t)) {
                return true;
              }
              if (i.contains(r)) {
                return false;
              }
              e = e.parentElement;
            }
            return !!n;
          }
        },
        languages: {
          plain: r,
          plaintext: r,
          text: r,
          txt: r,
          extend: function (e, t) {
            var n = i.util.clone(i.languages[e]);
            for (var r in t) {
              n[r] = t[r];
            }
            return n;
          },
          insertBefore: function (e, t, n, r) {
            var o = (r = r || i.languages)[e];
            var s = {};
            for (var l in o) {
              if (o.hasOwnProperty(l)) {
                if (l == t) {
                  for (var a in n) {
                    if (n.hasOwnProperty(a)) {
                      s[a] = n[a];
                    }
                  }
                }
                if (!n.hasOwnProperty(l)) {
                  s[l] = o[l];
                }
              }
            }
            var u = r[e];
            r[e] = s;
            i.languages.DFS(i.languages, function (t, n) {
              if (n === u && t != e) {
                this[t] = s;
              }
            });
            return s;
          },
          DFS: function e(t, n, r, o) {
            o = o || {};
            var s = i.util.objId;
            for (var l in t) {
              if (t.hasOwnProperty(l)) {
                n.call(t, l, t[l], r || l);
                var a = t[l];
                var u = i.util.type(a);
                if (u !== "Object" || o[s(a)]) {
                  if (!(u !== "Array" || o[s(a)])) {
                    o[s(a)] = true;
                    e(a, n, l, o);
                  }
                } else {
                  o[s(a)] = true;
                  e(a, n, null, o);
                }
              }
            }
          }
        },
        plugins: {},
        highlightAll: function (e, t) {
          i.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function (e, t, n) {
          var r = {
            callback: n,
            container: e,
            selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
          };
          i.hooks.run("before-highlightall", r);
          r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector));
          i.hooks.run("before-all-elements-highlight", r);
          for (var o, s = 0; o = r.elements[s++];) {
            i.highlightElement(o, t === true, r.callback);
          }
        },
        highlightElement: function (t, n, r) {
          var o = i.util.getLanguage(t);
          var s = i.languages[o];
          i.util.setLanguage(t, o);
          var l = t.parentElement;
          if (l && l.nodeName.toLowerCase() === "pre") {
            i.util.setLanguage(l, o);
          }
          var a = {
            element: t,
            language: o,
            grammar: s,
            code: t.textContent
          };
          function u(e) {
            a.highlightedCode = e;
            i.hooks.run("before-insert", a);
            a.element.innerHTML = a.highlightedCode;
            i.hooks.run("after-highlight", a);
            i.hooks.run("complete", a);
            if (r) {
              r.call(a.element);
            }
          }
          i.hooks.run("before-sanity-check", a);
          if ((l = a.element.parentElement) && l.nodeName.toLowerCase() === "pre" && !l.hasAttribute("tabindex")) {
            l.setAttribute("tabindex", "0");
          }
          if (!a.code) {
            i.hooks.run("complete", a);
            return void (r && r.call(a.element));
          }
          i.hooks.run("before-highlight", a);
          if (a.grammar) {
            if (n && e.Worker) {
              var c = new Worker(i.filename);
              c.onmessage = function (e) {
                u(e.data);
              };
              c.postMessage(JSON.stringify({
                language: a.language,
                code: a.code,
                immediateClose: true
              }));
            } else {
              u(i.highlight(a.code, a.grammar, a.language));
            }
          } else {
            u(i.util.encode(a.code));
          }
        },
        highlight: function (e, t, n) {
          var r = {
            code: e,
            grammar: t,
            language: n
          };
          i.hooks.run("before-tokenize", r);
          if (!r.grammar) {
            throw new Error("The language \"" + r.language + "\" has no grammar.");
          }
          r.tokens = i.tokenize(r.code, r.grammar);
          i.hooks.run("after-tokenize", r);
          return o.stringify(i.util.encode(r.tokens), r.language);
        },
        tokenize: function (e, t) {
          var n = t.rest;
          if (n) {
            for (var r in n) {
              t[r] = n[r];
            }
            delete t.rest;
          }
          var i = new a();
          u(i, i.head, e);
          l(e, i, t, i.head, 0);
          return function (e) {
            var t = [];
            var n = e.head.next;
            for (; n !== e.tail;) {
              t.push(n.value);
              n = n.next;
            }
            return t;
          }(i);
        },
        hooks: {
          all: {},
          add: function (e, t) {
            var n = i.hooks.all;
            n[e] = n[e] || [];
            n[e].push(t);
          },
          run: function (e, t) {
            var n = i.hooks.all[e];
            if (n && n.length) {
              for (var r, o = 0; r = n[o++];) {
                r(t);
              }
            }
          }
        },
        Token: o
      };
      function o(e, t, n, r) {
        this.type = e;
        this.content = t;
        this.alias = n;
        this.length = (r || "").length | 0;
      }
      function s(e, t, n, r) {
        e.lastIndex = t;
        var i = e.exec(n);
        if (i && r && i[1]) {
          var o = i[1].length;
          i.index += o;
          i[0] = i[0].slice(o);
        }
        return i;
      }
      function l(e, t, n, r, a, d) {
        for (var g in n) {
          if (n.hasOwnProperty(g) && n[g]) {
            var f = n[g];
            f = Array.isArray(f) ? f : [f];
            for (var h = 0; h < f.length; ++h) {
              if (d && d.cause == g + "," + h) {
                return;
              }
              var p = f[h];
              var _ = p.inside;
              var m = !!p.lookbehind;
              var y = !!p.greedy;
              var N = p.alias;
              if (y && !p.pattern.global) {
                var v = p.pattern.toString().match(/[imsuy]*$/)[0];
                p.pattern = RegExp(p.pattern.source, v + "g");
              }
              for (var T = p.pattern || p, E = r.next, C = a; E !== t.tail && !(d && C >= d.reach); C += E.value.length, E = E.next) {
                var x = E.value;
                if (t.length > e.length) {
                  return;
                }
                if (!(x instanceof o)) {
                  var b;
                  var S = 1;
                  if (y) {
                    if (!(b = s(T, C, e, m)) || b.index >= e.length) {
                      break;
                    }
                    var A = b.index;
                    var O = b.index + b[0].length;
                    var w = C;
                    for (w += E.value.length; A >= w;) {
                      w += (E = E.next).value.length;
                    }
                    C = w -= E.value.length;
                    if (E.value instanceof o) {
                      continue;
                    }
                    for (var k = E; k !== t.tail && (w < O || typeof k.value == "string"); k = k.next) {
                      S++;
                      w += k.value.length;
                    }
                    S--;
                    x = e.slice(C, w);
                    b.index -= C;
                  } else if (!(b = s(T, 0, x, m))) {
                    continue;
                  }
                  A = b.index;
                  var R = b[0];
                  var D = x.slice(0, A);
                  var M = x.slice(A + R.length);
                  var $ = C + x.length;
                  if (d && $ > d.reach) {
                    d.reach = $;
                  }
                  var I = E.prev;
                  if (D) {
                    I = u(t, I, D);
                    C += D.length;
                  }
                  c(t, I, S);
                  E = u(t, I, new o(g, _ ? i.tokenize(R, _) : R, N, R));
                  if (M) {
                    u(t, E, M);
                  }
                  if (S > 1) {
                    var P = {
                      cause: g + "," + h,
                      reach: $
                    };
                    l(e, t, n, E.prev, C, P);
                    if (d && P.reach > d.reach) {
                      d.reach = P.reach;
                    }
                  }
                }
              }
            }
          }
        }
      }
      function a() {
        var e = {
          value: null,
          prev: null,
          next: null
        };
        var t = {
          value: null,
          prev: e,
          next: null
        };
        e.next = t;
        this.head = e;
        this.tail = t;
        this.length = 0;
      }
      function u(e, t, n) {
        var r = t.next;
        var i = {
          value: n,
          prev: t,
          next: r
        };
        t.next = i;
        r.prev = i;
        e.length++;
        return i;
      }
      function c(e, t, n) {
        for (var r = t.next, i = 0; i < n && r !== e.tail; i++) {
          r = r.next;
        }
        t.next = r;
        r.prev = t;
        e.length -= i;
      }
      e.Prism = i;
      o.stringify = function e(t, n) {
        if (typeof t == "string") {
          return t;
        }
        if (Array.isArray(t)) {
          var r = "";
          t.forEach(function (t) {
            r += e(t, n);
          });
          return r;
        }
        var o = {
          type: t.type,
          content: e(t.content, n),
          tag: "span",
          classes: ["token", t.type],
          attributes: {},
          language: n
        };
        var s = t.alias;
        if (s) {
          if (Array.isArray(s)) {
            Array.prototype.push.apply(o.classes, s);
          } else {
            o.classes.push(s);
          }
        }
        i.hooks.run("wrap", o);
        var l = "";
        for (var a in o.attributes) {
          l += " " + a + "=\"" + (o.attributes[a] || "").replace(/"/g, "&quot;") + "\"";
        }
        return "<" + o.tag + " class=\"" + o.classes.join(" ") + "\"" + l + ">" + o.content + "</" + o.tag + ">";
      };
      if (!e.document) {
        if (e.addEventListener) {
          if (!i.disableWorkerMessageHandler) {
            e.addEventListener("message", function (t) {
              var n = JSON.parse(t.data);
              var r = n.language;
              var o = n.code;
              var s = n.immediateClose;
              e.postMessage(i.highlight(o, i.languages[r], r));
              if (s) {
                e.close();
              }
            }, false);
          }
          return i;
        } else {
          return i;
        }
      }
      var d = i.util.currentScript();
      function g() {
        if (!i.manual) {
          i.highlightAll();
        }
      }
      if (d) {
        i.filename = d.src;
        if (d.hasAttribute("data-manual")) {
          i.manual = true;
        }
      }
      if (!i.manual) {
        var f = document.readyState;
        if (f === "loading" || f === "interactive" && d && d.defer) {
          document.addEventListener("DOMContentLoaded", g);
        } else if (window.requestAnimationFrame) {
          window.requestAnimationFrame(g);
        } else {
          window.setTimeout(g, 16);
        }
      }
      return i;
    }(typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {});
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    if (e.exports) {
      e.exports = r;
    }
    if (n.g !== undefined) {
      n.g.Prism = r;
    }
    r.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      }, /&#x?[\da-f]{1,8};/i]
    };
    r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity;
    r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup;
    r.hooks.add("wrap", function (e) {
      if (e.type === "entity") {
        e.attributes.title = e.content.replace(/&amp;/, "&");
      }
    });
    Object.defineProperty(r.languages.markup.tag, "addInlined", {
      value: function (e, t) {
        var n = {
          ["language-" + t]: {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: r.languages[t]
          },
          cdata: /^<!\[CDATA\[|\]\]>$/i
        };
        var i = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: n
          }
        };
        i["language-" + t] = {
          pattern: /[\s\S]+/,
          inside: r.languages[t]
        };
        var o = {};
        o[e] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
            return e;
          }), "i"),
          lookbehind: true,
          greedy: true,
          inside: i
        };
        r.languages.insertBefore("markup", "cdata", o);
      }
    });
    Object.defineProperty(r.languages.markup.tag, "addAttribute", {
      value: function (e, t) {
        r.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [t, "language-" + t],
                  inside: r.languages[t]
                },
                punctuation: [{
                  pattern: /^=/,
                  alias: "attr-equals"
                }, /"|'/]
              }
            }
          }
        });
      }
    });
    r.languages.html = r.languages.markup;
    r.languages.mathml = r.languages.markup;
    r.languages.svg = r.languages.markup;
    r.languages.xml = r.languages.extend("markup", {});
    r.languages.ssml = r.languages.xml;
    r.languages.atom = r.languages.xml;
    r.languages.rss = r.languages.xml;
    (function (e) {
      var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
          }
        },
        url: {
          pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + t.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
          lookbehind: true
        },
        string: {
          pattern: t,
          greedy: true
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        punctuation: /[(){};:,]/
      };
      e.languages.css.atrule.inside.rest = e.languages.css;
      var n = e.languages.markup;
      if (n) {
        n.tag.addInlined("style", "css");
        n.tag.addAttribute("style", "css");
      }
    })(r);
    r.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
    r.languages.javascript = r.languages.extend("clike", {
      "class-name": [r.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }],
      keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
        lookbehind: true
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    r.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: r.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: r.languages.javascript
      }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: r.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: r.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: r.languages.javascript
      }],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    r.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: r.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    });
    r.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    });
    if (r.languages.markup) {
      r.languages.markup.tag.addInlined("script", "javascript");
      r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
    }
    r.languages.js = r.languages.javascript;
    (function () {
      if (r !== undefined && typeof document != "undefined") {
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var e = {
          js: "javascript",
          py: "python",
          rb: "ruby",
          ps1: "powershell",
          psm1: "powershell",
          sh: "bash",
          bat: "batch",
          h: "c",
          tex: "latex"
        };
        var t = "data-src-status";
        var n = "loading";
        var i = "loaded";
        var o = "pre[data-src]:not([data-src-status=\"loaded\"]):not([data-src-status=\"loading\"])";
        r.hooks.add("before-highlightall", function (e) {
          e.selector += ", " + o;
        });
        r.hooks.add("before-sanity-check", function (s) {
          var l = s.element;
          if (l.matches(o)) {
            s.code = "";
            l.setAttribute(t, n);
            var a = l.appendChild(document.createElement("CODE"));
            a.textContent = "Loading…";
            var u = l.getAttribute("data-src");
            var c = s.language;
            if (c === "none") {
              var d = (/\.(\w+)$/.exec(u) || [, "none"])[1];
              c = e[d] || d;
            }
            r.util.setLanguage(a, c);
            r.util.setLanguage(l, c);
            var g = r.plugins.autoloader;
            if (g) {
              g.loadLanguages(c);
            }
            (function (e, t, n) {
              var r = new XMLHttpRequest();
              r.open("GET", e, true);
              r.onreadystatechange = function () {
                if (r.readyState == 4) {
                  if (r.status < 400 && r.responseText) {
                    t(r.responseText);
                  } else if (r.status >= 400) {
                    n("✖ Error " + r.status + " while fetching file: " + r.statusText);
                  } else {
                    n("✖ Error: File does not exist or is empty");
                  }
                }
              };
              r.send(null);
            })(u, function (e) {
              l.setAttribute(t, i);
              var n = function (e) {
                var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
                if (t) {
                  var n = Number(t[1]);
                  var r = t[2];
                  var i = t[3];
                  if (r) {
                    if (i) {
                      return [n, Number(i)];
                    } else {
                      return [n, undefined];
                    }
                  } else {
                    return [n, n];
                  }
                }
              }(l.getAttribute("data-range"));
              if (n) {
                var o = e.split(/\r\n?|\n/g);
                var s = n[0];
                var u = n[1] == null ? o.length : n[1];
                if (s < 0) {
                  s += o.length;
                }
                s = Math.max(0, Math.min(s - 1, o.length));
                if (u < 0) {
                  u += o.length;
                }
                u = Math.max(0, Math.min(u, o.length));
                e = o.slice(s, u).join("\n");
                if (!l.hasAttribute("data-start")) {
                  l.setAttribute("data-start", String(s + 1));
                }
              }
              a.textContent = e;
              r.highlightElement(a);
            }, function (e) {
              l.setAttribute(t, "failed");
              a.textContent = e;
            });
          }
        });
        r.plugins.fileHighlight = {
          highlight: function (e) {
            for (var t, n = (e || document).querySelectorAll(o), i = 0; t = n[i++];) {
              r.highlightElement(t);
            }
          }
        };
        var s = false;
        r.fileHighlight = function () {
          if (!s) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            s = true;
          }
          r.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      }
    })();
  },
  375933: (e, t, n) => {
    var r;
    !function () {
      function i(e, t, n) {
        return e.call.apply(e.bind, arguments);
      }
      function o(e, t, n) {
        if (!e) {
          throw Error();
        }
        if (arguments.length > 2) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function () {
            var n = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(n, r);
            return e.apply(t, n);
          };
        }
        return function () {
          return e.apply(t, arguments);
        };
      }
      function s(e, t, n) {
        return (s = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? i : o).apply(null, arguments);
      }
      var l = Date.now || function () {
        return +new Date();
      };
      function a(e, t) {
        this.a = e;
        this.o = t || e;
        this.c = this.o.document;
      }
      var u = !!window.FontFace;
      function c(e, t, n, r) {
        t = e.c.createElement(t);
        if (n) {
          for (var i in n) {
            if (n.hasOwnProperty(i)) {
              if (i == "style") {
                t.style.cssText = n[i];
              } else {
                t.setAttribute(i, n[i]);
              }
            }
          }
        }
        if (r) {
          t.appendChild(e.c.createTextNode(r));
        }
        return t;
      }
      function d(e, t, n) {
        if (!(e = e.c.getElementsByTagName(t)[0])) {
          e = document.documentElement;
        }
        e.insertBefore(n, e.lastChild);
      }
      function g(e) {
        if (e.parentNode) {
          e.parentNode.removeChild(e);
        }
      }
      function f(e, t, n) {
        t = t || [];
        n = n || [];
        for (var r = e.className.split(/\s+/), i = 0; i < t.length; i += 1) {
          for (var o = false, s = 0; s < r.length; s += 1) {
            if (t[i] === r[s]) {
              o = true;
              break;
            }
          }
          if (!o) {
            r.push(t[i]);
          }
        }
        t = [];
        i = 0;
        for (; i < r.length; i += 1) {
          o = false;
          s = 0;
          for (; s < n.length; s += 1) {
            if (r[i] === n[s]) {
              o = true;
              break;
            }
          }
          if (!o) {
            t.push(r[i]);
          }
        }
        e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      function h(e, t) {
        for (var n = e.className.split(/\s+/), r = 0, i = n.length; r < i; r++) {
          if (n[r] == t) {
            return true;
          }
        }
        return false;
      }
      function p(e, t, n) {
        function r() {
          if (l && i && o) {
            l(s);
            l = null;
          }
        }
        t = c(e, "link", {
          rel: "stylesheet",
          href: t,
          media: "all"
        });
        var i = false;
        var o = true;
        var s = null;
        var l = n || null;
        if (u) {
          t.onload = function () {
            i = true;
            r();
          };
          t.onerror = function () {
            i = true;
            s = Error("Stylesheet failed to load");
            r();
          };
        } else {
          setTimeout(function () {
            i = true;
            r();
          }, 0);
        }
        d(e, "head", t);
      }
      function _(e, t, n, r) {
        var i = e.c.getElementsByTagName("head")[0];
        if (i) {
          var o = c(e, "script", {
            src: t
          });
          var s = false;
          o.onload = o.onreadystatechange = function () {
            if (!(s || this.readyState && this.readyState != "loaded" && this.readyState != "complete")) {
              s = true;
              if (n) {
                n(null);
              }
              o.onload = o.onreadystatechange = null;
              if (o.parentNode.tagName == "HEAD") {
                i.removeChild(o);
              }
            }
          };
          i.appendChild(o);
          setTimeout(function () {
            if (!s) {
              s = true;
              if (n) {
                n(Error("Script load timeout"));
              }
            }
          }, r || 5000);
          return o;
        }
        return null;
      }
      function m() {
        this.a = 0;
        this.c = null;
      }
      function y(e) {
        e.a++;
        return function () {
          e.a--;
          v(e);
        };
      }
      function N(e, t) {
        e.c = t;
        v(e);
      }
      function v(e) {
        if (e.a == 0 && e.c) {
          e.c();
          e.c = null;
        }
      }
      function T(e) {
        this.a = e || "-";
      }
      function E(e, t) {
        this.c = e;
        this.f = 4;
        this.a = "n";
        var n = (t || "n4").match(/^([nio])([1-9])$/i);
        if (n) {
          this.a = n[1];
          this.f = parseInt(n[2], 10);
        }
      }
      function C(e) {
        var t = [];
        e = e.split(/,\s*/);
        for (var n = 0; n < e.length; n++) {
          var r = e[n].replace(/['"]/g, "");
          if (r.indexOf(" ") != -1 || /^\d/.test(r)) {
            t.push("'" + r + "'");
          } else {
            t.push(r);
          }
        }
        return t.join(",");
      }
      function x(e) {
        return e.a + e.f;
      }
      function b(e) {
        var t = "normal";
        if (e.a === "o") {
          t = "oblique";
        } else if (e.a === "i") {
          t = "italic";
        }
        return t;
      }
      function S(e) {
        var t = 4;
        var n = "n";
        var r = null;
        if (e) {
          if ((r = e.match(/(normal|oblique|italic)/i)) && r[1]) {
            n = r[1].substr(0, 1).toLowerCase();
          }
          if ((r = e.match(/([1-9]00|normal|bold)/i)) && r[1]) {
            if (/bold/i.test(r[1])) {
              t = 7;
            } else if (/[1-9]00/.test(r[1])) {
              t = parseInt(r[1].substr(0, 1), 10);
            }
          }
        }
        return n + t;
      }
      function A(e, t) {
        this.c = e;
        this.f = e.o.document.documentElement;
        this.h = t;
        this.a = new T("-");
        this.j = t.events !== false;
        this.g = t.classes !== false;
      }
      function O(e) {
        if (e.g) {
          var t = h(e.f, e.a.c("wf", "active"));
          var n = [];
          var r = [e.a.c("wf", "loading")];
          if (!t) {
            n.push(e.a.c("wf", "inactive"));
          }
          f(e.f, n, r);
        }
        w(e, "inactive");
      }
      function w(e, t, n) {
        if (e.j && e.h[t]) {
          if (n) {
            e.h[t](n.c, x(n));
          } else {
            e.h[t]();
          }
        }
      }
      function k() {
        this.c = {};
      }
      function R(e, t) {
        this.c = e;
        this.f = t;
        this.a = c(this.c, "span", {
          "aria-hidden": "true"
        }, this.f);
      }
      function D(e) {
        d(e.c, "body", e.a);
      }
      function M(e) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + C(e.c) + ";font-style:" + b(e) + ";font-weight:" + e.f + "00;";
      }
      function $(e, t, n, r, i, o) {
        this.g = e;
        this.j = t;
        this.a = r;
        this.c = n;
        this.f = i || 3000;
        this.h = o || undefined;
      }
      function I(e, t, n, r, i, o, s) {
        this.v = e;
        this.B = t;
        this.c = n;
        this.a = r;
        this.s = s || "BESbswy";
        this.f = {};
        this.w = i || 3000;
        this.u = o || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new R(this.c, this.s);
        this.h = new R(this.c, this.s);
        this.j = new R(this.c, this.s);
        this.m = new R(this.c, this.s);
        e = M(e = new E(this.a.c + ",serif", x(this.a)));
        this.g.a.style.cssText = e;
        e = M(e = new E(this.a.c + ",sans-serif", x(this.a)));
        this.h.a.style.cssText = e;
        e = M(e = new E("serif", x(this.a)));
        this.j.a.style.cssText = e;
        e = M(e = new E("sans-serif", x(this.a)));
        this.m.a.style.cssText = e;
        D(this.g);
        D(this.h);
        D(this.j);
        D(this.m);
      }
      T.prototype.c = function (e) {
        for (var t = [], n = 0; n < arguments.length; n++) {
          t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        }
        return t.join(this.a);
      };
      $.prototype.start = function () {
        var e = this.c.o.document;
        var t = this;
        var n = l();
        var r = new Promise(function (r, i) {
          !function o() {
            if (l() - n >= t.f) {
              i();
            } else {
              e.fonts.load(function (e) {
                return b(e) + " " + e.f + "00 300px " + C(e.c);
              }(t.a), t.h).then(function (e) {
                if (e.length >= 1) {
                  r();
                } else {
                  setTimeout(o, 25);
                }
              }, function () {
                i();
              });
            }
          }();
        });
        var i = null;
        var o = new Promise(function (e, n) {
          i = setTimeout(n, t.f);
        });
        Promise.race([o, r]).then(function () {
          if (i) {
            clearTimeout(i);
            i = null;
          }
          t.g(t.a);
        }, function () {
          t.j(t.a);
        });
      };
      var P = {
        D: "serif",
        C: "sans-serif"
      };
      var L = null;
      function F() {
        if (L === null) {
          var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          L = !!e && (parseInt(e[1], 10) < 536 || parseInt(e[1], 10) === 536 && parseInt(e[2], 10) <= 11);
        }
        return L;
      }
      function B(e, t, n) {
        for (var r in P) {
          if (P.hasOwnProperty(r) && t === e.f[P[r]] && n === e.f[P[r]]) {
            return true;
          }
        }
        return false;
      }
      function z(e) {
        var t;
        var n = e.g.a.offsetWidth;
        var r = e.h.a.offsetWidth;
        if (!(t = n === e.f.serif && r === e.f["sans-serif"])) {
          t = F() && B(e, n, r);
        }
        if (t) {
          if (l() - e.A >= e.w) {
            if (F() && B(e, n, r) && (e.u === null || e.u.hasOwnProperty(e.a.c))) {
              W(e, e.v);
            } else {
              W(e, e.B);
            }
          } else {
            (function (e) {
              setTimeout(s(function () {
                z(this);
              }, e), 50);
            })(e);
          }
        } else {
          W(e, e.v);
        }
      }
      function W(e, t) {
        setTimeout(s(function () {
          g(this.g.a);
          g(this.h.a);
          g(this.j.a);
          g(this.m.a);
          t(this.a);
        }, e), 0);
      }
      function K(e, t, n) {
        this.c = e;
        this.a = t;
        this.f = 0;
        this.m = this.j = false;
        this.s = n;
      }
      I.prototype.start = function () {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = l();
        z(this);
      };
      var U = null;
      function Y(e) {
        if (--e.f == 0 && e.j) {
          if (e.m) {
            if ((e = e.a).g) {
              f(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]);
            }
            w(e, "active");
          } else {
            O(e.a);
          }
        }
      }
      function j(e) {
        this.j = e;
        this.a = new k();
        this.h = 0;
        this.f = this.g = true;
      }
      function H(e, t, n, r, i) {
        var o = --e.h == 0;
        if (e.f || e.g) {
          setTimeout(function () {
            var e = i || null;
            var l = r || {};
            if (n.length === 0 && o) {
              O(t.a);
            } else {
              t.f += n.length;
              if (o) {
                t.j = o;
              }
              var a;
              var u = [];
              for (a = 0; a < n.length; a++) {
                var c = n[a];
                var d = l[c.c];
                var g = t.a;
                var h = c;
                if (g.g) {
                  f(g.f, [g.a.c("wf", h.c, x(h).toString(), "loading")]);
                }
                w(g, "fontloading", h);
                g = null;
                if (U === null) {
                  if (window.FontFace) {
                    h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                    var p = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                    U = h ? parseInt(h[1], 10) > 42 : !p;
                  } else {
                    U = false;
                  }
                }
                g = U ? new $(s(t.g, t), s(t.h, t), t.c, c, t.s, d) : new I(s(t.g, t), s(t.h, t), t.c, c, t.s, e, d);
                u.push(g);
              }
              for (a = 0; a < u.length; a++) {
                u[a].start();
              }
            }
          }, 0);
        }
      }
      function G(e, t) {
        this.c = e;
        this.a = t;
      }
      function V(e, t) {
        this.c = e;
        this.a = t;
      }
      function J(e, t) {
        this.c = e || Z;
        this.a = [];
        this.f = [];
        this.g = t || "";
      }
      K.prototype.g = function (e) {
        var t = this.a;
        if (t.g) {
          f(t.f, [t.a.c("wf", e.c, x(e).toString(), "active")], [t.a.c("wf", e.c, x(e).toString(), "loading"), t.a.c("wf", e.c, x(e).toString(), "inactive")]);
        }
        w(t, "fontactive", e);
        this.m = true;
        Y(this);
      };
      K.prototype.h = function (e) {
        var t = this.a;
        if (t.g) {
          var n = h(t.f, t.a.c("wf", e.c, x(e).toString(), "active"));
          var r = [];
          var i = [t.a.c("wf", e.c, x(e).toString(), "loading")];
          if (!n) {
            r.push(t.a.c("wf", e.c, x(e).toString(), "inactive"));
          }
          f(t.f, r, i);
        }
        w(t, "fontinactive", e);
        Y(this);
      };
      j.prototype.load = function (e) {
        this.c = new a(this.j, e.context || this.j);
        this.g = e.events !== false;
        this.f = e.classes !== false;
        (function (e, t, n) {
          var r = [];
          var i = n.timeout;
          !function (e) {
            if (e.g) {
              f(e.f, [e.a.c("wf", "loading")]);
            }
            w(e, "loading");
          }(t);
          r = function (e, t, n) {
            var r;
            var i = [];
            for (r in t) {
              if (t.hasOwnProperty(r)) {
                var o = e.c[r];
                if (o) {
                  i.push(o(t[r], n));
                }
              }
            }
            return i;
          }(e.a, n, e.c);
          var o = new K(e.c, t, i);
          e.h = r.length;
          t = 0;
          n = r.length;
          for (; t < n; t++) {
            r[t].load(function (t, n, r) {
              H(e, o, t, n, r);
            });
          }
        })(this, new A(this.c, e), e);
      };
      G.prototype.load = function (e) {
        function t() {
          if (o["__mti_fntLst" + r]) {
            var n;
            var i = o["__mti_fntLst" + r]();
            var s = [];
            if (i) {
              for (var l = 0; l < i.length; l++) {
                var a = i[l].fontfamily;
                if (i[l].fontStyle != null && i[l].fontWeight != null) {
                  n = i[l].fontStyle + i[l].fontWeight;
                  s.push(new E(a, n));
                } else {
                  s.push(new E(a));
                }
              }
            }
            e(s);
          } else {
            setTimeout(function () {
              t();
            }, 50);
          }
        }
        var n = this;
        var r = n.a.projectId;
        var i = n.a.version;
        if (r) {
          var o = n.c.o;
          _(this.c, (n.a.api || "https://fast.fonts.net/jsapi") + "/" + r + ".js" + (i ? "?v=" + i : ""), function (i) {
            if (i) {
              e([]);
            } else {
              o["__MonotypeConfiguration__" + r] = function () {
                return n.a;
              };
              t();
            }
          }).id = "__MonotypeAPIScript__" + r;
        } else {
          e([]);
        }
      };
      V.prototype.load = function (e) {
        var t;
        var n;
        var r = this.a.urls || [];
        var i = this.a.families || [];
        var o = this.a.testStrings || {};
        var s = new m();
        t = 0;
        n = r.length;
        for (; t < n; t++) {
          p(this.c, r[t], y(s));
        }
        var l = [];
        t = 0;
        n = i.length;
        for (; t < n; t++) {
          if ((r = i[t].split(":"))[1]) {
            for (var a = r[1].split(","), u = 0; u < a.length; u += 1) {
              l.push(new E(r[0], a[u]));
            }
          } else {
            l.push(new E(r[0]));
          }
        }
        N(s, function () {
          e(l, o);
        });
      };
      var Z = "https://fonts.googleapis.com/css";
      function q(e) {
        this.f = e;
        this.a = [];
        this.c = {};
      }
      var X = {
        latin: "BESbswy",
        "latin-ext": "çöüğş",
        cyrillic: "йяЖ",
        greek: "αβΣ",
        khmer: "កខគ",
        Hanuman: "កខគ"
      };
      var Q = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
      };
      var ee = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
      };
      var te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function ne(e, t) {
        this.c = e;
        this.a = t;
      }
      var re = {
        Arimo: true,
        Cousine: true,
        Tinos: true
      };
      function ie(e, t) {
        this.c = e;
        this.a = t;
      }
      function oe(e, t) {
        this.c = e;
        this.f = t;
        this.a = [];
      }
      ne.prototype.load = function (e) {
        var t = new m();
        var n = this.c;
        var r = new J(this.a.api, this.a.text);
        var i = this.a.families;
        !function (e, t) {
          for (var n = t.length, r = 0; r < n; r++) {
            var i = t[r].split(":");
            if (i.length == 3) {
              e.f.push(i.pop());
            }
            var o = "";
            if (i.length == 2 && i[1] != "") {
              o = ":";
            }
            e.a.push(i.join(o));
          }
        }(r, i);
        var o = new q(i);
        !function (e) {
          for (var t = e.f.length, n = 0; n < t; n++) {
            var r = e.f[n].split(":");
            var i = r[0].replace(/\+/g, " ");
            var o = ["n4"];
            if (r.length >= 2) {
              var s;
              s = [];
              if (l = r[1]) {
                for (var l, a = (l = l.split(",")).length, u = 0; u < a; u++) {
                  var c;
                  if ((c = l[u]).match(/^[\w-]+$/)) {
                    if ((d = te.exec(c.toLowerCase())) == null) {
                      c = "";
                    } else {
                      c = (c = d[2]) == null || c == "" ? "n" : ee[c];
                      if ((d = d[1]) == null || d == "") {
                        d = "4";
                      } else {
                        var d = Q[d] || (isNaN(d) ? "4" : d.substr(0, 1));
                      }
                      c = [c, d].join("");
                    }
                  } else {
                    c = "";
                  }
                  if (c) {
                    s.push(c);
                  }
                }
              }
              if (s.length > 0) {
                o = s;
              }
              if (r.length == 3) {
                s = [];
                if ((r = (r = r[2]) ? r.split(",") : s).length > 0 && (r = X[r[0]])) {
                  e.c[i] = r;
                }
              }
            }
            if (!e.c[i]) {
              if (r = X[i]) {
                e.c[i] = r;
              }
            }
            r = 0;
            for (; r < o.length; r += 1) {
              e.a.push(new E(i, o[r]));
            }
          }
        }(o);
        p(n, function (e) {
          if (e.a.length == 0) {
            throw Error("No fonts to load!");
          }
          if (e.c.indexOf("kit=") != -1) {
            return e.c;
          }
          for (var t = e.a.length, n = [], r = 0; r < t; r++) {
            n.push(e.a[r].replace(/ /g, "+"));
          }
          t = e.c + "?family=" + n.join("%7C");
          if (e.f.length > 0) {
            t += "&subset=" + e.f.join(",");
          }
          if (e.g.length > 0) {
            t += "&text=" + encodeURIComponent(e.g);
          }
          return t;
        }(r), y(t));
        N(t, function () {
          e(o.a, o.c, re);
        });
      };
      ie.prototype.load = function (e) {
        var t = this.a.id;
        var n = this.c.o;
        if (t) {
          _(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function (t) {
            if (t) {
              e([]);
            } else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
              t = n.Typekit.config.fn;
              for (var r = [], i = 0; i < t.length; i += 2) {
                for (var o = t[i], s = t[i + 1], l = 0; l < s.length; l++) {
                  r.push(new E(o, s[l]));
                }
              }
              try {
                n.Typekit.load({
                  events: false,
                  classes: false,
                  async: true
                });
              } catch (e) {}
              e(r);
            }
          }, 2000);
        } else {
          e([]);
        }
      };
      oe.prototype.load = function (e) {
        var t = this.f.id;
        var n = this.c.o;
        var r = this;
        if (t) {
          if (!n.__webfontfontdeckmodule__) {
            n.__webfontfontdeckmodule__ = {};
          }
          n.__webfontfontdeckmodule__[t] = function (t, n) {
            for (var i = 0, o = n.fonts.length; i < o; ++i) {
              var s = n.fonts[i];
              r.a.push(new E(s.name, S("font-weight:" + s.weight + ";font-style:" + s.style)));
            }
            e(r.a);
          };
          _(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function (e) {
            return e.o.location.hostname || e.a.location.hostname;
          }(this.c) + "/" + t + ".js", function (t) {
            if (t) {
              e([]);
            }
          });
        } else {
          e([]);
        }
      };
      var se = new j(window);
      se.a.c.custom = function (e, t) {
        return new V(t, e);
      };
      se.a.c.fontdeck = function (e, t) {
        return new oe(t, e);
      };
      se.a.c.monotype = function (e, t) {
        return new G(t, e);
      };
      se.a.c.typekit = function (e, t) {
        return new ie(t, e);
      };
      se.a.c.google = function (e, t) {
        return new ne(t, e);
      };
      var le = {
        load: s(se.load, se)
      };
      if (!((r = function () {
        return le;
      }.call(t, n, t, e)) === undefined)) {
        e.exports = r;
      }
    }();
  }
}]);
//# sourceMappingURL=https://web.whatsapp.com/vendors~main~.4e64aa7c592312b70e21.js.map