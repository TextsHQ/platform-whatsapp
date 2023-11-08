var r = require("./932998.js");
var i = require("./376969.js");
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
exports.$createListItemNode = T;
exports.$createListNode = O;
exports.$getListDepth = s;
exports.$handleListInsertParagraph = function () {
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
exports.$isListItemNode = E;
exports.$isListNode = w;
exports.INSERT_CHECK_LIST_COMMAND = D;
exports.INSERT_ORDERED_LIST_COMMAND = R;
exports.INSERT_UNORDERED_LIST_COMMAND = k;
exports.ListItemNode = m;
exports.ListNode = C;
exports.REMOVE_LIST_COMMAND = M;
exports.insertList = function (e, t) {
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
exports.removeList = function (e) {
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