var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetAccountNonceRPC = function () {
  return d.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./225636.js");
var i = require("./986543.js");
var u = require("./425761.js");
var s = require("../app/590062.js");
var c = require("../app/216342.js");
function d() {
  return (d = (0, r.default)(function* (e, t) {
    const n = (0, u.makeGetAccountNonceRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, i.parseGetAccountNonceResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "GetAccountNonceResponseSuccess",
        value: r.value
      };
    }
    const d = (0, l.parseGetAccountNonceResponseError)(a, n);
    if (d.success) {
      return {
        name: "GetAccountNonceResponseError",
        value: d.value
      };
    }
    throw new s.SmaxParsingFailure((0, c.errorMessageRpcParsing)("GetAccountNonce", {
      Success: r,
      Error: d
    }));
  })).apply(this, arguments);
}