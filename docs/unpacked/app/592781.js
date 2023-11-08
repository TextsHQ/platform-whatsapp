Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterLinkedAccountsMetadataMixin = function (e) {
  const t = (0, i.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "linked_accounts");
  if (!n.success) {
    return n;
  }
  const a = (0, r.parseLinkedAccountsResponseMixin)(n.value);
  if (!a.success) {
    return a;
  }
  return a;
};
var r = require("./194747.js");
var i = require("./686310.js");