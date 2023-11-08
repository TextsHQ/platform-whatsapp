var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMembershipRequestsActionRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./277098.js");
var i = require("./581213.js");
var u = require("./871085.js");
var s = require("./466102.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeMembershipRequestsActionRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseMembershipRequestsActionResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "MembershipRequestsActionResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseMembershipRequestsActionResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "MembershipRequestsActionResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseMembershipRequestsActionResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "MembershipRequestsActionResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("MembershipRequestsAction", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}