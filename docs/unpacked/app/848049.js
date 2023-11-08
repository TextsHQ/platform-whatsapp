Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMessageDeliveryUpdateMixin = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "issue");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(e, "server_id", 0, undefined);
  if (!a.success) {
    return a;
  }
  const o = (0, i.attrIntRange)(n.value, "code", 0, undefined);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    serverId: a.value,
    issueCode: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");