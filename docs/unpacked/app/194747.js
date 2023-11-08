Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLinkedAccountsResponseMixin = function (e) {
  const t = (0, a.assertTag)(e, "linked_accounts");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseLinkedAccountWebsiteMixin)(e);
  return (0, r.makeResult)({
    linkedAccountWebsiteMixin: n.success ? n.value : null
  });
};
var r = require("./135781.js");
var i = require("./805822.js");
var a = require("./686310.js");