var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetAllSubscribedNewslettersRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./615754.js");
var s = require("./452394.js");
var l = require("./800786.js");
var u = require("./893849.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetAllSubscribedNewslettersRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetAllSubscribedNewslettersResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetAllSubscribedNewslettersResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetAllSubscribedNewslettersResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetAllSubscribedNewslettersResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetAllSubscribedNewslettersResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetAllSubscribedNewslettersResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetAllSubscribedNewsletters", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}