Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
class n {
  constructor(e) {
    this.promise = e;
    this.lastUsedTime = this.createdTime = +Date.now();
  }
}
exports.default = class {
  constructor(e, t) {
    let {
      maxCached: n = 10,
      maxAge: r = 1 / 0,
      shouldCache: i
    } = t;
    this._cache = {};
    this._maxCached = n;
    this._maxAge = r;
    this._createPromiseFunc = e;
    this._shouldCacheFunc = i;
  }
  getOrRun(e) {
    const t = this._cache;
    if (this._maxAge !== 1 / 0) {
      const e = Date.now() - this._maxAge;
      const n = Object.keys(t);
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (t[i].createdTime < e) {
          delete t[i];
        }
      }
    }
    const r = t[e];
    if (r) {
      r.lastUsedTime = +Date.now();
      return r.promise;
    }
    const i = Object.keys(t);
    if (i.length >= this._maxCached) {
      let e;
      let n;
      for (let r = 0; r < i.length; r++) {
        const a = i[r];
        const o = t[a];
        if (n == null || o.lastUsedTime < n) {
          n = o.lastUsedTime;
          e = a;
        }
      }
      if (e != null) {
        delete t[e];
      }
    }
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) {
      o[s - 1] = arguments[s];
    }
    const l = this._createPromiseFunc.apply(undefined, [e, ...o]);
    t[e] = new n(l);
    l.then(t => {
      const n = this._shouldCacheFunc;
      if (n && this._cache[e] === l && !n(t)) {
        delete this._cache[e];
      }
    }).catch(() => {
      if (this._cache[e] === l) {
        delete this._cache[e];
      }
    });
    return l;
  }
  isCached(e) {
    const t = this._cache[e];
    if (t) {
      let e = true;
      if (this._maxAge !== 1 / 0) {
        const n = Date.now() - this._maxAge;
        e = t.createdTime >= n;
      }
      return e && Boolean(t);
    }
    return false;
  }
};