Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSubGroupHintMixin = function (e, t) {
  const n = function (e) {
    const {
      anyLinkedGroupsMembershipHint: t
    } = e;
    return (0, r.smax)("smax$any", {
      linked_groups_membership_hint: (0, a.GROUP_JID)(t)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");