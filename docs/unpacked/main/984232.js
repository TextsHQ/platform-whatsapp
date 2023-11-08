Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeQueryLinkedGroupMixin = function (e, t) {
  const n = function (e) {
    const {
      queryLinkedType: t,
      queryLinkedJid: n,
      optionalSubGroupMixinArgs: i
    } = e;
    return (0, a.smax)("smax$any", null, (0, r.optionalMerge)(o.mergeOptionalSubGroupMixin, (0, a.smax)("query_linked", {
      type: (0, l.CUSTOM_STRING)(t),
      jid: (0, l.GROUP_JID)(n)
    }), i));
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("./790897.js");
var l = require("../app/716358.js");