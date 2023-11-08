var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayBuffersEqual = function (e, t) {
  return o(new Uint8Array(e), new Uint8Array(t));
};
exports.randomNumberLessThan = function (e) {
  if (e !== (e | 0)) {
    throw (0, a.default)("bound must be int32");
  }
  if (e <= 0) {
    throw (0, a.default)("bound must not be positive");
  }
  const t = new Int32Array(1);
  const n = e * Math.floor((-1 >>> 1) / e);
  let r = -1;
  for (; r === -1;) {
    self.crypto.getRandomValues(t);
    const i = t[0] >>> 1;
    if (i < n) {
      r = i % e;
    }
  }
  return r;
};
exports.rawKeysEqual = function (e, t) {
  return e.length === 0 && t.length === 0 || (0, i.verify)(e, t);
};
exports.serializedPubKeysEqual = function (e, t) {
  return e.length === 0 && t.length === 0 || (0, i.verify)(e, t);
};
exports.uint8ArraysEqual = o;
var i = require("./194121.js");
var a = r(require("./415227.js"));
function o(e, t) {
  return e.length === 0 && t.length === 0 || (0, i.verify)(e, t);
}