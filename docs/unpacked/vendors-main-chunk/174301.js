var r = require("./932998.js");
var i = require("./376969.js");
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
exports.$createMarkNode = s;
exports.$getMarkIDs = function (e, t) {
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
exports.$isMarkNode = l;
exports.$unwrapMarkNode = function (e) {
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
exports.$wrapSelectionInMarkNode = function (e, t, n, i) {
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
exports.MarkNode = o;