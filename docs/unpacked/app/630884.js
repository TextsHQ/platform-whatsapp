var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./173207.js"));
var o = r(require("./556869.js"));
class s extends a.default {
  constructor(e, t, n, r) {
    var i;
    var a;
    super();
    this._storeName = e;
    this._createResponse = t;
    this._parseResponse = n;
    this._encodeKey = (i = r == null ? undefined : r.encodeKey) !== null && i !== undefined ? i : e => e;
    this._matchOptions = (a = r == null ? undefined : r.matchOptions) !== null && a !== undefined ? a : {};
  }
  doGet(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t.doOpen();
      const n = t._encodeKey(e, t._storeName);
      if (!t._cacheStore) {
        __LOG__(3)`Unable to get. This error can occur if abstract method doGet gets called.`;
        throw (0, o.default)("Unable to get");
      }
      const r = yield t._cacheStore.match(n, t._matchOptions);
      if (r == null) {
        return null;
      } else {
        return t._parseResponse(r);
      }
    })();
  }
  doPut(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      yield n.doOpen();
      const r = n._encodeKey(e, n._storeName);
      if (!n._cacheStore) {
        __LOG__(3)`Unable to put. This error can occur if abstract method doPut gets called.`;
        throw (0, o.default)("Unable to put in cache");
      }
      yield n._cacheStore.put(r, n._createResponse(t));
      return t;
    })();
  }
  doDel(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t.doOpen();
      const n = t._encodeKey(e, t._storeName);
      if (!t._cacheStore) {
        __LOG__(3)`Unable to delete. This error can occur if abstract method doDel gets called.`;
        return Promise.reject((0, o.default)("Unable to delete"));
      }
      yield t._cacheStore.delete(n, t._matchOptions);
    })();
  }
  doClear() {
    var e = this;
    return (0, i.default)(function* () {
      if (!(yield caches.delete(e._storeName))) {
        __LOG__(2)`Tried to delete a non-existent cache: ${e._storeName}`;
      }
      e._cacheStore = null;
    })();
  }
  doOpen() {
    var e = this;
    return (0, i.default)(function* () {
      if (e._cacheStore == null) {
        try {
          e._cacheStore = yield caches.open(e._storeName);
        } catch (t) {
          e._cacheStore = null;
          __LOG__(3)`Unable to open cache: ${e._storeName}, error: ${t}`;
          throw t;
        }
      }
    })();
  }
  doClose() {
    this._cacheStore = null;
    return Promise.resolve();
  }
}
exports.default = s;