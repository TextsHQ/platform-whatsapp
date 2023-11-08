Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignalMessageSpec = exports.SenderKeyMessageSpec = exports.SenderKeyDistributionMessageSpec = exports.PreKeySignalMessageSpec = exports.KeyExchangeMessageSpec = exports.DeviceConsistencyCodeMessageSpec = undefined;
var r = require("./751206.js");
const i = {};
exports.SignalMessageSpec = i;
const a = {};
exports.PreKeySignalMessageSpec = a;
const o = {};
exports.KeyExchangeMessageSpec = o;
const s = {};
exports.SenderKeyMessageSpec = s;
const l = {};
exports.SenderKeyDistributionMessageSpec = l;
const u = {};
exports.DeviceConsistencyCodeMessageSpec = u;
i.internalSpec = {
  ratchetKey: [1, r.TYPES.BYTES],
  counter: [2, r.TYPES.UINT32],
  previousCounter: [3, r.TYPES.UINT32],
  ciphertext: [4, r.TYPES.BYTES]
};
a.internalSpec = {
  registrationId: [5, r.TYPES.UINT32],
  preKeyId: [1, r.TYPES.UINT32],
  signedPreKeyId: [6, r.TYPES.UINT32],
  baseKey: [2, r.TYPES.BYTES],
  identityKey: [3, r.TYPES.BYTES],
  message: [4, r.TYPES.BYTES]
};
o.internalSpec = {
  id: [1, r.TYPES.UINT32],
  baseKey: [2, r.TYPES.BYTES],
  ratchetKey: [3, r.TYPES.BYTES],
  identityKey: [4, r.TYPES.BYTES],
  baseKeySignature: [5, r.TYPES.BYTES]
};
s.internalSpec = {
  id: [1, r.TYPES.UINT32],
  iteration: [2, r.TYPES.UINT32],
  ciphertext: [3, r.TYPES.BYTES]
};
l.internalSpec = {
  id: [1, r.TYPES.UINT32],
  iteration: [2, r.TYPES.UINT32],
  chainKey: [3, r.TYPES.BYTES],
  signingKey: [4, r.TYPES.BYTES]
};
u.internalSpec = {
  generation: [1, r.TYPES.UINT32],
  signature: [2, r.TYPES.BYTES]
};