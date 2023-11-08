var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequestSilentNonceRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./886606.js");
var s = require("./936082.js");
var l = require("./895852.js");
var u = require("./323353.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeRequestSilentNonceRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseRequestSilentNonceResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "RequestSilentNonceResponseSuccess",
        value: i.value
      };
    }
    const p = (0, s.parseRequestSilentNonceResponseRecoveryRequired)(r, n);
    if (p.success) {
      return {
        name: "RequestSilentNonceResponseRecoveryRequired",
        value: p.value
      };
    }
    const f = (0, o.parseRequestSilentNonceResponseError)(r, n);
    if (f.success) {
      return {
        name: "RequestSilentNonceResponseError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("RequestSilentNonce", {
      Success: i,
      RecoveryRequired: p,
      Error: f
    }));
  })).apply(this, arguments);
}