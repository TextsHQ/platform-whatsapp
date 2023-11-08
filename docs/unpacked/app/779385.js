var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRequirements = l;
exports.checkValid = function (e, t) {
  l(e, t);
  const n = g(t, e);
  if (n) {
    n.path.reverse();
    throw new TypeError(`Invalid value at ${n.path.join(".")}: ${n.error}`);
  }
};
var i = r(require("./380815.js"));
var a = require("./194612.js");
var o = require("./751206.js");
const s = Number.MAX_SAFE_INTEGER;
function l(e, t) {
  const n = u(e, t);
  if (n) {
    n.reverse();
    throw new TypeError(`Message missing required value ${n.join(".")}`);
  }
}
function u(e, t) {
  const {
    names: n,
    types: r,
    meta: s
  } = (0, a.compileSpec)(e);
  let l;
  for (let e = 0; e < r.length && !l; e++) {
    const a = r[e];
    const c = n[e];
    const d = (0, i.default)(t, c) ? t[c] : undefined;
    if (a & o.FLAGS.REQUIRED && d == null) {
      l = [c];
    } else if ((a & o.TYPE_MASK) === o.TYPES.MESSAGE && a & o.FLAGS.REPEATED && d != null) {
      const t = s[e];
      let n;
      for (n = 0; n < d.length && !l; n++) {
        l = u(t, d[n]);
      }
      if (l) {
        l.push(`${c}[${n}]`);
      }
    } else if ((a & o.TYPE_MASK) === o.TYPES.MESSAGE && d != null) {
      l = u(s[e], d);
      if (l) {
        l.push(c);
      }
    }
  }
  return l;
}
function c(e, t, n) {
  if (typeof e == "string") {
    return !/^-?0x[0-9a-f]{16}$/i.test(e) && (__LOG__(2)`"${f(e)}" is not a valid long`, {
      path: [],
      error: "value must be a hex string of the form '0x123...' or '-0x123...' where the tail is always 16 characters long"
    });
  } else {
    return d(e, t, n);
  }
}
function d(e, t, n) {
  if (typeof e != "number" || e != e || Math.floor(e) !== e) {
    __LOG__(2)`"${f(e)}" is not a valid int`;
    return {
      path: [],
      error: "value must be an int"
    };
  } else {
    return (e < t || e >= n) && (__LOG__(2)`"${f(e)}" is out of range`, {
      path: [],
      error: "value is out of range"
    });
  }
}
function p(e, t, n) {
  if (e) {
    return undefined;
  } else {
    __LOG__(2)`"${f(n)}" is not ${t}`;
    return {
      path: [],
      error: "value is invalid"
    };
  }
}
function f(e) {
  if (typeof e == "string") {
    return `"${e}"`;
  } else if (Array.isArray(e)) {
    return `[${e.join(", ")}]`;
  } else {
    return `${e}`;
  }
}
const _ = [undefined, e => d(e, -2147483648, 2147483648), e => c(e, -s, s + 1), e => d(e, 0, 4294967296), e => c(e, 0, s + 1), e => d(e, -2147483648, 2147483648), e => c(e, -s, s + 1), e => p(typeof e == "boolean", "boolean", e), (e, t) => p(typeof e == "number" && (t[e] || t.cast(e) !== undefined), "in enum", e), e => c(e, 0, s + 1), e => c(e, -s, s + 1), e => p(typeof e == "number", "number", e), e => p(typeof e == "string", "string", e), e => p(e instanceof ArrayBuffer || e instanceof Uint8Array, "ArrayBuffer or Uint8Array", e), g, e => d(e, 0, 4294967296), e => d(e, -2147483648, 2147483648), e => p(typeof e == "number", "number", e)];
function g(e, t) {
  const {
    names: n,
    fields: r,
    types: i,
    meta: s,
    oneofToFields: l,
    fieldToOneof: u,
    reservedTags: c,
    reservedFields: d
  } = (0, a.compileSpec)(t);
  let p;
  for (let t = 0; t < n.length && !p; t++) {
    const a = n[t];
    const g = i[t];
    const m = e[a];
    const h = g & o.TYPE_MASK;
    const y = _[h];
    if (y === undefined) {
      throw new Error(`Can not find the validator for type ${h}`);
    }
    if (g & (o.FLAGS.PACKED | o.FLAGS.REPEATED) && m != null) {
      if (Array.isArray(m)) {
        const e = s[t];
        for (let t = 0; t < m.length && !p; t++) {
          p = y(m[t], e);
          if (p) {
            p.path.push(`${a}[${t}]`);
          }
        }
      } else {
        __LOG__(2)`"${f(m)}" is not an array`;
        p = {
          path: [a],
          error: "repeated field must be array"
        };
      }
    } else if (m != null) {
      p = y(m, s[t]);
      if (p) {
        p.path.push(a);
      }
      const n = u[a];
      if (n) {
        n.forEach(t => {
          l[t].filter(e => e !== a).forEach(n => {
            if (e[n] !== undefined) {
              p = {
                path: [t],
                error: `oneof '${t}' has fields '${a}' and '${n}' set`
              };
            }
          });
        });
      }
      if (c[r[t]]) {
        p = {
          path: [a],
          error: `tag ${r[t]} is reserved`
        };
      }
      if (d[a]) {
        p = {
          path: [a],
          error: `field ${a} is reserved`
        };
      }
    }
  }
  return p;
}