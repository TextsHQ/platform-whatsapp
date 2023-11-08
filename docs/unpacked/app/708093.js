var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./487769.js");
var o = require("./237590.js");
var s = r(require("./395654.js"));
var l = r(require("./556869.js"));
class u extends s.default {
  constructor() {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    if (e.parent) {
      this.parent = e.parent;
    }
    const {
      model: t,
      comparator: n
    } = this.constructor;
    if (!t) {
      throw (0, l.default)("Collection initialized without model. It is likely that you have a circular dependency. Set a breakpoint to find it and use inline `require` instead of `import` to avoid it.");
    }
    this.modelClass = t;
    if (n) {
      this._comparator = n;
    }
    this._reset();
    const r = this;
    Object.defineProperty(this, "length", {
      get: () => r._models.length
    });
  }
  add(e, t) {
    let n;
    n = Array.isArray(e) ? e.slice() : e ? [e] : [];
    return this.set(n, (0, i.default)({
      merge: false,
      add: true,
      remove: false
    }, t));
  }
  set(e, t) {
    if (!e) {
      __LOG__(3)`collection:set called with no models`;
      return [];
    }
    const n = (0, i.default)({
      add: true,
      remove: true,
      merge: true
    }, t);
    let r;
    let a;
    let o;
    let s;
    const l = this._comparator && n.sort !== false;
    const u = [];
    const c = [];
    const d = {};
    const {
      add: p,
      merge: f,
      remove: _
    } = n;
    const g = n.at != null ? n.at : undefined;
    const m = !(l || !p || !_) && [];
    for (let t = 0, i = e.length; t < i; t++) {
      s = e[t];
      if (this.isModel(s)) {
        a = s;
      }
      r = s.id;
      if (!r) {
        __LOG__(3)`collection:set model has no id`;
        continue;
      }
      o = this.get(r);
      if (o) {
        const r = o;
        if (_) {
          d[o.id.toString()] = true;
        }
        if (f) {
          s = a && s === a ? a.attributes : s;
          r.set(s, n);
          this._getAggregators().forEach(e => {
            e.add([r]);
          });
        }
        e[t] = r;
      } else if (p) {
        a = e[t] = this._prepareModel(s, n);
        if (!a) {
          continue;
        }
        {
          const e = a;
          u.push(e);
          this._addReference(e);
        }
      }
      a = o || a;
      if (!a) {
        continue;
      }
      const i = a;
      if (!(!m || a.id && d[a.id.toString()])) {
        m.push(i);
      }
      d[i.id.toString()] = true;
    }
    if (_) {
      for (let e = 0, t = this.length; e < t; e++) {
        a = this._models[e];
        const t = a;
        if (!d[a.id.toString()]) {
          c.push(t);
        }
      }
      if (c.length) {
        this.remove(c, (0, i.default)({}, n));
      }
    }
    let h;
    if (u.length || m.length) {
      if (l) {
        h = true;
      }
      if (typeof g == "number") {
        this._models.splice(g, 0, ...u);
      } else {
        const e = m || u;
        for (let t = 0, n = e.length; t < n; t++) {
          this._models.push(e[t]);
        }
      }
      this._getAggregators().forEach(e => {
        e.add(u);
      });
    }
    if (h) {
      this.sort({
        silent: true
      });
    }
    if (!n.silent) {
      for (let e = 0, t = u.length; e < t; e++) {
        a = u[e];
        if (a.trigger) {
          a.trigger("add", a, this, n);
        } else {
          this.trigger("add", a, this, n);
        }
      }
      if (h || m.length) {
        this.trigger("sort", this, n);
      }
    }
    return e;
  }
  remove(e) {
    let t;
    let n;
    let r;
    let i;
    let a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const o = Array.isArray(e) ? e.slice() : [e];
    const s = [];
    for (let e = 0, l = o.length; e < l; e++) {
      i = o[e];
      if (i && (r = i instanceof this.modelClass ? i.id : i, t = s[e] = this.get(r), t)) {
        const e = t;
        this._deIndex(t);
        n = this._models.indexOf(t);
        this._models.splice(n, 1);
        if (!a.silent) {
          a.index = n;
          if (e.trigger) {
            e.trigger("remove", t, this, a);
          } else {
            this.trigger("remove", t, this, a);
          }
        }
        this._removeReference(e);
      }
    }
    this._getAggregators().forEach(e => {
      e.remove(s);
    });
    return s;
  }
  reset() {
    for (let e = 0, t = this._models.length; e < t; e++) {
      this._removeReference(this._models[e]);
    }
    this._reset();
    this.trigger("reset", this);
  }
  sort() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!this._comparator) {
      throw (0, l.default)("Cannot sort without comparator");
    }
    this._models.sort(this._comparator.bind(this));
    if (!e.silent) {
      this.trigger("sort", this, e);
    }
    return this;
  }
  replaceId(e, t) {
    const n = this.get(e);
    if (n) {
      this._removeFromIndex(e);
      n.set({
        id: t
      });
      this._addIndex(n);
    }
  }
  reorderMutate(e, t) {
    (0, a.arrayMoveMutate)(this._models, e, t);
  }
  get(e) {
    return this._index[e];
  }
  assertGet(e) {
    const t = this._index[e];
    if (!t) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      SEND_LOGS("Collection:assertGet no result");
    }
    return t;
  }
  at(e) {
    return this._models[e];
  }
  serialize() {
    return this.map(e => e.toJSON());
  }
  toJSON() {
    return this.serialize();
  }
  isModel(e) {
    return e instanceof this.modelClass;
  }
  includes(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (t === 0) {
      return e instanceof this.modelClass && this.get(e.id) != null;
    } else {
      return this._models.includes(e, t);
    }
  }
  indexOf(e, t) {
    return this._models.indexOf(e, t);
  }
  lastIndexOf(e, t) {
    return this._models.lastIndexOf(e, t);
  }
  every(e) {
    return this._models.every(e);
  }
  some(e) {
    return this._models.some(e);
  }
  forEach(e) {
    this._models.forEach(e);
  }
  map(e) {
    return this._models.map(e);
  }
  filter(e) {
    return this._models.filter(e);
  }
  findFirst(e) {
    return this._models.find(e);
  }
  reduce(e, t) {
    return this._models.reduce(e, t);
  }
  slice(e, t) {
    return this._models.slice(e, t);
  }
  where(e) {
    return this.filter(t => {
      for (const n in e) {
        if (e[n] !== t.get(n)) {
          return false;
        }
      }
      return true;
    });
  }
  head() {
    return this._models[0];
  }
  last() {
    return this._models[this._models.length - 1];
  }
  toArray() {
    return this._models.slice();
  }
  getModelsArray() {
    return this._models;
  }
  reorder(e, t) {
    return (0, a.arrayMove)(this._models, e, t);
  }
  _reset() {
    this._models = [];
    this._index = {};
    this._getAggregators(false).forEach(e => {
      e.reset();
    });
  }
  _prepareModel(e, t) {
    if (this.isModel(e)) {
      if (!e.collection) {
        e.collection = this;
      }
      return e;
    }
    const n = (0, i.default)((0, i.default)({}, t), {}, {
      collection: this
    });
    try {
      return new this.modelClass(e, n);
    } catch (e) {
      var r;
      var a;
      __LOG__(4, undefined, new Error(), true)`collection:_prepareModel for model ${(r = this == null || (a = this.modelClass) === null || a === undefined ? undefined : a.name) !== null && r !== undefined ? r : ""} exception: ${e.stack}`;
      return void SEND_LOGS("collection-model-creation-error");
    }
  }
  _addReference(e) {
    this._addIndex(e);
    if (!e.collection) {
      e.collection = this;
    }
    if (e.on) {
      e.on("all", this._handleModelEvent, this);
    }
  }
  _removeReference(e) {
    if (this === e.collection) {
      delete e.collection;
    }
    this._deIndex(e);
    if (e.off) {
      e.off("all", this._handleModelEvent, this);
    }
  }
  _addIndex(e) {
    this._index[e.id] = e;
  }
  _deIndex(e) {
    delete this._index[e.id];
  }
  _removeFromIndex(e) {
    if (this.get(e)) {
      delete this._index[e];
    }
  }
  _handleModelEvent(e, t, n, r) {
    const i = e.indexOf(":");
    const a = i === -1 ? e : e.slice(0, i);
    if (a !== "add" && a !== "remove" || n === this) {
      if (a === "destroy") {
        this.remove(t, r);
      }
      this.trigger.apply(this, arguments);
    }
  }
  _getAggregators() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (this._aggregators == null) {
      if (!e) {
        return o.EMPTY_AGGREGATORS;
      }
      this._aggregators = (0, o.groupMethodsByKind)(this).aggregate;
    }
    return this._aggregators;
  }
}
exports.default = u;