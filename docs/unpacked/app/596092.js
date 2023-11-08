Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAllMembersAddModeMixin = function (e) {
  const t = (0, i.assertTag)(e, "member_add_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literalContent)(i.contentString, e, "all_member_add");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    elementValue: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");