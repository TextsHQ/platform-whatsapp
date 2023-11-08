var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCancelGroupMembershipRequestsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./886822.js");
var i = require("./974975.js");
var u = require("./276332.js");
var s = require("./220914.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeCancelGroupMembershipRequestsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseCancelGroupMembershipRequestsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "CancelGroupMembershipRequestsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseCancelGroupMembershipRequestsResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "CancelGroupMembershipRequestsResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseCancelGroupMembershipRequestsResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "CancelGroupMembershipRequestsResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("CancelGroupMembershipRequests", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}