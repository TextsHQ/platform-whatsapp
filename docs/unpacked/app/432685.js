var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNewsletterRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./727477.js");
var s = require("./815459.js");
var l = require("./244882.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = (0, l.makeNewsletterRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, o.parseNewsletterResponseNegative)(r, n);
    if (i.success) {
      return {
        name: "NewsletterResponseNegative",
        value: i.value
      };
    }
    const d = (0, s.parseNewsletterResponseSuccess)(r, n);
    if (d.success) {
      return {
        name: "NewsletterResponseSuccess",
        value: d.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("Newsletter", {
      Negative: i,
      Success: d
    }));
  })).apply(this, arguments);
}