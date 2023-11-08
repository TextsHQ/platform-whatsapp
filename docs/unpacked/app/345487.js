var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCryptoManagerSenderKeySession = function () {
  return d.apply(this, arguments);
};
exports.toSignalSenderKeySession = function (e) {
  const t = e.senderKeyStates.map(e => _(e));
  return (0, u.makeNewLibsignalSenderKeySession)(t);
};
exports.toSignalSenderKeyState = _;
var i = r(require("../vendor/348926.js"));
var a = require("./881841.js");
var o = require("./557063.js");
var s = require("./775228.js");
var l = require("./513611.js");
var u = require("./957041.js");
var c = r(require("../vendor/441143.js"));
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = e.sessions;
    const n = yield (0, o.promiseReduce)(t, function () {
      var e = (0, i.default)(function* (e, t) {
        const n = yield p(t);
        if (e == null) {
          return (0, s.makeNewSenderKeySession)(n);
        } else {
          return (0, s.updateSessionWithNewSenderKeyState)(e, n);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(), null);
    (0, c.default)(n != null, "toCryptoManagerSenderKeySession: empty session after conversion");
    return n;
  })).apply(this, arguments);
}
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = e.signatureKey.pubKey !== undefined ? new Uint8Array(e.signatureKey.pubKey) : new Uint8Array(e.signatureKey);
    const n = e.signatureKey.privKey ? (0, l.ensureSize)(new Uint8Array(e.signatureKey.privKey), 32) : undefined;
    const r = (0, s.makeSenderKeyChainKey)(e.chainKey.counter, (0, l.ensureSize)(new Uint8Array(e.chainKey.key), 32));
    const i = e.keyId;
    const a = [];
    for (let t = 0; t < e.messageKeys.length; t++) {
      if (e.messageKeys[t]) {
        const n = e.messageKeys[t];
        const r = yield (0, l.hkdf)(new Uint8Array(n), null, "WhisperGroup", 50).then(e => (0, s.makeSenderKeyMsgKey)(t, e));
        a.push(r);
      }
    }
    return (0, s.makeSenderKeyState)(t, n, r, i, a);
  })).apply(this, arguments);
}
function _(e) {
  const t = (0, u.makeLibsignalSenderKeyChainKey)(e.senderKeyChainKey.nextMsgIndex, (0, a.uint8ArrayToBuffer)(e.senderKeyChainKey.chainKey));
  const n = e.senderKeyId;
  const r = e.senderSigningKeyPrivate;
  const i = r != null ? (0, u.makeLibsignalSenderKeySignatureKey)((0, a.uint8ArrayToBuffer)(e.senderSigningKeyPublic), (0, a.uint8ArrayToBuffer)(r)) : (0, u.makeLibsignalSenderKeySignatureKey)((0, a.uint8ArrayToBuffer)(e.senderSigningKeyPublic));
  return (0, u.makeLibsignalSenderKeyState)(i, t, n, []);
}