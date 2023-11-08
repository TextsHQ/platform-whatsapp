Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sha256 = i;
exports.sha256Base64 = a;
exports.sha256Str = function (e) {
  return a(function (e) {
    const t = new ArrayBuffer(e.length);
    const n = new Uint8Array(t);
    for (let t = 0, r = e.length; t < r; t++) {
      n[t] = e.charCodeAt(t);
    }
    return t;
  }(e));
};
var r = require("./417405.js");
function i(e) {
  return Promise.resolve(self.crypto.subtle.digest({
    name: "SHA-256"
  }, e));
}
function a(e) {
  return Promise.resolve(i(e).then(r.encodeB64));
}