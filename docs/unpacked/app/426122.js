var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignalStoreCache = undefined;
var i = r(require("../vendor/150361.js"));
var a = require("./30028.js");
exports.SignalStoreCache = class {
  constructor() {
    this.RegistrationInfo = null;
    this.SignedPreKeyStore = new Map();
    this.PrekeyStore = new Map();
    this.SessionStore = new Map();
    this.IdentityStore = new Map();
    this.SenderKeyStore = new Map();
    this.Mutex = {
      session: new a.Semaphore(),
      identity: new a.Semaphore(),
      senderKey: new a.Semaphore(),
      preKey: new a.Semaphore()
    };
    this.Dirty = {
      session: new Set(),
      identity: new Set(),
      senderKey: new Set(),
      preKey: new Set()
    };
  }
  _generateSessionUpdate() {
    const e = [];
    const t = [];
    this.Dirty.session.forEach(n => {
      const r = this.SessionStore.get(n);
      if (r) {
        if (r.deleted) {
          t.push(n);
        } else {
          e.push({
            address: n,
            session: (0, i.default)(r.session)
          });
        }
      }
    });
    return {
      update: e,
      remove: t
    };
  }
  _generateSenderKeyUpdate() {
    const e = [];
    this.Dirty.senderKey.forEach(t => {
      const n = this.SenderKeyStore.get(t);
      if (n) {
        const r = t.split("::");
        if (r.length === 2) {
          e.push({
            senderKeyName: t,
            senderId: r[1],
            senderKey: (0, i.default)(n)
          });
        }
      }
    });
    return e;
  }
  _generateIdentityUpdate() {
    const e = [];
    const t = [];
    this.Dirty.identity.forEach(n => {
      const r = this.IdentityStore.get(n);
      if (r) {
        if (r.deleted) {
          t.push(n);
        } else {
          e.push({
            identifier: n,
            identityKey: r.identityKey,
            rowId: r.rowId,
            sentAddonRowId: r.sentAddonRowId
          });
        }
      }
    });
    return {
      update: e,
      remove: t
    };
  }
  _generatePreKeyUpdate() {
    const e = [];
    this.Dirty.preKey.forEach(t => {
      const n = this.PrekeyStore.get(t);
      if (n == null ? undefined : n.deleted) {
        e.push(parseInt(t, 10));
      }
    });
    return e;
  }
  generateCacheUpdate() {
    const e = this._generateIdentityUpdate();
    const t = this._generateSessionUpdate();
    const n = {
      sessionUpdate: t.update,
      sessionRemove: t.remove,
      identityUpdate: e.update,
      identityRemove: e.remove,
      senderKeyUpdate: this._generateSenderKeyUpdate(),
      preKeyRemove: this._generatePreKeyUpdate()
    };
    return n;
  }
  clearDirty() {
    this.Dirty = {
      session: new Set(),
      identity: new Set(),
      senderKey: new Set(),
      preKey: new Set()
    };
  }
  clear() {
    this.RegistrationInfo = null;
    this.SignedPreKeyStore.clear();
    this.PrekeyStore.clear();
    this.SessionStore.clear();
    this.IdentityStore.clear();
    this.SenderKeyStore.clear();
    this.clearDirty();
  }
};