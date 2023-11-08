var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waNoiseInfo = exports.deviceInfo = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./780549.js");
var l = require("./403206.js");
var u = require("./659102.js");
var c = r(require("./932325.js"));
var d = require("./804334.js");
var p = require("./332108.js");
var f = require("./97858.js");
var _ = require("./226562.js");
var g = require("./314189.js");
var m = require("./673168.js");
var h = require("./499264.js");
const y = new class {
  constructor() {
    this._cachedOsRelease = null;
  }
  get() {
    var e = this;
    return (0, i.default)(function* () {
      if (e._cachedOsRelease == null) {
        e._cachedOsRelease = yield e.getOsRelease();
      }
      return {
        osVersion: e._cachedOsRelease,
        osBuild: "0.1",
        hardware: "desktop",
        manufacturer: "",
        device: "Desktop",
        lg: c.default.getLanguage(),
        lc: c.default.getRegion() || "",
        mcc: "000",
        mnc: "000",
        sim_mnc: "000",
        sim_mcc: "000"
      };
    })();
  }
  getOsRelease() {
    return Promise.resolve("0.1");
  }
}();
exports.deviceInfo = y;
const E = "AES-GCM";
const S = "PBKDF2";
const v = new class {
  constructor() {
    this.cachedPasscodeDerivedKey = null;
  }
  resetCachedPasscodeDerivedKey() {
    this.cachedPasscodeDerivedKey = null;
  }
  get() {
    var e = this;
    return (0, i.default)(function* () {
      let t = (0, m.getNoiseInfo)();
      if (!t) {
        return null;
      }
      const n = e._getIv();
      if (!n) {
        return null;
      }
      t = yield e._decryptAllNoiseData(t, n);
      if ((0, f.screenLockFeatureSupported)() && (0, h.getScreenLockEnabled)()) {
        s.Cmd.setSocketState(_.SOCKET_STATE.SCREEN_LOCKED);
        const n = yield e.passcodeUnlockNoiseInfo(t);
        if (n) {
          t = n;
        }
      }
      if (e._isStaticKeyPairValid(t)) {
        return t;
      } else {
        __LOG__(2, undefined, undefined, undefined, ["info-store"])`Decrypted noise key was invalid.`;
        return null;
      }
    })();
  }
  set(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = new Uint8Array(48);
      self.crypto.getRandomValues(n);
      const r = t._processIv(n);
      yield t._setIv(r);
      e.recoveryToken = yield t._encryptNoiseData(e.recoveryToken, r[0]);
      e.staticKeyPair.pubKey = yield t._encryptNoiseData(e.staticKeyPair.pubKey, r[1]);
      e.staticKeyPair.privKey = yield t._encryptNoiseData(e.staticKeyPair.privKey, r[2]);
      return (0, m.setNoiseInfo)(e);
    })();
  }
  _setIv(e) {
    return (0, m.setNoiseInfoIv)(e.map(a.encodeB64));
  }
  _getIv() {
    const e = (0, m.getNoiseInfoIv)();
    if (e) {
      return e.map(e => new Uint8Array((0, a.decodeB64)(e)));
    } else {
      return null;
    }
  }
  _processIv(e) {
    const t = new o.Binary(e);
    return [t.readByteArray(16), t.readByteArray(16), t.readByteArray(16)];
  }
  _encryptNoiseData(e, t) {
    return (0, i.default)(function* () {
      const n = u.DbEncKeyStore.getEncKeys()[0];
      return yield self.crypto.subtle.encrypt({
        iv: t,
        name: "AES-CBC"
      }, n.key, e);
    })();
  }
  _decryptAllNoiseData(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      e.recoveryToken = yield n._decryptNoiseData(e.recoveryToken, t[0]);
      e.staticKeyPair.pubKey = yield n._decryptNoiseData(e.staticKeyPair.pubKey, t[1]);
      e.staticKeyPair.privKey = yield n._decryptNoiseData(e.staticKeyPair.privKey, t[2]);
      return e;
    })();
  }
  _decryptNoiseData(e, t) {
    return (0, i.default)(function* () {
      const n = u.DbEncKeyStore.getEncKeys()[0];
      return yield self.crypto.subtle.decrypt({
        iv: t,
        name: "AES-CBC"
      }, n.key, e);
    })();
  }
  _isStaticKeyPairValid(e) {
    let t = true;
    try {
      const n = new Uint8Array((0, l.keyPair)(e.staticKeyPair.privKey).pubKey);
      const r = new Uint8Array(e.staticKeyPair.pubKey);
      for (let e = 0; e < n.length; e++) {
        if (n[e] !== r[e]) {
          t = false;
          break;
        }
      }
    } catch (e) {
      __LOG__(2, undefined, undefined, undefined, ["info-store"])`Decrypted noise key failed validation.`;
      t = false;
    }
    return t;
  }
  lockNoiseInfo(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t.deriveKeyFromPasscode(e);
      t.createScreenLockIv();
      const r = yield t.get();
      if (!r || !r.staticKeyPair) {
        return false;
      }
      const {
        recoveryToken: i,
        staticKeyPair: {
          pubKey: a,
          privKey: o
        }
      } = r;
      try {
        const e = yield Promise.all([i, a, o].map(e => t.encryptNoiseWithPasscodeDerivedKey(e, n)));
        if (e[0] && e[1] && e[2]) {
          yield t.set({
            recoveryToken: e[0],
            staticKeyPair: {
              pubKey: e[1],
              privKey: e[2]
            }
          });
          t.cachedPasscodeDerivedKey = n;
          return true;
        }
      } catch (e) {}
      return false;
    })();
  }
  passcodeUnlockNoiseInfo(e) {
    var t = this;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return (0, i.default)(function* () {
      let r;
      if (t.cachedPasscodeDerivedKey == null) {
        let e;
        e = n ? yield d.LockScreenResolvable.waitForPasscodeAfterIncorrectAttempt() : yield d.LockScreenResolvable.waitForPasscode();
        r = yield t.deriveKeyFromPasscode(e);
      } else {
        r = t.cachedPasscodeDerivedKey;
      }
      const i = yield t.getUnlockedNoiseInfo(e, r);
      if (i && t._isStaticKeyPairValid(i)) {
        d.LockScreenResolvable.correctPasscodeEntered(r);
        s.Cmd.setSocketState(_.SOCKET_STATE.OPENING);
        return i;
      } else {
        __LOG__(2, undefined, undefined, undefined, ["info-store"])`Decrypted noise key was invalid.`;
        return t.passcodeUnlockNoiseInfo(e, true);
      }
    })();
  }
  getUnlockedNoiseInfo(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const {
        recoveryToken: r,
        staticKeyPair: {
          pubKey: i,
          privKey: a
        }
      } = e;
      try {
        const e = yield Promise.all([r, i, a].map(e => n.decryptNoiseWithPasscodeDerivedKey(e, t)));
        if (e[0] && e[1] && e[2]) {
          n.cachedPasscodeDerivedKey = t;
          return {
            recoveryToken: e[0],
            staticKeyPair: {
              pubKey: e[1],
              privKey: e[2]
            }
          };
        }
      } catch (e) {
        return null;
      }
    })();
  }
  removeLockOnNoiseInfo(e) {
    var t = this;
    return (0, i.default)(function* () {
      let n = (0, m.getNoiseInfo)();
      if (!n) {
        return false;
      }
      const r = t._getIv();
      if (!r) {
        return false;
      }
      n = yield t._decryptAllNoiseData(n, r);
      const i = yield t.deriveKeyFromPasscode(e);
      const a = yield t.getUnlockedNoiseInfo(n, i);
      return a != null && (t._isStaticKeyPairValid(a) ? (yield t.set(a), (0, h.setScreenLockSalt)(null), (0, h.setScreenLockIvString)(""), yield (0, h.setScreenLockIterations)(null), t.cachedPasscodeDerivedKey = null, true) : (__LOG__(2, undefined, undefined, undefined, ["info-store"])`Decrypted noise key was invalid.`, false));
    })();
  }
  deriveKeyFromPasscode(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = new TextEncoder().encode(e);
      const r = yield self.crypto.subtle.importKey("raw", n, {
        name: S
      }, false, ["deriveKey"]);
      const i = yield t.getOrGenScreenLockSalt();
      return yield self.crypto.subtle.deriveKey({
        name: S,
        hash: "SHA-256",
        salt: i,
        iterations: yield t.getScreenLockIterationCount()
      }, r, {
        name: E,
        length: 128
      }, false, ["encrypt", "decrypt"]);
    })();
  }
  getOrGenScreenLockSalt() {
    let e = null;
    if (!(0, h.getScreenLockEnabled)()) {
      e = new Uint8Array(128);
      self.crypto.getRandomValues(e);
      e = btoa(String.fromCharCode(...Array.from(new Uint8Array(e))));
      (0, h.setScreenLockSalt)(e);
    }
    e = (0, h.getScreenLockSalt)();
    if (e == null) {
      (0, g.socketLogout)(p.LogoutReason.MissingScreenLockSalt);
    }
    e = Uint8Array.from(atob(e), e => e.charCodeAt(0));
    return Promise.resolve(e);
  }
  createScreenLockIv() {
    const e = new Uint8Array(16);
    self.crypto.getRandomValues(e);
    const t = new o.Binary(e).readByteArray(16);
    (0, h.setScreenLockIvString)((0, a.encodeB64)(t));
  }
  getScreenLockIvArray() {
    const e = (0, h.getScreenLockIvString)();
    if (e) {
      return new Uint8Array((0, a.decodeB64)(e));
    } else {
      return null;
    }
  }
  encryptNoiseWithPasscodeDerivedKey(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = n.getScreenLockIvArray();
      if (!r) {
        return null;
      }
      return yield self.crypto.subtle.encrypt({
        iv: r,
        name: E
      }, t, e);
    })();
  }
  decryptNoiseWithPasscodeDerivedKey(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = n.getScreenLockIvArray();
      if (!r) {
        return null;
      }
      return yield self.crypto.subtle.decrypt({
        iv: r,
        name: E
      }, t, e);
    })();
  }
  calculatePBKDF2Iterations() {
    const e = navigator.hardwareConcurrency;
    return Math.max(1, Number.isNaN(e) ? 1 : e) * 600000;
  }
  getScreenLockIterationCount() {
    var e = this;
    return (0, i.default)(function* () {
      let t = yield (0, h.getScreenLockIterations)();
      if (!((0, h.getScreenLockEnabled)() && t != null)) {
        t = e.calculatePBKDF2Iterations();
        yield (0, h.setScreenLockIterations)(t);
      }
      return t;
    })();
  }
}();
exports.waNoiseInfo = v;