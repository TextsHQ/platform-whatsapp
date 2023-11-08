Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeParentOrSubGroupMixinGroup = function (e, t) {
  if (t.parentGroup) {
    return (0, i.mergeParentGroupMixin)(e, t.parentGroup);
  }
  if (t.subGroup) {
    return (0, a.mergeSubGroupMixin)(e, t.subGroup);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./196857.js");
var a = require("./933108.js");