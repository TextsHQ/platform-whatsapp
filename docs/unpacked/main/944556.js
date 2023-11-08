var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPromoteDemoteAdminRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./159818.js");
var i = require("./547365.js");
var u = require("./293833.js");
var s = require("./552736.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makePromoteDemoteAdminRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parsePromoteDemoteAdminResponseSuccessMultiAdmin)(a, n);
    if (r.success) {
      return {
        name: "PromoteDemoteAdminResponseSuccessMultiAdmin",
        value: r.value
      };
    }
    const f = (0, l.parsePromoteDemoteAdminResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "PromoteDemoteAdminResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parsePromoteDemoteAdminResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "PromoteDemoteAdminResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("PromoteDemoteAdmin", {
      SuccessMultiAdmin: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}