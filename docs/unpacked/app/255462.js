var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpadPkcs7 = function (e) {
  if (e.length === 0) {
    throw (0, i.default)("unpadPkcs7 given empty bytes");
  }
  const t = e[e.length - 1];
  if (t > e.length) {
    throw (0, i.default)(`unpadPkcs7 given ${e.length} bytes, but pad is ${t}`);
  }
  return new Uint8Array(e.buffer, e.byteOffset, e.length - t);
};
exports.writePad = a;
exports.writeRandomPad = function (e) {
  const t = new Uint8Array(1);
  do {
    self.crypto.getRandomValues(t);
  } while (t[0] === 0);
  a(e, t[0]);
};
exports.writeRandomPadMax16 = function (e) {
  const t = new Uint8Array(1);
  self.crypto.getRandomValues(t);
  a(e, 1 + (t[0] & 15));
};
var i = r(require("./415227.js"));
function a(e, t) {
  for (let n = 0; n < t; n++) {
    e.writeUint8(t);
  }
}