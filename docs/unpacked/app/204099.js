var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMyAddOnsRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./197095.js");
var s = require("./819349.js");
var l = require("./717080.js");
var u = require("./918158.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeMyAddOnsRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseMyAddOnsResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "MyAddOnsResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseMyAddOnsResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "MyAddOnsResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseMyAddOnsResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "MyAddOnsResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("MyAddOns", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}