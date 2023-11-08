var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./239343.js");
var s = require("./642815.js");
var l = require("./278967.js");
var u = require("./918777.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeSetRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseSetResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "SetResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseSetResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "SetResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseSetResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "SetResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("Set", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}