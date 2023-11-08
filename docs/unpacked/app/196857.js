Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeParentGroupMixin = function (e, t) {
  const n = function (e) {
    const {
      anyParentGroupJid: t
    } = e;
    return (0, r.smax)("smax$any", {
      parent_group_jid: (0, a.GROUP_JID)(t)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");