var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENC_KEY_TTL = exports.ENC_KEY_TABLE_NAME = exports.ENC_KEY_DB_NAME = exports.DbEncKeyStore = exports.DB_ENCRYPTION_CIPHER = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./417405.js");
var s = require("./950376.js");
var l = require("./632157.js");
var u = r(require("./721698.js"));
var c = require("./691935.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var p = r(require("./556869.js"));
var f = r(require("../vendor/441143.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const g = "wawc_db_enc";
exports.ENC_KEY_DB_NAME = g;
const m = "keys";
exports.ENC_KEY_TABLE_NAME = m;
const h = {
  name: "HKDF"
};
const y = {
  hash: "SHA-256"
};
const E = l.WEEK_MILLISECONDS * 4 * 24;
exports.ENC_KEY_TTL = E;
const S = "fts_hmac_keys";
const v = "AES-CBC";
exports.DB_ENCRYPTION_CIPHER = v;
function T() {
  const e = new Uint8Array(128);
  self.crypto.getRandomValues(e);
  return self.crypto.subtle.importKey("raw", e, h, false, ["deriveKey"]);
}
const M = new class {
  constructor() {
    var e = this;
    this._waitUntilFinalDbEncKeyReady = new s.Resolvable();
    this._waitUntilFinalFtsHmacKeyReady = new s.Resolvable();
    this._getOrUpdateEncKeys = e => this._getDbOrThrow().keys.orderBy("id").toArray().then(t => {
      if (!t || t.length === 0) {
        return this._addNewEncKey(e);
      }
      const n = t[t.length - 1]._expiration;
      if (n != null && n <= new Date().getTime()) {
        return this._addNewEncKey(e);
      }
      this._ephemeralLocalEncSalt = e;
      const r = t.map(function () {
        var t = (0, a.default)(function* (t) {
          const n = yield self.crypto.subtle.deriveKey((0, i.default)((0, i.default)((0, i.default)({}, h), y), {}, {
            salt: e,
            info: new Uint8Array(1)
          }), t.key, {
            name: v,
            length: 128
          }, false, ["encrypt", "decrypt"]);
          return (0, i.default)((0, i.default)({}, t), {}, {
            key: n
          });
        });
        return function () {
          return t.apply(this, arguments);
        };
      }());
      return Promise.all(r).then(e => {
        this._keys = e;
      });
    });
    this._getOrUpdateFtsKey = () => this._getDbOrThrow().fts_hmac_keys.orderBy("id").toArray().then(e => {
      if (!e || e.length === 0) {
        return this._addNewFtsHMACKey();
      }
      if (e.length > 1) {
        throw new d.DBInvalidFtsHMACKey();
      }
      this._ftsHMACKey = e[e.length - 1];
    });
    this._addNewEncKey = e => T().then(t => this._getDbOrThrow().keys.add({
      key: t,
      _expiration: new Date().getTime() + E
    }).then(() => this._getOrUpdateEncKeys(e)));
    this._addNewFtsHMACKey = () => T().then(e => this._getDbOrThrow().fts_hmac_keys.add({
      key: e
    }).then(() => this._getOrUpdateFtsKey()));
    this.generateFinalDbEncryptionAndFtsKey = e => {
      if (this._finalDbMsgEncKeys != null || this._ephemeralLocalEncSalt == null) {
        return Promise.resolve();
      }
      const t = (0, o.decodeB64)(e);
      this._generateFinalFtsHmacKey(t);
      this._generateFinalDbMsgEncryptionKey(t);
      return Promise.resolve();
    };
    this._generateFinalDbMsgEncryptionKey = t => this._getDbOrThrow().keys.orderBy("id").toArray().then(n => {
      const r = n.map(function () {
        var n = (0, a.default)(function* (n) {
          let r;
          (0, f.default)(e._ephemeralLocalEncSalt != null, "local salt is undefined");
          try {
            r = yield self.crypto.subtle.deriveKey((0, i.default)((0, i.default)((0, i.default)({}, h), y), {}, {
              salt: t,
              info: new Uint8Array(e._ephemeralLocalEncSalt || 0)
            }), n.key, {
              name: v,
              length: 128
            }, false, ["encrypt", "decrypt"]);
          } catch (t) {
            e._ephemeralLocalEncSalt = null;
            throw t;
          }
          return (0, i.default)((0, i.default)({}, n), {}, {
            key: r
          });
        });
        return function () {
          return n.apply(this, arguments);
        };
      }());
      return Promise.all(r).then(e => {
        this._ephemeralLocalEncSalt = null;
        this._finalDbMsgEncKeys = e;
        this._waitUntilFinalDbEncKeyReady.resolve();
      });
    }).finally(() => {
      this._ephemeralLocalEncSalt = null;
    });
    this._generateFinalFtsHmacKey = function () {
      var t = (0, a.default)(function* (t) {
        if (!e._ftsHMACKey || e._ftsHMACKey.key == null || e._ftsHMACKey.id == null) {
          __LOG__(2)`Base ftsHMACKey is null in _generateFinalFtsHmacKey`;
          throw new d.DBInvalidFtsHMACKey();
        }
        const [n, r] = [e._ftsHMACKey.id, e._ftsHMACKey.key];
        const a = yield self.crypto.subtle.deriveKey((0, i.default)((0, i.default)((0, i.default)({}, h), y), {}, {
          salt: t,
          info: new Uint8Array(0)
        }), r, {
          name: "HMAC",
          hash: "SHA-256"
        }, false, ["sign"]);
        e._finalFtsHmacKey = {
          id: n,
          key: a
        };
        e._waitUntilFinalFtsHmacKeyReady.resolve();
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  }
  init(e) {
    if (this._db) {
      return Promise.resolve();
    }
    this._db = new u.default(g, {
      chromeTransactionDurability: "relaxed",
      addons: []
    });
    this._getDbOrThrow().version(1).stores({
      [m]: "++id, _expirtation",
      [S]: "++id"
    });
    this._getDbOrThrow().version(2).stores({
      [m]: "++id",
      [S]: "++id"
    });
    const t = e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
    return (0, c.dexieCastToPromise)(this._getDbOrThrow().open()).then(() => Promise.all([this._getOrUpdateEncKeys(t), this._getOrUpdateFtsKey()]));
  }
  _getDbOrThrow() {
    if (this._db == null) {
      throw (0, p.default)("[db_encryption_key] db is not initialized");
    }
    return this._db;
  }
  deleteKeys() {
    return Promise.all([this._getDbOrThrow().table(m).clear(), this._getDbOrThrow().table(S).clear()]).then(() => {}).finally(() => {
      this._db = null;
      return (0, c.dexieCastToPromise)(u.default.delete(g)).catch(() => u.default.delete(g));
    });
  }
  resetDB() {
    var e;
    if (!((e = this._db) === null || e === undefined)) {
      e.close();
    }
    this._db = null;
  }
  deleteKeyCache() {
    this._keys = null;
    this._ftsHMACKey = null;
    this._finalDbMsgEncKeys = null;
    this._waitUntilFinalDbEncKeyReady = new s.Resolvable();
    this._waitUntilFinalFtsHmacKeyReady = new s.Resolvable();
    this._finalFtsHmacKey = null;
    this._ephemeralLocalEncSalt = null;
  }
  waitForFinalDbMsgEncKey() {
    return this._waitUntilFinalDbEncKeyReady.promise;
  }
  waitForFinalFtsHmacKey() {
    return this._waitUntilFinalFtsHmacKeyReady.promise;
  }
  getEncKeys() {
    if (!this._keys) {
      throw new d.DbEncKeyNotLoaded(m);
    }
    return this._keys;
  }
  getDbMsgEncKeys(e) {
    if (!this._finalDbMsgEncKeys) {
      throw new d.DbMsgEncKeyNotLoaded(e.tableName);
    }
    return this._finalDbMsgEncKeys;
  }
  getFtsHMACKey() {
    if (!this._finalFtsHmacKey) {
      throw new d.DbEncKeyNotLoaded(S);
    }
    return this._finalFtsHmacKey;
  }
}();
exports.DbEncKeyStore = M;