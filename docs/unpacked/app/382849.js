var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NO_DEFAULT_VALUE = exports.INIT = exports.Attr = undefined;
exports.collection = function (e) {
  return {
    val: e,
    type: v
  };
};
exports.convert = function (e) {
  const t = new e({}, {
    _internalInitializationDoNotUse: true
  });
  const n = {
    name: e.name || "Unknown",
    props: {},
    session: {},
    derived: {},
    collections: {},
    isIdType: e.isIdType
  };
  if (e.Collection) {
    n.Collection = e.Collection;
  }
  if (e.idClass) {
    n.idClass = e.idClass;
  }
  if (e.allowedIds) {
    n.allowedIds = e.allowedIds;
  }
  const r = new Set(["constructor"]);
  const i = new Set(["collection", "parent", "revisionNumber", "__changes", "__fired", "__initialized"]);
  const a = new Map(b(t).filter(e => {
    let [t, n] = e;
    return !i.has(t) && (n == null ? undefined : n.type) === S;
  }).map(e => {
    let [t, {
      fn: n
    }] = e;
    return [n, t];
  }));
  const u = (0, l.default)(e => {
    var t;
    const n = (0, s.default)((t = e.dependencies) !== null && t !== undefined ? t : [], e => {
      if (e.dependencyKey != null) {
        return [e.dependencyKey];
      }
      const t = a.get(e);
      if (t != null) {
        return [t];
      } else {
        return u(e);
      }
    });
    return Array.from(new Set(n));
  });
  b(t).forEach(t => {
    let [a, s] = t;
    if (!i.has(a) && s != null) {
      switch (s.type) {
        case h:
          n.props[a] = T(s);
          break;
        case y:
          n.session[a] = T(s);
          break;
        case E:
          n.derived[a] = (0, o.default)(s, "type");
          r.add(s.fn.name);
          break;
        case S:
          {
            const e = s.fn;
            n.derived[a] = {
              fn() {
                return e(this);
              },
              deps: u(e)
            };
            r.add(e.name);
            break;
          }
        case v:
          n.collections[a] = s.val;
          break;
        default:
          throw (0, p.default)(`Invalid defineModel Class type for ${e.name}:${a}.`);
      }
    }
  });
  const c = function (e) {
    const t = {};
    const n = Object.getPrototypeOf({});
    let r = e;
    Object.getOwnPropertyNames(r).forEach(e => {
      if (typeof r[e] == "function") {
        t[e] = r[e];
      }
    });
    for (; (r = Object.getPrototypeOf(r)) && r !== n;) {
      Object.getOwnPropertyNames(r).forEach(e => {
        if (!(e in t)) {
          t[e] = r[e];
        }
      });
    }
    return t;
  }(t);
  r.forEach(e => {
    delete c[e];
  });
  Object.assign(n, c);
  return n;
};
exports.derived = function (e, t) {
  return {
    fn: e,
    deps: t,
    type: E
  };
};
exports.getter = function (e) {
  return {
    fn: e,
    type: S
  };
};
exports.prop = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : m;
  const t = {
    defaultValue: e,
    type: h
  };
  return t;
};
exports.session = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : m;
  const t = {
    defaultValue: e,
    type: y
  };
  return t;
};
exports.stateExtend = function (e, t) {
  const n = (0, c.default)(t.name, "protoDef.name");
  delete t.name;
  const r = function (e, t) {
    return {
      [t]: class extends e {}
    }[t];
  }(e, n);
  const s = r.prototype;
  const l = s.__props = [];
  const u = s.__session = [];
  const d = s.__derived = [];
  const m = s._collections = {};
  const h = s._definition = {};
  const y = s._derived = {};
  (0, a.default)(t.props, function (e, t) {
    l.push(t);
    A(s, t, e, g.PROP);
  });
  (0, a.default)(t.session, function (e, t) {
    u.push(t);
    A(s, t, e, g.SESSION);
  });
  (0, a.default)(t.derived, function (e, t) {
    d.push(t);
    (function (e, t, n) {
      const r = M(t);
      const i = n.fn;
      e._definition[t] = e._derived[t] = {
        sk: r,
        evt: "change:" + t,
        attr: g.DERIVED,
        fn: i,
        deps: n.deps
      };
      Object.defineProperty(e, t, {
        get() {
          const e = this[r];
          if (e !== _) {
            return e;
          }
          const t = i.call(this);
          this[r] = t;
          return t;
        },
        set() {
          throw new TypeError(`'${t}' is a derived property, it can't be set directly.`);
        }
      });
    })(s, t, e);
  });
  (0, a.default)(t.collections, function (e, t) {
    m[t] = e;
  });
  Object.assign(s, (0, o.default)(t, ["props", "session", "derived", "collections"]));
  const E = l.concat(u);
  const S = E.length;
  Object.defineProperties(s, {
    attributes: {
      get() {
        const e = {};
        for (let t = 0; t < S; ++t) {
          e[E[t]] = this[E[t]];
        }
        return e;
      }
    },
    isState: {
      get: () => true,
      set() {
        throw (0, p.default)("attempt to set isState");
      }
    }
  });
  const v = {};
  for (let e = 0; e < S; e++) {
    const t = E[e];
    if ("defaultValue" in h[t]) {
      v[t] = _;
    }
  }
  if (!(0, i.default)(v)) {
    s.__defaults = v;
  }
  if (d.length) {
    const e = [];
    const t = {};
    const n = {};
    (0, a.default)(y, (r, i) => {
      n[i] = true;
      (0, a.default)(r.deps, r => {
        n[r] = true;
        (t[r] || (t[r] = [])).push(i);
        e.push([i, r]);
      });
    });
    if (e.length) {
      s._deps = t;
      s._topo = f.default.array(Object.keys(n), e).reverse();
      s._topoIndexMap = new Map(s._topo.map((e, t) => [e, t]));
    }
  }
  return r;
};
var i = r(require("../vendor/441609.js"));
var a = r(require("../vendor/402525.js"));
var o = r(require("../vendor/957557.js"));
var s = r(require("../vendor/594654.js"));
var l = r(require("../vendor/288306.js"));
var u = r(require("../vendor/513218.js"));
var c = r(require("./670983.js"));
var d = require("./724976.js");
var p = r(require("./556869.js"));
var f = r(require("../vendor/394633.js"));
const _ = {
  sentinel: "DEFAULT VALUE PLACEHOLDER"
};
exports.INIT = _;
const g = {
  PROP: "PROP",
  SESSION: "SESSION",
  DERIVED: "DERIVED"
};
exports.Attr = g;
const m = Symbol("NO_DEFAULT_VALUE");
exports.NO_DEFAULT_VALUE = m;
const h = "Props";
const y = "Session";
const E = "Derived";
const S = "Getter";
const v = "Collection";
function T(e) {
  const t = e.defaultValue;
  if (t === m) {
    return {};
  } else {
    return {
      defaultValue: t
    };
  }
}
function M(e) {
  return "__x_" + e;
}
function A(e, t, n, r) {
  if (!(0, u.default)(n)) {
    throw (0, p.default)("Invalid Prop/Session definition.");
  }
  const i = {
    sk: M(t),
    evt: `change:${t}`,
    attr: r
  };
  if (n.defaultValue !== undefined) {
    i.defaultValue = n.defaultValue;
  }
  e._definition[t] = i;
  const a = (0, d.isFunction)(i.defaultValue);
  if (i.defaultValue != null && !a) {
    if (Array.isArray(i.defaultValue)) {
      throw (0, p.default)("Do not return mutable types as default values as they are shared. Type: Array provided.");
    }
    if ((0, u.default)(i.defaultValue)) {
      throw (0, p.default)("Do not return mutable types as default values as they are shared. Type: WAUnsafeObjectType provided.");
    }
  }
  const o = i.sk;
  Object.defineProperty(e, t, {
    set(e) {
      this.set(t, e);
    },
    get() {
      const e = this[o];
      if (e !== _) {
        return e;
      } else if (a) {
        return this[o] = i.defaultValue();
      } else {
        return i.defaultValue;
      }
    }
  });
}
function b(e) {
  const t = [];
  for (const n in e) {
    if (typeof e[n] != "function") {
      t.push([n, e[n]]);
    }
  }
  return t;
}