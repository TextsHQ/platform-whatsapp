var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeHash = undefined;
exports.defineTypeHash = function (e, t, n) {
  const r = {
    $className: {
      value: e
    }
  };
  for (const n in t) {
    let s = t[n];
    if (!(typeof s != "string" && typeof s != "function")) {
      s = {
        type: s
      };
    }
    if (!s || typeof s != "object") {
      throw (0, i.default)(`${e} specified with non-object ${s}`);
    }
    r[n] = {
      enumerable: true,
      get: a(n),
      set: o(n, s)
    };
  }
  class s extends n {
    constructor(e) {
      super();
      this.all = {};
      if (e) {
        this.set(e);
      }
    }
  }
  Object.defineProperties(s.prototype, r);
  return s;
};
var i = r(require("./556869.js"));
function a(e) {
  return function () {
    return this.all[e];
  };
}
function o(e, t) {
  const n = t.type;
  const r = t.set;
  return function (t) {
    if (t !== this.all[e]) {
      if (t == null) ;else if (typeof n == "function") {
        if (!n(t)) {
          __LOG__(2)`type-validator fails ${t}`;
          throw new TypeError(`${this.$className}.${e} type-validator failed`);
        }
      } else if (typeof t !== n) {
        throw new TypeError(`${this.$className}.${e} requires type ${n}, got ${String(t)}`);
      }
      if (r) {
        r.call(this, t);
      }
      this.all[e] = t;
    }
  };
}
exports.TypeHash = class {
  set(e) {
    for (const t in e) {
      this[t] = e[t];
    }
  }
};