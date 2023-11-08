Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADVSignedKeyIndexListSpec = exports.ADVSignedDeviceIdentitySpec = exports.ADVSignedDeviceIdentityHMACSpec = exports.ADVKeyIndexListSpec = exports.ADVEncryptionType = exports.ADVDeviceIdentitySpec = undefined;
var r = require("./751206.js");
const i = require("../vendor/76672.js")({
  E2EE: 0,
  HOSTED: 1
});
exports.ADVEncryptionType = i;
const a = {};
exports.ADVKeyIndexListSpec = a;
const o = {};
exports.ADVSignedKeyIndexListSpec = o;
const s = {};
exports.ADVDeviceIdentitySpec = s;
const l = {};
exports.ADVSignedDeviceIdentitySpec = l;
const u = {};
exports.ADVSignedDeviceIdentityHMACSpec = u;
a.internalDefaults = {
  accountType: i.E2EE
};
a.internalSpec = {
  rawId: [1, r.TYPES.UINT32],
  timestamp: [2, r.TYPES.UINT64],
  currentIndex: [3, r.TYPES.UINT32],
  validIndexes: [4, r.FLAGS.REPEATED | r.FLAGS.PACKED | r.TYPES.UINT32],
  accountType: [5, r.TYPES.ENUM, i]
};
o.internalSpec = {
  details: [1, r.TYPES.BYTES],
  accountSignature: [2, r.TYPES.BYTES],
  accountSignatureKey: [3, r.TYPES.BYTES]
};
s.internalDefaults = {
  accountType: i.E2EE,
  deviceType: i.E2EE
};
s.internalSpec = {
  rawId: [1, r.TYPES.UINT32],
  timestamp: [2, r.TYPES.UINT64],
  keyIndex: [3, r.TYPES.UINT32],
  accountType: [4, r.TYPES.ENUM, i],
  deviceType: [5, r.TYPES.ENUM, i]
};
l.internalSpec = {
  details: [1, r.TYPES.BYTES],
  accountSignatureKey: [2, r.TYPES.BYTES],
  accountSignature: [3, r.TYPES.BYTES],
  deviceSignature: [4, r.TYPES.BYTES]
};
u.internalDefaults = {
  accountType: i.E2EE
};
u.internalSpec = {
  details: [1, r.TYPES.BYTES],
  hmac: [2, r.TYPES.BYTES],
  accountType: [3, r.TYPES.ENUM, i]
};