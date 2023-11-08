var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./904086.js");
var s = require("./652204.js");
var l = require("./685639.js");
var u = r(require("./173207.js"));
var c = r(require("./556869.js"));
class d extends u.default {
  constructor(e, t) {
    var n;
    super();
    n = this;
    this._queueMap = new s.PromiseQueueMap();
    this._purge = () => {
      if (this._pendingPurgePromise) {
        return this._pendingPurgePromise;
      }
      const e = this.open().then(() => (0, o.promiseLoop)(function () {
        var e = (0, i.default)(function* (e) {
          const t = () => {
            n._pendingPurgePromise = null;
            e();
          };
          const r = n.getCurrentSize();
          if (r == null || r <= n._maxSize) {
            return void t();
          }
          const a = yield n.queryOneByIndex(n._dateIndex);
          const o = n.getCurrentSize();
          const s = n._maxSize;
          if (o == null || o <= s) {
            return void t();
          }
          if (a == null) {
            (0, i.default)(function* () {
              const e = yield n.count();
              __LOG__(3, undefined, undefined, true)`SizeLruObjectStore: _purge error: No row returned but currentSize (${o}) > maxSize (${s}). Row count is ${e} (may be out of date).`;
              SEND_LOGS("size-lru-store-invalid-empty");
            })();
            return Promise.reject((0, c.default)("Query returned no result but currentSize > maxSize"));
          }
          const l = a[n._primaryIndex];
          return n.del(l);
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
      return this._pendingPurgePromise = e;
    };
    this._schedulePurge = () => {
      this._purgeTimer.debounce(2000);
    };
    this.doPut = (e, t) => this._queueMap.enqueue(e, (0, i.default)(function* () {
      if (t[n._primaryIndex] !== e) {
        throw (0, c.default)("The key you provide does not match.");
      }
      const r = yield n._store.get(e);
      const i = r == null ? 0 : n._getSize(r);
      const o = n._getSize(t);
      const s = yield n._store.put(e, t);
      n._currentSize = (0, a.default)(n.getCurrentSize(), "_this.getCurrentSize()") + (o - i);
      n._schedulePurge();
      return s;
    }));
    this.doDel = e => this._queueMap.enqueue(e, (0, i.default)(function* () {
      const t = yield n._store.get(e);
      if (t != null) {
        try {
          yield n._dispose(e, t);
        } catch (e) {
          __LOG__(3, undefined, undefined, true)`SizeLRUObjectStore: _dispose error: ${e.message}`;
          SEND_LOGS("size-lru-store-dispose-error");
          throw e;
        }
        yield n._store.del(e);
        n._currentSize = (0, a.default)(n.getCurrentSize(), "_this.getCurrentSize()") - n._getSize(t);
      }
    }));
    this._store = e;
    this._primaryIndex = t.primaryIndex;
    this._dateIndex = t.dateIndex;
    this._sizeIndex = t.sizeIndex;
    if (t.maxSize < 0) {
      throw (0, c.default)("Cannot set max size to a negative number");
    }
    this._maxSize = Math.floor(t.maxSize);
    this._dispose = t.dispose;
    this._purgeTimer = new l.ShiftTimer(() => {
      this._purge().catch(e => {
        __LOG__(3)`Error while purging: ${e.message}`;
      });
    });
  }
  getCurrentSize() {
    return this._currentSize;
  }
  getMaxSize() {
    return this._maxSize;
  }
  setMaxSize(e) {
    if (e < 0) {
      return Promise.reject((0, c.default)("Cannot set size to a negative number"));
    } else {
      this._maxSize = Math.floor(e);
      this._purgeTimer.cancel();
      return this._purge().catch(e => {
        __LOG__(3)`Error while purging during setMaxSize: ${e.message}`;
      });
    }
  }
  putObject(e) {
    const t = e[this._primaryIndex];
    return this.put(t, e);
  }
  _getSize(e) {
    const t = e[this._sizeIndex];
    if (typeof t != "number" || t < 0) {
      __LOG__(3)`Invalid size in index ${this._sizeIndex}: ${t}`;
      return 0;
    } else {
      return t;
    }
  }
  doGet(e) {
    return this._store.get(e);
  }
  queryOneByIndex(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._store.queryByIndex(e, {
        limit: 1
      });
      if (n.length === 0) {
        return null;
      } else {
        return n[0];
      }
    })();
  }
  doQueryByIndex(e, t) {
    return this._store.queryByIndex(e, t);
  }
  doGetAll() {
    return this._store.getAll();
  }
  doClear() {
    var e = this;
    return (0, i.default)(function* () {
      e._purgeTimer.cancel();
      yield e._store.clear();
      e._currentSize = 0;
    })();
  }
  doCount() {
    return this._store.count();
  }
  doOpen() {
    var e = this;
    return (0, i.default)(function* () {
      yield e._store.open();
      if (e._currentSize != null) {
        return;
      }
      const t = yield e._store.doGetAll();
      e._currentSize = t.reduce((t, n) => t + e._getSize(n), 0);
    })();
  }
  doClose() {
    this._currentSize = null;
    return this._store.close();
  }
}
exports.default = d;