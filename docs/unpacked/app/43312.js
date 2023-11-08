var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./670983.js"));
class a {
  constructor(e) {
    this._children = {};
    this._indices = [];
    if (e) {
      this._data = e;
    }
  }
  static fromBackwardsStrings(e, t) {
    return e.reduce((e, t, n) => e.addBackwardsString(t, n), new a(t))._optimize();
  }
  addBackwardsString(e, t) {
    let n = e.length - 1;
    let r = this;
    for (; n >= 0;) {
      const i = e.charAt(n);
      r._addIndex(t);
      r = r.get(i) || r.set(i, new a());
      n--;
    }
    r._addIndex(t);
    return this;
  }
  static fromForwardsStrings(e, t) {
    return e.reduce((e, t, n) => e.addForwardsString(t, n), new a(t))._optimize();
  }
  addForwardsString(e, t) {
    let n = 0;
    let r = this;
    for (; n < e.length;) {
      const i = e.charAt(n);
      r._addIndex(t);
      r = r.get(i) || r.set(i, new a());
      n++;
    }
    r._addIndex(t);
    return this;
  }
  set(e, t) {
    this._children[e] = t;
    return t;
  }
  get(e) {
    return this._children[e];
  }
  getChildren() {
    return Object.keys(this._children).map(e => ({
      prefix: e,
      node: (0, i.default)(this.get(e), "this.get(prefix)")
    }));
  }
  hasChildren() {
    return !function (e) {
      for (const t in e) {
        return false;
      }
      return true;
    }(this._children);
  }
  search(e) {
    const t = this._data;
    if (!t) {
      return [];
    }
    let n = this;
    for (let t = 0; t < e.length && n; t++) {
      const r = e[t];
      n = n.get(r);
    }
    if (!n) {
      return [];
    }
    return n.getIndices().map(e => t[e]);
  }
  _addIndex(e) {
    this._indices.push(e);
  }
  getIndices() {
    const e = this._indices;
    const t = Object.keys(this._children);
    if (t.length === 1 && this._indices.length === 0) {
      return this._children[t[0]].getIndices();
    } else {
      return e;
    }
  }
  _optimize() {
    if (!this.hasChildren()) {
      return this;
    }
    const e = Object.keys(this._children);
    const t = this._children[e[0]]._indices;
    e.forEach(e => {
      this._children[e]._optimize();
    });
    if (e.length === 1 && this._indices.length === t.length) {
      this._indices = [];
    }
    return this;
  }
  testOnlyGetChildrenProperty() {
    return this._children;
  }
  testOnlyGetIndicesProperty() {
    return this._indices;
  }
}
exports.default = a;