Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParentOrSubGroupMixinGroup = function (e) {
  const t = (0, i.parseParentGroupMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "ParentGroup",
      value: t.value
    });
  }
  const n = (0, a.parseSubGroupMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "SubGroup",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["ParentGroup", "SubGroup"], [t, n]);
};
var r = require("./135781.js");
var i = require("./10188.js");
var a = require("./34428.js");
var o = require("./686310.js");