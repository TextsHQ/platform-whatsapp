var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaStore = exports.LruMediaStore = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/751463.js"));
var o = r(require("./422660.js"));
var s = r(require("./951551.js"));
var l = r(require("./935808.js"));
var u = require("./75421.js");
var c = r(require("./740573.js"));
var d = r(require("./198765.js"));
var p = require("./288057.js");
var f = r(require("./281007.js"));
var _ = require("./971767.js");
class g {
  constructor() {
    this._getBackingStore = (0, a.default)((0, i.default)(function* () {
      try {
        const e = yield function () {
          return m.apply(this, arguments);
        }();
        if (e != null) {
          yield e.open();
          return e;
        }
      } catch (e) {
        if (e.name === "SecurityError") {
          __LOG__(3)`There was a security error attempting to open the media storage. \
This likely indicates a permissions error. Falling back to fake \
(no-op) storage.`;
        } else {
          if (e instanceof p.DbOnLogoutAbort) {
            throw e;
          }
          __LOG__(4, true, new Error(), true)`Failed to initialize media store! Falling back to fake (no-op) storage. Error:
${(0, f.default)(e)}`;
          SEND_LOGS("Failed to initialize media store");
        }
      }
      return new c.default();
    }));
  }
  setMaxSize(e) {
    var t = this;
    return (0, i.default)(function* () {
      (yield t._getBackingStore()).setMaxSize(e);
    })();
  }
  get(e) {
    var t = this;
    return (0, i.default)(function* () {
      return (yield t._getBackingStore()).get(e);
    })();
  }
  queryByIndex(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      return (yield n._getBackingStore()).queryByIndex(e, t);
    })();
  }
  getAll() {
    var e = this;
    return (0, i.default)(function* () {
      return (yield e._getBackingStore()).getAll();
    })();
  }
  put(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      return (yield n._getBackingStore()).put(e, t);
    })();
  }
  del(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._getBackingStore();
      yield n.del(e);
    })();
  }
  count() {
    var e = this;
    return (0, i.default)(function* () {
      return (yield e._getBackingStore()).count();
    })();
  }
  clear() {
    var e = this;
    return (0, i.default)(function* () {
      const t = yield e._getBackingStore();
      yield t.clear();
    })();
  }
  open() {
    var e = this;
    return (0, i.default)(function* () {
      const t = yield e._getBackingStore();
      yield t.open();
    })();
  }
  close() {
    var e = this;
    return (0, i.default)(function* () {
      const t = yield e._getBackingStore();
      yield t.close();
    })();
  }
}
function m() {
  return (m = (0, i.default)(function* () {
    const e = h();
    if (e == null) {
      return null;
    }
    const t = (0, u.isStoreQuotaManagerEnabled)() ? yield _.storeQuotaManager.getQuotaForStore("lru-media-store") : Number.MAX_SAFE_INTEGER;
    return new d.default({
      maxSize: t,
      arrayBufferStore: e
    });
  })).apply(this, arguments);
}
function h() {
  if (o.default != null) {
    const e = new l.default("media_lru_buffer");
    if ("caches" in self) {
      return new s.default("lru-media-array-buffer-cache");
    } else {
      return e;
    }
  }
  return null;
}
exports.MediaStore = g;
const y = new g();
exports.LruMediaStore = y;