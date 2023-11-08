Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hash", {
  enumerable: true,
  get: function () {
    return r.hash;
  }
});
exports.lowlevel = exports.keypairFromSecretKey = exports.keyPair = undefined;
Object.defineProperty(exports, "scalarMult", {
  enumerable: true,
  get: function () {
    return r.scalarMult;
  }
});
exports.signDetachedVerify = undefined;
Object.defineProperty(exports, "verify", {
  enumerable: true,
  get: function () {
    return r.verify;
  }
});
var r = require("../vendor/214462.js");
const i = {
  scalarbase: r.lowlevel.scalarbase,
  crypto_hash: r.lowlevel.crypto_hash,
  modL: r.lowlevel.modL,
  pack25519: r.lowlevel.pack25519,
  S: r.lowlevel.S,
  M: r.lowlevel.M,
  A: r.lowlevel.A,
  Z: r.lowlevel.Z,
  D: r.lowlevel.D,
  unpack25519: r.lowlevel.unpack25519,
  pow2523: r.lowlevel.pow2523,
  crypto_verify_32: r.lowlevel.crypto_verify_32,
  set25519: r.lowlevel.set25519,
  add: r.lowlevel.add,
  scalarmult: r.lowlevel.scalarmult
};
exports.lowlevel = i;
const a = r.box.keyPair.fromSecretKey;
exports.keypairFromSecretKey = a;
const o = r.box.keyPair;
exports.keyPair = o;
const s = r.sign.detached.verify;
exports.signDetachedVerify = s;