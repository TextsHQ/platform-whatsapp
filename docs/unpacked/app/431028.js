var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateIdentityKeyPair = function () {
  return c.apply(this, arguments);
};
exports.generatePreKeyPair = function () {
  return l.apply(this, arguments);
};
exports.generateSignedKeyPair = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./403206.js");
var o = require("./492917.js");
var s = r(require("./561612.js"));
function l() {
  return (l = (0, i.default)(function* (e) {
    if ((0, o.isCryptoLibraryEnabled)()) {
      const t = s.default.makePreKey(e);
      const {
        preKeyId: n,
        privKey: r,
        pubKey: i
      } = t;
      return {
        keyId: n,
        keyPair: {
          privKey: r,
          pubKey: i
        },
        isDirectDistribution: 0
      };
    }
    const t = yield self.libsignal.KeyHelper.generatePreKey(e);
    const {
      keyId: n,
      keyPair: r
    } = t;
    return {
      keyId: n,
      keyPair: (0, a.toCurveKeyPair)(r),
      isDirectDistribution: 0
    };
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e, t) {
    if ((0, o.isCryptoLibraryEnabled)()) {
      const n = s.default.makeSignedPreKey((0, a.toCurveKeyPair)(e), t);
      const {
        preKeyId: r,
        privKey: i,
        pubKey: o,
        signature: l
      } = n;
      return {
        keyId: r,
        keyPair: (0, a.toCurveKeyPair)({
          privKey: i,
          pubKey: o
        }),
        signature: l
      };
    }
    const n = yield self.libsignal.KeyHelper.generateSignedPreKey(e, t);
    const {
      keyId: r,
      keyPair: i,
      signature: l
    } = n;
    return {
      keyId: r,
      keyPair: (0, a.toCurveKeyPair)(i),
      signature: l
    };
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* () {
    if ((0, o.isCryptoLibraryEnabled)()) {
      return s.default.makeKeyPair();
    }
    const e = yield self.libsignal.KeyHelper.generateIdentityKeyPair();
    return (0, a.toCurveKeyPair)(e);
  })).apply(this, arguments);
}