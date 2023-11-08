var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expand = l;
exports.extractAndExpand = function (e, t, n) {
  return (0, a.extractSha256)(null, e).then(e => l(new Uint8Array(e), t, n));
};
exports.extractWithSaltAndExpand = function (e, t, n, r) {
  return (0, a.extractSha256)(t, e).then(e => l(new Uint8Array(e), n, r));
};
var i = require("./904704.js");
var a = require("./301055.js");
var o = r(require("./415227.js"));
const s = a.SHA256_BYTE_LENGTH * 255;
function l(e, t, n) {
  if (n < 0 || n > s) {
    return Promise.reject((0, o.default)(`HKDF::expand given bad length ${n}`));
  }
  let r;
  const l = Math.ceil(n / a.SHA256_BYTE_LENGTH);
  const u = i.Binary.build(t).readByteArray();
  const c = new i.Binary();
  let d = (0, a.encodeKeySha256)(e).then(e => {
    r = e;
    return new Uint8Array(0);
  });
  for (let e = 1; e <= l; e++) {
    d = d.then(t => (0, a.sign)(r, i.Binary.build(t, u, e).readByteArray())).then(e => {
      const t = new Uint8Array(e);
      c.writeByteArray(t);
      return t;
    });
  }
  return d.then(() => c.readBuffer(n));
}