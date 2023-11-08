var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendReportMessagesRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./338428.js");
var i = require("./952889.js");
var u = require("./62503.js");
var s = require("./874760.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeReportMessagesRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseReportMessagesResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "ReportMessagesResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseReportMessagesResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "ReportMessagesResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseReportMessagesResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "ReportMessagesResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("ReportMessages", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}