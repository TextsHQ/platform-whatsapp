var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPreferencesStoreBase = exports.UserPreferencesStoreBase = exports.ENFORCE_PERMANENT_STORAGE_KEYS = undefined;
var i = r(require("./236642.js"));
var a = require("./94872.js");
var o = require("./933173.js");
var s = r(require("./556869.js"));
const l = [a.KEYS.WHATSAPP_MUTEX, a.KEYS.PRESERVED_USER_KEYS, a.MD_KEYS.ROUTING_INFO, a.MD_KEYS.INITIAL_HISTORY_SYNCED, a.MD_KEYS.WEB_ENC_SALT, a.MD_KEYS.CRITICAL_DATA_SYNCED];
exports.ENFORCE_PERMANENT_STORAGE_KEYS = l;
const u = {
  isRawString: false,
  ignoreCache: false,
  shouldWriteToIdb: true,
  storage: i.default
};
class c {
  _determineStorage(e, t) {
    if (l.includes(e)) {
      return i.default;
    } else if (t != null) {
      return t;
    } else {
      return u.storage;
    }
  }
  get(e, t) {
    if (e == null) {
      throw (0, s.default)("UserPreferencesStoreBase.get called with no key");
    }
    const n = this._determineStorage(e, t == null ? undefined : t.storage);
    const r = (t == null ? undefined : t.ignoreCache) == null ? u.ignoreCache : t.ignoreCache;
    const i = n.getItem(e, r);
    if (((t == null ? undefined : t.isRawString) == null ? u.isRawString : t.isRawString) || i == null) {
      return i;
    }
    try {
      return JSON.parse(i, o.jsonWidReviver);
    } catch (t) {
      __LOG__(2, undefined, undefined, true)`UserPreferencesStoreBase.get(): failed: ${t}`;
      SEND_LOGS("userprefs-parse-error");
      return void n.removeItem(e);
    }
  }
  set(e, t, n) {
    if (e == null) {
      throw (0, s.default)("UserPreferencesStoreBase.set called with no key");
    }
    const r = this._determineStorage(e, n == null ? undefined : n.storage);
    if (t == null) {
      r.removeItem(e);
    } else if ((n == null ? undefined : n.isRawString) == null ? u.isRawString : n.isRawString) {
      if (typeof t != "string") {
        throw (0, s.default)("UserPreferencesStoreBase.set: expecting string because isRawString is true");
      }
      r.setItem(e, t);
    } else {
      const i = (n == null ? undefined : n.shouldWriteToIdb) == null ? u.shouldWriteToIdb : n.shouldWriteToIdb;
      r.setItem(e, JSON.stringify(t), i);
    }
  }
}
exports.UserPreferencesStoreBase = c;
const d = new c();
exports.userPreferencesStoreBase = d;