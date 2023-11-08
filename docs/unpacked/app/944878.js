var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CypherType = undefined;
exports.cypherStringToString = function (e) {
  return e;
};
exports.decryptDataWithSymmetricKey = c;
exports.decryptDataWithSymmetricKeyToString = function () {
  return p.apply(this, arguments);
};
exports.genCypher = function () {
  return f.apply(this, arguments);
};
exports.stringToCypherString = function (e) {
  return e;
};
var i = r(require("../vendor/348926.js"));
var a = require("./459617.js");
var o = require("./78088.js");
const s = require("../vendor/76672.js").Mirrored(["PhoneNumberAndPostcode", "Postcode"]);
function l() {
  return u.apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e, t, n) {
    const {
      subtle: r
    } = yield (0, o.getEngine)();
    return r.encrypt({
      name: "AES-GCM",
      iv: new Uint8Array((0, o.base64ToArrayBuffer)(t)),
      tagLength: 128
    }, e, (0, o.stringToArrayBuffer)(n));
  })).apply(this, arguments);
}
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    const {
      subtle: r
    } = yield (0, o.getEngine)();
    const i = yield r.importKey("raw", e, {
      name: "AES-GCM"
    }, false, ["decrypt"]);
    return r.decrypt({
      name: "AES-GCM",
      iv: new Uint8Array((0, o.base64ToArrayBuffer)(n)),
      tagLength: 128
    }, i, (0, o.base64ToArrayBuffer)(t));
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t, n) {
    return (0, a.arrayBufferToString)(yield c(e, t, n));
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = (0, o.arrayBufferToBase64)(yield (0, o.getRandomValues)(new Uint8Array(16)));
    try {
      const {
        subtle: r
      } = yield (0, o.getEngine)();
      const i = yield r.generateKey({
        name: "AES-GCM",
        length: 256
      }, true, ["encrypt"]);
      const a = (0, o.arrayBufferToBase64)(yield l(i, n, JSON.stringify(t)));
      const s = yield r.exportKey("raw", i);
      return {
        cypher: `AesKey=${yield (0, o.encryptWithPublicKey)(e, s)};IV=${n};Data=${a}`,
        exportedAesKey: s,
        iv: n
      };
    } catch (e) {
      __LOG__(3)`[direct-connection] cypher creation failed with ${e.toString()}`;
      return null;
    }
  })).apply(this, arguments);
}
exports.CypherType = s;