var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.companionFinish = function () {
  return L.apply(this, arguments);
};
exports.companionFinishInternal = k;
exports.companionHello = function () {
  return b.apply(this, arguments);
};
exports.companionHelloInternal = C;
exports.createAdvSecret = function () {
  return w.apply(this, arguments);
};
exports.createAdvSecretMaterial = function (e, t, n) {
  __LOG__(2)`alt pairing: create adv secret material`;
  return (0, o.concatBuffers)([e, t, (0, l.uint8ArrayToBuffer)(n)]);
};
exports.decryptPrimaryHello = M;
exports.deriveKey = E;
exports.encryptCompanionHello = v;
exports.encryptKeyBundle = N;
exports.generateRandomCode = m;
exports.getBundleEncryptionKey = O;
exports.getKeyBundle = R;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./459617.js");
var s = require("./904704.js");
var l = require("./881841.js");
var u = require("./562075.js");
var c = require("./518043.js");
var d = require("./339222.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
}(require("./403206.js"));
var f = require("./326314.js");
var _ = r(require("./556869.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function m() {
  __LOG__(2)`alt pairing: generate random code`;
  const e = new Uint8Array(5);
  self.crypto.getRandomValues(e);
  return (0, d.bytesToCrockford)(e);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* (e, t) {
    try {
      return yield e();
    } catch (e) {
      var n;
      if (!((n = (0, c.getCurrentMarker)()) === null || n === undefined)) {
        n.addPoint(t);
      }
      throw e;
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    const r = new s.Binary(t);
    const i = yield self.crypto.subtle.deriveKey({
      name: "PBKDF2",
      hash: "SHA-256",
      salt: r.readBuffer(),
      iterations: 2 << 16
    }, e, {
      name: "AES-CTR",
      length: 256
    }, n, ["encrypt", "decrypt"]);
    return i;
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* (e, t, n) {
    __LOG__(2)`alt pairing: encrypt companion hello`;
    return yield self.crypto.subtle.encrypt({
      name: "AES-CTR",
      length: 64,
      counter: t
    }, n, e);
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e, t, n) {
    __LOG__(2)`alt pairing: decrypt primary hello`;
    const r = {
      name: "AES-CTR",
      length: 64,
      counter: t
    };
    return yield h(() => self.crypto.subtle.decrypt(r, n, e), "fail decrypt primary ephemeral pub");
  })).apply(this, arguments);
}
function b() {
  return (b = (0, a.default)(function* () {
    const e = m();
    const t = (0, p.keyPair)();
    const n = new Uint8Array(32);
    self.crypto.getRandomValues(n);
    const r = new Uint8Array(16);
    self.crypto.getRandomValues(r);
    const a = yield C(e, t, n, r);
    return (0, i.default)((0, i.default)({}, a), {}, {
      linkCodePairingSecret: e
    });
  })).apply(this, arguments);
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, a.default)(function* (e, t, n, r) {
    const i = yield self.crypto.subtle.importKey("raw", new TextEncoder().encode(e), {
      name: "PBKDF2"
    }, false, ["deriveKey"]);
    const a = yield E(i, n);
    const o = yield h(() => v(t.pubKey, r, a), "fail encrypt companion hello");
    const l = new s.Binary();
    l.writeByteArray(n);
    l.writeByteArray(r);
    l.writeByteArray(new Uint8Array(o));
    return {
      linkCodePairingWrappedCompanionEphemeralPub: l.readBuffer(),
      linkCodeKey: i,
      linkCodePairingCompanionADVEphemeralKeyPair: t
    };
  })).apply(this, arguments);
}
function O() {
  return I.apply(this, arguments);
}
function I() {
  return (I = (0, a.default)(function* (e, t) {
    return yield (0, u.extractWithSaltAndExpand)(e, t, "link_code_pairing_key_bundle_encryption_key", 32);
  })).apply(this, arguments);
}
function R(e, t, n) {
  return (0, o.concatBuffers)([e, t, (0, l.uint8ArrayToBuffer)(n)]);
}
function N() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, a.default)(function* (e, t, n) {
    __LOG__(2)`alt pairing: encrypt key bundle`;
    const r = yield self.crypto.subtle.importKey("raw", e, {
      name: "AES-GCM"
    }, false, ["encrypt"]);
    const i = {
      name: "AES-GCM",
      iv: t
    };
    return yield h(() => self.crypto.subtle.encrypt(i, r, n), "fail encrypt wrapped key bundle");
  })).apply(this, arguments);
}
function w() {
  return (w = (0, a.default)(function* (e) {
    return yield (0, u.extractWithSaltAndExpand)(e, null, "adv_secret", 32);
  })).apply(this, arguments);
}
function L() {
  return (L = (0, a.default)(function* (e, t, n, r) {
    const i = yield f.waSignalStore.getRegistrationInfo();
    if (i == null) {
      throw (0, _.default)("alt pairing: Did not find registration info");
    }
    const a = new Uint8Array(32);
    self.crypto.getRandomValues(a);
    const o = new Uint8Array(32);
    self.crypto.getRandomValues(o);
    const s = new Uint8Array(12);
    self.crypto.getRandomValues(s);
    return k(e, t, n, r, i.identityKeyPair.pubKey, i.identityKeyPair.privKey, a, o, s);
  })).apply(this, arguments);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, a.default)(function* (e, t, n, r, i, a, c, d, f) {
    const g = new s.Binary(e);
    const m = g.readByteArray(32);
    const y = g.readByteArray(16);
    const S = g.readByteArray();
    const v = yield E(n, m);
    const T = yield h(() => M(S, y, v), "fail decrypt primary ephemeral pub");
    if (T === new ArrayBuffer(0)) {
      throw (0, _.default)("alt pairing: linkCodePairingDecryptedPrimaryEphemeralPub is an empty buffer");
    }
    const A = yield h(() => p.sharedSecret(T, r.privKey), "fail generate ephemeral shared secret");
    const b = yield O(A, d);
    const C = R(i, t, c);
    const P = yield N(b, f, C);
    const I = new s.Binary();
    I.writeByteArray(d);
    I.writeByteArray(f);
    I.writeBuffer(P);
    const D = yield h(() => p.sharedSecret(t, a), "fail generate identity shared secret");
    const w = (0, o.concatBuffers)([A, D, (0, l.uint8ArrayToBuffer)(c)]);
    const L = yield (0, u.extractWithSaltAndExpand)(w, null, "adv_secret", 32);
    return {
      companionIdentityPublic: i,
      linkCodePairingWrappedKeyBundle: I.readBuffer(),
      advSecret: L
    };
  })).apply(this, arguments);
}