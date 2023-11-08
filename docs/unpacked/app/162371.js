var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genCurrentSessionId = function () {
  return f.apply(this, arguments);
};
exports.genSessionId = _;
var i = r(require("../vendor/348926.js"));
var a = require("./904704.js");
var o = require("./517301.js");
var s = r(require("./670983.js"));
var l = require("./403206.js");
var u = require("./999821.js");
var c = require("./76256.js");
var d = require("./459857.js");
var p = r(require("./556869.js"));
function f() {
  return (f = (0, i.default)(function* () {
    const e = (0, u.createSignalAddress)((0, d.getMeUser)()).toString();
    const t = (0, s.default)(yield (0, c.getPersistSignalProtocolStore)().loadIdentityKey(e), "yield getPersistSignalProtocolStore().loadIdentityKey(primaryDeviceIdentifier)");
    const n = (0, l.toCurveKeyPubKey)((0, u.strToBuffer)(t));
    const r = (0, s.default)(yield (0, c.getPersistSignalProtocolStore)().getIdentityKeyPair(), "yield getPersistSignalProtocolStore().getIdentityKeyPair()");
    return _(n, (0, l.toCurveKeyPubKey)(r.pubKey));
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t) {
    if (e.byteLength !== 32) {
      throw (0, p.default)(`genSessionId: primary identity public key is ${e.byteLength} bytes, should be 32!`);
    }
    if (t.byteLength !== 32) {
      throw (0, p.default)(`genSessionId: companion identity public key is ${e.byteLength} bytes, should be 32!`);
    }
    const n = new a.Binary();
    n.writeBuffer(e);
    n.write("_".charCodeAt(0));
    n.writeBuffer(t);
    const r = n.readByteArray();
    return yield (0, o.sha256Base64)(r);
  })).apply(this, arguments);
}