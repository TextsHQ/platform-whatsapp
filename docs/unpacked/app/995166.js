var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetNewsletterRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./569107.js");
var s = require("./351743.js");
var l = require("./610351.js");
var u = require("./883393.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetNewsletterRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetNewsletterResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetNewsletterResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetNewsletterResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetNewsletterResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetNewsletterResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetNewsletterResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetNewsletter", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}