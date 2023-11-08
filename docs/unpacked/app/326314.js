var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waSignalStore = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./999821.js");
var o = require("./437174.js");
var s = require("./311721.js");
var l = require("./22399.js");
var u = r(require("./556869.js"));
const c = new class {
  constructor() {
    this.idToSignedPreKey = new Map();
  }
  getMeta(e) {
    return (0, s.getMetaTable)().get(e).then(e => e ? e.value : null);
  }
  putMeta(e) {
    return (0, i.default)(function* () {
      const t = (0, s.getMetaTable)();
      const n = e.map(e => t.createOrReplace(e));
      yield Promise.all(n);
    })();
  }
  setServerHasPreKeys(e) {
    this.putMeta([{
      key: o.META_KEYS.SERVER_HAS_KEY,
      value: e
    }]);
  }
  getServerHasPreKeys() {
    return this.getMeta(o.META_KEYS.SERVER_HAS_KEY);
  }
  putADVSignedIdentity(e) {
    return this.putMeta([{
      key: o.META_KEYS.ADV_SIGNED_IDENTITY,
      value: e
    }]);
  }
  getADVSignedIdentity() {
    return this.getMeta(o.META_KEYS.ADV_SIGNED_IDENTITY);
  }
  getPreKeysByRange(e, t) {
    return (0, s.getPreKeyTable)().greaterThan(["keyId"], e - 1, {
      limit: t
    });
  }
  getPreKeyById(e) {
    return (0, s.getPreKeyTable)().get(e);
  }
  removePreKeyById(e) {
    return (0, s.getPreKeyTable)().remove(e);
  }
  bulkRemovePreKey(e) {
    return (0, s.getPreKeyTable)().bulkRemove(e);
  }
  putPreKeys(e) {
    return (0, s.getPreKeyTable)().bulkCreateOrReplace(e);
  }
  markPreKeyAsDirectDistribution(e) {
    return (0, s.getPreKeyTable)().merge(e, {
      isDirectDistribution: 1
    });
  }
  getSignedPreKey() {
    return this.getMeta(o.META_KEYS.LAST_SPK_ID).then(e => this.getSignedPreKeyById(e));
  }
  getSignedPreKeyById(e) {
    if (this.idToSignedPreKey.has(e)) {
      return Promise.resolve(this.idToSignedPreKey.get(e));
    }
    return (0, s.getSignedPreKeyTable)().get(e).then(t => {
      this.idToSignedPreKey.set(e, t);
      return t;
    });
  }
  putSignedPreKeys(e) {
    return (0, i.default)(function* () {
      const t = (0, s.getSignedPreKeyTable)();
      const n = e.map(e => {
        const {
          keyId: n,
          keyPair: r,
          signature: i
        } = e;
        return t.get(n).then(e => {
          if (e) {
            throw (0, u.default)(`signed preKey id ${n} already exists`);
          }
          return t.create({
            keyId: n,
            keyPair: r,
            signature: i
          });
        });
      });
      yield Promise.all(n);
    })();
  }
  putSession(e, t) {
    return (0, s.getSessionTable)().createOrReplace({
      address: e,
      session: t
    });
  }
  bulkPutSession(e) {
    return (0, s.getSessionTable)().bulkCreateOrReplace(e);
  }
  removeSession(e) {
    return (0, s.getSessionTable)().remove(e);
  }
  bulkRemoveSession(e) {
    return (0, s.getSessionTable)().bulkRemove(e);
  }
  getSession(e) {
    return (0, s.getSessionTable)().get(e).then(e => e ? e.session : null);
  }
  bulkGetSession(e) {
    return (0, s.getSessionTable)().bulkGet(e).then(e => e.map(e => e ? e.session : null));
  }
  putIdentity(e, t) {
    return (0, s.getIdentityTable)().createOrReplace({
      identifier: e,
      identityKey: t
    });
  }
  bulkPutIdentity(e) {
    return (0, s.getIdentityTable)().bulkCreateOrReplace(e);
  }
  bulkGetIdentity(e) {
    return (0, s.getIdentityTable)().bulkGet(e).then(e => e.map(e => e ? e.identityKey : null));
  }
  getIdentity(e) {
    return (0, s.getIdentityTable)().get(e).then(e => e ? e.identityKey : null);
  }
  removeIdentity(e) {
    return (0, s.getIdentityTable)().remove(e);
  }
  bulkRemoveIdentity(e) {
    return (0, s.getIdentityTable)().bulkRemove(e);
  }
  getIdentityKeyWithRowId(e) {
    return (0, s.getIdentityTable)().get(e).then(e => e ? {
      identityKey: e.identityKey,
      rowId: e.rowId,
      sentAddonRowId: e.sentAddonRowId
    } : null);
  }
  bulkGetIdentityKeyWithRowId(e) {
    return (0, s.getIdentityTable)().bulkGet(e).then(e => e.map(e => e ? {
      identityKey: e.identityKey,
      rowId: e.rowId
    } : null));
  }
  bulkPutIdentityKeyWithRowId(e) {
    return (0, s.getIdentityTable)().bulkCreateOrReplace(e);
  }
  saveBaseKey(e, t, n) {
    return (0, s.getBaseKeyTable)().createOrReplace({
      address: e,
      originalMsgId: t,
      baseKey: n
    });
  }
  loadBaseKey(e, t) {
    return (0, s.getBaseKeyTable)().equals(["address", "originalMsgId"], [e, t]).then(e => e && e.length !== 0 ? e[0].baseKey : null);
  }
  deleteBaseKey(e, t) {
    const n = (0, s.getBaseKeyTable)();
    return n.equals(["address", "originalMsgId"], [e, t]).then(e => {
      if (e && e.length !== 0) {
        return n.remove(e[0].id);
      }
    });
  }
  putSenderKey(e, t, n) {
    return (0, s.getSenderKeyTable)().createOrReplace({
      senderKeyName: e,
      senderId: t,
      senderKey: n
    });
  }
  bulkPutSenderKey(e) {
    return (0, s.getSenderKeyTable)().bulkCreateOrReplace(e);
  }
  removeSenderKey(e) {
    return (0, s.getSenderKeyTable)().remove(e);
  }
  getSenderKey(e) {
    return (0, s.getSenderKeyTable)().get(e).then(e => e ? e.senderKey : null);
  }
  removeSenderKeyBySenderId(e) {
    const t = (0, s.getSenderKeyTable)();
    return t.equals(["senderId"], e).then(e => t.bulkRemove(e.map(e => e.senderKeyName)));
  }
  clearCredential() {
    const e = [(0, s.getIdentityTable)(), (0, s.getMetaTable)(), (0, s.getPreKeyTable)(), (0, s.getSessionTable)(), (0, s.getSignedPreKeyTable)()];
    return Promise.all(e.map(e => e.clear())).then(() => {});
  }
  getRegistrationInfo() {
    if (this.registrationInfo != null) {
      return Promise.resolve(this.registrationInfo);
    } else {
      return Promise.all([this.getMeta(o.META_KEYS.REG_ID), this.getMeta(o.META_KEYS.STATIC_PUBKEY), this.getMeta(o.META_KEYS.STATIC_PRIVKEY)]).then(e => {
        let [t, n, r] = e;
        if (t && n && r) {
          return Promise.all([(0, a.decryptRegistrationMaterial)(n), (0, a.decryptRegistrationMaterial)(r)]).then(e => {
            let [n, r] = e;
            this.registrationInfo = {
              registrationId: t,
              identityKeyPair: {
                pubKey: n,
                privKey: r
              }
            };
            return this.registrationInfo;
          });
        }
      });
    }
  }
  setRegistrationInfo(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield Promise.all([(0, a.encryptRegistrationMaterial)(e.identityKeyPair.pubKey), (0, a.encryptRegistrationMaterial)(e.identityKeyPair.privKey)]).then(n => {
        let [r, i] = n;
        return Promise.all([t.putMeta([{
          key: o.META_KEYS.REG_ID,
          value: e.registrationId
        }, {
          key: o.META_KEYS.STATIC_PUBKEY,
          value: r
        }, {
          key: o.META_KEYS.STATIC_PRIVKEY,
          value: i
        }])]);
      });
    })();
  }
  getOrGenPreKeys(e, t) {
    return (0, l.getStorage)().lock(["signal-meta-store", "prekey-store"], () => Promise.all([this.getMeta(o.META_KEYS.FIRST_UNUPLOAD_PK_ID), this.getMeta(o.META_KEYS.NEXT_PK_ID)]).then(n => {
      let [r, i] = n;
      const a = r || 1;
      const o = i || 1;
      const s = o - a;
      const l = e - s;
      if (l <= 0) {
        __LOG__(2)`getPreKeys: no prekey needs to be generated, available: ${s}, need: ${e}`;
        return this.getPreKeysByRange(a, e);
      }
      const u = function (e, t) {
        const n = [];
        for (let r = e; r < t; r++) {
          n.push(r);
        }
        return n;
      }(o, o + l).map(e => t(e));
      return Promise.all(u).then(e => this.savePreKeys(e)).then(() => this.getPreKeysByRange(a, e));
    }));
  }
  getOrGenSinglePreKey(e) {
    return this.getOrGenPreKeys(1, e).then(e => {
      if (e.length !== 1) {
        throw (0, u.default)(`Expected to get exactly one key but got ${e.length}`);
      }
      return e[0];
    });
  }
  savePreKeys(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (e.length === 0) {
        return;
      }
      const n = e[e.length - 1];
      yield Promise.all([t.putMeta([{
        key: o.META_KEYS.NEXT_PK_ID,
        value: n.keyId + 1
      }]), t.putPreKeys(e)]);
    })();
  }
  markKeyAsUploaded(e) {
    return Promise.all([this.getMeta(o.META_KEYS.FIRST_UNUPLOAD_PK_ID), this.getMeta(o.META_KEYS.NEXT_PK_ID)]).then(t => {
      let [n, r] = t;
      if (e < 0 || !r || e >= r) {
        throw (0, u.default)(`markKeyAsUploaded: key ${e} is out of boundary.`);
      }
      const i = n ? Math.max(n, e + 1) : e + 1;
      return this.putMeta([{
        key: o.META_KEYS.FIRST_UNUPLOAD_PK_ID,
        value: i
      }]);
    });
  }
  rotateSignedPreKey(e, t) {
    return (0, l.getStorage)().lock(["signal-meta-store", "signed-prekey-store"], () => this.getMeta(o.META_KEYS.LAST_SPK_ID).then(n => {
      const r = n == null ? 1 : n + 1;
      return t(e, r).then(e => {
        this.putSignedPreKeys([e]);
        this.putMeta([{
          key: o.META_KEYS.LAST_SPK_ID,
          value: r
        }]);
        return e;
      });
    }));
  }
}();
exports.waSignalStore = c;