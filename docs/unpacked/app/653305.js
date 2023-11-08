var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/82729.js"));
var a = r(require("./670983.js"));
var o = require("./660666.js");
var s = r(require("./124928.js"));
class l {
  constructor() {
    this._map = {};
    this.length = 0;
  }
  static getSidelistHash(e) {
    if (!(0, o.getIsUser)(e)) {
      return null;
    }
    const t = (0, o.getUserhash)(e);
    if (typeof t == "string" && t.slice) {
      return t.slice(0, 4);
    } else {
      __LOG__(3)`Store:Contact can't call slice on contact.userhash`;
      return null;
    }
  }
  put(e) {
    const t = l.getSidelistHash(e);
    if (t && !this._map[t]) {
      if (this._map[t]) {
        const n = this._map[t];
        if (n instanceof s.default) {
          this._map[t] = [n, e.id];
        } else if (n instanceof Array) {
          n.push(e.id);
        }
      } else {
        this._map[t] = e.id;
      }
      this.length++;
    }
  }
  remove(e) {
    const t = l.getSidelistHash(e);
    if (!t || !this._map[t]) {
      return;
    }
    const n = (0, a.default)(this._map[t], "this._map[hash]");
    if (n instanceof s.default) {
      delete this._map[t];
    } else if (n instanceof Array) {
      (0, i.default)(n, t => t.equals(e.id));
    }
    this.length++;
  }
  get(e) {
    const t = this._map[e];
    if (t instanceof s.default) {
      return [t];
    } else {
      return t;
    }
  }
  clear() {
    this._map = {};
    this.length = 0;
  }
}
exports.default = l;