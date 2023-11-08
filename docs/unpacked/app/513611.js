var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HMAC_SHA256 = exports.AES_CBC = undefined;
exports.areSessionHashesEqual = function (e, t) {
  return (0, a.arrayBuffersEqual)(e, t);
};
exports.castRegistrationId = function (e) {
  return f(e);
};
exports.castRegistrationIdFromBytes = function (e) {
  return (0, s.convertBytesToUint)(e, 4);
};
exports.castSenderKeyId = function (e) {
  return f(e);
};
exports.castToByteEncoded = function (e) {
  return e;
};
exports.castToSessionHash = function (e) {
  return e;
};
exports.decodeSignalProto = function (e, t, n) {
  return n((0, l.decodeProtobuf)(e, t));
};
exports.encodeSignalProto = function (e, t) {
  return (0, u.encodeProtobuf)(e, t).readByteArray();
};
exports.ensureIntInRange = f;
exports.ensureSize = p;
exports.hkdf = function (e, t, n, r) {
  return (0, i.extractWithSaltAndExpand)(e, t, n, r).then(e => new Uint8Array(e));
};
exports.makeBytes = function (e) {
  return new Uint8Array(e);
};
exports.makeCryptoKey = function (e, t) {
  let n;
  let r;
  if (t === "hmac-sha256") {
    n = d;
    r = ["sign"];
  } else {
    n = c;
    r = ["encrypt", "decrypt"];
  }
  return self.crypto.subtle.importKey("raw", e, n, false, r);
};
exports.makeRegistrationId = function (e) {
  const t = e === "extendedRange" ? 2147483646 : 16380;
  return (0, a.randomNumberLessThan)(t) + 1;
};
exports.makeSenderKeyId = function () {
  return (0, a.randomNumberLessThan)(-1 >>> 1) + 1;
};
exports.readBytes = function (e, t) {
  return e.readByteArray(t);
};
exports.sliceBytes = function (e, t, n) {
  if (e.length - t < n) {
    throw (0, o.default)(`Can not split off ${n} bytes from index ${t} of ${e.length} bytes`);
  }
  return e.slice(t, t + n);
};
exports.toBuffer = function (e) {
  const t = e.buffer;
  const n = e.byteOffset;
  const r = e.length;
  if (n === 0 && r === t.byteLength) {
    return t;
  } else {
    return t.slice(n, n + r);
  }
};
exports.toBytes = function (e, t) {
  return p(new Uint8Array(e), t);
};
var i = require("./562075.js");
var a = require("./31549.js");
var o = r(require("./415227.js"));
var s = require("./918019.js");
var l = require("./394629.js");
var u = require("./385914.js");
const c = {
  name: "AES-CBC"
};
exports.AES_CBC = c;
const d = {
  name: "HMAC",
  hash: "SHA-256"
};
function p(e, t) {
  if (e.length !== t) {
    throw (0, o.default)(`Signal expected ${t} bytes, given ${e.length}`);
  }
  return e;
}
function f(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4294967296;
  if (typeof e == "number" && t <= e && e < n && Math.floor(e) === e) {
    return e;
  }
  throw (0, o.default)(`Expected integer in range [${t}, ${n}), given ${String(e)}`);
}
exports.HMAC_SHA256 = d;