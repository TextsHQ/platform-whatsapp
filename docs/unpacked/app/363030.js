var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetInviteGroupInfoRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./921274.js");
var s = require("./359080.js");
var l = require("./515291.js");
var u = require("./546601.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetInviteGroupInfoRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetInviteGroupInfoResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetInviteGroupInfoResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetInviteGroupInfoResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetInviteGroupInfoResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetInviteGroupInfoResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetInviteGroupInfoResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetInviteGroupInfo", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}