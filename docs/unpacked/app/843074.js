var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetNewsletterMessagesRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./884824.js");
var s = require("./647368.js");
var l = require("./636398.js");
var u = require("./101385.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetNewsletterMessagesRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetNewsletterMessagesResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetNewsletterMessagesResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetNewsletterMessagesResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetNewsletterMessagesResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetNewsletterMessagesResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetNewsletterMessagesResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetNewsletterMessages", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}