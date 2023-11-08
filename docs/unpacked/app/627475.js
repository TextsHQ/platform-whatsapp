var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetNewsletterMetadataRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./971638.js");
var s = require("./137724.js");
var l = require("./608431.js");
var u = require("./997328.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeSetNewsletterMetadataRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseSetNewsletterMetadataResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "SetNewsletterMetadataResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseSetNewsletterMetadataResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "SetNewsletterMetadataResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseSetNewsletterMetadataResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "SetNewsletterMetadataResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SetNewsletterMetadata", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}