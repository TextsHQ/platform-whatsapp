var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetDescriptionRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./837139.js");
var i = require("./957678.js");
var u = require("./559682.js");
var s = require("./866832.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeSetDescriptionRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseSetDescriptionResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "SetDescriptionResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseSetDescriptionResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "SetDescriptionResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseSetDescriptionResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "SetDescriptionResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SetDescription", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}