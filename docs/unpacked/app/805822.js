Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLinkedAccountWebsiteMixin = function (e) {
  const t = (0, i.assertTag)(e, "linked_accounts");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "linked_account");
  if (!n.success) {
    return n;
  }
  const a = (0, i.literal)(i.attrString, n.value, "type", "website");
  if (!a.success) {
    return a;
  }
  const o = (0, i.attrString)(n.value, "url");
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    linkedAccountType: a.value,
    linkedAccountUrl: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");