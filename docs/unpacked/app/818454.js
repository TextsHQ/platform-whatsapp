Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AggregatedProxyView = undefined;
exports.aggregated = function (e) {
  const t = new i.SimpleCollection();
  const n = new Map();
  const s = (e, r) => {
    var i;
    const a = (i = t.get(e)) === null || i === undefined ? undefined : i.collection;
    if (a) {
      a.remove(r);
      if (a.length === 0) {
        t.remove(e);
      }
    }
    n.delete(r.id);
  };
  return Object.assign(e => new o(t, a(e)), {
    kind: r.CollectionMethodKind.Aggregate,
    add(r) {
      r.forEach(r => {
        (r => {
          var o;
          const l = e(r);
          if (l === undefined) {
            return;
          }
          const u = n.get(r.id);
          const c = a(l);
          if (u != null && c !== u) {
            s(u, r);
          }
          let d = (o = t.get(c)) === null || o === undefined ? undefined : o.collection;
          if (d == null) {
            d = new i.SimpleCollection();
            t.add({
              id: c,
              collection: d
            });
          }
          d.add(r);
          n.set(r.id, c);
        })(r);
      });
    },
    remove(t) {
      t.filter(Boolean).forEach(t => {
        const n = a(e(t));
        s(n, t);
      });
    },
    reset() {
      t.forEach(e => {
        let {
          collection: t
        } = e;
        t.reset();
      });
      t.reset();
      n.clear();
    }
  });
};
var r = require("./237590.js");
var i = require("./341732.js");
function a(e) {
  if (Array.isArray(e)) {
    return JSON.stringify(e.map(a));
  } else {
    return String(e);
  }
}
class o extends i.SimpleCollection {
  constructor(e, t) {
    super();
    this._isWaitingForCollection = false;
    this._rootCollection = e;
    this._key = t;
    const n = this;
    Object.defineProperty(this, "_models", {
      get() {
        var e;
        var t;
        if ((e = (t = n._getAggregatedCollection()) === null || t === undefined ? undefined : t._models) !== null && e !== undefined) {
          return e;
        } else {
          return [];
        }
      }
    });
    Object.defineProperty(this, "_index", {
      get() {
        var e;
        var t;
        if ((e = (t = n._getAggregatedCollection()) === null || t === undefined ? undefined : t._index) !== null && e !== undefined) {
          return e;
        } else {
          return {};
        }
      }
    });
  }
  _getAggregatedCollection() {
    var e;
    if ((e = this._rootCollection.get(this._key)) === null || e === undefined) {
      return undefined;
    } else {
      return e.collection;
    }
  }
  on(e, t, n) {
    super.on(e, t, n);
    this._maybeConnect();
    return this;
  }
  off(e, t, n) {
    super.off(e, t, n);
    this._maybeDisconnect();
    return this;
  }
  _hasListeners() {
    const e = this._events;
    if (e == null) {
      return false;
    }
    for (const t in e) {
      if (e[t] != null && e[t].length > 0) {
        return true;
      }
    }
    return false;
  }
  _maybeConnect() {
    const e = this._getAggregatedCollection();
    if (e == null) {
      if (this._isWaitingForCollection) {
        return;
      }
      this._isWaitingForCollection = true;
      this._rootCollection.on("add", this._maybeConnect, this);
      return void (this._disconnect = () => {
        this._rootCollection.off("add", this._maybeConnect, this);
      });
    }
    var t;
    if (this._isWaitingForCollection) {
      if (!((t = this._disconnect) === null || t === undefined)) {
        t.call(this);
      }
      this._isWaitingForCollection = false;
    }
    e.on("all", this._relayEvent, this);
    this._rootCollection.on("remove", this._handleCollectionRemove, this);
    this._disconnect = () => {
      e.off("all", this._relayEvent, this);
      this._rootCollection.off("remove", this._handleCollectionRemove, this);
    };
  }
  _maybeDisconnect() {
    var e;
    if (!this._hasListeners()) {
      if (!((e = this._disconnect) === null || e === undefined)) {
        e.call(this);
      }
      this._disconnect = null;
    }
  }
  _handleCollectionRemove(e) {
    var t;
    if (this._key === e.id) {
      if (!((t = this._disconnect) === null || t === undefined)) {
        t.call(this);
      }
      this._disconnect = null;
      this._maybeConnect();
    }
  }
  _relayEvent(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
      n[r - 1] = arguments[r];
    }
    this.trigger(e, ...n);
  }
}
exports.AggregatedProxyView = o;