var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./181400.js");
var a = r(require("./445045.js"));
let o;
var s = "Headers" in window && Headers ? Headers : (o = a.default.iterator, class e {
  constructor(t) {
    this._headers = {};
    if (t instanceof e) {
      for (const e of t.entries()) {
        const [t, n] = e;
        n.split(", ").forEach(e => {
          this.append(t, e);
        });
      }
    } else if (typeof t == "object") {
      for (const e in t) {
        t[e].split(", ").forEach(t => {
          this.append(e, t);
        });
      }
    }
  }
  append(e, t) {
    const n = e.toLowerCase();
    if (n in this._headers) {
      this._headers[n].push(t);
    } else {
      this._headers[n] = [t];
    }
  }
  delete(e) {
    const t = e.toLowerCase();
    delete this._headers[t];
  }
  entries() {
    const e = Object.keys(this._headers).map(e => [e, this.get(e) || ""]);
    return (0, i.iteratorFromArray)(e);
  }
  get(e) {
    const t = e.toLowerCase();
    if (t in this._headers) {
      return this._headers[t].join(", ");
    } else {
      return null;
    }
  }
  has(e) {
    return e.toLowerCase() in this._headers;
  }
  keys() {
    return (0, i.mapIterator)(this.entries(), e => {
      let [t] = e;
      return t;
    });
  }
  set(e, t) {
    const n = e.toLowerCase();
    this._headers[n] = [t];
  }
  values() {
    return (0, i.mapIterator)(this.entries(), e => {
      let [t, n] = e;
      return n;
    });
  }
  [o]() {
    return this.entries();
  }
  toString() {
    return "[Object Headers]";
  }
});
exports.default = s;