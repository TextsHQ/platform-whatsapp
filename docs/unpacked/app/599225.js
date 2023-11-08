var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postProcessUserPref = function (e, t) {
  let n = t;
  const r = o[e];
  if (r != null) {
    n = r(t);
  }
  return n;
};
var i = r(require("../vendor/66604.js"));
var a = require("./417405.js");
const o = {
  WANoiseInfo: function (e) {
    const t = (0, i.default)(e, a.decodeB64);
    return {
      recoveryToken: t.recoveryToken,
      staticKeyPair: {
        pubKey: t.pubKey,
        privKey: t.privKey
      }
    };
  },
  WARoutingInfo: function (e) {
    const {
      domain: t,
      edgeRouting: n
    } = e;
    return {
      domain: t,
      edgeRouting: n != null ? (0, a.decodeB64)(n) : null
    };
  }
};