var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionSilentQueryError = exports.BaseCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("../vendor/639693.js"));
var s = r(require("../vendor/873955.js"));
var l = r(require("../vendor/643063.js"));
var u = require("./122583.js");
var c = require("./724976.js");
var d = require("./984330.js");
var p = require("./997853.js");
var f = require("./272220.js");
var _ = r(require("./708093.js"));
var g = require("./445729.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var h = require("./226562.js");
var y = require("./38878.js");
var E = r(require("./53575.js"));
var S = r(require("./556869.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = "QUERY";
const M = "FIND";
const A = "UPDATE";
const b = {}.toString();
const C = {
  id: "none",
  policy: p.CACHE_POLICY.NONE
};
class P extends Error {
  constructor(e) {
    super(e);
    this.name = "CollectionSilentQueryError";
    this.message = e;
  }
}
exports.CollectionSilentQueryError = P;
class O extends _.default {
  constructor() {
    super();
    this._inflight = {};
    this._cachePolicy = (0, f.createCachePolicy)(this, this.constructor.cachePolicy || C);
    this._staleCollection = this.constructor.staleCollection || false;
    if (this._staleCollection === true) {
      this.listenTo(y.Socket, "change:stream", this._handleStreamChange);
    }
    this._cachePolicy.enableCaching();
    if (this._cachePolicy.constructor.policy === p.CACHE_POLICY.LOAD) {
      this.listenTo(g.Conn, "me_ready", this._updateFromCache);
    }
  }
  initializeFromCache(e) {
    this.add(e);
  }
  saveToCache() {
    if (!g.Conn.shouldSaveToCache()) {
      return;
    }
    const {
      id: e
    } = this._cachePolicy;
    __LOG__(2)`baseCollection:saveToCache save: ${String(e)}`;
    E.default.setCollection(e, this.toJSON());
  }
  add(e, t) {
    if (e) {
      if (g.Conn.blockStoreAdds) {
        throw new d.LogoutDrop("adding to store when blocking store adds");
      }
      const n = Array.isArray(e) ? e : [e];
      if (n.every(e => e == null ? undefined : e.isState)) {
        const e = (0, l.default)(n, e => this.get(e.id));
        if (e.length) {
          super.add(e, t);
        }
        return n;
      }
    }
    return super.add(e, t);
  }
  findQuery(e, t) {
    return this._query(T, e, t);
  }
  find(e, t) {
    if (e) {
      return this._query(M, e, t);
    } else {
      __LOG__(4, undefined, new Error(), true)`Called find without an id`;
      SEND_LOGS("find-without-id");
      return Promise.reject((0, S.default)("called find without an id"));
    }
  }
  update(e, t) {
    if (e) {
      return this._query(A, e, t);
    } else {
      __LOG__(4, undefined, new Error(), true)`Called update without an id`;
      SEND_LOGS("update-without-id");
      return Promise.reject((0, S.default)("called update without an id"));
    }
  }
  gadd(e, t) {
    if (this.modelClass.prototype.isIdType(e)) {
      const n = this.get(e);
      return n || this.add({
        id: e
      }, t)[0];
    }
    if (e.id) {
      const n = t || {};
      n.merge = true;
      return this.add(e, n)[0];
    }
    throw (0, S.default)("gadd called without an id attr (id)");
  }
  gaddUp(e) {
    let t;
    let n = this._staleCollection;
    if (this.modelClass.prototype.isIdType(e)) {
      const r = {
        stale: n,
        id: e
      };
      t = this.get(e) || this.add(r, {
        merge: true
      })[0];
    } else if (e.id) {
      if (this.get(e.id)) {
        n = false;
      }
      e = (0, a.default)({
        stale: n
      }, e);
      t = this.add(e, {
        merge: true
      })[0];
    }
    if (t) {
      const e = t;
      if (t.stale) {
        this.find(t.id);
      }
      return e;
    }
    throw (0, S.default)(".gaddUp called without an id attr (id)");
  }
  delete() {
    this._inflight = {};
    this.reset();
  }
  _handleResume() {
    switch (y.Socket.stream) {
      case h.SOCKET_STREAM.DISCONNECTED:
        if (!this._staleCollection) {
          return;
        }
        this.forEach(e => {
          if (e) {
            e.stale = true;
          }
        });
        break;
      case h.SOCKET_STREAM.RESUMING:
      case h.SOCKET_STREAM.SYNCING:
      case h.SOCKET_STREAM.CONNECTED:
    }
  }
  _query(e, t, n) {
    let r = (0, c.isString)(t) ? t : t.toString();
    if (r === b) {
      r = (0, s.default)("collection_query_");
    }
    const i = e === T ? undefined : this.get(t);
    const a = "force-" + r;
    if (this._inflight[a] && e === M || e === A) {
      r = a;
    }
    if (this._inflight[r]) {
      if (e === M && i && !i.stale) {
        return Promise.resolve(i);
      } else {
        return this._inflight[r];
      }
    } else if (!i || i.stale || e === A) {
      return this._inflight[r] = this._serverQuery(e, t, n).finally(() => {
        delete this._inflight[r];
      }).catch((0, u.filteredCatch)(d.LogoutDrop, e => {
        __LOG__(3)`LogoutDrop error: ${e.toString()}`;
      })).catch(e => {
        if (!(e instanceof P)) {
          throw e;
        }
        __LOG__(2)`baseCollection:query query promise rejected: ${String(e)}`;
      });
    } else {
      return Promise.resolve(i);
    }
  }
  _serverQuery(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      let i;
      i = e === A ? r._update(t, n) : e === M ? r.findImpl(t, n) : r.findQueryImpl(t);
      const a = yield i;
      if (r._staleCollection) {
        const e = Array.isArray(a) ? a : [a];
        (0, o.default)(e).forEach(function (e) {
          if (e.stale === undefined) {
            e.stale = false;
          }
        });
      }
      let s;
      s = (n == null ? undefined : n.set) ? r.set(a) : r.add(a, {
        merge: true
      });
      if (Array.isArray(a)) {
        return s;
      }
      if (s[0]) {
        return s[0];
      }
      throw new m.ModelCreateError("Unknown", a);
    })();
  }
  _update(e, t) {
    return this.findImpl(e, t);
  }
  _handleStreamChange() {
    this._handleResume();
    if (this._cachePolicy.constructor.policy === p.CACHE_POLICY.LOAD) {
      this._updateFromCache();
    }
  }
  _updateFromCache() {
    const {
      id: e
    } = this._cachePolicy;
    this._cachePolicy.disableCaching();
    if (g.Conn.shouldSaveToCache()) {
      __LOG__(2)`baseCollection:initFromCache load: ${String(e)}`;
      this.initializeFromCache(E.default.getCollection(e));
      this._cachePolicy.enableCaching();
    }
  }
}
exports.BaseCollection = O;