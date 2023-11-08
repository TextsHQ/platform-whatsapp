var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./287461.js");
var s = require("./12643.js");
var l = require("./359987.js");
var u = require("./403206.js");
var c = require("./74869.js");
var d = require("./33746.js");
var p = require("./999821.js");
var f = require("./351173.js");
var _ = require("./426122.js");
var g = require("./22399.js");
var m = require("./326314.js");
var h = require("./459857.js");
var y = require("./669050.js");
var E = r(require("./556869.js"));
const S = require("../vendor/76672.js").Mirrored(["Persist", "Memory"]);
var v = new class {
  constructor() {
    this.Direction = {
      SENDING: 1,
      RECEIVING: 2
    };
    this._cache = new _.SignalStoreCache();
    this._mode = S.Persist;
  }
  getIdentityKeyPair() {
    var e = this;
    return (0, a.default)(function* () {
      var t;
      if (!e._cache.RegistrationInfo) {
        e._cache.RegistrationInfo = yield m.waSignalStore.getRegistrationInfo();
      }
      if ((t = e._cache.RegistrationInfo) === null || t === undefined ? undefined : t.identityKeyPair) {
        return (0, u.toSignalCurveKeyPair)(e._cache.RegistrationInfo.identityKeyPair);
      } else {
        return undefined;
      }
    })();
  }
  getLocalRegistrationId() {
    var e = this;
    return (0, a.default)(function* () {
      var t;
      if (!e._cache.RegistrationInfo) {
        e._cache.RegistrationInfo = yield m.waSignalStore.getRegistrationInfo();
      }
      return ((t = e._cache.RegistrationInfo) === null || t === undefined ? undefined : t.registrationId) || undefined;
    })();
  }
  isTrustedIdentity() {
    return Promise.resolve(true);
  }
  _loadIdentityKeyImpl(e) {
    var t = this;
    return (0, a.default)(function* () {
      var n;
      if (e == null) {
        throw (0, E.default)("Tried to get identity key for undefined/null key");
      }
      if (!t._cache.IdentityStore.has(e)) {
        const n = yield m.waSignalStore.getIdentityKeyWithRowId(e);
        t._cache.IdentityStore.set(e, n);
      }
      return ((n = t._cache.IdentityStore.get(e)) === null || n === undefined ? undefined : n.identityKey) || undefined;
    })();
  }
  loadIdentityKey(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.identity.acquire();
      try {
        return yield t._loadIdentityKeyImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  _putIdentityImpl(e, t) {
    this._cache.IdentityStore.set(e, {
      identityKey: t
    });
    this._cache.Dirty.identity.add(e);
  }
  putIdentity(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = yield n._cache.Mutex.identity.acquire();
      try {
        n._putIdentityImpl(e, t);
      } finally {
        r.release();
      }
    })();
  }
  _saveIdentity(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = (0, d.stringifyIdentityKey)(t);
      const i = yield n.loadIdentityKey(e);
      if (!i || i !== r) {
        if (i) {
          if (e === (0, p.createSignalAddress)((0, h.getMeUser)()).toString()) {
            return void (0, l.frontendFireAndForget)("handleSelfPrimaryIdentityChange", {});
          }
          if (e != null) {
            yield (0, c.handleNewIdentity)(e);
          }
        }
        yield n.putIdentity(e, r);
      }
    })();
  }
  saveIdentity(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      if (e == null) {
        throw (0, E.default)("Tried to put identity key for undefined/null key");
      }
      yield n._saveIdentity(e, t);
      if (e !== (0, p.createSignalAddress)((0, h.getMeUser)()).toString() && (0, o.getABPropConfigValue)("pnh_sync_identity_keys_and_devices")) {
        const r = (0, y.widFromSignalAddress)(e);
        const i = (0, s.getAlternateDeviceWid)(r);
        const a = i != null ? (0, p.createSignalAddress)(i).toString() : null;
        if (a != null) {
          yield n._saveIdentity(a, t);
        }
      }
    })();
  }
  getIdentityWithRowId(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e == null) {
        throw (0, E.default)("Tried to get identity key for undefined/null key");
      }
      yield t.loadIdentityKey(e);
      const n = t._cache.IdentityStore.get(e);
      if (n != null && n.deleted === undefined) {
        return n;
      }
    })();
  }
  bulkGetIdentityWithRowId(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e == null) {
        throw (0, E.default)("Tried to get identity key for undefined/null key");
      }
      if (e.length === 0) {
        return [];
      } else {
        yield t.bulkLoadIdentityKey(e);
        return e.map(e => {
          const n = t._cache.IdentityStore.get(e);
          if (n != null && n.deleted === undefined) {
            return n;
          }
        });
      }
    })();
  }
  _bulkLoadIdentityKeyImpl(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e == null) {
        throw (0, E.default)("Tried to get identity key for undefined/null key");
      }
      if (e.length === 0) {
        return [];
      }
      const n = new Array(e.length);
      const r = [];
      e.forEach((e, i) => {
        var a;
        if (t._cache.IdentityStore.has(e)) {
          n[i] = (a = t._cache.IdentityStore.get(e)) === null || a === undefined ? undefined : a.identityKey;
        } else {
          r.push({
            id: e,
            pos: i
          });
        }
      });
      if (r.length > 0) {
        (yield m.waSignalStore.bulkGetIdentityKeyWithRowId(r.map(e => e.id))).forEach((e, i) => {
          const a = r[i];
          t._cache.IdentityStore.set(a.id, e);
          n[a.pos] = e == null ? undefined : e.identityKey;
        });
      }
      return n;
    })();
  }
  bulkLoadIdentityKey(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.identity.acquire();
      try {
        return yield t._bulkLoadIdentityKeyImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  expandNewIdentitiesList(e) {
    const t = new Map();
    e.forEach(e => {
      t.set(e.identifier, {
        identifier: e.identifier,
        identityKey: e.identityKey
      });
    });
    e.forEach(e => {
      const n = (0, y.widFromSignalAddress)(e.identifier);
      const r = (0, s.getAlternateDeviceWid)(n);
      if (r == null) {
        return;
      }
      const i = (0, p.createSignalAddress)(r).toString();
      t.set(i, {
        identifier: i,
        identityKey: e.identityKey
      });
    });
    return Array.from(t.values());
  }
  _bulkCreateIdentityImpl(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e == null) {
        throw (0, E.default)("Tried to bulk put identity key with undefined/null");
      }
      __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]bulkCreateIdentity: store ${e.length} value(s): start`;
      yield (0, g.getStorage)().lock(["identity-store"], (0, a.default)(function* () {
        const n = e.map(e => e.identifier);
        const r = yield t._bulkLoadIdentityKeyImpl(n);
        let i = e.filter((e, t) => !r[t]);
        if (i.length > 0) {
          if ((0, o.getABPropConfigValue)("pnh_sync_identity_keys_and_devices")) {
            i = t.expandNewIdentitiesList(i);
          }
          yield m.waSignalStore.bulkPutIdentity(i);
          i.forEach(e => {
            let {
              identifier: n,
              identityKey: r
            } = e;
            t._cache.IdentityStore.set(n, {
              identityKey: r
            });
          });
        }
        __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]bulkCreateIdentity: store ${e.length} value(s) (new: ${i.length}): end`;
      }));
    })();
  }
  bulkCreateIdentity(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.identity.acquire();
      try {
        yield t._bulkCreateIdentityImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  _removeIdentityImpl(e) {
    this._cache.IdentityStore.set(e, {
      deleted: true
    });
    this._cache.Dirty.identity.add(e);
  }
  removeIdentity(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e == null) {
        return Promise.reject((0, E.default)("Tried to remove identity key for undefined/null key"));
      }
      const n = yield t._cache.Mutex.identity.acquire();
      try {
        yield t._removeIdentityImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  _loadPreKeyImpl(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e == null) {
        return;
      }
      if (!t._cache.PrekeyStore.has(e)) {
        var n;
        const r = (n = yield m.waSignalStore.getPreKeyById(e)) === null || n === undefined ? undefined : n.keyPair;
        t._cache.PrekeyStore.set(e, {
          keyPair: r
        });
      }
      const r = t._cache.PrekeyStore.get(e);
      return (r == null ? undefined : r.keyPair) || undefined;
    })();
  }
  loadPreKey(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.preKey.acquire();
      try {
        return yield t._loadPreKeyImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  _removePreKeyImpl(e) {
    if (e == null) {
      return Promise.reject((0, E.default)("Tried to remove pre key without keyId"));
    } else {
      this._cache.PrekeyStore.set(e, {
        deleted: true
      });
      this._cache.Dirty.preKey.add(e);
      return Promise.resolve();
    }
  }
  removePreKey(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.preKey.acquire();
      try {
        yield t._removePreKeyImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  loadSignedPreKey(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e != null) {
        if (!t._cache.SignedPreKeyStore.has(e)) {
          const n = yield m.waSignalStore.getSignedPreKeyById(e);
          const r = n ? {
            pubKey: n.keyPair.pubKey,
            privKey: n.keyPair.privKey,
            signature: n.signature
          } : null;
          t._cache.SignedPreKeyStore.set(e, r);
        }
        return t._cache.SignedPreKeyStore.get(e) || undefined;
      }
    })();
  }
  _loadSessionImpl(e) {
    var t = this;
    return (0, a.default)(function* () {
      var n;
      if (e != null) {
        if (!t._cache.SessionStore.has(e)) {
          const n = yield m.waSignalStore.getSession(e);
          t._cache.SessionStore.set(e, n ? {
            session: n
          } : undefined);
        }
        return (yield (0, f.maybeConvertSession)((n = t._cache.SessionStore.get(e)) === null || n === undefined ? undefined : n.session)) || undefined;
      }
    })();
  }
  loadSession(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.session.acquire();
      try {
        return yield t._loadSessionImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  _storeSessionImpl(e, t) {
    if (e == null) {
      throw (0, E.default)("Tried to put session without identifier");
    }
    this._cache.SessionStore.set(e, {
      session: t
    });
    this._cache.Dirty.session.add(e);
  }
  storeSession(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = yield n._cache.Mutex.session.acquire();
      try {
        n._storeSessionImpl(e, t);
      } finally {
        r.release();
      }
    })();
  }
  _removeSessionImpl(e) {
    if (e == null) {
      throw (0, E.default)("Tried to remove session without identifier");
    }
    this._cache.SessionStore.set(e, {
      deleted: true
    });
    this._cache.Dirty.session.add(e);
  }
  removeSession(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.session.acquire();
      try {
        t._removeSessionImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  _containSessionsImpl(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = [];
      for (const r of e) {
        if (!t._cache.SessionStore.has(r)) {
          n.push(r);
        }
      }
      if (n.length > 0) {
        (yield m.waSignalStore.bulkGetSession(n)).forEach((e, r) => {
          const i = n[r];
          t._cache.SessionStore.set(i, e ? {
            session: e
          } : undefined);
        });
      }
      return e.map(e => {
        const n = t._cache.SessionStore.get(e);
        return n != null && !(n == null ? undefined : n.deleted);
      });
    })();
  }
  containSessions(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.session.acquire();
      try {
        return yield t._containSessionsImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  _storeSenderKeyImpl(e, t) {
    if (e == null) {
      return Promise.reject((0, E.default)("Tried to put session without identifier"));
    } else {
      this._cache.SenderKeyStore.set(e, t);
      this._cache.Dirty.senderKey.add(e);
      return Promise.resolve();
    }
  }
  storeSenderKey(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = yield n._cache.Mutex.senderKey.acquire();
      try {
        yield n._storeSenderKeyImpl(e, t);
      } finally {
        r.release();
      }
    })();
  }
  _loadSenderKeyImpl(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (e != null) {
        if (!t._cache.SenderKeyStore.has(e)) {
          const n = yield m.waSignalStore.getSenderKey(e);
          t._cache.SenderKeyStore.set(e, n);
        }
        return (0, f.maybeConvertSenderKey)(t._cache.SenderKeyStore.get(e)) || undefined;
      }
    })();
  }
  loadSenderKey(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.senderKey.acquire();
      try {
        return yield t._loadSenderKeyImpl(e);
      } finally {
        n.release();
      }
    })();
  }
  switchToMemMode() {
    this._mode = S.Memory;
  }
  switchToPersistMode() {
    this._mode = S.Persist;
  }
  generateSnapshot() {
    if (this._mode === S.Memory) {
      return this._cache.generateCacheUpdate();
    }
  }
  deleteAllCache() {
    __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]deleteAllCache`;
    this._cache.clear();
  }
  flushBufferToDiskIfNotMemOnlyMode() {
    var e = this;
    return (0, a.default)(function* () {
      if (e._mode === S.Memory) {
        __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]flushBufferToDiskIfNotMemOnlyMode: skip for memory mode`;
        return Promise.resolve();
      }
      __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]flushBufferToDiskIfNotMemOnlyMode: start`;
      const t = [yield e._cache.Mutex.identity.acquire(), yield e._cache.Mutex.session.acquire(), yield e._cache.Mutex.senderKey.acquire(), yield e._cache.Mutex.preKey.acquire()];
      __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]flushBufferToDiskIfNotMemOnlyMode: lock complete`;
      const n = e._cache.generateCacheUpdate();
      try {
        yield (0, g.getStorage)().lock(["session-store", "identity-store", "prekey-store", "senderkey-store"], (0, a.default)(function* () {
          yield Promise.all([m.waSignalStore.bulkPutSession(n.sessionUpdate), m.waSignalStore.bulkPutIdentityKeyWithRowId(n.identityUpdate), m.waSignalStore.bulkPutSenderKey(n.senderKeyUpdate), m.waSignalStore.bulkRemovePreKey(n.preKeyRemove), m.waSignalStore.bulkRemoveSession(n.sessionRemove), m.waSignalStore.bulkRemoveIdentity(n.identityRemove)]);
        }));
        e._cache.clearDirty();
      } finally {
        t.forEach(e => e.release());
      }
      __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]flushBufferToDiskIfNotMemOnlyMode: done`;
    })();
  }
  _updateIdentityRangeAfterEncryptionImpl(e, t, n) {
    var r = this;
    return (0, a.default)(function* () {
      __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]updateIdentityRangeAfterEncryption: start`;
      yield r._bulkLoadIdentityKeyImpl(n);
      const a = [];
      n.forEach(n => {
        const o = r._cache.IdentityStore.get(n);
        if (o && !o.deleted && (o[e] == null || o[e] > t)) {
          const s = (0, i.default)({}, o);
          s[e] = t;
          r._cache.IdentityStore.set(n, s);
          r._cache.Dirty.identity.add(n);
          a.push(n);
        }
      });
      __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]updateIdentityRangeAfterEncryption: ${a.length} updated`;
    })();
  }
  updateIdentityRangeAfterEncryption(e, t, n) {
    var r = this;
    return (0, a.default)(function* () {
      const i = yield r._cache.Mutex.identity.acquire();
      try {
        yield r._updateIdentityRangeAfterEncryptionImpl(e, t, n);
      } finally {
        i.release();
      }
    })();
  }
  _maybeCleanUpUnconvertedSessionAfterEncryption(e) {
    if (e == null) {
      return Promise.resolve();
    }
    const t = this._cache.SessionStore.get(e);
    if (t && (0, f.shouldConvertSession)(t.session)) {
      __LOG__(2, undefined, undefined, undefined, ["unified-store"])`[Signal]maybeCleanUpUnconvertedSession: delete unconverted session`;
      this._removeSessionImpl(e);
    }
    return Promise.resolve();
  }
  maybeCleanUpUnconvertedSession(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t._cache.Mutex.session.acquire();
      try {
        return yield t._maybeCleanUpUnconvertedSessionAfterEncryption(e);
      } finally {
        n.release();
      }
    })();
  }
}();
exports.default = v;