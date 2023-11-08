var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./652204.js");
var s = r(require("./721698.js"));
var l = r(require("./173207.js"));
var u = r(require("./495976.js"));
var c = require("./75421.js");
var d = r(require("./909520.js"));
class p extends l.default {
  constructor(e) {
    var t;
    super();
    t = this;
    this._queueMap = new o.PromiseQueueMap();
    this.updateMaxSizeInterval = null;
    this._dispose = e => this._bufferStore.del(e);
    this.doPut = (e, n) => this._queueMap.enqueue(e, (0, i.default)(function* () {
      if (n.byteLength > t.getMaxSize()) {
        return n;
      }
      if (n.byteLength > 30000000) {
        return n;
      }
      const r = {
        id: e,
        timestamp: new Date().getTime(),
        size: n.byteLength
      };
      try {
        yield t._metaInfoStore.putObject(r);
        return t._bufferStore.put(e, n);
      } catch (e) {
        if (e instanceof s.default.AbortError && e.message.includes("QuotaExceededError")) {
          __LOG__(2)`LruMediaStore: encounter QuotaExceededError, thus shrink the size of LruMediaStore`;
          return void t.setMaxSize((0, a.default)(t.getCurrentSize(), "_this.getCurrentSize()") / 2);
        }
        throw e;
      }
    }));
    this.doDel = e => this._queueMap.enqueue(e, () => this._metaInfoStore.del(e));
    this._updateMaxSize = function () {
      var e = (0, i.default)(function* () {
        let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        if ((0, c.isStoreQuotaManagerEnabled)()) {
          return;
        }
        const n = yield (0, u.default)();
        if (n == null) {
          return void t._clearStoreForThisSession();
        }
        const r = t.getCurrentSize();
        if (r == null) {
          return;
        }
        const i = n.available;
        const a = t._calculateTargetedBufferSize(n.quota);
        if (i > a) {
          return void (e && t.setMaxSize(i));
        }
        const o = a - i;
        if (r < o) {
          t._clearStoreForThisSession();
        } else {
          t.setMaxSize(r - o);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    const {
      maxSize: n,
      arrayBufferStore: r
    } = e;
    this._bufferStore = r;
    this._metaInfoStore = new d.default(n, this._dispose);
    if (!(0, c.isStoreQuotaManagerEnabled)()) {
      this.updateMaxSizeInterval = self.setInterval(this._updateMaxSize, 60000);
    }
  }
  doGet(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._bufferStore.get(e);
      if (n != null) {
        t.put(e, n);
      }
      return n;
    })();
  }
  doClear() {
    var e = this;
    return (0, i.default)(function* () {
      yield e._bufferStore.clear();
      return e._metaInfoStore.clear();
    })();
  }
  doCount() {
    return this._metaInfoStore.count();
  }
  doOpen() {
    var e = this;
    return (0, i.default)(function* () {
      yield Promise.all([e._metaInfoStore.open(), e._bufferStore.open()]);
    })();
  }
  doClose() {
    var e = this;
    return (0, i.default)(function* () {
      yield Promise.all([e._metaInfoStore.close(), e._bufferStore.close()]);
    })();
  }
  getCurrentSize() {
    return this._metaInfoStore.getCurrentSize();
  }
  getMaxSize() {
    return this._metaInfoStore.getMaxSize();
  }
  setMaxSize(e) {
    return this._metaInfoStore.setMaxSize(e);
  }
  _calculateTargetedBufferSize(e) {
    const t = Math.floor(e * 0.01);
    if (t < 100000000) {
      return 100000000;
    } else if (t > 500000000) {
      return 500000000;
    } else {
      return t;
    }
  }
  _clearStoreForThisSession() {
    this.setMaxSize(0);
    if (this.updateMaxSizeInterval) {
      self.clearInterval(this.updateMaxSizeInterval);
      this.updateMaxSizeInterval = null;
    }
  }
}
exports.default = p;