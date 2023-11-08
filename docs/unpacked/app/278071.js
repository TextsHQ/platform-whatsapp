var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allocate = l;
exports.elligator = b;
exports.fieldElement = u;
exports.hashSha512 = function (e, t, n) {
  i.lowlevel.crypto_hash(e, t, n);
};
exports.hashToPoint = function (e) {
  return s(() => function (e) {
    const {
      unpack25519: t
    } = i.lowlevel;
    const n = (0, i.hash)(e);
    const r = (n[31] & 128) >> 7;
    n[31] &= 127;
    const a = u();
    t(a, n);
    const o = u();
    b(o, a);
    const s = f();
    !function (e, t, n) {
      const {
        unpack25519: r,
        M: a
      } = i.lowlevel;
      const o = u();
      r(o, M);
      const s = u();
      !function (e, t) {
        const {
          Z: n,
          A: r,
          M: a
        } = i.lowlevel;
        const o = p();
        const s = u();
        const l = u();
        const c = u();
        n(s, t, o);
        r(l, t, o);
        P(c, l);
        a(e, s, c);
      }(s, t);
      const c = u();
      h(c, t);
      const d = u();
      !function (e, t) {
        const {
          unpack25519: n,
          pow2523: r,
          M: a,
          S: o
        } = i.lowlevel;
        const s = u();
        n(s, E);
        const l = u();
        r(l, t);
        const c = u();
        a(c, t, l);
        const d = u();
        o(d, c);
        const p = u();
        a(p, c, s);
        y(c, p, (f = d, _ = t, O(f, _) ? 0 : 1) ^ 1);
        e.set(c);
        var f;
        var _;
      }(d, c);
      const f = u();
      a(f, t, o);
      const _ = u();
      P(_, d);
      const g = u();
      a(g, f, _);
      const m = u();
      S(m, g);
      y(g, m, function (e) {
        const {
          pack25519: t
        } = i.lowlevel;
        const n = l(Uint8Array, 32);
        t(n, e);
        return n[0] & 1;
      }(g) ^ n);
      e[0].set(g);
      e[1].set(s);
      e[2].set(p());
      a(e[3], e[0], e[1]);
    }(s, o, r);
    const c = f();
    (function (e, t) {
      const n = [u(), u(), u(), u()];
      const r = _();
      (function (e, t) {
        const n = _();
        (function (e, t) {
          e[0].set(t[0]);
          e[1].set(t[1]);
          e[2].set(t[2]);
        })(n, t);
        T(e, n);
      })(n, t);
      v(r, n);
      T(n, r);
      v(r, n);
      T(n, r);
      (function (e, t) {
        const {
          M: n
        } = i.lowlevel;
        n(e[0], t[0], t[3]);
        n(e[1], t[1], t[2]);
        n(e[2], t[2], t[3]);
        n(e[3], t[0], t[1]);
      })(e, n);
    })(c, s);
    return c;
  }(e));
};
exports.inv25519 = P;
exports.modL = c;
exports.p3Element = f;
exports.pack = C;
exports.reduce = function (e, t) {
  for (let n = 0; n < 64; ++n) {
    t[n] = e[n];
    e[n] = 0;
  }
  c(e, t);
  t.fill(0);
};
exports.runInAllocationScope = s;
exports.scalarmultBase = function (e, t) {
  const n = [u(), u(), u(), u()];
  i.lowlevel.scalarbase(n, t);
  C(e, n);
};
exports.unpack = function (e, t) {
  const n = f();
  if (I(n, t) !== 0) {
    return -1;
  }
  (function (e, t) {
    S(e[0], t[0]);
    e[1].set(t[1]);
    e[2].set(t[2]);
    S(e[3], t[3]);
  })(e, n);
  return 0;
};
exports.unpackneg = I;
var i = require("./194121.js");
var a = r(require("./415227.js"));
let o = null;
function s(e) {
  const t = o;
  o = [];
  try {
    return e();
  } finally {
    var n;
    ((n = o) !== null && n !== undefined ? n : []).forEach(e => {
      e.fill(0);
    });
    o = t;
  }
}
function l(e, t) {
  if (o == null) {
    throw (0, a.default)("allocate called outside of active scope");
  }
  return new e(t);
}
function u(e) {
  const t = l(Float64Array, 16);
  if (e) {
    if (e.length > 16) {
      throw (0, a.default)("Incorrect initialiser array provided to the fieldElement");
    }
    for (let n = 0; n < e.length; n++) {
      t[n] = e[n];
    }
  }
  return t;
}
function c(e, t) {
  i.lowlevel.modL(e, t);
}
const d = () => u([0]);
const p = () => u([1]);
function f() {
  return [u(), u(), u(), u()];
}
function _() {
  return [u(), u(), u()];
}
function g(e, t) {
  let n = 0;
  let r = t;
  for (; r > 0;) {
    const t = r % 65536;
    e[n] = t;
    r = (r - t) / 65536;
    n++;
  }
}
function m(e, t) {
  const {
    S: n,
    M: r
  } = i.lowlevel;
  const a = u([2]);
  const o = u();
  n(o, t);
  r(e, a, o);
}
function h(e, t) {
  const {
    S: n,
    M: r,
    A: a
  } = i.lowlevel;
  const o = d();
  const s = p();
  const l = u();
  const c = u();
  const f = u();
  const _ = u();
  g(o, 486662);
  n(l, t);
  r(c, o, t);
  a(f, l, c);
  a(_, f, s);
  r(e, t, _);
}
function y(e, t, n) {
  if (n === 1) {
    e.set(t);
  }
}
const E = new Uint8Array([176, 160, 14, 74, 39, 27, 238, 196, 120, 228, 47, 173, 6, 24, 67, 47, 167, 215, 251, 61, 153, 0, 77, 43, 11, 223, 193, 79, 128, 36, 131, 43]);
function S(e, t) {
  const {
    Z: n
  } = i.lowlevel;
  n(e, d(), t);
}
function v(e, t) {
  const {
    M: n
  } = i.lowlevel;
  n(e[0], t[0], t[3]);
  n(e[1], t[1], t[2]);
  n(e[2], t[2], t[3]);
}
function T(e, t) {
  const {
    S: n,
    A: r,
    Z: a
  } = i.lowlevel;
  n(e[0], t[0]);
  n(e[2], t[1]);
  m(e[3], t[2]);
  r(e[1], t[0], t[1]);
  const o = u();
  n(o, e[1]);
  r(e[1], e[2], e[0]);
  a(e[2], e[2], e[0]);
  a(e[0], o, e[1]);
  a(e[3], e[3], e[2]);
}
const M = new Uint8Array([6, 126, 69, 255, 170, 4, 110, 204, 130, 26, 125, 75, 209, 211, 161, 197, 126, 79, 252, 3, 220, 8, 123, 210, 187, 6, 160, 96, 244, 237, 38, 15]);
function A(e, t) {
  const {
    M: n,
    A: r
  } = i.lowlevel;
  const a = p();
  const o = d();
  g(o, 486662);
  const s = u();
  m(s, t);
  const l = u();
  r(l, s, a);
  const c = u();
  P(c, l);
  const f = u();
  n(f, c, o);
  const _ = u();
  S(_, f);
  const E = u();
  h(E, _);
  const v = function (e) {
    const {
      S: t,
      M: n,
      pow2523: r,
      pack25519: a
    } = i.lowlevel;
    const o = u();
    const s = u();
    const l = u();
    const c = u();
    const d = u();
    r(o, e);
    t(s, o);
    t(l, s);
    n(c, l, e);
    n(d, c, e);
    const p = new Uint8Array(32);
    a(p, d);
    return p[31] & 1;
  }(E);
  const T = u([0]);
  y(T, o, v);
  const M = u();
  r(M, _, T);
  const A = u();
  S(A, M);
  y(M, A, v);
  e.set(M);
}
function b(e, t) {
  return s(() => A(e, t));
}
function C(e, t) {
  const n = u();
  const r = u();
  const a = u();
  const {
    M: o,
    pack25519: s
  } = i.lowlevel;
  P(a, t[2]);
  o(n, t[0], a);
  o(r, t[1], a);
  s(e, r);
  const l = new Uint8Array(32);
  s(l, n);
  e[31] ^= (l[0] & 1) << 7;
}
function P(e, t) {
  const n = u();
  n.set(t);
  const {
    M: r,
    S: a
  } = i.lowlevel;
  for (let e = 253; e >= 0; --e) {
    a(n, n);
    if (e !== 2 && e !== 4) {
      r(n, n, t);
    }
  }
  e.set(n);
}
function O(e, t) {
  const {
    pack25519: n,
    crypto_verify_32: r
  } = i.lowlevel;
  const a = new Uint8Array(32);
  const o = new Uint8Array(32);
  n(a, e);
  n(o, t);
  return r(a, 0, o, 0);
}
function I(e, t) {
  const {
    set25519: n,
    S: r,
    M: a,
    Z: o,
    A: s,
    D: l,
    unpack25519: c,
    pow2523: f
  } = i.lowlevel;
  const _ = u();
  const g = u();
  const m = u();
  const h = u();
  const y = u();
  const E = u();
  const S = u();
  n(e[2], p());
  c(e[1], t);
  r(m, e[1]);
  a(h, m, l);
  o(m, m, e[2]);
  s(h, e[2], h);
  r(y, h);
  r(E, y);
  a(S, E, y);
  a(_, S, m);
  a(_, _, h);
  f(_, _);
  a(_, _, m);
  a(_, _, h);
  a(_, _, h);
  a(e[0], _, h);
  r(g, e[0]);
  a(g, g, h);
  if (O(g, m)) {
    a(e[0], e[0], u([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]));
  }
  r(g, e[0]);
  a(g, g, h);
  if (O(g, m)) {
    return -1;
  } else {
    if (function (e) {
      const {
        pack25519: t
      } = i.lowlevel;
      const n = new Uint8Array(32);
      t(n, e);
      return n[0] & 1;
    }(e[0]) === t[31] >> 7) {
      o(e[0], d(), e[0]);
    }
    a(e[3], e[0], e[1]);
    return 0;
  }
}