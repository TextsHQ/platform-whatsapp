var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPrefsCacheStorage = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./630884.js"));
var o = require("./599225.js");
var s = require("./3973.js");
const l = new a.default("wa_web_user_prefs_cache_store", function (e) {
  return new Response(JSON.stringify(e), {
    headers: {
      "content-type": "application/json"
    }
  });
}, function (e) {
  return e.json();
}, {
  encodeKey: function (e, t) {
    const n = encodeURIComponent(e);
    return `https://_user_prefs_key_store_.whatsapp.com/${encodeURIComponent(t)}_${n}`;
  },
  matchOptions: {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true
  }
});
const u = new class {
  constructor() {
    this._cachedCacheStorageValues = {};
  }
  setItemToCacheStorage(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = (0, s.preProcessUserPref)(e, t);
      n._cachedCacheStorageValues[e] = r;
      yield l.doPut(e, r);
    })();
  }
  getItemFromCacheStorage(e) {
    var t = this;
    return (0, i.default)(function* () {
      let n = t._cachedCacheStorageValues[e];
      if (n == null) {
        try {
          n = yield l.doGet(e);
          t._cachedCacheStorageValues[e] = n;
        } catch (e) {}
      }
      if (n == null) {
        t.removeItemFromCacheStorage(e);
        return null;
      }
      return (0, o.postProcessUserPref)(e, n);
    })();
  }
  removeItemFromCacheStorage(e) {
    var t = this;
    return (0, i.default)(function* () {
      delete t._cachedCacheStorageValues[e];
      yield l.doDel(e);
    })();
  }
  clearCacheStorage() {
    var e = this;
    return (0, i.default)(function* () {
      e._cachedCacheStorageValues = {};
      yield l.doClear();
    })();
  }
  bulkSetItemsToCacheStorage(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = e.map(e => t.setItemToCacheStorage(e.key, e.value));
      yield Promise.all(n);
    })();
  }
}();
exports.userPrefsCacheStorage = u;