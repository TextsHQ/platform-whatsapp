var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptCipherText = function (e, t, n) {
  return (0, a.aesCbcDecrypt)(t, e, n);
};
exports.generateAssociatedData = function (e, t) {
  const n = (0, f.fromSyncKeyId)(t);
  let r;
  switch (e) {
    case u.SyncdMutation$SyncdOperation.SET:
      r = c.OPERATION_SET_HEX;
      break;
    case u.SyncdMutation$SyncdOperation.REMOVE:
      r = c.OPERATION_REMOVE_HEX;
  }
  if (r) {
    const e = new Uint8Array([parseInt(r, 16)]).buffer;
    const t = new Uint8Array(e.byteLength + n.byteLength);
    t.set(new Uint8Array(e));
    t.set(new Uint8Array(n), e.byteLength);
    return t.buffer;
  }
  throw (0, s.default)("invalid mutation operation value");
};
exports.generateCipherText = function (e, t, n) {
  return (0, a.aesCbcEncrypt)(t, n, e);
};
exports.generateEncryptionKeys = undefined;
exports.generateIndexMac = function (e, t) {
  return (0, o.hmacSha256)(new Uint8Array(e), new Uint8Array(t));
};
exports.generateMac = function (e, t, n) {
  const r = new Uint8Array(c.OCTET_LENGTH);
  r.set([e.byteLength], r.byteLength - 1);
  const i = (0, p.combine)([e, t, r.buffer]);
  return (0, o.hmacSha512)(n, i, c.MAC_LENGTH);
};
exports.generatePadding = function (e, t) {
  const n = Math.max(0, c.MAX_OF_MIN_DATA_LENGTH - e - t);
  const r = new Uint8Array(n);
  self.crypto.getRandomValues(r);
  return r.buffer;
};
exports.generatePatchMac = function (e, t, n, r, i) {
  return (0, o.hmacSha256)(e, (0, p.combine)([t, ...n, r, i]));
};
exports.generateSnapshotMac = function (e, t, n, r) {
  return (0, o.hmacSha256)(e, (0, p.combine)([t, n, r]));
};
exports.valueMacFromIndexAndValueCipherText = function (e) {
  const t = e.byteLength;
  return new Uint8Array(e).slice(t - c.MAC_LENGTH).buffer;
};
var i = require("./417405.js");
var a = require("./285867.js");
var o = require("./301055.js");
var s = r(require("./415227.js"));
var l = require("./761111.js");
var u = require("./679905.js");
var c = require("./47371.js");
var d = require("./121010.js");
var p = require("./405057.js");
var f = require("./347197.js");
const _ = (0, l.memoizeWithArgs)(d.generateEncryptionKeysUnmemoized, e => (0, i.encodeB64)((0, f.fromSyncKeyData)(e)));
exports.generateEncryptionKeys = _;