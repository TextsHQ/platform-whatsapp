var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/402525.js"));
var a = r(require("./670983.js"));
var o = require("./724976.js");
var s = r(require("./462032.js"));
var l = require("./94872.js");
var u = (() => {
  try {
    const e = (0, a.default)(s.default, "sessionStorage");
    e.setItem(l.KEYS.STORAGE_TEST, l.KEYS.STORAGE_TEST);
    return (0, o.isFunction)(e.clear);
  } catch (e) {
    return false;
  }
})() ? new class {
  constructor() {
    this.dataStore = {};
  }
  setItem(e, t) {
    this.dataStore[e] = t;
    (0, a.default)(s.default, "sessionStorage").setItem(e, t);
  }
  getItem(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (this.dataStore[e] == null || t) {
      return (0, a.default)(s.default, "sessionStorage").getItem(e);
    } else {
      return this.dataStore[e];
    }
  }
  removeItem(e) {
    delete this.dataStore[e];
    (0, a.default)(s.default, "sessionStorage").removeItem(e);
  }
  clear(e) {
    this.dataStore = {};
    (0, a.default)(s.default, "sessionStorage").clear();
    if (e) {
      (0, i.default)(e, function (e, t) {
        (0, a.default)(s.default, "sessionStorage").setItem(t, e);
      });
    }
    return Promise.resolve();
  }
}() : new class {
  constructor() {
    this.dataStore = {};
  }
  setItem(e, t) {
    this.dataStore[e] = t;
  }
  getItem(e) {
    if (this.dataStore[e] === undefined) {
      return null;
    } else {
      return this.dataStore[e];
    }
  }
  removeItem(e) {
    delete this.dataStore[e];
  }
  clear() {
    this.dataStore = {};
    return Promise.resolve();
  }
}();
exports.default = u;