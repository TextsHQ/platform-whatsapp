var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetMembershipApprovalRequestsRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./581946.js");
var s = require("./113196.js");
var l = require("./588177.js");
var u = require("./873226.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetMembershipApprovalRequestsRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetMembershipApprovalRequestsResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetMembershipApprovalRequestsResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetMembershipApprovalRequestsResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetMembershipApprovalRequestsResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetMembershipApprovalRequestsResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetMembershipApprovalRequestsResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetMembershipApprovalRequests", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}