var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gcmDecrypt = function () {
  return s.apply(this, arguments);
};
exports.gcmEncrypt = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./904704.js");
function o() {
  return (o = (0, i.default)(function* (e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 16;
    const a = {
      name: "AES-GCM",
      iv: u(t),
      tagLength: i * 8
    };
    if (r != null) {
      a.additionalData = u(r);
    }
    return self.crypto.subtle.encrypt(a, yield l(e), n);
  })).apply(this, arguments);
}
function s() {
  return (s = (0, i.default)(function* (e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 16;
    const a = {
      name: "AES-GCM",
      iv: u(t),
      tagLength: i * 8
    };
    if (r != null) {
      a.additionalData = u(r);
    }
    return self.crypto.subtle.decrypt(a, yield l(e), n);
  })).apply(this, arguments);
}
function l(e) {
  return self.crypto.subtle.importKey("raw", e, "AES-GCM", false, ["encrypt", "decrypt"]);
}
function u(e) {
  if (e instanceof Uint8Array) {
    return e;
  }
  if (typeof e == "string") {
    const t = new a.Binary();
    t.writeString(e);
    return t.readByteArray();
  }
  return new Uint8Array(e);
}