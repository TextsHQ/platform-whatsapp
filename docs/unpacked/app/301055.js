Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHA256_BYTE_LENGTH = exports.DEFAULT_SALT = undefined;
exports.encodeKeySha256 = function (e) {
  return l(a, e);
};
exports.extractSha256 = function (e, t) {
  return l(a, e != null ? e : i).then(e => u(e, t));
};
exports.hmacSha1 = function (e, t, n) {
  return l(s, e).then(e => u(e, t, n));
};
exports.hmacSha256 = function (e, t, n) {
  return l(a, e).then(e => u(e, t, n));
};
exports.hmacSha512 = function (e, t, n) {
  return l(o, e).then(e => u(e, t, n));
};
exports.sign = u;
var r = require("./691015.js");
exports.SHA256_BYTE_LENGTH = 32;
const i = new Uint8Array(32);
exports.DEFAULT_SALT = i;
const a = {
  name: "HMAC",
  hash: "SHA-256"
};
const o = {
  name: "HMAC",
  hash: "SHA-512"
};
const s = {
  name: "HMAC",
  hash: "SHA-1"
};
function l(e, t) {
  const n = (0, r.castTypedArrays)(Uint8Array, t);
  return self.crypto.subtle.importKey("raw", n, e, false, ["sign"]).then(t => ({
    key: t,
    algo: e
  }));
}
function u(e, t, n) {
  let {
    key: r,
    algo: i
  } = e;
  return self.crypto.subtle.sign(i, r, t).then(e => n != null && n !== 0 ? e.slice(0, n) : e);
}