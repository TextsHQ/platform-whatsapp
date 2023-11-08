Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_CA = undefined;
exports.parseCertificateWA6 = p;
exports.verifyChainCertificateWA6 = function (e, t) {
  __LOG__(2)`verifyChainCertificateWA6: extract leaf and intermediate certificate`;
  const n = (0, c.decodeProtobuf)(r.CertChainSpec, e);
  const a = n.intermediate;
  const l = n.leaf;
  if (a == null || l == null) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6: missing leaf and/or intermediate certificate`;
    return (0, o.makeError)("missing-certificate");
  }
  __LOG__(2)`verifying intermediate certificate`;
  const u = p(a);
  if (!u.success) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6: invalid intermediate certificate`;
    return (0, o.makeError)("invalid-certificate");
  }
  if (u.value.issuerSerial !== d.SERIAL) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6 intermediate certificate was not issued by RootCA`;
    return (0, o.makeError)("invalid-certificate");
  }
  if (!f(u.value, d.PUBLIC_KEY)) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6: intermediate certificate is poorly signed`;
    return (0, o.makeError)("invalid-certificate");
  }
  __LOG__(2)`verifying leaf certificate`;
  const _ = p(l);
  if (!_.success) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6: invalid leaf certificate`;
    return (0, o.makeError)("invalid-certificate");
  }
  if (_.value.issuerSerial !== u.value.serial) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6 leaf certificate was not issued by RootCA`;
    return (0, o.makeError)("invalid-certificate");
  }
  const g = (0, s.serializeIdentity)(new Uint8Array(u.value.key));
  if (!f(_.value, g)) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6: leaf certificate is poorly signed`;
    return (0, o.makeError)("invalid-certificate");
  }
  if (!(0, i.arrayBuffersEqual)(_.value.key, t)) {
    __LOG__(4, undefined, new Error())`verifyChainCertificateWA6 leafCert.key does not match handshake server.hello.static`;
    return (0, o.makeError)("invalid-certificate");
  }
  return (0, o.makeResult)({
    leaf: _.value,
    intermediate: u.value
  });
};
var r = require("./623641.js");
var i = require("./31549.js");
var a = require("./390934.js");
var o = require("./135781.js");
var s = require("./685419.js");
var l = require("./513611.js");
var u = require("./67106.js");
var c = require("./394629.js");
const d = {
  SERIAL: 0,
  ISSUER: "WhatsAppLongTerm1",
  PUBLIC_KEY: (0, s.serializeIdentity)(new Uint8Array((0, a.parseHex)("142375574d0a587166aae71ebe516437c4a28b73e3695c6ce1f7f9545da8ee6b")))
};
function p(e) {
  const t = e.details;
  const n = e.signature;
  if (!t) {
    __LOG__(4, undefined, new Error())`parseCertificateWA6 certificate is missing "details"`;
    return (0, o.makeError)("invalid-certificate");
  }
  if (!n) {
    __LOG__(4, undefined, new Error())`parseCertificateWA6 certificate is missing "signature"`;
    return (0, o.makeError)("invalid-certificate");
  }
  const i = (0, c.decodeProtobuf)(r.CertChain$NoiseCertificate$DetailsSpec, t);
  const {
    issuerSerial: a,
    serial: s,
    key: u,
    notAfter: d,
    notBefore: p
  } = i;
  if (a == null) {
    __LOG__(4, undefined, new Error())`parseCertificateWA6 certificate is missing "issuer_serial"`;
    return (0, o.makeError)("invalid-certificate");
  }
  if (s == null) {
    __LOG__(4, undefined, new Error())`parseCertificateWA6 certificate is missing "serial"`;
    return (0, o.makeError)("invalid-certificate");
  }
  if (u == null) {
    __LOG__(4, undefined, new Error())`parseCertificateWA6 certificate is missing "key"`;
    return (0, o.makeError)("invalid-certificate");
  }
  const f = (0, l.ensureSize)(new Uint8Array(n), 64);
  return (0, o.makeResult)({
    serial: s,
    issuerSerial: a,
    key: u,
    notBefore: p,
    notAfter: d,
    details: t,
    signature: f
  });
}
function f(e, t) {
  return (0, u.verifyMsgSignalVariant)(t, new Uint8Array(e.details), e.signature);
}
exports.ROOT_CA = d;