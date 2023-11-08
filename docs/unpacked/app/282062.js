var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshNoiseCredentials = function () {
  const e = (0, o.keyPair)();
  const t = new Uint8Array(24);
  self.crypto.getRandomValues(t);
  return Promise.resolve(d.waNoiseInfo.set({
    recoveryToken: t.buffer,
    staticKeyPair: e
  }));
};
exports.refreshSignalCredentials = function () {
  return _.apply(this, arguments);
};
exports.setRoutingInfo = function (e, t) {
  const n = {
    domain: e,
    edgeRouting: t ? (0, a.decodeB64)(t) : null
  };
  __LOG__(2)`set routingInfo:`;
  return (0, p.setRoutingInfo)(n);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./403206.js");
var s = require("./492917.js");
var l = r(require("./561612.js"));
var u = require("./431028.js");
var c = require("./326314.js");
var d = require("./65410.js");
var p = require("./673168.js");
function f() {
  if ((0, s.isCryptoLibraryEnabled)()) {
    return l.default.makeRegistrationId();
  }
  return self.libsignal.KeyHelper.generateRegistrationId();
}
function _() {
  return (_ = (0, i.default)(function* () {
    const e = f();
    yield c.waSignalStore.clearCredential();
    const t = yield (0, u.generateIdentityKeyPair)();
    try {
      yield Promise.all([c.waSignalStore.setRegistrationInfo({
        registrationId: e,
        identityKeyPair: t
      }), c.waSignalStore.rotateSignedPreKey((0, o.toSignalCurveKeyPair)(t), u.generateSignedKeyPair)]);
    } catch (e) {
      __LOG__(4, undefined, new Error())`failed to refreshSignalCredentials: ${e}`;
      throw e;
    }
  })).apply(this, arguments);
}