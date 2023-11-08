Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoiseCertificateSpec = exports.NoiseCertificate$DetailsSpec = exports.CertChainSpec = exports.CertChain$NoiseCertificateSpec = exports.CertChain$NoiseCertificate$DetailsSpec = undefined;
var r = require("./751206.js");
const i = {};
exports.NoiseCertificateSpec = i;
const a = {};
exports.NoiseCertificate$DetailsSpec = a;
const o = {};
exports.CertChainSpec = o;
const s = {};
exports.CertChain$NoiseCertificateSpec = s;
const l = {};
exports.CertChain$NoiseCertificate$DetailsSpec = l;
i.internalSpec = {
  details: [1, r.TYPES.BYTES],
  signature: [2, r.TYPES.BYTES]
};
a.internalSpec = {
  serial: [1, r.TYPES.UINT32],
  issuer: [2, r.TYPES.STRING],
  expires: [3, r.TYPES.UINT64],
  subject: [4, r.TYPES.STRING],
  key: [5, r.TYPES.BYTES]
};
o.internalSpec = {
  leaf: [1, r.TYPES.MESSAGE, s],
  intermediate: [2, r.TYPES.MESSAGE, s]
};
s.internalSpec = {
  details: [1, r.TYPES.BYTES],
  signature: [2, r.TYPES.BYTES]
};
l.internalSpec = {
  serial: [1, r.TYPES.UINT32],
  issuerSerial: [2, r.TYPES.UINT32],
  key: [3, r.TYPES.BYTES],
  notBefore: [4, r.TYPES.UINT64],
  notAfter: [5, r.TYPES.UINT64]
};