Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeOptionalSubGroupMixin = function (e, t) {
  const n = function (e) {
    const {
      anySubGroupJid: t
    } = e;
    return (0, a.smax)("smax$any", {
      sub_group_jid: (0, o.GROUP_JID)(t)
    });
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("../app/716358.js");