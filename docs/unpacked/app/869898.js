function n(e, t) {
  const r = function () {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
      i[a] = arguments[a];
    }
    const o = t ? t.apply(this, i) : i[0];
    if (o == null) {
      return e.apply(this, i);
    }
    const s = r.cache;
    if (s.has(o)) {
      return s.get(o);
    }
    const l = e.apply(this, i);
    r.cache = s.set(o, l) || s;
    return l;
  };
  r.cache = new (n.Cache || Map)();
  return r;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = n;
n.Cache = Map;