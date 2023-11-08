var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/402525.js"));
var o = r(require("./174285.js"));
var s = r(require("./584666.js"));
var l = new class {
  constructor() {
    this.dataStore = {};
  }
  setItem(e, t) {
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    this.dataStore[e] = t;
    if (o.default != null) {
      o.default.setItem(e, t);
    }
    if (n) {
      s.default.idb().then(n => n.user.put({
        key: e,
        value: t
      })).catch(e => {
        __LOG__(3)`db:setItem:Error ${e}`;
      });
    }
  }
  getItem(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (this.dataStore[e] === undefined || t) {
      if (o.default != null) {
        const t = o.default.getItem(e);
        if (t != null) {
          this.setItem(e, t, false);
        }
        return t;
      }
      return null;
    }
    return this.dataStore[e];
  }
  removeItem(e) {
    delete this.dataStore[e];
    if (o.default != null) {
      o.default.removeItem(e);
    }
    s.default.idb().then(t => t.user.delete(e)).catch(e => {
      __LOG__(3)`db:removeItem:Error ${e}`;
    });
  }
  clear(e) {
    var t = this;
    return (0, i.default)(function* () {
      t.dataStore = {};
      if (o.default != null) {
        o.default.clear();
        if (e) {
          (0, a.default)(e, function (e, t) {
            o.default.setItem(t, e);
          });
        }
      }
      yield s.default.idb().then(e => e.user.clear()).catch(e => {
        __LOG__(3)`db:clear:Error ${e}`;
      });
    })();
  }
}();
exports.default = l;