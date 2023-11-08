Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAdminOrAllMembersOrUnknownAddModeMixinGroup = function (e, t) {
  if (t.isAdminAddMode) {
    return (0, r.mergeAdminAddModeMixin)(e);
  }
  if (t.isAllMembersAddMode) {
    return (0, o.mergeAllMembersAddModeMixin)(e);
  }
  if (t.unknownAddMode) {
    return (0, l.mergeUnknownAddModeMixin)(e, t.unknownAddMode);
  }
  throw new a.SmaxMixinGroupExhaustiveError();
};
var a = require("../app/715626.js");
var r = require("./541010.js");
var o = require("./990313.js");
var l = require("./153159.js");