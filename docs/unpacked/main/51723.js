var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetPropertyRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./174970.js");
var i = require("./31473.js");
var u = require("./892014.js");
var s = require("./492041.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeSetPropertyRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseSetPropertyResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "SetPropertyResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseSetPropertyResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "SetPropertyResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseSetPropertyResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "SetPropertyResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SetProperty", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}