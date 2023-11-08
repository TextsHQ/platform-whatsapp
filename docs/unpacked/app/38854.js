Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoParticipantAdminMixin = function (e) {
  const t = (0, o.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, o.attrStringEnum)(e, "type", i.ENUM_ADMIN_SUPERADMIN);
  if (!n.success) {
    return n;
  }
  const s = (0, a.parseGroupInfoParticipantAdminMixins)(e);
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    type: n.value,
    groupInfoParticipantAdminMixins: s.value
  });
};
var r = require("./135781.js");
var i = require("./699342.js");
var a = require("./959374.js");
var o = require("./686310.js");