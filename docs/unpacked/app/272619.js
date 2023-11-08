var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGetterFactories = function (e) {
  const {
    root: t,
    rootEqualityCheck: n,
    createCache: r = _
  } = e || {};
  const i = r();
  const h = (() => {
    const e = o;
    o++;
    return e;
  })();
  const y = () => {
    const e = E;
    E++;
    return e;
  };
  let E = 0;
  const S = t != null ? t : function (e) {
    let {
      getterGroupId: t,
      getterId: n,
      resultEqualityCheck: r,
      cache: i
    } = e;
    const a = u(n);
    const o = c(n);
    const s = d(n);
    return l({
      getterGroupId: t,
      getterId: n,
      root: null,
      cache: i,
      props: {
        kind: "identity",
        dependencies: []
      },
      recomputeIfNeeded: (e, n, i) => {
        const l = i[t];
        const u = l[a];
        const c = e;
        const d = l[s];
        const f = e == null ? 0 : e.revisionNumber || 0;
        if (u !== undefined && d === f && r(c, m(u))) {
          return n;
        }
        const _ = n + 1;
        l[a] = c === undefined ? p : c;
        l[o] = _;
        l[s] = f;
        return _;
      }
    });
  }({
    getterGroupId: h,
    getterId: y(),
    resultEqualityCheck: n != null ? n : f,
    cache: i
  });
  if (S.kind !== "identity") {
    throw (0, a.default)(`root must be an identity getter but got kind ${S.kind}`);
  }
  return {
    field: (e, t) => {
      const {
        default: n,
        getDefault: r,
        resultEqualityCheck: a = f
      } = t || {};
      let o;
      o = r != null ? t => {
        var n;
        let [i] = t;
        if ((n = i[e]) !== null && n !== undefined) {
          return n;
        } else {
          return r();
        }
      } : n === undefined ? t => {
        let [n] = t;
        return n[e];
      } : t => {
        var r;
        let [i] = t;
        if ((r = i[e]) !== null && r !== undefined) {
          return r;
        } else {
          return n;
        }
      };
      return s({
        getterGroupId: h,
        getterId: y(),
        root: S,
        cache: i,
        resultFunc: o,
        resultEqualityCheck: a,
        props: {
          kind: "field",
          dependencyKey: e,
          dependencies: [S]
        }
      });
    },
    computed: (e, t, n) => {
      const {
        resultEqualityCheck: r = f
      } = n || {};
      return s({
        getterGroupId: h,
        getterId: y(),
        root: S,
        cache: i,
        resultFunc: e,
        resultEqualityCheck: r,
        props: {
          kind: "computed",
          dependencies: t
        }
      });
    },
    unsafeIdentityGetter: S,
    clearCacheFor: e => {
      i.delete(g(e));
    }
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./556869.js"));
let o = 0;
function s(e) {
  let {
    getterGroupId: t,
    getterId: n,
    root: r,
    cache: o,
    resultFunc: s,
    resultEqualityCheck: f,
    props: _
  } = e;
  const {
    dependencies: g
  } = _;
  const h = g.length;
  const y = u(n);
  const E = c(n);
  const S = d(n);
  return l({
    getterGroupId: t,
    getterId: n,
    root: r,
    cache: o,
    props: (0, i.default)((0, i.default)({}, _), {}, {
      resultFunc: s
    }),
    recomputeIfNeeded: (e, n, r) => {
      const i = r[t];
      const o = i[E];
      const l = i[S];
      if (l != null && o != null) {
        if (l === n) {
          return o;
        }
        if (l != null && h > 0) {
          let e = false;
          for (let t = 0; t < h; t++) {
            const n = g[t];
            const i = n.$$extractChangedAt(r[n.$$getterGroupId]);
            e = i == null || i > l;
            if (e) {
              break;
            }
          }
          if (!e) {
            i[S] = n;
            return o;
          }
        }
      }
      const u = new Array(h);
      for (let e = 0; e < h; e++) {
        const t = g[e];
        const n = t.$$extractResult(r[t.$$getterGroupId]);
        if (n === undefined) {
          throw (0, a.default)("No result was stored");
        }
        u[e] = m(n);
      }
      const c = s(u);
      const d = i[y];
      if (o != null && d !== undefined && f(c, m(d))) {
        i[S] = n;
        return o;
      } else {
        i[y] = c === undefined ? p : c;
        i[E] = n;
        i[S] = n;
        return n;
      }
    }
  });
}
function l(e) {
  let {
    getterGroupId: t,
    getterId: n,
    root: r,
    cache: i,
    recomputeIfNeeded: o,
    props: s
  } = e;
  const l = s.dependencies;
  const p = u(n);
  const f = c(n);
  const _ = d(n);
  const h = e => {
    const n = g(e);
    const r = {};
    for (let e = 0; e < T.length; e++) {
      const t = T[e];
      const i = v[t];
      let a = i.get(n);
      if (a == null) {
        a = {};
        i.set(n, a);
      }
      r[t] = a;
    }
    const i = S.$$recomputeIfNeeded(e, S.$$extractChangedAt(r[S.$$getterGroupId]) || 0, r);
    const o = r[t];
    const s = o[_];
    if (s == null || i > s) {
      for (let t = 0; t < E.length; t++) {
        let n = s != null;
        const a = E[t];
        for (let t = 0; t < a.length; t++) {
          const o = a[t].$$recomputeIfNeeded(e, i, r);
          if (s == null || o > s) {
            n = false;
          }
        }
        if (n) {
          break;
        }
      }
    }
    const l = o[p];
    if (l === undefined) {
      throw (0, a.default)("No result was stored");
    }
    return m(l);
  };
  const y = Object.assign(h, {
    kind: s.kind,
    dependencies: l,
    dependencyKey: s.dependencyKey,
    resultFunc: s.resultFunc,
    $$getterGroupId: t,
    $$root: r || h,
    $$cache: i,
    $$recomputeIfNeeded: o,
    $$extractChangedAt: e => e[f],
    $$extractResult: e => e[p]
  });
  const E = function (e) {
    const t = [e];
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      if (n.dependencies != null) {
        t.push(...n.dependencies);
      }
    }
    const n = Array.from(new Set(t.reverse()));
    const r = [];
    const i = [];
    for (let e = 0; e < n.length; e++) {
      const t = n[e];
      switch (t.kind) {
        case "identity":
          break;
        case "field":
          r.push(t);
          break;
        case "computed":
          i.push(t);
          break;
        default:
          throw (0, a.default)(`Invalid getter kind: ${t.kind}`);
      }
    }
    return [r, i].filter(e => e.length > 0);
  }(y);
  const S = y.$$root;
  for (let e = 0; e < l.length; e++) {
    if (l[e].$$root !== S) {
      throw (0, a.default)("Getter created with multiple roots. This means you used getters that came from different `createGetterFactories()` calls as dependencies in a `computed()` getter. If you want to do this, you must pass the identity getter created by one of the `createGetterFactories()` calls as the `root` option to the other.");
    }
  }
  const v = {
    [S.$$getterGroupId]: S.$$cache
  };
  const T = [S.$$getterGroupId];
  for (let e = 0; e < E.length; e++) {
    for (let t = 0; t < E[e].length; t++) {
      const {
        $$getterGroupId: n,
        $$cache: r
      } = E[e][t];
      if (v[n] == null) {
        T.push(n);
        v[n] = r;
      }
    }
  }
  return y;
}
const u = e => e * 3;
const c = e => e * 3 + 1;
const d = e => e * 3 + 2;
const p = new class {
  toString() {
    return "UndefinedSentinel";
  }
}();
function f(e, t) {
  return e === t;
}
function _() {
  return new Map();
}
function g(e) {
  if (e == null) {
    throw (0, a.default)(`Getter was called with ${String(e)} data.`);
  }
  const t = e.id;
  if (t == null) {
    throw (0, a.default)(`Data passed to getter must include an id property (it's how we memoize) but got ${String(t)}`);
  }
  return t.toString();
}
function m(e) {
  if (e === p) {
    return undefined;
  } else {
    return e;
  }
}