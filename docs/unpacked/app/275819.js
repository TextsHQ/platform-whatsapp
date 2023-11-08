var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGroupReportRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./491539.js");
var s = require("./880640.js");
var l = require("./524946.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = (0, l.makeGroupReportRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseGroupReportResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GroupReportResponseSuccess",
        value: i.value
      };
    }
    const d = (0, o.parseGroupReportResponseError)(r, n);
    if (d.success) {
      return {
        name: "GroupReportResponseError",
        value: d.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("GroupReport", {
      Success: i,
      Error: d
    }));
  })).apply(this, arguments);
}