Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeGroupMemberAddModeMixin = function (e, t) {
  const n = function (e) {
    const {
      adminOrAllMembersOrUnknownAddModeMixinGroupArgs: t
    } = e;
    return (0, a.smax)("smax$any", null, (0, o.mergeAdminOrAllMembersOrUnknownAddModeMixinGroup)((0, a.smax)("member_add_mode", null), t));
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("./50681.js");