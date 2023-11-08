var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParsableXmlNode = undefined;
exports.convertBytesToUint = s;
var i = r(require("./415227.js"));
var a = r(require("./380815.js"));
var o = require("./506493.js");
function s(e, t) {
  let n = 0;
  for (let r = 0; r < t; r++) {
    n = n * 256 + e[r];
  }
  return n;
}
exports.ParsableXmlNode = class {
  constructor(e, t) {
    this._name = e;
    this._node = t;
    this._children = Array.isArray(t.content) ? t.content.map(t => new this.constructor(e, t)) : null;
  }
  name() {
    return this._name;
  }
  node() {
    return this._node;
  }
  hasAttr(e) {
    return (0, a.default)(this._node.attrs, e);
  }
  assertTag(e) {
    if (this._node.tag !== e) {
      this.throw(`to be <${e}>`);
    }
  }
  tag() {
    return this._node.tag;
  }
  maybeChild(e) {
    const t = this._children;
    if (!t) {
      return null;
    }
    for (let n = 0; n < t.length; n++) {
      if (t[n].tag() === e) {
        return t[n];
      }
    }
    return null;
  }
  hasChild(e) {
    return !!this.maybeChild(e);
  }
  child(e) {
    const t = this.maybeChild(e);
    return t || this.throw(`to have child <${e}>`);
  }
  assertAttr(e, t) {
    const n = this.attrString(e);
    if (n !== t) {
      this.throw(`to have "${e}"="${t}", but instead has "${n}"`);
    }
  }
  attrString(e) {
    if ((0, a.default)(this._node.attrs, e)) {
      return this.decodeAsString(this._node.attrs[e]);
    } else {
      return this.throw(`to have attribute "${e}"`);
    }
  }
  forEachAttributeKey(e) {
    const t = this._node.attrs;
    Object.keys(t).forEach(t => e(t));
  }
  maybeAttrString(e) {
    if (this.hasAttr(e)) {
      return this.decodeAsString(this._node.attrs[e]);
    } else {
      return null;
    }
  }
  maybeAttrInt(e, t, n) {
    if (this.hasAttr(e)) {
      return this.attrInt(e, t, n);
    } else {
      return null;
    }
  }
  attrEnumValues(e, t, n) {
    const r = new Set(t);
    const i = this.attrString(e);
    if (!r.has(i)) {
      if (n != null) {
        return n;
      }
      const t = Array.from(r).join("|");
      return this.throw(`to have "${e}"={${t}} but has value "${i}"`);
    }
    return i;
  }
  attrEnum(e, t) {
    const n = this.attrString(e);
    if (!(0, a.default)(t, n)) {
      const r = Object.keys(t).join("|");
      return this.throw(`to have "${e}"={${r}} but has value "${n}"`);
    }
    return t[n];
  }
  attrEnumOrNullIfUnknown(e, t) {
    const n = this.attrString(e);
    if ((0, a.default)(t, n)) {
      return t[n];
    } else {
      return null;
    }
  }
  attrEnumOrDefault(e, t, n) {
    if (this.hasAttr(e)) {
      return this.attrEnum(e, t);
    } else {
      return n;
    }
  }
  attrInt(e, t, n) {
    const r = this.attrString(e);
    return this._parseInt(r, e, t, n);
  }
  _parseInt(e, t, n, r) {
    const i = parseInt(e, 10);
    if (Number.isNaN(i)) {
      return this.throw(`to have "${t}"={integer} but has value "${e}"`);
    } else if (n !== undefined && i < n) {
      return this.throw(`to have "${t}"={at least ${n}} but has value ${i}`);
    } else if (r !== undefined && i >= r) {
      return this.throw(`to have "${t}"={below ${r}} but has value ${i}`);
    } else {
      return i;
    }
  }
  forEachChild(e) {
    const t = this._children;
    if (t) {
      t.forEach(t => e(t));
    } else if (this._node.content != null) {
      return this.throw("to have children");
    }
  }
  forEachChildWithTag(e, t) {
    this.forEachChild(n => {
      if (n.tag() === e) {
        t(n);
      }
    });
  }
  mapChildren(e) {
    const t = this._children;
    if (t || this._node.content == null) {
      if (t) {
        return t.map(t => e(t));
      } else {
        return [];
      }
    } else {
      return this.throw("to have children");
    }
  }
  mapChildrenWithTag(e, t) {
    const n = this._children;
    if (n || this._node.content == null) {
      if (n) {
        return n.filter(t => t.tag() === e).map(e => t(e));
      } else {
        return [];
      }
    } else {
      return this.throw("to have children");
    }
  }
  mapFirstChild(e) {
    const t = this._children;
    if (t && t.length !== 0) {
      return e(t[0]);
    } else {
      return this.throw("to have children");
    }
  }
  hasContent() {
    return !this._children && !!this._node.content;
  }
  hasChildren() {
    return this._children != null;
  }
  getChildren() {
    return this._children;
  }
  mapAttrKeys(e) {
    const t = this.getAttrKeys();
    if (t && t.length) {
      return t.map(e);
    } else {
      return [];
    }
  }
  getAttrKeys() {
    return Object.keys(this._node.attrs);
  }
  hasAttrs() {
    return (this._node.attrs ? Object.keys(this._node.attrs) : []).length > 0;
  }
  getNode() {
    return this._node;
  }
  unsafeSetChildren(e) {
    this._children = e;
  }
  unsafeSetNodeContent(e) {
    this._node.content = e;
  }
  contentUint(e) {
    return s(this.contentBytes(e), e);
  }
  contentBytes() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    if (this._children) {
      return this.throw("to have binary content, but has children instead");
    }
    if (this._node.content != null) {
      const t = this._node.content;
      if (e !== -1 && t.length !== e) {
        return this.throw(`to be ${e} bytes, but got ${t.length} instead`);
      } else {
        return t;
      }
    }
    return this.throw("to have content");
  }
  contentString() {
    if (this._children) {
      return this.throw("to have string content, but has children instead");
    } else if (this._node.content != null) {
      return this._node.content;
    } else {
      return this.throw("to have content");
    }
  }
  contentInt(e, t) {
    const n = this.contentString();
    return this._parseInt(n, "content", e, t);
  }
  contentEnum(e) {
    const t = this.contentString();
    if (!(0, a.default)(e, t)) {
      const n = Object.keys(e).join("|");
      return this.throw(`to have content {${n}} but has value "${t}"`);
    }
    return e[t];
  }
  decodeAsString(e) {
    if (typeof e != "string") {
      throw (0, i.default)(`decodeAsString: attribute is ${typeof e} not a string: ${e}`);
    }
    return e;
  }
  throw(e) {
    throw new o.XmlParsingFailure(this._name, `expected <${this._node.tag}> ${e}`);
  }
  toString() {
    return this._node.toString();
  }
};