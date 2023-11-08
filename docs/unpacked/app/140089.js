Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipRequestMethodAttributeMixin = function (e) {
  const t = (0, a.attrStringEnum)(e, "request_method", i.ENUM_INVITELINK_LINKEDGROUPJOIN_NONADMINADD);
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    requestMethod: t.value
  });
};
var r = require("./135781.js");
var i = require("./699342.js");
var a = require("./686310.js");