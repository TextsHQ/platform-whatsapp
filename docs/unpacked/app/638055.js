var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetDisclosuresRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./133693.js");
var s = require("./140102.js");
var l = require("./44385.js");
var u = require("./565584.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetDisclosuresRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseGetDisclosuresResponseClientSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetDisclosuresResponseClientSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetDisclosuresResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetDisclosuresResponseClientError",
        value: p.value
      };
    }
    const f = (0, l.parseGetDisclosuresResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetDisclosuresResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetDisclosures", {
      ClientSuccess: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}