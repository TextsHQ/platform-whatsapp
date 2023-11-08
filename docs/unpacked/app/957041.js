Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLibsignalSenderKeyChainKey = function (e, t) {
  return {
    counter: e,
    key: t
  };
};
exports.makeLibsignalSenderKeyMsgKey = function (e) {
  return e;
};
exports.makeLibsignalSenderKeySignatureKey = function (e, t) {
  if (t != null) {
    return {
      pubKey: e,
      privKey: t
    };
  }
  return e;
};
exports.makeLibsignalSenderKeyState = function (e, t, n, r) {
  return {
    signatureKey: e,
    chainKey: t,
    keyId: n,
    messageKeys: r == null ? [] : r
  };
};
exports.makeNewLibsignalSenderKeySession = function (e) {
  return {
    sessions: e,
    version: "v1"
  };
};