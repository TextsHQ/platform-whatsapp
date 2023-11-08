var r = require("./932998.js");
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
exports.$addNodeStyle = function (e) {
  let t = l(e = e.getStyle());
  i.set(e, t);
};
exports.$cloneWithProperties = function (e) {
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
exports.$getSelectionStyleValueForProperty = function (e, t, n = "") {
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
exports.$isAtNodeEnd = function (e) {
  if (e.type === "text") {
    return e.offset === e.getNode().getTextContentSize();
  } else {
    return e.offset === e.getNode().getChildrenSize();
  }
};
exports.$isParentElementRTL = f;
exports.$moveCaretSelection = g;
exports.$moveCharacter = function (e, t, n) {
  let r = f(e);
  g(e, t, n ? !r : r, "character");
};
exports.$patchStyleText = function (e, t) {
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
exports.$selectAll = function (e) {
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
exports.$setBlocksType = function (e, t) {
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
exports.$shouldOverrideDefaultCharacterSelection = function (e, t) {
  e = r.$getAdjacentNode(e.focus, t);
  return r.$isDecoratorNode(e) && !e.isIsolated() || r.$isElementNode(e) && !e.isInline() && !e.canBeEmpty();
};
exports.$sliceSelectedTextNodeContent = function (e, t) {
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
exports.$wrapNodes = function (e, t, n = null) {
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
exports.createDOMRange = function (e, t, n, i, l) {
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
exports.createRectsFromDOMRange = function (e, t) {
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
exports.getStyleObjectFromCSS = a;
exports.trimTextContentFromAnchor = function (e, t, n) {
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