var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractCertificateDetailsParams = function (e) {
  return {
    serial: e.serial,
    name: e.verifiedName,
    isApi: e.issuer === "ent:wa",
    isSmb: e.issuer === "smb:wa"
  };
};
exports.getParsedProtoObjects = function (e) {
  if (!e) {
    return null;
  }
  const t = (0, a.decodeProtobuf)(i.VerifiedNameCertificateSpec, e);
  if (!t.details) {
    throw (0, o.default)("verifyCertificate cert missing details");
  }
  const n = (0, a.decodeProtobuf)(i.VerifiedNameCertificate$DetailsSpec, t.details);
  return {
    cert: t,
    details: n
  };
};
var i = require("./759089.js");
var a = require("./394629.js");
var o = r(require("./556869.js"));