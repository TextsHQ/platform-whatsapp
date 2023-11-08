var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRevokeRequestCodeRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./259817.js");
var s = require("./880813.js");
var l = require("./39484.js");
var u = require("./404858.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeRevokeRequestCodeRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseRevokeRequestCodeResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "RevokeRequestCodeResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseRevokeRequestCodeResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "RevokeRequestCodeResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseRevokeRequestCodeResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "RevokeRequestCodeResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("RevokeRequestCode", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}