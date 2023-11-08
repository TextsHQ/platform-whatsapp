Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetMembershipApprovalRequestsRequestorFetchMixin = function (e) {
  const t = (0, i.literal)(i.attrString, e, "requestor_fetch", "true");
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    requestorFetch: t.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");