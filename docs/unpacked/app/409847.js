var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPrefsIdb = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./763889.js");
var s = require("./94872.js");
var l = require("./599225.js");
var u = require("./3973.js");
var c = require("./555984.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    try {
      yield (0, o.createOrReplaceUserPref)(e);
    } catch (t) {
      __LOG__(3)`An error ocurred while trying to insert the user preference '${e.key}' in IndexedDB. Err: ${t}`;
    }
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    try {
      yield (0, o.removeUserPref)(e);
    } catch (t) {
      __LOG__(3)`An error ocurred while trying to remove user preference '${e}' from IndexedDB. Err: ${t}`;
    }
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* () {
    try {
      yield (0, o.clearUserPrefs)();
    } catch (e) {
      __LOG__(3)`An error ocurred while trying to clear all user preferences from IndexedDB. Err: ${e}`;
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    try {
      yield (0, o.bulkCreateOrReplaceUserPrefs)(e);
    } catch (e) {
      __LOG__(3)`An error ocurred while trying to create multiple user preferences in IndexedDB. Err: ${e}`;
    }
  })).apply(this, arguments);
}
function g(e) {
  let t = e;
  if (Object.values(s.HASHED_KEYS).some(t => t === e)) {
    t = (0, c.hashUserPrefKey)(e);
  }
  return t;
}
const m = new class {
  constructor() {
    this.loadedUserPrefs = null;
  }
  init() {
    if (this._pendingInit == null) {
      this._pendingInit = (0, o.allUserPrefsIdb)().then(e => {
        const t = Object.fromEntries(e.map(e => {
          let {
            key: t,
            value: n
          } = e;
          return [t, n];
        }));
        this.loadedUserPrefs = t;
      });
    }
    return this._pendingInit;
  }
  set(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = g(e);
      if (r == null) {
        return;
      }
      if (n.loadedUserPrefs == null) {
        __LOG__(3, undefined, undefined, true)`UserPrefsIndexedDBStorage: set(${e}) called before init`;
        SEND_LOGS("userprefs-idb-set-before-init");
        yield n.init();
      }
      const i = (0, a.default)(n.loadedUserPrefs, "_this.loadedUserPrefs");
      const o = (0, u.preProcessUserPref)(e, t);
      i[r] = o;
      yield function () {
        return d.apply(this, arguments);
      }({
        key: r,
        value: o
      });
    })();
  }
  get(e) {
    if (this.loadedUserPrefs == null) {
      __LOG__(4, undefined, new Error(), true)`UserPrefsIndexedDBStorage: get(${e}) called before init`;
      SEND_LOGS("userprefs-idb-get-before-init");
      return null;
    }
    const t = this.loadedUserPrefs;
    const n = g(e);
    if (n == null) {
      return;
    }
    let r;
    if (n in t) {
      r = t[n];
    }
    if (r == null) {
      return null;
    }
    return (0, l.postProcessUserPref)(e, r);
  }
  remove(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (t.loadedUserPrefs == null) {
        __LOG__(3, undefined, undefined, true)`UserPrefsIndexedDBStorage: remove(${e}) called before init.`;
        SEND_LOGS("userprefs-idb-remove-before-init");
        yield t.init();
      }
      const n = (0, a.default)(t.loadedUserPrefs, "_this2.loadedUserPrefs");
      const r = g(e);
      if (r != null) {
        delete n[r];
        yield function () {
          return p.apply(this, arguments);
        }(r);
      }
    })();
  }
  clear() {
    var e = this;
    return (0, i.default)(function* () {
      e.loadedUserPrefs = {};
      yield function () {
        return f.apply(this, arguments);
      }();
    })();
  }
  bulkSetItemsToIndexedDB(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = e.map(e => {
        const t = g(e.key);
        if (t != null) {
          return {
            key: t,
            value: (0, u.preProcessUserPref)(e.key, e.value)
          };
        }
      }).filter(Boolean);
      yield function () {
        return _.apply(this, arguments);
      }(n);
      if (t.loadedUserPrefs == null) {
        __LOG__(3, undefined, undefined, true)`UserPrefsIndexedDBStorage: attempting to bulk set before initialization`;
        SEND_LOGS("userprefs-idb-bulk-set-before-init");
        yield t.init();
      }
      const r = (0, a.default)(t.loadedUserPrefs, "_this4.loadedUserPrefs");
      for (const {
        key: e,
        value: t
      } of n) {
        r[e] = t;
      }
    })();
  }
}();
exports.userPrefsIdb = m;