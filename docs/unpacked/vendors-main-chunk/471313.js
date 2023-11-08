var r = require("./587592.js");
var i = require("./389408.js");
var o = require("./376969.js");
var s = require("./932998.js");
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
exports.$generateJSONFromSelectedNodes = g;
exports.$generateNodesFromSerializedNodes = f;
exports.$getHtmlContent = a;
exports.$getLexicalContent = u;
exports.$insertDataTransferForPlainText = function (e, t) {
  if ((e = e.getData("text/plain") || e.getData("text/uri-list")) != null) {
    t.insertRawText(e);
  }
};
exports.$insertDataTransferForRichText = function (e, t, n) {
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
exports.$insertGeneratedNodes = c;
exports.copyToClipboard = async function (e, t) {
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