var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetMembershipApprovalRequestsResponseSuccess = function (e, t) {
  const n = (0, d.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, d.flattenedChildWithTag)(e, "membership_approval_requests");
  if (!r.success) {
    return r;
  }
  const o = (0, s.parseGetMembershipApprovalRequestsRequestorFetchMixin)(r.value);
  const c = (0, u.parseIQResultResponseMixin)(e, t);
  if (!c.success) {
    return c;
  }
  const f = (0, l.parseGroupAddressingModeMixin)(e);
  const _ = (0, d.mapChildrenWithTag)(r.value, "membership_approval_request", 0, 19999, p);
  if (!_.success) {
    return _;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    membershipApprovalRequestsGetMembershipApprovalRequestsRequestorFetchMixin: o.success ? o.value : null
  }, c.value), {}, {
    groupAddressingModeMixin: f.success ? f.value : null,
    membershipApprovalRequestsMembershipApprovalRequest: _.value
  }));
};
exports.parseGetMembershipApprovalRequestsResponseSuccessMembershipApprovalRequestsMembershipApprovalRequest = p;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./934216.js");
var s = require("./940933.js");
var l = require("./682751.js");
var u = require("./769758.js");
var c = require("./202804.js");
var d = require("./686310.js");
function p(e) {
  const t = (0, d.assertTag)(e, "membership_approval_request");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseGetMembershipApprovalRequestsMembershipApprovalRequestMixin)(e);
  if (!n.success) {
    return n;
  }
  const r = (0, c.parsePhoneNumberMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, n.value), {}, {
    phoneNumberMixin: r.success ? r.value : null
  }));
}