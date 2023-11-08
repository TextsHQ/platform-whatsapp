var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preProcessUserPref = function (e, t) {
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
    const t = {
      privKey: e.staticKeyPair.privKey,
      pubKey: e.staticKeyPair.pubKey,
      recoveryToken: e.recoveryToken
    };
    return (0, i.default)(t, a.encodeB64);
  },
  WARoutingInfo: function (e) {
    const {
      domain: t,
      edgeRouting: n
    } = e;
    return {
      domain: t,
      edgeRouting: n ? (0, a.encodeB64)(n) : null
    };
  }
};