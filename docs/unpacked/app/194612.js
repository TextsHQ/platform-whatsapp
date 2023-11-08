Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spec = undefined;
exports.compileSpec = function (e) {
  if (e.internalCompiledSpec) {
    return e.internalCompiledSpec;
  }
  const t = e.internalSpec;
  if (!t) {
    throw new Error(`Message Class ${String(e)} does not have internalSpec`);
  }
  const n = e.internalDefaults || {};
  const o = Object.keys(t).filter(e => e !== r.KEYS.ONEOF);
  const s = new Array(o.length);
  const l = [];
  const u = [];
  const c = new Array(o.length);
  const d = t[r.KEYS.ONEOF] || {};
  o.sort((e, n) => {
    const r = a(t, e);
    const i = a(t, n);
    return r[0] - i[0];
  });
  for (let e = 0; e < o.length; e++) {
    const i = o[e];
    const d = a(t, i);
    c[e] = n[i];
    const p = d[1];
    const f = d[0];
    l.push(f);
    u.push(p);
    if ((p & r.TYPE_MASK) === r.TYPES.MESSAGE) {
      s[e] = d[2];
    } else if ((p & r.TYPE_MASK) === r.TYPES.ENUM) {
      const t = d[2];
      if (typeof t.cast == "function") {
        s[e] = t;
      } else {
        let n;
        let r = true;
        let i = 0;
        for (const e in t) {
          if (r && e !== i++) {
            r = false;
          }
        }
        if (r) {
          n = [];
          for (let e = 0; e < i; e++) {
            n.push(true);
          }
        } else {
          n = {};
          for (const e in t) {
            n[t[e]] = true;
          }
        }
        s[e] = n;
      }
    } else {
      s[e] = null;
    }
  }
  const p = {};
  for (const e in d) {
    d[e].forEach(t => {
      if (!p[t]) {
        p[t] = [];
      }
      p[t].push(e);
    });
  }
  const f = t[r.KEYS.RESERVED] && t[r.KEYS.RESERVED][r.KEYS.RESERVED_TAGS];
  const _ = t[r.KEYS.RESERVED] && t[r.KEYS.RESERVED][r.KEYS.RESERVED_FIELDS];
  const g = new i(o, l, u, c, s, d, p, f, _);
  e.internalCompiledSpec = g;
  return g;
};
var r = require("./751206.js");
class i {
  constructor(e, t, n, r, i, a, o, s, l) {
    this.names = e;
    this.fields = t;
    this.types = n;
    this.defaults = r;
    this.meta = i;
    this.oneofToFields = a;
    this.fieldToOneof = o;
    this.reservedTags = s ? s.reduce((e, t) => {
      e[t] = true;
      return e;
    }, {}) : {};
    this.reservedFields = l ? l.reduce((e, t) => {
      e[t] = true;
      return e;
    }, {}) : {};
  }
}
function a(e, t) {
  const n = e[t];
  if (n == null) {
    throw new Error(`fieldData of ${t} is missing`);
  }
  return n;
}
exports.Spec = i;