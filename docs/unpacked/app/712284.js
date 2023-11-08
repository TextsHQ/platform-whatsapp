Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsAesCbc = function () {
  return o().then(e => e.generateKey(a, false, ["encrypt", "decrypt"]).then(t => Promise.resolve(self.crypto).then(e => ({
    name: "AES-CBC",
    iv: e.getRandomValues(new Uint8Array(16))
  })).then(i => e.encrypt(i, t, r).then(n => e.decrypt(i, t, n)).catch(e => {
    __LOG__(2)`CryptoSupport:AES-CBC encryption failed: ${e}`;
    return false;
  }).then(e => {
    const t = new Uint8Array(e);
    r = t;
    if (Array.prototype.slice.call(r).map(e => String.fromCharCode(e)).join("") === n) {
      __LOG__(2)`CryptoSupport:AES-CBC encryption/decryption is correct`;
      return true;
    } else {
      __LOG__(2)`CryptoSupport:AES-CBC encryption/decryption is incorrect`;
      return false;
    }
    var r;
  }).catch(e => {
    __LOG__(2)`CryptoSupport:AES-CBC decryption failed: ${e}`;
    return false;
  }))).catch(e => {
    __LOG__(2)`CryptoSupport:AES-CBC key generation failed: ${e}`;
    return false;
  })).catch(e => {
    __LOG__(2)`CryptoSupport:AES-CBC: ${e}`;
    return false;
  });
};
exports.supportsHmacSha256 = function () {
  return o().then(e => e.generateKey(i, false, ["sign", "verify"]).then(t => e.sign(i, t, r).then(n => e.verify(i, t, n, r.buffer)).catch(e => {
    __LOG__(2)`CryptoSupport:HMAC-SHA256 signing failed: ${e}`;
    return false;
  }).then(e => e ? (__LOG__(2)`CryptoSupport:HMAC-SHA256 is verified`, true) : (__LOG__(2)`CryptoSupport:HMAC-SHA256 is not verified`, false)).catch(e => {
    __LOG__(2)`CryptoSupport:HMAC-SHA256 verification failed: ${e}`;
    return false;
  })).catch(e => {
    __LOG__(2)`CryptoSupport:HMAC-SHA256 key generation failed: ${e}`;
    return false;
  })).catch(e => {
    __LOG__(2)`CryptoSupport:HMAC-SHA256: ${e}`;
    return false;
  });
};
const n = "whatsapp is da best";
const r = new Uint8Array(n.split("").map(e => e.charCodeAt(0)));
const i = {
  name: "HMAC",
  hash: "SHA-256"
};
const a = {
  name: "AES-CBC",
  length: 256
};
function o() {
  return Promise.resolve().then(() => self.crypto.subtle || self.crypto.webkitSubtle);
}