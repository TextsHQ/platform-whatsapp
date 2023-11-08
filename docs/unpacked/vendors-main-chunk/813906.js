var r = require("./376969.js");
var i = require("./932998.js");
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
exports.$createAutoLinkNode = d;
exports.$createLinkNode = a;
exports.$isAutoLinkNode = function (e) {
  return e instanceof c;
};
exports.$isLinkNode = u;
exports.AutoLinkNode = c;
exports.LinkNode = s;
exports.TOGGLE_LINK_COMMAND = g;
exports.toggleLink = function (e, t = {}) {
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