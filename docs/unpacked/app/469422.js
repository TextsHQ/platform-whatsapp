var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllIdentityKeysBytes = d;
exports.getAllIdentityKeysBytesOrThrow = function () {
  return c.apply(this, arguments);
};
exports.identityKeysToBinary = function (e) {
  const t = new a.Binary();
  e.sort(u).forEach(e => {
    t.writeByteArray(e);
  });
  return t.readByteArray();
};
var i = r(require("../vendor/348926.js"));
var a = require("./904704.js");
var o = require("./999821.js");
var s = require("./76256.js");
var l = r(require("./556869.js"));
function u(e, t) {
  for (let n = 0; n < e.length && n < t.length; ++n) {
    if (e[n] !== t[n]) {
      return e[n] - t[n];
    }
  }
  return e.length - t.length;
}
function c() {
  return (c = (0, i.default)(function* (e) {
    return (yield d(e)).map((t, n) => {
      if (t == null) {
        throw (0, l.default)(`getAllIdentityKeys: missing identity key for device ${String(e[n])}`);
      }
      return t;
    });
  })).apply(this, arguments);
}
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    return (yield (0, s.getPersistSignalProtocolStore)().bulkLoadIdentityKey(e.map(e => (0, o.createSignalAddress)(e).toString()))).map(e => e == null ? null : new Uint8Array((0, o.strToBuffer)(e)));
  })).apply(this, arguments);
}