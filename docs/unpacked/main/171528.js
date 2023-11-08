var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetSubjectRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./788337.js");
var i = require("./826224.js");
var u = require("./954977.js");
var s = require("./640129.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeSetSubjectRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseSetSubjectResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "SetSubjectResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseSetSubjectResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "SetSubjectResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseSetSubjectResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "SetSubjectResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SetSubject", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}