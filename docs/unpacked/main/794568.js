var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetReportedMessagesRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./87609.js");
var i = require("./544669.js");
var u = require("./412145.js");
var s = require("./399445.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeGetReportedMessagesRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseGetReportedMessagesResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "GetReportedMessagesResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseGetReportedMessagesResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "GetReportedMessagesResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseGetReportedMessagesResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "GetReportedMessagesResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetReportedMessages", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}