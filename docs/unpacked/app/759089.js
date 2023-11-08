Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifiedNameCertificateSpec = exports.VerifiedNameCertificate$DetailsSpec = exports.LocalizedNameSpec = exports.BizIdentityInfoSpec = exports.BizIdentityInfo$VerifiedLevelValue = exports.BizIdentityInfo$HostStorageType = exports.BizIdentityInfo$ActualActorsType = exports.BizAccountPayloadSpec = exports.BizAccountLinkInfoSpec = exports.BizAccountLinkInfo$HostStorageType = exports.BizAccountLinkInfo$AccountType = undefined;
var r = require("./751206.js");
const i = require("../vendor/76672.js")({
  ENTERPRISE: 0
});
exports.BizAccountLinkInfo$AccountType = i;
const a = require("../vendor/76672.js")({
  ON_PREMISE: 0,
  FACEBOOK: 1
});
exports.BizAccountLinkInfo$HostStorageType = a;
const o = require("../vendor/76672.js")({
  SELF: 0,
  BSP: 1
});
exports.BizIdentityInfo$ActualActorsType = o;
const s = require("../vendor/76672.js")({
  ON_PREMISE: 0,
  FACEBOOK: 1
});
exports.BizIdentityInfo$HostStorageType = s;
const l = require("../vendor/76672.js")({
  UNKNOWN: 0,
  LOW: 1,
  HIGH: 2
});
exports.BizIdentityInfo$VerifiedLevelValue = l;
const u = {};
exports.LocalizedNameSpec = u;
const c = {};
exports.VerifiedNameCertificateSpec = c;
const d = {};
exports.VerifiedNameCertificate$DetailsSpec = d;
const p = {};
exports.BizAccountPayloadSpec = p;
const f = {};
exports.BizAccountLinkInfoSpec = f;
const _ = {};
exports.BizIdentityInfoSpec = _;
u.internalSpec = {
  lg: [1, r.TYPES.STRING],
  lc: [2, r.TYPES.STRING],
  verifiedName: [3, r.TYPES.STRING]
};
c.internalSpec = {
  details: [1, r.TYPES.BYTES],
  signature: [2, r.TYPES.BYTES],
  serverSignature: [3, r.TYPES.BYTES]
};
d.internalSpec = {
  serial: [1, r.TYPES.UINT64],
  issuer: [2, r.TYPES.STRING],
  verifiedName: [4, r.TYPES.STRING],
  localizedNames: [8, r.FLAGS.REPEATED | r.TYPES.MESSAGE, u],
  issueTime: [10, r.TYPES.UINT64]
};
p.internalSpec = {
  vnameCert: [1, r.TYPES.MESSAGE, c],
  bizAcctLinkInfo: [2, r.TYPES.BYTES]
};
f.internalSpec = {
  whatsappBizAcctFbid: [1, r.TYPES.UINT64],
  whatsappAcctNumber: [2, r.TYPES.STRING],
  issueTime: [3, r.TYPES.UINT64],
  hostStorage: [4, r.TYPES.ENUM, a],
  accountType: [5, r.TYPES.ENUM, i]
};
_.internalSpec = {
  vlevel: [1, r.TYPES.ENUM, l],
  vnameCert: [2, r.TYPES.MESSAGE, c],
  signed: [3, r.TYPES.BOOL],
  revoked: [4, r.TYPES.BOOL],
  hostStorage: [5, r.TYPES.ENUM, s],
  actualActors: [6, r.TYPES.ENUM, o],
  privacyModeTs: [7, r.TYPES.UINT64],
  featureControls: [8, r.TYPES.UINT64]
};