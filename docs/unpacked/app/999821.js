var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferEqual = function (e, t) {
  if (!e || !t) {
    return false;
  }
  if (e.byteLength !== t.byteLength) {
    return false;
  }
  const n = new DataView(e);
  const r = new DataView(t);
  for (let e = 0; e < n.byteLength; e++) {
    if (n.getUint8(e) !== r.getUint8(e)) {
      return false;
    }
  }
  return true;
};
exports.bufferToStr = function (e) {
  return new self.dcodeIO.ByteBuffer.wrap(e).toString("binary");
};
exports.createSignalAddress = o;
exports.createSignalLikeSenderKeyName = function (e, t) {
  return e + "::" + o(t);
};
exports.decryptRegistrationMaterial = function (e) {
  return self.crypto.subtle.decrypt(s, e.encKey, e.value);
};
exports.encryptRegistrationMaterial = function (e) {
  return self.crypto.subtle.generateKey({
    name: s.name,
    length: s.length
  }, false, ["encrypt", "decrypt"]).then(t => self.crypto.subtle.encrypt(s, t, e).then(e => ({
    encKey: t,
    value: e
  })));
};
exports.getSignalLikeAddressName = function (e) {
  if (typeof e != "string" || !e.match(/.*\.\d+/)) {
    throw (0, a.default)("Invalid SignalLikeProtocolAddress string");
  }
  return e.split(".")[0];
};
exports.strToBuffer = function (e) {
  return new self.dcodeIO.ByteBuffer.wrap(e, "binary").toArrayBuffer();
};
exports.writeRandomPadMax16 = function (e) {
  const t = new Uint8Array(1);
  self.crypto.getRandomValues(t);
  (function (e, t) {
    for (let n = 0; n < t; n++) {
      e.writeUint8(t);
    }
  })(e, 1 + (t[0] & 15));
};
require("./451658.js");
var i = require("./492917.js");
var a = r(require("./556869.js"));
function o(e) {
  if (!(e.isUser() || e.isServer() || e.isPSA())) {
    throw (0, a.default)(`Jid ${e.toString({
      legacy: true
    })} is not fully qualified, jid.server should be "s.whatsapp.net"`);
  }
  if ((0, i.isCryptoLibraryEnabled)()) {
    return function (e) {
      return `${e.getSignalAddress()}.0`;
    }(e);
  } else {
    return new self.libsignal.SignalProtocolAddress(e.getSignalAddress(), 0);
  }
}
const s = {
  name: "AES-CTR",
  length: 128,
  counter: new Uint8Array(16)
};