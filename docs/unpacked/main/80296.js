Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCreateParticipantAddedMixin = function (e) {
  const t = (0, l.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, l.optional)(l.attrStringEnum, e, "type", r.ENUM_ADMIN_SUPERADMIN);
  if (!n.success) {
    return n;
  }
  const i = (0, o.parseParticipantNotAddressableMixin)(e);
  return (0, a.makeResult)({
    type: n.value,
    participantNotAddressableMixin: i.success ? i.value : null
  });
};
var a = require("../app/135781.js");
var r = require("../app/699342.js");
var o = require("../app/37772.js");
var l = require("../app/686310.js");