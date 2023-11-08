var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = o(require("../vendor/348926.js"));
const a = /\r\n/g;
exports.default = class {
  constructor(e) {
    this.hasText = () => this.hasType("text/plain");
    this.hasType = e => this.types.includes(e);
    this.data = e;
    this.types = e.types ? Array.isArray(e.types) ? e.types : Object.keys(e.types).map(t => e.types[t]) : [];
  }
  getItems() {
    if (this.data.items) {
      return Array.prototype.slice.call(this.data.items);
    }
    const e = this._getFileTypes();
    return this.types.map(t => ({
      type: t,
      data: this.data.getData(t),
      kind: e.includes(t) ? "string" : "file"
    }));
  }
  _getFileTypes() {
    return Array.prototype.slice.call(this.data.files).map(e => {
      let {
        type: t
      } = e;
      return t;
    });
  }
  getText(e) {
    var t = this;
    return (0, r.default)(function* () {
      const n = yield t._getText(e);
      if (n) {
        return n.replace(a, "\n");
      } else {
        return null;
      }
    })();
  }
  _getText(e) {
    var t = this;
    return (0, r.default)(function* () {
      const n = e || [];
      if (n.length === 0) {
        n.push("text/plain");
      }
      const {
        data: o
      } = t;
      if (o.getData) {
        let e;
        n.some(t => {
          if (o.getData(t)) {
            e = o.getData(t);
            return true;
          }
        });
        return Promise.resolve(e);
      }
      const r = function (e, t) {
        const n = Array.from(e);
        return t.reduce((e, t) => {
          const o = n.find(e => e.type === t);
          if (o) {
            e.push(o);
          }
          return e;
        }, []);
      }(t.data.items, n);
      if (!r.length) {
        return;
      }
      const a = Promise.all(r.map(e => new Promise(t => e.getAsString(t))));
      return (yield a).find(e => e.length);
    })();
  }
  getFiles() {
    if (this.data.items) {
      return Array.prototype.slice.call(this.data.items).filter(e => {
        let {
          kind: t
        } = e;
        return t === "file";
      }).map(e => e.getAsFile()).filter(e => !!e);
    } else {
      return Array.prototype.slice.call(this.data.files || []);
    }
  }
  getData(e) {
    return this.data.getData(e);
  }
  hasFiles() {
    if (this.data.items) {
      return Array.prototype.slice.call(this.data.items).some(e => {
        let {
          kind: t
        } = e;
        return t === "file";
      });
    } else {
      return !!Array.prototype.slice.call(this.data.files || []).length;
    }
  }
};