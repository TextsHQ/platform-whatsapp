var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetGroupInfoRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./486550.js");
var s = require("./925206.js");
var l = require("./661521.js");
var u = require("./936149.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetGroupInfoRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetGroupInfoResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetGroupInfoResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetGroupInfoResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetGroupInfoResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetGroupInfoResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetGroupInfoResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetGroupInfo", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}