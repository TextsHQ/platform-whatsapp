var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendUnsubscribeNewsletterRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./221096.js");
var i = require("./482406.js");
var u = require("./315010.js");
var s = require("./246022.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeUnsubscribeNewsletterRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseUnsubscribeNewsletterResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "UnsubscribeNewsletterResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseUnsubscribeNewsletterResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "UnsubscribeNewsletterResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseUnsubscribeNewsletterResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "UnsubscribeNewsletterResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("UnsubscribeNewsletter", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}