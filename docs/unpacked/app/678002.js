var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE = undefined;
exports.clearADVSecretKey = function () {
  return G.apply(this, arguments);
};
exports.generateADVSecretKey = function () {
  return I.apply(this, arguments);
};
exports.generateDeviceSignature = function (e, t, n) {
  const r = e.details;
  const i = o.Binary.build(P, r, t.pubKey, n).readByteArray().buffer;
  return (0, c.calculateSignature)(t, i);
};
exports.getADVEncodedIdentity = function () {
  return N.apply(this, arguments);
};
exports.getADVSecretKey = function () {
  return R.apply(this, arguments);
};
exports.setADVSignedIdentity = function (e) {
  if (e == null) {
    return Promise.reject((0, S.default)("MD advSignedDeviceIdentity is null or undefined"));
  }
  if (e.deviceSignature == null) {
    return Promise.reject((0, S.default)("MD advSignedDeviceIdentity is missing deviceSignature"));
  }
  return _.waSignalStore.putADVSignedIdentity(e);
};
exports.validateADVwithEncs = function () {
  return A.apply(this, arguments);
};
exports.validateADVwithIdentityKey = T;
exports.verifyDeviceIdentityAccountSignature = D;
exports.verifyHostedDeviceIdentityAccountSignature = function () {
  return false;
};
exports.verifyHostedDeviceSignature = function () {
  return false;
};
exports.verifyKeyIndexListAccountSignature = function (e, t) {
  const n = e.details;
  const r = e.accountSignature;
  (0, v.default)(r != null, "accountSignature should not be null");
  const i = o.Binary.build(O, n).readByteArray();
  return (0, c.verifySignature)(new Uint8Array(t), i, new Uint8Array(r));
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./881841.js");
var l = require("./798440.js");
var u = require("./303754.js");
var c = require("./403206.js");
var d = require("./962559.js");
var p = require("./999821.js");
var f = require("./76256.js");
var _ = require("./326314.js");
var g = require("./732974.js");
var m = require("./673168.js");
var h = require("./669050.js");
var y = require("./394629.js");
var E = require("./385914.js");
var S = r(require("./556869.js"));
var v = r(require("../vendor/441143.js"));
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    const i = false;
    try {
      const a = (0, h.toUserWid)(e);
      const o = (0, s.uint8ArrayToBuffer)(n);
      const u = yield (0, f.getSignalProtocolStore)().loadIdentityKey((0, p.createSignalAddress)(e).toString());
      if (u) {
        const e = (0, c.toCurveKeyPubKey)((0, p.strToBuffer)(u));
        if ((0, p.bufferEqual)(e, o)) {
          return true;
        }
      }
      const _ = (0, y.decodeProtobuf)(d.ADVSignedDeviceIdentitySpec, t);
      (0, v.default)(_ != null, "advSignedDeviceIdentity should not be null");
      const g = yield (0, f.getSignalProtocolStore)().loadIdentityKey((0, p.createSignalAddress)(a).toString());
      const m = g ? (0, c.toCurveKeyPubKey)((0, p.strToBuffer)(g)) : null;
      if (!D(_, o, m)) {
        __LOG__(3)`validateADVIdentity: invalid account signature`;
        return false;
      }
      if (!k(_, o, m, i)) {
        __LOG__(3)`validateADVIdentity: invalid device signature`;
        return false;
      }
      const E = (0, y.decodeProtobuf)(d.ADVDeviceIdentitySpec, _.details);
      (0, v.default)(E != null, "advDeviceIdentity should not be null");
      try {
        yield (0, l.handleADVDeviceUpdateForMessage)(e, E, m, _.accountSignatureKey, o, r, E.accountType);
      } catch (e) {
        __LOG__(3)`validateADVIdentity: process adv device identity failed`;
        return false;
      }
      __LOG__(2)`validateADVIdentity: successfully verified accountSignature and deviceSignature`;
      return true;
    } catch (e) {
      __LOG__(3)`validateADVIdentity: failed`;
      return false;
    }
  })).apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    const i = n.find(e => e.e2eType === u.CiphertextType.Pkmsg);
    if (!i) {
      return true;
    }
    __LOG__(2)`validateADVwithEncs: start validate prekey msg `;
    try {
      (0, v.default)(e != null, "author should not be null");
      const n = (0, g.extractIdentityKey)(i.ciphertext);
      (0, v.default)(n != null, "identityKey should not be null");
      const a = yield T(e, t, new Uint8Array(n), r);
      yield (0, f.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
      return a;
    } catch (e) {
      __LOG__(3)`validateADVwithEncs: failed ${e}`;
      return false;
    }
  })).apply(this, arguments);
}
const b = new Uint8Array([6, 5]);
exports.ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE = b;
new Uint8Array([6, 6]);
const C = new Uint8Array([6, 0]);
const P = new Uint8Array([6, 1]);
const O = new Uint8Array([6, 2]);
function I() {
  return (I = (0, i.default)(function* () {
    const e = new Uint8Array(32);
    self.crypto.getRandomValues(e);
    const t = (0, a.encodeB64)(e);
    yield (0, m.setADVSecretKey)(t);
    return t;
  })).apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* () {
    const e = yield (0, m.getADVSecretKey)();
    if (e == null) {
      throw (0, S.default)("MD secretKey is null or undefined");
    }
    return e;
  })).apply(this, arguments);
}
function N() {
  return (N = (0, i.default)(function* () {
    const e = yield _.waSignalStore.getADVSignedIdentity();
    if (e == null) {
      throw (0, S.default)("MD advSignedDeviceIdentity is null or undefined");
    }
    if (e.deviceSignature == null) {
      throw (0, S.default)("MD advSignedDeviceIdentity is missing deviceSignature");
    }
    return (0, E.encodeProtobuf)(d.ADVSignedDeviceIdentitySpec, e).readByteArray();
  })).apply(this, arguments);
}
function D(e, t, n) {
  const {
    accountSignatureKey: r,
    accountSignature: i,
    advDeviceIdentityDetails: a
  } = function (e, t) {
    const n = e.details;
    const r = e.accountSignatureKey || t;
    (0, v.default)(r != null, "accountSignatureKey should not be null");
    const i = e.accountSignature;
    (0, v.default)(i != null, "accountSignature should not be null");
    (0, v.default)(n != null, "advDeviceIdentityDetails should not be null");
    return {
      accountSignatureKey: r,
      accountSignature: i,
      advDeviceIdentityDetails: n
    };
  }(e, n);
  return function (e, t, n, r) {
    (0, v.default)(r != null, "accountSignatureKey should not be null");
    (0, v.default)(t != null, "accountSignature should not be null");
    const i = o.Binary.build(C, e, n).readByteArray();
    return (0, c.verifySignature)(new Uint8Array(r), i, new Uint8Array(t));
  }(a, i, t, r);
}
function w(e, t, n, r, i) {
  const a = o.Binary.build(P, e, t, i).readByteArray();
  return (0, c.verifySignature)(new Uint8Array(t), a, new Uint8Array(r));
}
function L(e, t) {
  const n = e.details;
  const r = e.deviceSignature;
  (0, v.default)(r != null, "deviceSignature should not be null");
  const i = e.accountSignatureKey || t;
  (0, v.default)(i != null, "accountSignatureKey should not be null");
  (0, v.default)(n != null, "advDeviceIdentityDetails should not be null");
  return {
    accountSignatureKey: i,
    deviceSignature: r,
    advDeviceIdentityDetails: n
  };
}
function k(e, t, n) {
  const {
    accountSignatureKey: r,
    deviceSignature: i,
    advDeviceIdentityDetails: a
  } = L(e, n);
  return w(a, t, d.ADVEncryptionType.E2EE, i, r);
}
function G() {
  return (G = (0, i.default)(function* () {
    yield (0, m.setADVSecretKey)(undefined);
  })).apply(this, arguments);
}