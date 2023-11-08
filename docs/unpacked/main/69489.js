var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetLinkedAccountsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./29592.js");
var i = require("./181473.js");
var u = require("./840661.js");
var s = require("./273842.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeGetLinkedAccountsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseGetLinkedAccountsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "GetLinkedAccountsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, i.parseGetLinkedAccountsResponseForbidden)(a, n);
    if (f.success) {
      return {
        name: "GetLinkedAccountsResponseForbidden",
        value: f.value
      };
    }
    const p = (0, l.parseGetLinkedAccountsResponseError)(a, n);
    if (p.success) {
      return {
        name: "GetLinkedAccountsResponseError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetLinkedAccounts", {
      Success: r,
      Forbidden: f,
      Error: p
    }));
  })).apply(this, arguments);
}