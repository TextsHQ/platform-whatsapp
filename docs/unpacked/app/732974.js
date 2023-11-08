var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractIdentityKey = function (e) {
  if ((0, o.isCryptoLibraryEnabled)()) {
    const t = s.default.extractIdentityKey(e);
    if (t.success === true) {
      return (0, a.toCurveKeyPubKey)(t.value);
    } else {
      return null;
    }
  }
  const t = self.dcodeIO.ByteBuffer.wrap(e);
  t.readUint8();
  try {
    const e = self.libsignal.Protobuf.PreKeyWhisperMessage.decode(t);
    return (0, a.toCurveKeyPubKey)(e.identityKey.toArrayBuffer());
  } catch (e) {
    __LOG__(3)`extractIdentityKey: parse proto failed`;
    return null;
  }
};
exports.xmppPreKey = function (e) {
  return (0, i.wap)("key", null, (0, i.wap)("id", null, (0, i.BIG_ENDIAN_CONTENT)(e.keyId, 3)), (0, i.wap)("value", null, e.keyPair.pubKey));
};
exports.xmppSignedPreKey = function (e) {
  return (0, i.wap)("skey", null, (0, i.wap)("id", null, (0, i.BIG_ENDIAN_CONTENT)(e.keyId, 3)), (0, i.wap)("value", null, e.keyPair.pubKey), (0, i.wap)("signature", null, e.signature));
};
var i = require("./716358.js");
var a = require("./403206.js");
var o = require("./492917.js");
var s = r(require("./561612.js"));