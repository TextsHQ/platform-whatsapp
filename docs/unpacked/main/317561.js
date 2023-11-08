var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPromoteDemoteRPC = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./252815.js");
var i = require("./267552.js");
var u = require("./935722.js");
var s = require("./13727.js");
var c = require("./966906.js");
var d = require("../app/590062.js");
var f = require("../app/216342.js");
function p() {
  return (p = (0, r.default)(function* (e, t) {
    const n = (0, c.makePromoteDemoteRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, s.parsePromoteDemoteResponseSuccessPromote)(a, n);
    if (r.success) {
      return {
        name: "PromoteDemoteResponseSuccessPromote",
        value: r.value
      };
    }
    const p = (0, u.parsePromoteDemoteResponseSuccessDemote)(a, n);
    if (p.success) {
      return {
        name: "PromoteDemoteResponseSuccessDemote",
        value: p.value
      };
    }
    const m = (0, l.parsePromoteDemoteResponseClientError)(a, n);
    if (m.success) {
      return {
        name: "PromoteDemoteResponseClientError",
        value: m.value
      };
    }
    const h = (0, i.parsePromoteDemoteResponseServerError)(a, n);
    if (h.success) {
      return {
        name: "PromoteDemoteResponseServerError",
        value: h.value
      };
    }
    throw new d.SmaxParsingFailure((0, f.errorMessageRpcParsing)("PromoteDemote", {
      SuccessPromote: r,
      SuccessDemote: p,
      ClientError: m,
      ServerError: h
    }));
  })).apply(this, arguments);
}