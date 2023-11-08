var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendUnmuteRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./10034.js");
var s = require("./229061.js");
var l = require("./882146.js");
var u = require("./326058.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeUnmuteRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseUnmuteResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "UnmuteResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseUnmuteResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "UnmuteResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseUnmuteResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "UnmuteResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("Unmute", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}