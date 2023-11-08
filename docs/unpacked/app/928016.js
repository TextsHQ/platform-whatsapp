Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAdminOrAllMembersOrUnknownAddModeMixinGroup = function (e) {
  const t = (0, i.parseAdminAddModeMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "AdminAddMode",
      value: t.value
    });
  }
  const n = (0, a.parseAllMembersAddModeMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "AllMembersAddMode",
      value: n.value
    });
  }
  const l = (0, o.parseUnknownAddModeMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "UnknownAddMode",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["AdminAddMode", "AllMembersAddMode", "UnknownAddMode"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./935765.js");
var a = require("./596092.js");
var o = require("./515347.js");
var s = require("./686310.js");