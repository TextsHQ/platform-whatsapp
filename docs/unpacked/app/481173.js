var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseModel = undefined;
Object.defineProperty(exports, "collection", {
  enumerable: true,
  get: function () {
    return _.collection;
  }
});
exports.defineModel = function (e) {
  const t = (0, _.convert)(e);
  const n = (0, _.stateExtend)(y, t);
  if (e.Proxy) {
    const r = (0, c.genMirrorMask)(t);
    n.prototype.mirrorMask = r;
    n.prototype.proxyName = e.Proxy;
    (0, g.ProxyStateFactory)(e.Proxy, t, r);
  }
  return n;
};
Object.defineProperty(exports, "derived", {
  enumerable: true,
  get: function () {
    return _.derived;
  }
});
Object.defineProperty(exports, "getter", {
  enumerable: true,
  get: function () {
    return _.getter;
  }
});
Object.defineProperty(exports, "prop", {
  enumerable: true,
  get: function () {
    return _.prop;
  }
});
Object.defineProperty(exports, "session", {
  enumerable: true,
  get: function () {
    return _.session;
  }
});
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/907287.js"));
var o = r(require("../vendor/402525.js"));
var s = r(require("../vendor/114176.js"));
var l = r(require("./670983.js"));
var u = require("./724976.js");
var c = require("./363111.js");
var d = require("./780549.js");
var p = r(require("./395654.js"));
var f = r(require("./97359.js"));
var _ = require("./382849.js");
var g = require("./974922.js");
var m = r(require("./556869.js"));
const h = /^change:/;
class y extends p.default {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    this.stale = (0, _.session)(false);
    this.revisionNumber = 1;
    this.__fired = null;
    this.__changes = null;
    this.__initialized = false;
    if (t._internalInitializationDoNotUse) {
      return;
    }
    this.stale = (e == null ? undefined : e.stale) || this.getDefault("stale");
    this.parent = t.parent;
    this.collection = t.collection;
    this._initDeriveds();
    this._initCollections();
    const n = this.__defaults;
    const r = n ? (0, i.default)((0, i.default)({}, n), e) : e;
    if (r && !function (e) {
      for (const t in e) {
        if (e.hasOwnProperty(t)) {
          return false;
        }
      }
      return true;
    }(r)) {
      this.set(r, (0, i.default)({
        silent: true
      }, t));
    }
    this.initialize();
    this.__initialized = true;
  }
  initialize() {
    if (this.collection && this.id && !this.collection.modelClass.prototype.isIdType(this.id)) {
      throw (0, m.default)(`Model id:${String(this.id)} is wrong type`);
    }
    this._uiObservers = 0;
    if (this.mirrorMask) {
      this.mirror = new c.BaseMirror(this);
    }
  }
  _refreshStaleModel() {
    if (this._uiObservers || !this.stale) {
      if (!this.getCollection) {
        throw (0, m.default)("base_model:_refreshStaleModel getCollection does not exist");
      }
      this.getCollection().find(this.id);
    }
  }
  incObservers(e) {
    this._uiObservers++;
    if (e) {
      return;
    }
    if ((0, f.default)(require("./99398.js")).online && this.stale) {
      if (d.Cmd.uiBusy) {
        this.listenToOnce(d.Cmd, "ui_idle", this._refreshStaleModel);
      } else {
        this._refreshStaleModel();
      }
    }
  }
  decObservers() {
    if (this._uiObservers > 0) {
      this._uiObservers--;
    }
    if (this._uiObservers === 0) {
      this.stopListening(d.Cmd, "ui_idle", this._refreshStaleModel);
    }
  }
  hasObservers() {
    return this._uiObservers > 0;
  }
  getObservers_TEST_ONLY() {
    return null;
  }
  addChild(e, t) {
    const n = {
      [e]: t
    };
    this.set(n, {
      silent: true
    });
    this.listenTo(t, "all", this._getCachedEventBubblingHandler(e));
  }
  get(e) {
    return this[e];
  }
  set(e, t, n) {
    var r;
    let i = n;
    if (typeof e == "string") {
      return this._set(e, t, i);
    } else {
      i = t;
      if ((r = i) === null || r === undefined ? undefined : r.merge) {
        return this._set((0, s.default)(e, e => e === undefined), i);
      } else {
        return this._set(e, i);
      }
    }
  }
  _markChange(e, t) {
    if (this.__initialized) {
      this._getChanges().push({
        key: e,
        oldValue: t
      });
      if (this.__fired) {
        this.__fired[e] = false;
      }
    }
  }
  _set(e, t, n) {
    this.revisionNumber++;
    const r = !!this.__changes;
    const [i, a] = (0, u.isString)(e) ? [{
      [e]: t
    }, n] : [e, t];
    const o = new Set();
    Object.keys(i).forEach(e => {
      const t = this._setKV(e, i[e], a);
      if (!(t == null)) {
        t.forEach(e => {
          o.add(e);
        });
      }
    });
    if (o.size > 0) {
      const e = (0, l.default)(this._topo, "_topo unexpectedly undefined");
      const t = (0, l.default)(this._topoIndexMap, "this._topoIndexMap");
      for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (!o.has(r)) {
          continue;
        }
        const i = this._setD(r);
        if (!(i == null)) {
          i.forEach(e => {
            if ((0, l.default)(t.get(e), "topoIndexMap.get(dirtyDer)") < n) {
              throw (0, m.default)("Circular derived properties / event listeners");
            }
            o.add(e);
          });
        }
      }
    }
    if (!(a == null ? undefined : a.silent) && this.hasUnfiredChanges()) {
      const e = this.__fired = {};
      const t = this._getChanges();
      const n = t.length > 0;
      for (; t.length;) {
        const {
          key: n,
          oldValue: r
        } = t.shift();
        if (!e[n]) {
          e[n] = true;
          const t = this._definition[n].evt;
          if (this.isListening(t) || this.isListening("all")) {
            const e = this[n];
            this.trigger(t, this, e, r);
          }
        }
      }
      if (n && this.isListening("change") || this.isListening("all")) {
        this.trigger("change", this);
      }
    }
    if (!r) {
      if (this.__changes) {
        this.__changes = null;
      }
      if (this.__fired) {
        this.__fired = null;
      }
    }
    return this;
  }
  _setKV(e, t, n) {
    var r;
    if (this._collections[e]) {
      return void this[e].set(t, n);
    }
    const i = this._definition[e];
    if (!i) {
      return void (this[e] = t);
    }
    if (i.attr === _.Attr.DERIVED) {
      throw (0, m.default)(`Attempting to directly set derived property: ${e}`);
    }
    const a = i.sk;
    const o = this[e];
    if (t !== o) {
      this[a] = t;
      this._markChange(e, o);
      if ((r = this._deps) === null || r === undefined) {
        return undefined;
      } else {
        return r[e];
      }
    } else {
      return undefined;
    }
  }
  _setD(e) {
    var t;
    const n = this._definition[e];
    const r = n.sk;
    const i = n.fn.call(this);
    const a = this[r];
    if (i !== a) {
      this[r] = i;
      this._markChange(e, a);
      if ((t = this._deps) === null || t === undefined) {
        return undefined;
      } else {
        return t[e];
      }
    }
  }
  hasUnfiredChanges() {
    const e = this.__fired;
    const t = this.__changes;
    if (!t) {
      return false;
    }
    if (!e) {
      return true;
    }
    for (let n = 0; n < t.length; n++) {
      if (!e[t[n].key]) {
        return true;
      }
    }
    return false;
  }
  _getChanges() {
    return this.__changes || (this.__changes = []);
  }
  _initDeriveds() {
    this.__derived.forEach(e => {
      this[this._definition[e].sk] = _.INIT;
    });
  }
  _initCollections() {
    (0, o.default)(this._collections, (e, t) => {
      this[t] = new e(null, {
        parent: this
      });
    });
  }
  unset(e, t) {
    const n = Array.isArray(e) ? e : [e];
    this.set((0, a.default)(n), t);
  }
  clear() {
    this.unset([...this.__props, ...this.__session]);
  }
  delete() {
    this.stopListening();
  }
  reset() {
    this.set(this.__defaults);
  }
  toJSON() {
    return this.serialize();
  }
  serialize() {
    const e = {};
    for (let t = 0; t < this.__props.length; t++) {
      e[this.__props[t]] = this[this.__props[t]];
    }
    (0, o.default)(this._collections, (t, n) => {
      e[n] = this[n].serialize();
    });
    return e;
  }
  getDefault(e) {
    const t = this._definition[e];
    if (!t) {
      return;
    }
    const n = t.defaultValue;
    if ((0, u.isFunction)(n)) {
      return n();
    } else {
      return n;
    }
  }
  _getCachedEventBubblingHandler(e) {
    return function (t, n, r) {
      if (h.test(t)) {
        this.trigger("change:" + e + "." + t.split(":")[1], n, r);
      } else if (t === "change") {
        this.trigger("change", this);
      }
    }.bind(this);
  }
  static isIdType(e) {
    return !(!this.allowedIds || !this.allowedIds.includes(e)) || (this.idClass ? e instanceof this.idClass : typeof e == "string");
  }
  pp() {}
}
exports.BaseModel = y;